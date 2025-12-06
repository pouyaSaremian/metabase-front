#!/usr/bin/env node

/**
 * Analyze generated learn markdown files and add a `toc` array
 * to the frontmatter for each page, based on markdown headings.
 *
 * Usage (from project root):
 *   node scripts/addLearnToc.js
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load } from "cheerio";

/**
 * Get the project root directory by finding the directory that contains package.json.
 * This works regardless of where the script is run from.
 */
const getProjectRoot = () => {
    // Get the directory where this script is located
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Script is in scripts/, so go up one level to get project root
    const scriptDir = __dirname;
    const projectRoot = path.resolve(scriptDir, "..");

    return projectRoot;
};

const PROJECT_ROOT = getProjectRoot();
const LEARN_MARKDOWN_ROOT = path.join(PROJECT_ROOT, "src", "content", "learn");
const LEARN_STATIC_ROOT = path.join(PROJECT_ROOT, "static", "learn");

const isMarkdownFile = (fileName) => fileName.toLowerCase().endsWith(".md");

const walkDir = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const nested = await walkDir(fullPath);
            files.push(...nested);
        } else if (entry.isFile() && isMarkdownFile(entry.name)) {
            files.push(fullPath);
        }
    }

    return files;
};

const parseFrontmatterAndBody = (raw) => {
    if (!raw.startsWith("---")) {
        return { frontmatter: null, body: raw };
    }

    const endIndex = raw.indexOf("\n---", 3);
    if (endIndex === -1) {
        return { frontmatter: null, body: raw };
    }

    const frontmatterBlock = raw.slice(3, endIndex).trimEnd();
    const body = raw.slice(endIndex + 4).replace(/^\s+/, "");

    return { frontmatter: frontmatterBlock, body };
};

const slugifyHeading = (title) => {
    return title
        .trim()
        .toLowerCase()
        // Remove backticks and markdown emphasis markers.
        .replace(/[`*_]/g, "")
        // Replace non-word characters with hyphens.
        .replace(/[^a-z0-9\u0600-\u06FF]+/gi, "-")
        // Collapse multiple hyphens.
        .replace(/-+/g, "-")
        // Trim leading/trailing hyphens.
        .replace(/^-|-$/g, "");
};

const extractTocFromBody = (body) => {
    const lines = body.split("\n");
    const toc = [];

    let inCodeBlock = false;
    let codeFence = "";

    for (const line of lines) {
        // Track fenced code blocks so we don't treat headings inside code as real headings.
        const fenceMatch = line.match(/^(```+)(.*)$/);
        if (fenceMatch) {
            const fence = fenceMatch[1];
            if (!inCodeBlock) {
                inCodeBlock = true;
                codeFence = fence;
            } else if (fence === codeFence) {
                inCodeBlock = false;
                codeFence = "";
            }
            continue;
        }

        if (inCodeBlock) {
            continue;
        }

        const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
        if (!headingMatch) {
            continue;
        }

        const hashes = headingMatch[1];
        const level = hashes.length;
        const rawTitle = headingMatch[2].trim();
        if (!rawTitle) {
            continue;
        }

        const title = rawTitle.replace(/\s+#+\s*$/, "").trim();
        const id = slugifyHeading(title);
        if (!id) {
            continue;
        }

        toc.push({
            id,
            title,
            level,
            href: `#${id}`,
        });
    }

    return toc;
};

/**
 * Convert markdown file path to corresponding HTML file path.
 * Example: src/content/learn/metabase-basics/index.md -> static/learn/metabase-basics/index.html
 */
const markdownPathToHtmlPath = (markdownPath) => {
    const relativePath = path.relative(LEARN_MARKDOWN_ROOT, markdownPath);
    // Remove _redirect suffix if present
    const withoutRedirect = relativePath.replace(/_redirect\.md$/i, ".md");
    // Replace .md with .html
    const htmlRelativePath = withoutRedirect.replace(/\.md$/i, ".html");
    return path.join(LEARN_STATIC_ROOT, htmlRelativePath);
};

/**
 * Check if the HTML file contains the sub-navigation-content div.
 * This div indicates that the page should have a TOC generated.
 */
const hasSubNavigationContent = async (htmlFilePath) => {
    try {
        const raw = await fs.readFile(htmlFilePath, "utf8");
        const $ = load(raw);
        return $("#sub-navigation-content").length > 0;
    } catch (error) {
        // If HTML file doesn't exist, return false
        if (error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
};

const injectTocIntoFrontmatter = (frontmatterBlock, toc) => {
    if (!frontmatterBlock) {
        return null;
    }

    // If toc already exists, we skip to avoid duplicating or clobbering custom data.
    if (/^toc:/m.test(frontmatterBlock)) {
        return frontmatterBlock;
    }

    const lines = frontmatterBlock.split("\n");

    // Build YAML for toc.
    const tocLines = ["toc:"];
    toc.forEach((item) => {
        const safeTitle = item.title.replace(/"/g, '\\"');
        tocLines.push(`  - id: "${item.id}"`);
        tocLines.push(`    title: "${safeTitle}"`);
        tocLines.push(`    level: ${item.level}`);
        tocLines.push(`    href: "${item.href}"`);
    });

    // Append toc at the end of the frontmatter block.
    return `${lines.join("\n")}\n${tocLines.join("\n")}`;
};

const processMarkdownFile = async (filePath) => {
    const raw = await fs.readFile(filePath, "utf8");
    const { frontmatter, body } = parseFrontmatterAndBody(raw);

    if (!frontmatter) {
        console.log(`Skipping (no frontmatter): ${path.relative(LEARN_MARKDOWN_ROOT, filePath)}`);
        return;
    }

    const toc = extractTocFromBody(body);

    if (toc.length === 0) {
        console.log(`No headings found for TOC: ${path.relative(LEARN_MARKDOWN_ROOT, filePath)}`);
        return;
    }

    const updatedFrontmatter = injectTocIntoFrontmatter(frontmatter, toc);
    if (!updatedFrontmatter) {
        console.log(`Failed to update frontmatter for: ${path.relative(LEARN_MARKDOWN_ROOT, filePath)}`);
        return;
    }

    const updated = `---\n${updatedFrontmatter}\n---\n\n${body}`;
    await fs.writeFile(filePath, updated, "utf8");

    console.log(
        `Added TOC (${toc.length} items) to: ${path.relative(LEARN_MARKDOWN_ROOT, filePath)}`,
    );
};

const main = async () => {
    const mdFiles = await walkDir(LEARN_MARKDOWN_ROOT);

    let updatedCount = 0;
    let skippedCount = 0;

    for (const filePath of mdFiles) {
        // Only touch files that already have our learn-style frontmatter (title).
        const raw = await fs.readFile(filePath, "utf8");
        if (!raw.startsWith("---")) {
            continue;
        }
        if (!/^title:/m.test(raw)) {
            continue;
        }

        // Check if the corresponding HTML file has sub-navigation-content div
        const htmlPath = markdownPathToHtmlPath(filePath);
        const hasSubNav = await hasSubNavigationContent(htmlPath);

        if (!hasSubNav) {
            const relativePath = path.relative(LEARN_MARKDOWN_ROOT, filePath);
            console.log(`Skipping (no sub-navigation-content): ${relativePath}`);
            skippedCount += 1;
            continue;
        }

        await processMarkdownFile(filePath);
        updatedCount += 1;
    }

    console.log(`\nDone. Processed ${updatedCount} markdown file(s), skipped ${skippedCount} file(s) under ${LEARN_MARKDOWN_ROOT}.`);
};

main().catch((error) => {
    console.error("Failed to add TOC to learn markdown files:", error);
    process.exit(1);
});




