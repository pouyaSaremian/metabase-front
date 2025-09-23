#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import fg from "fast-glob";
import * as parse5 from "parse5";

const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY || process.env.GCLOUD_API_KEY || process.env.GOOGLE_API_KEY || "";
const TRANSLATE_TARGET = "fa"; // Persian

async function translateBatch(texts, targetLang) {
    if (!texts || !texts.length) return {};
    const endpoint = "https://translation.googleapis.com/language/translate/v2";
    // Google Translate v2 supports q as repeated params; for POST JSON, use q:[]
    const body = {
        q: texts,
        target: targetLang,
        format: "text",
    };
    const url = `${endpoint}?key=${encodeURIComponent(GOOGLE_TRANSLATE_API_KEY)}`;
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        throw new Error(`Translate API failed: ${res.status} ${res.statusText}`);
    }
    const json = await res.json();
    const translations = json?.data?.translations || [];
    const map = {};
    for (let i = 0; i < texts.length; i++) {
        map[texts[i]] = translations[i]?.translatedText ?? null;
    }
    return map;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src");
const PAGES_DIR = path.join(SRC_DIR, "pages");

function stripFrontmatter(source) {
    // Remove leading Astro frontmatter block delimited by --- ... ---
    if (!source.startsWith("---")) return source;
    const end = source.indexOf("\n---", 3);
    if (end === -1) return source;
    const after = source.slice(end + 4); // skip trailing --- and newline
    return after;
}

function sanitizeAstroSyntax(source) {
    // Replace Astro/JS expressions like { ... } to avoid parser confusion
    // Keep line/column counts stable by replacing with spaces of same length
    return source.replace(/\{[\s\S]*?\}/g, (m) => " ".repeat(m.length));
}

// Note: previously built a CSS-like selector; no longer needed.

function collectTextNodes(node, out, ancestors = []) {
    if (!node) return;
    const nodeName = node.nodeName;
    // Skip script/style and their descendants
    if (nodeName && (nodeName.toLowerCase?.() === "script" || nodeName.toLowerCase?.() === "style")) {
        return;
    }
    if (nodeName === "#text") {
        const raw = node.value ?? node.nodeValue ?? "";
        const text = (raw || "").replace(/\s+/g, " ").trim();
        if (text) {
            const parent = ancestors[ancestors.length - 1];
            const loc = node.sourceCodeLocation || node.__location;
            out.push({
                text,
                tag: parent?.tagName || parent?.nodeName || undefined,
                id: parent?.attrs?.find((a) => a.name === "id")?.value,
                startLine: loc?.startLine ?? undefined,
                endLine: loc?.endLine ?? undefined,
                startCol: loc?.startCol ?? undefined,
                endCol: loc?.endCol ?? undefined,
                translation: null,
            });
        }
        return;
    }
    const children = node.childNodes || [];
    for (const child of children) {
        collectTextNodes(child, out, [...ancestors, node]);
    }
}

async function processAstroFile(filePath) {
    const src = await fs.readFile(filePath, "utf8");
    const withoutFrontmatter = stripFrontmatter(src);
    const sanitized = sanitizeAstroSyntax(withoutFrontmatter);
    // Parse as a fragment to avoid html/head/body wrappers
    const fragment = parse5.parseFragment(sanitized, { sourceCodeLocationInfo: true });
    const items = [];
    collectTextNodes(fragment, items, []);

    // Translate unique texts to Persian if API key present
    if (GOOGLE_TRANSLATE_API_KEY) {
        const uniqueTexts = Array.from(new Set(items.map((i) => i.text)));
        const translatedMap = await translateBatch(uniqueTexts, TRANSLATE_TARGET).catch(() => ({}));
        for (const it of items) {
            if (translatedMap && Object.prototype.hasOwnProperty.call(translatedMap, it.text)) {
                it.translation = translatedMap[it.text] || null;
            }
        }
    }
    const rel = path.relative(PAGES_DIR, filePath);
    const outPath = path.join(path.dirname(filePath), `${path.parse(filePath).name}.texts.json`);
    const payload = {
        file: rel.split(path.sep).join("/"),
        count: items.length,
        items,
    };
    const json = JSON.stringify(payload, null, 2);
    await fs.writeFile(outPath, json, "utf8");
    return { file: rel, outPath, count: items.length };
}

async function main() {
    // Optional: --only pattern relative to src/pages
    const onlyIdx = process.argv.findIndex((a) => a === "--only");
    const only = onlyIdx !== -1 ? process.argv[onlyIdx + 1] : undefined;
    const patterns = only ? [only] : ["**/*.astro"];
    const files = await fg(patterns, { cwd: PAGES_DIR, onlyFiles: true, dot: false });
    const results = [];
    for (const rel of files) {
        const abs = path.join(PAGES_DIR, rel);
        try {
            const res = await processAstroFile(abs);
            results.push({ status: "OK", ...res });
        } catch (err) {
            results.push({ status: "ERR", file: rel, error: err?.message || String(err) });
        }
    }
    // eslint-disable-next-line no-console
    console.log(`Extracted texts for ${results.filter(r => r.status === 'OK').length}/${files.length} files`);
}

main().catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e?.stack || e?.message || String(e));
    process.exit(1);
});


