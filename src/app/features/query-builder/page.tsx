import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/query-builder`;

export const metadata: Metadata = {
  title: "سازندهٔ پرسش متابیس | تحلیل بدون SQL",
  description:
    "سازندهٔ پرسش متابیس به همه اجازه می‌دهد تنها با چند کلیک، داده‌ها را فیلتر و خلاصه کند، جداول را به هم وصل کند و نتایج را ببیند؛ بدون نیاز به SQL.",
  keywords: [
    "سازنده پرسش",
    "Query Builder",
    "تحلیل بدون کدنویسی",
    "هوش تجاری",
    "Metabase",
    "تحلیل داده تیمی",
  ],
  openGraph: {
    title: "سازندهٔ پرسش متابیس | تحلیل بدون SQL",
    description:
      "با سازندهٔ پرسش متابیس، فیلتر، خلاصه‌سازی، اتصال جداول و پیش‌نمایش نتایج را تنها با چند کلیک انجام دهید.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: `${baseUrl}/images/features/query-builder.gif`,
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش سازندهٔ پرسش متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سازندهٔ پرسش متابیس | تحلیل بدون SQL",
    description:
      "متابیس پرسیدن سؤال از داده را برای همهٔ اعضای تیم ساده می‌کند؛ بدون SQL و تنها با انتخاب از منوها.",
    images: [`${baseUrl}/images/features/query-builder.gif`],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: pageUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "outline";
  ariaLabel: string;
}

interface FeatureCard {
  title: string;
  description: ReactNode;
  icon: string;
}

interface LearningCard {
  tag: string;
  title: string;
  href: string;
  ariaLabel: string;
}

interface StepItem {
  number: string;
  content: string;
}

const heroButtons: HeroButton[] = [
  {
    label: "دمو متابیس",
    href: "https://store.metabase.com/checkout",
    variant: "primary",
    ariaLabel: "دمو متابیس",
  },
  {
    label: "گفتگو با یک کارشناس",
    href: "https://www.metabase.com/talk-to-a-person",
    variant: "outline",
    ariaLabel: "گفتگو با یک کارشناس متابیس",
  },
];

const buttonStyles: Record<HeroButton["variant"], string> = {
  primary:
    "bg-metabase-primary text-white hover:bg-metabase-primary-dark focus-visible:ring-metabase-primary-dark",
  outline:
    "border border-metabase-primary text-metabase-primary hover:bg-metabase-primary/10 focus-visible:ring-metabase-primary",
};

const featureCards: FeatureCard[] = [
  {
    title: "فیلترگذاری و خلاصه‌سازی",
    icon: "/images/icons/filter.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        از طریق منوی کشویی، با انتخاب پارامترهای دلخواه، داده‌ها را فیلتر و
        دسته‌بندی نمایید.
      </p>
    ),
  },
  {
    title: "پیوند داده‌ها",
    icon: "/images/icons/join.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        از قابلیت پیوند داده (Joins) برای کاوش درباره اطلاعاتی که در چندین مدل
        یا جدول توزیع شده‌اند استفاده کنید.
      </p>
    ),
  },
  {
    title: "عبارت‌های سفارشی",
    icon: "/images/icons/formula.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        عبارت‌های شخصی‌سازی شده (مانند فرمول‌های موجود در اسپردشیت‌ها، مانند
        فرمول CountIf) به شما امکان می‌دهند از پرسش‌های ساده فراتر روید.
      </p>
    ),
  },
  {
    title: "گردآوری لایه‌ای داده",
    icon: "/images/icons/multi-level.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        با به‌کارگیری گردآوری لایه‌ای داده، می‌توانید به ترتیب و با دقت بالاتر،
        لایه‌های بیشتری از پالایش و خلاصه‌سازی را اضافه نمایید.
      </p>
    ),
  },
  {
    title: "پیش‌نمایش لحظه‌ای",
    icon: "/images/icons/play.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        هنگام ساخت سؤال، پیش‌نمایش نتایج را ببینید و قبل از اجرای کامل، تنظیمات
        را اصلاح کنید.
      </p>
    ),
  },
  {
    title: "تاریخچهٔ سؤال",
    icon: "/images/icons/question-blue-circle-outline.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        همه آزادانه می‌توانند سؤال را ویرایش کنند و متابیس ۱۵ نسخهٔ اخیر را نگه
        می‌دارد تا همیشه بتوانید به نسخهٔ قبلی برگردید.
      </p>
    ),
  },
];

const learningCards: LearningCard[] = [
  {
    tag: "مستندات",
    title: "پرسیدن سؤال در متابیس",
    href: "https://www.metabase.com/docs/latest/questions/introduction",
    ariaLabel: "مطالعهٔ مستندات پرسیدن سؤال در متابیس",
  },
  {
    tag: "یادگیری",
    title: "استفاده از سازندهٔ پرسش",
    href: "https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions",
    ariaLabel: "آموزش استفاده از سازندهٔ پرسش متابیس",
  },
  {
    tag: "ویرایشگر SQL",
    title: "نوشتن SQL در متابیس",
    href: "https://www.metabase.com/docs/latest/questions/native-editor/writing-sql",
    ariaLabel: "مطالعهٔ راهنمای نوشتن SQL در متابیس",
  },
];

const steps: StepItem[] = [
  {
    number: "۱",
    content:
      "در گوشهٔ بالا-راست متابیس روی «جدید > سؤال» کلیک کنید تا سازندهٔ پرسش باز شود. همچنین می‌توانید از بالای یک جدول یا مدل گزینه‌های فیلتر/خلاصه‌سازی را بزنید.",
  },
  {
    number: "۲",
    content:
      "جدول یا مدل موردنظر برای تحلیل را انتخاب کنید؛ مثلاً جدول سفارش‌ها در دیتاست نمونه.",
  },
  {
    number: "۳",
    content:
      "در بخش فیلترها، ستون «تاریخ ایجاد» را انتخاب و محدودهٔ «۱۲ ماه گذشته» را اعمال کنید.",
  },
  {
    number: "۴",
    content:
      "روی دکمهٔ «+» کنار فیلترها کلیک کنید و این‌بار ستون «جمع کل» را با شرط «بزرگ‌تر از ۲۰» اضافه کنید.",
  },
  {
    number: "۵",
    content:
      "به زبانهٔ «خلاصه‌سازی» بروید، گزینهٔ «جمع» را انتخاب کنید و ستون «مالیات‌ها» را برگزینید.",
  },
  {
    number: "۶",
    content:
      "برای گروه‌بندی نتایج، در بخش «براساس» مسیر «محصول > دسته‌بندی» را انتخاب کنید تا مالیات هر دسته مشخص شود.",
  },
  {
    number: "۷",
    content:
      "برای گروه‌بندی دوم، دوباره روی «+» کلیک کنید، ستون «تاریخ ایجاد» را انتخاب و بازهٔ «ماه» را برگزینید.",
  },
  {
    number: "۸",
    content:
      "دکمهٔ «تصویربرداری» را بزنید تا نمودار تفکیک مالیات بر اساس دسته‌بندی محصول در گذر زمان را ببینید.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "سازندهٔ پرسش متابیس",
  description:
    "پرسش از داده بدون SQL با متابیس: فیلترها، خلاصه‌سازی، اتصال جداول و پیش‌نمایش لحظه‌ای.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Query Builder",
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
      name: "سازندهٔ پرسش",
      item: pageUrl,
    },
  ],
};

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const queryBuilderSteps = steps.map((step) => ({
  number: step.number,
  content: step.content,
}));

export default function QueryBuilderPage() {
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
                    src="/images/icons/badges/query-builder-icon.svg"
                    alt="نماد سازندهٔ پرسش متابیس"
                    width={80}
                    height={80}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    سازندهٔ پرسش
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  با ابزار سازنده‌ی کوئری تنها در چند کلیک به پاسخ خود برسید{" "}
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  سازنده‌ی کوئری به هر کسی - حتی هم‌تیمی‌های کم‌تجربه‌تر شما در
                  حوزه داده - این امکان را می‌دهد که تنها با کلیک، استفاده از
                  پیشنهادها و انتخاب از منوها، سوالات خود را بسازد. بدون نیاز به
                  تخصص داده یا دانش SQL.
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
                <video
                  id="query-builder-video"
                  className="w-full rounded-3xl shadow border border-metabase-border-light"
                  poster="/images/features/query-builder.gif"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="پیش‌نمایش ویدیویی سازندهٔ پرسش متابیس"
                >
                  <source
                    src="/images/features/query-builder1.mp4"
                    type="video/mp4"
                  />
                  <p className="p-4 text-center text-sm text-gray-600">
                    برای مشاهدهٔ ویدیو، لطفاً مرورگری استفاده کنید که از ویدیو
                    HTML5 پشتیبانی کند.
                  </p>
                </video>
              </div>
            </div>
          </section>

          <section className="py-16 bg-metabase-bg-neutral-98">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                تحلیل برای همهٔ اعضای تیم
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                یک ابزار بصری و کلیک‌محور برای دسترسی مستقل به داده، مناسب برای
                افراد نا آشنا با SQL (و یک راه‌کار تسریع‌کننده برای افراد مسلط)
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
                  <h3 className="text-lg font-bold text-gray-700">
                    {feature.title}
                  </h3>
                  <div className="mt-3">{feature.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                منابع بیشتر برای پرسیدن سؤال در متابیس
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
                از مستندات رسمی تا دوره‌های آموزشی و ویرایشگر SQL، همه چیز آماده
                است تا تیم شما سریع‌تر به پاسخ برسد.
              </p>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 lg:grid-cols-3`}
            >
              {learningCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel}
                  className="flex flex-col rounded-xl border border-blue-100 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary"
                >
                  <span className="inline-block rounded-md w-fit border border-metabase-blue-60 bg-blue-50 px-3 py-1 text-xs font-bold text-metabase-primary">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section> */}

          <StepsSection
            title="چگونه با سازندهٔ پرسش سؤال بپرسیم؟"
            steps={queryBuilderSteps}
            sectionClassName="py-16 bg-metabase-bg-neutral-98 max-w-2xl mx-auto"
            containerClassName={`${containerClass} rounded-3xl bg-white p-8 text-center`}
            listClassName="mt-10 grid gap-6 md:grid-cols-1"
            cardClassName="flex items-center gap-4 rounded-2xl p-5 text-right"
            numberClassName="flex h-10 w-10 items-center justify-center rounded-full border border-metabase-primary bg-metabase-primary-lighter/30 text-lg font-bold text-metabase-primary"
            textClassName="flex-1 text-base leading-relaxed text-gray-700"
            titleTag="h3"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
