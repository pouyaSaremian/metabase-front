import type { Metadata } from "next";
import BIForStartupsHero from "@/components/bi-for-startups/BIForStartupsHero";
import BIForStartupsThreeCards from "@/components/bi-for-startups/BIForStartupsThreeCards";
import CustomerLogosSection from "@/components/business-intelligence/CustomerLogosSection";
import FeatureSection from "@/components/business-intelligence/FeatureSection";
import TestimonialSection from "@/components/business-intelligence/TestimonialSection";
import ReviewsCarouselSection from "@/components/business-intelligence/ReviewsCarouselSection";
import TryMetabaseFooter from "@/components/bi-for-startups/TryMetabaseFooter";
import FAQSection from "@/components/FAQSection";
import { AccordionItem } from "@/components/common/Accordion";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";

export const metadata: Metadata = {
  title: "هوش تجاری برای استارتاپ‌ها | Metabase",
  description:
    "Metabase ابزار هوش تجاری بصری با بودجه مناسب برای استارتاپ است. پلتفرم BI آسان برای استفاده با ابزارهایی که به همه امکان کار با داده را می‌دهد.",
  keywords: [
    "هوش تجاری برای استارتاپ‌ها",
    "Business Intelligence for startups",
    "BI tool",
    "ابزار BI استارتاپ",
    "تجزیه و تحلیل داده",
    "Metabase",
    "هوش تجاری مقرون به صرفه",
  ],
  authors: [{ name: "Metabase Persian" }],
  creator: "Metabase",
  publisher: "Metabase",
  openGraph: {
    title: "هوش تجاری برای استارتاپ‌ها | Metabase",
    description:
      "Metabase ابزار هوش تجاری بصری با بودجه مناسب برای استارتاپ است.",
    type: "website",
    locale: "fa_IR",
    url: `${baseUrl}/lp/bi-for-startups-demo`,
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    images: [
      {
        url: `${baseUrl}/images/features/query-builder-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Metabase Business Intelligence for Startups",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "هوش تجاری برای استارتاپ‌ها | Metabase",
    description:
      "Metabase ابزار هوش تجاری بصری با بودجه مناسب برای استارتاپ است.",
    images: [`${baseUrl}/images/features/query-builder-og.jpg`],
    site: "@metabase",
    creator: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/lp/bi-for-startups-demo`,
    languages: {
      fa: `${baseUrl}/lp/bi-for-startups-demo`,
      en: `${baseUrl}/lp/bi-for-startups-demo`,
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
    question: "راه‌حل BI چیست؟",
    answer: (
      <div>
        <p>
          ابزارهای هوش تجاری (BI) برنامه‌های نرم‌افزاری هستند که برای تبدیل
          داده‌های خام شما از پایگاه‌های داده، انبارهای داده و صفحه‌گسترده‌ها به
          بینش‌های قابل اجرا طراحی شده‌اند. آنها این کار را با:
        </p>
        <p>
          - تجزیه و تحلیل و خلاصه‌سازی داده - ابزارهای BI می‌توانند الگوها،
          روندها و روابط را در داده‌های شما شناسایی کنند.
        </p>
        <p>
          - ایجاد تجسم‌ها - آنها می‌توانند این اطلاعات را در فرمت‌های آسان برای
          درک مانند نمودارها، گراف‌ها و داشبوردها ارائه دهند.
        </p>
        <p>
          - ارائه هشدارها و اعلان‌ها - ابزارهای BI می‌توانند هشدارهایی برای
          اطلاع از تغییرات مهم یا روندهای در حال ظهور در داده‌های شما تنظیم
          کنند.
        </p>
        <p>
          - تسهیل پیش‌بینی - این ابزارها می‌توانند به پیش‌بینی روندهای آینده بر
          اساس داده‌های تاریخی کمک کنند.
        </p>
        <p>
          به طور کلی، ابزارهای BI به شما قدرت تصمیم‌گیری مبتنی بر داده را با
          ارائه تصویری واضح و جامع از عملکرد کسب و کار شما می‌دهند.
        </p>
      </div>
    ),
  },
  {
    question:
      "چه چیزی Metabase را به یک راه‌حل هوش تجاری خوب برای استارتاپ‌ها تبدیل می‌کند؟",
    answer: (
      <div>
        <p>
          بنیان‌گذاران، CTOها، رؤسای داده، توسعه‌دهندگان solo و بیشتر عاشق این
          هستند که Metabase چقدر مناسب برای استارتاپ است:
        </p>
        <p>
          - راه‌اندازی فوق‌العاده سریع بدون زمان مهندسی یا تیم داده. می‌توانید
          در عرض پنج دقیقه نصب کنید و شروع به پرس‌وجو کنید. میزبانی ابری
          نگهداری، پشتیبان‌گیری و به‌روزرسانی‌ها را برای شما انجام می‌دهد.
        </p>
        <p>
          - قیمت برای استارتاپ‌ها مناسب است. BI می‌تواند گران شود، اما لازم نیست
          اینطور باشد. Metabase یک ابزار متن‌باز است، با میزبانی و ویژگی‌های
          حاکمیت پیشرفته که با قیمت معقول شروع می‌شود.
        </p>
        <p>
          - به همه ابزارهای کاوش داده به تنهایی می‌دهد. روی یک نمودار کلیک کنید
          تا drill-through روی داده‌های مرتبط انجام دهید، سوالی بپرسید بدون
          دانستن SQL، یا پرس‌وجوهای native بنویسید. Metabase برای افراد در تمام
          سطوح سواد داده مناسب است.
        </p>
        <p>
          زندگی استارتاپی به این معنی است که احتمالاً کلاه‌های زیادی بر سر
          دارید. کلاه Chief Reporting Officer خود را آویزان کنید و بگذارید تیم
          شما تجزیه و تحلیل داده خود را انجام دهد.
        </p>
      </div>
    ),
  },
  {
    question: "صادقانه بگویید - بهترین ابزار هوش تجاری کدام است؟",
    answer: (
      <div>
        <p>
          پاسخ درست یا غلطی در اینجا وجود ندارد. به طور کلی بستگی به مورد
          استفاده شما، چقدر می‌خواهید افراد بتوانند از داده یاد بگیرند و
          گزارش‌های خود را بدون وابستگی به تیم داده شما اجرا کنند؛ پشته داده
          ترجیحی شما، چقدر سریع باید راه‌اندازی کنید، بودجه شما و بیشتر دارد.
        </p>
        <p>
          دوباره، پاسخ &quot;درست&quot; وجود ندارد، اما فقط می‌گویم - Metabase
          کاربرپسند است تا به همه در تیم شما امکان دریافت داشبورد های های
          بلادرنگ از داده را بدهد. با تمام مجموعه‌های داده و ابزارهای داده
          ترجیحی شما (از منابع داده، آماده‌سازی داده و ابزارهای لایه‌بندی
          معنایی) به خوبی کار می‌کند. در 5 دقیقه راه‌اندازی می‌شود. و قیمت‌گذاری
          برای همه بودجه‌ها مناسب است (و می‌توانید آن را رایگان امتحان کنید).
        </p>
        <p>
          تیم‌هایی که در گذشته از Tableau، Power BI مایکروسافت، Looker گوگل،
          Domo، Sisense و سایر پلتفرم‌های هوش تجاری استفاده کرده‌اند اکنون
          Metabase را انتخاب می‌کنند زیرا به کاربران کسب و کار آنها امکان
          خودخدمات تجزیه و تحلیل را می‌دهد. تجزیه و تحلیل داده drag-and-drop
          کاربرپسند به افراد امکان اجرای گزارش‌های ad hoc خود و دریافت بینش‌های
          قابل اجرا را بدون نیاز به SQL می‌دهد.
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
          بپرسند. سازنده پرس‌وجوی بصری به افراد غیرفنی یا داده‌محور امکان می‌دهد
          تجزیه و تحلیل‌ها را با کلیک‌ها جمع‌آوری کنند - بدون نیاز به SQL.
          وعده‌ای که توسط بسیاری از ابزارهای تجزیه و تحلیل داده می‌شود، اما
          همیشه تحقق نمی‌یابد. تحلیل‌گران و افراد داده که ترجیح می‌دهند SQL
          بنویسند می‌توانند در ویرایشگر SQL از آن استفاده کنند.
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
          دارند تا سازمان‌ها.
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
  {
    question:
      "بهترین ابزارهای هوش تجاری برای استارتاپ‌ها چیست و Metabase چگونه مقایسه می‌شود؟",
    answer: (
      <div>
        <p>
          بسیاری از سازمان‌های بزرگ از پلتفرم‌های BI مانند Microsoft PowerBI،
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

export default function BIForStartupsDemoPage() {
  const pageUrl = `${baseUrl}/lp/bi-for-startups-demo`;

  // WebPage structured data
  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "هوش تجاری برای استارتاپ‌ها | Metabase",
    description:
      "Metabase ابزار هوش تجاری بصری با بودجه مناسب برای استارتاپ است. پلتفرم BI آسان برای استفاده با ابزارهایی که به همه امکان کار با داده را می‌دهد.",
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
      name: "Metabase Business Intelligence for Startups",
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
          name: "هوش تجاری برای استارتاپ‌ها",
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
        <BIForStartupsHero />
        <BIForStartupsThreeCards />
        <CustomerLogosSection />
        <FeatureSection
          title="داده استارتاپ خود را با نمودارهای کلیک-برای-ایجاد تجسم کنید"
          description="از جداول به تجسم‌ها در چند کلیک بروید. عملکرد صفحه‌گسترده آشنا با نتایج بسیار بیشتر. روی هدرهای ستون کلیک کنید تا فیلتر کنید و تجسم‌ها ایجاد کنید، یا از منو انتخاب کنید تا تجمیع‌ها را خودکار کنید."
          items={[
            {
              text: "روندهای بلادرنگ را کشف کنید، KPIها را ردیابی کنید و تصمیم‌گیری مبتنی بر داده انجام دهید. چه به یک نمودار میله‌ای ساده، جداول محوری، نمودار دایره‌ای، نقشه‌های تعاملی - و همه چیز بین نیاز داشته باشید. Metabase به طور خودکار یک تجسم انتخاب می‌کند که با داده‌های شما مناسب است، یا خودتان انتخاب کنید.",
              bold: true,
            },
            {
              text: "بیش از 15 نوع تجسم داده.",
              bold: true,
            },
            {
              text: "تسهیل پیش‌بینی با نرم‌افزار هوش تجاری که به شما کمک می‌کند روندهای آینده را بر اساس داده‌های تاریخی پیش‌بینی کنید.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-visualizations.mp4"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-visualizations.gif"
          reverse={false}
        />
        <FeatureSection
          title="داشبوردهای تعاملی ایجاد و به اشتراک بگذارید با یا بدون تیم داده"
          description="اولین داشبورد خود را در چند دقیقه با طیف گسترده‌ای از تجسم‌های داده که داستانی را روایت می‌کنند، بسازید. منابع داده خود را با کانکتورهای رسمی، شریک و جامعه متصل کنید."
          items={[
            {
              text: "معیارهای کلیدی، KPIها و تجزیه و تحلیل داده‌ها را با مجموعه‌های داده بصری، آسان‌خوان و قابل فهم برای تیم (یا مشتریان) خود برای کشف بینش‌ها و یادگیری بیشتر به اشتراک بگذارید.",
              bold: true,
            },
            {
              text: "داشبوردهای خود را برای داستان‌سرایی داده‌ای واضح‌تر و تصمیم‌گیری و کشف داده‌ای ساده، با فیلترها، تب‌ها و کارت‌های متنی و پیوندی برای زمینه عمیق‌تر سفارشی کنید.",
              bold: true,
            },
            {
              text: "قابلیت دریل‌تراو تعاملی. کلیک کنید تا بزرگنمایی و تفکیک داده‌ها برای به دست آوردن زمینه و بینش عمیق‌تر بدون نیاز به درخواست از تیم داده. برای کاوش، کشف و ایجاد نمودارها در چند دقیقه کلیک کنید.",
              bold: true,
            },
            {
              text: "اشتراک‌ها و هشدارها را برای ارسال داشبوردها به هم‌تیمی‌ها، مشتریان و ذینفعان خارجی خود تنظیم کنید.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/drill-through.mp4"
          videoPoster="/images/landing-pages/drill-through.gif"
          reverse={true}
        />
        <TestimonialSection
          text="این اولین بار در سال‌های کار من در داده بود که کاربران کسب و کار غیرفنی خودشان داشبوردها و تجزیه و تحلیل را در پلتفرم BI ما ایجاد کردند، همه به لطف قابلیت‌های کاربرپسند و بصری Metabase برای کاوش داده و داشبوردسازی."
          author="Dobo Radichkov"
          company="Chief Data Officer, Holland & Barrett"
          imageSrc="/images/reviews/profiles/dave-holmes-kinsella.jpeg"
        />
        <FeatureSection
          title="داده‌ها را با یا بدون SQL برای تجزیه و تحلیل داده‌های خودخدمت واقعی پرس‌وجو کنید"
          description="کارشناسان صفحه‌گسترده را به طرفداران ابزار BI تبدیل کنید با تجزیه و تحلیل داده‌های آسان برای استفاده که مانند خانه است (اما با نتایج جالب‌تر)."
          items={[
            {
              text: "سازنده پرس‌وجوی بصری با قابلیت کشیدن و رها کردن که به هم‌تیمی‌های کمتر داده‌محور اجازه می‌دهد سوالات خود را بدون نیاز به SQL (یا تیم داده برای کمک به آنها) جمع‌آوری کنند. آنها حتی Excel را از دست نخواهند داد.",
              bold: true,
            },
            {
              text: "بلوک‌های ساختاری برای سوالات جدید را فراهم کنید. مدل‌ها با چیزهای پیچیده مانند جوین‌ها، از قبل انجام شده، غنی شده‌اند.",
              bold: true,
            },
            {
              text: "محتوای تازه و تایید شده را ساختاردهی و برجسته کنید. محتوای مرتبط را در مجموعه‌ها سازماندهی کنید و محتوای تازه و تایید شده را برای استفاده تأیید کنید. افراد را به بهینه‌سازی تصمیمات کسب و کار و توانمندسازی هدایت کنید.",
              bold: true,
            },
            {
              text: "ویرایشگر SQL برای تجزیه و تحلیل پیشرفته که تیم داده شما واقعاً از آن لذت خواهد برد، با اسنیپت‌های قابل استفاده مجدد و یک مرجع داده مفید در جایی که می‌خواهید.",
              bold: true,
            },
          ]}
          videoSrc="/images/features/models.mp4"
          videoPoster="/images/features/models.png"
          reverse={false}
        />
        <FeatureSection
          title="راه‌اندازی سریع و ادغام با ابزارهای داده ترجیحی شما"
          description="در 5 دقیقه بدون کمک مهندسی راه‌اندازی کنید. بدون نیاز به کد یا مهارت‌های تخصصی!"
          items={[
            {
              text: "از منبع داده تا اشتراک‌گذاری اولین داشبورد خود سریع‌تر از زمان لازم برای ثبت نام در یک دوره آزمایشی با سایر ابزارهای BI.",
              bold: true,
            },
            {
              text: "به بیش از 20 منبع داده از طریق درایورهای رسمی، شریک و جامعه متصل می‌شود. همه مجموعه‌های داده خود را در یک ابزار تجزیه و تحلیل واحد جمع کنید.",
              bold: true,
            },
            {
              text: "با ابزارهای داده ترجیحی خود کار کنید (از تبدیل، آماده‌سازی داده تا مدل‌سازی داده بالادستی) برای سازماندهی اکوسیستم داده و BI خود با یک لایه پرس‌وجو و تجسم داده قدرتمند برای تبدیل داده‌های خام به بینش.",
              bold: true,
            },
            {
              text: "آن را در محل میزبانی کنید، یا وظایف میزبانی را به ما بسپارید. استقرار تک مستأجره یا air-gapped فوق‌العاده امن نیز موجود است.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.gif"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.gif"
          reverse={true}
        />
        <FeatureSection
          title="داشبوردها و تجزیه و تحلیل تعبیه‌شده مشتری‌محور در روزها، نه sprintها"
          description="به عنوان یک استارتاپ، احتمالاً کلاه‌های زیادی بر سر دارید و در مورد اینکه چه چیزی اولویت دارد عذاب می‌کشید. داشبوردها و تجزیه و تحلیل مشتری‌محور را به یک چیز کمتر برای نگرانی تبدیل کنید. بهترین BI را بدون نیاز به انجام کار سخت ساخت آن خودتان، در برنامه‌های خود تعبیه کنید."
          items={[
            {
              text: "به مشتریان خود به همان اندازه که انتخاب می‌کنید، قابلیت تجزیه و تحلیل داده بدهید. از داشبوردهای بلادرنگ تعبیه‌شده با نمودارهای تعاملی، تا قدرت پرس‌وجوی کامل.",
              bold: true,
            },
            {
              text: "در کسری از زمان به اثبات مفهوم برسید. در مقایسه با ساخت آن برای خودتان، و همچنین اکثر جایگزین‌های تجزیه و تحلیل تعبیه‌شده. می‌توانید تجزیه و تحلیل مشتری‌محور را در برنامه خود ظرف یک ماه داشته باشید.",
              bold: true,
            },
            {
              text: "آن را با برند خود سفید کنید. فونت‌ها، رنگ‌ها، لوگوها را سفارشی کنید و هر اثری از Metabase را پنهان کنید. هیچ کس نیازی ندارد بداند که شما تجزیه و تحلیل کسب و کار خریداری شده را به فروش آوردید.",
              bold: true,
            },
            {
              text: "قیمت‌گذاری مقیاس‌پذیر و رقابتی. چه بخواهید بینش‌ها را برای مشتریان خود خودکار کنید و به آنها اجازه دهید گزارش‌های سفارشی اجرا کنند، یا فقط نیاز به تعبیه چند داشبورد داشته باشید، قیمت‌گذاری تعبیه به گونه‌ای ساختار یافته است که فقط برای آنچه نیاز دارید پرداخت کنید.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/embedded-analytics/embedded_analytics-white-labeling.mp4"
          videoPoster="/images/landing-pages/embedded-analytics/embedded_analytics-white-labeling.gif"
          reverse={false}
        />
        <FeatureSection
          title="ابزار هوش تجاری ساخته شده برای مقیاس‌پذیری با استارتاپ شما"
          description="همانطور که استارتاپ شما رشد می‌کند، مقدار داده، کاربران، پرس‌وجوها و داشبوردها نیز رشد می‌کند. Metabase از روزهای اولیه تا Series B و فراتر از آن پشتیبان شما خواهد بود. به همه اجازه دهید خودخدمات تجزیه و تحلیل را ادامه دهند در حالی که اطمینان حاصل می‌کنید داده شما خصوصی و امن باقی بماند."
          items={[
            {
              text: "ورود تک‌مرحله‌ای، JWT و LDAP پیشرفته. دسترسی امن، گروه‌بندی مجوزها و نگاشت کاربر ساده شده است.",
              bold: true,
            },
            {
              text: "مجوزهای سطح ردیف و ستون. واقعاً دقیق باشید با آنچه افراد می‌بینند. حتی یک سلول هم نادیده گرفته نمی‌شود.",
              bold: true,
            },
            {
              text: "تجزیه و تحلیل دقیق استفاده. ببینید چه کسی چه کاری انجام می‌دهد، چه زمانی. در مورد انطباق به‌روز بمانید و استفاده و عملکرد داده را بهینه کنید.",
              bold: true,
            },
          ]}
          videoSrc="/images/landing-pages/drill-through.mp4"
          videoPoster="/images/landing-pages/drill-through.gif"
          reverse={true}
        />
        <ReviewsCarouselSection />
        <FAQSection items={faqItems} title="سوالات پرتکرار" description="" />
        <TryMetabaseFooter />
      </div>
    </>
  );
}
