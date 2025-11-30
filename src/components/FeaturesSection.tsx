import React from "react";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  backgroundIcon: React.ReactNode;
  features: React.ReactNode[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  backgroundIcon,
  features,
}) => {
  return (
    <article className="relative bg-metabase-blue-15 rounded-xl transition-all duration-300 h-full flex flex-col p-6 hover:-translate-y-1 overflow-hidden select-none">
      {/* Background Icon with Low Opacity */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-48 h-48 flex items-center justify-center">
          {backgroundIcon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="mb-4">
          <div className="mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-metabase-bg-blue-25">
            {icon}
          </div>
          <h3 className="text-base lg:text-lg font-bold text-metabase-white select-none">
            {title}
          </h3>
        </header>
        <ul className="flex-1 space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs lg:text-sm text-metabase-blue-85 leading-relaxed"
            >
              <svg
                className="w-4 h-4 text-metabase-primary shrink-0 mt-1.5"
                fill="currentColor"
                viewBox="0 0 8 8"
                aria-hidden="true"
              >
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="select-none">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  className = "",
}) => {
  const featuresData = [
    {
      title: "قابلیت‌های کلیدی متابیس",
      icon: (
        <svg
          className="w-6 h-6 text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      backgroundIcon: (
        <svg
          className="w-full h-full text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      features: [
        <>
          <strong>رابط کاربری بصری</strong> و بدون نیاز به{" "}
          <strong>کدنویسی</strong>
        </>,
        <>
          ساخت پرسش‌های پیچیده تنها با <strong>Drag & Drop</strong>
        </>,
        <>
          طراحی <strong>داشبوردهای تعاملی</strong> بدون نیاز به دانش{" "}
          <strong>برنامه‌نویسی</strong>
        </>,
        <>
          <strong>مصورسازی داده‌ها</strong> با <strong>کتابخانه جامع</strong>{" "}
          نمودارها و گراف‌ها
        </>,
      ],
    },
    {
      title: "پشتیبانی از پایگاه داده های متنوع",
      icon: (
        <svg
          className="w-6 h-6 text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      backgroundIcon: (
        <svg
          className="w-full h-full text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      features: [
        <>
          اتصال به <strong>پایگاه‌های داده رابطه‌ای</strong> منجمله{" "}
          <strong>PostgreSQL, MySQL, SQL Server, Oracle DB</strong>
        </>,
        <>
          یکپارچه‌سازی با <strong>انبارهای داده ابری</strong> منجمله{" "}
          <strong>BigQuery, Snowflake, Redshift</strong>
        </>,
        <>
          پشتیبانی از سرویس‌های مدرن <strong>MongoDB, Google Analytics</strong>
        </>,
      ],
    },
    {
      title: "مدیریت امنیت و دسترسی",
      icon: (
        <svg
          className="w-6 h-6 text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      backgroundIcon: (
        <svg
          className="w-full h-full text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      features: [
        <>
          کنترل دسترسی مبتنی بر نقش هر کاربر <strong>(RBAC)</strong>
        </>,
        <>
          کنترل دسترسی در سطح سطر و ستون جداول{" "}
          <strong>(Row-Level & Column-Level Security)</strong>
        </>,
        <>
          یکپارچه‌سازی با سیستم‌های احراز هویت مختلف از قبیل{" "}
          <strong>LDAP</strong> و <strong>SSO</strong>
        </>,
      ],
    },
    {
      title: "پشتیبانی کامل از زبان فارسی و محیط RTL",
      icon: (
        <svg
          className="w-6 h-6 text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
      backgroundIcon: (
        <svg
          className="w-full h-full text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
      features: [
        <>
          <strong>همگام سازی کامل</strong> نرم افزار با نسخه ی فارسی
        </>,
        <>
          <strong>ترجمه کامل</strong> تمامی المان های رابط کاربری به زبان فارسی
        </>,
        <>
          پشتیبانی از محیط <strong>راست‌به‌چپ (RTL)</strong> در تمامی بخش‌ها
        </>,
        <>
          <strong>مستندات فنی</strong> و راهنماهای کاربری به زبان فارسی
        </>,
      ],
    },
    {
      title: "قابلیت‌های ویژه فارسی",
      icon: (
        <svg
          className="w-6 h-6 text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      backgroundIcon: (
        <svg
          className="w-full h-full text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      features: [
        <>
          نمایش و <strong>پردازش داده‌های متنی فارسی</strong> با دقت کامل
        </>,
        <>
          <strong>جستجو و فیلتر پیشرفته</strong> برای محتوای فارسی
        </>,
        <>
          پشتیبانی از <strong>تاریخ و اعداد</strong> به فرمت فارسی
        </>,
        <>
          <strong>مرتب‌سازی صحیح</strong> متون فارسی در جداول و نمودارها
        </>,
      ],
    },
    {
      title: "بارگذاری CSV و تحلیل بدون پایگاه داده",
      icon: (
        <svg
          className="w-6 h-6 text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      backgroundIcon: (
        <svg
          className="w-full h-full text-metabase-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        <>
          <strong>بارگذاری مستقیم</strong> فایل‌های CSV و صفحات گسترده
        </>,
        <>
          ساخت <strong>مدل و داشبورد</strong> بدون نیاز به پایگاه داده
        </>,
        <>
          تحلیل داده‌ها و <strong>بینش‌گیری</strong> بدون نیاز به SQL
        </>,
        <>
          <strong>افزودن داده‌های جدید</strong> به مدل‌های موجود به صورت خودکار
        </>,
      ],
    },
  ];

  return (
    <section
      className={`bg-metabase-blue-25 py-12 lg:py-16 select-none ${className}`}
      aria-labelledby="features-section-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="features-section-title"
            className="text-xl lg:text-2xl xl:text-3xl font-normal text-metabase-white mb-4 select-none"
          >
            ویژگی‌ها و قابلیت‌های متابیس
          </h2>
          <p className="text-sm lg:text-base text-metabase-blue-85 max-w-3xl mx-auto select-none">
            پلتفرم جامع هوش تجاری با پشتیبانی کامل از زبان فارسی و محیط RTL
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              backgroundIcon={feature.backgroundIcon}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
