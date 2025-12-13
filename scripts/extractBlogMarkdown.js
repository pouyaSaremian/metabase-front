#!/usr/bin/env node

/**
 * Extract main article content from static/blog HTML pages
 * and generate SEO-friendly Markdown files under src/content/blog.
 *
 * Usage (from project root):
 *   node scripts/extractBlogMarkdown.js
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
const BLOG_STATIC_ROOT = path.join(PROJECT_ROOT, "static", "blog");
const BLOG_CONTENT_ROOT = path.join(PROJECT_ROOT, "src", "content", "blog");

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

// Note: normalizeBlogSlug kept for potential future use
// const normalizeBlogSlug = (relativePath) => {
//     const normalized = relativePath.replace(/\\/g, "/");
//     const withoutIndex = normalized.replace(/\/index\.html$/i, "");
//     const withoutExt = withoutIndex.replace(/\.html$/i, "");
//     return `/blog/${withoutExt.replace(/^\/+/, "")}`;
// };

const sanitizeTitle = (rawTitle) => {
    const trimmed = rawTitle.trim();
    const withoutSuffix = trimmed.replace(/\s*\|\s*Metabase\s*$/i, "");
    return withoutSuffix.trim();
};

/**
 * Extract all SEO-related metadata from the HTML
 */
const extractSEOMetadata = ($) => {
    // Title - try multiple sources
    const ogTitle = $('meta[property="og:title"]').attr("content");
    const twitterTitle = $('meta[name="twitter:title"]').attr("content");
    const headTitle = $("head > title").first().text();
    const h1Title = $("h1").first().text();

    const chosenTitle =
        (ogTitle && ogTitle.trim()) ||
        (twitterTitle && twitterTitle.trim()) ||
        headTitle.trim() ||
        h1Title.trim() ||
        "";
    const title = sanitizeTitle(chosenTitle);

    // Description - try multiple sources
    const metaDescription = $('meta[name="description"]').attr("content");
    const ogDescription = $('meta[property="og:description"]').attr("content");
    const twitterDescription = $('meta[name="twitter:description"]').attr("content");

    const description =
        (metaDescription && metaDescription.trim()) ||
        (ogDescription && ogDescription.trim()) ||
        (twitterDescription && twitterDescription.trim()) ||
        null;

    // Images
    const ogImage = $('meta[property="og:image"]').attr("content");
    const twitterImage = $('meta[name="twitter:image"]').attr("content");
    const image = (ogImage && ogImage.trim()) || (twitterImage && twitterImage.trim()) || null;

    // URL
    const ogUrl = $('meta[property="og:url"]').attr("content");
    const canonicalUrl = $('link[rel="canonical"]').attr("href");
    const url = (ogUrl && ogUrl.trim()) || (canonicalUrl && canonicalUrl.trim()) || null;

    // Twitter card metadata
    const twitterCard = $('meta[name="twitter:card"]').attr("content");
    const twitterSite = $('meta[name="twitter:site"]').attr("content");
    const twitterCreator = $('meta[name="twitter:creator"]').attr("content");

    // Open Graph metadata
    const ogType = $('meta[property="og:type"]').attr("content");
    const ogSiteName = $('meta[property="og:site_name"]').attr("content");

    // Keywords (if present)
    const keywords = $('meta[name="keywords"]').attr("content");

    // Author information
    let authorName = null;

    // Try to extract from JSON-LD structured data
    const jsonLdScripts = $('script[type="application/ld+json"]');
    jsonLdScripts.each((_, el) => {
        try {
            const jsonContent = $(el).html();
            if (jsonContent) {
                const data = JSON.parse(jsonContent);
                if (data["@type"] === "Article" && data.author) {
                    if (Array.isArray(data.author) && data.author.length > 0) {
                        const firstAuthor = data.author[0];
                        authorName = firstAuthor.name || (firstAuthor["@type"] === "Organization" ? firstAuthor.name : null) || null;
                    } else if (typeof data.author === "object") {
                        authorName = data.author.name || null;
                    }
                }
            }
        } catch {
            // Ignore JSON parse errors
        }
    });

    // Fallback: try to extract from page content
    if (!authorName) {
        const authorImg = $('img[alt*="Portrait"], img[alt*="Author"]').first();
        if (authorImg.length) {
            const authorAlt = authorImg.attr("alt") || "";
            const match = authorAlt.match(/(.+?)\s+Portrait/i);
            if (match) {
                authorName = match[1].trim();
            }
        }
    }

    // Date information
    let datePublished = null;
    let dateModified = null;

    // Try to extract from JSON-LD
    jsonLdScripts.each((_, el) => {
        try {
            const jsonContent = $(el).html();
            if (jsonContent) {
                const data = JSON.parse(jsonContent);
                if (data["@type"] === "Article") {
                    if (data.datePublished) {
                        datePublished = data.datePublished;
                    }
                    if (data.dateModified) {
                        dateModified = data.dateModified;
                    }
                }
            }
        } catch {
            // Ignore JSON parse errors
        }
    });

    // Fallback: try to extract from page content (look for date patterns)
    if (!datePublished) {
        const dateText = $(".paragraph-5, .neutral-60").first().text();
        const dateMatch = dateText.match(/([A-Z][a-z]{2}\s+\d{1,2},\s+\d{4})/);
        if (dateMatch) {
            datePublished = dateMatch[1];
        }
    }

    // Category
    let category = null;
    const categoryElement = $(".category-name").first();
    if (categoryElement.length) {
        category = categoryElement.text().trim();
    }

    return {
        title,
        description,
        image,
        url,
        canonicalUrl: canonicalUrl ? canonicalUrl.trim() : null,
        twitterCard,
        twitterSite,
        twitterCreator,
        twitterTitle: twitterTitle ? twitterTitle.trim() : null,
        twitterDescription: twitterDescription ? twitterDescription.trim() : null,
        twitterImage: twitterImage ? twitterImage.trim() : null,
        ogType,
        ogSiteName,
        ogTitle: ogTitle ? ogTitle.trim() : null,
        ogDescription: ogDescription ? ogDescription.trim() : null,
        ogImage: ogImage ? ogImage.trim() : null,
        ogUrl: ogUrl ? ogUrl.trim() : null,
        keywords: keywords ? keywords.trim() : null,
        author: authorName,
        datePublished,
        dateModified,
        category,
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
            rows.push(headerRow.map(() => "---"));
            hasHeader = true;
        }
    }

    // Process tbody rows, or all rows if no thead/tbody structure
    const dataRows = tbody.length ? tbody.find("tr") : allRows;
    let isFirstRow = !hasHeader;

    dataRows.each((_, tr) => {
        if ($(tr).closest("thead").length) return;

        const row = [];
        const hasThCells = $(tr).find("th").length > 0;

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

    return rows
        .map((row) => {
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

        if (hasImage && textContent === "") {
            const img = $(node).find("img").first();
            const alt = img.attr("alt") ?? "";
            const src = img.attr("src") ?? "";
            if (src) {
                return `![${alt.trim()}](${src})`;
            }
        }

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
                    if (childTag === "svg") {
                        return;
                    }
                    if (childTag === "img") {
                        const alt = $(child).attr("alt") ?? "";
                        const src = $(child).attr("src") ?? "";
                        if (src) {
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

    if (tagName === "hr") {
        return "---";
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

    if (tagName === "table") {
        return convertTable($, node);
    }

    if (tagName === "a") {
        const hasBlockChildren = $(node).children("h1, h2, h3, h4, h5, h6, p, div, ul, ol").length > 0;

        if (hasBlockChildren) {
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

        return convertInlineNodes($, node);
    }

    if (tagName === "div") {
        const children = $(node).contents().toArray();
        const childLines = [];
        for (const child of children) {
            if (child.type === "text") {
                const text = child.data?.trim();
                if (text) childLines.push(text);
            } else if (child.type === "tag") {
                const childTag = (child.name || "").toLowerCase();
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

/**
 * Extract the "You might also enjoy" related posts section
 */
const extractRelatedPosts = ($) => {
    // Find the section with "You might also enjoy" heading
    const relatedSection = $('section').filter((_, el) => {
        const h3 = $(el).find('h3').first();
        const h3Text = h3.text().trim().toLowerCase();
        return h3Text.includes('you might also enjoy') ||
            h3Text.includes('might also enjoy');
    }).first();

    if (!relatedSection.length) {
        return null;
    }

    const relatedPosts = [];

    // Find all card containers (hover-raise-sm or direct card elements)
    relatedSection.find('.hover-raise-sm, .card').each((_, containerEl) => {
        const $container = $(containerEl);

        // Get the card element (either the container itself or a child)
        const $card = $container.hasClass('card')
            ? $container
            : $container.find('.card').first();

        if (!$card.length) return;

        // Extract image (first image in the card)
        const img = $card.find('img').first();
        const imageSrc = img.attr('src') || '';
        const imageAlt = img.attr('alt') || '';

        // Extract title (h4 with class blog-title or just h4)
        const titleEl = $card.find('h4.blog-title').first();
        const title = titleEl.length ? titleEl.text().trim() : $card.find('h4').first().text().trim();

        // Extract link (stretched-link or any link with .html)
        let linkEl = $card.find('a.stretched-link').first();
        if (!linkEl.length) {
            linkEl = $card.find('a[href*=".html"]').first();
        }
        const href = linkEl.attr('href') || '';

        // Extract description (paragraph with neutral-40 class, not in author section)
        let descEl = $card.find('p.paragraph-5.neutral-40').first();
        if (!descEl.length) {
            // Fallback: find paragraph that's not in author section
            descEl = $card.find('p').filter((_, p) => {
                const $p = $(p);
                return !$p.closest('.d-flex.flex-row.align-items-center').length &&
                    !$p.text().includes('min read') &&
                    $p.text().trim().length > 20; // Reasonable description length
            }).first();
        }
        const description = descEl.length ? descEl.text().trim() : '';

        // Extract date and category from span
        const dateCategorySpan = $card.find('span.paragraph-5.neutral-60').first();
        const dateCategoryText = dateCategorySpan.length ? dateCategorySpan.html() || dateCategorySpan.text() : '';

        let date = null;
        let category = null;

        if (dateCategoryText) {
            // Extract date
            const dateMatch = dateCategoryText.match(/([A-Z][a-z]{2}\s+\d{1,2},\s+\d{4})/);
            if (dateMatch) {
                date = dateMatch[1];
            }

            // Extract category (from <b class="category-name"> or just text after "in")
            const categoryMatch = dateCategoryText.match(/in\s+<b[^>]*class="category-name"[^>]*>([^<]+)<\/b>/i) ||
                dateCategoryText.match(/in\s+<b[^>]*>([^<]+)<\/b>/i) ||
                dateCategoryText.match(/in\s+([A-Z][a-z\s&]+?)(?:\s*‧|$)/i);

            if (categoryMatch) {
                category = categoryMatch[1].trim();
            }
        }

        // Extract author (h5 with neutral-40 class)
        const authorEl = $card.find('h5.neutral-40').first();
        const author = authorEl.length ? authorEl.text().trim() : '';

        // Extract read time
        let readTime = null;
        $card.find('p.paragraph-5.neutral-60').each((_, p) => {
            const text = $(p).text().trim();
            const readTimeMatch = text.match(/(\d+)\s+min\s+read/i);
            if (readTimeMatch) {
                readTime = readTimeMatch[1];
                return false; // break
            }
        });

        // Only add if we have at least title and href
        if (title && href) {
            relatedPosts.push({
                title,
                href,
                image: imageSrc,
                imageAlt,
                description,
                date,
                category,
                author,
                readTime,
            });
        }
    });

    return relatedPosts.length > 0 ? relatedPosts : null;
};

/**
 * Convert related posts to markdown format with identifier
 * Uses a special HTML comment as identifier for React components to easily find and style
 */
const formatRelatedPostsMarkdown = (relatedPosts) => {
    if (!relatedPosts || relatedPosts.length === 0) {
        return '';
    }

    const lines = [];

    // Add special identifier comment for React components
    // This allows React components to easily find and extract this section
    lines.push('<!-- blog-related-posts -->');
    lines.push('');
    lines.push('## You might also enjoy');
    lines.push('');

    // Format each related post as a structured block
    relatedPosts.forEach((post, index) => {
        // Use a special marker for each post to make parsing easier
        lines.push(`<!-- blog-related-post-${index + 1} -->`);
        lines.push('');

        // Image
        if (post.image) {
            lines.push(`![${post.imageAlt || post.title}](${post.image})`);
            lines.push('');
        }

        // Title as a link
        lines.push(`### [${post.title}](${post.href})`);
        lines.push('');

        // Description
        if (post.description) {
            lines.push(post.description);
            lines.push('');
        }

        // Metadata in a compact format
        const metaParts = [];
        if (post.date) metaParts.push(post.date);
        if (post.category) metaParts.push(post.category);
        if (post.author) metaParts.push(post.author);
        if (post.readTime) metaParts.push(`${post.readTime} min read`);

        if (metaParts.length > 0) {
            lines.push(`*${metaParts.join(' • ')}*`);
            lines.push('');
        }

        // Separator between posts (except for the last one)
        if (index < relatedPosts.length - 1) {
            lines.push('---');
            lines.push('');
        }
    });

    lines.push('<!-- /blog-related-posts -->');

    return lines.join('\n');
};

const extractArticleMarkdown = ($) => {
    // Blog posts have content in #post-content
    const postContent = $("#post-content").first();

    if (!postContent.length) {
        // Fallback: try content-container
        const contentContainer = $(".content-container").first();
        if (contentContainer.length) {
            const lines = [];
            contentContainer
                .children()
                .toArray()
                .forEach((child) => {
                    if (child.type !== "tag") return;

                    const tagName = (child.name || "").toLowerCase();
                    if (tagName === "script" || tagName === "style" || tagName === "svg") {
                        return;
                    }

                    const line = convertBlockNode($, child, 0);
                    if (line) lines.push(line, "");
                });
            return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
        }
        return "";
    }

    const lines = [];

    // Skip script tags (like JSON-LD)
    postContent
        .contents()
        .toArray()
        .forEach((child) => {
            if (child.type === "tag") {
                const tagName = (child.name || "").toLowerCase();
                if (tagName === "script" || tagName === "style" || tagName === "svg") {
                    return;
                }

                const line = convertBlockNode($, child, 0);
                if (line) lines.push(line, "");
            }
        });

    const joined = lines.join("\n");
    return joined.replace(/\n{3,}/g, "\n\n").trim();
};

const buildMarkdownFileContent = (seoMetadata, body) => {
    const lines = [];

    lines.push("---");

    // Required fields
    if (seoMetadata.title) {
        lines.push(`title: "${seoMetadata.title.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.description) {
        lines.push(`description: "${seoMetadata.description.replace(/"/g, '\\"')}"`);
    }

    // SEO metadata
    if (seoMetadata.url) {
        lines.push(`url: "${seoMetadata.url.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.canonicalUrl) {
        lines.push(`canonical: "${seoMetadata.canonicalUrl.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.image) {
        lines.push(`image: "${seoMetadata.image.replace(/"/g, '\\"')}"`);
    }

    // Open Graph metadata
    if (seoMetadata.ogType) {
        lines.push(`ogType: "${seoMetadata.ogType.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.ogSiteName) {
        lines.push(`ogSiteName: "${seoMetadata.ogSiteName.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.ogTitle) {
        lines.push(`ogTitle: "${seoMetadata.ogTitle.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.ogDescription) {
        lines.push(`ogDescription: "${seoMetadata.ogDescription.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.ogImage) {
        lines.push(`ogImage: "${seoMetadata.ogImage.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.ogUrl) {
        lines.push(`ogUrl: "${seoMetadata.ogUrl.replace(/"/g, '\\"')}"`);
    }

    // Twitter card metadata
    if (seoMetadata.twitterCard) {
        lines.push(`twitterCard: "${seoMetadata.twitterCard.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.twitterSite) {
        lines.push(`twitterSite: "${seoMetadata.twitterSite.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.twitterCreator) {
        lines.push(`twitterCreator: "${seoMetadata.twitterCreator.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.twitterTitle) {
        lines.push(`twitterTitle: "${seoMetadata.twitterTitle.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.twitterDescription) {
        lines.push(`twitterDescription: "${seoMetadata.twitterDescription.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.twitterImage) {
        lines.push(`twitterImage: "${seoMetadata.twitterImage.replace(/"/g, '\\"')}"`);
    }

    // Additional metadata
    if (seoMetadata.keywords) {
        lines.push(`keywords: "${seoMetadata.keywords.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.author) {
        lines.push(`author: "${seoMetadata.author.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.datePublished) {
        lines.push(`datePublished: "${seoMetadata.datePublished.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.dateModified) {
        lines.push(`dateModified: "${seoMetadata.dateModified.replace(/"/g, '\\"')}"`);
    }

    if (seoMetadata.category) {
        lines.push(`category: "${seoMetadata.category.replace(/"/g, '\\"')}"`);
    }

    lines.push("---", "");

    if (body) {
        lines.push(body, "");
    }

    return lines.join("\n");
};

/**
 * Normalize redirect destination URL to a relative path
 */
const normalizeRedirectDestination = (destinationUrl) => {
    if (!destinationUrl) return null;

    try {
        // Handle relative paths (starting with ../ or ./
        if (destinationUrl.startsWith('../') || destinationUrl.startsWith('./')) {
            // Remove ../ and ./
            let cleaned = destinationUrl.replace(/^\.\.\//, '').replace(/^\.\//, '');
            // Remove .html extension
            cleaned = cleaned.replace(/\.html$/i, '');
            // Remove /index
            cleaned = cleaned.replace(/\/index$/i, '');
            // Remove trailing slash
            cleaned = cleaned.replace(/\/$/, '');

            // If it starts with docs/ or learn/, add leading slash
            if (cleaned.startsWith('docs/') || cleaned.startsWith('learn/')) {
                return `/${cleaned}`;
            }

            return cleaned || null;
        }

        // Handle absolute URLs
        if (destinationUrl.startsWith('http://') || destinationUrl.startsWith('https://')) {
            const url = new URL(destinationUrl);
            let pathname = url.pathname;

            // Remove .html extension
            pathname = pathname.replace(/\.html$/i, '');
            // Remove /index
            pathname = pathname.replace(/\/index$/i, '');
            // Remove trailing slash (but keep root)
            pathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

            // Return the pathname as-is (it already starts with /)
            return pathname;
        }

        // Handle paths that start with / (absolute paths)
        if (destinationUrl.startsWith('/')) {
            let cleaned = destinationUrl
                .replace(/\.html$/i, '')
                .replace(/\/index$/i, '')
                .replace(/\/$/, '');
            return cleaned || '/';
        }

        // Handle plain relative paths (no leading /, ../, or ./)
        let cleaned = destinationUrl
            .replace(/\.html$/i, '')
            .replace(/\/index$/i, '')
            .replace(/\/$/, '');

        // If it starts with docs/ or learn/, add leading slash
        if (cleaned.startsWith('docs/') || cleaned.startsWith('learn/')) {
            return `/${cleaned}`;
        }

        return cleaned || null;
    } catch {
        // If URL parsing fails, try to clean it up
        let cleaned = destinationUrl
            .replace(/\.html$/i, '')
            .replace(/\/index$/i, '')
            .replace(/^\.\.\//, '')
            .replace(/^\.\//, '')
            .replace(/\/$/, '');

        // If it starts with docs/ or learn/, add leading slash
        if (cleaned.startsWith('docs/') || cleaned.startsWith('learn/')) {
            return `/${cleaned}`;
        }

        return cleaned || null;
    }
};

/**
 * Extract redirect destination from HTML
 */
const extractRedirectDestination = ($) => {
    // Try canonical link first
    const canonical = $('link[rel="canonical"]').attr('href');
    if (canonical) {
        const dest = normalizeRedirectDestination(canonical);
        if (dest) return dest;
    }

    // Try script location
    const scriptContent = $('script').filter((_, el) => {
        const text = $(el).html() || '';
        return text.includes('location=') || text.includes('location =');
    }).first().html() || '';

    const locationMatch = scriptContent.match(/location\s*=\s*["']([^"']+)["']/i);
    if (locationMatch) {
        const dest = normalizeRedirectDestination(locationMatch[1]);
        if (dest) return dest;
    }

    // Try meta refresh
    const metaRefresh = $('meta[http-equiv="refresh"]').attr('content');
    if (metaRefresh) {
        const urlMatch = metaRefresh.match(/url\s*=\s*([^\s;]+)/i);
        if (urlMatch) {
            const dest = normalizeRedirectDestination(urlMatch[1]);
            if (dest) return dest;
        }
    }

    // Try body link
    const bodyLink = $('body a').first().attr('href');
    if (bodyLink) {
        const dest = normalizeRedirectDestination(bodyLink);
        if (dest) return dest;
    }

    return null;
};

/**
 * Check if a page is a redirect page
 */
const isRedirectPage = ($) => {
    const title = $('head > title').first().text().trim();
    const hasRedirectTitle = title === 'Redirecting…' || title.toLowerCase().includes('redirecting');

    const hasPostContent = $('#post-content').length > 0 || $('.content-container').length > 0;
    const hasCanonical = $('link[rel="canonical"]').length > 0;

    // It's a redirect if:
    // 1. Title is "Redirecting…" OR
    // 2. Has canonical but no post content
    return hasRedirectTitle || (!hasPostContent && hasCanonical);
};

/**
 * Build redirect markdown file content (same structure as learn redirects)
 */
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
    const outputPath = path.join(BLOG_CONTENT_ROOT, filename);
    const outputDir = path.dirname(outputPath);

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputPath, content, "utf8");
};

const main = async () => {
    const htmlFiles = await walkDir(BLOG_STATIC_ROOT);

    let processedCount = 0;
    let redirectCount = 0;
    let skippedCount = 0;
    const ignoredFiles = [];

    for (const filePath of htmlFiles) {
        const relativePath = path.relative(BLOG_STATIC_ROOT, filePath);

        try {
            const raw = await fs.readFile(filePath, "utf8");
            const $ = load(raw);

            // Check if this is a redirect page first
            if (isRedirectPage($)) {
                const destination = extractRedirectDestination($);

                if (!destination) {
                    const reason = "redirect page but no destination found";
                    console.log(`Ignoring ${reason}: ${relativePath}`);
                    ignoredFiles.push({
                        relativePath,
                        reason,
                    });
                    skippedCount += 1;
                    continue;
                }

                // Build source slug (blog path without .html)
                const normalized = relativePath.replace(/\\/g, "/");
                const withoutIndex = normalized.replace(/\/index\.html$/i, "");
                const withoutExt = withoutIndex.replace(/\.html$/i, "");
                const sourceSlug = `/blog/${withoutExt.replace(/^\/+/, "")}`;

                // Build redirect markdown
                const redirectContent = buildRedirectMarkdownFileContent(sourceSlug, destination);
                await writeMarkdownFile(relativePath, redirectContent, true);
                redirectCount += 1;
                console.log(`Generated redirect markdown for: ${relativePath} -> ${destination}`);
                continue;
            }

            // Check if this is a valid blog post (has post-content or content-container)
            const hasPostContent = $("#post-content").length > 0;
            const hasContentContainer = $(".content-container").length > 0;

            if (!hasPostContent && !hasContentContainer) {
                const reason = "no post content found";
                console.log(`Ignoring ${reason}: ${relativePath}`);
                ignoredFiles.push({
                    relativePath,
                    reason,
                });
                skippedCount += 1;
                continue;
            }

            // Extract SEO metadata
            const seoMetadata = extractSEOMetadata($);

            if (!seoMetadata.title) {
                const reason = "no title could be determined";
                console.warn(`Skipping ${relativePath} because ${reason}.`);
                ignoredFiles.push({
                    relativePath,
                    reason,
                });
                skippedCount += 1;
                continue;
            }

            // Extract article markdown
            const bodyMarkdown = extractArticleMarkdown($);

            // Extract related posts section
            const relatedPosts = extractRelatedPosts($);
            const relatedPostsMarkdown = formatRelatedPostsMarkdown(relatedPosts);

            // Combine body and related posts
            const fullBody = relatedPostsMarkdown
                ? `${bodyMarkdown}\n\n${relatedPostsMarkdown}`
                : bodyMarkdown;

            // Build markdown file content
            const markdownContent = buildMarkdownFileContent(seoMetadata, fullBody);

            // Write markdown file
            await writeMarkdownFile(relativePath, markdownContent);
            processedCount += 1;
            console.log(`Generated blog markdown for: ${relativePath}`);
        } catch (error) {
            console.error(`Error processing ${relativePath}:`, error.message);
            ignoredFiles.push({
                relativePath,
                reason: `error: ${error.message}`,
            });
            skippedCount += 1;
        }
    }

    console.log(
        `Done. Articles: ${processedCount}, redirects: ${redirectCount}, skipped: ${skippedCount}. Output root: ${BLOG_CONTENT_ROOT}`,
    );

    if (ignoredFiles.length > 0) {
        console.log("\nIgnored blog HTML files:");
        ignoredFiles.forEach((entry) => {
            console.log(` - ${entry.relativePath} (${entry.reason})`);
        });
    } else {
        console.log("\nNo blog HTML files were ignored.");
    }
};

main().catch((error) => {
    console.error("Failed to extract blog markdown:", error);
    process.exit(1);
});
