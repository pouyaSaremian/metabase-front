#!/usr/bin/env node

/**
 * Extract main article content from static/learn HTML pages
 * and generate SEO-friendly Markdown files under src/content/learn.
 *
 * Usage (from project root):
 *   node scripts/extractLearnMarkdown.js
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
const LEARN_CONTENT_ROOT = path.join(PROJECT_ROOT, "src", "content", "learn");

const isHtmlFile = (fileName) => fileName.toLowerCase().endsWith(".html");

const walkDir = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const nested = await walkDir(fullPath);
            files.push(...nested);
        } else if (entry.isFile() && isHtmlFile(entry.name)) {
            files.push(fullPath);
        }
    }

    return files;
};

const normalizeLearnSlug = (relativePath) => {
    const normalized = relativePath.replace(/\\/g, "/");
    const withoutIndex = normalized.replace(/\/index\.html$/i, "");
    const withoutExt = withoutIndex.replace(/\.html$/i, "");
    return `/learn/${withoutExt.replace(/^\/+/, "")}`;
};

const normalizeCanonicalSlug = (canonicalHref, relativePath) => {
    if (!canonicalHref) return null;

    try {
        const baseUrl = new URL(
            `https://www.metabase.com/learn/${relativePath.replace(/\\/g, "/")}`,
        );
        const resolved = new URL(canonicalHref, baseUrl);
        const pathname = resolved.pathname
            .replace(/\/index\.html$/i, "")
            .replace(/\.html$/i, "");

        if (!pathname.startsWith("/learn/")) {
            return null;
        }

        return pathname;
    } catch {
        return null;
    }
};

const extractHtmlFileInfo = async (filePath) => {
    const relativePath = path.relative(LEARN_STATIC_ROOT, filePath);
    const raw = await fs.readFile(filePath, "utf8");
    const $ = load(raw);

    /**
     * Check for error/404 pages with "We're a little lost..." heading.
     * These pages indicate missing/broken content and should be ignored
     * during markdown generation.
     *
     * The error page has the structure:
     *   <h1 class="fs-5 m-0 mt-3">We're a little lost...</h1>
     */
    const errorHeading = $('h1.fs-5.m-0.mt-3').filter((_, el) => {
        return $(el).text().trim() === "We're a little lost...";
    });
    const isErrorPage = errorHeading.length > 0;

    // Treat pages that have main content wrapped in `body > .bootstrap`
    // as real learn content pages. Redirect stubs and utility pages
    // generally won't include this structure.
    const hasArticle = $("body > .bootstrap").length > 0;
    const canonicalHref =
        $('link[rel="canonical"]').attr("href") ??
        $('link[rel="canonical"]').attr("content") ??
        null;

    const canonicalPath =
        canonicalHref !== null
            ? normalizeCanonicalSlug(canonicalHref, relativePath)
            : null;

    return {
        filePath,
        relativePath,
        hasArticle,
        canonicalPath,
        isErrorPage,
    };
};

const buildRedirectMap = (htmlInfos) => {
    const redirectMap = {};

    for (const info of htmlInfos) {
        if (info.hasArticle || !info.canonicalPath) continue;

        const targetSlug = info.canonicalPath;
        const sourceSlug = normalizeLearnSlug(info.relativePath);

        if (!redirectMap[targetSlug]) {
            redirectMap[targetSlug] = [];
        }

        if (!redirectMap[targetSlug].includes(sourceSlug)) {
            redirectMap[targetSlug].push(sourceSlug);
        }
    }

    return redirectMap;
};

const sanitizeTitle = (rawTitle) => {
    const trimmed = rawTitle.trim();
    const withoutSuffix = trimmed.replace(/\s*\|\s*Metabase Learn\s*$/i, "");
    return withoutSuffix.trim();
};

const extractFrontmatter = ($, relativePath, redirectMap) => {
    const ogTitle = $('meta[property="og:title"]').attr("content");
    const headTitle = $("head > title").first().text();
    const headerTitle = $("article.learn__post .learn__post__content h1")
        .first()
        .text();

    const chosenTitle =
        (ogTitle && ogTitle.trim()) ||
        headTitle.trim() ||
        headerTitle.trim() ||
        "";
    const title = sanitizeTitle(chosenTitle);

    const metaDescription =
        $('meta[name="description"]').attr("content") ??
        $('meta[property="og:description"]').attr("content") ??
        $('meta[name="twitter:description"]').attr("content") ??
        null;

    const slug = normalizeLearnSlug(relativePath);
    const from = new Set([slug]);
    const mapped = redirectMap[slug] ?? [];
    for (const alias of mapped) {
        from.add(alias);
    }

    return {
        title,
        description: metaDescription ? metaDescription.trim() : null,
        redirectFrom: Array.from(from),
    };
};

const isInlineElement = (tagName) => {
    const inlineTags = ["a", "em", "strong", "code", "span", "b", "i", "u"];
    return inlineTags.includes(tagName);
};

const escapeMarkdown = (text) =>
    text.replace(/([_*[\]()>#+\\-])/g, "\\$1");

const convertInlineNodes = ($, node) => {
    const tagName = (node && node.name ? node.name.toLowerCase() : "") || "";

    if (tagName === "a") {
        const hrefRaw = node.attribs?.href ?? "";
        const href = hrefRaw.trim();
        const children = $(node).contents().toArray();
        const parts = [];

        for (const child of children) {
            if (child.type === "text") {
                parts.push(escapeMarkdown(child.data ?? ""));
            } else if (child.type === "tag") {
                parts.push(convertInlineNodes($, child));
            }
        }

        const text = parts.join("");
        if (!href) return text;
        return `[${text}](${href})`;
    }

    if (tagName === "em" || tagName === "i") {
        const children = $(node).contents().toArray();
        const parts = [];
        for (const child of children) {
            if (child.type === "text") {
                parts.push(escapeMarkdown(child.data ?? ""));
            } else if (child.type === "tag") {
                parts.push(convertInlineNodes($, child));
            }
        }
        return `*${parts.join("")}*`;
    }

    if (tagName === "strong" || tagName === "b") {
        const children = $(node).contents().toArray();
        const parts = [];
        for (const child of children) {
            if (child.type === "text") {
                parts.push(escapeMarkdown(child.data ?? ""));
            } else if (child.type === "tag") {
                parts.push(convertInlineNodes($, child));
            }
        }
        return `**${parts.join("")}**`;
    }

    if (tagName === "code") {
        const codeText = $(node).text();
        return `\`${codeText.trim()}\``;
    }

    const children = $(node).contents().toArray();
    if (children.length === 0) return "";

    const parts = [];
    for (const child of children) {
        if (child.type === "text") {
            parts.push(escapeMarkdown(child.data ?? ""));
        } else if (child.type === "tag") {
            const childTag = (child.name || "").toLowerCase();
            if (isInlineElement(childTag)) {
                parts.push(convertInlineNodes($, child));
            }
        }
    }

    return parts.join("");
};

/**
 * Convert HTML table to Markdown table format.
 * Handles tables with thead/tbody structure and converts them to markdown tables.
 * Supports both semantic table structure (thead/tbody) and simple table structures.
 */
const convertTable = ($, tableNode) => {
    const rows = [];
    const thead = $(tableNode).find("thead").first();
    const tbody = $(tableNode).find("tbody").first();
    const allRows = $(tableNode).find("tr");

    let hasHeader = false;

    // If there's a thead, use it for header row
    if (thead.length) {
        const headerRow = [];
        thead.find("th").each((_, th) => {
            const text = $(th).text().trim();
            headerRow.push(text);
        });
        if (headerRow.length > 0) {
            rows.push(headerRow);
            // Add separator row for markdown table
            rows.push(headerRow.map(() => "---"));
            hasHeader = true;
        }
    }

    // Process tbody rows, or all rows if no thead/tbody structure
    const dataRows = tbody.length ? tbody.find("tr") : allRows;
    let isFirstRow = !hasHeader;

    dataRows.each((_, tr) => {
        // Skip if this is a header row (already processed from thead)
        if ($(tr).closest("thead").length) return;

        const row = [];
        const hasThCells = $(tr).find("th").length > 0;

        // If first row has th cells and we haven't added a header yet, treat it as header
        if (isFirstRow && hasThCells && !hasHeader) {
            $(tr)
                .find("th, td")
                .each((_, cell) => {
                    const text = $(cell).text().trim();
                    row.push(text);
                });
            if (row.length > 0) {
                rows.push(row);
                rows.push(row.map(() => "---"));
                hasHeader = true;
            }
            isFirstRow = false;
            return;
        }

        // Regular data row
        $(tr)
            .find("td, th")
            .each((_, cell) => {
                const text = $(cell).text().trim();
                row.push(text);
            });
        if (row.length > 0) {
            rows.push(row);
        }
        isFirstRow = false;
    });

    if (rows.length === 0) return "";

    // Convert to markdown table format
    return rows
        .map((row) => {
            // Escape pipe characters in cell content
            const escapedRow = row.map((cell) => cell.replace(/\|/g, "\\|"));
            return `| ${escapedRow.join(" | ")} |`;
        })
        .join("\n");
};

const convertBlockNode = ($, node, listDepth) => {
    const tagName = (node && node.name ? node.name.toLowerCase() : "") || "";

    if (tagName === "p") {
        const parts = [];
        const hasImage = $(node).find("img").length > 0;
        const textContent = $(node).text().trim();

        // If paragraph contains only an image (no text), extract it as a block-level image
        if (hasImage && textContent === "") {
            const img = $(node).find("img").first();
            const alt = img.attr("alt") ?? "";
            const src = img.attr("src") ?? "";
            if (src) {
                return `![${alt.trim()}](${src})`;
            }
        }

        // Process paragraph contents - handle images as block-level, other elements as inline
        $(node)
            .contents()
            .toArray()
            .forEach((child) => {
                if (child.type === "text") {
                    const text = child.data ?? "";
                    if (text.trim()) {
                        parts.push(escapeMarkdown(text));
                    }
                } else if (child.type === "tag") {
                    const childTag = (child.name || "").toLowerCase();
                    // Skip SVG elements (decorative, text content is extracted via .text())
                    if (childTag === "svg") {
                        // SVG is decorative, text content will be extracted from parent
                        return;
                    }
                    // Handle images inside paragraphs - they should be block-level in markdown
                    if (childTag === "img") {
                        const alt = $(child).attr("alt") ?? "";
                        const src = $(child).attr("src") ?? "";
                        if (src) {
                            // If there's content before the image, add newline before image
                            if (parts.length > 0 && parts[parts.length - 1].trim()) {
                                parts.push("\n");
                            }
                            parts.push(`![${alt.trim()}](${src})`);
                        }
                    } else {
                        parts.push(convertInlineNodes($, child));
                    }
                }
            });
        const result = parts.join("").trim();
        return result;
    }

    if (tagName === "h1" || tagName === "h2" || tagName === "h3") {
        const level = tagName === "h1" ? 1 : tagName === "h2" ? 2 : 3;
        const hashes = "#".repeat(level);
        const text = $(node).text().trim();

        // Check if heading is inside a link (parent or ancestor is an <a> tag)
        const parentLink = $(node).closest("a").first();
        if (parentLink.length) {
            const href = parentLink.attr("href") ?? "";
            if (href) {
                return `${hashes} [${text}](${href})`;
            }
        }

        return `${hashes} ${text}`;
    }

    if (tagName === "h4" || tagName === "h5" || tagName === "h6") {
        const level = tagName === "h4" ? 4 : tagName === "h5" ? 5 : 6;
        const hashes = "#".repeat(level);
        const text = $(node).text().trim();

        // Check if heading is inside a link (parent or ancestor is an <a> tag)
        const parentLink = $(node).closest("a").first();
        if (parentLink.length) {
            const href = parentLink.attr("href") ?? "";
            if (href) {
                return `${hashes} [${text}](${href})`;
            }
        }

        return `${hashes} ${text}`;
    }

    if (tagName === "blockquote") {
        const innerLines = [];
        $(node)
            .contents()
            .toArray()
            .forEach((child) => {
                if (child.type === "tag") {
                    const line = convertBlockNode($, child, listDepth);
                    if (line) innerLines.push(`> ${line}`);
                } else if (child.type === "text") {
                    const text = child.data?.trim();
                    if (text) innerLines.push(`> ${escapeMarkdown(text)}`);
                }
            });
        return innerLines.join("\n");
    }

    // Horizontal rule / divider
    if (tagName === "hr") {
        return "---";
    }

    // Special learn callout box that should behave like a blockquote in markdown.
    if (tagName === "div" && $(node).hasClass("plans-blockquote")) {
        const textParts = [];
        $(node)
            .find("p")
            .toArray()
            .forEach((p) => {
                const line = convertBlockNode($, p, listDepth);
                if (line) textParts.push(line);
            });
        if (textParts.length === 0) {
            return "";
        }
        return textParts.map((line) => `> ${line}`).join("\n");
    }

    if (tagName === "ul" || tagName === "ol") {
        const isOrdered = tagName === "ol";
        const lines = [];

        $(node)
            .children("li")
            .toArray()
            .forEach((li, index) => {
                const prefix = isOrdered ? `${index + 1}. ` : "- ";
                const indent = "  ".repeat(listDepth);
                const parts = [];

                $(li)
                    .contents()
                    .toArray()
                    .forEach((child) => {
                        if (child.type === "text") {
                            const value = child.data ?? "";
                            if (value.trim()) parts.push(escapeMarkdown(value));
                        } else if (child.type === "tag") {
                            const childTag = (child.name || "").toLowerCase();
                            if (childTag === "ul" || childTag === "ol") {
                                const nested = convertBlockNode($, child, listDepth + 1);
                                if (nested) lines.push(nested);
                            } else if (isInlineElement(childTag)) {
                                parts.push(convertInlineNodes($, child));
                            } else {
                                const block = convertBlockNode($, child, listDepth + 1);
                                if (block) parts.push(block);
                            }
                        }
                    });

                const content = parts.join(" ").replace(/\s+/g, " ").trim();
                if (content) lines.push(`${indent}${prefix}${content}`);
            });

        return lines.join("\n");
    }

    if (tagName === "pre") {
        const codeChild = $(node).children("code").first();
        const rawCode = codeChild.length ? codeChild.text() : $(node).text();

        /**
         * Map HTML code classes to markdown fence languages.
         *
         * There are (at least) two variants in the legacy Learn HTML:
         *  - `language-sql hljs`
         *      ⇒ SQL code blocks rendered with highlight.js
         *  - `language-plaintext highlighter-rouge`
         *      ⇒ Generic / plain-text examples rendered via Rouge
         *
         * We normalize these into markdown fences so that our renderer
         * can style them differently:
         *  - SQL examples          → ```sql
         *  - Plaintext examples    → ```text
         *  - Other `language-xxx`  → ```xxx
         *  - No recognizable class → ``` (no language)
         */
        const classAttr = codeChild.attr("class") ?? "";
        let language = "";

        if (/language-sql\b/i.test(classAttr)) {
            language = "sql";
        } else if (/language-plaintext\b/i.test(classAttr)) {
            language = "text";
        } else {
            const match = classAttr.match(/language-([a-z0-9]+)/i);
            language = match ? match[1] : "";
        }

        const fence = "```";
        const header = language ? `${fence}${language}` : fence;
        const code = rawCode.replace(/\r\n/g, "\n").replace(/\t/g, "  ");

        return `${header}
${code}
${fence}`;
    }

    if (tagName === "img") {
        const alt = $(node).attr("alt") ?? "";
        const src = $(node).attr("src") ?? "";
        if (!src) return "";
        const altText = alt.trim();
        const safeAlt = altText || "";
        return `![${safeAlt}](${src})`;
    }

    // Handle HTML tables
    if (tagName === "table") {
        return convertTable($, node);
    }

    // Handle anchor tags that contain block-level elements (like learn__category__link)
    // These are links that wrap headings and paragraphs, acting as card-like navigation elements
    if (tagName === "a") {
        const hasBlockChildren = $(node).children("h1, h2, h3, h4, h5, h6, p, div, ul, ol").length > 0;

        if (hasBlockChildren) {
            // This is a block-level link (like learn__category__link), process its children
            const children = $(node).contents().toArray();
            const childLines = [];

            for (const child of children) {
                if (child.type === "text") {
                    const text = child.data?.trim();
                    if (text) childLines.push(text);
                } else if (child.type === "tag") {
                    const line = convertBlockNode($, child, listDepth);
                    if (line) childLines.push(line);
                }
            }

            return childLines.join("\n");
        }

        // Regular inline link - fall through to inline conversion
        return convertInlineNodes($, node);
    }

    // Handle divs - process their children, especially for buttons/links
    if (tagName === "div") {
        const children = $(node).contents().toArray();
        const childLines = [];
        for (const child of children) {
            if (child.type === "text") {
                const text = child.data?.trim();
                if (text) childLines.push(text);
            } else if (child.type === "tag") {
                const childTag = (child.name || "").toLowerCase();
                // If it's an inline element at block level (like a button link), convert it inline
                if (isInlineElement(childTag)) {
                    const inlineResult = convertInlineNodes($, child);
                    if (inlineResult) childLines.push(inlineResult);
                } else {
                    const line = convertBlockNode($, child, listDepth);
                    if (line) childLines.push(line);
                }
            }
        }
        return childLines.join("\n");
    }

    const children = $(node).contents().toArray();
    const childLines = [];
    for (const child of children) {
        if (child.type === "tag") {
            const line = convertBlockNode($, child, listDepth);
            if (line) childLines.push(line);
        }
    }

    return childLines.join("\n");
};

const extractArticleMarkdown = ($) => {
    // Prefer main article content when available, otherwise fall back
    // to the top-level `.bootstrap` container inside the body.
    const articleContent = $("article.learn__post .learn__post__content").first();
    const root =
        articleContent.length > 0 ? articleContent : $("body > .bootstrap").first();

    if (!root.length) return "";

    const lines = [];

    // If there's a semantic header inside the content root, use it to
    // build the top-level heading and summary, and skip it from the
    // block conversion loop.
    const header = root.children("header").first();
    if (header.length) {
        const h1 = header.find("h1").first().text().trim();
        const summary = header.find(".learn__summary").first().text().trim();
        if (h1) lines.push(`# ${h1}`, "");
        if (summary) lines.push(summary, "");
    }

    root
        .children()
        .toArray()
        .forEach((child) => {
            if (child.type !== "tag") return;

            const id = child.attribs?.id ?? "";
            const tagName = (child.name || "").toLowerCase();

            // Skip the header we already handled above.
            if (tagName === "header") {
                return;
            }

            if (
                id === "was-this-helpful-widget" ||
                id === "page-feedback" ||
                id === "page-comment" ||
                id === "page-feedback-message"
            ) {
                return;
            }

            if (tagName === "iframe" || tagName === "script" || tagName === "style" || tagName === "svg") {
                return;
            }

            const line = convertBlockNode($, child, 0);
            if (line) lines.push(line, "");
        });

    const joined = lines.join("\n");
    return joined.replace(/\n{3,}/g, "\n\n").trim();
};

const buildMarkdownFileContent = (frontmatter, body) => {
    const lines = [];

    lines.push("---");
    lines.push(`title: "${frontmatter.title}"`);
    if (frontmatter.description) {
        lines.push(
            `description: "${frontmatter.description.replace(/"/g, '\\"')}"`,
        );
    }
    lines.push("redirect_from:");
    for (const slug of frontmatter.redirectFrom) {
        lines.push(`  - ${slug}`);
    }
    lines.push("---", "");

    if (body) {
        lines.push(body, "");
    }

    return lines.join("\n");
};

/**
 * Write markdown file to the output directory.
 * @param {string} relativeHtmlPath - Relative path to the source HTML file
 * @param {string} content - Markdown content to write
 * @param {boolean} isRedirect - If true, adds "_redirect" to the filename before .md extension
 */
const writeMarkdownFile = async (relativeHtmlPath, content, isRedirect = false) => {
    const normalized = relativeHtmlPath.replace(/\\/g, "/");
    const withoutExt = normalized.replace(/\.html$/i, "");

    // Add "_redirect" suffix before the .md extension for redirect files
    const filename = isRedirect ? `${withoutExt}_redirect.md` : `${withoutExt}.md`;
    const outputPath = path.join(LEARN_CONTENT_ROOT, filename);
    const outputDir = path.dirname(outputPath);

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputPath, content, "utf8");
};

const buildRedirectMarkdownFileContent = (sourceSlug, targetSlug) => {
    const lines = [];

    lines.push("---");
    lines.push('title: "تغییر مسیر"');
    lines.push(`redirectTo: "${targetSlug}"`);
    lines.push("redirect_from:");
    lines.push(`  - ${sourceSlug}`);
    lines.push("---", "");
    lines.push(
        `این صفحه به مسیر جدیدی منتقل شده است: [رفتن به مسیر جدید](${targetSlug}).`,
    );
    lines.push("");

    return lines.join("\n");
};

const main = async () => {
    const htmlFiles = await walkDir(LEARN_STATIC_ROOT);

    const fileInfos = [];
    for (const filePath of htmlFiles) {
        const info = await extractHtmlFileInfo(filePath);
        fileInfos.push(info);
    }

    const redirectMap = buildRedirectMap(fileInfos);

    let processedCount = 0;
    let redirectCount = 0;
    let skippedCount = 0;
    const ignoredFiles = [];

    for (const info of fileInfos) {
        // Skip error/404 pages with "We're a little lost..." heading
        if (info.isErrorPage) {
            const reason = "error page (We're a little lost...)";
            console.log(`Ignoring ${reason}: ${info.relativePath}`);
            ignoredFiles.push({
                relativePath: info.relativePath,
                reason,
                type: "error-page",
            });
            skippedCount += 1;
            continue;
        }

        // Full article pages.
        if (info.hasArticle) {
            const raw = await fs.readFile(info.filePath, "utf8");
            const $ = load(raw);

            const frontmatter = extractFrontmatter(
                $,
                info.relativePath,
                redirectMap,
            );
            if (!frontmatter.title) {
                const reason = "no title could be determined";
                console.warn(
                    `Skipping article ${info.relativePath} because ${reason}.`,
                );
                skippedCount += 1;
                ignoredFiles.push({
                    relativePath: info.relativePath,
                    reason,
                    type: "article",
                });
                continue;
            }

            const bodyMarkdown = extractArticleMarkdown($);
            const markdownContent = buildMarkdownFileContent(
                frontmatter,
                bodyMarkdown,
            );

            await writeMarkdownFile(info.relativePath, markdownContent);
            processedCount += 1;
            console.log(`Generated article markdown for: ${info.relativePath}`);
            continue;
        }

        // Redirect-only / stub pages with a canonical target.
        if (!info.hasArticle && info.canonicalPath) {
            const sourceSlug = normalizeLearnSlug(info.relativePath);
            const targetSlug = info.canonicalPath;

            const markdownContent = buildRedirectMarkdownFileContent(
                sourceSlug,
                targetSlug,
            );
            await writeMarkdownFile(info.relativePath, markdownContent, true);
            redirectCount += 1;
            console.log(
                `Generated redirect markdown for: ${info.relativePath} -> ${targetSlug}`,
            );
            continue;
        }

        // Simple HTML redirect stubs without canonical but with a body redirect.
        if (!info.hasArticle && !info.canonicalPath) {
            const raw = await fs.readFile(info.filePath, "utf8");
            const $ = load(raw);

            const bodyHeading = $("body > h1").first().text().trim();
            const firstLink = $("body a").first();
            const href = firstLink.attr("href") ?? "";

            if (bodyHeading === "Redirecting…" && href) {
                const sourceSlug = normalizeLearnSlug(info.relativePath);
                const targetSlug = href.trim();

                const markdownContent = buildRedirectMarkdownFileContent(
                    sourceSlug,
                    targetSlug,
                );
                await writeMarkdownFile(info.relativePath, markdownContent, true);
                redirectCount += 1;
                console.log(
                    `Generated redirect markdown (body redirect) for: ${info.relativePath} -> ${targetSlug}`,
                );
                continue;
            }
        }

        // Non-article files without canonical or recognizable redirect (utility/iframe/etc.)
        const reason = "non-article, non-canonical file";
        console.log(`Ignoring ${reason}: ${info.relativePath}`);
        ignoredFiles.push({
            relativePath: info.relativePath,
            reason,
            type: "other",
        });
        skippedCount += 1;
    }

    console.log(
        `Done. Articles: ${processedCount}, redirects: ${redirectCount}, ignored: ${skippedCount}. Output root: ${LEARN_CONTENT_ROOT}`,
    );

    if (ignoredFiles.length > 0) {
        console.log("\nIgnored learn HTML files:");
        ignoredFiles.forEach((entry) => {
            console.log(
                ` - [${entry.type}] ${entry.relativePath} (${entry.reason})`,
            );
        });
    } else {
        console.log("\nNo learn HTML files were ignored.");
    }
};

main().catch((error) => {
    console.error("Failed to extract learn markdown:", error);
    process.exit(1);
});


