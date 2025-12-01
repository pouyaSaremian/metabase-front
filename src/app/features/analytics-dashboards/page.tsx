import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import StepsSection from "@/components/StepsSection";
import type { AccordionItem } from "@/components/common/Accordion";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";

export const metadata: Metadata = {
  title: "داشبوردهای تحلیلی Metabase | ساخت داشبورد تعاملی",
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
    title: "داشبوردهای تحلیلی Metabase | ساخت داشبورد تعاملی",
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
    title: "داشبوردهای تحلیلی Metabase | ساخت داشبورد تعاملی",
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
        از ویجت‌های فیلتر استفاده کنید تا نتایج را بر اساس بازه زمانی،
        دسته‌بندی، موقعیت جغرافیایی و سایر فیلدها به سرعت به‌روزرسانی نمایید.{" "}
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
      "یک داشبورد موجود را انتخاب نمایید یا گزینه «ساخت داشبورد جدید» را بزنید تا بوم خالی ایجاد شود.",
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
    label: "دمو متابیس",
    href: "https://store.metabase.com/checkout",
    variant: "primary" as const,
    ariaLabel: "دمو متابیس",
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

const dashboardSteps = creationSteps.map((step) => ({
  number: step.number,
  content: step.title,
}));

const faqItems: AccordionItem[] = [
  {
    question:
      "داشبوردها چگونه مسیر تصمیم‌گیری مبتنی بر داده را برای تیم‌ها هموار می‌کنند؟",
    answer: (
      <p>
        داشبوردها به تیم‌ها کمک می‌کنند تا تصمیم‌گیری مبتنی بر داده داشته باشند؛
        چرا که شاخص‌های کلیدی عملکرد (KPI) و متریک‌های حیاتی را در یک مکان واحد
        گرد هم می‌آورند و به شما امکان می‌دهند روندها و تغییرات را در یک نگاه
        مشاهده کنید. یک داشبورد اصولی و مناسب، به سرعت نقاط قوت، ضعف و حوزه‌های
        نیازمند توجه یا واکاوی بیشتر را مشخص می‌کند.
      </p>
    ),
  },
  {
    question:
      "بهترین روش برای اشتراک‌گذاری داشبورد با هم‌تیمی‌های غیر فنی چیست؟",
    answer: (
      <p>
        بهینه‌ترین راه برای اشتراک‌گذاری داشبورد با اعضای تیم غیرمتخصص، ارائه آن
        در بسترهای کاری روزمره آن‌هاست. می‌توانید اشتراک ایمیلی یا Slack تنظیم
        کنید، لینک مستقیم ارسال نمایید، داشبورد را به فرمت PDF خروجی بگیرید یا
        آن را در اینترانت یا نرم‌افزار خود جایگذاری کنید. این گزینه‌ها دسترسی به
        تحلیل‌ها را بدون نیاز به لاگین در متابِیس ممکن می‌سازند.
      </p>
    ),
  },
  {
    question:
      "آیا می‌توانم گزارش‌هایی بسازم که فقط نمودار نشان ندهند و یک فلو ی داده‌ای تعریف کنند؟",
    answer: (
      <p>
        آری. ویژگی «مستندات» متابیس این قابلیت را فراهم می‌سازد که نمودارها و
        ویژوال‌ها را همراه با تفسیرهای نوشتاری ارائه دهید تا روایت کامل‌تری از
        داده‌های خود ارائه دهید. این فرمت به شما در توضیح روندها، افزودن کنتکست
        تحلیلی، توصیف گام‌های آنالیز و تسهیل درک و بهره‌برداری تیم از کشف‌ها کمک
        میکند.
      </p>
    ),
  },
  {
    question: "تفاوت بین داشبورد و یک گزارش تحلیلی چیست؟",
    answer: (
      <p>
        یک داشبورد، نمای زنده‌ای از شاخص‌های کلیدی عملکرد (KPI) و متریک‌های شما
        را در یک مکان واحد ارائه می‌دهد و امکان رصد سریع تغییرات و کاوش داده‌ها
        با فیلترها و قابلیت Drill-through را فراهم می‌کند. یک گزارش داده، مانند
        یک سند (Document) در متابیس، یک تحلیل در لحظه مشخص است که همراه با
        روایت، توضیحات و بینش‌های عمیق‌تر ارائه می‌شود. داشبوردها نشان می‌دهند
        چه اتفاقی در حال رخ دادن است؛ گزارش‌ها چرایی آن را توضیح می‌دهند.
      </p>
    ),
  },
  {
    question:
      "چطور برای تیم تحلیل سلف‌سرویس (Self-service Analytics) راه‌اندازی کنم؟",
    answer: (
      <p>
        کار را با ایجاد داشبوردهایی آغاز کنید که سوالات متداول و متریک‌های مهم
        را برجسته می‌سازند. متابیس دارای قابلیت‌های توکار Drill-through و فیلتر
        است، بنابراین اعضای تیم می‌توانند بدون نیاز به تنظیمات اضافی، داده‌ها را
        کاوش کنند. همان‌طور که افراد با ساختار داده‌های شما آشنا می‌شوند،
        می‌توانند از Metabot یا Query Builder استفاده کنند تا سوالات خود را مطرح
        کنند و داشبوردها و مستنداتی ایجاد نمایند که با دیگران به اشتراک بگذارند.
      </p>
    ),
  },
  {
    question:
      "چطور می‌توانم اشتراک‌گذاری داشبوردها و گزارش‌ها را در متابیس خودکار کنم؟",
    answer: (
      <p>
        می‌توانید برای داشبوردها، اشتراک‌های زمان‌بندی‌شده ایمیلی یا Slack روی
        دوره‌های دلخواه تنظیم کنید. داشبوردها به صورت زنده به‌روزرسانی می‌شوند و
        برای بررسی منظم طراحی شده‌اند. گزارش‌ها و Documentها بیشتر تحلیل‌های
        نقطه‌ای هستند، اما همچنان می‌توانید آن‌ها را با خروجی PDF، لینک عمومی یا
        جاسازی در محصول یا وب‌سایت خود به اشتراک بگذارید.
      </p>
    ),
  },
];

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
                <h1 className="text-xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-3xl text-justify">
                  داشبوردهای تحلیلی که کاربردی هستند. دسترسی سریع به داده‌ های
                  قابل تفسیر. اطلاعاتی که کل تیم شما قابلیت اجرایی کردن آن‌ها را
                  دارد.{" "}
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  نمودارها و پرسش‌ها را در داشبوردهای تعاملی با ابزارهای مختلف
                  ترکیب کنید تا همه ی افراد به داده های مورد نیاز خود دسترسی
                  پیدا کنند.
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
                تعاملی، مشارکت‌محور و طراحی شده برای متخصصان داده و کاربران
                غیرفنی
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                امکان کشف و تحلیل عمیق‌تر داده‌ها را به شکلی آسان و کاربرپسند
                تنها با چند کلیک فراهم نمایید.
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

          {/* <section className="bg-metabase-bg-neutral-98 py-16">
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
          </section> */}

          <StepsSection
            title="چگونه در متابیس یک داشبورد تحلیلی بسازیم؟"
            steps={dashboardSteps}
            sectionClassName="py-16 bg-metabase-bg-neutral-98 max-w-2xl mx-auto"
            containerClassName={`${containerClass} rounded-3xl p-8 bg-white text-center`}
            listClassName="mt-10 grid gap-6 md:grid-cols-1"
            cardClassName="flex items-center gap-4 rounded-2xl p-5 text-right"
            numberClassName="flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary-lighter/30 text-lg font-bold text-metabase-primary border border-metabase-primary"
            textClassName="flex-1 text-base text-justify leading-relaxed text-gray-700"
          />
          <section className="bg-metabase-bg-neutral-98 pb-16">
            <div className={containerClass}>
              <FAQSection
                items={faqItems}
                title="سوالات پرتکرار درباره داشبوردهای تحلیلی در متابیس"
                className="mt-0"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
