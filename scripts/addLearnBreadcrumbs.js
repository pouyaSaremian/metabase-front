#!/usr/bin/env node

/**
 * Extract breadcrumb navigation data from static/learn HTML files
 * and add it to the frontmatter of corresponding markdown files in src/content/learn.
 *
 * The breadcrumb structure in HTML is:
 *   <nav aria-label="breadcrumb">
 *     <ol class="breadcrumb">
 *       <li class="breadcrumb-item">
 *         <a href="...">Title</a>
 *       </li>
 *       ...
 *     </ol>
 *   </nav>
 *
 * Usage (from project root):
 *   node scripts/addLearnBreadcrumbs.js
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
const LEARN_STATIC_ROOT = path.join(PROJECT_ROOT, "static", "learn");
const LEARN_MARKDOWN_ROOT = path.join(PROJECT_ROOT, "src", "content", "learn");

const isHtmlFile = (fileName) => fileName.toLowerCase().endsWith(".html");

/**
 * Walk directory recursively to find all HTML files.
 */
const walkDir = async (dir, fileFilter) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const nested = await walkDir(fullPath, fileFilter);
            files.push(...nested);
        } else if (entry.isFile() && fileFilter(entry.name)) {
            files.push(fullPath);
        }
    }

    return files;
};

/**
 * Extract breadcrumb data from an HTML file.
 * Returns an array of breadcrumb items, each with `title` and optionally `href`.
 */
const extractBreadcrumbsFromHtml = async (htmlFilePath) => {
    const raw = await fs.readFile(htmlFilePath, "utf8");
    const $ = load(raw);

    // Find the breadcrumb navigation
    const breadcrumbNav = $('nav[aria-label="breadcrumb"]');
    if (!breadcrumbNav.length) {
        return null;
    }

    const breadcrumbList = breadcrumbNav.find("ol.breadcrumb");
    if (!breadcrumbList.length) {
        return null;
    }

    const breadcrumbs = [];
    breadcrumbList
        .find("li.breadcrumb-item")
        .each((_, element) => {
            const $item = $(element);
            const $link = $item.find("a").first();

            if ($link.length) {
                const title = $link.text().trim();
                const href = $link.attr("href") || null;

                if (title) {
                    breadcrumbs.push({
                        title,
                        href,
                    });
                }
            } else {
                // Some breadcrumb items might be plain text (current page)
                const text = $item.text().trim();
                if (text) {
                    breadcrumbs.push({
                        title: text,
                        href: null,
                    });
                }
            }
        });

    return breadcrumbs.length > 0 ? breadcrumbs : null;
};

/**
 * Convert HTML file path to corresponding markdown file path.
 * Example: static/learn/metabase-basics/index.html -> src/content/learn/metabase-basics/index.md
 */
const htmlPathToMarkdownPath = (htmlFilePath) => {
    const relativePath = path.relative(LEARN_STATIC_ROOT, htmlFilePath);
    const withoutExt = relativePath.replace(/\.html$/i, "");
    const markdownPath = path.join(LEARN_MARKDOWN_ROOT, `${withoutExt}.md`);
    return markdownPath;
};

/**
 * Parse frontmatter and body from markdown content.
 */
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

/**
 * Inject breadcrumb data into frontmatter YAML block.
 */
const injectBreadcrumbsIntoFrontmatter = (frontmatterBlock, breadcrumbs) => {
    if (!frontmatterBlock) {
        return null;
    }

    // If breadcrumbs already exist, skip to avoid duplicating or clobbering custom data.
    if (/^breadcrumbs:/m.test(frontmatterBlock)) {
        return frontmatterBlock;
    }

    const lines = frontmatterBlock.split("\n");

    // Build YAML for breadcrumbs.
    const breadcrumbLines = ["breadcrumbs:"];
    breadcrumbs.forEach((item) => {
        const safeTitle = item.title.replace(/"/g, '\\"');
        breadcrumbLines.push(`  - title: "${safeTitle}"`);
        if (item.href) {
            const safeHref = item.href.replace(/"/g, '\\"');
            breadcrumbLines.push(`    href: "${safeHref}"`);
        }
    });

    // Append breadcrumbs at the end of the frontmatter block.
    return `${lines.join("\n")}\n${breadcrumbLines.join("\n")}`;
};

/**
 * Process a single HTML file: extract breadcrumbs and update corresponding markdown.
 */
const processHtmlFile = async (htmlFilePath) => {
    const breadcrumbs = await extractBreadcrumbsFromHtml(htmlFilePath);
    if (!breadcrumbs || breadcrumbs.length === 0) {
        return null;
    }

    const markdownPath = htmlPathToMarkdownPath(htmlFilePath);

    // Check if markdown file exists
    try {
        await fs.access(markdownPath);
    } catch {
        // Markdown file doesn't exist, skip
        return null;
    }

    const raw = await fs.readFile(markdownPath, "utf8");
    const { frontmatter, body } = parseFrontmatterAndBody(raw);

    if (!frontmatter) {
        console.log(
            `Skipping (no frontmatter): ${path.relative(LEARN_MARKDOWN_ROOT, markdownPath)}`,
        );
        return null;
    }

    const updatedFrontmatter = injectBreadcrumbsIntoFrontmatter(frontmatter, breadcrumbs);
    if (!updatedFrontmatter) {
        console.log(
            `Failed to update frontmatter for: ${path.relative(LEARN_MARKDOWN_ROOT, markdownPath)}`,
        );
        return null;
    }

    const updated = `---\n${updatedFrontmatter}\n---\n\n${body}`;
    await fs.writeFile(markdownPath, updated, "utf8");

    return {
        htmlPath: path.relative(LEARN_STATIC_ROOT, htmlFilePath),
        markdownPath: path.relative(LEARN_MARKDOWN_ROOT, markdownPath),
        breadcrumbCount: breadcrumbs.length,
    };
};

const main = async () => {
    const htmlFiles = await walkDir(LEARN_STATIC_ROOT, isHtmlFile);

    console.log(`Found ${htmlFiles.length} HTML file(s) in ${LEARN_STATIC_ROOT}`);
    console.log("Extracting breadcrumbs...\n");

    let processedCount = 0;
    let skippedCount = 0;

    for (const htmlFilePath of htmlFiles) {
        const result = await processHtmlFile(htmlFilePath);
        if (result) {
            console.log(
                `Added breadcrumbs (${result.breadcrumbCount} items) to: ${result.markdownPath}`,
            );
            processedCount += 1;
        } else {
            skippedCount += 1;
        }
    }

    console.log(`\nDone.`);
    console.log(`  - Processed: ${processedCount} file(s)`);
    console.log(`  - Skipped: ${skippedCount} file(s) (no breadcrumbs or no markdown file)`);
};

main().catch((error) => {
    console.error("Failed to add breadcrumbs to learn markdown files:", error);
    process.exit(1);
});

