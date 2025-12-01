import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";
const containerClass = "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8";

const TickIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9.5"
      fill="none"
      stroke="#509EE3"
      strokeWidth="1.5"
    />
    <path
      d="M8.5 12.5L10.75 14.75L15.5 9.75"
      stroke="#509EE3"
      fill="transparent"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const metadata: Metadata = {
  title: "امنیت Metabase | ما داده‌های شما را نمی‌خواهیم",
  description:
    "نگاه Metabase به امنیت و حریم خصوصی داده‌ها: معماری امن، انطباق سازمانی، مدیریت دسترسی، رمزنگاری، نظارت سیستمی و برنامه بازیابی از بحران.",
  keywords: [
    "امنیت Metabase",
    "امنیت داده",
    "حریم خصوصی داده",
    "SOC 2 Type II",
    "GDPR",
    "CCPA",
    "رمزنگاری داده",
    "مدیریت دسترسی",
    "امنیت ابری",
  ],
  openGraph: {
    title: "امنیت Metabase | ما داده‌های شما را نمی‌خواهیم",
    description:
      "با رویکرد Metabase به امنیت و حریم خصوصی داده آشنا شوید؛ از انطباق‌های سازمانی تا معماری ابری امن و مدیریت دقیق دسترسی.",
    type: "article",
    url: `${baseUrl}/security`,
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    locale: "fa_IR",
    images: [
      {
        url: `${baseUrl}/images/security/preview.jpg`,
        width: 1200,
        height: 630,
        alt: "امنیت Metabase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "امنیت Metabase | ما داده‌های شما را نمی‌خواهیم",
    description:
      "مروری جامع بر امنیت و حریم خصوصی داده‌ها در Metabase، شامل معماری ابری، انطباق و رمزنگاری.",
    images: [`${baseUrl}/images/security/preview.jpg`],
    site: "@metabase",
    creator: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/security`,
    languages: {
      fa: `${baseUrl}/security`,
      en: `${baseUrl}/security`,
    },
  },
};

const SecurityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-white">
          <div className={`${containerClass} py-16 sm:py-20`}>
            <header className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-metabase-primary text-sm font-bold">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.0031 4.75L4.75307 8C4.75307 8 4.00307 19.25 12.0031 19.25C20.0031 19.25 19.2531 8 19.2531 8L12.0031 4.75Z"
                      stroke="#509EE3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 12.75L11 14.25L14.25 9.75"
                      stroke="#509EE3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>امنیت</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-metabase-primary mb-4 leading-tight">
                ما داده‌های شما را نمی‌خواهیم
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                ما معتقدیم همه باید بتوانند داده‌ها را کشف و از آن یاد بگیرند،
                اما همان‌قدر هم معتقدیم که داده‌های شما باید نزد خودتان بماند؛
                خصوصی، امن و تحت کنترل خودتان.
              </p>
            </header>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white pb-16 sm:pb-24">
          <div className={containerClass}>
            {/* Intro + list */}
            <article className="max-w-none text-right text-gray-700 leading-relaxed space-y-4">
              <h2
                id="introduction"
                className="mt-0 mb-4 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-metabase-primary"
              >
                مقدمه
              </h2>

              <h3
                id="the-beginning-open-source-in-database-analytics"
                className="mt-4 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                از ابتدا: متن‌باز و تحلیل روی خود پایگاه‌داده
              </h3>

              <p>
                از همان ابتدا Metabase را طوری ساخته‌ایم که با داده‌های شما
                همان‌طور رفتار کند که دوست داشتیم با داده‌های خودمان رفتار شود:
                <strong> خصوصی، امن و تحت کنترل شما.</strong> برای رسیدن به این
                هدف، از <strong>تحلیل متن‌باز و درون پایگاه‌داده‌ای</strong>{" "}
                شروع کردیم؛ یعنی:
              </p>

              <ul className="mt-4 space-y-3">
                <li>
                  <div className="flex items-center gap-3">
                    <span className="mt-1">
                      <TickIcon />
                    </span>
                    <p className="m-0">
                      <strong>داده‌های شما روی سرورهای خودتان می‌ماند.</strong>{" "}
                      ما داده‌های شما را نمی‌بینیم و از آن نسخه‌برداری نمی‌کنیم.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="mt-1">
                      <TickIcon />
                    </span>
                    <p className="m-0">
                      <strong>می‌توانید زیر پوست پروژه را ببینید.</strong> هیچ
                      جعبه سیاهی در کار نیست؛ کد متن‌باز است و قابل بازبینی.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="mt-1">
                      <TickIcon />
                    </span>
                    <p className="m-0">
                      <strong>
                        استقرارهای درون‌سازمانی و{" "}
                        <a
                          href="/product/air-gapping"
                          className="text-metabase-primary hover:text-metabase-primary-dark underline decoration-from-font"
                        >
                          استقرار air‑gapped
                        </a>{" "}
                        شهروند درجه‌یک هستند، نه یک قابلیت فرعی.
                      </strong>
                    </p>
                  </div>
                </li>
              </ul>

              <p>
                هرچند گزینه‌هایی کاملاً اختیاری برای{" "}
                <strong>اشتراک‌گذاری ناشناس داده‌های کاربری</strong> وجود دارد،
                اما بیشتر استقرارهای متن‌باز هرگز نیازی ندارند به سرورهای ما
                متصل شوند و ما نیز دقت زیادی می‌کنیم که{" "}
                <strong>هیچ داده‌ای از شما نبینیم.</strong>
              </p>

              <p>
                البته هرگز ندیدن داده‌های شما فقط بخشی از داستان است. ما
                مجموعه‌ای از امکانات دقیق <strong>حریم خصوصی و امنیت</strong> را
                برای <strong>کنترل دسترسی به داده‌ها درون سازمان شما</strong>{" "}
                فراهم کرده‌ایم؛ از جمله <strong>مجوزهای بسیار ریزدانه</strong> و{" "}
                <strong>پشتیبانی از SSO</strong>.
              </p>

              {/* Enterprise compliance */}
              <h2
                id="enterprise-grade-compliance"
                className="mt-12 mb-6 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-metabase-primary"
              >
                انطباق در سطح سازمانی
              </h2>

              <section className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-6 rounded-3xl border border-blue-100 bg-white p-4 md:p-6">
                <figure className="shrink-0">
                  <img
                    src="/images/SOC-2-Badge.png"
                    alt="SOC 2 Type II"
                    loading="lazy"
                    className="w-24 h-auto"
                  />
                </figure>
                <div>
                  <h3 className="text-xl font-bold mb-2">SOC 2 Type II</h3>
                  <p>
                    گزارش <strong>SOC 2 Type II</strong>، کنترل‌های ما را در
                    زمینه <strong>امنیت داده‌های مشتری</strong> و هم‌راستایی
                    آن‌ها با <strong>اصول اعتماد سرویس (TSPs)</strong> تعیین‌شده
                    توسط <strong>انجمن حسابداران رسمی آمریکا (AICPA)</strong>{" "}
                    تأیید می‌کند.
                  </p>
                </div>
              </section>

              <section className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-6 rounded-3xl border border-blue-100 bg-white p-4 md:p-6">
                <figure className="shrink-0">
                  <img
                    src="/images/security/badge_EU.png"
                    alt="مقررات عمومی حفاظت از داده‌ها (GDPR)"
                    loading="lazy"
                    className="w-24 h-auto"
                  />
                </figure>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    مقررات عمومی حفاظت از داده‌ها (GDPR)
                  </h3>
                  <p>
                    در Metabase، محصولات، فرایندها و رویه‌های خود را با{" "}
                    <strong>الزامات GDPR</strong> هم‌راستا کرده‌ایم تا{" "}
                    <strong>
                      پردازش داده‌های شخصی مطابق قانون و با شفافیت کامل
                    </strong>{" "}
                    انجام شود.
                  </p>
                </div>
              </section>

              <section className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8 rounded-3xl border border-blue-100 bg-white p-4 md:p-6">
                <figure className="shrink-0">
                  <img
                    src="/images/security/badge_CCPA.png"
                    alt="قانون حفظ حریم خصوصی مصرف‌کننده کالیفرنیا (CCPA)"
                    loading="lazy"
                    className="w-24 h-auto"
                  />
                </figure>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    قانون حفظ حریم خصوصی مصرف‌کننده کالیفرنیا (CCPA)
                  </h3>
                  <p>
                    Metabase در چارچوب <strong>CCPA</strong> به‌عنوان{" "}
                    <strong>ارائه‌دهنده خدمات (Service Provider)</strong> عمل
                    می‌کند و <strong>ابزارها و تعهدات لازم</strong> برای کمک به
                    مشتریان جهت رعایت این قانون را فراهم کرده است.
                  </p>
                </div>
              </section>

              {/* Pentest & vuln disclosure */}
              <h2
                id="penetration-testing-and-vulnerability-disclosure"
                className="mt-12 mb-4 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-metabase-primary"
              >
                تست نفوذ و افشای آسیب‌پذیری
              </h2>

              <h3
                id="penetration-testing"
                className="mt-4 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                تست نفوذ
              </h3>

              <ul>
                <li>
                  علاوه بر ممیزی‌های انطباق، Metabase سالانه تست‌های نفوذ در سطح
                  برنامه و زیرساخت را به‌وسیله شرکت‌های مستقل انجام می‌دهد.
                </li>
                <li>
                  نتایج این تست‌ها اولویت‌بندی شده، در بازه زمانی معقول اصلاح
                  می‌شوند و با مدیریت ارشد به اشتراک گذاشته می‌گردند.
                </li>
                <li>
                  مشتریان می‌توانند خلاصه مدیریتی این فعالیت‌ها را از تیم موفقیت
                  مشتری خود درخواست کنند.
                </li>
              </ul>

              <h3
                id="vulnerability-disclosure"
                className="mt-6 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                افشای آسیب‌پذیری
              </h3>

              <ul>
                <li>
                  فرایندهای مهندسی ما به اسکنرهای آسیب‌پذیری لحظه‌ای مجهز
                  شده‌اند تا مشکلات امنیتی را در چرخه توسعه شناسایی و پیگیری
                  کنند.
                </li>
                <li>
                  Metabase با متخصصان امنیتی در سراسر جهان همکاری می‌کند تا از
                  آخرین تکنیک‌ها و بهترین شیوه‌های امنیتی مطلع بماند و هشدارهای
                  امنیتی خود را از طریق GitHub منتشر می‌کند.
                </li>
              </ul>

              {/* Access, encryption, endpoints */}
              <h2
                id="access-management-encryption-and-endpoint-security"
                className="mt-12 mb-4 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-metabase-primary"
              >
                مدیریت دسترسی، رمزنگاری و امنیت نقاط انتهایی
              </h2>

              <h3
                id="access-management"
                className="mt-4 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                مدیریت دسترسی
              </h3>

              <ul>
                <li>
                  Metabase اصل «حداقل دسترسی لازم» و مجوزهای مبتنی بر نقش را در
                  اعطای دسترسی رعایت می‌کند؛ کارکنان فقط به داده‌هایی دسترسی
                  دارند که برای انجام وظایف فعلی خود واقعاً نیاز دارند.
                </li>
                <li>
                  استفاده از مدیر رمز عبور مورد تأیید شرکت برای تمام کارکنان
                  الزامی است.
                </li>
              </ul>

              <h3
                id="encryption"
                className="mt-6 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                رمزنگاری
              </h3>

              <ul>
                <li>
                  Metabase داده‌ها را با استفاده از پروتکل‌های استاندارد صنعت
                  رمزنگاری می‌کند.
                </li>
                <li>داده در حال انتقال با TLS 1.2 یا بالاتر محافظت می‌شود.</li>
                <li>
                  داده‌های حساس مانند رشته‌های اتصال و تنظیمات در سطح ردیف با
                  AES256 و SHA512 رمزگذاری می‌شوند و دیسک‌های زیرساخت ابری
                  (مانند AWS) نیز به‌صورت جداگانه رمزنگاری می‌شوند.
                </li>
                <li>
                  مدیریت کلیدهای رمزنگاری برای سرویس‌های تولیدی به‌صورت متمرکز و
                  کنترل‌شده انجام می‌شود.
                </li>
              </ul>

              <h3
                id="endpoint-security"
                className="mt-6 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                امنیت نقاط انتهایی (Endpoint)
              </h3>

              <ul>
                <li>
                  تمام ایستگاه‌های کاری صادرشده برای کارکنان Metabase مطابق
                  استانداردهای امنیتی تعریف‌شده توسط شرکت پیکربندی می‌شوند.
                </li>
                <li>
                  این استانداردها شامل به‌روزرسانی منظم، پایش و ردیابی، و مدیریت
                  متمرکز نقاط انتهایی است.
                </li>
                <li>
                  ایستگاه‌های کاری به‌گونه‌ای پیکربندی می‌شوند که داده‌ها در
                  حالت استراحت رمزگذاری شده، رمزهای عبور قوی استفاده شود و
                  دستگاه در زمان عدم فعالیت قفل گردد.
                </li>
                <li>
                  نرم‌افزارهای پایش و ضدبدافزار به‌روز روی این دستگاه‌ها اجرا
                  می‌شوند تا تهدیدات احتمالی شناسایی شوند.
                </li>
              </ul>

              {/* Network & monitoring */}
              <h2
                id="network-security--system-monitoring"
                className="mt-12 mb-4 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-metabase-primary"
              >
                امنیت شبکه و پایش سامانه‌ها
              </h2>

              <h3
                id="network-security-and-server-hardening"
                className="mt-4 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                امنیت شبکه و سخت‌سازی سرورها
              </h3>

              <ul>
                <li>
                  Metabase سامانه‌های خود را در شبکه‌های جداگانه با فایروال‌های
                  مدرن و محدودکننده بخش‌بندی می‌کند تا از داده‌های حساس بهتر
                  محافظت شود.
                </li>
                <li>
                  محیط‌های تست و توسعه در شبکه‌ای جدا از زیرساخت تولید میزبانی
                  می‌شوند.
                </li>
                <li>
                  تمام سرورهای تولید مطابق با بنچمارک‌های استاندارد CIS سخت‌سازی
                  شده‌اند.
                </li>
                <li>
                  فراخوانی‌های سیستمی در زیرساخت تولید ثبت، پایش و ممیزی می‌شوند
                  و برای رویدادهایی که احتمال نفوذ یا خروج داده را نشان می‌دهند،
                  هشدار تعریف شده است.
                </li>
              </ul>

              <h3
                id="system-monitoring-logging-and-alerting"
                className="mt-6 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                پایش سامانه، ثبت رخداد و هشداردهی
              </h3>

              <ul>
                <li>
                  Metabase زیرساخت سرورها و ایستگاه‌های کاری را پایش می‌کند تا
                  دیدی جامع نسبت به وضعیت امنیتی سیستم‌ها به‌دست آورد.
                </li>
                <li>
                  دسترسی‌های مدیریتی، استفاده از دستورات سطح بالا و فراخوانی‌های
                  سیستمی در سرورهای تولید ثبت و پایش می‌شوند.
                </li>
                <li>
                  تحلیل خودکار روی لاگ‌ها انجام می‌شود تا رخدادهای مشکوک شناسایی
                  و به تیم‌های مسئول اطلاع داده شوند.
                </li>
              </ul>

              {/* DR & incident response */}
              <h2
                id="disaster-recovery--incident-response"
                className="mt-12 mb-4 scroll-mt-24 text-2xl sm:text-3xl font-extrabold text-metabase-primary"
              >
                بازیابی از حادثه و پاسخ به رخداد امنیتی
              </h2>

              <h3
                id="disaster-recover-and-business-continuity-plan"
                className="mt-4 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                برنامه تداوم کسب‌وکار و بازیابی از بحران
              </h3>

              <ul>
                <li>
                  Metabase از امکانات فراهم‌شده توسط ارائه‌دهندگان زیرساخت ابری
                  برای توزیع سرویس‌های تولیدی در چند منطقه در دسترس
                  (Availability Zones) استفاده می‌کند تا از اختلالات محلی مانند
                  قطعی برق یا شبکه در امان بماند.
                </li>
                <li>
                  پایگاه‌های داده اصلی به‌صورت روزانه پشتیبان‌گیری و در مناطق
                  مختلف تکرار می‌شوند و امکان بازیابی برای حفظ در دسترس‌بودن
                  سرویس در صورت بروز حادثه در یک سایت وجود دارد.
                </li>
                <li>
                  نسخه‌های کامل حداقل روزی یک‌بار ذخیره می‌شوند و تراکنش‌ها به
                  صورت پیوسته لاگ می‌شوند.
                </li>
                <li>
                  فرآیندهای پشتیبان‌گیری و بازیابی حداقل سالیانه آزمایش می‌شوند
                  تا اطمینان حاصل شود که در صورت نیاز، بازیابی موفقیت‌آمیز خواهد
                  بود.
                </li>
              </ul>

              <h3
                id="responding-to-security-incidents"
                className="mt-6 mb-3 scroll-mt-24 text-xl font-bold text-gray-900"
              >
                پاسخ به رخدادهای امنیتی
              </h3>

              <ul>
                <li>
                  Metabase سیاست‌ها و رویه‌های مشخصی برای رسیدگی به رخدادهای
                  امنیتی احتمالی تعریف کرده است.
                </li>
                <li>
                  تمام رخدادهای امنیتی توسط تیم پاسخ‌گویی به رخداد Metabase
                  مدیریت می‌شوند؛ این سیاست‌ها انواع رخدادهایی را که باید از
                  فرایند رسمی پاسخ‌گویی عبور کنند و همچنین سطوح شدت آن‌ها را
                  تعریف می‌کنند.
                </li>
                <li>
                  در صورت وقوع رخداد، مشتریان متأثر از طریق ایمیل و توسط تیم
                  موفقیت مشتری مطلع می‌شوند و فرایند پاسخ‌گویی حداقل سالیانه
                  بازبینی و آزمایش می‌شود.
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;
