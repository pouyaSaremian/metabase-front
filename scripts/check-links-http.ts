#!/usr/bin/env node

/**
 * HTTP-based Link Checker Script
 *
 * This script checks for broken links by making HTTP requests to a running server.
 * Use this when you have a dev server or production build running.
 *
 * Usage:
 *   pnpm check-links:http                    # Check against localhost:3000
 *   pnpm check-links:http --url http://localhost:3000
 *   pnpm check-links:http --url https://metabase.ir
 */

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
  outputFile?: string;
}

class HttpLinkChecker {
  private results: LinkCheckResult[] = [];
  private checkedUrls = new Set<string>();
  private options: CheckOptions;

  constructor(options: CheckOptions) {
    this.options = options;
  }

  /**
   * Check if a URL is accessible via HTTP
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

    // Skip anchors and mailto links
    if (url.startsWith("#") || url.startsWith("mailto:")) {
      return { url, status: "ok", source };
    }

    // Normalize URL
    let checkUrl = url;
    if (url.startsWith("/")) {
      checkUrl = `${this.options.baseUrl}${url}`;
    } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
      checkUrl = `${this.options.baseUrl}/${url}`;
    }

    // Skip external links if not checking them
    if (
      !this.options.checkExternal &&
      !checkUrl.startsWith(this.options.baseUrl)
    ) {
      return { url, status: "ok", source };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.options.timeout
      );

      const response = await fetch(checkUrl, {
        method: "HEAD",
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; LinkChecker/1.0)",
        },
        redirect: "follow",
      });

      clearTimeout(timeoutId);

      const status = response.ok ? "ok" : "broken";

      return {
        url,
        status,
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
   * Check all URLs from sitemap
   */
  private async checkSitemapUrls(): Promise<void> {
    console.log("🗺️  Checking sitemap URLs...");

    try {
      const sitemapModule = await import("../src/app/sitemap");
      const sitemap = await sitemapModule.default();

      console.log(`Found ${sitemap.length} URLs in sitemap`);

      for (let i = 0; i < sitemap.length; i++) {
        const entry = sitemap[i];
        process.stdout.write(
          `\rChecking ${i + 1}/${sitemap.length}: ${entry.url}`
        );
        const result = await this.checkUrl(entry.url, "sitemap");
        this.results.push(result);
      }
      console.log("\n");
    } catch (error) {
      console.error("\nError checking sitemap URLs:", error);
      console.log("Make sure the sitemap module can be imported.");
    }
  }

  /**
   * Generate report
   */
  private generateReport(): string {
    const broken = this.results.filter((r) => r.status !== "ok");
    const ok = this.results.filter((r) => r.status === "ok");
    const errors = this.results.filter((r) => r.status === "error");
    const timeouts = this.results.filter((r) => r.status === "timeout");

    let report = "\n" + "=".repeat(80) + "\n";
    report += "🔍 HTTP LINK CHECKER REPORT\n";
    report += "=".repeat(80) + "\n\n";
    report += `Base URL: ${this.options.baseUrl}\n`;
    report += `Total links checked: ${this.results.length}\n`;
    report += `✅ Working: ${ok.length}\n`;
    report += `❌ Broken (${broken.length}):\n`;
    report += `   - HTTP Errors: ${
      broken.filter((r) => r.statusCode).length
    }\n`;
    report += `   - Network Errors: ${errors.length}\n`;
    report += `   - Timeouts: ${timeouts.length}\n\n`;

    if (broken.length > 0) {
      report += "BROKEN LINKS:\n";
      report += "-".repeat(80) + "\n";

      const byStatus = {
        broken: broken.filter((r) => r.statusCode),
        error: errors,
        timeout: timeouts,
      };

      if (byStatus.broken.length > 0) {
        report += "\n❌ HTTP Errors:\n";
        for (const result of byStatus.broken) {
          report += `   ${result.url}\n`;
          if (result.statusCode) {
            report += `      Status: ${result.statusCode}\n`;
          }
          if (result.source) {
            report += `      Source: ${result.source}\n`;
          }
        }
      }

      if (byStatus.error.length > 0) {
        report += "\n⚠️  Network Errors:\n";
        for (const result of byStatus.error) {
          report += `   ${result.url}\n`;
          if (result.error) {
            report += `      Error: ${result.error}\n`;
          }
          if (result.source) {
            report += `      Source: ${result.source}\n`;
          }
        }
      }

      if (byStatus.timeout.length > 0) {
        report += "\n⏱️  Timeouts:\n";
        for (const result of byStatus.timeout) {
          report += `   ${result.url}\n`;
          if (result.source) {
            report += `      Source: ${result.source}\n`;
          }
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
    console.log("🚀 Starting HTTP link checker...\n");
    console.log(`Base URL: ${this.options.baseUrl}\n`);

    await this.checkSitemapUrls();

    const report = this.generateReport();
    console.log(report);

    // Save report to file if requested
    if (this.options.outputFile) {
      const fs = await import("node:fs/promises");
      await fs.writeFile(this.options.outputFile, report, "utf-8");
      console.log(`📝 Report saved to ${this.options.outputFile}\n`);
    }

    // Exit with error code if broken links found
    const broken = this.results.filter((r) => r.status !== "ok");
    if (broken.length > 0) {
      console.log(`\n❌ Found ${broken.length} broken link(s)\n`);
      process.exit(1);
    } else {
      console.log("\n✅ All links are working!\n");
    }
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const urlIndex = args.indexOf("--url");
  const baseUrl =
    urlIndex !== -1 && args[urlIndex + 1]
      ? args[urlIndex + 1]
      : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const checkExternal = args.includes("--external");
  const outputFile = args.includes("--output")
    ? args[args.indexOf("--output") + 1]
    : undefined;

  const checker = new HttpLinkChecker({
    baseUrl,
    checkExternal,
    timeout: 10000,
    outputFile,
  });

  await checker.run();
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
