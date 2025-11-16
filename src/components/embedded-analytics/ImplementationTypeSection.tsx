"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImplementationTypeSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-4">
            نوع پیاده‌سازی مناسب برای هر آنچه نیاز دارید
          </h3>
          <p className="text-lg text-metabase-text-secondary mb-6">
            با iframe، یک SDK با کامپوننت‌های React جداگانه، یا یک کتابخانه
            JavaScript ساخته شده با کامپوننت‌های SDK تعبیه کنید.
          </p>
          <Link
            href="/embedding-demo"
            className="inline-flex items-center gap-2 text-metabase-primary hover:underline font-semibold"
          >
            دموی زنده را بررسی کنید
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                opacity="0.9"
                d="M3 8.96338L16 21.9634L29 8.96338"
                stroke="#509ee3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="space-y-16">
          {/* Low-code Option */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
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
                <h6 className="text-lg font-bold text-metabase-text-primary">
                  کم‌کد
                </h6>
              </div>
              <h4 className="text-2xl font-bold text-metabase-text-primary mb-4">
                نمودارها و داشبوردهای تعاملی را با سربار کم مهندسی سریع تعبیه
                کنید
              </h4>
              <h5 className="text-xl font-semibold text-metabase-text-primary mb-6">
                مشتریان داده می‌خواهند. آن را از لیست خود بررسی کنید.
              </h5>
              <ul className="space-y-3 text-metabase-text-secondary mb-6">
                <li>
                  <strong className="text-metabase-text-primary">
                    راه‌اندازی در چند دقیقه
                  </strong>
                  — نیازهای گزارش‌دهی درون برنامه خود را اعتبارسنجی کنید.
                </li>
                <li>
                  <Link
                    href="/features/white-label-analytics"
                    className="text-metabase-primary hover:underline"
                  >
                    برچسب سفید با برند شما
                  </Link>
                  ، سفارشی‌سازی ناوبری و تجربه کاربری با یکپارچه‌سازی کم‌کد.
                </li>
                <li>
                  <strong className="text-metabase-text-primary">
                    محدود کردن کاوش
                  </strong>{" "}
                  با{" "}
                  <Link
                    href="/docs/latest/embedding/static-embedding"
                    className="text-metabase-primary hover:underline"
                  >
                    تعبیه استاتیک
                  </Link>
                  ، یا دسترسی کامل گزارش‌دهی با{" "}
                  <Link
                    href="/docs/latest/embedding/interactive-embedding"
                    className="text-metabase-primary hover:underline"
                  >
                    تعبیه تعاملی
                  </Link>
                  .
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/product/embedded-analytics/embed-with-iframes-or-sdk.png"
                alt="تعبیه تعاملی"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* SDK Option */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                    stroke="#509ee3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 8.75V19"
                    stroke="#509ee3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 8.25H19"
                    stroke="#509ee3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h6 className="text-lg font-bold text-metabase-text-primary">
                  SDK تجزیه و تحلیل تعبیه شده برای React
                </h6>
              </div>
              <h4 className="text-2xl font-bold text-metabase-text-primary mb-4">
                کنترل بیشتر، سفارشی‌سازی بیشتر
              </h4>
              <h5 className="text-xl font-semibold text-metabase-text-primary mb-6">
                از رقبا پیشی بگیرید و درآمد را با گزارش‌دهی به عنوان یک محصول
                افزایش دهید.
              </h5>
              <ul className="space-y-3 text-metabase-text-secondary mb-6">
                <li>
                  <strong className="text-metabase-text-primary">
                    تجربیات تجزیه و تحلیل سفارشی بسازید
                  </strong>{" "}
                  با یک جایگزین قدرتمند برای ساخت دستی گزارش‌دهی درون برنامه
                  خود. در کسری از زمان انجام شده است.
                </li>
                <li>
                  <strong className="text-metabase-text-primary">
                    تم و تعامل را سفارشی کنید
                  </strong>{" "}
                  برای هر کامپوننت، هر سازمان یا کاربر.
                </li>
                <li>
                  <strong className="text-metabase-text-primary">
                    UX را مدیریت کنید
                  </strong>{" "}
                  با رفتارهای سفارشی، موارد منو، جریان‌ها و فرمت‌ها.
                </li>
              </ul>
              <Link
                href="/product/embedded-analytics-sdk"
                target="_blank"
                className="inline-flex items-center gap-2 text-metabase-primary hover:underline font-semibold"
              >
                بیشتر درباره SDK تجزیه و تحلیل تعبیه شده بدانید
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    opacity="0.9"
                    d="M3 8.96338L16 21.9634L29 8.96338"
                    stroke="#509ee3"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="lg:order-1">
              <Image
                src="/images/product/embedded-analytics/more-control-more-customization.png"
                alt="کنترل بیشتر، سفارشی‌سازی بیشتر"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationTypeSection;
