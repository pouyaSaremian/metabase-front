import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/sql-editor`;

export const metadata: Metadata = {
  title: "ویرایشگر SQL متابیس | کنترل کامل روی پرس‌وجوها",
  description:
    "با ویرایشگر SQL متابیس به‌صورت بومی کوئری بنویسید، پارامتر اضافه کنید، اسنیپت بسازید و نتایج را مستقیم به نمودار و داشبورد تبدیل کنید.",
  keywords: [
    "ویرایشگر SQL متابیس",
    "SQL editor",
    "SQL snippets",
    "SQL parameters",
    "سوال بومی",
    "داشبورد SQL",
  ],
  openGraph: {
    title: "ویرایشگر SQL متابیس | کنترل کامل روی پرس‌وجوها",
    description:
      "کوئری‌های دقیق بنویسید، پارامتر و اسنیپت بسازید و نتایج را به راحتی با تیم خود به اشتراک بگذارید.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: "https://www.metabase.com/images/features/sql-editor-og.jpg",
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش ویرایشگر SQL متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ویرایشگر SQL متابیس | کنترل کامل روی پرس‌وجوها",
    description:
      "برای تحلیل‌گران و توسعه‌دهندگان: ویرایشگر SQL متابیس آزادی کامل برای نوشتن کوئری‌های بومی فراهم می‌کند.",
    images: ["https://www.metabase.com/images/features/sql-editor-og.jpg"],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/features/sql-editor`,
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
  name: "ویرایشگر SQL متابیس",
  description:
    "ابزار قدرتمند برای نوشتن کوئری‌های بومی، ذخیره اسنیپت‌ها و اتصال نتایج به داشبوردهای متابیس.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase SQL Editor",
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
      name: "ویرایشگر SQL",
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
    ariaLabel: "شروع رایگان متابیس برای استفاده از ویرایشگر SQL",
  },
  {
    label: "گفتگو با تیم ما",
    href: "https://www.metabase.com/talk-to-a-person",
    variant: "outline" as const,
    ariaLabel: "رزرو جلسه با تیم متابیس",
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
    title: "پارامترهای SQL",
    description:
      "به کوئری‌های خود متغیر اضافه کنید و همان سوال را برای سناریوهای مختلف با فیلترهای تعاملی اجرا کنید.",
    icon: "/images/icons/formula.svg",
  },
  {
    title: "اسنیپت‌های SQL",
    description:
      "تکه‌کدهای پرتکرار را ذخیره، سازمان‌دهی و بین تیم به اشتراک بگذارید تا سرعت توسعه بالا برود.",
    icon: "/images/icons/collections.svg",
  },
  {
    title: "فیلتر داشبورد",
    description:
      "سوال‌های SQL را به منبع فیلتر داشبورد تبدیل کنید؛ کافی است متغیر تعریف کرده باشید.",
    icon: "/images/icons/filter.svg",
  },
  {
    title: "تکمیل خودکار حرفه‌ای",
    description:
      "هنگام تایپ، پیشنهاد جدول، ستون و کلیدواژه دریافت کنید تا سریع‌تر و بدون خطا کوئری بزنید.",
    icon: "/images/icons/speed.svg",
  },
  {
    title: "مرجع داده در کنار دست",
    description:
      "از سایدبار نام دقیق جداول و ستون‌ها را ببینید و با اطمینان کوئری را تکمیل کنید.",
    icon: "/images/icons/columns.svg",
  },
  {
    title: "شروع از مدل‌های تأیید شده",
    description:
      "کوئری بومی خود را بر پایه مدل‌های مستند شده بسازید تا تعریف ستون‌ها و فیلدها همواره یکسان باشد.",
    icon: "/images/icons/model.svg",
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
    tag: "مستندات",
    title: "راهنمای نوشتن SQL در متابیس",
    description:
      "جزئیات کامل ویرایشگر بومی، پارامترها، اسنیپت‌ها و اتصال نتایج به داشبورد.",
    href: "https://www.metabase.com/docs/latest/questions/native-editor/writing-sql",
    ariaLabel: "مطالعه مستندات ویرایشگر SQL متابیس",
  },
  {
    tag: "یادگیری",
    title: "بهترین شیوه‌های SQL",
    description:
      "صفحهٔ Learn متابیس با نکته‌های کلیدی برای نوشتن کوئری‌های خوانا و قابل نگهداشت.",
    href: "https://www.metabase.com/learn/sql/working-with-sql/sql-best-practices",
    ariaLabel: "خواندن مقاله بهترین شیوه‌های SQL در متابیس",
  },
  {
    tag: "ویژگی مرتبط",
    title: "سازندهٔ تصویری سوال‌ها",
    description:
      "اگر نمی‌خواهید از صفر SQL بنویسید، با سازندهٔ بصری شروع کنید و هر زمان لازم بود به SQL بروید.",
    href: "https://www.metabase.com/features/query-builder",
    ariaLabel: "مشاهده ویژگی سازندهٔ سوال متابیس",
  },
];

const sqlSteps = [
  {
    number: "۱",
    content:
      "از نوار بالا گزینهٔ «سوال جدید &gt; کوئری SQL» را بزنید (در صورتی که دسترسی کوئری بومی داشته باشید).",
  },
  {
    number: "۲",
    content:
      "کوئری خود را بنویسید؛ از تکمیل خودکار و مرجع داده برای سرعت بیشتر استفاده کنید.",
  },
  {
    number: "۳",
    content:
      "با دکمه ▶️ نتایج را ببینید و در صورت نیاز پارامترها یا فیلترها را تغییر دهید.",
  },
  {
    number: "۴",
    content:
      "برای تبدیل نتایج به نمودار، روی «Visualization» کلیک کنید و نمای مناسب را انتخاب کنید.",
  },
  {
    number: "۵",
    content:
      "سوال را ذخیره کنید، در مجموعه قرار دهید، روی داشبورد بگذارید یا با تیم خود به اشتراک بگذارید.",
  },
];

export default function SqlEditorPage() {
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
                    src="/images/icons/badges/sql-editor.svg"
                    alt="نماد ویرایشگر SQL متابیس"
                    width={72}
                    height={72}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    ویرایشگر SQL
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  هر سطر SQL را دقیقاً همان‌طور که می‌خواهید بنویسید
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  برای تحلیل‌گران و توسعه‌دهندگانی که به انعطاف کامل نیاز دارند،
                  ویرایشگر SQL متابیس بهترین جای کار است: پارامتر و اسنیپت
                  بسازید، به داشبورد متصل شوید و نتایج را به‌سرعت به اشتراک
                  بگذارید.
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
                    poster="https://www.metabase.com/images/features/sql-editor.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="پیش‌نمایش ویرایشگر SQL متابیس"
                  >
                    <source
                      src="https://www.metabase.com/images/features/sql-editor.mp4"
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
                کوئری‌های بومی با چند قابلیت اضافه
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                همان انعطاف SQL خام را دارید، اما با امکاناتی برای مدیریت
                پارامتر، اشتراک اسنیپت و ساخت سریع داشبورد.
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
                دربارهٔ سوال‌پرسیدن در متابیس بیشتر بدانید
              </h2>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 lg:grid-cols-3`}
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
            title="چطور با SQL در متابیس سوال بپرسیم؟"
            steps={sqlSteps}
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
                ویرایشگر SQL روی همهٔ پلن‌ها فعال است؛ کافی است ثبت‌نام کنید و
                کوئری‌های خود را به داشبورد و گزارش تبدیل کنید.
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
