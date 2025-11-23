import type { Metadata } from "next";
import BusinessIntelligenceDemoHero from "@/components/business-intelligence/BusinessIntelligenceDemoHero";
import BusinessIntelligenceThreeCards from "@/components/business-intelligence/BusinessIntelligenceThreeCards";
import FeatureSection from "@/components/business-intelligence/FeatureSection";
import FAQSection from "@/components/FAQSection";
import { AccordionItem } from "@/components/common/Accordion";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";

export const metadata: Metadata = {
  title: "هوش تجاری Metabase | ابزار BI که همه می‌توانند استفاده کنند",
  description:
    "Metabase ابزار BI است که تجزیه و تحلیل خودخدمات را واقعاً ممکن می‌سازد. ابزارهای ساده برای اجرای گزارش‌های ad hoc، پرسیدن سوالات و ساخت داشبورد برای تصمیم‌گیری مبتنی بر داده.",
  keywords: [
    "هوش تجاری",
    "Business Intelligence",
    "BI tool",
    "تجزیه و تحلیل داده",
    "داشبورد",
    "گزارش‌گیری",
    "Metabase",
    "ابزار BI",
    "تجزیه و تحلیل خودخدمات",
  ],
  authors: [{ name: "Metabase Persian" }],
  creator: "Metabase",
  publisher: "Metabase",
  openGraph: {
    title: "هوش تجاری Metabase | ابزار BI که همه می‌توانند استفاده کنند",
    description:
      "Metabase ابزار BI است که تجزیه و تحلیل خودخدمات را واقعاً ممکن می‌سازد.",
    type: "website",
    locale: "fa_IR",
    url: `${baseUrl}/lp/business-intelligence-demo`,
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    images: [
      {
        url: `${baseUrl}/images/features/query-builder-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Metabase Business Intelligence - ابزار هوش تجاری برای همه",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "هوش تجاری Metabase",
    description:
      "Metabase ابزار BI است که تجزیه و تحلیل خودخدمات را واقعاً ممکن می‌سازد.",
    images: [`${baseUrl}/images/features/query-builder-og.jpg`],
    site: "@metabase",
    creator: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/lp/business-intelligence-demo`,
    languages: {
      fa: `${baseUrl}/lp/business-intelligence-demo`,
      en: `${baseUrl}/lp/business-intelligence-demo`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "نرم‌افزار تجاری",
};

const faqItems: AccordionItem[] = [
  {
    question: "ابزار هوش تجاری چیست؟",
    answer: (
      <div>
        <p>
          ابزارهای هوش تجاری (BI tools) برنامه‌های نرم‌افزاری هستند که برای
          تبدیل داده‌های خام شما از پایگاه‌های داده، انبارهای داده و
          صفحه‌گسترده‌ها به بینش‌های قابل اجرا طراحی شده‌اند. آنها این کار را با
          موارد زیر انجام می‌دهند:
        </p>
        <p>
          - تجزیه و تحلیل و خلاصه‌سازی داده‌ها - ابزارهای BI می‌توانند الگوها،
          روندها و روابط را در داده‌های شما شناسایی کنند.
        </p>
        <p>
          - ایجاد تجسم‌ها - آنها می‌توانند این اطلاعات را در قالب‌های آسان‌فهم
          مانند نمودارها، گراف‌ها و داشبوردها ارائه دهند.
        </p>
        <p>
          - ارائه هشدارها و اعلان‌ها - ابزارهای BI می‌توانند هشدارهایی برای
          اطلاع از تغییرات مهم یا روندهای در حال ظهور در داده‌های شما تنظیم
          کنند.
        </p>
        <p>
          - تسهیل پیش‌بینی - این ابزارها می‌توانند به شما در پیش‌بینی روندهای
          آینده بر اساس داده‌های تاریخی کمک کنند.
        </p>
        <p>
          به طور کلی، ابزارهای BI با ارائه تصویری واضح و جامع از عملکرد کسب و
          کار شما، به شما امکان تصمیم‌گیری مبتنی بر داده را می‌دهند.
        </p>
      </div>
    ),
  },
  {
    question: "به من بگویید - بهترین ابزار هوش تجاری کدام است؟",
    answer: (
      <div>
        <p>
          پاسخ درست یا غلطی وجود ندارد. به طور کلی به مورد استفاده شما، میزان
          تمایل شما به اینکه افراد بتوانند از داده یاد بگیرند و گزارش‌های خود را
          بدون وابستگی به تیم داده شما اجرا کنند؛ پشته داده ترجیحی شما، سرعت
          راه‌اندازی مورد نیاز، بودجه شما و موارد دیگر بستگی دارد.
        </p>
        <p>
          دوباره می‌گوییم، پاسخ «درستی» وجود ندارد، اما فقط می‌گوییم - Metabase
          کاربرپسند است تا همه در تیم شما بتوانند بینش‌های زنده از داده دریافت
          کنند. با تمام مجموعه داده‌ها و ابزارهای داده ترجیحی شما (از منابع
          داده، آماده‌سازی داده و ابزارهای لایه‌بندی معنایی) به خوبی کار می‌کند.
          در 5 دقیقه راه‌اندازی می‌شود. و قیمت‌گذاری برای همه بودجه‌ها مناسب است
          (و می‌توانید آن را رایگان امتحان کنید).
        </p>
        <p>
          تیم‌هایی که در گذشته از Tableau، Power BI مایکروسافت، Looker گوگل،
          Domo، Sisense و سایر پلتفرم‌های هوش تجاری استفاده کرده‌اند، اکنون
          Metabase را انتخاب می‌کنند زیرا به کاربران کسب و کار آنها امکان تجزیه
          و تحلیل خودخدمات را می‌دهد. تجزیه و تحلیل داده‌های کاربرپسند با
          drag-and-drop به افراد امکان اجرای گزارش‌های ad hoc به تنهایی و دریافت
          بینش‌های قابل اجرا بدون نیاز به SQL را می‌دهد.
        </p>
      </div>
    ),
  },
  {
    question: "آیا کل تیم من باید SQL بدانند تا از Metabase استفاده کنند؟",
    answer: (
      <div>
        <p>
          Metabase به افراد امکان می‌دهد سوالات را با یا بدون نیاز به دانستن SQL
          بپرسند. Query Builder بصری به افراد غیرفنی یا داده‌ساز اجازه می‌دهد
          تجزیه و تحلیل‌ها را با کلیک‌ها انجام دهند - بدون نیاز به SQL. وعده‌ای
          که بسیاری از ابزارهای تجزیه و تحلیل می‌دهند، اما همیشه تحقق نمی‌یابد.
          تحلیل‌گران و افراد داده که ترجیح می‌دهند SQL بنویسند می‌توانند در
          ویرایشگر SQL از آن استفاده کنند.
        </p>
      </div>
    ),
  },
  {
    question: "چه کسانی از Metabase استفاده می‌کنند؟",
    answer: (
      <div>
        <p>
          Metabase توسط بیش از 80,000 شرکت برای تجزیه و تحلیل داده‌های خود مورد
          اعتماد است، از استارتاپ‌هایی که به اولین ابزار هوش تجاری خود نیاز
          دارند تا شرکت‌های بزرگ.
        </p>
        <p>
          Metabase متن‌باز انتخاب اصلی برای بنیان‌گذاران و توسعه‌دهندگان انفرادی
          است تا تیم‌هایشان بتوانند به تنهایی از داده پاسخ دریافت کنند تا دیگر
          ماهی یک بار همان گزارش‌ها را اجرا نکنند. Metabase Pro و Enterprise
          عموماً توسط CTOها، CPOها، رؤسای داده انتخاب می‌شود که با هر پلتفرم BI
          دیگری در بازار کار کرده‌اند و به راهی برای واقعاً ممکن ساختن تجزیه و
          تحلیل خودخدمات نیاز دارند.
        </p>
        <p>
          باید حرف ما را بپذیرید، اما Metabase حتی توسط چندین رقیب ما نیز
          استفاده می‌شود (که از ما خواسته‌اند لوگوی آنها را نشان ندهیم، البته).
          آیا می‌توانستیم این را جعل کنیم؟
        </p>
      </div>
    ),
  },
  {
    question:
      "آیا می‌توانم از Metabase برای تجزیه و تحلیل داده با Excel یا Google Sheets استفاده کنم؟",
    answer: (
      <div>
        <p>
          بله، می‌توانید از Metabase برای تجزیه و تحلیل داده با Excel یا Google
          Sheets استفاده کنید. روش‌های زیر:
        </p>
        <p>
          - آپلود داده CSV به Metabase - ترکیب داده‌های صفحه‌گسترده با مجموعه
          داده‌ها در جداول و انبارهای داده متصل. این داده‌های بزرگ با داده‌های
          کوچک است.
        </p>
        <p>
          - صادرات داده - از Metabase برای پرس‌وجوی داده‌های خود استفاده کنید و
          سپس نتایج را مستقیماً به فرمت Excel یا CSV صادر کنید.
        </p>
        <p>
          - یکپارچه‌سازی Google Sheets - از ابزارهای شخص ثالث مانند یکپارچه‌سازی
          Metabase برای Google Sheets استفاده کنید تا نتایج پرس‌وجو را مستقیماً
          در صفحه‌گسترده‌های خود همگام‌سازی کنید.
        </p>
        <p>
          - دسترسی API - از API Metabase برای خودکارسازی استخراج داده به Excel
          یا Google Sheets برای به‌روزرسانی‌های پویا استفاده کنید.
        </p>
        <p>
          - گزارش‌های زمان‌بندی شده - گزارش‌های ایمیل زمان‌بندی شده از Metabase
          تنظیم کنید که نتایج پرس‌وجو را به صندوق ورودی شما ارسال می‌کند، که
          می‌تواند به راحتی به Excel یا Google Sheets وارد شود.
        </p>
        <p>
          قابلیت‌های Metabase در آپلود داده، صادرات داده، استفاده از
          یکپارچه‌سازی‌های شخص ثالث و ارائه دسترسی API آن را برای ترکیب تجزیه و
          تحلیل داده قدرتمند با ابزارهای صفحه‌گسترده آشنا انعطاف‌پذیر می‌کند.
        </p>
      </div>
    ),
  },
  {
    question:
      "ابزارهای پیشرو هوش تجاری چه کسانی هستند و Metabase چگونه مقایسه می‌شود؟",
    answer: (
      <div>
        <p>
          بسیاری از شرکت‌های بزرگ از پلتفرم‌های BI مانند Microsoft PowerBI،
          Salesforce Tableau یا Google Looker استفاده می‌کنند. این پلتفرم‌های BI
          می‌توانند برای سازمان‌های شما مناسب باشند اگر مدل‌سازی داده پیچیده و
          لایه‌بندی معنایی انجام می‌دهید و یک تیم اختصاصی - و بودجه با اندازه
          قابل توجه - برای پشتیبانی از آن دارید.
        </p>
        <p>
          از طرف دیگر، Metabase پلتفرم تجزیه و تحلیل متن‌باز پیشرو است که برای
          همه کاربران کسب و کار - نه فقط تحلیل‌گران داده اختصاصی - طراحی شده
          است. یکپارچه‌سازی داده ساده است و می‌تواند فقط با رشته اتصال پایگاه
          داده در عرض 5 دقیقه انجام شود.
        </p>
        <p>
          این Metabase را به انتخاب پیش‌فرض برای بنیان‌گذاران استارتاپ SaaS و
          CTOها تبدیل می‌کند که Metabase را در روز اول نصب می‌کنند تا داده را
          برای همه در شرکت قابل استفاده کنند تا از داده کسب و کار برای
          تصمیم‌گیری استفاده کنند.
        </p>
      </div>
    ),
  },
];

export default function BusinessIntelligenceDemoPage() {
  const pageUrl = `${baseUrl}/lp/business-intelligence-demo`;

  // WebPage structured data
  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "هوش تجاری Metabase | ابزار BI که همه می‌توانند استفاده کنند",
    description:
      "Metabase ابزار BI است که تجزیه و تحلیل خودخدمات را واقعاً ممکن می‌سازد. ابزارهای ساده برای اجرای گزارش‌های ad hoc، پرسیدن سوالات و ساخت داشبورد برای تصمیم‌گیری مبتنی بر داده.",
    url: pageUrl,
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "WebSite",
      name: "Metabase",
      url: baseUrl,
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Metabase Business Intelligence",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "80000",
      },
    },
    breadcrumb: {
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
          name: "هوش تجاری",
          item: pageUrl,
        },
      ],
    },
  };

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: `${baseUrl}/`,
    sameAs: [
      "https://github.com/metabase",
      "https://www.linkedin.com/company/metabase/",
      "https://x.com/metabase",
      "https://www.youtube.com/@metabasedata",
    ],
    logo: `${baseUrl}/images/logo.svg`,
    name: "Metabase",
    description:
      "Metabase یک ابزار هوش تجاری و تجزیه و تحلیل تعبیه شده متن‌باز است. در 5 دقیقه به پشته داده خود متصل شوید تا پرس‌وجوها، تجسم‌ها و داشبوردها را برای همه آسان کنید - بدون نیاز به SQL",
    email: "hello@metabase.com",
    foundingDate: "2015-02-01T00:00:00.000Z",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9740 Campo Rd",
      addressLocality: "Spring Valley",
      addressCountry: "USA",
      addressRegion: "CA",
      postalCode: "91977",
    },
    knowsAbout: [
      { "@type": "Thing", name: "هوش تجاری" },
      { "@type": "Thing", name: "تجزیه و تحلیل تعبیه شده" },
      { "@type": "Thing", name: "تجزیه و تحلیل خودخدمات" },
      { "@type": "Thing", name: "هوش تجاری متن‌باز" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <div>
        <BusinessIntelligenceDemoHero />
        <BusinessIntelligenceThreeCards />
        <FeatureSection
          title="تجسم داده با نمودارهای کلیک-برای-ایجاد"
          description="از جداول به تجسم‌ها در چند کلیک بروید. عملکرد صفحه‌گسترده آشنا با نتایج بسیار بیشتر. روی هدرهای ستون کلیک کنید تا فیلتر کنید و تجسم‌ها ایجاد کنید، یا از منو انتخاب کنید تا تجمیع‌ها را خودکار کنید."
          items={[
            {
              text: "روندهای زنده را کشف کنید، KPIها را ردیابی کنید و تصمیم‌گیری مبتنی بر داده انجام دهید.",
              bold: true,
            },
            {
              text: "با نمودارها و تجسم‌های داده آسان برای تجزیه که می‌توانید با تیم یا مشتریان خود به اشتراک بگذارید.",
              bold: false,
            },
            {
              text: "بیش از 15 نوع تجسم داده.",
              bold: true,
            },
            {
              text: "چه به یک نمودار میله‌ای ساده، جداول محوری، نمودار دایره‌ای، نقشه‌های تعاملی - و همه چیز بین نیاز داشته باشید. Metabase به طور خودکار یک تجسم انتخاب می‌کند که با داده‌های شما مناسب است، یا خودتان انتخاب کنید.",
              bold: false,
            },
            {
              text: "تسهیل پیش‌بینی با نرم‌افزار هوش تجاری",
              bold: true,
            },
            {
              text: "روندهای آینده را بر اساس داده‌های تاریخی پیش‌بینی کنید.",
              bold: false,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-visualizations.mp4"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-visualizations.gif"
          reverse={true}
        />
        <FeatureSection
          title="ایجاد و به اشتراک‌گذاری داشبوردهای تعاملی که به همه امکان کشف داده را می‌دهد"
          description="اولین داشبورد خود را در چند دقیقه با طیف گسترده‌ای از تجسم‌های داده که داستانی را روایت می‌کنند بسازید. منابع داده خود را با اتصال‌دهنده‌های رسمی، شریک و جامعه متصل کنید."
          items={[
            {
              text: "متریک‌های کلیدی، KPIها و تجزیه و تحلیل داده را به اشتراک بگذارید.",
              bold: true,
            },
            {
              text: "با مجموعه داده‌های بصری، آسان برای خواندن و درک برای تیم (یا مشتریان) شما تا بینش‌ها را کشف کنند و بیشتر بیاموزند.",
              bold: false,
            },
            {
              text: "داشبوردهای خود را سفارشی کنید.",
              bold: true,
            },
            {
              text: "برای داستان‌سرایی داده واضح‌تر و تصمیم‌گیری و کشف داده مستقیم، با فیلترها، تب‌ها و کارت‌های متن و لینک برای زمینه عمیق‌تر.",
              bold: false,
            },
            {
              text: "عملکرد drill-through تعاملی.",
              bold: true,
            },
            {
              text: "منو برای زوم و شکستن داده برای دریافت زمینه و بینش عمیق‌تر بدون نیاز به پرسیدن از تیم داده. کلیک کنید تا کاوش کنید، کشف کنید و نمودارها را در چند دقیقه ایجاد کنید.",
              bold: false,
            },
            {
              text: "اشتراک‌ها و هشدارها را تنظیم کنید تا داشبوردها را ارسال کنید",
              bold: true,
            },
            {
              text: "به هم‌تیمی‌ها، مشتریان و ذینفعان خارجی شما.",
              bold: false,
            },
          ]}
          videoSrc="/images/landing-pages/drill-through.mp4"
          videoPoster="/images/landing-pages/drill-through.gif"
          reverse={false}
        />
        <FeatureSection
          title="پرس‌وجوی داده با یا بدون SQL برای تجزیه و تحلیل داده خودخدمات واقعی"
          description="متخصصان صفحه‌گسترده را به طرفداران ابزار BI با تجزیه و تحلیل داده‌های آسان برای استفاده که احساس خانه می‌کند (اما با نتایج جالب‌تر) تبدیل کنید."
          items={[
            {
              text: "Query Builder بصری با عملکرد drag-and-drop.",
              bold: true,
            },
            {
              text: "که به هم‌تیمی‌های کمتر داده‌ساز امکان می‌دهد سوالات خود را بدون یک ذره SQL (یا تیم داده برای کمک به آنها) کنار هم بگذارند. آنها حتی Excel را از دست نخواهند داد.",
              bold: false,
            },
            {
              text: "بلوک‌های ساختمانی را برای سوالات جدید ارائه دهید.",
              bold: true,
            },
            {
              text: "مدل‌ها داده‌های غنی شده با متا با چیزهای پیچیده، مانند joins، از قبل انجام شده هستند.",
              bold: false,
            },
            {
              text: "محتوای تازه و تأیید شده را ساختار و برجسته کنید.",
              bold: true,
            },
            {
              text: "محتوای مرتبط را در مجموعه‌ها سازماندهی کنید و محتوای تازه و تأیید شده را برای استفاده تأیید کنید. افراد را به سمت بهینه‌سازی تصمیم‌گیری کسب و کار و توانمندسازی هدایت کنید.",
              bold: false,
            },
            {
              text: "ویرایشگر SQL برای تجزیه و تحلیل پیشرفته.",
              bold: true,
            },
            {
              text: "که تیم داده شما واقعاً از استفاده از آن لذت می‌برد، با Snippets قابل استفاده مجدد و مرجع داده مفید در جایی که می‌خواهید.",
              bold: false,
            },
          ]}
          videoSrc="/images/features/models.mp4"
          videoPoster="/images/features/models.png"
          reverse={true}
        />
        <FeatureSection
          title="داشبوردها و تجزیه و تحلیل مشتری‌محور و تعبیه شده در روزها، نه sprintها"
          description="بهترین ابزارهای هوش تجاری تعاملی را در برنامه‌های خود تعبیه کنید بدون اینکه کار سخت ساخت آن را خودتان انجام دهید."
          items={[
            {
              text: "به مشتریان خود به اندازه انتخاب شما عملکرد تجزیه و تحلیل داده بدهید.",
              bold: true,
            },
            {
              text: "از داشبوردهای تعبیه شده زنده با نمودارهای تعاملی، تا قدرت پرس‌وجوی کامل.",
              bold: false,
            },
            {
              text: "در کسری از زمان به proof of concept برسید.",
              bold: true,
            },
            {
              text: "در مقایسه با ساخت آن برای خودتان، و همچنین بیشتر جایگزین‌های تجزیه و تحلیل تعبیه شده. می‌توانید تجزیه و تحلیل مشتری‌محور را در برنامه خود در عرض یک ماه داشته باشید.",
              bold: false,
            },
            {
              text: "آن را white-label کنید تا شبیه برند شما به نظر برسد.",
              bold: true,
            },
            {
              text: "فونت‌ها، رنگ‌ها، لوگوها را سفارشی کنید و هر اثری از Metabase را پنهان کنید. هیچ کس نیازی به دانستن اینکه شما تجزیه و تحلیل کسب و کار فروشگاهی را به فروشگاه آورده‌اید ندارد.",
              bold: false,
            },
            {
              text: "قیمت‌گذاری مقیاس‌پذیر و رقابتی.",
              bold: true,
            },
            {
              text: "چه بخواهید بینش‌ها را برای مشتریان خود خودکار کنید و به آنها امکان اجرای گزارش‌های سفارشی را بدهید، یا فقط نیاز به تعبیه چند داشبورد دارید، قیمت‌گذاری تعبیه به گونه‌ای ساختار یافته است که فقط برای آنچه نیاز دارید پرداخت می‌کنید.",
              bold: false,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-white-labeling.mp4"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-white-labeling.gif"
          reverse={false}
        />
        <FeatureSection
          title="سریع برای راه‌اندازی و یکپارچه با ابزارهای داده ترجیحی شما"
          description="در 5 دقیقه بدون کمک مهندسی راه‌اندازی کنید. بدون کد یا مهارت‌های تخصصی مورد نیاز!"
          items={[
            {
              text: "از منبع داده به اشتراک‌گذاری اولین داشبورد خود سریع‌تر از ثبت‌نام برای آزمایش با سایر ابزارهای BI بروید.",
              bold: true,
            },
            {
              text: "به بیش از 20 منبع داده متصل می‌شود",
              bold: true,
            },
            {
              text: "از طریق درایورهای رسمی، شریک و جامعه. تمام مجموعه داده‌های خود را در یک ابزار تجزیه و تحلیل گرد هم آورید.",
              bold: false,
            },
            {
              text: "با ابزارهای داده ترجیحی خود کار کنید",
              bold: true,
            },
            {
              text: "(از تبدیل، آماده‌سازی داده تا مدل‌سازی داده بالادست) برای مدیریت داده و اکوسیستم BI خود با یک لایه پرس‌وجو و تجسم داده قدرتمند برای تبدیل داده خام به بینش.",
              bold: false,
            },
            {
              text: "آن را on-premises میزبانی کنید، یا وظایف میزبانی را به ما بسپارید.",
              bold: true,
            },
            {
              text: "استقرار single tenant یا air-gapped فوق‌العاده امن نیز در دسترس است.",
              bold: false,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.gif"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.gif"
          reverse={true}
        />
        <FeatureSection
          title="مدیریت داده پیشرفته برای تجزیه و تحلیل خودخدمات خصوصی و امن"
          description="با قدرت دادن به همه برای تجزیه و تحلیل خودخدمات، مسئولیت اطمینان از خصوصی و امن ماندن داده‌های شما می‌آید. همه را در مسیر خود نگه دارید."
          items={[
            {
              text: "Single sign-on، JWT و LDAP پیشرفته.",
              bold: true,
            },
            {
              text: "دسترسی امن، گروه‌بندی مجوز و نقشه‌برداری کاربر ساده شده است.",
              bold: false,
            },
            {
              text: "مجوزهای سطح ردیف و ستون.",
              bold: true,
            },
            {
              text: "واقعاً دقیق شوید با آنچه مردم می‌بینند. حتی یک سلول بدون حساب نیست.",
              bold: false,
            },
            {
              text: "تجزیه و تحلیل استفاده دقیق.",
              bold: true,
            },
            {
              text: "ببینید چه کسی چه کاری انجام می‌دهد، چه زمانی. در مورد انطباق به‌روز بمانید و استفاده و عملکرد داده را بهینه کنید.",
              bold: false,
            },
          ]}
          videoSrc="/images/product/pro/row-level-permissions.mp4"
          videoPoster="/images/product/pro/row-level-permissions.gif"
          reverse={false}
        />
        <FAQSection items={faqItems} title="سوالات پرتکرار" description="" />
      </div>
    </>
  );
}
