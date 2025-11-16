"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const QueryingSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Autoplay failed, user interaction required
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-4">
            می‌توانید 5 دقیقه دیگر در حال کوئری باشید
          </h2>
          <p className="text-lg text-metabase-text-secondary mb-8">
            بدون توجه به وضعیت پایگاه داده شما.
          </p>
          <ul className="space-y-6">
            <li>
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <b className="text-metabase-text-primary block mb-2">
                    شروع با تلاش کم
                  </b>
                  <p className="text-metabase-text-secondary">
                    پیکربندی خود را در یک فایل YAML بنویسید یا چیزهایی مانند
                    هدرهای ستون آزمایشی را مستقیماً در رابط کاربری پاک کنید.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <b className="text-metabase-text-primary block mb-2">
                    انتخاب آنچه نمایش می‌دهید
                  </b>
                  <p className="text-metabase-text-secondary">
                    جداولی را که نمایش می‌دهید انتخاب کنید، متادیتا را در رابط
                    کاربری ویرایش کنید تا از سلف سرویس پشتیبانی کند.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                      stroke="#509ee3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <b className="text-metabase-text-primary block mb-2">
                    شروع ساده قبل از اینکه اولین استخدام داده به تیم بپیوندد
                  </b>
                  <p className="text-metabase-text-secondary">
                    لایه‌های مدل‌سازی را با رشد داده‌هایتان و اضافه کردن افراد
                    بیشتر متمرکز بر داده پیکربندی کنید.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Video */}
        <div>
          <video
            ref={videoRef}
            className="w-full rounded-2xl shadow-lg"
            width="100%"
            poster="/images/home/query-builder.png"
            muted
            loop
            playsInline
          >
            <source src="/images/home/query-builder.mp4" type="video/mp4" />
            <source src="/images/home/query-builder.webm" type="video/webm" />
          </video>
          <p className="text-metabase-text-light text-sm mt-4 flex items-center gap-2">
            ببینید چقدر سریع و آسان است که از صفر به نمودار برسید
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4163 10.2554L7.20956 16.1204L1.5 12.6445"
                stroke="#8D93A5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.60556 14.3929C6.60556 14.3929 5.39062 12.8742 5.39062 6.19204C5.39062 -0.49012 13.8952 1.63598 13.8952 1.63598"
                stroke="#8D93A5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryingSection;
