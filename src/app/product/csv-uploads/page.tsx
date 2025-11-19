import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/product/csv-upload`;

export const metadata: Metadata = {
  title: "بارگذاری CSV در متابیس | تحلیل سریع بدون پایگاه داده",
  description:
    "فایل‌های CSV و صفحات گستردهٔ خود را مستقیماً در متابیس بارگذاری کنید، داشبورد بسازید و تا زمانی که به زیرساخت داده کامل برسید، تحلیل را جلو ببرید.",
  keywords: [
    "بارگذاری CSV متابیس",
    "تحلیل فایل CSV",
    "آپلود اسپردشیت",
    "متابیس بدون دیتابیس",
    "Metabase CSV Upload",
  ],
  openGraph: {
    title: "بارگذاری CSV در متابیس | تحلیل سریع بدون پایگاه داده",
    description:
      "بدون تیم داده هم می‌توانید فایل‌های CSV را در متابیس آپلود کنید و گزارش‌های مشترک بسازید.",
    url: pageUrl,
    type: "website",
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: "https://www.metabase.com/images/product/csv-uploads-ogg.jpg",
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش قابلیت بارگذاری CSV متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بارگذاری CSV در متابیس | تحلیل سریع بدون پایگاه داده",
    description:
      "دادهٔ اسپردشیت خود را به متابیس بیاورید و بدون نیاز به SQL بینش بسازید.",
    images: ["https://www.metabase.com/images/product/csv-uploads-ogg.jpg"],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/product/csv-uploads`,
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
  name: "Metabase CSV Uploads",
  description:
    "بارگذاری فایل‌های CSV در متابیس برای ساخت گزارش و داشبورد بدون نیاز به پایگاه دادهٔ جداگانه.",
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
      name: "بارگذاری CSV",
      item: pageUrl,
    },
  ],
};

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const heroButtons = [
  {
    label: "شروع آزمایشی متابیس",
    href: "https://store.metabase.com/checkout?dwh=1",
    ariaLabel: "شروع آزمایشی متابیس برای بارگذاری CSV",
    variant: "primary" as const,
  },
  {
    label: "گفتگو با تیم ما",
    href: "https://www.metabase.com/talk-to-a-person",
    ariaLabel: "رزرو جلسه با تیم متابیس",
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

const useCaseCards = [
  {
    title: "برای تیم‌های مارکتینگ",
    description:
      "دادهٔ کمپین‌های ایمیلی یا NPS را به صورت CSV خروجی بگیرید و در متابیس سنجه‌های فعال‌سازی و نگهداشت را بسنجید.",
  },
  {
    title: "برای موفقیت مشتری",
    description:
      "پاسخ‌های نظرسنجی و رویدادهای پشتیبانی را آپلود کنید، فیلتر بزنید و به سرعت نقاط درد مشتریان را پیدا کنید.",
  },
  {
    title: "برای مدیران محصول",
    description:
      "وقتی هنوز ETL کامل ندارید، دادهٔ ابزارهای تحلیلی را به شکل CSV وارد کنید و روند استفاده از ویژگی‌ها را پایش کنید.",
  },
];

const uploadIcon = (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="inline-block h-6 w-6 text-metabase-primary"
  >
    <path d="M17.9212 4C13.4212 4 9.58341 7.1279 8.82185 11.3473C4.52316 11.5733 1 14.9877 1 19.3056C1 22.1628 2.5575 24.6406 4.84602 26.0392C5.57726 26.4861 6.53233 26.2554 6.97923 25.5243C7.4261 24.7931 7.19558 23.8381 6.46432 23.3912C5.0201 22.5086 4.10345 20.993 4.10345 19.3056C4.10345 16.685 6.35041 14.4389 9.27586 14.4389C9.53171 14.4389 9.78236 14.4563 10.0268 14.4896C10.472 14.5505 10.9218 14.4152 11.2597 14.119C11.5976 13.8227 11.7905 13.3945 11.7885 12.9451L11.7882 12.884C11.79 9.75834 14.4664 7.10345 17.9212 7.10345C21.3772 7.10345 24.0543 9.76015 24.0543 12.8871C24.0543 13.9287 23.7634 14.9048 23.2505 15.751C22.9592 16.2317 22.9505 16.8324 23.2281 17.3213C23.5056 17.8102 24.0257 18.1108 24.5879 18.107L24.6499 18.1066C26.512 18.109 27.8966 19.533 27.8966 21.1395C27.8966 22.3898 27.0719 23.5163 25.8177 23.9694C25.0116 24.2606 24.5943 25.15 24.8854 25.9561C25.1765 26.7619 26.0659 27.1794 26.872 26.8883C29.2453 26.031 31 23.811 31 21.1395C31 18.4359 29.217 16.2073 26.7936 15.3648C27.0305 14.5784 27.1577 13.7469 27.1577 12.8871C27.1577 7.91167 22.9536 4 17.9212 4ZM22.1413 19.8573C22.8106 20.3926 22.919 21.3692 22.3836 22.0383C21.8483 22.7076 20.8718 22.816 20.2027 22.2808L17.5517 20.1599V26.2414C17.5517 27.0983 16.857 27.7931 16 27.7931C15.143 27.7931 14.4483 27.0983 14.4483 26.2414V20.1592L11.7965 22.2808C11.1273 22.816 10.1508 22.7076 9.61544 22.0383C9.08008 21.3692 9.1886 20.3926 9.85778 19.8573L15.0302 15.7193C15.5969 15.266 16.4022 15.266 16.9689 15.7193L22.1413 19.8573Z" />
  </svg>
);

const stepsContent: Array<{ number: string; content: ReactNode }> = [
  {
    number: "۱",
    content: (
      <>
        <span className="block">
          اگر همین حالا از متابیس استفاده می‌کنید، مطمئن شوید پایگاه دادهٔ متصل
          از آپلود CSV پشتیبانی می‌کند. به{" "}
          <Link
            href="https://www.metabase.com/docs/latest/databases/uploads.html#databases-that-support-uploads"
            target="_blank"
            rel="noreferrer"
            className="text-metabase-primary underline decoration-dotted underline-offset-4"
          >
            مستندات پشتیبانی دیتابیس
          </Link>{" "}
          سر بزنید.
        </span>
        <span className="mt-3 block">
          دیتابیس ندارید؟ با{" "}
          <Link
            href="https://www.metabase.com/docs/latest/cloud/storage.html"
            target="_blank"
            rel="noreferrer"
            className="text-metabase-primary underline decoration-dotted underline-offset-4"
          >
            Metabase Cloud Storage
          </Link>{" "}
          یا{" "}
          <Link
            href="https://store.metabase.com/checkout?dwh=1"
            target="_blank"
            rel="noreferrer"
            className="text-metabase-primary underline decoration-dotted underline-offset-4"
          >
            آزمایش رایگان ۱۴ روزه
          </Link>{" "}
          بدون دردسر شروع کنید.
        </span>
      </>
    ),
  },
  {
    number: "۲",
    content: (
      <>
        <span className="block">
          فایل CSV یا خروجی صفحهٔ گوگل/اکسل را آماده کنید. اگر داده در
          Spreadsheet است از مسیر <strong>File &gt; Download (.csv)</strong> آن
          را ذخیره کنید.
        </span>
      </>
    ),
  },
  {
    number: "۳",
    content: (
      <>
        <span className="block">
          در متابیس وارد مجموعه‌ای شوید که می‌خواهید داده در آن قرار بگیرد؛
          همان‌جا که تیم شما سوال‌ها و داشبوردها را ذخیره می‌کند.
        </span>
      </>
    ),
  },
  {
    number: "۴",
    content: (
      <>
        <span className="block">
          روی دکمهٔ {uploadIcon} در نمای مجموعه کلیک کنید یا فایل را بکشید و رها
          کنید تا بارگذاری آغاز شود.
        </span>
      </>
    ),
  },
  {
    number: "۵",
    content: (
      <>
        <span className="block">
          بعد از پایان آپلود، متابیس خودکار یک{" "}
          <Link
            href="https://www.metabase.com/docs/latest/data-modeling/models.html"
            target="_blank"
            rel="noreferrer"
            className="text-metabase-primary underline decoration-dotted underline-offset-4"
          >
            مدل
          </Link>{" "}
          و یک جدول در طرحوارهٔ مخصوص آپلودها ایجاد می‌کند. از همین‌جا می‌توانید
          سؤال بپرسید، X-ray اجرا کنید یا داشبورد بسازید.
        </span>
      </>
    ),
  },
  {
    number: "۶",
    content: (
      <>
        <span className="block">
          هر زمان دادهٔ CSV تغییر کرد، با گزینهٔ «Append data to a model» در
          نمای مجموعه، ردیف‌های جدید را به مدل اضافه کنید تا گزارش‌ها همیشه تازه
          بمانند.
        </span>
      </>
    ),
  },
];

export default function CsvUploadPage() {
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
              className={`${containerClass} grid gap-12 lg:grid-cols-2 lg:items-center`}
            >
              <div className="space-y-6 text-right">
                <div className="flex items-center justify-start gap-3 text-metabase-primary">
                  <Image
                    src="/images/icons/badges/upload-promo.svg"
                    alt="نماد بارگذاری CSV متابیس"
                    width={72}
                    height={72}
                  />
                  <span className="text-base font-bold">CSV Upload</span>
                </div>
                <h1 className="text-3xl font-black leading-snug text-gray-900 sm:text-4xl">
                  فایل‌های CSV خود را بارگذاری و در متابیس تحلیل کنید
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  وقتی هنوز زیرساخت داده ندارید یا تیم کوچک است، CSV آپلود کنید،
                  مدل بسازید و در همان محیط متابیس نمودار و داشبورد آماده کنید.
                  همهٔ اعضا بدون SQL می‌توانند بینش بگیرند.
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
              <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-blue-100/60">
                <video
                  className="h-auto w-full object-cover"
                  poster="https://www.metabase.com/images/product/csv-uploads/csv-uploads.gif"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="پیش‌نمایش ویدیویی بارگذاری CSV در متابیس"
                >
                  <source
                    src="https://www.metabase.com/images/product/csv-uploads/csv-uploads.mp4"
                    type="video/mp4"
                  />
                  <p className="p-4 text-center text-sm text-gray-600">
                    مرورگر شما از ویدیو HTML5 پشتیبانی نمی‌کند.
                  </p>
                </video>
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                حتی بدون استک داده هم می‌توانید با متابیس کار کنید
              </h2>
              <div className="mt-4 flex items-center justify-center gap-3 text-gray-600">
                <span>چند نمونه کاربرد رایج</span>
                <Image
                  src="/images/icons/curved-arrow.svg"
                  alt="فلش اشاره"
                  width={60}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3`}
            >
              {useCaseCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-blue-100 bg-white p-6 text-right shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <StepsSection
            title="چطور فایل‌های CSV را در متابیس تحلیل کنیم؟"
            steps={stepsContent}
            sectionClassName="py-16 bg-metabase-bg-neutral-98"
            containerClassName={`${containerClass} rounded-3xl bg-white p-8 text-center`}
            listClassName="mt-10 grid gap-6 md:grid-cols-2"
            cardClassName="flex items-start gap-4 rounded-2xl border border-blue-100 bg-metabase-bg-neutral-98 p-5 text-right"
            numberClassName="flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary text-lg font-bold text-white"
            textClassName="flex-1 text-base leading-relaxed text-gray-700 text-right"
          />

          <section className="bg-metabase-bg-neutral-98 pb-16 pt-4">
            <div
              className={`${containerClass} rounded-3xl bg-white p-10 text-center`}
            >
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                متابیس را با یک دیتابیس متصل ۱۴ روز رایگان امتحان کنید
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                CSVهای خود را مستقیم وارد متابیس کنید، سرعت بینش‌گیری را بالا
                ببرید و هر زمان آماده بودید دیتابیس اصلی را متصل کنید.
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
