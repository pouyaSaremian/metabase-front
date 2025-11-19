import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/product/embedded-analytics-sdk`;

export const metadata: Metadata = {
  title: "SDK آنالیز تعبیه‌شده متابیس | تحلیل درون‌برنامه‌ای سفارشی",
  description:
    "با SDK آنالیز تعبیه‌شدهٔ متابیس برای React، گزارش‌های تعاملی و بومی در محصول خود بسازید، ظاهر را شخصی کنید و دسترسی‌ها را دقیق کنترل کنید.",
  keywords: [
    "Embedded Analytics SDK",
    "آنالیز تعبیه‌شده",
    "Metabase React SDK",
    "گزارش درون‌برنامه‌ای",
    "تحلیل چندمستاجره",
    "سفارشی‌سازی رابط گزارش",
  ],
  openGraph: {
    title: "SDK آنالیز تعبیه‌شده متابیس | تحلیل درون‌برنامه‌ای سفارشی",
    description:
      "ابزار React برای ساخت سریع تحلیل درون‌برنامه‌ای که دقیقاً شبیه محصول شماست، بدون نوشتن زیرساخت پیچیده.",
    url: pageUrl,
    type: "website",
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: `${baseUrl}/images/product/embedded-analytics-sdk/hero-sdk.png`,
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش رابط Embedding SDK متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDK آنالیز تعبیه‌شده متابیس | تحلیل درون‌برنامه‌ای سفارشی",
    description:
      "با SDK متابیس، اجزای تحلیلی را درون اپلیکیشن خود جاسازی کنید و تجربه‌ای یکپارچه بسازید.",
    images: [`${baseUrl}/images/product/embedded-analytics-sdk/hero-sdk.png`],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/product/embedded-analytics-sdk`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Metabase Embedded Analytics SDK",
  description:
    "کیت توسعهٔ React برای ساخت سریع تحلیل تعبیه‌شده با کنترل کامل روی ظاهر، دسترسی و تجربهٔ کاربری.",
  brand: {
    "@type": "Brand",
    name: "Metabase",
    url: baseUrl,
  },
  url: pageUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
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
      name: "SDK آنالیز تعبیه‌شده",
      item: pageUrl,
    },
  ],
};

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const heroButtons = [
  {
    label: "دموی زنده را ببینید",
    href: "https://embedded-analytics-sdk-demo.metabase.com/admin/products/3",
    ariaLabel: "مشاهده دموی زنده SDK تعبیه‌شده متابیس",
    variant: "primary" as const,
  },
  {
    label: "شروع سریع مستندات",
    href: "https://www.metabase.com/docs/latest/embedding/sdk/quickstart",
    ariaLabel: "رفتن به راهنمای شروع سریع SDK متابیس",
    variant: "outline" as const,
  },
];

type HeroButton = (typeof heroButtons)[number];

const buttonStyles: Record<HeroButton["variant"], string> = {
  primary:
    "bg-metabase-primary text-white hover:bg-metabase-primary-dark focus-visible:ring-metabase-primary-dark",
  outline:
    "border border-metabase-primary text-metabase-primary hover:bg-metabase-primary/10 focus-visible:ring-metabase-primary",
};

const codeSnippet = "npx @metabase/embedding-sdk-react@latest start";

const valueCards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        className="text-metabase-primary"
        aria-hidden="true"
      >
        <path
          d="M12.003 4.75 4.753 8s-.75 11.25 7.25 11.25S19.253 8 19.253 8l-7.25-3.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m9.75 12.75 1.25 1.5 3.25-4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "امن و چندمستاجره",
    description:
      "داده از سرور شما خارج نمی‌شود و می‌توانید دقیقاً مشخص کنید هر مشتری چه چیزی را می‌بیند یا می‌تواند انجام دهد.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        className="text-metabase-primary"
        aria-hidden="true"
      >
        <path
          d="m8 15.86-3.25 2.39V5.75L8 8.14M19.25 12l-8.5-6.25v12.5l8.5-6.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "شروع در چند دقیقه",
    description:
      "SDK را نصب کنید، سشن را منتقل کنید و اولین نمودار را سریعاً در محصول جاسازی کنید؛ سپس متناسب با نیاز رشد دهید.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        className="text-metabase-primary"
        aria-hidden="true"
      >
        <path
          d="M19.25 12a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.25 12a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM7 17l2.5-2.5M17 17l-2.5-2.5M9.5 9.5 7 7M14.5 9.5 17 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "مستندات و پشتیبانی توسعه‌دهنده",
    description:
      "نمونه‌کد، پلاگین‌ها و تیم پشتیبانی در دسترس است تا ادغام شما طبق برنامه جلو برود.",
  },
];

const trustLogos = [
  { name: "Hugging Face", src: "/images/logos/Huggingface.svg", width: 120 },
  { name: "McDonald's", src: "/images/logos/mcdonalds.svg", width: 120 },
  { name: "Huma", src: "/images/logos/huma.svg", width: 120 },
  { name: "Capital One", src: "/images/logos/capital-one.svg", width: 150 },
  { name: "Airbyte", src: "/images/logos/home/airbyte.svg", width: 120 },
  { name: "Betterment", src: "/images/logos/betterment.svg", width: 140 },
  {
    name: "Deutsche Telekom",
    src: "/images/logos/deutsche-telekom.svg",
    width: 150,
  },
  { name: "Kong", src: "/images/logos/kong.svg", width: 100 },
];

interface FeatureHighlight {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  code?: string;
  extra?: ReactNode;
  reversed?: boolean;
}

const featureHighlights: FeatureHighlight[] = [
  {
    eyebrow: "یکپارچگی کامل با UI",
    title: "هر جزء را دقیقاً جایی قرار دهید که به آن نیاز دارید",
    description:
      "از نمودار تکی تا سازندهٔ پرسش، هر چیزی را جداگانه جاسازی کنید و بدون محدودیت عرض و ارتفاع، آن را با طراحی واکنش‌گرا هماهنگ کنید. منوها را بازآرایی کنید، فیلدها را بچینید و دکمه‌ها را جابه‌جا کنید تا تجربه‌ای بومی بسازید.",
    image: {
      src: "/images/product/embedded-analytics-sdk/integrate-with-ui-1.png",
      alt: "نمایش جاسازی اجزای متابیس در رابط سفارشی",
      width: 700,
      height: 420,
    },
    code: `import {
  MetabaseProvider,
  InteractiveQuestion,
  defineEmbeddingSdkConfig,
} from "@metabase/embedding-sdk-react";

const config = defineEmbeddingSdkConfig({
  metabaseInstanceUrl: "https://metabase.example.com",
  authProviderUri: "https://app.example.com/sso/metabase",
});

<MetabaseProvider config={config}>
  <InteractiveQuestion
    questionId={42}
    isSaveEnabled={false}
    withResetButton
    customTitle="نرخ سفارش‌ها در زمان"
  />
</MetabaseProvider>;`,
  },
  {
    eyebrow: "پوسته‌سازی زنده",
    title: "فونت، رنگ و سایه را برای هر مشتری تغییر دهید",
    description:
      "تم‌ها را با فونت سازمانی، پالت رنگ و اشکال اختصاصی تعریف کنید و برای هر سازمان یا حتی هر کاربر، تجربهٔ متفاوتی بسازید.",
    image: {
      src: "/images/product/embedded-analytics-sdk/dynamic-theming-1.png",
      alt: "نمونه پوسته‌های مختلف برای اجزای متابیس",
      width: 700,
      height: 420,
    },
    extra: (
      <div className="mt-6 flex flex-wrap gap-4">
        {[
          "/images/product/embedded-analytics-sdk/dynamic-theming-2.png",
          "/images/product/embedded-analytics-sdk/dynamic-theming-3.png",
        ].map((src) => (
          <Image
            key={src}
            src={src}
            alt="پیش‌نمایش تم سفارشی"
            width={320}
            height={200}
            className="rounded-2xl border border-blue-100 object-cover"
          />
        ))}
      </div>
    ),
    reversed: true,
    code: `const theme = {
  fontFamily: "IRANSans",
  colors: {
    brand: "#5853FF",
    "brand-hover": "#423BDB",
    "text-primary": "#1F2933",
    background: "#F4F5FF",
    charts: ["#5853FF", "#FF6B6B", "#FDBF5E", "#22C55E"],
  },
  components: {
    dashboard: {
      card: { borderRadius: "20px", border: "1px solid #E0E7FF" },
    },
  },
};`,
  },
  {
    eyebrow: "کنترل دسترسی جزءبه‌جزء",
    title: "تعریف کنید چه کسی چه چیزی را ببیند یا انجام دهد",
    description:
      "برای هر جزء، دسترسی خواندن، ذخیره‌سازی، drill-through و اکشن‌ها را تعیین کنید. کاربران عادی فقط تماشا می‌کنند، درحالی‌که تیم داده می‌تواند ویرایش و ذخیره انجام دهد.",
    image: {
      src: "/images/product/embedded-analytics-sdk/manage-what-people-can-see-1.png",
      alt: "نمونه کنترل دسترسی در SDK متابیس",
      width: 700,
      height: 420,
    },
    code: `switch (currentUser.role) {
  case "curator":
    return (
      <MetabaseProvider config={config} theme={theme}>
        <InteractiveQuestion questionId={questionId} />
      </MetabaseProvider>
    );
  default:
    return (
      <MetabaseProvider config={config} theme={theme}>
        <StaticQuestion questionId={questionId} />
      </MetabaseProvider>
    );
}`,
  },
  {
    eyebrow: "تجربه‌ای کاملاً سفارشی",
    title: "رفتار و افزونه‌ها را با کد خودتان بنویسید",
    description:
      "از پلاگین‌ها و رویدادها استفاده کنید تا اکشن اختصاصی به منو اضافه کنید، فیلترها را بازنویسی نمایید یا گردش‌کار جدیدی بسازید.",
    image: {
      src: "/images/product/embedded-analytics-sdk/ux-by-you-1.png",
      alt: "نمونه تجربهٔ سفارشی شده با پلاگین",
      width: 640,
      height: 400,
    },
    reversed: true,
    code: `<MetabaseProvider
  config={config}
  theme={theme}
  pluginsConfig={{
    mapQuestionClickActions: (actions, clicked) => {
      if (clicked.column?.name === "user_id") {
        return [
          ...actions,
          {
            buttonType: "horizontal",
            type: "custom",
            name: "view-profile",
            icon: "person",
            title: "نمایش پروفایل کاربر",
            onClick: ({ closePopover }) => {
              goToProfile(clicked.value);
              closePopover();
            },
          },
        ];
      }
      return actions;
    },
  }}
/>;`,
  },
];

const promoCard = {
  title: "وبینار زنده: آنالیز تعبیه‌شده با متابیس",
  description:
    "در یک جلسهٔ زنده، مراحل پیاده‌سازی Embedding را از متخصصان متابیس یاد بگیرید.",
  href: "https://www.metabase.com/events/embedded-analytics-with-metabase",
  cta: "همین حالا ثبت‌نام کنید",
  image: {
    src: "/images/events/categories/andrew-icon.jpg",
    alt: "تصویر سخنران وبینار متابیس",
  },
};

const caseStudies = [
  {
    logo: "/images/case-studies/marketfuel-logo.png",
    title: "از ایده تا نسخهٔ عملی در ۳۰ روز",
    description:
      "پلتفرم Marketfuel می‌خواست تجربهٔ فروشگاه آنلاین خود را بدون خروج از برند ارتقا دهد. با SDK، تنها در یک ماه و با یک توسعه‌دهنده به نمونهٔ قابل‌ارائه رسیدند.",
    quote:
      "«استفاده از متابیس برای ما نقطهٔ عطف بود؛ زمان و منابع را حفظ کرد و تجربهٔ مشتری را ارتقا داد.»",
    author: "برایان اورسو، هم‌بنیان‌گذار و CTO",
    link: "https://www.metabase.com/case-studies/marketfuel",
  },
  {
    logo: "/images/case-studies/owlery-logo-dark.png",
    title: "کاهش زمان ساخت داشبورد از چند روز به چند ساعت",
    description:
      "Owlery نیاز داشت مشتری و تیم داخلی، بدون وابستگی مداوم به مهندسی، داشبورد بسازند و مدیریت کنند. SDK انعطاف لازم را فراهم کرد.",
    quote:
      "«از تصمیممان برای استفاده از SDK بسیار خوشحالیم؛ کنترل آیندهٔ محصول را به ما داد و تجربهٔ مشتری را عالی کرد.»",
    author: "تراویس داونز، هم‌بنیان‌گذار Owlery",
    link: "https://www.metabase.com/case-studies/owlery",
  },
];

const implementationOptions = [
  {
    badge: "سریع",
    title: "جاسازی Iframe",
    subtitle:
      "برای سازمان‌هایی که می‌خواهند بی‌درنگ تحلیل تعبیه‌شده را ارائه دهند و سربار مهندسی را پایین نگه دارند.",
    bullets: [
      "نمودار، داشبورد و گزارش را به‌صورت آماده در اپلیکیشن نمایش دهید.",
      "حالت تعاملی اجازه می‌دهد سفارشی‌سازی، فیلتر و Drill انجام شود.",
      "حالت استاتیک فقط نمایش داده را نشان می‌دهد و برای گزارش ساده مناسب است.",
    ],
    link: {
      href: "https://www.metabase.com/embedding-demo",
      label: "دموی زنده را ببینید",
    },
    image: {
      src: "/images/embedding/iframe-embedding.png",
      alt: "پیش‌نمایش جاسازی Iframe",
    },
  },
  {
    badge: "سفارشی",
    title: "SDK آنالیز تعبیه‌شده برای React",
    subtitle:
      "برای تیم‌هایی که به تجربه‌ای بومی و کنترل کامل روی رفتار، تم و دسترسی نیاز دارند.",
    bullets: [
      "انتخاب کنید کدام جزء و در کدام صفحه قرار بگیرد.",
      "دسترسی و تعامل را برای هر کاربر، تیم یا سازمان شخصی کنید.",
      "با تم، پلاگین و اکشن اختصاصی، تجربه‌ای هم‌شکل با محصول خود بسازید.",
    ],
    link: {
      href: pageUrl,
      label: "دربارهٔ SDK بیشتر بدانید",
    },
    image: {
      src: "/images/embedding/custom-fit.png",
      alt: "پیش‌نمایش سفارشی‌سازی SDK",
    },
  },
];

const finalCtaButtons = [
  {
    label: "اجرای دستور شروع",
    code: codeSnippet,
  },
  {
    label: "شروع سریع مستندات",
    href: "https://www.metabase.com/docs/latest/embedding/sdk/quickstart",
  },
];

const codeBlockClass =
  "rounded-2xl border border-blue-100 bg-metabase-bg-neutral-98 p-4 text-left text-sm leading-relaxed font-mono text-gray-800 overflow-x-auto";

export default function EmbeddedAnalyticsSdkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <p className="text-sm font-bold uppercase tracking-widest text-metabase-primary">
                SDK آنالیز تعبیه‌شده برای React
              </p>
              <h1 className="mt-5 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
                تحلیل سفارشی درون‌برنامه‌ای، با سرعتی که محصول شما نیاز دارد
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
                کیت ابزاری که اجزای تعاملی متابیس را با ظاهر و رفتار محصول شما
                یکپارچه می‌کند. بدون بازاختراع چرخ، کنترل کامل روی تم، دسترسی و
                interaction داشته باشید.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {heroButtons.map((button) => (
                  <Link
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={button.ariaLabel}
                    className={`rounded-2xl px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      buttonStyles[button.variant]
                    }`}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
              <div className="mx-auto mt-6 max-w-lg">
                <div
                  className={codeBlockClass}
                  aria-label="دستور شروع سریع SDK"
                >
                  <pre className="overflow-x-auto text-xs sm:text-sm">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </div>
              <div className="mt-12 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/60">
                <Image
                  src="/images/product/embedded-analytics-sdk/hero-sdk.png"
                  alt="پیش‌نمایش رابط Embedding SDK متابیس"
                  width={1100}
                  height={620}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="py-16">
            <div
              className={`${containerClass} grid gap-6 md:grid-cols-3 text-right`}
            >
              {valueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white py-12">
            <div className={`${containerClass} text-center`}>
              <p className="text-sm font-semibold text-gray-500">
                بیش از ۸۰ هزار شرکت به متابیس اعتماد دارند
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {trustLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center rounded-2xl border border-gray-100 bg-white p-4"
                  >
                    <Image
                      src={logo.src}
                      alt={`لوگوی ${logo.name}`}
                      width={logo.width}
                      height={60}
                      className="h-10 w-auto object-contain grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} space-y-16`}>
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-10 lg:flex-row ${
                    feature.reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 space-y-4 text-right">
                    <p className="text-sm font-bold uppercase tracking-widest text-metabase-primary">
                      {feature.eyebrow}
                    </p>
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      {feature.title}
                    </h2>
                    <p className="text-base leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                    {feature.code && (
                      <div className={codeBlockClass}>
                        <pre className="overflow-x-auto text-xs sm:text-sm">
                          <code>{feature.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      width={feature.image.width}
                      height={feature.image.height}
                      className="h-auto w-full rounded-3xl border border-blue-100 bg-white object-cover"
                    />
                    {feature.extra}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <div
              className={`${containerClass} rounded-3xl bg-white p-8 shadow`}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <Image
                  src={promoCard.image.src}
                  alt={promoCard.image.alt}
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-2xl object-cover"
                />
                <div className="flex-1 text-right space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {promoCard.title}
                  </h3>
                  <p className="text-gray-600">{promoCard.description}</p>
                </div>
                <Link
                  href={promoCard.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-metabase-primary px-5 py-3 text-sm font-semibold text-metabase-primary hover:bg-metabase-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary"
                >
                  {promoCard.cta}
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                داستان موفقیت مشتریان SDK
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
                شرکت‌هایی که داشبوردهای عمیق و یکپارچه را بدون تیم بزرگ مهندسی
                در محصول خود پیاده کرده‌اند.
              </p>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 lg:grid-cols-2`}
            >
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.title}
                  className="flex flex-col rounded-3xl border border-blue-100 bg-white p-6 text-right shadow-sm"
                >
                  <div className="flex items-center justify-end">
                    <Image
                      src={caseStudy.logo}
                      alt={`لوگوی ${caseStudy.title}`}
                      width={140}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {caseStudy.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    {caseStudy.description}
                  </p>
                  <blockquote className="mt-4 border-r-4 border-metabase-primary pr-4 text-sm font-semibold text-gray-800">
                    {caseStudy.quote}
                  </blockquote>
                  <p className="mt-2 text-sm text-gray-500">
                    {caseStudy.author}
                  </p>
                  <Link
                    href={caseStudy.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-end text-sm font-bold text-metabase-primary hover:underline"
                  >
                    مطالعهٔ کامل
                    <Image
                      src="/images/chevron_blue.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <div className={`${containerClass} space-y-10`}>
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  هر نوع جاسازی که لازم دارید
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  از راهکار سریع iframe تا سفارشی‌ترین پیاده‌سازی با SDK، مطابق
                  نیازتان انتخاب کنید.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {implementationOptions.map((option) => (
                  <div
                    key={option.title}
                    className="flex flex-col rounded-3xl border border-blue-100 bg-metabase-bg-neutral-98 p-6 text-right"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-metabase-primary">
                      {option.badge}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {option.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {option.subtitle}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-gray-600">
                      {option.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Image
                            src="/images/icons/rounded-checkmark.svg"
                            alt=""
                            width={20}
                            height={20}
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Image
                      src={option.image.src}
                      alt={option.image.alt}
                      width={500}
                      height={320}
                      className="mt-6 rounded-2xl border border-blue-100 bg-white object-cover"
                    />
                    <Link
                      href={option.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-end text-sm font-bold text-metabase-primary hover:underline"
                    >
                      {option.link.label}
                      <Image
                        src="/images/chevron_blue.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="mr-2"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div
              className={`${containerClass} flex flex-col gap-6 rounded-3xl bg-white p-8 text-center shadow`}
            >
              <p className="text-base font-semibold text-gray-900">
                هنوز پرسشی دارید؟ با ما در ارتباط باشید.
              </p>
              <Link
                href="https://www.metabase.com/talk-to-a-person"
                target="_blank"
                rel="noreferrer"
                className="mx-auto inline-flex items-center justify-center rounded-2xl bg-metabase-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-metabase-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary-dark"
              >
                گفتگو با تیم متابیس
              </Link>
            </div>
          </section>

          <section className="py-16">
            <div
              className={`${containerClass} rounded-3xl bg-white p-10 text-center shadow-md`}
            >
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                نمونهٔ عملی در کمترین زمان بسازید
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
                اگر آماده‌اید تجربهٔ تحلیلی تعبیه‌شده‌ای ارائه دهید که با رشد
                شما تطبیق پیدا کند، همین امروز SDK متابیس را امتحان کنید.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className={codeBlockClass}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    اجرای دستور
                  </p>
                  <pre className="mt-3 overflow-x-auto text-xs sm:text-sm">
                    <code>{finalCtaButtons[0].code}</code>
                  </pre>
                </div>
                <Link
                  href={finalCtaButtons[1].href ?? ""}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-3xl border border-metabase-primary px-6 py-6 text-sm font-bold text-metabase-primary hover:bg-metabase-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary"
                >
                  {finalCtaButtons[1].label}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
