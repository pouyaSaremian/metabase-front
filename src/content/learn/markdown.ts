import fs from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { TOCItem } from "@/types/docs";
import { extractTOCFromContent, generateHeadingIds } from "@/lib/toc";

const learnRootDir = path.join(process.cwd(), "src", "content", "learn");

export interface LearnPageMetadata {
  title: string;
  description?: string;
  redirectFrom?: string[];
  toc?: TOCItem[];
  breadcrumbs?: Array<{ title: string; href: string }>;
}

interface ParsedFrontmatter {
  metadata: LearnPageMetadata;
  redirectFrom: string[];
  body: string;
}

export interface ParsedLearn {
  slug: string[];
  html: string;
  tocItems: TOCItem[];
  metadata: LearnPageMetadata;
  redirectFrom: string[];
}

const isSafePathInsideRoot = (
  targetPath: string,
  rootPath: string
): boolean => {
  const relative = path.relative(rootPath, targetPath);
  return (
    !!relative &&
    !relative.startsWith("..") &&
    !path.isAbsolute(relative) &&
    !relative.includes("node_modules")
  );
};

const parseFrontmatter = (raw: string): ParsedFrontmatter => {
  if (!raw.startsWith("---")) {
    return {
      metadata: { title: "" },
      redirectFrom: [],
      body: raw,
    };
  }

  const endIndex = raw.indexOf("\n---", 3);
  if (endIndex === -1) {
    return {
      metadata: { title: "" },
      redirectFrom: [],
      body: raw,
    };
  }

  const frontmatterBlock = raw.slice(3, endIndex).trim();
  const body = raw.slice(endIndex + 4).replace(/^\s+/, "");

  const lines = frontmatterBlock.split("\n");
  const metadata: LearnPageMetadata = { title: "" };
  const redirectFrom: string[] = [];
  const toc: TOCItem[] = [];

  let currentKey: "redirect_from" | "toc" | "breadcrumbs" | null = null;
  let currentTocItem: Partial<TOCItem> | null = null;
  let breadcrumbIndex = -1;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("title:")) {
      const value = line.slice("title:".length).trim();
      metadata.title = value.replace(/^["']|["']$/g, "");
      currentKey = null;
      continue;
    }

    if (line.startsWith("description:")) {
      const value = line.slice("description:".length).trim();
      metadata.description = value.replace(/^["']|["']$/g, "");
      currentKey = null;
      continue;
    }

    if (line.startsWith("redirect_from:")) {
      currentKey = "redirect_from";
      continue;
    }

    if (line.startsWith("toc:")) {
      currentKey = "toc";
      continue;
    }

    if (line.startsWith("breadcrumbs:")) {
      currentKey = "breadcrumbs";
      continue;
    }

    if (currentKey === "redirect_from" && line.startsWith("-")) {
      const value = line.slice(1).trim();
      if (value) {
        redirectFrom.push(value.replace(/^["']|["']$/g, ""));
      }
      continue;
    }

    if (currentKey === "toc") {
      if (line.startsWith("- id:")) {
        if (currentTocItem) {
          toc.push(currentTocItem as TOCItem);
        }
        const value = line.slice("- id:".length).trim();
        currentTocItem = {
          id: value.replace(/^["']|["']$/g, ""),
        };
      } else if (line.startsWith("title:") && currentTocItem) {
        const value = line.slice("title:".length).trim();
        currentTocItem.title = value.replace(/^["']|["']$/g, "");
      } else if (line.startsWith("level:") && currentTocItem) {
        const value = line.slice("level:".length).trim();
        currentTocItem.level = parseInt(value, 10) || 1;
      } else if (line.startsWith("href:") && currentTocItem) {
        const value = line.slice("href:".length).trim();
        currentTocItem.href = value.replace(/^["']|["']$/g, "");
      }
      continue;
    }

    if (currentKey === "breadcrumbs") {
      if (line.startsWith("- title:")) {
        breadcrumbIndex++;
        const value = line.slice("- title:".length).trim();
        if (!metadata.breadcrumbs) {
          metadata.breadcrumbs = [];
        }
        metadata.breadcrumbs.push({
          title: value.replace(/^["']|["']$/g, ""),
          href: "",
        });
      } else if (
        line.startsWith("href:") &&
        metadata.breadcrumbs &&
        breadcrumbIndex >= 0
      ) {
        const value = line.slice("href:".length).trim();
        metadata.breadcrumbs[breadcrumbIndex].href = value.replace(
          /^["']|["']$/g,
          ""
        );
      }
      continue;
    }
  }

  if (currentTocItem) {
    toc.push(currentTocItem as TOCItem);
  }

  if (toc.length > 0) {
    metadata.toc = toc;
  }

  return {
    metadata,
    redirectFrom,
    body,
  };
};

const resolveLearnFilePath = async (
  slug: string[]
): Promise<{ filePath: string; slugUsed: string[] } | null> => {
  // Handle empty slug (root /learn page)
  if (slug.length === 0 || (slug.length === 1 && slug[0] === "")) {
    const indexPath = path.join(learnRootDir, "index.md");
    try {
      const stat = await fs.stat(indexPath);
      if (stat.isFile() && isSafePathInsideRoot(indexPath, learnRootDir)) {
        return { filePath: indexPath, slugUsed: [] };
      }
    } catch {
      // ignore
    }
    return null;
  }

  // Filter out empty strings from slug array
  const filteredSlug = slug.filter((s) => s !== "");
  if (filteredSlug.length === 0) {
    const indexPath = path.join(learnRootDir, "index.md");
    try {
      const stat = await fs.stat(indexPath);
      if (stat.isFile() && isSafePathInsideRoot(indexPath, learnRootDir)) {
        return { filePath: indexPath, slugUsed: [] };
      }
    } catch {
      // ignore
    }
    return null;
  }

  const joined = filteredSlug.join("/");
  const directPath = path.join(learnRootDir, `${joined}.md`);

  const tryPaths: { filePath: string; slugUsed: string[] }[] = [
    { filePath: directPath, slugUsed: filteredSlug },
  ];

  if (filteredSlug[filteredSlug.length - 1] !== "index") {
    const withIndex = path.join(learnRootDir, joined, "index.md");
    tryPaths.push({
      filePath: withIndex,
      slugUsed: [...filteredSlug, "index"],
    });
  }

  for (const candidate of tryPaths) {
    try {
      const stat = await fs.stat(candidate.filePath);
      if (
        stat.isFile() &&
        isSafePathInsideRoot(candidate.filePath, learnRootDir)
      ) {
        return candidate;
      }
    } catch {
      // ignore
    }
  }

  return null;
};

const resolveRelativeLearnHref = (
  href: string,
  currentSlug: string[]
): string => {
  const trimmedHref = href.trim();

  if (
    trimmedHref.startsWith("http://") ||
    trimmedHref.startsWith("https://") ||
    trimmedHref.startsWith("mailto:") ||
    trimmedHref.startsWith("#")
  ) {
    return trimmedHref;
  }

  const [pathPart, hashPart] = trimmedHref.split("#");
  const hash = hashPart ? `#${hashPart}` : "";

  if (pathPart.startsWith("/learn")) {
    return `${pathPart}${hash}`;
  }

  const withoutExt = pathPart.replace(/\.md$/i, "").replace(/\.html$/i, "");
  const currentDir = currentSlug.slice(0, -1).join("/");

  const base = currentDir || "";
  const joined = base
    ? path.posix.join(base, withoutExt)
    : withoutExt.replace(/^\.?\//, "");

  const normalized = path.posix
    .normalize(joined)
    .replace(/^\/+/, "")
    .replace(/\/+/g, "/");

  return `/learn/${normalized}${hash}`;
};

const resolveImageSrc = (src: string, currentSlug: string[]): string => {
  const trimmed = src.trim();

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  // Handle relative paths like ../../../images/...
  // Images are stored in static/learn/images/ directory
  // Extract the images/... part from the relative path
  const imagesMatch = trimmed.match(/images\/(.+)$/);
  if (imagesMatch) {
    return `/learn-assets/images/${imagesMatch[1]}`;
  }

  // If path doesn't contain "images/", try to resolve relative to markdown file
  const markdownDir = currentSlug.slice(0, -1);

  // Resolve relative path
  const parts = trimmed.split("/").filter(Boolean);
  const resolvedParts = [...markdownDir];

  for (const part of parts) {
    if (part === "..") {
      resolvedParts.pop();
    } else if (part !== ".") {
      resolvedParts.push(part);
    }
  }

  const resolved = resolvedParts.join("/");

  // Check if resolved path contains images
  const resolvedImagesMatch = resolved.match(/images\/(.+)$/);
  if (resolvedImagesMatch) {
    return `/learn-assets/images/${resolvedImagesMatch[1]}`;
  }

  // Fallback: use the original path
  return `/learn-assets/${trimmed.replace(/^\.?\//, "")}`;
};

export const getLearnBySlug = async (
  slug: string[]
): Promise<ParsedLearn | null> => {
  const resolved = await resolveLearnFilePath(slug);
  if (!resolved) {
    return null;
  }

  const { filePath, slugUsed } = resolved;
  const raw = await fs.readFile(filePath, "utf8");
  const { metadata, redirectFrom, body } = parseFrontmatter(raw);

  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    const safeHref = href ?? "";
    const finalHref = resolveRelativeLearnHref(safeHref, slugUsed);
    const titleAttr = title ? ` title="${title}"` : "";
    return `<a href="${finalHref}"${titleAttr}>${text}</a>`;
  };

  renderer.image = (href, title, text) => {
    const safeSrc = href ?? "";
    const finalSrc = resolveImageSrc(safeSrc, slugUsed);
    const altAttr = text ? ` alt="${text}"` : ` alt=""`;
    const titleAttr = title ? ` title="${title}"` : "";
    return `<img src="${finalSrc}"${altAttr}${titleAttr} />`;
  };

  renderer.code = (code, language) => {
    const lang = language || "plaintext";
    const langClass = `language-${lang}`;
    // Escape HTML in code
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
    // Match original HTML structure: <div class="language-* highlighter-rouge"><div class="highlight"><pre class="highlight"><code>...</code></pre></div></div>
    return `<div class="language-${lang} highlighter-rouge"><div class="highlight"><pre class="highlight"><code class="${langClass}">${escapedCode}</code></pre></div></div>`;
  };

  renderer.blockquote = (quote) => {
    return `<blockquote>${quote}</blockquote>`;
  };

  renderer.table = (header, body) => {
    return `<table>
<thead>
${header}
</thead>
<tbody>
${body}
</tbody>
</table>`;
  };

  renderer.tablerow = (content) => {
    return `<tr>${content}</tr>`;
  };

  renderer.tablecell = (content, flags) => {
    const tag = flags.header ? "th" : "td";
    // Extract text content for data-label (for mobile responsiveness)
    const textContent = content.replace(/<[^>]*>/g, "").trim();
    const dataLabel = flags.header
      ? ""
      : ` data-label="${textContent.substring(0, 30)}"`;
    return `<${tag}${dataLabel}>${content}</${tag}>`;
  };

  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const htmlRaw = marked.parse(body, { renderer }) as string;
  const htmlWithIds = generateHeadingIds(htmlRaw);
  const tocItems = extractTOCFromContent(htmlWithIds);

  return {
    slug: slugUsed,
    html: htmlWithIds,
    tocItems,
    metadata,
    redirectFrom,
  };
};

export const getAllLearnSlugs = async (): Promise<string[][]> => {
  const result: string[][] = [];

  const walk = async (dir: string) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;

      if (entry.name === "README.md" || entry.name === "TRANSLATION_TODO.md") {
        continue;
      }

      const relative = path.relative(learnRootDir, fullPath);
      const withoutExt = relative.replace(/\.md$/i, "");
      const segments = withoutExt.split(path.sep).filter(Boolean);

      if (segments.length === 0) continue;

      result.push(segments);
    }
  };

  await walk(learnRootDir);
  return result;
};
