import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/permissions`;

export const metadata: Metadata = {
  title: "دسترسی و مجوزهای متابیس | حاکمیت دقیق روی داده",
  description:
    "با سیستم مجوزدهی متابیس می‌توانید دسترسی افراد را تا سطح پایگاه داده، جدول، سطر و ستون کنترل کنید و بین تحلیل داخلی و تعبیه‌شده فرق بگذارید.",
  keywords: [
    "مجوز متابیس",
    "کنترل دسترسی داده",
    "row level security",
    "column level security",
    "data governance",
    "data segregation",
  ],
  openGraph: {
    title: "دسترسی و مجوزهای متابیس | حاکمیت دقیق روی داده",
    description:
      "دسترسی گروه‌ها را روی داشبوردها، مجموعه‌ها و داده‌ها کنترل کنید و مسیر ورود به اطلاعات حساس را مطابق سیاست‌های سازمان تنظیم کنید.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: "https://www.metabase.com/images/features/permissions-og.jpg",
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش ویژگی مجوزهای متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دسترسی و مجوزهای متابیس | حاکمیت دقیق روی داده",
    description:
      "سیاست‌های امنیتی را روی داده داخلی و تحلیلات تعبیه‌شده پیاده کنید؛ از سطح پایگاه داده تا سطر و ستون.",
    images: ["https://www.metabase.com/images/features/permissions-og.jpg"],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/features/permissions`,
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
  name: "دسترسی و مجوزهای متابیس",
  description:
    "ابزارهای حاکمیت داده متابیس برای کنترل دقیق دسترسی در تحلیل داخلی و تعبیه‌شده.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Permissions",
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
      name: "مجوزها",
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
    ariaLabel: "شروع رایگان متابیس برای مدیریت مجوزها",
  },
  {
    label: "گفتگو با تیم ما",
    href: "https://www.metabase.com/talk-to-a-person",
    variant: "outline" as const,
    ariaLabel: "رزرو جلسه با تیم متابیس برای سوالات مجوزها",
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
    title: "مدیریت بر اساس گروه",
    description:
      "کاربران می‌توانند در چند گروه باشند؛ متابیس به‌صورت خودکار مجوزِ بازتر را اعمال می‌کند و با SSO همگام می‌شود.",
    icon: "/images/icons/eye.svg",
  },
  {
    title: "سطح سطر و ستون",
    description:
      "با قابلیت تفکیک داده، دسترسی گروه‌ها را تا ردیف و ستون محدود کنید و تجربه‌ای چند-مستاجری بسازید.",
    icon: "/images/icons/multi-level.svg",
  },
  {
    title: "مجوزهای تحت مدیریت پایگاه داده",
    description:
      "با احراز هویت جانشینی، نقش‌های پایگاه داده را به ویژگی‌های کاربر متابیس متصل کنید تا همان سیاست‌ها اعمال شوند.",
    icon: "/images/icons/model.svg",
  },
  {
    title: "کنترل مجموعه‌ها",
    description:
      "مشخص کنید هر گروه روی مجموعه‌ها (سوال، مدل، داشبورد و …) حق مشاهده یا ویرایش داشته باشد یا خیر.",
    icon: "/images/icons/collections.svg",
  },
  {
    title: "مجوزهای اپلیکیشن",
    description:
      "امکانات مدیریتی را به صورت محدود در اختیار گروه‌های خاص بگذارید بدون آن‌که نقش ادمین کامل بدهید.",
    icon: "/images/icons/Type=Alert.svg",
  },
  {
    title: "دانلود نتایج با محدودیت",
    description:
      "تعداد ردیف‌هایی که هر گروه می‌تواند دانلود کند را مشخص کنید تا تبادل داده مطابق سیاست امنیتی باشد.",
    icon: "/images/icons/share.svg",
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
    title: "راهنمای جامع مجوزهای متابیس",
    description:
      "نحوهٔ تنظیم سطح دسترسی برای پایگاه‌های داده، مجموعه‌ها و تنظیمات تعبیه‌شده.",
    href: "https://www.metabase.com/docs/latest/permissions/introduction",
    ariaLabel: "مطالعه راهنمای مجوزهای متابیس",
  },
  {
    tag: "مستندات",
    title: "تفکیک داده چند-مستاجره",
    description:
      "یاد بگیرید چطور با data segregation دادهٔ هر مشتری یا تیم را ایزوله کنید.",
    href: "https://www.metabase.com/features/data-segregation",
    ariaLabel: "مطالعه درباره تفکیک داده در متابیس",
  },
  {
    tag: "یادگیری",
    title: "راهنمای کار با مجوزها",
    description:
      "مقالهٔ Learn دربارهٔ بهترین شیوه‌های تعریف گروه‌ها و تنظیم دسترسی.",
    href: "https://www.metabase.com/learn/metabase-basics/administration/permissions/data-permissions",
    ariaLabel: "خواندن راهنمای یادگیری مجوزهای متابیس",
  },
];

const permissionSteps = [
  {
    number: "۱",
    content:
      "از مسیر «تنظیمات &gt; مجوزها» گروه‌های سازمان خود را تعریف کنید یا از SSO همگام کنید.",
  },
  {
    number: "۲",
    content:
      "برای هر پایگاه داده، سطح دسترسی موردنظر (خواندن، نوشتن، بدون دسترسی) را مشخص کنید و در صورت نیاز به سطح سطر/ستون بروید.",
  },
  {
    number: "۳",
    content:
      "مجوز مجموعه‌ها را تنظیم کنید تا دقیقاً معلوم باشد چه کسی می‌تواند داشبورد یا سوال را ببیند یا ویرایش کند.",
  },
  {
    number: "۴",
    content:
      "برای محیط تعبیه‌شده و برنامه‌های خود، مجوزهای اپلیکیشن و امکان دانلود داده را به‌صورت جداگانه کنترل کنید.",
  },
  {
    number: "۵",
    content:
      "مجوزها را تست کنید، در صورت نیاز گروه‌های میانی بسازید و سیاست‌ها را به‌مرور با رشد تیم به‌روزرسانی کنید.",
  },
];

export default function PermissionsPage() {
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
                    src="/images/icons/badges/permissions.svg"
                    alt="نماد قابلیت مجوزهای متابیس"
                    width={72}
                    height={72}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    مجوزها
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  کنترل ریزدانه روی هر چیزی که افراد می‌بینند و انجام می‌دهند
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  سیاست‌های امنیتی خود را برای گروه‌های مختلف تعریف کنید، دادهٔ
                  داخلی و تعبیه‌شده را ایمن نگه دارید و مطمئن شوید فقط افراد
                  مجاز به اطلاعات حساس دسترسی دارند.
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
                    poster="https://www.metabase.com/images/features/permissions.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="پیش‌نمایش ویدیویی قابلیت مجوزهای متابیس"
                  >
                    <source
                      src="https://www.metabase.com/images/features/data-sandbox.mp4"
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
                از کاملاً محرمانه تا دسترسی آزاد
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                برای هر سطح از داده لایهٔ حفاظتی مناسب دارید؛ از پایگاه داده و
                مجموعه تا ردیف و ستون. همینطور می‌توانید دسترسی‌های برنامه را
                مدیریت کنید.
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
                منابع بیشتر دربارهٔ مدیریت مجوزها
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
            title="چطور مجوزها را در متابیس مدیریت کنیم؟"
            steps={permissionSteps}
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
                همین امروز سیاست‌های امنیتی خود را روی متابیس اجرا کنید و مطمئن
                شوید هر داده‌ای فقط به دست افراد مجاز می‌رسد.
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
