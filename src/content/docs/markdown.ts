import fs from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { DocsPageMetadata, TOCItem } from "@/types/docs";
import { extractTOCFromContent, generateHeadingIds } from "@/lib/toc";

const docsRootDir = path.join(
  process.cwd(),
  "src",
  "content",
  "docs",
  "content",
  "docs"
);

interface ParsedFrontmatter {
  metadata: DocsPageMetadata;
  redirectFrom: string[];
  body: string;
}

export interface ParsedDoc {
  slug: string[];
  html: string;
  tocItems: TOCItem[];
  metadata: DocsPageMetadata;
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
  const metadata: DocsPageMetadata = { title: "" };
  const redirectFrom: string[] = [];

  let currentKey: "redirect_from" | null = null;

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

    if (line.startsWith("version:")) {
      const value = line.slice("version:".length).trim();
      metadata.version = value.replace(/^["']|["']$/g, "");
      currentKey = null;
      continue;
    }

    if (line.startsWith("lastUpdated:")) {
      const value = line.slice("lastUpdated:".length).trim();
      metadata.lastUpdated = value.replace(/^["']|["']$/g, "");
      currentKey = null;
      continue;
    }

    if (line.startsWith("redirect_from:")) {
      currentKey = "redirect_from";
      continue;
    }

    if (currentKey === "redirect_from" && line.startsWith("-")) {
      const value = line.slice(1).trim();
      if (value) {
        redirectFrom.push(value.replace(/^["']|["']$/g, ""));
      }
    }
  }

  return {
    metadata,
    redirectFrom,
    body,
  };
};

const resolveDocsFilePath = async (
  slug: string[]
): Promise<{ filePath: string; slugUsed: string[] } | null> => {
  const joined = slug.join("/");
  const directPath = path.join(docsRootDir, `${joined}.md`);

  const tryPaths: { filePath: string; slugUsed: string[] }[] = [
    { filePath: directPath, slugUsed: slug },
  ];

  // Check for index.md in the directory
  const withIndex = path.join(docsRootDir, joined, "index.md");
  tryPaths.push({
    filePath: withIndex,
    slugUsed: slug,
  });

  if (slug[slug.length - 1] !== "start") {
    const withStart = path.join(docsRootDir, joined, "start.md");
    tryPaths.push({
      filePath: withStart,
      slugUsed: [...slug, "start"],
    });
  }

  for (const candidate of tryPaths) {
    try {
      const stat = await fs.stat(candidate.filePath);
      if (
        stat.isFile() &&
        isSafePathInsideRoot(candidate.filePath, docsRootDir)
      ) {
        return candidate;
      }
    } catch {
      // ignore
    }
  }

  return null;
};

const resolveRelativeDocsHref = (
  href: string,
  currentSlug: string[],
  isIndexFile: boolean = false
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

  // Treat absolute paths starting with /docs or /learn as-is
  if (pathPart.startsWith("/docs") || pathPart.startsWith("/learn")) {
    return `${pathPart}${hash}`;
  }

  const withoutExt = pathPart.replace(/\.md$/i, "");
  // For index.md files, use the full slug as the directory
  // For other files, use all but the last segment as the directory
  const currentDir = isIndexFile
    ? currentSlug.join("/")
    : currentSlug.slice(0, -1).join("/");

  const base = currentDir || "";
  const joined = base
    ? path.posix.join(base, withoutExt)
    : withoutExt.replace(/^\.?\//, "");

  const normalized = path.posix
    .normalize(joined)
    .replace(/^\/+/, "")
    .replace(/\/+/g, "/");

  return `/docs/latest/${normalized}${hash}`;
};

const resolveImageSrc = (
  src: string,
  currentSlug: string[],
  isIndexFile: boolean = false
): string => {
  const trimmed = src.trim();

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  // For index.md files, use the full slug as the directory
  // For other files, use all but the last segment as the directory
  const currentDir = isIndexFile
    ? currentSlug.join("/")
    : currentSlug.slice(0, -1).join("/");
  const withoutLeading = trimmed.replace(/^\.?\//, "");

  const joined = currentDir
    ? path.posix.join(currentDir, withoutLeading)
    : withoutLeading;

  const normalized = path.posix
    .normalize(joined)
    .replace(/^\/+/, "")
    .replace(/\/+/g, "/");

  return `/docs-assets/${normalized}`;
};

export const getDocBySlug = async (
  slug: string[]
): Promise<ParsedDoc | null> => {
  const resolved = await resolveDocsFilePath(slug);
  if (!resolved) {
    return null;
  }

  const { filePath, slugUsed } = resolved;
  const raw = await fs.readFile(filePath, "utf8");
  const { metadata, redirectFrom, body } = parseFrontmatter(raw);

  // Check if this is an index.md file
  const isIndexFile = filePath.endsWith("index.md");

  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    const safeHref = href ?? "";
    const finalHref = resolveRelativeDocsHref(safeHref, slugUsed, isIndexFile);
    const titleAttr = title ? ` title="${title}"` : "";
    return `<a href="${finalHref}"${titleAttr}>${text}</a>`;
  };

  renderer.image = (href, title, text) => {
    const safeSrc = href ?? "";
    const finalSrc = resolveImageSrc(safeSrc, slugUsed, isIndexFile);
    const altAttr = text ? ` alt="${text}"` : ` alt=""`;
    const titleAttr = title ? ` title="${title}"` : "";
    return `<img src="${finalSrc}"${altAttr}${titleAttr} />`;
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

export const getAllDocsSlugs = async (): Promise<string[][]> => {
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

      const relative = path.relative(docsRootDir, fullPath);
      const withoutExt = relative.replace(/\.md$/i, "");
      const segments = withoutExt.split(path.sep).filter(Boolean);

      if (segments.length === 0) continue;

      // For index.md files, remove the "index" segment from the slug
      // e.g., "troubleshooting-guide/index" -> ["troubleshooting-guide"]
      if (entry.name === "index.md" && segments.length > 0) {
        segments.pop(); // Remove the "index" segment
        if (segments.length === 0) continue; // Skip if no segments left
      }

      result.push(segments);
    }
  };

  await walk(docsRootDir);
  return result;
};
