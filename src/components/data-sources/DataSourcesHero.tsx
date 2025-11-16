"use client";

const DataSourcesHero: React.FC = () => {
  return (
    <section
      className="hero flex flex-col w-full py-16 md:py-[64px] md:pb-24"
      aria-labelledby="data-sources-heading"
    >
      <h2 className="text-metabase-primary text-2xl md:text-[24px] font-bold leading-8 md:leading-8 text-center mb-2 md:mb-0">
        منابع داده
      </h2>
      <h1
        id="data-sources-heading"
        className="text-3xl md:text-[36px] font-bold leading-10 md:leading-[40px] my-2 md:my-4 text-center text-metabase-text-primary"
      >
        ساخته شده برای همکاری با پشته شما
      </h1>
      <p className="text-metabase-text-secondary text-lg md:text-[18px] font-normal leading-6 md:leading-[26px] mx-auto max-w-[592px] text-center mt-0">
        Metabase با ابزارهایی که در حال حاضر استفاده می‌کنید سازگار است تا
        داده‌های شما را از جعبه سیاه به بینش‌های قابل دسترس تبدیل کند، در حالی
        که کنترل می‌کنید چه کسی چه چیزی را می‌بیند.
      </p>
    </section>
  );
};

export default DataSourcesHero;
