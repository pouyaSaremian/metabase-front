import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/white-label-analytics`;

export const metadata: Metadata = {
  title: "آنالیز سفیدبرچسب متابیس | گزارش‌گیری کاملاً برند شده",
  description:
    "داشبوردها و نمودارهای متابیس را دقیقاً با برند خود هماهنگ کنید؛ از تغییر لوگو و فونت تا کنترل کامل با Embedded Analytics SDK و تجربه‌ای بی‌نقص درون محصول.",
  keywords: [
    "آنالیز سفیدبرچسب",
    "گزارش‌گیری برند شده",
    "Embedded Analytics",
    "متابیس فارسی",
    "SDK تعبیه‌سازی",
    "تمینگ پویا",
  ],
  openGraph: {
    title: "آنالیز سفیدبرچسب متابیس | گزارش‌گیری کاملاً برند شده",
    description:
      "تجربه گزارش‌گیری درون‌برنامه‌ای را با برند خود یکی کنید؛ از iframe بدون کدنویسی تا کنترل کامل با React SDK.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: "https://www.metabase.com/images/features/white-label-og.jpg",
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش ویژگی‌های آنالیز سفیدبرچسب متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آنالیز سفیدبرچسب متابیس | گزارش‌گیری کاملاً برند شده",
    description:
      "گزینه‌های کامل برای برندسازی داشبوردهای تعبیه‌شده و تجربه‌ای که کاملاً متعلق به محصول شما است.",
    images: ["https://www.metabase.com/images/features/white-label-og.jpg"],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/features/white-label-analytics`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "آنالیز سفیدبرچسب متابیس",
  description:
    "سفارشی‌سازی کامل داشبوردهای تعبیه‌شده متابیس برای ارائه تجربه‌ای هم‌راستا با برند شما.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase White-label Analytics",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
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
      name: "ویژگی‌ها",
      item: `${baseUrl}/features`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "آنالیز سفیدبرچسب",
      item: pageUrl,
    },
  ],
};

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const heroButtons = [
  {
    label: "شروع سریع متابیس",
    href: "https://store.metabase.com/checkout",
    variant: "primary" as const,
    ariaLabel: "شروع راه‌اندازی متابیس برای آنالیز سفیدبرچسب",
  },
  {
    label: "تماشای دموی زنده",
    href: "https://www.metabase.com/embedding-demo",
    variant: "outline" as const,
    ariaLabel: "مشاهده دموی زنده آنالیز تعبیه‌شده متابیس",
  },
];

type HeroButton = (typeof heroButtons)[number];

const buttonStyles: Record<HeroButton["variant"], string> = {
  primary:
    "bg-metabase-primary text-white hover:bg-metabase-primary-dark focus-visible:ring-metabase-primary-dark",
  outline:
    "border border-metabase-primary text-metabase-primary hover:bg-metabase-primary/10 focus-visible:ring-metabase-primary",
};

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "گزارش‌گیری درون‌برنامه‌ای با برند شما",
    icon: "/images/icons/Type=Trend.svg",
    description:
      "نام، لوگو، فونت‌ها و رنگ نمودارها را تنظیم کنید و حتی متن دکمه‌ها را تغییر دهید تا هیچ المانی از برند شما جدا نباشد.",
  },
  {
    title: "حذف کامل رد پای متابیس",
    icon: "/images/icons/Type=Dashboard.svg",
    description:
      "لینک‌ها و تصاویر کمک‌رسان را با منابع خود جایگزین کنید یا به‌طور کامل مخفی کنید تا تجربه‌ای کاملاً اختصاصی بسازید.",
  },
  {
    title: "شخصی‌سازی بدون کدنویسی",
    icon: "/images/icons/model.svg",
    description:
      "با iframe و چند متغیر ساده، ظاهر داشبوردهای تعبیه‌شده را تغییر دهید و بدون درگیر کردن تیم فنی، سریع نتیجه بگیرید.",
  },
  {
    title: "فراتر از سفیدبرچسب‌سازی",
    icon: "/images/icons/Type=Alert.svg",
    description:
      "با استفاده از Embedded Analytics SDK اجزای React را جداگانه تعبیه کنید و کوچک‌ترین تعامل‌ها را مطابق محصول خود شکل دهید.",
  },
  {
    title: "تمینگ پویا برای هر مشتری",
    icon: "/images/icons/Type=Dashboard.svg",
    description:
      "با CSS متغیرهای رنگ و تایپوگرافی را براساس سازمان، تیم یا حتی هر کاربر تغییر دهید و تجربه‌ای کاملاً منعطف ارائه کنید.",
  },
  {
    title: "تجربه کاربری هدایت‌شده",
    icon: "/images/icons/eye.svg",
    description:
      "نام منوها، جای دکمه‌ها و مسیرهای کلیک را بازطراحی کنید تا کاربران دقیقاً همان چیزی را ببینند که به آن نیاز دارند.",
  },
];

interface ResourceCard {
  tag: string;
  title: string;
  description: string;
  href: string;
  ariaLabel: string;
}

const resourceCards: ResourceCard[] = [
  {
    tag: "آنالیز تعبیه‌شده",
    title: "همه امکانات متابیس برای تعبیه‌سازی را ببینید",
    description:
      "از سناریوهای iframe تا کنترل کامل با React SDK و گزینه‌های امنیتی چندسطحی.",
    href: "https://www.metabase.com/product/embedded-analytics",
    ariaLabel: "مشاهده صفحه ویژگی‌های آنالیز تعبیه‌شده متابیس",
  },
  {
    tag: "مطالعه موردی",
    title: "چطور Lime Technologies تجربه‌ای سفیدبرچسب ساخت",
    description:
      "ببینید یک تیم SaaS چگونه داشبوردهای تعبیه‌شده را با برند خود ترکیب کرده است.",
    href: "https://www.metabase.com/case-studies/lime-technologies",
    ariaLabel: "مطالعه موردی Lime Technologies درباره سفیدبرچسب متابیس",
  },
];

const setupSteps = [
  {
    number: "۱",
    content:
      "روش پیاده‌سازی را انتخاب کنید؛ اگر سرعت مهم است iframe را فعال کنید و برای کنترل کامل، Embedded Analytics SDK را به‌کار بگیرید.",
  },
  {
    number: "۲",
    content:
      "لوگو، فونت، پالت رنگ و متون دلخواه را اضافه کنید تا ظاهر داشبوردها دقیقاً با راهنمای برند شما مطابقت داشته باشد.",
  },
  {
    number: "۳",
    content:
      "دسترسی و احراز هویت را تنظیم کنید تا هر کاربر فقط داده‌های مرتبط با حساب یا سازمان خود را ببیند.",
  },
  {
    number: "۴",
    content:
      "منوها، لینک‌های راهنما و مسیرهای کلیک را مطابق جریان محصول خود بازتعریف کنید تا تجربه‌ای طبیعی شکل بگیرد.",
  },
  {
    number: "۵",
    content:
      "پس از استقرار، بازخورد کاربران را جمع‌آوری کنید، تم‌ها را به‌روزرسانی کنید و به‌صورت مداوم تجربه را بهتر بسازید.",
  },
];

export default function WhiteLabelAnalyticsPage() {
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
            <div
              className={`${containerClass} flex flex-col gap-12 lg:flex-row`}
            >
              <div className="flex-1 space-y-6 text-right">
                <div className="flex items-center justify-start gap-3 text-metabase-primary">
                  <Image
                    src="/images/icons/badges/white-labeled-analytics.svg"
                    alt="آیکن آنالیز سفیدبرچسب متابیس"
                    width={72}
                    height={72}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    آنالیز سفیدبرچسب
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  آنالیز سفیدبرچسب برای تجربه گزارش‌گیری کاملاً برند شده
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  داشبوردها و گزارش‌های تعبیه‌شده را طوری بسازید که بخشی طبیعی
                  از محصول شما باشند؛ از تنظیم رنگ و فونت تا کنترل کامل اجزای
                  React برای هر مشتری.
                </p>
                <div className="flex flex-wrap justify-start gap-4">
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
              </div>
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-blue-100/60">
                  <video
                    className="h-auto w-full object-cover"
                    poster="https://www.metabase.com/images/features/white-label-og.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="ویدیو معرفی آنالیز سفیدبرچسب متابیس"
                  >
                    <source
                      src="https://www.metabase.com/images/features/white-label-analytics.mp4"
                      type="video/mp4"
                    />
                    <p className="p-4 text-center text-sm text-gray-600">
                      مرورگر شما از ویدیو HTML5 پشتیبانی نمی‌کند.
                    </p>
                  </video>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                ویژگی‌های کلیدی آنالیز تعبیه‌شده سفیدبرچسب
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                ترکیبی از ابزارهای بدون کدنویسی و کنترل توسعه‌دهنده که کمک
                می‌کنند گزارش‌گیری درون‌برنامه‌ای دقیقاً مطابق برند شما باشد.
              </p>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
            >
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-blue-100 bg-white p-6 text-right shadow"
                >
                  <Image
                    src={card.icon}
                    alt={`آیکن ${card.title}`}
                    width={36}
                    height={36}
                    className="mb-4 h-8 w-8"
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                از همین امروز سفیدبرچسب‌سازی را شروع کنید
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                مسیر خود را انتخاب کنید؛ چه به دنبال راه‌اندازی سریع باشید و چه
                شخصی‌سازی عمیق، منابع زیر به شما کمک می‌کنند.
              </p>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 lg:grid-cols-2`}
            >
              {resourceCards.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={resource.ariaLabel}
                  className="flex flex-col rounded-3xl border border-blue-100 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary"
                >
                  <span className="inline-block rounded-md border border-metabase-blue-60 bg-blue-50 px-3 py-1 text-xs font-bold text-metabase-primary">
                    {resource.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <StepsSection
            title="چطور آنالیز سفیدبرچسب را در محصول خود پیاده‌سازی کنیم؟"
            steps={setupSteps}
            sectionClassName="py-16 bg-metabase-bg-neutral-98"
            containerClassName={`${containerClass} rounded-3xl p-8 bg-white text-center`}
            listClassName="mt-10 grid gap-6 md:grid-cols-2"
            cardClassName="flex items-start gap-4 rounded-2xl p-5 text-right"
            numberClassName="flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary-lighter/30 text-lg font-bold text-metabase-primary border border-metabase-primary"
            textClassName="flex-1 text-base leading-relaxed text-gray-700"
          />

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                متابیس را ۱۴ روز رایگان امتحان کنید
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                در کمترین زمان نمونه اولیه بسازید و مطمئن شوید سفیدبرچسب‌سازی
                دقیقاً با انتظارات شما و مشتریانتان هم‌سو است. این قابلیت در پلن
                ‌های{" "}
                <Link
                  href="https://www.metabase.com/product/pro"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-metabase-primary hover:underline"
                >
                  Pro
                </Link>{" "}
                و{" "}
                <Link
                  href="https://www.metabase.com/product/enterprise"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-metabase-primary hover:underline"
                >
                  Enterprise
                </Link>{" "}
                در دسترس است.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {heroButtons.map((button) => (
                  <Link
                    key={`${button.label}-cta`}
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
