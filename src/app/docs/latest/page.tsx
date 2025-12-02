import { Metadata } from "next";
import { DocsContent } from "@/components/docs/DocsContent";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "مستندات متابیس - آخرین نسخه | Metabase Documentation",
  description:
    "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز. می‌توانید از متابیس برای پرسیدن سوالات درباره داده‌های خود استفاده کنید، یا متابیس را در برنامه خود جاسازی کنید تا مشتریان شما بتوانند داده‌های خود را به صورت مستقل کاوش کنند.",
  keywords: [
    "مستندات متابیس",
    "Metabase documentation",
    "هوش تجاری",
    "تحلیل داده",
    "داشبورد",
    "بیزینس اینتلیجنس",
  ],
  openGraph: {
    title: "مستندات متابیس - آخرین نسخه",
    description:
      "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز برای تجزیه و تحلیل داده‌ها",
    type: "website",
    locale: "fa_IR",
  },
  alternates: {
    canonical: "/docs/latest",
  },
};

export default function LatestDocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "مستندات متابیس - آخرین نسخه",
            description:
              "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز برای تجزیه و تحلیل داده‌ها",
            inLanguage: "fa-IR",
            author: {
              "@type": "Organization",
              name: "Metabase",
            },
          }),
        }}
      />
      <DocsContent>
        <h1 id="metabase-documentation">مستندات متابیس</h1>

        <p>
          <Image
            src="/images/metabase-product-screenshot.png"
            alt="داشبورد متابیس"
            width={1200}
            height={675}
            className="w-full max-w-4xl"
            priority
          />
        </p>

        <p>
          متابیس یک پلتفرم هوش تجاری منبع باز است. می‌توانید از متابیس برای
          پرسیدن سوالات درباره داده‌های خود استفاده کنید، یا متابیس را در برنامه
          خود جاسازی کنید تا مشتریان شما بتوانند داده‌های خود را به صورت مستقل
          کاوش کنند.
        </p>

        <h2 id="first-steps">اولین قدم‌ها</h2>

        <h3 id="metabase-cloud">متابیس کلود</h3>

        <p>
          ساده‌ترین راه برای شروع با متابیس، ثبت‌نام برای نسخه آزمایشی رایگان{" "}
          <Link
            href="https://store.metabase.com/checkout"
            className="text-[#509ee3] hover:underline"
          >
            متابیس کلود
          </Link>{" "}
          است. شما پشتیبانی، پشتیبان‌گیری، ارتقا، سرور SMTP، گواهی SSL، ممیزی
          امنیتی SoC2 Type 2 و موارد دیگر را دریافت می‌کنید (به علاوه پول شما
          صرف بهبود متابیس می‌شود). نمای کلی سریع ما از{" "}
          <Link
            href="/docs/latest/cloud/cloud-vs-self-hosting"
            className="text-[#509ee3] hover:underline"
          >
            کلود در مقابل میزبانی خود
          </Link>{" "}
          را بررسی کنید. در صورت نیاز، می‌توانید در هر زمان به{" "}
          <Link
            href="/docs/latest/installation-and-operation/installing-metabase"
            className="text-[#509ee3] hover:underline"
          >
            میزبانی خود
          </Link>{" "}
          متابیس تغییر دهید (یا برعکس).
        </p>

        <h3 id="installing-metabase">
          <Link
            href="/docs/latest/installation-and-operation/installing-metabase"
            className="text-[#509ee3] hover:underline"
          >
            نصب متابیس
          </Link>
        </h3>

        <p>
          اجرا به عنوان JAR، استفاده از Docker، یا در{" "}
          <Link
            href="https://store.metabase.com/checkout"
            className="text-[#509ee3] hover:underline"
          >
            متابیس کلود
          </Link>
          .
        </p>

        <h3 id="setting-up-metabase">
          <Link
            href="/docs/latest/configuring-metabase/setting-up-metabase"
            className="text-[#509ee3] hover:underline"
          >
            تنظیم متابیس
          </Link>
        </h3>

        <p>پس از نصب، متابیس خود را تنظیم کنید و به داده‌های خود متصل شوید.</p>

        <h3 id="getting-started">
          <Link
            href="/learn/metabase-basics/getting-started"
            className="text-[#509ee3] hover:underline"
          >
            شروع کار
          </Link>
        </h3>

        <p>
          با اتصال داده‌های خود، شروع به پرسیدن سوالات، ایجاد داشبوردها و به
          اشتراک گذاری کار خود کنید.
        </p>

        <h3 id="a-tour-of-metabase">
          <Link
            href="/learn/metabase-basics/overview/tour-of-metabase"
            className="text-[#509ee3] hover:underline"
          >
            گشت‌وگذار در متابیس
          </Link>
        </h3>

        <p>
          متابیس یک محصول عمیق با ابزارهای زیادی برای ساده‌سازی هوش تجاری است،
          از نمودارهای قابل جاسازی و داشبوردهای تعاملی، تا ویرایشگرهای GUI و
          SQL، تا ممیزی و امنیت سطر و ستون، و موارد بیشتر.
        </p>

        <h2 id="documentation-topics">موضوعات مستندات</h2>

        <p>مستندات مرجع متابیس.</p>

        <h3 id="installation">نصب و راه‌اندازی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی نصب
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/installing-metabase"
              className="text-[#509ee3] hover:underline"
            >
              نصب متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/upgrading-metabase"
              className="text-[#509ee3] hover:underline"
            >
              ارتقای متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/configuring-application-database"
              className="text-[#509ee3] hover:underline"
            >
              پیکربندی پایگاه داده برنامه متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/backing-up-metabase-application-data"
              className="text-[#509ee3] hover:underline"
            >
              پشتیبان‌گیری از متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/migrating-from-h2"
              className="text-[#509ee3] hover:underline"
            >
              مهاجرت به پایگاه داده برنامه تولید
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/monitoring-metabase"
              className="text-[#509ee3] hover:underline"
            >
              نظارت بر متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/development-instance"
              className="text-[#509ee3] hover:underline"
            >
              نمونه‌های توسعه
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/serialization"
              className="text-[#509ee3] hover:underline"
            >
              سریال‌سازی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/commands"
              className="text-[#509ee3] hover:underline"
            >
              دستورات
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/supported-browsers"
              className="text-[#509ee3] hover:underline"
            >
              مرورگرهای پشتیبانی‌شده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/privacy"
              className="text-[#509ee3] hover:underline"
            >
              حریم خصوصی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/installation-and-operation/information-collection"
              className="text-[#509ee3] hover:underline"
            >
              درباره داده‌های استفاده ناشناس که جمع‌آوری می‌کنیم
            </Link>
          </li>
        </ul>

        <h3 id="databases">پایگاه‌های داده</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/databases/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی پایگاه‌های داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/connecting"
              className="text-[#509ee3] hover:underline"
            >
              افزودن و مدیریت پایگاه‌های داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/users-roles-privileges"
              className="text-[#509ee3] hover:underline"
            >
              کاربران، نقش‌ها و امتیازات پایگاه داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/sync-scan"
              className="text-[#509ee3] hover:underline"
            >
              همگام‌سازی و اسکن پایگاه‌های داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/encrypting-details-at-rest"
              className="text-[#509ee3] hover:underline"
            >
              رمزگذاری اتصال پایگاه داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/ssh-tunnel"
              className="text-[#509ee3] hover:underline"
            >
              تونل SSH
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/ssl-certificates"
              className="text-[#509ee3] hover:underline"
            >
              گواهی SSL
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/databases/uploads"
              className="text-[#509ee3] hover:underline"
            >
              آپلود داده
            </Link>
          </li>
        </ul>

        <h3 id="questions">سوالات</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/questions/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی سوالات
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/alerts"
              className="text-[#509ee3] hover:underline"
            >
              هشدارها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/exporting-results"
              className="text-[#509ee3] hover:underline"
            >
              صادرات داده
            </Link>
          </li>
        </ul>

        <h4 id="query-builder">سازنده کوئری</h4>

        <ul>
          <li>
            <Link
              href="/docs/latest/questions/query-builder/editor"
              className="text-[#509ee3] hover:underline"
            >
              ویرایشگر کوئری
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/query-builder/filters"
              className="text-[#509ee3] hover:underline"
            >
              فیلتر کردن
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/query-builder/summarizing-and-grouping"
              className="text-[#509ee3] hover:underline"
            >
              خلاصه‌سازی و گروه‌بندی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/query-builder/expressions"
              className="text-[#509ee3] hover:underline"
            >
              عبارات سفارشی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/query-builder/expressions-list"
              className="text-[#509ee3] hover:underline"
            >
              فهرست عبارات
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/query-builder/join"
              className="text-[#509ee3] hover:underline"
            >
              اتصال داده
            </Link>
          </li>
        </ul>

        <h4 id="sql-and-native-queries">کوئری‌های SQL و بومی</h4>

        <ul>
          <li>
            <Link
              href="/docs/latest/questions/native-editor/writing-sql"
              className="text-[#509ee3] hover:underline"
            >
              ویرایشگر SQL
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/native-editor/sql-parameters"
              className="text-[#509ee3] hover:underline"
            >
              پارامترهای SQL
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/native-editor/referencing-saved-questions-in-queries"
              className="text-[#509ee3] hover:underline"
            >
              ارجاع به مدل‌ها و سوالات ذخیره‌شده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/native-editor/snippets"
              className="text-[#509ee3] hover:underline"
            >
              اسنیپت‌ها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/snippets"
              className="text-[#509ee3] hover:underline"
            >
              مجوزهای پوشه اسنیپت
            </Link>
          </li>
        </ul>

        <h4 id="visualizing-data">تجسم‌سازی داده</h4>

        <ul>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/visualizing-results"
              className="text-[#509ee3] hover:underline"
            >
              تجسم‌سازی داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/combo-chart"
              className="text-[#509ee3] hover:underline"
            >
              نمودارهای ترکیبی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/detail"
              className="text-[#509ee3] hover:underline"
            >
              جزئیات
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/funnel"
              className="text-[#509ee3] hover:underline"
            >
              نمودارهای قیفی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/gauge"
              className="text-[#509ee3] hover:underline"
            >
              نمودارهای گیج
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/line-bar-and-area-charts"
              className="text-[#509ee3] hover:underline"
            >
              نمودارهای خطی، میله‌ای و ناحیه‌ای
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/map"
              className="text-[#509ee3] hover:underline"
            >
              نقشه‌ها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/numbers"
              className="text-[#509ee3] hover:underline"
            >
              اعداد
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/pie-or-donut-chart"
              className="text-[#509ee3] hover:underline"
            >
              نمودارهای دایره‌ای یا دوناتی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/pivot-table"
              className="text-[#509ee3] hover:underline"
            >
              جدول محوری
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/progress-bar"
              className="text-[#509ee3] hover:underline"
            >
              نوار پیشرفت
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/sankey"
              className="text-[#509ee3] hover:underline"
            >
              نمودار سنکی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/scatterplot-or-bubble-chart"
              className="text-[#509ee3] hover:underline"
            >
              نمودار پراکندگی یا حبابی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/table"
              className="text-[#509ee3] hover:underline"
            >
              جدول
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/tooltips"
              className="text-[#509ee3] hover:underline"
            >
              راهنماهای ابزار
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/trend"
              className="text-[#509ee3] hover:underline"
            >
              روند
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/questions/visualizations/waterfall-chart"
              className="text-[#509ee3] hover:underline"
            >
              نمودار آبشاری
            </Link>
          </li>
        </ul>

        <h3 id="dashboards">داشبوردها</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/dashboards/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی داشبوردها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/dashboards/introduction"
              className="text-[#509ee3] hover:underline"
            >
              مقدمه‌ای بر داشبوردها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/dashboards/filters"
              className="text-[#509ee3] hover:underline"
            >
              فیلترهای داشبورد
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/dashboards/interactive"
              className="text-[#509ee3] hover:underline"
            >
              داشبوردهای تعاملی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/dashboards/multiple-series"
              className="text-[#509ee3] hover:underline"
            >
              نمودارها با چند سری
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/dashboards/subscriptions"
              className="text-[#509ee3] hover:underline"
            >
              اشتراک‌های داشبورد
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/dashboards/actions"
              className="text-[#509ee3] hover:underline"
            >
              اقدامات روی داشبورد
            </Link>
          </li>
        </ul>

        <h3 id="data-modeling">مدل‌سازی داده</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/data-modeling/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی مدل‌سازی داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/models"
              className="text-[#509ee3] hover:underline"
            >
              مدل‌ها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/model-persistence"
              className="text-[#509ee3] hover:underline"
            >
              پایداری مدل
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/metrics"
              className="text-[#509ee3] hover:underline"
            >
              معیارها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/metadata-editing"
              className="text-[#509ee3] hover:underline"
            >
              تنظیمات متادیتای جدول
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/semantic-types"
              className="text-[#509ee3] hover:underline"
            >
              انواع فیلد
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/formatting"
              className="text-[#509ee3] hover:underline"
            >
              پیش‌فرض‌های قالب‌بندی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/json-unfolding"
              className="text-[#509ee3] hover:underline"
            >
              کار با JSON
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/data-modeling/segments"
              className="text-[#509ee3] hover:underline"
            >
              بخش‌ها
            </Link>
          </li>
        </ul>

        <h3 id="actions">اقدامات</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/actions/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی اقدامات
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/actions/introduction"
              className="text-[#509ee3] hover:underline"
            >
              مقدمه‌ای بر اقدامات
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/actions/basic"
              className="text-[#509ee3] hover:underline"
            >
              اقدامات پایه
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/actions/custom"
              className="text-[#509ee3] hover:underline"
            >
              اقدامات سفارشی
            </Link>
          </li>
        </ul>

        <h3 id="ai">هوش مصنوعی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/ai/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی هوش مصنوعی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/ai/metabot"
              className="text-[#509ee3] hover:underline"
            >
              متابوت
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/ai/settings"
              className="text-[#509ee3] hover:underline"
            >
              تنظیم متابوت
            </Link>
          </li>
        </ul>

        <h3 id="exploration-and-organization">کاوش و سازمان‌دهی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی سازمان‌دهی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/exploration"
              className="text-[#509ee3] hover:underline"
            >
              کاوش پایه
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/collections"
              className="text-[#509ee3] hover:underline"
            >
              مجموعه‌ها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/keyboard-shortcuts"
              className="text-[#509ee3] hover:underline"
            >
              میانبرهای صفحه‌کلید
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/history"
              className="text-[#509ee3] hover:underline"
            >
              تاریخچه
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/delete-and-restore"
              className="text-[#509ee3] hover:underline"
            >
              سطل زباله
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/data-model-reference"
              className="text-[#509ee3] hover:underline"
            >
              مرجع داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/events-and-timelines"
              className="text-[#509ee3] hover:underline"
            >
              رویدادها و خطوط زمانی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/x-rays"
              className="text-[#509ee3] hover:underline"
            >
              اشعه ایکس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/exploration-and-organization/content-verification"
              className="text-[#509ee3] hover:underline"
            >
              تأیید محتوا
            </Link>
          </li>
        </ul>

        <h3 id="people">افراد</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/people-and-groups/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی افراد
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/account-settings"
              className="text-[#509ee3] hover:underline"
            >
              تنظیمات حساب
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/managing"
              className="text-[#509ee3] hover:underline"
            >
              مدیریت افراد و گروه‌ها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/changing-password-complexity"
              className="text-[#509ee3] hover:underline"
            >
              پیچیدگی رمز عبور
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/changing-session-expiration"
              className="text-[#509ee3] hover:underline"
            >
              انقضای نشست
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/google-sign-in"
              className="text-[#509ee3] hover:underline"
            >
              ورود با Google
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/ldap"
              className="text-[#509ee3] hover:underline"
            >
              LDAP
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/api-keys"
              className="text-[#509ee3] hover:underline"
            >
              کلیدهای API
            </Link>
          </li>
        </ul>

        <h4 id="paid-sso-options">گزینه‌های SSO پولی</h4>

        <ul>
          <li>
            <Link
              href="/docs/latest/people-and-groups/authenticating-with-jwt"
              className="text-[#509ee3] hover:underline"
            >
              احراز هویت مبتنی بر JWT
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/authenticating-with-saml"
              className="text-[#509ee3] hover:underline"
            >
              احراز هویت مبتنی بر SAML
            </Link>
            <ul>
              <li>
                <Link
                  href="/docs/latest/people-and-groups/saml-auth0"
                  className="text-[#509ee3] hover:underline"
                >
                  SAML با Auth0
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/people-and-groups/saml-azure"
                  className="text-[#509ee3] hover:underline"
                >
                  SAML با Microsoft Entra ID
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/people-and-groups/saml-google"
                  className="text-[#509ee3] hover:underline"
                >
                  SAML با Google
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/people-and-groups/saml-keycloak"
                  className="text-[#509ee3] hover:underline"
                >
                  SAML با Keycloak
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/people-and-groups/saml-okta"
                  className="text-[#509ee3] hover:underline"
                >
                  SAML با Okta
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/docs/latest/people-and-groups/user-provisioning"
              className="text-[#509ee3] hover:underline"
            >
              تأمین کاربر با SCIM
            </Link>
          </li>
        </ul>

        <h3 id="permissions">مجوزها</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/permissions/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی مجوزها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/introduction"
              className="text-[#509ee3] hover:underline"
            >
              مقدمه مجوزها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/data"
              className="text-[#509ee3] hover:underline"
            >
              مجوزهای داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/collections"
              className="text-[#509ee3] hover:underline"
            >
              مجوزهای مجموعه
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/application"
              className="text-[#509ee3] hover:underline"
            >
              مجوزهای برنامه
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/row-and-column-security"
              className="text-[#509ee3] hover:underline"
            >
              امنیت سطر و ستون
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/row-and-column-security-examples"
              className="text-[#509ee3] hover:underline"
            >
              مثال‌های امنیت سطر و ستون
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/impersonation"
              className="text-[#509ee3] hover:underline"
            >
              جعل هویت اتصال
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/database-routing"
              className="text-[#509ee3] hover:underline"
            >
              مسیریابی پایگاه داده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/snippets"
              className="text-[#509ee3] hover:underline"
            >
              مجوزهای پوشه اسنیپت
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/notifications"
              className="text-[#509ee3] hover:underline"
            >
              مجوزهای اعلان
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/permissions/embedding"
              className="text-[#509ee3] hover:underline"
            >
              پیکربندی مجوزها برای جاسازی
            </Link>
          </li>
        </ul>

        <h3 id="embedding">جاسازی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/embedding/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی جاسازی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/embedding/introduction"
              className="text-[#509ee3] hover:underline"
            >
              مقدمه جاسازی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/embedding/interactive-embedding"
              className="text-[#509ee3] hover:underline"
            >
              جاسازی تعاملی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/embedding/interactive-embedding-quick-start-guide"
              className="text-[#509ee3] hover:underline"
            >
              شروع سریع جاسازی تعاملی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/embedding/static-embedding"
              className="text-[#509ee3] hover:underline"
            >
              جاسازی استاتیک
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/embedding/static-embedding-parameters"
              className="text-[#509ee3] hover:underline"
            >
              پارامترهای جاسازی استاتیک
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/embedding/securing-embeds"
              className="text-[#509ee3] hover:underline"
            >
              امن‌سازی متابیس جاسازی‌شده
            </Link>
          </li>
        </ul>

        <h3 id="configuration">پیکربندی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی پیکربندی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/setting-up-metabase"
              className="text-[#509ee3] hover:underline"
            >
              تنظیم متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/settings"
              className="text-[#509ee3] hover:underline"
            >
              تنظیمات عمومی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/email"
              className="text-[#509ee3] hover:underline"
            >
              ایمیل
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/slack"
              className="text-[#509ee3] hover:underline"
            >
              Slack
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/webhooks"
              className="text-[#509ee3] hover:underline"
            >
              Webhooks
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/environment-variables"
              className="text-[#509ee3] hover:underline"
            >
              متغیرهای محیطی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/config-file"
              className="text-[#509ee3] hover:underline"
            >
              فایل پیکربندی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/log-configuration"
              className="text-[#509ee3] hover:underline"
            >
              پیکربندی لاگ متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/timezones"
              className="text-[#509ee3] hover:underline"
            >
              مناطق زمانی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/localization"
              className="text-[#509ee3] hover:underline"
            >
              زبان‌ها و بومی‌سازی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/appearance"
              className="text-[#509ee3] hover:underline"
            >
              ظاهر
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/caching"
              className="text-[#509ee3] hover:underline"
            >
              کش کردن نتایج کوئری
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/custom-maps"
              className="text-[#509ee3] hover:underline"
            >
              نقشه‌های سفارشی
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/customizing-jetty-webserver"
              className="text-[#509ee3] hover:underline"
            >
              سفارشی‌سازی وب‌سرور Jetty متابیس
            </Link>
          </li>
        </ul>

        <h3 id="tools">ابزارها</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/usage-and-performance-tools/start"
              className="text-[#509ee3] hover:underline"
            >
              نمای کلی ابزارها
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/usage-and-performance-tools/usage-analytics"
              className="text-[#509ee3] hover:underline"
            >
              تحلیل استفاده
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/usage-and-performance-tools/tools"
              className="text-[#509ee3] hover:underline"
            >
              ابزارهای مدیریتی
            </Link>
          </li>
        </ul>

        <h3 id="metabase-cloud-1">متابیس کلود</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/cloud/start"
              className="text-[#509ee3] hover:underline"
            >
              مستندات متابیس کلود و فروشگاه
            </Link>
          </li>
        </ul>

        <h3 id="metabase-api">API متابیس</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/api"
              className="text-[#509ee3] hover:underline"
            >
              مستندات API متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/learn/metabase-basics/administration/administration-and-operation/metabase-api"
              className="text-[#509ee3] hover:underline"
            >
              آموزش API
            </Link>
          </li>
        </ul>

        <h3 id="troubleshooting">عیب‌یابی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/troubleshooting-guide"
              className="text-[#509ee3] hover:underline"
            >
              راهنماهای عیب‌یابی
            </Link>
          </li>
        </ul>

        <h3 id="developer-guide">راهنمای توسعه‌دهنده</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/developers-guide/start"
              className="text-[#509ee3] hover:underline"
            >
              راهنمای توسعه‌دهنده
            </Link>
          </li>
        </ul>

        <h2 id="getting-help">دریافت کمک</h2>

        <h3 id="troubleshooting-1">عیب‌یابی</h3>

        <ul>
          <li>
            <Link
              href="/docs/latest/troubleshooting-guide"
              className="text-[#509ee3] hover:underline"
            >
              راهنماهای عیب‌یابی
            </Link>
          </li>
          <li>
            <Link
              href="https://discourse.metabase.com/"
              className="text-[#509ee3] hover:underline"
            >
              انجمن متابیس
            </Link>
          </li>
          <li>
            <Link
              href="/docs/latest/configuring-metabase/log-configuration"
              className="text-[#509ee3] hover:underline"
            >
              پیکربندی لاگ
            </Link>
          </li>
        </ul>

        <h3 id="tutorials-and-guides">آموزش‌ها و راهنماها</h3>

        <p>
          <Link href="/learn" className="text-[#509ee3] hover:underline">
            یادگیری متابیس
          </Link>{" "}
          شامل مقالات زیادی در مورد نحوه استفاده از متابیس، بهترین روش‌های داده
          و موارد بیشتر است.
        </p>

        <h2 id="more-resources">منابع بیشتر</h2>

        <h3 id="discussion">
          <Link
            href="https://discourse.metabase.com/"
            className="text-[#509ee3] hover:underline"
          >
            بحث و گفتگو
          </Link>
        </h3>

        <p>به اشتراک گذاری و ارتباط با سایر کاربران متابیس.</p>

        <h3 id="community-stories">
          <Link href="/community" className="text-[#509ee3] hover:underline">
            داستان‌های جامعه
          </Link>
        </h3>

        <p>مشاوره عملی از جامعه ما.</p>

        <h3 id="metabase-blog">
          <Link href="/blog" className="text-[#509ee3] hover:underline">
            وبلاگ متابیس
          </Link>
        </h3>

        <p>اخبار، به‌روزرسانی‌ها و ایده‌ها.</p>

        <h3 id="customers">
          <Link href="/case-studies" className="text-[#509ee3] hover:underline">
            مشتریان
          </Link>
        </h3>

        <p>شرکت‌های واقعی، داده‌های واقعی، داستان‌های واقعی.</p>

        <h3 id="metabase-twitter">
          <Link
            href="https://twitter.com/metabase"
            className="text-[#509ee3] hover:underline"
          >
            توییتر متابیس
          </Link>
        </h3>

        <p>ما مطالب را توییت می‌کنیم.</p>

        <h3 id="source-code-repository-on-github">
          <Link
            href="https://github.com/metabase/metabase"
            className="text-[#509ee3] hover:underline"
          >
            مخزن کد منبع در GitHub
          </Link>
        </h3>

        <p>ما را در GitHub دنبال کنید.</p>

        <h3 id="list-of-releases">
          <Link
            href="https://github.com/metabase/metabase/releases"
            className="text-[#509ee3] hover:underline"
          >
            فهرست انتشارات
          </Link>
        </h3>

        <p>
          فهرستی از تمام انتشارات متابیس، شامل هر دو نسخه Enterprise Edition و
          Open Source Edition.
        </p>

        <h3 id="developers-guide">
          <Link
            href="/docs/latest/developers-guide/start"
            className="text-[#509ee3] hover:underline"
          >
            راهنمای توسعه‌دهندگان
          </Link>
        </h3>

        <p>به پروژه متن‌باز متابیس کمک کنید!</p>

        <h3 id="data-and-business-intelligence-glossary">
          <Link href="/glossary" className="text-[#509ee3] hover:underline">
            واژه‌نامه داده و هوش تجاری
          </Link>
        </h3>

        <p>اصطلاحات داده توضیح داده شده.</p>

        <h3 id="metabase-experts">
          <Link href="/partners" className="text-[#509ee3] hover:underline">
            متخصصان متابیس
          </Link>
        </h3>

        <p>
          اگر می‌خواهید منابع فنی بیشتری برای راه‌اندازی پشته داده خود با متابیس
          داشته باشید، با یک{" "}
          <Link href="/partners" className="text-[#509ee3] hover:underline">
            متخصص متابیس
          </Link>{" "}
          ارتباط برقرار کنید.
        </p>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p>
            مستندات سایر{" "}
            <Link href="/docs/all" className="text-[#509ee3] hover:underline">
              نسخه‌های متابیس
            </Link>{" "}
            را بخوانید.
          </p>
        </div>
      </DocsContent>
    </>
  );
}
