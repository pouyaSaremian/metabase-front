import type { Metadata } from "next";
import EmbeddedAnalyticsDemoHero from "@/components/embedded-analytics/EmbeddedAnalyticsDemoHero";
import EmbeddedAnalyticsThreeCards from "@/components/embedded-analytics/EmbeddedAnalyticsThreeCards";
import FeatureSection from "@/components/business-intelligence/FeatureSection";
// import FeatureSectionWithImage from "@/components/embedded-analytics/FeatureSectionWithImage";
import ComparisonTableSection from "@/components/embedded-analytics/ComparisonTableSection";
import ReadyToGetStartedSection from "@/components/embedded-analytics/ReadyToGetStartedSection";
import FAQSection from "@/components/FAQSection";
import { AccordionItem } from "@/components/common/Accordion";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";

export const metadata: Metadata = {
  title: "تجزیه و تحلیل تعبیه شده Metabase | در روزها، نه sprintها",
  description:
    "تجزیه و تحلیل مشتری‌محور قابل سفارشی‌سازی، انعطاف‌پذیر و مقیاس‌پذیر فقط یک snippet فاصله دارد. به مشتریان خود اجازه دهید داده را خودخدمات کنند.",
  keywords: [
    "تجزیه و تحلیل تعبیه شده",
    "Embedded Analytics",
    "تجزیه و تحلیل مشتری‌محور",
    "White-label analytics",
    "BI تعبیه شده",
    "Metabase",
    "تجزیه و تحلیل در محصول",
  ],
  authors: [{ name: "Metabase Persian" }],
  creator: "Metabase",
  publisher: "Metabase",
  openGraph: {
    title: "تجزیه و تحلیل تعبیه شده Metabase | در روزها، نه sprintها",
    description:
      "تجزیه و تحلیل مشتری‌محور قابل سفارشی‌سازی، انعطاف‌پذیر و مقیاس‌پذیر فقط یک snippet فاصله دارد.",
    type: "website",
    locale: "fa_IR",
    url: `${baseUrl}/lp/embedded-analytics-demo`,
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    images: [
      {
        url: `${baseUrl}/images/opengraph/_use-cases/embedded-analytics.jpg`,
        width: 1200,
        height: 630,
        alt: "Metabase Embedded Analytics - تجزیه و تحلیل تعبیه شده",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تجزیه و تحلیل تعبیه شده Metabase",
    description:
      "تجزیه و تحلیل مشتری‌محور قابل سفارشی‌سازی، انعطاف‌پذیر و مقیاس‌پذیر فقط یک snippet فاصله دارد.",
    images: [`${baseUrl}/images/opengraph/_use-cases/embedded-analytics.jpg`],
    site: "@metabase",
    creator: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/lp/embedded-analytics-demo`,
    languages: {
      fa: `${baseUrl}/lp/embedded-analytics-demo`,
      en: `${baseUrl}/lp/embedded-analytics-demo`,
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
    question: "تجزیه و تحلیل تعبیه شده چیست؟",
    answer: (
      <div>
        <p>
          پلتفرم‌های تجزیه و تحلیل تعبیه شده به شما امکان می‌دهند بهترین
          ابزارهای هوش تجاری (BI) و عملکرد را در برنامه نرم‌افزاری، محصول یا
          وب‌سایت خود یکپارچه کنید. آنها برای پرس‌وجو و تجسم داده به بینش‌های
          قابل اجرا طراحی شده‌اند که برای مشتریان و کاربران کسب و کار شما قابل
          دسترسی است. آنها این کار را با:
        </p>
        <p>
          - تجزیه و تحلیل و خلاصه‌سازی داده - ابزارهای BI تعبیه شده می‌توانند
          الگوها، روندها و روابط را در داده‌های شما شناسایی کنند.
        </p>
        <p>
          - ایجاد تجسم‌ها - آنها می‌توانند این اطلاعات را در فرمت‌های آسان برای
          درک مانند نمودارها، گراف‌ها و داشبوردها ارائه دهند.
        </p>
        <p>
          - تسهیل پیش‌بینی - این ابزارها می‌توانند به پیش‌بینی روندهای آینده بر
          اساس داده‌های تاریخی کمک کنند.
        </p>
        <p>
          به طور کلی، BI تعبیه شده به مشتریان شما قدرت تصمیم‌گیری مبتنی بر داده
          می‌دهد.
        </p>
      </div>
    ),
  },
  {
    question: "مزایای ابزارهای تجزیه و تحلیل تعبیه شده چیست؟",
    answer: (
      <div>
        <p>
          راه‌حل‌های تجزیه و تحلیل تعبیه شده به شما امکان می‌دهند داده‌های
          مشتریان خود - و مجموعه‌های داده‌ای که برای آنها مرتبط است - را در
          مقابل آنها قرار دهید، با هر مقدار عملکرد تجزیه و تحلیلی که می‌خواهید.
          بدون سرمایه‌گذاری ماه‌ها و منابع بی‌شمار برای ساخت راه‌حل تجزیه و
          تحلیل خود. بسیاری از استارتاپ‌ها تا شرکت‌های سطح سازمانی از تجزیه و
          تحلیل تعبیه شده برای رسیدن به اثبات مفهوم در فقط چند هفته استفاده
          می‌کنند، و با افرادی کار می‌کنند که راه‌حل‌های تجزیه و تحلیل را برای
          زندگی می‌سازند تا بتوانند روی اهداف کسب و کار خود تمرکز کنند.
        </p>
      </div>
    ),
  },
  {
    question: "چگونه راه‌حل تجزیه و تحلیل تعبیه شده مناسب را انتخاب کنیم؟",
    answer: (
      <div>
        <p>
          وقتی نوبت به انتخاب یک ابزار تجزیه و تحلیل تعبیه شده می‌رسد، بستگی به
          این دارد که چقدر می‌خواهید قابلیت‌های تجزیه و تحلیل را به مشتریان خود
          ارائه دهید، چقدر سریع باید شروع کنید، و چه بودجه‌ای دارید. ویژگی‌های
          کلیدی یک ابزار تجزیه و تحلیل تعبیه شده شامل:
        </p>
        <p>- تعبیه نمودارها و تجسم‌ها به عنوان iframe با یک snippet.</p>
        <p>
          - تعبیه داشبوردها با قابلیت‌های فیلترسازی و تجزیه و تحلیل
          click-through پیشرفته‌تر.
        </p>
        <p>
          - رابط پرس‌وجو برای اجازه دادن به مشتریان برای خودخدمات تجزیه و تحلیل،
          اجرای گزارش‌های خود، فیلتر و خلاصه‌سازی داده.
        </p>
        <p>
          - تجزیه و تحلیل white-label برای اینکه به نظر برسد و احساس شود مانند
          برند شما و با برنامه شما مطابقت داشته باشد در حالی که تجربه کاربری
          ممتاز ارائه می‌دهد.
        </p>
        <p>
          با Metabase، بهترین BI تعبیه شده را با قیمت‌گذاری مقرون به صرفه و
          دسترسی بدون محدودیت به کمک فنی از مهندسان موفقیت مشتری دریافت می‌کنید.
        </p>
      </div>
    ),
  },
  {
    question: "صادقانه بگویید - بهترین ابزار تجزیه و تحلیل تعبیه شده کدام است؟",
    answer: (
      <div>
        <p>
          پاسخ درست یا غلطی در اینجا وجود ندارد. به طور کلی بستگی به مورد
          استفاده شما، چقدر می‌خواهید مشتریان و کاربران نهایی شما بتوانند از
          داده یاد بگیرند و گزارش‌های خود را بدون وابستگی به تیم داده شما اجرا
          کنند؛ پشته داده ترجیحی شما، چقدر سریع باید راه‌اندازی کنید، بودجه شما
          و بیشتر دارد.
        </p>
        <p>
          دوباره، پاسخ &quot;درست&quot; وجود ندارد، اما فقط می‌گویم - Metabase
          کاربرپسند است تا به همه در تیم شما امکان دریافت بینش‌های بلادرنگ از
          داده را بدهد. با تمام مجموعه‌های داده و ابزارهای داده ترجیحی شما (از
          منابع داده، آماده‌سازی داده و ابزارهای لایه‌بندی معنایی) به خوبی کار
          می‌کند. در 5 دقیقه راه‌اندازی می‌شود. و قیمت‌گذاری برای همه بودجه‌ها
          مناسب است (و می‌توانید آن را رایگان امتحان کنید).
        </p>
        <p>
          تیم‌هایی که از Tableau، Power BI مایکروسافت، Looker گوگل، Domo،
          Sisense، Sigma و سایر پلتفرم‌های BI تعبیه شده استفاده کرده‌اند اکنون
          Metabase را انتخاب می‌کنند زیرا به مشتریان و کاربران کسب و کار آنها
          امکان خودخدمات تجزیه و تحلیل را می‌دهد. تجزیه و تحلیل داده
          drag-and-drop کاربرپسند به افراد امکان اجرای گزارش‌های ad hoc خود و
          دریافت بینش‌های قابل اجرا را بدون نیاز به SQL یا تحلیل‌گر داده می‌دهد.
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
          بپرسند. سازنده‌ی کوئریی بصری به افراد غیرفنی یا داده‌محور امکان می‌دهد
          تجزیه و تحلیل‌ها را با کلیک‌ها جمع‌آوری کنند - بدون نیاز به SQL.
          وعده‌ای که توسط بسیاری از ابزارهای تجزیه و تحلیل داده می‌شود، اما
          همیشه تحقق نمی‌یابد. تحلیل‌گران و افراد داده که ترجیح می‌دهند SQL
          بنویسند می‌توانند در ویرایشگر SQL از آن استفاده کنند.
        </p>
      </div>
    ),
  },
  {
    question:
      "چه کسانی از Metabase به عنوان راه‌حل تجزیه و تحلیل تعبیه شده استفاده می‌کنند؟",
    answer: (
      <div>
        <p>
          Metabase توسط بیش از 80,000 شرکت برای تجزیه و تحلیل داده‌های خود مورد
          اعتماد است، از استارتاپ‌هایی که به اولین ابزار هوش تجاری خود برای
          تجزیه و تحلیل داخلی یا تعبیه شده نیاز دارند، تا سازمان‌هایی با
          مجموعه‌های داده بزرگ، موارد استفاده پیچیده و کاربران نهایی قابل توجه.
        </p>
        <p>
          Metabase متن‌باز انتخاب پیش‌فرض برای بنیان‌گذاران و توسعه‌دهندگان solo
          است تا به تیم‌های خود امکان دریافت پاسخ از داده به تنهایی بدهند تا
          گزارش‌های مشابه را ماهی یک بار اجرا نکنند. Metabase Pro و Enterprise
          به طور کلی توسط CTOها، CPOها، رؤسای داده انتخاب می‌شود که با هر پلتفرم
          BI دیگر در بازار بوده‌اند و به راهی برای واقعاً انجام دادن تجزیه و
          تحلیل خودخدمات نیاز دارند.
        </p>
        <p>
          باید حرف ما را بپذیرید، اما Metabase حتی توسط چندین رقیب ما استفاده
          می‌شود (که از ما خواسته‌اند لوگوهای آنها را نشان ندهیم، البته). آیا
          می‌توانستیم این را بسازیم؟
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
          Sheets استفاده کنید. اینجا چگونگی:
        </p>
        <p>
          - آپلود داده CSV به Metabase - ترکیب داده صفحه‌گسترده با مجموعه‌های
          داده در جداول و انبارهای داده متصل. این big data با little data ملاقات
          می‌کند.
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
          تنظیم کنید، ارسال نتایج پرس‌وجو به صندوق ورودی شما، که می‌تواند به
          راحتی به Excel یا Google Sheets وارد شود.
        </p>
        <p>
          قابلیت‌های Metabase در آپلود داده، صادرات داده، استفاده از
          یکپارچه‌سازی‌های شخص ثالث و ارائه دسترسی API آن را برای ترکیب تجزیه و
          تحلیل داده قدرتمند با ابزارهای صفحه‌گسترده آشنا انعطاف‌پذیر می‌کند.
        </p>
      </div>
    ),
  },
];

export default function EmbeddedAnalyticsDemoPage() {
  const pageUrl = `${baseUrl}/lp/embedded-analytics-demo`;

  // WebPage structured data
  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "تجزیه و تحلیل تعبیه شده Metabase | در روزها، نه sprintها",
    description:
      "تجزیه و تحلیل مشتری‌محور قابل سفارشی‌سازی، انعطاف‌پذیر و مقیاس‌پذیر فقط یک snippet فاصله دارد. به مشتریان خود اجازه دهید داده را خودخدمات کنند.",
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
      name: "Metabase Embedded Analytics",
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
          name: "تجزیه و تحلیل تعبیه شده",
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
        <EmbeddedAnalyticsDemoHero />
        <EmbeddedAnalyticsThreeCards />
        {/* FeatureSectionWithImage temporarily disabled because the component file
        is missing. Uncomment the import and this block after adding
        "@/components/embedded-analytics/FeatureSectionWithImage". */}
        <FeatureSection
          title="با همه چیزهایی که مشتریان شما برای تصمیم‌گیری مبتنی بر داده نیاز دارند همراه است"
          description="ما زمان صرف کرده‌ایم تا همه چیز را درست کنیم، بنابراین تیم شما مجبور نیست."
          items={[
            {
              text: "بهترین هوش تجاری، مستقیماً در محصول شما. تجسم‌های تعاملی، رابط‌های پرس‌وجو، مدل‌ها—یک پلتفرم هوش تجاری مدرن آماده برای یکپارچه‌سازی در محصول شما.",
              bold: true,
            },
            {
              text: "ایجاد داشبوردهای جدید از بازخورد هر مشتری؟ با اجازه دادن به آنها برای خودخدمات تجزیه و تحلیل و گزارش‌ها با عملکرد آسان برای استفاده برای همه افراد و موارد استفاده جلوتر باشید. بدون نیاز به SQL.",
              bold: true,
            },
            {
              text: "با منابع داده و ابزارهایی که قبلاً با آنها کار می‌کنید کار می‌کند. Metabase به اکثر پایگاه‌های داده production اصلی، و همچنین فناوری‌های جدیدتر متصل می‌شود.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-visualizations.mp4"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-visualizations.gif"
          reverse={true}
        />
        <FeatureSection
          title="تعادل کامل بین plug-and-play و سفارشی‌سازی"
          description="شما جزئیات محصول خود را عرق می‌کنید—ما مطمئن می‌شویم که گزارش‌دهی شما کاملاً مناسب است."
          items={[
            {
              text: "ساخته شده برای مطابقت. رنگ‌ها، برچسب‌ها، فونت‌ها و بیشتر را برای یک تناسب بی‌درز با محصول خود تنظیم کنید.",
              bold: true,
            },
            {
              text: "تجزیه و تحلیل داده خود را white-label کنید. ردپای Metabase را در تجسم‌ها، سازندگان پرس‌وجو و تجربیات در محصول پنهان کنید. آن را واقعاً متعلق به خود کنید.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-white-labeling.mp4"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-white-labeling.gif"
          reverse={false}
        />
        <FeatureSection
          title="پلتفرم تجزیه و تحلیل تعبیه شده امن، multi-tenant برای بینش‌های قابل اجرا"
          description="قابلیت‌های تجزیه و تحلیل پیشرفته را ارائه دهید، تجربه مشتری عالی را ارائه دهید و تصمیم‌گیری بهتر را فعال کنید در حالی که اطمینان حاصل می‌کنید داده خصوصی و امن باقی بماند."
          items={[
            {
              text: "احراز هویت ورود تک‌مرحله‌ای. دسترسی امن، گروه‌بندی مجوزها و نگاشت کاربر ساده شده است.",
              bold: true,
            },
            {
              text: "مجوزهای سطح ردیف و ستون. واقعاً دقیق باشید با آنچه افراد می‌بینند و انجام می‌دهند. حتی یک سلول هم نادیده گرفته نمی‌شود.",
              bold: true,
            },
            {
              text: "تجزیه و تحلیل استفاده دقیق. ببینید چه کسی چه کاری انجام می‌دهد، چه زمانی. در مورد انطباق به‌روز بمانید و استفاده و عملکرد داده را بهینه کنید.",
              bold: true,
            },
          ]}
          videoSrc="/images/product/pro/row-level-permissions.mp4"
          videoPoster="/images/product/pro/row-level-permissions.gif"
          reverse={true}
        />
        <ComparisonTableSection />
        <FAQSection items={faqItems} title="سوالات پرتکرار" description="" />
        <ReadyToGetStartedSection />
      </div>
    </>
  );
}
