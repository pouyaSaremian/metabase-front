#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import fg from "fast-glob";
import * as cheerio from "cheerio";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src");
const PAGES_DIR = path.join(SRC_DIR, "pages");
const SSS_DIR = path.join(SRC_DIR, "sss");
const PUBLIC_DIR = path.join(ROOT, "public");
const LOG_PATH = path.join(ROOT, "log.txt");

/**
 * Utility: ensure a directory exists (mkdir -p)
 */
async function ensureDir(dirPath) {
    await fs.mkdir(dirPath, { recursive: true });
}

/**
 * Copy a file from source to destination, creating directories as needed.
 */
async function copyFileSafe(fromPath, toPath) {
    await ensureDir(path.dirname(toPath));
    await fs.copyFile(fromPath, toPath);
}

/**
 * Map an Astro page file path (under src/pages) to the corresponding HTML path under src/sss.
 * Examples:
 *   src/pages/features/drill-through.astro -> src/sss/features/drill-through.html
 *   src/pages/dashboards/index.astro -> src/sss/dashboards/index.html
 */
function mapAstroToHtmlPath(astroFilePath) {
    const rel = path.relative(PAGES_DIR, astroFilePath); // e.g., features/drill-through.astro
    const parsed = path.parse(rel);
    // Keep directory and filename; if filename is 'index', keep it; else same name
    const htmlFileName = `${parsed.name}.html`;
    return path.join(SSS_DIR, parsed.dir, htmlFileName);
}

/**
 * Fallback: find an HTML file by basename anywhere under src/sss.
 * Tries to prefer matches that include the same directory segments as the Astro page.
 */
async function findHtmlByBasename(htmlBasename, preferredDirSegments) {
    const matches = await fg([`**/${htmlBasename}`], { cwd: SSS_DIR, onlyFiles: true });
    if (!matches.length) return null;
    if (preferredDirSegments) {
        const preferred = matches.find((m) => preferredDirSegments.every((seg) => m.includes(seg)));
        if (preferred) return path.join(SSS_DIR, preferred);
    }
    return path.join(SSS_DIR, matches[0]);
}

/**
 * Extract title and description from HTML <head>.
 */
function extractMeta($, finalHtmlPath) {
    const title = ($("head > title").first().text() || "").trim();
    const description = (
        $('head > meta[name="description"]').attr("content") || ""
    ).trim();
    let canonical = ($('head link[rel="canonical"]').attr("href") || "").trim();
    const author = ($('head meta[name="author"]').attr("content") || "").trim();
    const keywords = ($('head meta[name="keywords"]').attr("content") || "").trim();
    const ogTitle = ($('head meta[property="og:title"]').attr("content") || "").trim();
    const ogDescription = (
        $('head meta[property="og:description"]').attr("content") || ""
    ).trim();
    let ogImage = ($('head meta[property="og:image"]').attr("content") || "").trim();
    let ogUrl = ($('head meta[property="og:url"]').attr("content") || "").trim();
    const ogType = ($('head meta[property="og:type"]').attr("content") || "").trim();
    const ogSiteName = (
        $('head meta[property="og:site_name"]').attr("content") || ""
    ).trim();
    const twitterSite = ($('head meta[name="twitter:site"]').attr("content") || "").trim();
    const twitterTitle = ($('head meta[name="twitter:title"]').attr("content") || "").trim();
    const twitterDescription = (
        $('head meta[name="twitter:description"]').attr("content") || ""
    ).trim();
    const twitterCard = ($('head meta[name="twitter:card"]').attr("content") || "").trim();
    let twitterImage = ($('head meta[name="twitter:image"]').attr("content") || "").trim();
    const twitterCreator = ($('head meta[name="twitter:creator"]').attr("content") || "").trim();

    // Compute canonical route path when missing or relative
    if (!canonical || !/^https?:\/\//i.test(canonical)) {
        const relFromSss = path.relative(SSS_DIR, finalHtmlPath).split(path.sep).join("/");
        let webPath = "/" + relFromSss;
        if (/\/index\.html$/i.test(webPath)) {
            webPath = webPath.replace(/\/index\.html$/i, "/");
        } else if (/\.html$/i.test(webPath)) {
            webPath = webPath.replace(/\.html$/i, "");
        }
        canonical = webPath.replace(/\/+/g, "/");
    }

    // Fix missing slash in metabase image URLs
    const fixMbImg = (u) =>
        u && /https?:\/\/www\.metabase\.comimages\//i.test(u)
            ? u.replace(/www\.metabase\.comimages\//i, "www.metabase.com/images/")
            : u;
    ogImage = fixMbImg(ogImage);
    twitterImage = fixMbImg(twitterImage);
    if (!ogUrl) ogUrl = canonical;

    const seo = {
        title: title || undefined,
        description: description || undefined,
        canonical: canonical || undefined,
        author: author || undefined,
        keywords: keywords || undefined,
        og: {
            title: ogTitle || undefined,
            description: ogDescription || undefined,
            image: ogImage || undefined,
            url: ogUrl || undefined,
            type: ogType || undefined,
            site_name: ogSiteName || undefined,
        },
        twitter: {
            site: twitterSite || undefined,
            title: twitterTitle || undefined,
            description: twitterDescription || undefined,
            card: twitterCard || undefined,
            image: twitterImage || undefined,
            creator: twitterCreator || undefined,
        },
    };
    return { title, description, seo };
}

/**
 * Clean body HTML by removing header/footer/nav elements that are part of the static shell.
 * This uses heuristics to remove common wrappers by tag or id/class names.
 */
function extractCleanBody($) {
    // Start from body children or main content wrappers
    // Remove global site chrome likely present in sss HTML
    const removeSelectors = [
        "header",
        "footer",
        "nav",
        "#header",
        "#footer",
        ".site-header",
        ".site-footer",
        ".main-nav",
        "script",
        "link",
        "style",
    ];

    removeSelectors.forEach((sel) => $(sel).remove());

    // Prefer <main> if present
    const $main = $("main").first();
    if ($main.length) {
        return $main.html() || "";
    }
    // Else use body inner HTML
    return $("body").html() || "";
}

/**
 * Rewrite asset URLs in the HTML content to point to Astro public paths.
 * Also returns a list of files that should be copied into public/.
 */
function rewriteAssetsAndCollect(contentHtml, htmlFilePath) {
    // Load as a fragment, not a full document
    const $ = cheerio.load(contentHtml, { decodeEntities: false });
    const assetSrcAttrs = [
        { tag: "img", attr: "src" },
        { tag: "script", attr: "src" },
        { tag: "link", attr: "href" },
        { tag: "source", attr: "src" },
        { tag: "video", attr: "poster" },
    ];

    const dirOfHtml = path.dirname(htmlFilePath);
    const filesToCopy = [];

    for (const { tag, attr } of assetSrcAttrs) {
        $(tag).each((_, el) => {
            const $el = $(el);
            const val = ($el.attr(attr) || "").trim();
            if (!val) return;
            // Skip absolute URLs and hash/mailto/tel
            if (/^(https?:)?\/\//i.test(val)) return;
            if (/^(#|mailto:|tel:)/i.test(val)) return;

            // Determine filesystem source path within sss
            // Root-relative paths like "/images/foo.png" should map to `${SSS_DIR}/images/foo.png`
            let sourcePath = val.startsWith("/")
                ? path.join(SSS_DIR, val.slice(1))
                : path.resolve(dirOfHtml, val);

            // Try URL-decoded variant if original does not exist
            let tryDecoded = false;
            const decodedVal = decodeURI(val);
            if (decodedVal !== val) {
                const candidate = val.startsWith("/")
                    ? path.join(SSS_DIR, decodedVal.slice(1))
                    : path.resolve(dirOfHtml, decodedVal);
                tryDecoded = true;
                sourcePath = candidate;
            }

            // Compute destination under public preserving path relative to SSS root
            const relFromSss = path.relative(SSS_DIR, sourcePath);
            const destPublicPath = path.join(PUBLIC_DIR, relFromSss);

            // Queue copy; actual copy errors will be logged by caller
            filesToCopy.push({ from: sourcePath, to: destPublicPath });

            // Repoint HTML src/href to "/<relFromSss>"
            const webPath = "/" + relFromSss.split(path.sep).join("/");
            $el.attr(attr, webPath);
        });
    }

    // Rewrite internal page links in <a href> to remove .html and /index.html for Astro routing
    $("a").each((_, el) => {
        const $el = $(el);
        const href = ($el.attr("href") || "").trim();
        if (!href) return;
        // Ignore external and non-http links
        if (/^(https?:)?\/\//i.test(href)) return;
        if (/^(#|mailto:|tel:|javascript:)/i.test(href)) return;

        // Split off query and hash to preserve
        const match = href.match(/^[^?#]+/);
        const pathPart = match ? match[0] : href;
        const queryAndHash = href.slice(pathPart.length);

        // Compute filesystem source path within sss to normalize to a static root path
        let sourcePath = pathPart.startsWith("/")
            ? path.join(SSS_DIR, pathPart.slice(1))
            : path.resolve(path.dirname(htmlFilePath), pathPart);
        const relFromSss = path.relative(SSS_DIR, sourcePath);
        let webPath = "/" + relFromSss.split(path.sep).join("/");

        // Remove /index.html and .html for Astro routing
        if (/\/index\.html$/i.test(webPath)) {
            webPath = webPath.replace(/\/index\.html$/i, "/");
        } else if (/\.html$/i.test(webPath)) {
            webPath = webPath.replace(/\.html$/i, "");
        }

        // Clean up duplicate slashes
        webPath = webPath.replace(/\/+/g, "/");

        $el.attr("href", webPath + queryAndHash);
    });

    // Sanitize inline SVG to avoid Astro/HTML parsing issues
    sanitizeSvgContent($);

  // Sanitize code/pre blocks so JS-like braces and angle brackets don't break Astro parsing
  sanitizeCodeBlocks($);

  // Escape curly braces in all text nodes to avoid Astro expression parsing
  sanitizeTextNodes($);

    // Return only the top-level nodes' HTML (no implicit <html><head><body>)
    let cleanedFragmentHtml = $.root().children().toString();

    // As a last resort, strip any accidental <html><head></head><body> wrappers
    cleanedFragmentHtml = stripOuterHtmlWrappers(cleanedFragmentHtml);
    // Remove HTML comments
    cleanedFragmentHtml = removeHtmlComments(cleanedFragmentHtml);
    return { html: cleanedFragmentHtml, filesToCopy };
}

/**
 * Remove outer <html><head>..</head><body> .. </body></html> wrappers if they slipped in.
 */
function stripOuterHtmlWrappers(html) {
    if (!html) return html;
    let out = html;
    out = out.replace(/^[\s\n\r]*<html[^>]*>\s*<head[^>]*>.*?<\/head>\s*<body[^>]*>/is, "");
    out = out.replace(/<\/body>\s*<\/html>[\s\n\r]*$/is, "");
    return out;
}

/**
 * Remove HTML comments, including multi-line ones.
 */
function removeHtmlComments(html) {
    return html.replace(/<!--([\s\S]*?)-->/g, "");
}

/**
 * Fix common SVG issues for Astro:
 * - Replace colon attributes (e.g., xlink:href) with kebab (xlink-href)
 * - Escape curly braces in attribute values which can be misread as JSX/templating
 */
function sanitizeSvgContent($) {
    $("svg, svg *").each((_, el) => {
        const attribs = el.attribs || {};
        for (const [name, value] of Object.entries(attribs)) {
            // Rename attributes with colon to kebab
            if (name.includes(":")) {
                const newName = name.replace(/:/g, "-");
                $(el).attr(newName, value);
                $(el).removeAttr(name);
            }
            // Escape curly braces in attribute values
            if (typeof value === "string" && /[{}]/.test(value)) {
                const escaped = value.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
                $(el).attr(name.replace(/:/g, "-"), escaped);
            }
        }
    });
}

/**
 * Escape braces and angle brackets inside <pre> and <code> blocks
 * to prevent Astro/HTML parsers from treating them as expressions/tags.
 */
function sanitizeCodeBlocks($) {
    $("pre, code").each((_, el) => {
        const $el = $(el);
        // Use inner HTML to preserve existing entities
        let html = $el.html() || "";
        // First, ensure < and > are entities
        html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        // Then escape curly braces
        html = html.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
        // Also escape ${
        html = html.replace(/\$&#123;/g, "&#36;&#123;");
        $el.html(html);
    });
}

/**
 * Replace { and } in all text nodes with entities to avoid Astro interpreting them as expressions
 */
function sanitizeTextNodes($) {
    $("*")
        .contents()
        .each((_, node) => {
            if (node.type === "text" && node.data) {
                // Skip if inside script or style
                const parentTag = node.parent && node.parent.tagName ? node.parent.tagName.toLowerCase() : "";
                if (parentTag === "script" || parentTag === "style") return;
                node.data = node.data.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
            }
        });
}

/**
 * Generate Astro page content by wrapping clean HTML inside Base layout.
 */
function buildAstroContent({ title, description, innerHtml }) {
    return `---\nimport Base from "../../layouts/Base.astro";\nconst title = ${JSON.stringify(title)};\nconst description = ${JSON.stringify(description)};\n---\n\n<Base {title} {description}>\n${innerHtml}\n</Base>\n`;
}

/**
 * Some pages (like docs/latest/...) are nested deeper; compute proper relative import to Base.
 */
function computeBaseImportPath(astroFilePath) {
    const relToLayouts = path.relative(path.dirname(astroFilePath), path.join(SRC_DIR, "layouts"));
    return path.join(relToLayouts, "Base.astro").split(path.sep).join("/");
}

function buildAstroContentWithDynamicImport({ astroFilePath, title, description, innerHtml, seo }) {
    const baseImport = computeBaseImportPath(astroFilePath);
    const seoSerialized = JSON.stringify(seo ?? {});
    return `---\nimport Base from "${baseImport}";\nconst title = ${JSON.stringify(title)};\nconst description = ${JSON.stringify(description)};\nconst seo = ${seoSerialized};\n---\n\n<Base {title} {description} {seo}>\n${innerHtml}\n</Base>\n`;
}

async function writeLog(lines) {
    const text = lines.join("\n") + "\n";
    await fs.writeFile(LOG_PATH, text, "utf8");
}

async function main() {
    const failures = [];
    const processed = [];

  // Optional filter: pass --only <relative/path/or/glob> to process a subset
  const onlyIdx = process.argv.findIndex((a) => a === "--only");
  const onlyArg = onlyIdx !== -1 ? process.argv[onlyIdx + 1] : undefined;
  const patterns = onlyArg ? [onlyArg] : ["**/*.astro"];
  const astroFiles = await fg(patterns, { cwd: PAGES_DIR, dot: false, onlyFiles: true });

    for (const relAstro of astroFiles) {
        const astroPath = path.join(PAGES_DIR, relAstro);
        const htmlPath = mapAstroToHtmlPath(astroPath);

        try {
            // Ensure matching HTML exists; attempt fallback search if missing and not index
            let finalHtmlPath = htmlPath;
            const htmlExists = await fs
                .access(finalHtmlPath)
                .then(() => true)
                .catch(() => false);
            if (!htmlExists) {
                const parsed = path.parse(relAstro);
                if (parsed.name !== "index") {
                    const fallback = await findHtmlByBasename(`${parsed.name}.html`, parsed.dir ? parsed.dir.split(path.sep) : undefined);
                    if (fallback) {
                        finalHtmlPath = fallback;
                    } else {
                        failures.push(`MISSING_HTML\t${relAstro}\t${path.relative(ROOT, htmlPath)}`);
                        continue;
                    }
                } else {
                    failures.push(`MISSING_HTML\t${relAstro}\t${path.relative(ROOT, htmlPath)}`);
                    continue;
                }
            }

            const raw = await fs.readFile(finalHtmlPath, "utf8");
            const $doc = cheerio.load(raw, { decodeEntities: false });

            const { title, description, seo } = extractMeta($doc, finalHtmlPath);
            const inner = extractCleanBody($doc);
            const { html: rewritten, filesToCopy } = rewriteAssetsAndCollect(inner, finalHtmlPath);

            // Copy assets to public
            for (const { from, to } of filesToCopy) {
                try {
                    await copyFileSafe(from, to);
                } catch (err) {
                    failures.push(`ASSET_COPY_FAILED\t${relAstro}\t${from} -> ${to}\t${err?.message || String(err)}`);
                }
            }

            const astroOut = buildAstroContentWithDynamicImport({ astroFilePath: astroPath, title, description, innerHtml: rewritten, seo });
            // Always write unformatted first to avoid losing work if Prettier crashes
            await fs.writeFile(astroPath, astroOut, "utf8");
            // Attempt formatting only for reasonably sized files to avoid WASM OOM
            const SIZE_LIMIT_BYTES = 200_000; // ~200 KB
            if (Buffer.byteLength(astroOut, "utf8") <= SIZE_LIMIT_BYTES) {
                try {
                    const config = await prettier.resolveConfig(astroPath).catch(() => null);
                    const formatted = await prettier.format(astroOut, {
                        ...(config || {}),
                        filepath: astroPath,
                        plugins: ["prettier-plugin-astro"],
                    });
                    await fs.writeFile(astroPath, formatted, "utf8");
                } catch (e) {
                    failures.push(`PRETTIER_FAILED\t${path.relative(PAGES_DIR, astroPath)}\t${e?.message || String(e)}`);
                }
            } else {
                failures.push(`PRETTIER_SKIPPED_SIZE\t${path.relative(PAGES_DIR, astroPath)}\t>${SIZE_LIMIT_BYTES} bytes`);
            }
            processed.push(relAstro);
        } catch (err) {
            failures.push(`PROCESS_FAILED\t${relAstro}\t${err?.message || String(err)}`);
        }
    }

    const lines = [
        `Processed: ${processed.length}`,
        ...processed.map((p) => `OK\t${p}`),
        `Failures: ${failures.length}`,
        ...failures,
    ];
    await writeLog(lines);

    // eslint-disable-next-line no-console
    console.log(`Done. Processed ${processed.length}, failures ${failures.length}. See log at ${LOG_PATH}`);
}

main().catch(async (err) => {
    const msg = err?.stack || err?.message || String(err);
    await writeLog(["FATAL", msg]);
    // eslint-disable-next-line no-console
    console.error(msg);
    process.exit(1);
});


