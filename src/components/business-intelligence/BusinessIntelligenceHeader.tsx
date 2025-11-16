import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const BusinessIntelligenceHeader: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <header className="py-13 pt-20 pb-12">
          {/* Icon and Title Section */}
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center text-metabase-primary text-lg font-bold gap-3">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <g filter="url(#filter0_dd_297_697)">
                  <rect
                    x="7"
                    y="3"
                    width="56"
                    height="56"
                    rx="28"
                    fill="white"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="56"
                    height="56"
                    rx="28"
                    stroke="#E4ECFB"
                  />
                  <rect
                    x="11"
                    y="7"
                    width="48"
                    height="48"
                    rx="24"
                    fill="#EEF6FC"
                  />
                  <rect
                    x="11"
                    y="7"
                    width="48"
                    height="48"
                    rx="24"
                    stroke="#E4ECFB"
                  />
                  <line
                    x1="25.9023"
                    y1="8.19971"
                    x2="25.9023"
                    y2="53.7997"
                    stroke="#E4ECFB"
                  />
                  <line
                    x1="57.7988"
                    y1="21.9004"
                    x2="12.1988"
                    y2="21.9004"
                    stroke="#E4ECFB"
                  />
                  <line
                    x1="43.2988"
                    y1="8.19971"
                    x2="43.2988"
                    y2="53.7997"
                    stroke="#E4ECFB"
                  />
                  <line
                    x1="57.7988"
                    y1="39.3003"
                    x2="12.1988"
                    y2="39.3003"
                    stroke="#E4ECFB"
                  />
                  <path
                    d="M26 24.4166C26 23.0819 27.0819 22 28.4166 22H41.1034C42.4381 22 43.52 23.0819 43.52 24.4166V37.1034C43.52 38.4381 42.4381 39.52 41.1034 39.52H28.4166C27.0819 39.52 26 38.4381 26 37.1034V24.4166Z"
                    fill="white"
                    stroke="#509EE3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.8329 34.6871V28.0416"
                    stroke="#509EE3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.6871 34.6871V28.0416"
                    stroke="#509EE3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.76 34.6865V31.6658"
                    stroke="#509EE3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_297_697"
                    x="0.5"
                    y="0.5"
                    width="69"
                    height="69"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_297_697"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_297_697"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_297_697"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_297_697"
                      result="effect2_dropShadow_297_697"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_297_697"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="font-bold">هوش تجاری</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-metabase-text-primary text-center mb-6">
            سریع‌ترین راه برای تبدیل پایگاه داده به داشبورد
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-metabase-text-secondary text-center mb-8 max-w-3xl mx-auto">
            رابط کاربری تمیزی که هم‌تیمی‌های شما را نمی‌ترساند، حاکمیتی که همه
            چیز را در مسیر نگه می‌دارد، و ابزارهایی برای استفاده از SQL در صورت
            نیاز.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              href="https://store.metabase.com/checkout"
              variant="primary"
              size="lg"
              className="text-sm rounded-xl"
            >
              Metabase Cloud را رایگان امتحان کنید
            </Button>
            <Button
              href="/start/oss"
              variant="outline"
              size="lg"
              className="text-sm rounded-xl border-metabase-primary text-metabase-primary hover:bg-metabase-primary hover:text-white"
            >
              استقرار Metabase متن‌باز
            </Button>
          </div>

          {/* Selling Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-metabase-text-light">
            <span className="inline-flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                  stroke="#8d93a5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                  stroke="#8d93a5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              دوره آزمایشی رایگان 14 روزه
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#8d93a5"
                  strokeWidth="1.5"
                  d="M12 19.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5Z"
                />
                <path stroke="#8d93a5" strokeWidth="1.5" d="M12 8v4l2 2" />
              </svg>
              راه‌اندازی فوق‌العاده سریع
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 26 26" fill="#8d93a5">
                <path d="M12.7888232,0 C5.72701843,0 0,5.72623326 0,12.7903935 C0,18.4412506 3.664381,23.2347038 8.74677616,24.9259565 C9.38668842,25.0437318 9.61988344,24.6487921 9.61988344,24.3095993 C9.61988344,24.0065243 9.60889108,23.2017267 9.60260973,22.1346828 C6.04501164,22.9072885 5.29439063,20.419875 5.29439063,20.419875 C4.71258083,18.942188 3.87402097,18.5488187 3.87402097,18.5488187 C2.71275688,17.7557986 3.96195983,17.7715019 3.96195983,17.7715019 C5.24571019,17.8617963 5.92095503,19.0897997 5.92095503,19.0897997 C7.06180474,21.0440839 8.9148022,20.4795478 9.64343849,20.1521326 C9.75964341,19.3261354 10.0901993,18.7623845 10.4553026,18.4428209 C7.61534847,18.1201167 4.62935298,17.0224513 4.62935298,12.12143 C4.62935298,10.7254006 5.12793493,9.58298052 5.94608042,8.68945886 C5.81417212,8.36596947 5.37526298,7.06494541 6.07170736,5.30459782 C6.07170736,5.30459782 7.14503259,4.96069405 9.5884767,6.61582907 C10.6084105,6.33159811 11.7029352,6.19026779 12.7903935,6.18477161 C13.8770666,6.19026779 14.9708062,6.33159811 15.9923103,6.61582907 C18.4341841,4.96069405 19.505939,5.30459782 19.505939,5.30459782 C20.2039537,7.06494541 19.7650445,8.36596947 19.6339214,8.68945886 C20.4536372,9.58298052 20.9482933,10.7254006 20.9482933,12.12143 C20.9482933,17.035014 17.9575868,18.1161909 15.1089958,18.4326137 C15.5675342,18.8275535 15.9766069,19.6080109 15.9766069,20.8014669 C15.9766069,22.5107785 15.9609036,23.8903194 15.9609036,24.3095993 C15.9609036,24.6519328 16.1917431,25.0500132 16.8402922,24.9251714 C21.9187615,23.2299928 25.5800018,18.4396803 25.5800018,12.7903935 C25.5800018,5.72623326 19.8529834,0 12.7888232,0" />
              </svg>
              متن‌باز
            </span>
          </div>

          {/* Hero Images */}
          <div className="relative w-full mb-12">
            <Image
              src="/images/product/business-intelligence/hero.png"
              alt="هوش تجاری"
              width={1200}
              height={600}
              className="hidden md:block w-full h-auto rounded-lg"
              priority
            />
            <Image
              src="/images/product/business-intelligence/hero-mobile.png"
              alt="هوش تجاری"
              width={600}
              height={400}
              className="block md:hidden w-full h-auto rounded-lg"
              priority
            />
          </div>

          {/* Three Cards Section */}
          <div className="w-full mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Open source and scalable */}
              <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75Z"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75 10.75L11.25 13L8.75 15.25"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
                  متن‌باز و مقیاس‌پذیر
                </h4>
                <p className="text-metabase-text-secondary">
                  از پیش‌بذر تا عرضه اولیه عمومی، با قیمت‌گذاری که برای
                  استارتاپ‌ها منطقی است.
                </p>
              </div>

              {/* Card 2: Self-host or deploy on Metabase Cloud */}
              <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 8L12.5 4.75L19.75 8L12.5 11.25L5.25 8Z"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.25 16L12.5 19.25L19.75 16"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.75 8V16"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.25 8V16"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 11.5V19"
                      stroke="#509EE3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
                  میزبانی خودی یا استقرار در Metabase Cloud
                </h4>
                <p className="text-metabase-text-secondary">
                  با ابر قدرتمند ما بدون نیاز به دسترسی، خودتان میزبانی کنید، یا
                  حتی Metabase خود را air-gap کنید.
                </p>
              </div>

              {/* Card 3: Secure data sharing */}
              <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#509EE3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12.003 4.75 4.753 8s-.75 11.25 7.25 11.25S19.253 8 19.253 8l-7.25-3.25Z"
                    />
                    <path
                      stroke="#509EE3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m9.75 12.75 1.25 1.5 3.25-4.5"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
                  اشتراک‌گذاری امن داده
                </h4>
                <p className="text-metabase-text-secondary">
                  از لایه‌های ETL و مدل‌سازی برای شروع سریع و بدون دردسر صرف نظر
                  کنید. وقتی آماده شدید، ساختار را اضافه کنید.
                </p>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="w-full mb-12">
            <p className="text-center text-metabase-text-secondary mb-8 text-lg">
              بیش از 80,000 شرکت به Metabase اعتماد دارند
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
              {[
                {
                  src: "/images/logos/Huggingface.svg",
                  alt: "لوگوی Huggingface",
                },
                { src: "/images/logos/mcdonalds.svg", alt: "لوگوی McDonald's" },
                { src: "/images/logos/huma.svg", alt: "لوگوی Huma" },
                {
                  src: "/images/logos/capital-one.svg",
                  alt: "لوگوی Capital One",
                },
                { src: "/images/logos/home/airbyte.svg", alt: "لوگوی Airbyte" },
                {
                  src: "/images/logos/betterment.svg",
                  alt: "لوگوی Betterment",
                },
                {
                  src: "/images/logos/deutsche-telekom.svg",
                  alt: "لوگوی Deutsche Telekom",
                },
                { src: "/images/logos/kong.svg", alt: "لوگوی Kong" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="max-w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default BusinessIntelligenceHeader;
