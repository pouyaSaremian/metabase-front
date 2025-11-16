import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const EmbeddedAnalyticsHeader: React.FC = () => {
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
                <g filter="url(#filter0_dd_3121_1075)">
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
                    y1="21.9001"
                    x2="12.1988"
                    y2="21.9001"
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
                  <g clipPath="url(#clip0_3121_1075)">
                    <path
                      d="M41.3449 21.7408H28.6574C27.3227 21.7408 26.2407 22.8227 26.2407 24.1574V36.8449C26.2407 38.1796 27.3227 39.2616 28.6574 39.2616H41.3449C42.6796 39.2616 43.7616 38.1796 43.7616 36.8449V24.1574C43.7616 22.8227 42.6796 21.7408 41.3449 21.7408Z"
                      fill="white"
                      stroke="#509EE3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.0732 28.9919L34.0941 31.7107L31.0732 34.4294"
                      stroke="#509EE3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_dd_3121_1075"
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
                      result="effect1_dropShadow_3121_1075"
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
                      result="effect1_dropShadow_3121_1075"
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
                      result="effect2_dropShadow_3121_1075"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_3121_1075"
                      result="effect2_dropShadow_3121_1075"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_3121_1075"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_3121_1075">
                    <rect
                      width="19"
                      height="19"
                      fill="white"
                      transform="translate(25.5 21)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-bold">تجزیه و تحلیل تعبیه شده</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-metabase-text-primary text-center mb-6">
            گزارش‌دهی درون محصول را در روزها، نه در اسپرینت‌ها دریافت کنید
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-metabase-text-secondary text-center mb-8 max-w-3xl mx-auto">
            ساخت دستی تجزیه و تحلیل هرگز آن چیزی نیست که فکر می‌کنید. تجزیه و
            تحلیل قابل تنظیم، انعطاف‌پذیر و مقیاس‌پذیر را در کسری از زمان، هزینه
            و اصطکاک تعبیه کنید. به سرعت به اثبات مفهوم برسید.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              href="https://store.metabase.com/checkout/embedding"
              variant="primary"
              size="lg"
              className="text-sm rounded-xl"
            >
              شروع کنید
            </Button>
            <Button
              href="/talk-to-a-person"
              variant="outline"
              size="lg"
              className="text-sm rounded-xl border-metabase-primary text-metabase-primary hover:bg-metabase-primary hover:text-white"
            >
              با ما تماس بگیرید
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
              <svg
                id=""
                className=""
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="#8d93a5"
              >
                <path d="M12.7888232,0 C5.72701843,0 0,5.72623326 0,12.7903935 C0,18.4412506 3.664381,23.2347038 8.74677616,24.9259565 C9.38668842,25.0437318 9.61988344,24.6487921 9.61988344,24.3095993 C9.61988344,24.0065243 9.60889108,23.2017267 9.60260973,22.1346828 C6.04501164,22.9072885 5.29439063,20.419875 5.29439063,20.419875 C4.71258083,18.942188 3.87402097,18.5488187 3.87402097,18.5488187 C2.71275688,17.7557986 3.96195983,17.7715019 3.96195983,17.7715019 C5.24571019,17.8617963 5.92095503,19.0897997 5.92095503,19.0897997 C7.06180474,21.0440839 8.9148022,20.4795478 9.64343849,20.1521326 C9.75964341,19.3261354 10.0901993,18.7623845 10.4553026,18.4428209 C7.61534847,18.1201167 4.62935298,17.0224513 4.62935298,12.12143 C4.62935298,10.7254006 5.12793493,9.58298052 5.94608042,8.68945886 C5.81417212,8.36596947 5.37526298,7.06494541 6.07170736,5.30459782 C6.07170736,5.30459782 7.14503259,4.96069405 9.5884767,6.61582907 C10.6084105,6.33159811 11.7029352,6.19026779 12.7903935,6.18477161 C13.8770666,6.19026779 14.9708062,6.33159811 15.9923103,6.61582907 C18.4341841,4.96069405 19.505939,5.30459782 19.505939,5.30459782 C20.2039537,7.06494541 19.7650445,8.36596947 19.6339214,8.68945886 C20.4536372,9.58298052 20.9482933,10.7254006 20.9482933,12.12143 C20.9482933,17.035014 17.9575868,18.1161909 15.1089958,18.4326137 C15.5675342,18.8275535 15.9766069,19.6080109 15.9766069,20.8014669 C15.9766069,22.5107785 15.9609036,23.8903194 15.9609036,24.3095993 C15.9609036,24.6519328 16.1917431,25.0500132 16.8402922,24.9251714 C21.9187615,23.2299928 25.5800018,18.4396803 25.5800018,12.7903935 C25.5800018,5.72623326 19.8529834,0 12.7888232,0" />
              </svg>
              متن‌باز
            </span>
          </div>

          {/* Hero Images */}
          <div className="relative w-full mb-12">
            <Image
              src="/images/product/embedded-analytics/hero_image.png"
              alt="تجزیه و تحلیل تعبیه شده"
              width={1200}
              height={600}
              className="hidden md:block w-full h-auto rounded-lg"
              priority
            />
            <Image
              src="/images/product/embedded-analytics/hero_image_mobile.png"
              alt="تجزیه و تحلیل تعبیه شده موبایل"
              width={600}
              height={400}
              className="block md:hidden w-full h-auto rounded-lg"
              priority
            />
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

export default EmbeddedAnalyticsHeader;
