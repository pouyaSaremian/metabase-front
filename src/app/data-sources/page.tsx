import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataSourcesHero from "@/components/data-sources/DataSourcesHero";
import OfficialConnectorsSection from "@/components/data-sources/OfficialConnectorsSection";
import CommunityConnectorsSection from "@/components/data-sources/CommunityConnectorsSection";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";

export const metadata: Metadata = {
  title: "منابع داده | Metabase",
  description:
    "Metabase با انواع مختلف پایگاه‌های داده و انبارهای داده ارتباط برقرار می‌کند تا بتوانید داده‌های خود را کاوش و از آن‌ها یاد بگیرید، بدون توجه به محل ذخیره‌سازی آن‌ها.",
  keywords: [
    "منابع داده",
    "اتصال پایگاه داده",
    "Metabase",
    "داده‌کاوی",
    "انبار داده",
    "اتصال‌دهنده داده",
    "پایگاه داده",
    "BigQuery",
    "PostgreSQL",
    "MySQL",
    "Snowflake",
    "Amazon Redshift",
  ],
  authors: [{ name: "Metabase Persian" }],
  openGraph: {
    title: "منابع داده | Metabase",
    description:
      "Metabase با انواع مختلف پایگاه‌های داده و انبارهای داده ارتباط برقرار می‌کند تا بتوانید داده‌های خود را کاوش و از آن‌ها یاد بگیرید.",
    type: "website",
    locale: "fa_IR",
    url: `${baseUrl}/data-sources`,
    siteName:
      "Metabase | Open source Business Intelligence and Embedded Analytics",
    images: [
      {
        url: `${baseUrl}/images/datasources/data-sources-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Metabase Data Sources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "منابع داده | Metabase",
    description:
      "Metabase با انواع مختلف پایگاه‌های داده و انبارهای داده ارتباط برقرار می‌کند.",
    site: "@metabase",
    images: [`${baseUrl}/images/datasources/data-sources-og.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/data-sources`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "og:image": `${baseUrl}/images/datasources/data-sources-og.jpg`,
  },
};

interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    "@type": string;
    name: string;
    url: string;
  };
  breadcrumb: {
    "@type": string;
    itemListElement: Array<{
      "@type": string;
      position: number;
      name: string;
      item: string;
    }>;
  };
  mainEntity: {
    "@type": string;
    name: string;
    description: string;
    numberOfItems: number;
    itemListElement: Array<{
      "@type": string;
      position: number;
      name: string;
      description: string;
    }>;
  };
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  url: string;
  sameAs: string[];
  logo: string;
  name: string;
  description: string;
  email: string;
  foundingDate: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
    addressRegion: string;
    postalCode: string;
  };
  knowsAbout: Array<{
    "@type": string;
    name: string;
  }>;
}

export default function DataSourcesPage() {
  const pageUrl = `${baseUrl}/data-sources`;

  // WebPage structured data with ItemList for connectors
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "منابع داده | Metabase",
    description:
      "Metabase با انواع مختلف پایگاه‌های داده و انبارهای داده ارتباط برقرار می‌کند تا بتوانید داده‌های خود را کاوش و از آن‌ها یاد بگیرید.",
    url: pageUrl,
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "WebSite",
      name: "Metabase",
      url: baseUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "منابع داده",
          item: pageUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "منابع داده Metabase",
      description:
        "فهرست کامل اتصال‌دهنده‌های رسمی و جامعه برای اتصال Metabase به پایگاه‌های داده و انبارهای داده",
      numberOfItems: 30,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Amazon Athena",
          description:
            "اتصال یک سرویس کاملاً مدیریت شده برای پرس‌وجوی داده‌های S3",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Amazon Redshift",
          description: "یک سرویس انبار داده کاملاً مدیریت شده در مقیاس پتابایت",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BigQuery",
          description: "یک انبار داده کاملاً مدیریت شده و بدون سرور",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "PostgreSQL",
          description: "یک سیستم مدیریت پایگاه داده رابطه‌ای منبع باز",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "MySQL",
          description: "یک سیستم مدیریت پایگاه داده رابطه‌ای منبع باز",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Snowflake",
          description: "یک پلتفرم داده ابری",
        },
      ],
    },
  };

  // Organization structured data
  const organizationSchema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: `${baseUrl}/`,
    sameAs: [
      "https://github.com/metabase",
      "https://www.linkedin.com/company/metabase/",
      "https://x.com/metabase",
      "https://www.youtube.com/@metabasedata",
    ],
    logo: "https://github.com/metabase/metabase.github.io/blob/master/images/metabase-logo.png?raw=true",
    name: "Metabase",
    description:
      "Metabase یک ابزار منبع باز هوش تجاری و تجزیه و تحلیل تعبیه شده است. در 5 دقیقه به پشته داده خود متصل شوید تا پرس‌وجوها، تجسم‌ها و داشبوردها را برای همه آسان کنید—بدون نیاز به SQL",
    email: "hello@metabase.com",
    foundingDate: "2015-02-01T00:00:00.000Z",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9740 Campo Rd",
      addressLocality: "Spring Valley",
      addressCountry: "USA",
      addressRegion: "CA",
      postalCode: "91977",
    },
    knowsAbout: [
      { "@type": "Thing", name: "Business Intelligence" },
      { "@type": "Thing", name: "Embedded Analytics" },
      { "@type": "Thing", name: "Self-service analytics" },
      { "@type": "Thing", name: "Open source Business Intelligence" },
      { "@type": "Thing", name: "Data Sources" },
      { "@type": "Thing", name: "Database Connectors" },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Header />
        <main className="data-sources-index-page" role="main">
          <DataSourcesHero />
          <OfficialConnectorsSection />
          <CommunityConnectorsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
