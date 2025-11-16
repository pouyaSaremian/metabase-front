"use client";

import React, { useRef, useEffect } from "react";

const PermissionsSection: React.FC = () => {
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
            مطمئن شوید مردم فقط آنچه را که نیاز دارند می‌بینند
          </h2>
          <p className="text-lg text-metabase-text-secondary mb-8">
            مجوزهای دقیق برای محافظت از مردم در برابر دیدن (یا خراب کردن) تصادفی
            چیزی که نباید ببینند، یا ارسال PII خام کاربر به یک ارائه همه‌دست
            شرکت.
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
                    محدود کردن دسترسی در سطح جدول، ردیف یا ستون
                  </b>
                  <p className="text-metabase-text-secondary">
                    جداول، فیلدها و ستون‌های حساس را قفل کنید در حالی که به مردم
                    اجازه می‌دهید از بقیه داده‌ها استفاده کنند.
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
                    مدیریت مجوزهای مبتنی بر نقش با SSO
                  </b>
                  <p className="text-metabase-text-secondary">
                    دید و مجوزهای مبتنی بر نقش را تنظیم کنید (مثلاً بازاریابی X
                    را می‌بیند، پشتیبانی Y را می‌بیند) با دسترسی جداگانه مشاهده
                    و ویرایش.
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
                    پیگیری اینکه چه کسی چه کاری انجام می‌دهد، چه زمانی
                  </b>
                  <p className="text-metabase-text-secondary">
                    حتی می‌توانید هشدارهایی برای نظارت بر دسترسی و دانلودها در
                    تجزیه و تحلیل استفاده خود تنظیم کنید.
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
            poster="/images/product/business-intelligence/permissions2.gif"
            muted
            loop
            playsInline
          >
            <source
              src="/images/product/business-intelligence/permissions2.mp4"
              type="video/mp4"
            />
            <source
              src="/images/product/business-intelligence/permissions2.webm"
              type="video/webm"
            />
            <p className="text-center p-4 text-metabase-text-secondary">
              برای مشاهده این ویدیو، لطفاً JavaScript را فعال کنید و مرورگر خود
              را به‌روزرسانی کنید که
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-metabase-primary underline"
              >
                از HTML5 video پشتیبانی کند
              </a>
            </p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default PermissionsSection;
