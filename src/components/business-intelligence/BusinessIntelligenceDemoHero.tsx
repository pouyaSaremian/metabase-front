"use client";

import React, { useRef, useEffect } from "react";
import Button from "@/components/Button";

const BusinessIntelligenceDemoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoElement) {
            videoElement.play().catch(() => {
              // Autoplay failed, user interaction required
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="font-bold mb-5 text-center text-2xl md:text-3xl lg:text-4xl text-metabase-text-primary max-w-4xl">
            در نهایت. یک ابزار هوش تجاری که <i>همه</i> می‌توانند استفاده کنند
          </h1>
          <div className="row justify-center w-full">
            <div className="col-xs-12 col-md-10 col-lg-8">
              <p className="text-base md:text-lg text-metabase-text-secondary mb-6 text-center">
                Metabase پلتفرم BI آسان برای استفاده با ابزارهای ساده برای اجرای
                گزارش‌های ad hoc، پرسیدن سوالات و ساخت داشبورد برای تصمیم‌گیری
                مبتنی بر داده است. حتی هم‌تیمی‌های غیرفنی شما می‌توانند داده را
                تجسم کنند و بینش ارائه دهند با یا بدون SQL یا تکیه بر تیم داده.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <Button
            href="https://store.metabase.com/checkout"
            variant="primary"
            size="lg"
            className="text-sm rounded-xl"
          >
            شروع کنید
          </Button>
        </div>
        <div className="mt-0 flex items-center justify-center relative">
          <div className="container flex justify-center w-full">
            <div className="row justify-center w-full">
              <div className="col-xs-12 p-0 relative overflow-hidden w-full">
                <video
                  ref={videoRef}
                  className="w-full rounded-3xl shadow-lg border border-metabase-border-light"
                  autoPlay
                  muted
                  playsInline
                  loop
                  poster="/images/landing-pages/hero-query-builder.gif"
                >
                  <source
                    src="/images/landing-pages/hero-query-builder.mp4"
                    type="video/mp4"
                  />
                  <p className="text-center p-4">
                    برای مشاهده این ویدیو لطفاً JavaScript را فعال کنید و مرورگر
                    خود را به‌روزرسانی کنید که
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
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligenceDemoHero;
