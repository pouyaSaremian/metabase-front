"use client";

import React, { useRef, useEffect } from "react";
import Button from "@/components/Button";

const EmbeddedAnalyticsDemoHero: React.FC = () => {
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
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="font-bold mb-5 text-center text-2xl md:text-3xl lg:text-4xl text-metabase-text-primary max-w-4xl">
            تجزیه و تحلیل تعبیه شده قدرتمند را در روزها، نه sprintها دریافت کنید
          </h1>

          <div className="row justify-center w-full">
            <div className="col-xs-12 col-md-10 col-lg-8">
              <p className="text-base md:text-lg text-metabase-text-secondary mb-6 text-center">
                تجزیه و تحلیل مشتری‌محور قابل سفارشی‌سازی، انعطاف‌پذیر و
                مقیاس‌پذیر فقط یک snippet فاصله دارد. به مشتریان خود اجازه دهید
                داده را خودخدمات کنند، گزارش‌های ad hoc اجرا کنند، تجسم‌ها و
                داشبوردها ایجاد کنند، بدون ارسال درخواست.
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
          <Button
            href="/demo"
            variant="outline"
            size="lg"
            className="text-sm rounded-xl border-metabase-primary text-metabase-primary hover:bg-metabase-primary hover:text-white"
          >
            تماشای دمو
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
                  poster="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.gif"
                >
                  <source
                    src="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.mp4"
                    type="video/mp4"
                  />
                  {/* Fallback to gif if video format not supported */}
                  <img
                    src="/images/landing-pages/embedded-analytics/embedded_analytics-hero_animation.gif"
                    alt="Metabase Embedded Analytics Demo"
                    className="w-full rounded-3xl shadow-lg border border-metabase-border-light"
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

export default EmbeddedAnalyticsDemoHero;
