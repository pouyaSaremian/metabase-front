import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BusinessIntelligenceHeader from "@/components/business-intelligence/BusinessIntelligenceHeader";
import QueryingSection from "@/components/business-intelligence/QueryingSection";
import AvoidRepeatedRequestsSection from "@/components/business-intelligence/AvoidRepeatedRequestsSection";
import PermissionsSection from "@/components/business-intelligence/PermissionsSection";
import Testimonial from "@/components/business-intelligence/Testimonial";
import WorksWithStackSection from "@/components/business-intelligence/WorksWithStackSection";
import BusinessIntelligenceFooter from "@/components/business-intelligence/BusinessIntelligenceFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "هوش تجاری خودخدمت | Metabase",
  description:
    "هوش تجاری خودخدمت. تیم خود را توانمند کنید تا از داده‌ها و داشبوردها با استفاده از Metabase بهره ببرند.",
  keywords: [
    "هوش تجاری",
    "هوش تجاری خودخدمت",
    "تجزیه و تحلیل داده",
    "داشبورد",
    "گزارش‌گیری",
    "BI",
    "Business Intelligence",
    "Self-service BI",
    "Metabase",
    "هوش تجاری متن‌باز",
  ],
  authors: [{ name: "Metabase Persian" }],
  openGraph: {
    title: "هوش تجاری خودخدمت | Metabase",
    description:
      "هوش تجاری خودخدمت. تیم خود را توانمند کنید تا از داده‌ها و داشبوردها با استفاده از Metabase بهره ببرند.",
    type: "website",
    locale: "fa_IR",
    url: "/product/business-intelligence",
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    images: [
      {
        url: "/images/product/business-intelligence/hero.png",
        width: 1200,
        height: 600,
        alt: "هوش تجاری Metabase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "هوش تجاری خودخدمت | Metabase",
    description:
      "هوش تجاری خودخدمت. تیم خود را توانمند کنید تا از داده‌ها و داشبوردها با استفاده از Metabase بهره ببرند.",
    images: ["/images/product/business-intelligence/hero.png"],
    site: "@metabase",
  },
  alternates: {
    canonical: "/product/business-intelligence",
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

export default function BusinessIntelligencePage() {
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "هوش تجاری خودخدمت | Metabase",
    description:
      "هوش تجاری خودخدمت. تیم خود را توانمند کنید تا از داده‌ها و داشبوردها با استفاده از Metabase بهره ببرند.",
    url: "/product/business-intelligence",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Metabase",
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
          name: "هوش تجاری",
          item: "/product/business-intelligence",
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
          <BusinessIntelligenceHeader />
          <QueryingSection />
          <AvoidRepeatedRequestsSection />
          <Testimonial
            text="با تشکر از Metabase، دیگر نیازی نیست از یک مهندس بخواهم داده‌های خاصی از پایگاه داده مشتریان را برایم بیاورد. من می‌توانم خودم آن کوئری را انجام دهم و در عرض چند دقیقه به جای چند ساعت یا چند روز به مشتری کمک کنم."
            author="Peer Richelsen"
            company="بنیان‌گذار مشترک، Cal.com"
            imageSrc="/images/product/business-intelligence/peer-richelsen.png"
          />
          <PermissionsSection />
          <Testimonial
            text="مجوزهای پیشرفته و فیلتر کردن ردیف‌ها ویژگی‌های ضروری برای ما هستند! آن‌ها به ما امکان می‌دهند بدون زحمت داشبوردهای مقیاس‌پذیری ایجاد کنیم که فقط اطلاعاتی را نمایش می‌دهند که کاربر مجاز به مشاهده آن‌ها است. Metabase به ابزاری ضروری در گردش کار ما تبدیل شده است."
            author="Arthur Benhamou"
            company="مدیر ارشد عملیات، Comptoir de L'or"
            imageSrc="/images/profiles/arthur-benhamou.png"
          />
          <WorksWithStackSection />
          <Testimonial
            text="Metabase ابزاری شگفت‌انگیز برای استارتاپ‌هایی است که می‌خواهند راه‌حل‌های 90/10 برای تجزیه و تحلیل داده با قیمت مقرون به صرفه داشته باشند. این همچنان مؤثرترین راه برای ما برای ساخت گزارش‌دهی به صورت کارآمد است."
            author="Derrick Mar"
            company="مدیر فناوری، Pathrise"
            imageSrc="/images/profiles/derrick-mar.png"
          />
          <BusinessIntelligenceFooter />
        </main>
        <Footer />
      </div>
    </>
  );
}
