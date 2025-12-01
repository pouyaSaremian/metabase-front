import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepsSection from "@/components/StepsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.metabase.com";
const pageUrl = `${baseUrl}/features/usage-analytics`;

export const metadata: Metadata = {
  title: "آنالیز استفاده متابیس | دید کامل از رفتار کاربران",
  description:
    "آنالیز استفادهٔ متابیس مجموعه‌ای از داشبوردها، پرسش‌ها و مدل‌ها است تا بدانید چه کسی چه زمانی چه کاری در متابیس انجام داده و چگونه عملکرد سیستم تغییر کرده است.",
  keywords: [
    "آنالیز استفاده متابیس",
    "گزارش رفتار کاربر",
    "لاگ حسابرسی",
    "پایش عملکرد",
    "مدل‌های آنالیز استفاده",
    "اعلان امنیتی",
  ],
  openGraph: {
    title: "آنالیز استفاده متابیس | دید کامل از رفتار کاربران",
    description:
      "با مجموعه داشبوردها، مدل‌ها و سوالات آمادهٔ متابیس، از رفتار کاربران، عملکرد و تغییرات پیکربندی همیشه باخبر بمانید.",
    type: "website",
    url: pageUrl,
    locale: "fa_IR",
    siteName: "Metabase Persian",
    images: [
      {
        url: `${baseUrl}/images/features/usage-analytics.png`,
        width: 1200,
        height: 675,
        alt: "پیش‌نمایش ویدیویی آنالیز استفاده متابیس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آنالیز استفاده متابیس | دید کامل از رفتار کاربران",
    description:
      "نظارت زنده بر لاگ‌ها، عملکرد و استفادهٔ متابیس با داشبوردها و مدل‌های آماده.",
    images: [`${baseUrl}/images/features/usage-analytics.png`],
    site: "@metabase",
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      fa: pageUrl,
      en: `${baseUrl}/features/usage-analytics`,
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
  name: "آنالیز استفاده متابیس",
  description:
    "شناخت کامل رفتار کاربران، عملکرد و تنظیمات متابیس با داشبوردها و مدل‌های آماده.",
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    name: "Metabase",
    url: baseUrl,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Metabase Usage Analytics",
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
      name: "آنالیز استفاده",
      item: pageUrl,
    },
  ],
};

const containerClass = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

const heroButtons = [
  {
    label: "دمو متابیس",
    href: "https://store.metabase.com/checkout",
    variant: "primary" as const,
    ariaLabel: "شروع استفاده رایگان از متابیس",
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

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "گزارش‌های استفاده، تغییرات و عملکرد",
    icon: "/images/icons/Type=Trend.svg",
    description:
      "به‌صورت خواندنی و امن ببینید چه کسی در چه زمانی چه چیزی را اجرا کرده، چه داده‌ای دانلود شده و عملکرد سیستم چگونه بوده است.",
  },
  {
    title: "داشبوردهای تعاملی آماده",
    icon: "/images/icons/Type=Dashboard.svg",
    description:
      "روند کلی استفاده، محبوب‌ترین سوال‌ها و فیلترها را در داشبوردهای آماده رصد کنید و با منوهای اقدام به عمق داده بروید.",
  },
  {
    title: "مدل‌ها برای ساخت گزارش‌های سفارشی",
    icon: "/images/icons/model.svg",
    description:
      "همهٔ داده‌های استفاده و لاگ‌ها در قالب مدل‌های ساخت‌یافته در دسترس هستند تا هر زمان به گزارش اختصاصی نیاز داشتید سریع بسازید.",
  },
  {
    title: "هشدار و اشتراک بر رفتار کاربران",
    icon: "/images/icons/Type=Alert.svg",
    description:
      "برای رخداد‌های مهم مانند دانلودهای سنگین یا جهش ترافیک، هشدار و اشتراک تنظیم کنید و زودتر مطلع شوید.",
  },
  {
    title: "شخصی‌سازی داشبوردهای آماده",
    icon: "/images/icons/Type=Dashboard.svg",
    description:
      "نسخهٔ اصلی برای حسابرسی دست‌نخورده می‌ماند؛ اما با «ساخت نسخهٔ جدید» می‌توانید داشبوردی مطابق سناریوهای خود بسازید.",
  },
  {
    title: "مدیریت دسترسی دقیق",
    icon: "/images/icons/eye.svg",
    description:
      "اختیارات مشاهده یا ویرایش را بدون اعطای نقش مدیر، به افراد اعتماد شده بسپارید و همچنان کنترل کامل داشته باشید.",
  },
];

interface ResourceCard {
  tag: string;
  title: string;
  href: string;
  ariaLabel: string;
}

const resourceCards: ResourceCard[] = [
  {
    tag: "مستندات",
    title: "ابزارهای استفاده و عملکرد متابیس",
    href: "https://www.metabase.com/docs/latest/usage-and-performance-tools/usage-analytics",
    ariaLabel: "مشاهده مستندات ابزارهای استفاده و عملکرد متابیس",
  },
  {
    tag: "خبر انتشار",
    title: "با متابیس بفهمید در متابیس چه خبر است",
    href: "https://www.metabase.com/releases/metabase-48",
    ariaLabel: "مطالعه خبر انتشار مربوط به آنالیز استفاده متابیس",
  },
  {
    tag: "ویدیو",
    title: "آنالیز استفاده در عمل",
    href: "https://www.youtube.com/watch?v=-HF_8Yf-5Lg",
    ariaLabel: "تماشای ویدیو آنالیز استفاده متابیس",
  },
];

const usageSteps = [
  {
    number: "۱",
    content:
      "از سایدبار مجموعهٔ «Metabase analytics» را باز کنید؛ مدیران آن را پیش‌فرض می‌بینند و برای بقیه کافی است دسترسی فعال شود.",
  },
  {
    number: "۲",
    content:
      "پرسش «Metabase metrics» را اجرا کنید، بازهٔ تاریخ و گروه کاربری مدنظر مثل «مدیران ارشد» را انتخاب کنید تا بفهمید چه کسی فعال‌تر است.",
  },
  {
    number: "۳",
    content:
      "برای داشبوردهای کلیدی اشتراک هفتگی یا هشدار تعریف کنید تا به‌محض تغییرات مهم در جریان بمانید.",
  },
];

export default function UsageAnalyticsPage() {
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
                    src="/images/icons/badges/usage-analytics.svg"
                    alt="نماد آنالیز استفاده متابیس"
                    width={72}
                    height={72}
                  />
                  <span className="text-base font-bold text-metabase-primary">
                    آنالیز استفاده
                  </span>
                </div>
                <h1 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  دید کامل از هر کاری که در متابیس رخ می‌دهد
                </h1>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  مجموعه‌ای از داشبوردها، پرسش‌ها و مدل‌ها که نشان می‌دهد چه کسی
                  با چه داده‌ای کار کرده، چه تغییری داده و عملکرد سیستم چگونه
                  بوده است. روی پلن‌های{" "}
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
                <div className="rounded-3xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-100/60">
                  <video
                    id="usage-analytics-video"
                    className="w-full rounded-2xl border border-metabase-border-light object-cover"
                    poster="/images/features/usage-analytics.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="پیش‌نمایش ویدیویی آنالیز استفاده در متابیس"
                  >
                    <source
                      src="/images/features/usage-analytics.mp4"
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
                بفهمید چه کسی، چه زمانی و چه کاری انجام داده است
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                گزارش‌های ماندگار حسابرسی، آمار استفاده و اعلان‌ها کمک می‌کنند
                هر تغییری را ردیابی کنید و دقیقاً بدانید متابیس چگونه مورد
                استفاده قرار می‌گیرد.
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
                بیشتر از آنالیز استفاده بهره ببرید
              </h2>
            </div>
            <div
              className={`${containerClass} mt-10 grid gap-6 lg:grid-cols-3`}
            >
              {resourceCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={card.ariaLabel}
                  className="flex flex-col rounded-xl border border-blue-100 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary"
                >
                  <span className="inline-block rounded-md border border-metabase-blue-60 bg-blue-50 px-3 py-1 text-xs font-bold text-metabase-primary">
                    {card.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <StepsSection
            title="چطور از آنالیز استفاده بهره بگیریم؟"
            steps={usageSteps}
            sectionClassName="bg-white py-16"
            containerClassName={`${containerClass} text-center`}
            listClassName="mx-auto mt-10 max-w-3xl space-y-4"
            cardClassName="flex items-start gap-4 rounded-3xl border border-blue-100 bg-metabase-bg-neutral-98 p-5 text-right"
            numberClassName="flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary text-base font-bold text-white"
            textClassName="flex-1 text-base leading-relaxed text-gray-700"
            titleTag="h3"
          />

          <section className="bg-metabase-bg-neutral-98 py-16">
            <div
              className={`${containerClass} rounded-3xl bg-white p-10 text-center`}
            >
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                متابیس را ۱۴ روز رایگان امتحان کنید
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
                تجربهٔ تحلیل داخلی و تعبیه‌شده را براساس داده‌های واقعی استفاده
                بهینه کنید. آنالیز استفاده روی پلن‌های Pro و Enterprise فعال
                است.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {heroButtons.map((button) => (
                  <Link
                    key={`cta-${button.label}`}
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
