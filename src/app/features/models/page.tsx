import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/models`;

export const metadata: Metadata = {
  title: "مدل‌های متابیس | نقطهٔ شروع مطمئن برای تحلیل",
  description:
    "با مدل‌های متابیس، داده را تمیز، مستندسازی و در دسترس تیم‌ها قرار دهید تا بدون نیاز به join‌های پیچیده پاسخ بگیرند.",
  keywords: [
    "مدل متابیس",
    "Data modeling",
    "مدیریت داده",
    "خودسرویس تحلیل",
    "Metabase models",
    "حاکمیت داده",
  ],
  openGraph: {
    title: "مدل‌های متابیس | نقطهٔ شروع مطمئن برای تحلیل",
    description:
      "مدل‌های مستندسازی‌شده و کش‌شده بسازید تا تیم‌ها با دادهٔ مطمئن و قابل فهم کار کنند.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: `${baseUrl}/images/features/models.png`,
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش مدل‌های متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مدل‌های متابیس | نقطهٔ شروع مطمئن برای تحلیل",
    description:
      "مدل‌های غنی از متادیتا را برای تیم‌ها بسازید تا بدون نگرانی از دیتابیس‌های خام پاسخ بگیرند.",
    images: [`${baseUrl}/images/features/models.png`],
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

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const heroButtons = [
  {
    label: "شروع رایگان متابیس",
    href: "https://store.metabase.com/checkout",
    variant: "primary" as const,
    ariaLabel: "شروع رایگان متابیس",
  },
  {
    label: "گفتگو با تیم ما",
    href: "https://www.metabase.com/talk-to-a-person",
    variant: "outline" as const,
    ariaLabel: "رزرو مکالمه با تیم متابیس",
  },
];

type HeroButton = (typeof heroButtons)[number];

const buttonStyles: Record<HeroButton["variant"], string> = {
  primary:
    "bg-metabase-primary text-white hover:bg-metabase-primary-dark focus-visible:ring-metabase-primary-dark",
  outline:
    "border border-metabase-primary text-metabase-primary hover:bg-metabase-primary/10 focus-visible:ring-metabase-primary",
};

const featureCards = [
  {
    title: "افزودن متادیتا و توضیحات",
    icon: "/images/icons/columns.svg",
    copy: "با نام‌گذاری واضح ستون‌ها و افزودن توضیح، مدل را برای کاربران قابل فهم کنید تا راحت‌تر پرسش بسازند.",
  },
  {
    title: "به‌راحتی پیدا می‌شود",
    icon: "/images/icons/magnifying-glass.svg",
    copy: "مدل‌ها در مجموعه‌ها و داشبوردها قرار می‌گیرند و در نتایج جست‌وجو بالاتر دیده می‌شوند تا تیم‌ها سریع به آن برسند.",
  },
  {
    title: "تأیید مدل‌ها",
    icon: "/images/icons/medal.svg",
    copy: "با تیک آبی نشان دهید کدام مدل‌ها به‌روز و معتبرند تا همه بدانند به کدام داده اعتماد کنند. (در پلن‌های Pro و Enterprise)",
  },
  {
    title: "کش مدل",
    icon: "/images/icons/speed.svg",
    copy: "خروجی مدل‌ها را کش کنید تا تجربه‌ای سریع و روان برای هم‌تیمی‌های شما فراهم شود.",
  },
  {
    title: "تاریخچهٔ نسخه",
    icon: "/images/icons/click.svg",
    copy: "تغییرات مدل را ردیابی کنید، در صورت نیاز به نسخه‌های قبلی برگردید و نسخه‌های قدیمی را بایگانی کنید.",
  },
  {
    title: "صفحهٔ جزئیات مدل",
    icon: "/images/icons/model2.svg",
    copy: "ببینید هر مدل در کجا استفاده می‌شود، چه فیلدهایی دارد و چه اقدام‌هایی به آن متصل است تا کنترل کامل داشته باشید.",
  },
];

const learningCards = [
  {
    tag: "مستندات",
    title: "مدل‌سازی داده",
    href: "https://www.metabase.com/docs/latest/data-modeling/models",
    ariaLabel: "مطالعهٔ مستندات مدل‌سازی داده در متابیس",
  },
  {
    tag: "یادگیری",
    title: "مدل‌ها در متابیس",
    href: "https://www.metabase.com/learn/metabase-basics/getting-started/models",
    ariaLabel: "یادگیری کار با مدل‌های متابیس",
  },
  {
    tag: "یادگیری",
    title: "ابعاد و معیارها",
    href: "https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/dimensions-and-measures",
    ariaLabel: "مطالعهٔ ابعاد و معیارها در تحلیل داده",
  },
];

const creationSteps = [
  "در بالا-راست متابیس روی «جدید > مدل» کلیک کنید.",
  "سازندهٔ پرسش یا ویرایشگر SQL را برگزینید؛ سازندهٔ بصری متادیتا را خودکار تکمیل می‌کند.",
  "داده و ستون‌هایی را که می‌خواهید در مدل باشد انتخاب کنید.",
  "متادیتا را اصلاح کنید: نام ستون‌ها را واضح کنید و توضیح اضافه کنید.",
  "پرسش را بسازید و ذخیره کنید.",
  "مدل را در یک مجموعه یا جای واضح قرار دهید و تیم را مطلع کنید.",
  "یا از منوی … روی یک سؤال ذخیره‌شده «تبدیل به مدل» را انتخاب کنید.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "مدل‌های متابیس",
  description:
    "مدل‌های غنی از متادیتا بسازید تا تیم‌ها با دادهٔ قابل اعتماد و ساده کار کنند.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Models",
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
      name: "مدل‌ها",
      item: pageUrl,
    },
  ],
};

const persianDigits = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const modelSteps = creationSteps.map((step, index) => ({
  number: persianDigits[index] ?? `${index + 1}`,
  content: step,
}));

export default function ModelsPage() {
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
                    src="/images/icons/badges/models.svg"
                    alt="نماد مدل‌های متابیس"
                    width={80}
                    height={80}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    مدل‌ها
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  برای تیم‌ها نقطهٔ شروع مشخص و قابل اعتماد بسازید
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  مدل‌ها دادهٔ خام را به نسخه‌ای تمیز، مستندسازی‌شده و آمادهٔ
                  استفاده تبدیل می‌کنند تا هر تیم بدون joinهای پیچیده جواب خود
                  را پیدا کند.
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
                  className="w-full rounded-3xl shadow border border-metabase-border-light"
                  poster="/images/features/models.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="پیش‌نمایش ویدیویی مدل‌های متابیس"
                >
                  <source src="/images/features/models.mp4" type="video/mp4" />
                  <p className="p-4 text-center text-sm text-gray-600">
                    مرورگر شما از ویدیوی HTML5 پشتیبانی نمی‌کند.
                  </p>
                </video>
              </div>
            </div>
          </section>

          <section className="py-16 bg-metabase-bg-neutral-98">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                داده را قابل استفاده و قابل اعتماد کنید
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
                بخش‌های مهم دادهٔ خود را جمع کنید، تمیزشان کنید و ساختاری بدهید
                که برای کاربران نهایی ساده و ایمن باشد.
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
                    width={40}
                    height={40}
                    className="mb-4 h-10 w-10"
                  />
                  <h3 className="text-lg font-bold text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {feature.copy}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                دربارهٔ مدل‌ها بیشتر یاد بگیرید
              </h2>
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
                  <span className="inline-block w-fit rounded-md border border-metabase-blue-60 bg-blue-50 px-3 py-1 text-xs font-bold text-metabase-primary">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <StepsSection
            title="چگونه یک مدل را از صفر بسازیم؟"
            steps={modelSteps}
            sectionClassName="py-16 bg-metabase-bg-neutral-98"
            containerClassName={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center rounded-3xl p-8 bg-white text-center`}
            listClassName="mt-10 grid gap-6 md:grid-cols-2"
            cardClassName="flex items-start gap-4 rounded-2xl p-5 text-right"
            numberClassName="flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary-lighter/30 text-lg font-bold text-metabase-primary border border-metabase-primary"
            textClassName="flex-1 text-base leading-relaxed text-gray-700"
            titleTag="h3"
          />

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                متابیس را ۱۴ روز رایگان امتحان کنید
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
                مدل‌ها در تمام پلن‌ها در دسترس هستند؛ دادهٔ معتبر تعریف کنید و
                به ساده‌ترین شکل در اختیار همه قرار دهید.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {heroButtons.map((button) => (
                  <Link
                    key={`cta-${button.label}`}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${button.ariaLabel} - بخش پایانی`}
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
