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
import EmbeddedAnalyticsFAQ from "@/components/embedded-analytics/EmbeddedAnalyticsFAQ";
import EmbeddedAnalyticsFooter from "@/components/embedded-analytics/EmbeddedAnalyticsFooter";
import type { Metadata } from "next";

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
    "Metabase",
    "تجزیه و تحلیل سفارشی",
  ],
  authors: [{ name: "Metabase Persian" }],
  openGraph: {
    title: "تجزیه و تحلیل تعبیه شده | Metabase",
    description:
      "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
    type: "website",
    locale: "fa_IR",
    url: "/product/embedded-analytics",
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    images: [
      {
        url: "/images/product/embedded-analytics/hero_image.png",
        width: 1200,
        height: 600,
        alt: "تجزیه و تحلیل تعبیه شده Metabase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تجزیه و تحلیل تعبیه شده | Metabase",
    description:
      "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
    images: ["/images/product/embedded-analytics/hero_image.png"],
    site: "@metabase",
  },
  alternates: {
    canonical: "/product/embedded-analytics",
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
};

interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
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
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "تجزیه و تحلیل تعبیه شده | Metabase",
    description:
      "تجزیه و تحلیل تعبیه شده. ایجاد و تعبیه تجزیه و تحلیل تعاملی در محصولات خود، با ابزارهای ساده اما قدرتمند که به شما امکان می‌دهد ظاهر و احساس برند خود را مطابقت دهید.",
    url: "/product/embedded-analytics",
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
          item: "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "محصول",
          item: "/product",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "تجزیه و تحلیل تعبیه شده",
          item: "/product/embedded-analytics",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
          <EmbeddedAnalyticsFAQ />
          <EmbeddedAnalyticsFooter />
        </main>
        <Footer />
      </div>
    </>
  );
}
