import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";

export const metadata: Metadata = {
  title: "داشبوردهای تحلیلی Metabase | ساخت بینش تعاملی",
  description:
    "داشبوردهای تعاملی متابیس به تیم شما اجازه می‌دهد نمودارها، فیلترها و اقدامات را کنار هم بچیند، روی داده‌ها زوم کند و نتایج را به اشتراک بگذارد.",
  keywords: [
    "داشبورد تحلیلی",
    "Metabase",
    "هوش تجاری",
    "گزارش تعاملی",
    "تحلیل داده",
    "فیلتر داشبورد",
    "Drill-through",
    "X-ray",
  ],
  openGraph: {
    title: "داشبوردهای تحلیلی Metabase | ساخت بینش تعاملی",
    description:
      "با متابیس داشبوردهایی بسازید که همه دوست دارند: فیلتر، Drill-through، اشتراک‌گذاری و اقدامات برای تیم‌های داده‌محور.",
    type: "website",
    url: `${baseUrl}/features/analytics-dashboards`,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: `${baseUrl}/images/features/dashboard-overview.gif`,
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش داشبورد تحلیلی متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "داشبوردهای تحلیلی Metabase | ساخت بینش تعاملی",
    description:
      "متابیس ساخت، اشتراک و کشف داده را برای تمام تیم‌ها ساده می‌کند. با فیلترهای قدرتمند، اقدامات و سرعت بالا آشنا شوید.",
    images: [`${baseUrl}/images/features/dashboard-overview.gif`],
    site: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/features/analytics-dashboards`,
    languages: {
      fa: `${baseUrl}/features/analytics-dashboards`,
      en: `${baseUrl}/features/analytics-dashboards`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

interface FeatureCard {
  title: string;
  icon: string;
  content: ReactNode;
}

const featureCards: FeatureCard[] = [
  {
    title: "فیلترها",
    icon: "/images/icons/filter.svg",
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        ویجت‌های فیلتر را برای محدوده‌های تاریخ، دسته‌بندی‌ها یا موقعیت
        جغرافیایی اضافه کنید و به تمام کاربران اجازه دهید پاسخ خود را شخصی‌سازی
        کنند.{" "}
        <Link
          href="https://www.metabase.com/docs/latest/dashboards/filters"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-metabase-primary hover:underline"
        >
          راهنمای فیلترها
        </Link>{" "}
        تمام جزئیات را توضیح می‌دهد.
      </p>
    ),
  },
  {
    title: "Drill-through",
    icon: "/images/icons/magnifying-glass.svg",
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        روی یک نقطه از نمودار زوم کنید، دسته‌بندی‌ها را خرد کنید یا X-ray را
        فعال کنید تا گزارش خودکار دریافت کنید. این امکانات به سرعت چرایی اعداد
        را آشکار می‌کند.
      </p>
    ),
  },
  {
    title: "رفتارهای کلیک سفارشی",
    icon: "/images/icons/click.svg",
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        برای هر نمودار مشخص کنید با کلیک کاربر چه اتفاقی بیفتد: باز کردن منوی
        Drill، اعمال فیلتر، پرش به داشبورد دیگر یا هدایت به یک URL خارجی.
      </p>
    ),
  },
  {
    title: "اشتراک‌گذاری",
    icon: "/images/icons/share.svg",
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        داشبوردها را به‌صورت لینک، جاسازی شده، PDF یا اشتراک Slack و ایمیل ارسال
        کنید و هشدار تنظیم کنید تا هیچ تغییری را از دست ندهید.
      </p>
    ),
  },
  {
    title: "سرعت",
    icon: "/images/icons/speed.svg",
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        با کش کردن پرسش‌ها و داشبوردهای پرترافیک، زمان بارگذاری را پایین نگه
        دارید و تجربه‌ای روان در اختیار تیم‌ها بگذارید.
      </p>
    ),
  },
  {
    title: "اقدامات (Actions)",
    icon: "/images/icons/large-play-triangle-outline-blue.svg",
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        از طریق دکمه‌های اقدام، رکورد جدید ثبت کنید، وضعیت مشتری را تغییر دهید
        یا درخواست تازه‌ای ایجاد کنید؛ همه از داخل همان داشبورد.
      </p>
    ),
  },
];

interface LearningCard {
  tag: string;
  title: string;
  href: string;
  ariaLabel: string;
}

const learningCards: LearningCard[] = [
  {
    tag: "وبینار",
    title: "ساخت داشبوردهای متابیس مانند یک حرفه‌ای",
    href: "https://www.metabase.com/events/building-metabase-dashboards-like-a-pro",
    ariaLabel: "مشاهده وبینار ساخت داشبوردهای متابیس",
  },
  {
    tag: "ویدئو",
    title: "از صفر تا داشبورد در ۶ دقیقه",
    href: "https://www.metabase.com/demo",
    ariaLabel: "تماشای دموی صفر تا داشبورد در متابیس",
  },
  {
    tag: "یادگیری",
    title: "مبانی داشبورد",
    href: "https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/dashboards",
    ariaLabel: "مطالعه راهنمای مبانی داشبورد متابیس",
  },
];

interface StepItem {
  number: string;
  title: string;
}

const creationSteps: StepItem[] = [
  {
    number: "۱",
    title:
      "یک پرسش تازه بسازید یا یکی از پرسش‌های ذخیره شده را باز کنید و داده را با سازندهٔ بصری آماده کنید.",
  },
  {
    number: "۲",
    title: "از منوی بالا-راست گزینه «افزودن به داشبورد» را انتخاب کنید.",
  },
  {
    number: "۳",
    title:
      "یک داشبورد موجود را برگزینید یا گزینه «ساخت داشبورد جدید» را بزنید تا بوم خالی ایجاد شود.",
  },
  {
    number: "۴",
    title:
      "سوال اضافه‌شده را مرتب کنید، فیلتر، عنوان و متن کمکی بیفزایید و طرح‌بندی را مطابق نیاز تغییر دهید.",
  },
  {
    number: "۵",
    title:
      "همین مسیر را می‌توانید از داشبورد هم شروع کنید: «جدید > داشبورد» و سپس افزودن پرسش‌های ذخیره‌شده.",
  },
];

const heroButtons = [
  {
    label: "شروع رایگان Metabase",
    href: "https://store.metabase.com/checkout",
    variant: "primary" as const,
    ariaLabel: "شروع رایگان Metabase",
  },
  {
    label: "گفتگو با تیم ما",
    href: "https://www.metabase.com/talk-to-a-person",
    variant: "outline" as const,
    ariaLabel: "رزرو تماس با تیم متابیس",
  },
];

type HeroButton = (typeof heroButtons)[number];

const buttonStyles: Record<HeroButton["variant"], string> = {
  primary:
    "bg-metabase-primary text-white hover:bg-metabase-primary-dark focus-visible:ring-metabase-primary-dark",
  outline:
    "border border-metabase-primary text-metabase-primary hover:bg-metabase-primary/10 focus-visible:ring-metabase-primary",
};

const pageUrl = `${baseUrl}/features/analytics-dashboards`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "داشبوردهای تحلیلی Metabase",
  description:
    "همه چیز برای ساخت داشبوردهای تعاملی: فیلترهای قدرتمند، Drill-through، اشتراک‌گذاری و اقدامات در متابیس.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Analytics Dashboards",
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
      name: "داشبوردهای تحلیلی",
      item: pageUrl,
    },
  ],
};

export default function AnalyticsDashboardsPage() {
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
                    src="/images/icons/badges/dashboard.svg"
                    alt="نماد داشبورد"
                    width={80}
                    height={80}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    داشبوردهای تحلیلی
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  داشبوردهای تحلیلی که واقعاً دوست دارید استفاده کنید
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  نمودارها و پرسش‌ها را روی داشبوردهای زنده بچینید، با ابزارهای
                  تعاملی به عمق داده فرو بروید و همهٔ تیم‌ها را با یک نگاه به
                  پاسخ برسانید.
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
                <div className="relative rounded-3xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-100/60">
                  <Image
                    src="/images/features/dashboard-overview.gif"
                    alt="پیش‌نمایش داشبورد تحلیلی متابیس"
                    width={640}
                    height={428}
                    priority
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-metabase-bg-neutral-98">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                فیلتر، X-ray، اشتراک‌گذاری و امکانات بیشتر
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                تنها با چند کلیک، دادهٔ خام را به داستانی قابل فهم تبدیل کنید و
                اجازه دهید همهٔ اعضای تیم، پاسخ موردنیازشان را شخصاً کشف کنند.
              </p>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
            >
              {featureCards.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl bg-white p-6 text-right shadow"
                >
                  <Image
                    src={feature.icon}
                    alt={`آیکن ${feature.title}`}
                    width={30}
                    height={30}
                    className="mb-4 h-6 w-6"
                  />
                  <h3 className="text-lg font-bold text-gray-600">
                    {feature.title}
                  </h3>
                  <div className="mt-3">{feature.content}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                در ساخت داشبوردهای تحلیلی بهتر شوید
              </h2>
              <Link
                href="https://www.metabase.com/docs/latest/dashboards/start"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 text-base font-bold text-metabase-primary hover:underline "
              >
                مستندات را بخوانید
                <Image
                  src="/images/chevron_blue.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 lg:grid-cols-3`}
            >
              {learningCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={card.ariaLabel}
                  className="flex flex-col rounded-xl border border-blue-100 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-block rounded-md bg-blue-50 w-fit border-metabase-blue-60 border px-3 py-1 text-xs font-bold text-metabase-primary">
                    {card.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="py-16 bg-metabase-bg-neutral-98">
            <div className={`${containerClass} rounded-3xl p-8 bg-white`}>
              <h3 className="text-center text-2xl font-extrabold text-gray-900">
                چگونه در متابیس یک داشبورد تحلیلی بسازیم؟
              </h3>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {creationSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 rounded-2xl p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary-lighter/30 text-lg font-bold text-metabase-primary border border-metabase-primary">
                      {step.number}
                    </div>
                    <p className="flex-1 text-base leading-relaxed text-gray-700">
                      {step.title}
                    </p>
                  </div>
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
