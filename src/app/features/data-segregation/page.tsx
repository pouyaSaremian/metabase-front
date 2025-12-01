import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/data-segregation`;

export const metadata: Metadata = {
  title: "تفکیک داده‌ در متابیس | دسترسی ردیفی و ستونی",
  description:
    "با تفکیک داده در متابیس، سطح دسترسی را تا ردیف و ستون کنترل کنید، tenants جداگانه بسازید و داده‌های حساس را فقط در اختیار افراد مجاز بگذارید.",
  keywords: [
    "تفکیک داده",
    "data segregation",
    "امنیت داده",
    "دسترسی ردیفی",
    "Row level security",
    "متابیس",
    "احراز دسترسی",
  ],
  openGraph: {
    title: "تفکیک داده‌ در متابیس | دسترسی ردیفی و ستونی",
    description:
      "داده‌ها را در سطح دیتابیس، ردیف و ستون محدود کنید و تجربه‌ای امن برای هر مشتری بسازید.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: `${baseUrl}/images/features/sandbox.gif`,
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش امکانات تفکیک دادهٔ متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تفکیک داده‌ در متابیس | دسترسی ردیفی و ستونی",
    description:
      "مرزهای داده را مشخص کنید: نقش‌ها، دیتابیس‌های مجزا و ستون‌های ویرایش‌شده برای محافظت از اطلاعات حساس.",
    images: [`${baseUrl}/images/features/sandbox.gif`],
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

const heroButtons: HeroButton[] = [
  {
    label: "دمو متابیس",
    href: "https://store.metabase.com/checkout",
    variant: "primary",
    ariaLabel: "دمو متابیس",
  },
  {
    label: "گفتگو با تیم ما",
    href: "https://www.metabase.com/talk-to-a-person",
    variant: "outline",
    ariaLabel: "رزرو جلسه با تیم متابیس",
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
    title: "دسترسی ردیفی و ستونی",
    icon: "/images/icons/Sandbox.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        مشخص کنید هر گروه دقیقاً چه ردیف‌ها و ستون‌هایی را ببیند. می‌توانید
        نسخهٔ فیلتر شدهٔ جدول یا خروجی یک سؤال ذخیره‌شده را جایگزین منبع اصلی
        کنید.
      </p>
    ),
  },
  {
    title: "اتکا به نقش‌های دیتابیس",
    icon: "/images/icons/Sandbox2.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        به گروه‌ها اجازهٔ استفاده از ویرایشگر SQL را بدهید اما دسترسی واقعی را
        بر اساس نقش دیتابیس محدود کنید تا همه چیز در همان DB مدیریت شود.
      </p>
    ),
  },
  {
    title: "پشتیبانی از یک دیتابیس برای هر مشتری",
    icon: "/images/icons/Attributes.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        اگر دادهٔ هر مشتری در دیتابیس مستقل نگه داری می‌شود، مسیریابی درخواست‌ها
        را به سادگی مدیریت کنید و محتوا را در پایگاه اصلی هماهنگ نگه دارید.
      </p>
    ),
  },
  {
    title: "نمایش ستون‌های ویرایش‌شده",
    icon: "/images/icons/columns.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        نسخهٔ ویرایش‌شده یا مخفی‌شدهٔ ستون‌ها را نمایش دهید؛ مثلاً به‌جای ایمیل،
        فقط نام نمایشی را در اختیار کاربران عمومی قرار دهید.
      </p>
    ),
  },
  {
    title: "محدودسازی سبک برای Embed پایه",
    icon: "/images/icons/collections.svg",
    description: (
      <p className="text-sm leading-relaxed text-gray-600">
        برای داشبوردهای embed ساده می‌توانید داده را با پارامترهای قفل‌شده و
        ویژگی‌های سرور محدود کنید، بدون اینکه مجبور باشید دسترسی مجزا صادر کنید.
      </p>
    ),
  },
];

const learningCards: LearningCard[] = [
  {
    tag: "مستندات",
    title: "تفکیک داده",
    href: "https://www.metabase.com/docs/latest/permissions/row-and-column-security",
    ariaLabel: "مطالعهٔ مستندات تفکیک داده",
  },
  {
    tag: "مستندات",
    title: "نمونه‌های تفکیک داده",
    href: "https://www.metabase.com/docs/latest/permissions/row-and-column-security-examples",
    ariaLabel: "مطالعهٔ نمونه‌های تفکیک داده در متابیس",
  },
  {
    tag: "یادگیری",
    title: "شخصی‌سازی داده برای کاربران",
    href: "https://www.metabase.com/learn/metabase-basics/administration/permissions/row-and-column-security-use-cases",
    ariaLabel: "آشنایی با سناریوهای شخصی‌سازی داده",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "تفکیک داده متابیس",
  description:
    "مرزبندی داده در سطح دیتابیس، ردیف و ستون با متابیس برای پشتیبانی چندمشتری و حفاظت از اطلاعات حساس.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Data Segregation",
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
      name: "تفکیک داده",
      item: pageUrl,
    },
  ],
};

export default function DataSegregationPage() {
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
                    src="/images/icons/badges/data-sandbox.svg"
                    alt="نماد تفکیک داده متابیس"
                    width={80}
                    height={80}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    تفکیک داده
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  مرزهای دقیق برای هر دیتابیس، ردیف و ستون
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  با ابزارهای تفکیک دادهٔ متابیس، دسترسی هر گروه را محدود کنید،
                  دادهٔ هر مشتری را جدا نگه دارید و مطمئن شوید هیچ‌کس چیزی فراتر
                  از مجوزش نمی‌بیند.
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
                  poster="/images/features/sandbox.gif"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="پیش‌نمایش ویدیویی تفکیک داده متابیس"
                >
                  <source
                    src="/images/features/data-sandbox.mp4"
                    type="video/mp4"
                  />
                  <p className="p-4 text-center text-sm text-gray-600">
                    برای مشاهدهٔ ویدیو، لطفاً از مرورگری با پشتیبانی HTML5
                    استفاده کنید.
                  </p>
                </video>
              </div>
            </div>
          </section>

          <section className="py-16 bg-metabase-bg-neutral-98">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                مطمئن باشید کسی بیشتر از حد مجاز نمی‌بیند
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                مجموعه‌ای از گزینه‌های امنیتی و حریم خصوصی که با ساختار و ترجیح
                شما سازگار می‌شوند؛ از فیلترهای ساده تا سناریوهای چندمشتری
                پیچیده.
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
                  <div className="mt-3">{feature.description}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                بیشتر دربارهٔ امنیت ردیفی یاد بگیرید
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

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div className={`${containerClass} text-center`}>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                متابیس را ۱۴ روز رایگان امتحان کنید
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
                داده‌های حساس را محرمانه نگه دارید. تفکیک داده، پشتیبانی چندتنی
                و دسترسی ردیفی در پلن‌های Pro و Enterprise در دسترس است.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {heroButtons.map((button) => (
                  <Link
                    key={`cta-${button.label}`}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${button.ariaLabel} - فراخوان پایانی`}
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
