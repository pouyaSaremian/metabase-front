#!/usr/bin/env node

/**
 * Link Checker Script
 *
 * This script checks for broken links in the application by:
 * 1. Validating all URLs in the sitemap
 * 2. Extracting links from markdown files
 * 3. Checking internal links in components
 * 4. Optionally validating external links
 */

import fs from "node:fs/promises";
import path from "node:path";
import { getAllDocsSlugs } from "../src/content/docs/markdown";
import { getAllLearnSlugs } from "../src/content/learn";

interface LinkCheckResult {
  url: string;
  status: "ok" | "broken" | "timeout" | "error";
  statusCode?: number;
  error?: string;
  source?: string;
}

interface CheckOptions {
  baseUrl: string;
  checkExternal: boolean;
  timeout: number;
  maxConcurrent: number;
  outputFile?: string;
}

class LinkChecker {
  private results: LinkCheckResult[] = [];
  private checkedUrls = new Set<string>();
  private options: CheckOptions;

  constructor(options: CheckOptions) {
    this.options = options;
  }

  /**
   * Check if a URL is accessible
   */
  private async checkUrl(
    url: string,
    source?: string
  ): Promise<LinkCheckResult> {
    // Skip if already checked
    if (this.checkedUrls.has(url)) {
      const existing = this.results.find((r) => r.url === url);
      return existing || { url, status: "ok" };
    }

    this.checkedUrls.add(url);

    // Skip anchors and mailto links for now
    if (url.startsWith("#") || url.startsWith("mailto:")) {
      return { url, status: "ok", source };
    }

    // For internal links, check if they're valid routes
    if (url.startsWith("/") || url.startsWith(this.options.baseUrl)) {
      return this.checkInternalLink(url, source);
    }

    // For external links
    if (
      this.options.checkExternal &&
      (url.startsWith("http://") || url.startsWith("https://"))
    ) {
      return this.checkExternalLink(url, source);
    }

    return { url, status: "ok", source };
  }

  /**
   * Check internal link (relative or absolute to baseUrl)
   */
  private async checkInternalLink(
    url: string,
    source?: string
  ): Promise<LinkCheckResult> {
    try {
      // Normalize URL
      let normalizedUrl = url;
      if (url.startsWith(this.options.baseUrl)) {
        normalizedUrl = url.replace(this.options.baseUrl, "");
      }
      if (!normalizedUrl.startsWith("/")) {
        normalizedUrl = `/${normalizedUrl}`;
      }

      // Remove hash fragments for checking
      const [pathPart] = normalizedUrl.split("#");
      const cleanPath = pathPart.endsWith("/")
        ? pathPart.slice(0, -1)
        : pathPart;

      // Check if it's a valid route
      // For now, we'll validate against known routes
      const isValid = await this.isValidInternalRoute(cleanPath);

      return {
        url,
        status: isValid ? "ok" : "broken",
        source,
        error: isValid ? undefined : "Route not found",
      };
    } catch (error) {
      return {
        url,
        status: "error",
        source,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Check if an internal route is valid
   */
  private async isValidInternalRoute(route: string): Promise<boolean> {
    // Known static routes
    const staticRoutes = [
      "/",
      "/pricing",
      "/security",
      "/data-sources",
      "/events",
      "/help",
      "/coming-soon",
      "/docs",
      "/docs/latest",
      "/learn",
      "/cloud",
      "/cloud/login",
      // Features
      "/features/analytics-dashboards",
      "/features/data-segregation",
      "/features/drill-through",
      "/features/models",
      "/features/permissions",
      "/features/query-builder",
      "/features/sql-editor",
      "/features/usage-analytics",
      "/features/white-label-analytics",
      // Products
      "/product/business-intelligence",
      "/product/csv-uploads",
      "/product/embedded-analytics",
      "/product/embedded-analytics-sdk",
      // Landing pages
      "/lp/bi-for-startups-demo",
      "/lp/business-intelligence-demo",
      "/lp/embedded-analytics-demo",
      "/lp/metabase-vs-domo",
      "/lp/metabase-vs-looker",
      "/lp/metabase-vs-looker-studio",
    ];

    if (staticRoutes.includes(route)) {
      return true;
    }

    // Check docs routes
    if (route.startsWith("/docs/latest/")) {
      const slug = route.replace("/docs/latest/", "").split("/");
      const docsSlugs = await getAllDocsSlugs();
      return docsSlugs.some((s) => s.join("/") === slug.join("/"));
    }

    // Check learn routes
    if (route.startsWith("/learn/")) {
      const slug = route.replace("/learn/", "").split("/").filter(Boolean);
      const learnSlugs = await getAllLearnSlugs();
      if (slug.length === 0) {
        return true; // Root learn page
      }
      return learnSlugs.some((s) => s.join("/") === slug.join("/"));
    }

    // Check asset routes
    if (
      route.startsWith("/docs-assets/") ||
      route.startsWith("/learn-assets/")
    ) {
      // Asset routes are handled by route handlers, assume valid
      return true;
    }

    return false;
  }

  /**
   * Check external link
   */
  private async checkExternalLink(
    url: string,
    source?: string
  ): Promise<LinkCheckResult> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.options.timeout
      );

      const response = await fetch(url, {
        method: "HEAD",
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; LinkChecker/1.0)",
        },
      });

      clearTimeout(timeoutId);

      return {
        url,
        status: response.ok ? "ok" : "broken",
        statusCode: response.status,
        source,
        error: response.ok ? undefined : `HTTP ${response.status}`,
      };
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return { url, status: "timeout", source, error: "Request timeout" };
      }
      return {
        url,
        status: "error",
        source,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Extract links from markdown file
   */
  private async extractLinksFromMarkdown(filePath: string): Promise<string[]> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const links: string[] = [];

      // Match markdown links [text](url)
      const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      while ((match = markdownLinkRegex.exec(content)) !== null) {
        links.push(match[2]);
      }

      // Match HTML links <a href="url">
      const htmlLinkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
      while ((match = htmlLinkRegex.exec(content)) !== null) {
        links.push(match[1]);
      }

      return links;
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
      return [];
    }
  }

  /**
   * Extract links from TypeScript/TSX files
   */
  private async extractLinksFromTSX(filePath: string): Promise<string[]> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const links: string[] = [];

      // Match href="..." or href='...'
      const hrefRegex = /href=["']([^"']+)["']/gi;
      let match;
      while ((match = hrefRegex.exec(content)) !== null) {
        links.push(match[1]);
      }

      return links;
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
      return [];
    }
  }

  /**
   * Scan all markdown files
   */
  private async scanMarkdownFiles(): Promise<void> {
    console.log("📄 Scanning markdown files...");

    const docsDir = path.join(
      process.cwd(),
      "src",
      "content",
      "docs",
      "content",
      "docs"
    );
    const learnDir = path.join(process.cwd(), "src", "content", "learn");

    const scanDirectory = async (
      dir: string,
      basePath: string
    ): Promise<void> => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          const relativePath = path.relative(basePath, fullPath);

          if (entry.isDirectory()) {
            await scanDirectory(fullPath, basePath);
          } else if (entry.isFile() && entry.name.endsWith(".md")) {
            const links = await this.extractLinksFromMarkdown(fullPath);
            for (const link of links) {
              const result = await this.checkUrl(link, relativePath);
              this.results.push(result);
            }
          }
        }
      } catch (error) {
        // Directory might not exist, skip
      }
    };

    await scanDirectory(docsDir, docsDir);
    await scanDirectory(learnDir, learnDir);
  }

  /**
   * Scan component files for links
   */
  private async scanComponentFiles(): Promise<void> {
    console.log("⚛️  Scanning component files...");

    const componentsDir = path.join(process.cwd(), "src", "components");
    const appDir = path.join(process.cwd(), "src", "app");

    const scanDirectory = async (dir: string): Promise<void> => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);

          if (entry.isDirectory()) {
            await scanDirectory(fullPath);
          } else if (
            entry.isFile() &&
            (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))
          ) {
            // Skip node_modules and .next
            if (
              fullPath.includes("node_modules") ||
              fullPath.includes(".next")
            ) {
              continue;
            }

            const links = await this.extractLinksFromTSX(fullPath);
            const relativePath = path.relative(process.cwd(), fullPath);
            for (const link of links) {
              const result = await this.checkUrl(link, relativePath);
              this.results.push(result);
            }
          }
        }
      } catch (error) {
        // Directory might not exist, skip
      }
    };

    await scanDirectory(componentsDir);
    await scanDirectory(appDir);
  }

  /**
   * Check all URLs from sitemap
   */
  private async checkSitemapUrls(): Promise<void> {
    console.log("🗺️  Checking sitemap URLs...");

    try {
      // Import sitemap function
      const sitemapModule = await import("../src/app/sitemap");
      const sitemap = await sitemapModule.default();

      for (const entry of sitemap) {
        const result = await this.checkUrl(entry.url, "sitemap");
        this.results.push(result);
      }
    } catch (error) {
      console.error("Error checking sitemap URLs:", error);
      console.log(
        "Skipping sitemap check. Make sure to build the project first."
      );
    }
  }

  /**
   * Generate report
   */
  private generateReport(): string {
    const broken = this.results.filter((r) => r.status !== "ok");
    const ok = this.results.filter((r) => r.status === "ok");

    let report = "\n" + "=".repeat(80) + "\n";
    report += "🔍 LINK CHECKER REPORT\n";
    report += "=".repeat(80) + "\n\n";
    report += `Total links checked: ${this.results.length}\n`;
    report += `✅ Working: ${ok.length}\n`;
    report += `❌ Broken: ${broken.length}\n\n`;

    if (broken.length > 0) {
      report += "BROKEN LINKS:\n";
      report += "-".repeat(80) + "\n";
      for (const result of broken) {
        report += `\n❌ ${result.url}\n`;
        if (result.source) {
          report += `   Source: ${result.source}\n`;
        }
        if (result.statusCode) {
          report += `   Status: ${result.statusCode}\n`;
        }
        if (result.error) {
          report += `   Error: ${result.error}\n`;
        }
      }
      report += "\n";
    }

    return report;
  }

  /**
   * Run all checks
   */
  async run(): Promise<void> {
    console.log("🚀 Starting link checker...\n");

    await this.checkSitemapUrls();
    await this.scanMarkdownFiles();
    await this.scanComponentFiles();

    const report = this.generateReport();
    console.log(report);

    // Save report to file if requested
    if (this.options.outputFile) {
      await fs.writeFile(this.options.outputFile, report, "utf-8");
      console.log(`📝 Report saved to ${this.options.outputFile}\n`);
    }

    // Exit with error code if broken links found
    const broken = this.results.filter((r) => r.status !== "ok");
    if (broken.length > 0) {
      process.exit(1);
    }
  }
}

// Main execution
async function main() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.ir";
  const checkExternal = process.argv.includes("--external");
  const outputFile = process.argv.includes("--output")
    ? process.argv[process.argv.indexOf("--output") + 1]
    : undefined;

  const checker = new LinkChecker({
    baseUrl,
    checkExternal,
    timeout: 10000,
    maxConcurrent: 5,
    outputFile,
  });

  await checker.run();
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
