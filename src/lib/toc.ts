import type { TOCItem } from "@/types/docs";

/**
 * Extracts table of contents from HTML content by finding all headings
 */
export const extractTOCFromContent = (content: string): TOCItem[] => {
    if (typeof window === "undefined") {
        // Server-side: parse HTML string
        const headingRegex = /<h([1-6])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[1-6]>/gi;
        const items: TOCItem[] = [];
        let match;

        while ((match = headingRegex.exec(content)) !== null) {
            const level = parseInt(match[1] || "1", 10);
            const id = match[2] || "";
            const title = match[3]?.replace(/<[^>]*>/g, "").trim() || "";

            if (id && title) {
                items.push({
                    id,
                    title,
                    level,
                    href: `#${id}`,
                });
            }
        }

        return items;
    }

    // Client-side: use DOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const items: TOCItem[] = [];

    headings.forEach((heading) => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
        const level = parseInt(heading.tagName.charAt(1) || "1", 10);
        const title = heading.textContent?.trim() || "";

        if (id && title) {
            items.push({
                id,
                title,
                level,
                href: `#${id}`,
            });
        }
    });

    return items;
};

/**
 * Generates IDs for headings that don't have them
 */
export const generateHeadingIds = (content: string): string => {
    const headingRegex = /<h([1-6])([^>]*)>(.*?)<\/h[1-6]>/gi;

    return content.replace(headingRegex, (match, level, attrs, text) => {
        // Check if id already exists
        if (attrs.includes('id=')) {
            return match;
        }

        // Generate ID from text
        const id = text
            .replace(/<[^>]*>/g, "") // Remove HTML tags
            .trim()
            .toLowerCase()
            .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-z0-9]+/g, "-") // Replace non-alphanumeric with dash
            .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes

        return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    });
};

