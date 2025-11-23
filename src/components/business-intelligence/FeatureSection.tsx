"use client";

import React, { useRef, useEffect } from "react";

interface FeatureItem {
  text: string;
  bold: boolean;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  items: FeatureItem[];
  videoSrc: string;
  videoPoster: string;
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  items,
  videoSrc,
  videoPoster,
  reverse = false,
}) => {
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
          } else if (!entry.isIntersecting && videoElement) {
            videoElement.pause();
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
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-metabase-text-primary mb-6">
              {title}
            </h2>
            <p className="text-base md:text-lg text-metabase-text-secondary mb-6">
              {description}
            </p>

            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-metabase-primary mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    {item.bold ? (
                      <span className="font-bold text-metabase-text-primary">
                        {item.text}
                      </span>
                    ) : (
                      <span className="text-metabase-text-secondary">
                        {item.text}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={reverse ? "lg:order-1" : ""}>
            <div className="relative w-full rounded-lg h-full overflow-hidden bg-white border border-metabase-border-light shadow">
              <video
                ref={videoRef}
                className="w-full rounded-lg"
                poster={videoPoster}
                muted
                playsInline
                loop
              >
                <source src={videoSrc} type="video/mp4" />
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
  );
};

export default FeatureSection;
