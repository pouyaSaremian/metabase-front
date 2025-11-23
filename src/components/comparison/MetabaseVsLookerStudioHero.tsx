"use client";

import React, { useRef, useEffect } from "react";
import Button from "@/components/Button";

const MetabaseVsLookerStudioHero: React.FC = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-bold mb-6 text-2xl md:text-3xl lg:text-4xl text-metabase-text-primary">
              Metabase در مقابل Looker Studio
              <br />
              کدام برای تیم من مناسب است؟
            </h1>
            <p className="text-base md:text-lg text-metabase-text-secondary mb-8">
              Metabase ابزار هوش تجاری است که کار با داده، ساخت داشبوردهای زیبا
              و دریافت پاسخ را برای هر کسی در تیم شما آسان می‌کند - بدون نیاز به
              نوشتن کد.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://store.metabase.com/checkout?dwh=1"
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
                تماس با ما
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-metabase-border-light bg-white">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              playsInline
              loop
              poster="/images/product/google-sheets/google-sheets.gif"
            >
              <source
                src="/images/product/google-sheets/google-sheets.mp4"
                type="video/mp4"
              />
              {/* Fallback to gif if video format not supported */}
              <img
                src="/images/product/google-sheets/google-sheets.gif"
                alt="Metabase Google Sheets Integration"
                className="w-full h-full object-cover rounded-lg"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetabaseVsLookerStudioHero;
