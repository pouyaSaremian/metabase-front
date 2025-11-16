import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmbeddedAnalyticsHeader from "@/components/embedded-analytics/EmbeddedAnalyticsHeader";
import SuperFastToPrototypeSection from "@/components/embedded-analytics/SuperFastToPrototypeSection";
import ProofOfConceptSection from "@/components/embedded-analytics/ProofOfConceptSection";
import FlexibleSolutionsSection from "@/components/embedded-analytics/FlexibleSolutionsSection";
import NoCodeIterationSection from "@/components/embedded-analytics/NoCodeIterationSection";
import WebinarPromo from "@/components/embedded-analytics/WebinarPromo";
import MultiTenantSecureSection from "@/components/embedded-analytics/MultiTenantSecureSection";
import WorksWithStackSection from "@/components/embedded-analytics/WorksWithStackSection";
import CustomerDataExperiencesSection from "@/components/embedded-analytics/CustomerDataExperiencesSection";
import ImplementationTypeSection from "@/components/embedded-analytics/ImplementationTypeSection";
import EasyToUseSection from "@/components/embedded-analytics/EasyToUseSection";
import CustomizabilitySection from "@/components/embedded-analytics/CustomizabilitySection";
import TrackInAppReportingSection from "@/components/embedded-analytics/TrackInAppReportingSection";
import WorldClassSuccessSection from "@/components/embedded-analytics/WorldClassSuccessSection";
import WhyNotBuildItSection from "@/components/embedded-analytics/WhyNotBuildItSection";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import EmbeddedAnalyticsFooter from "@/components/embedded-analytics/EmbeddedAnalyticsFooter";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";

export const metadata: Metadata = {
  title: "تجزیه و تحلیل تعبیه شده | Metabase",
  description:
    "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
  keywords: [
    "تجزیه و تحلیل تعبیه شده",
    "Embedded Analytics",
    "تجزیه و تحلیل درون محصول",
    "گزارش‌گیری درون برنامه",
    "SDK تجزیه و تحلیل",
    "React SDK",
    "تجزیه و تحلیل سفارشی",
    "White Label Analytics",
    "Embedded BI",
    "In-App Analytics",
    "Embedded Dashboards",
    "Metabase",
    "هوش تجاری تعبیه شده",
    "داشبورد تعبیه شده",
    "گزارش‌گیری سفارشی",
  ],
  authors: [{ name: "Metabase Persian" }],
  creator: "Metabase",
  publisher: "Metabase",
  openGraph: {
    title: "تجزیه و تحلیل تعبیه شده | Metabase",
    description:
      "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
    type: "website",
    locale: "fa_IR",
    url: `${baseUrl}/product/embedded-analytics`,
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    images: [
      {
        url: `${baseUrl}/images/product/embedded-analytics/hero_image.png`,
        width: 1200,
        height: 600,
        alt: "تجزیه و تحلیل تعبیه شده Metabase - ایجاد داشبوردها و گزارش‌های تعاملی در محصولات شما",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تجزیه و تحلیل تعبیه شده | Metabase",
    description:
      "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
    images: [`${baseUrl}/images/product/embedded-analytics/hero_image.png`],
    site: "@metabase",
    creator: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/product/embedded-analytics`,
    languages: {
      fa: `${baseUrl}/product/embedded-analytics`,
      en: `${baseUrl}/product/embedded-analytics`,
    },
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
  category: "نرم‌افزار تجاری",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  inLanguage?: string;
  isPartOf?: {
    "@type": string;
    name: string;
    url: string;
  };
  datePublished?: string;
  dateModified?: string;
  mainEntity: {
    "@type": string;
    name: string;
    applicationCategory: string;
    operatingSystem: string;
    offers: {
      "@type": string;
      price: string;
      priceCurrency: string;
    };
    aggregateRating: {
      "@type": string;
      ratingValue: string;
      ratingCount: string;
    };
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
}

export default function EmbeddedAnalyticsPage() {
  const pageUrl = `${baseUrl}/product/embedded-analytics`;
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "تجزیه و تحلیل تعبیه شده | Metabase",
    description:
      "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
    url: pageUrl,
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "WebSite",
      name: "Metabase",
      url: baseUrl,
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Metabase Embedded Analytics",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "80000",
      },
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
          name: "محصول",
          item: `${baseUrl}/product`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "تجزیه و تحلیل تعبیه شده",
          item: pageUrl,
        },
      ],
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metabase",
    url: baseUrl,
    logo: `${baseUrl}/images/logos/metabase-logo.svg`,
    sameAs: [
      "https://twitter.com/metabase",
      "https://github.com/metabase/metabase",
      "https://www.linkedin.com/company/metabase",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["fa", "en"],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Metabase Embedded Analytics",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "80000",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "تجزیه و تحلیل تعبیه شده",
      "داشبوردهای سفارشی",
      "React SDK",
      "چند مستأجره",
      "امنیت پیشرفته",
      "White Label",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Header />
        <main>
          <EmbeddedAnalyticsHeader />
          <SuperFastToPrototypeSection />
          <ProofOfConceptSection />
          <FlexibleSolutionsSection />
          <NoCodeIterationSection />
          <WebinarPromo />
          <MultiTenantSecureSection />
          <CustomerDataExperiencesSection />
          <ImplementationTypeSection />
          <EasyToUseSection />
          <WorksWithStackSection />
          <CustomizabilitySection />
          <TrackInAppReportingSection />
          <WorldClassSuccessSection />
          <WhyNotBuildItSection />
          <FAQSection
            items={[
              {
                question: "Metabase هنگام تعبیه در برنامه ما چگونه عمل می‌کند؟",
                answer: (
                  <p>
                    Metabase برای سرعت بهینه شده است و به صورت زنده روی داده‌های
                    شما اجرا می‌شود—بدون انتظار برای استخراج یا همگام‌سازی.
                    نمودارها و داشبوردها به سرعت بارگذاری می‌شوند و عملکرد با
                    زیرساخت شما مقیاس می‌شود.
                  </p>
                ),
              },
              {
                question: "چقدر قابل سفارشی است؟",
                answer: (
                  <p>
                    نمودارها و داشبوردهای تعاملی تعبیه شده خود را با برچسب سفید
                    بدون کد و ابزارهای کافی برای رسیدن به جایی که نیاز دارید
                    بدون غرق شدن سفارشی کنید. از React SDK برای کامپوننت‌های
                    تجزیه و تحلیل سفارشی که با رابط کاربری شما با گزینه‌های تم
                    CSS یکپارچه می‌شوند استفاده کنید.
                  </p>
                ),
              },
              {
                question:
                  "آیا به اندازه کافی امن است تا اطمینان حاصل شود که مشتریان من هرگز داده‌های مشتری دیگری را نمی‌بینند؟",
                answer: (
                  <p>
                    کاملاً. Metabase با انطباق درجه یک، مانند SOC2 Type II، GDPR
                    و CCPA به‌روز است. مجوزهای دقیق، چند مستأجره، تجزیه و تحلیل
                    استفاده و لاگ‌های حسابرسی، و میزبانی خودی در دسترس است.
                  </p>
                ),
              },
              {
                question:
                  "آیا می‌توانیم ساده شروع کنیم و بعداً به React SDK منتقل شویم؟",
                answer: (
                  <p>
                    بله، و این یک مسیر رایج است. Embedded Analytics JS یک
                    کتابخانه JavaScript ساخته شده بر روی React SDK است تا به
                    سرعت با بدون کد بسازید و ارسال کنید، تقاضا را اعتبارسنجی
                    کنید، سپس{" "}
                    <Link
                      href="/product/embedded-analytics-sdk"
                      className="text-metabase-primary hover:underline"
                    >
                      برای تجربه یکپارچه‌تر و برند شده به SDK منتقل شوید
                    </Link>
                    . Metabase از هر دو گردش کار با حداقل اصطکاک پشتیبانی
                    می‌کند.
                  </p>
                ),
              },
            ]}
            title="برای توسعه‌دهندگان: سوالات متداول"
            description="برای اطلاعات بیشتر در مورد نحوه کار و راه‌اندازی سریع، به مستندات یا Quickstart مراجعه کنید."
            className="container mx-auto px-4"
          />
          <EmbeddedAnalyticsFooter />
        </main>
        <Footer />
      </div>
    </>
  );
}
