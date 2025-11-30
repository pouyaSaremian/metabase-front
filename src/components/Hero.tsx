import React from "react";
import VideoPlayer from "./VideoPlayer";
import CTAButtons from "./CTAButtons";
import ArrowSection from "./ArrowSection";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-metabase-bg-neutral-98 ${className} py-8`}
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* Main Hero Section */}
      <div className="container mx-auto px-4 pt-4 lg:pt-13">
        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <h1 className="text-base lg:text-xl xl:text-2xl font-bold text-metabase-text-light mb-2 leading-relaxed">
            <span className="flex items-center justify-center gap-3 text-gray-600 text-6xl py-4 font-medium">
              <Image
                src="/images/metabase-icon.svg"
                alt="Metabase Icon"
                width={70}
                height={70}
                className="inline-block"
              />
              متابیس
            </span>
            همگانی سازی{" "}
            <span className="text-metabase-primary-dark">هوش تجاری</span> در
            سازمان شما
          </h1>

          {/* Description Badge with Enhanced Design */}
          <div className="inline-flex items-center justify-center px-4 py-2 mb-12 rounded-xl  bg-metabase-primary-lighter/30">
            <div className="flex items-center gap-3">
              <p className="text-xs font-light text-metabase-primary-dark">
                <strong>پلتفرم هوش تجاری</strong> متن‌باز با{" "}
                <strong className="font-bold">
                  پشتیبانی کامل از زبان فارسی
                </strong>
              </p>
            </div>
          </div>

          {/* Main Content with SEO and Enhanced Typography */}
          <article className="max-w-4xl mx-auto mb-8">
            <div className="row justify-center">
              <div className="col-xs-12 col-md-10 col-lg-9">
                <p
                  className="text-sm lg:text-base leading-relaxed text-metabase-text-light mb-6 text-justify"
                  itemProp="description"
                >
                  <strong className="text-metabase-primary-dark font-bold">
                    متابیس
                  </strong>{" "}
                  یک{" "}
                  <strong className="text-metabase-text-light font-bold">
                    پلتفرم هوش تجاری (Business Intelligence)
                  </strong>{" "}
                  پیشرفته است که انقلابی در{" "}
                  <strong className="text-metabase-text-light font-bold">
                    دسترسی و تحلیل داده‌ها
                  </strong>{" "}
                  ایجاد کرده است. این پلتفرم با ارائه{" "}
                  <strong className="text-metabase-text-light font-bold">
                    داشبورد تحلیلی قدرتمند
                  </strong>{" "}
                  بر روی داده‌ های کلان، امکان{" "}
                  <strong className="text-metabase-primary-dark font-bold">
                    کشف، تحلیل و مصورسازی اطلاعات
                  </strong>{" "}
                  را برای تمامی ذینفعان سازمان٬ از{" "}
                  <strong className="text-metabase-text-light font-bold">
                    تحلیل‌گران داده
                  </strong>{" "}
                  تا{" "}
                  <strong className="text-metabase-text-light font-bold">
                    مدیران کسب‌وکار
                  </strong>
                  ٬ بدون نیاز به تسلط بر{" "}
                  <strong className="text-metabase-primary-dark font-bold">
                    زبان‌های Query نویسی
                  </strong>{" "}
                  فراهم می‌سازد.
                </p>
              </div>
            </div>

            {/* SEO Metadata (Hidden but accessible to search engines) */}
            <div
              className="sr-only"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">متابیس</span>
              <span itemProp="description">
                پلتفرم هوش تجاری متن‌باز با پشتیبانی کامل از زبان فارسی
              </span>
              <span itemProp="applicationCategory">
                Business Intelligence Software
              </span>
              <span itemProp="operatingSystem">Cross-platform</span>
              <span
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <span itemProp="price">0</span>
                <span itemProp="priceCurrency">USD</span>
              </span>
            </div>
          </article>

          {/* CTA Buttons */}
          <CTAButtons />

          {/* Arrow and Text Section */}
          <ArrowSection />
        </div>
      </div>

      {/* Video Section */}
      <div className="my-11 mt-0 flex items-center justify-center relative">
        {/* Background Image Wrapper */}
        <div
          id="stats-dashboard-background-img-wrapper"
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: "85%",
            maxWidth: "1000px",
          }}
        >
          <Image
            id="stats-dashboard-background-img"
            src="/images/illustration-2.svg"
            alt="متابیس فارسی"
            className="w-full -mt-[50px] h-auto"
            width={1000}
            height={1000}
          />
          <div
            id="stats-dashboard-background-img-gradient"
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, #fafbfe 0, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0) 85%, #fafbfe 100%)",
              zIndex: 2,
            }}
          />
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
      </div>
    </div>
  );
};

export default Hero;
