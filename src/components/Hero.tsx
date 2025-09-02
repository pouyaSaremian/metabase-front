import React from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import CTAButtons from "./CTAButtons";
import ArrowSection from "./ArrowSection";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-b from-metabase-bg-neutral-98 to-white ${className}`}
    >
      {/* Main Hero Section */}
      <div className="container mx-auto px-4 pt-8 lg:pt-13">
        <div className="flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="font-bold mb-5 text-center text-3xl lg:text-4xl text-metabase-primary-darkest">
            تحلیل‌های منبع باز، استقرار سریع
          </h1>

          {/* Subtitle */}
          <div className="row justify-center">
            <div className="col-xs-12 col-md-10 col-lg-8">
              <p className="text-lg lg:text-xl text-metabase-text-secondary mb-6 text-center max-w-4xl mx-auto">
                به پایگاه داده خود متصل شوید برای هوش تجاری و تحلیل‌های تعبیه
                شده. بدون تیم پیاده‌سازی. بدون آموزش طولانی. بدون جهنم
                راه‌اندازی یا هزینه‌های پنهان. فقط گزارش‌هایی که کاربران تجاری
                شما می‌توانند اجرا کنند. SQL لازم نیست.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <CTAButtons />

          {/* Arrow and Text Section */}
          <ArrowSection />
        </div>
      </div>

      {/* Video Section */}
      <div className="my-11 mt-0 flex items-center justify-center relative">
        {/* Background Image */}
        <div className="absolute inset-0 max-w-7xl mx-auto">
          <Image
            id="stats-dashboard-background-img"
            src="/images/homepage-bridge@2x.png"
            alt="Bridge"
            fill
            className="object-cover -mt-12"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-metabase-bg-light via-transparent to-metabase-bg-light"></div>
        </div>

        {/* Video Container */}
        <div className="container flex justify-center relative z-10">
          <div className="row justify-center">
            <div className="col-xs-12 p-0 relative overflow-hidden w-full max-w-2xl">
              {/* Video Player Component */}
              <VideoPlayer />
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-metabase-bg-light to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
