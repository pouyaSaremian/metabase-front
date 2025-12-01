import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/drill-through`;

export const metadata: Metadata = {
  title: "دریل‌ترو متابیس | کاوش تعاملی در دل داده‌ها",
  description:
    "با دریل‌ترو متابیس هر نمودار را نقطهٔ شروع کنجکاوی کنید؛ زوم، مشاهده رکوردها، گزارش‌ خودکار و فیلترهای پویا همگی فقط با یک کلیک فعال می‌شوند.",
  keywords: [
    "دریل ترو متابیس",
    "کاوش نمودار",
    "گزارش خودکار X-ray",
    "فیلتر تعاملی",
    "breakout داده",
    "cross filter",
  ],
  openGraph: {
    title: "دریل‌ترو متابیس | کاوش تعاملی در دل داده‌ها",
    description:
      "روی هر کارت یا مدل کلیک کنید تا منوی دریل‌ترو باز شود و داده را فیلتر، خرد یا به گزارش‌های عمیق‌تر هدایت کند.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: "https://www.metabase.com/images/features/drill-through-og.jpg",
        width: 1200,
        height: 675,
        alt: "نمایی از منوی دریل‌ترو متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دریل‌ترو متابیس | کاوش تعاملی در دل داده‌ها",
    description:
      "با دریل‌ترو متابیس بدون نوشتن سوال تازه، روی کارت‌ها کلیک کنید و به جزئیات، فیلترها و گزارش‌های آماده برسید.",
    images: ["https://www.metabase.com/images/features/drill-through-og.jpg"],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/features/drill-through`,
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
  name: "دریل‌ترو متابیس",
  description:
    "ابزار تعاملی برای کاوش سریع داده‌ها از طریق کلیک روی نمودارها و مدل‌ها در متابیس.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Drill-through",
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
      name: "دریل‌ترو",
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
    ariaLabel: "دمو متابیس برای استفاده از دریل‌ترو",
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
    title: "بزرگ‌نمایی هوشمند",
    description:
      "بازهٔ موردنظر روی نمودار را انتخاب کنید تا سری زمانی یا روندها را با دقت ببینید و دلیل جهش‌ها را پیدا کنید.",
    icon: "/images/icons/magnifying-glass.svg",
  },
  {
    title: "نمایش رکوردهای تشکیل‌دهنده",
    description:
      "با یک کلیک جدول رکوردهای پشت نمودار را ببینید و فهرست مشتریان یا سفارش‌های مرتبط را فوراً استخراج کنید.",
    icon: "/images/icons/collections.svg",
  },
  {
    title: "Breakout بر اساس ابعاد مهم",
    description:
      "داده را برحسب زمان، موقعیت جغرافیایی یا دسته‌بندی دلخواه خرد کنید و تفاوت‌ها را کنار هم بررسی کنید.",
    icon: "/images/icons/multi-level.svg",
  },
  {
    title: "فیلترهای درجا",
    description:
      "همان‌جا که داده را می‌بینید، فیلتر تازه اعمال کنید تا نمونه‌های مشابه یا مخالف را شناسایی کنید.",
    icon: "/images/icons/filter.svg",
  },
  {
    title: "رفتار کلیک سفارشی",
    description:
      "تعیین کنید هر کلیک کاربران را به کجا ببرد؛ داشبورد مرتبط، سوال ذخیره‌شده یا حتی یک URL خارجی.",
    icon: "/images/icons/click.svg",
  },
  {
    title: "کراس‌فیلتر بین کارت‌ها",
    description:
      "انتخاب روی یک کارت را به فیلتر مشترک داشبورد تبدیل کنید تا همه کارت‌ها اطلاعات همان بخش را نمایش دهند.",
    icon: "/images/icons/Type=Dashboard.svg",
  },
  {
    title: "گزارش خودکار X-ray",
    description:
      "از دادهٔ انتخابی یک داشبورد خودکار بسازید، سوال‌های پیشنهادی را نگه دارید یا ویرایش کنید و به اشتراک بگذارید.",
    icon: "/images/icons/large-play-triangle-outline-blue.svg",
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
    title: "داشبوردها و کارت‌های تعاملی",
    description:
      "راهنمای رسمی متابیس برای فعال‌سازی دریل‌ترو، کراس‌فیلتر و تنظیم رفتار کلیک.",
    href: "https://www.metabase.com/docs/latest/dashboards/interactive",
    ariaLabel: "مطالعه مستندات داشبورد تعاملی متابیس",
  },
  {
    tag: "یادگیری",
    title: "راهنمای دریل‌ترو روی نمودارها",
    description:
      "مقالهٔ قدم‌به‌قدم یاد می‌دهد چطور از منوی دریل‌ترو بیشترین استفاده را ببرید.",
    href: "https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through",
    ariaLabel: "مشاهده راهنمای یادگیری دریل‌ترو متابیس",
  },
  {
    tag: "رویداد",
    title: "تور متابیس برای تازه‌واردها",
    description:
      "وبیناری برای آشنایی با قابلیت‌های تعاملی متابیس و بهترین شیوه‌های استفاده از آن‌ها.",
    href: "https://www.metabase.com/events/metabase-for-beginners",
    ariaLabel: "ثبت‌نام در رویداد آشنایی متابیس",
  },
];

const drillSteps = [
  {
    number: "۱",
    content:
      "یک داشبورد، نمودار یا مدل را که می‌خواهید بیشتر بررسی کنید باز کنید.",
  },
  {
    number: "۲",
    content:
      "روی بخشی از کارت کلیک کنید (مثلاً یک ستون یا ایالت روی نقشه) تا منوی دریل‌ترو با گزینه‌های مرتبط ظاهر شود.",
  },
  {
    number: "۳",
    content:
      "گزینهٔ دلخواه را انتخاب کنید، نتایج را ببینید و برای بینش‌های بعدی همین مسیر را ادامه دهید.",
  },
];

export default function DrillThroughPage() {
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
                    src="/images/icons/badges/magnifier.svg"
                    alt="نماد دریل‌ترو متابیس"
                    width={72}
                    height={72}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    دریل‌ترو
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  تنها با یک کلیک، از هر نمودار به عمق داده برسید
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  دریل‌ترو به هر عضو تیم اجازه می‌دهد بدون ساخت سوال جدید، روی
                  کارت‌ها کلیک کند، جزئیات را ببیند، داده را فیلتر کند یا گزارش
                  تازه‌ای بسازد و سریع‌تر به اقدام برسد.
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
                    poster="https://www.metabase.com/images/features/breakout-filter.gif"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="نمایش ویدیویی دریل‌ترو متابیس"
                  >
                    <source
                      src="https://www.metabase.com/images/features/breakout-filter.mp4"
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
                تحلیل تقریباً خودکار با دریل‌ترو
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                روی نمودارها، مدل‌ها و سوال‌ها کلیک کنید تا منوی دریل‌ترو ظاهر
                شود، داده را فیلتر کنید، رکوردها را ببینید یا گزارش آماده
                بسازید.
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
                منابع بیشتر برای دریل‌ترو و تعامل
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
            title="چطور از دریل‌ترو در داشبوردها و نمودارها استفاده کنیم؟"
            steps={drillSteps}
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
                کشف پاسخ‌ها را برای همه آسان کنید؛ دریل‌ترو روی تمام پلن‌های
                متابیس در دسترس است و فقط چند کلیک تا فعال شدن فاصله دارد.
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
