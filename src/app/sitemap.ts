import { MetadataRoute } from "next";
import { getAllDocsSlugs } from "@/content/docs/markdown";
import { getAllLearnSlugs } from "@/content/learn";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.ir";

interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static routes with their priorities and change frequencies
  const staticRoutes: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/data-sources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coming-soon`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/latest`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Feature pages
  const featureRoutes: SitemapEntry[] = [
    {
      url: `${baseUrl}/features/analytics-dashboards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/data-segregation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/drill-through`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/models`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/permissions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/query-builder`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/sql-editor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/usage-analytics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/white-label-analytics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Product pages
  const productRoutes: SitemapEntry[] = [
    {
      url: `${baseUrl}/product/business-intelligence`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product/csv-uploads`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product/embedded-analytics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product/embedded-analytics-sdk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Landing pages
  const landingPageRoutes: SitemapEntry[] = [
    {
      url: `${baseUrl}/lp/bi-for-startups-demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lp/business-intelligence-demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lp/embedded-analytics-demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lp/metabase-vs-domo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lp/metabase-vs-looker`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lp/metabase-vs-looker-studio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Cloud pages
  const cloudRoutes: SitemapEntry[] = [
    {
      url: `${baseUrl}/cloud`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cloud/login`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic docs routes
  const docsSlugs = await getAllDocsSlugs();
  const docsRoutes: SitemapEntry[] = docsSlugs.map((slug) => {
    const path = slug.join("/");
    return {
      url: `${baseUrl}/docs/latest/${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  // Dynamic learn routes
  const learnSlugs = await getAllLearnSlugs();
  const learnRoutes: SitemapEntry[] = learnSlugs
    .filter((slug) => slug.length > 0) // Filter out empty slugs (already in static routes)
    .map((slug) => {
      const path = slug.join("/");
      return {
        url: `${baseUrl}/learn/${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      };
    });

  // Combine all routes
  const allRoutes: SitemapEntry[] = [
    ...staticRoutes,
    ...featureRoutes,
    ...productRoutes,
    ...landingPageRoutes,
    ...cloudRoutes,
    ...docsRoutes,
    ...learnRoutes,
  ];

  // Convert to MetadataRoute.Sitemap format
  return allRoutes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
