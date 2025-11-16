"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface TestimonialProps {
  text: string;
  author: string;
  company: string;
  authorImage: string;
  companyImage: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  company,
  authorImage,
  companyImage,
}) => {
  return (
    <blockquote className="mt-8">
      <p className="text-lg text-metabase-text-primary mb-6 leading-relaxed">
        {text}
      </p>
      <footer className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={authorImage}
            alt={author}
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
            loading="lazy"
          />
          <Image
            src={companyImage}
            alt={company}
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-semibold text-metabase-text-primary">{author}</p>
          <p className="text-sm text-metabase-text-secondary">{company}</p>
        </div>
      </footer>
    </blockquote>
  );
};

const ProofOfConceptSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6">
            به سرعت به اثبات مفهوم برسید
          </h2>
          <p className="text-lg text-metabase-text-secondary mb-6">
            به مشتریان خود اجازه دهید بدون نیاز به درخواست به گزارش‌ها دسترسی
            داشته باشند، چه در حال آماده شدن برای ورود به بازار باشید و چه در
            حال تکرار. سریع‌تر از انتخاب یک کتابخانه نمودار.
          </p>
          <Testimonial
            text="ویژگی تعبیه Metabase تیم ما را از زمان و سردرد زیادی نجات داده است! ما فقط باید یک قطعه کد را وصل می‌کردیم و به طور خودکار به یک داشبورد زیبا متصل می‌شد که توسط اعضای غیر مهندسی تیم نگهداری می‌شود!"
            author="Fadee Kannah"
            company="CTO در CourseKey"
            authorImage="/images/case-studies/testimonials/fadee-kanah-with-border.png"
            companyImage="/images/logos/coursekey-square.png"
          />
        </div>
        <div>
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-lg"
            autoPlay
            muted
            playsInline
            loop
            poster="/images/product/embedded-analytics/fastsetup.gif"
          >
            <source
              src="/images/product/embedded-analytics/fastsetup.mp4"
              type="video/mp4"
            />
            <source
              src="/images/product/embedded-analytics/fastsetup.webm"
              type="video/webm"
            />
            <p className="text-center p-4">
              برای مشاهده این ویدیو، لطفاً JavaScript را فعال کنید و مرورگر خود
              را به‌روزرسانی کنید که
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                className="text-metabase-primary-dark underline mr-1"
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

export default ProofOfConceptSection;
