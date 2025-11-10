"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface ReadyToGetStartedSectionProps {
  className?: string;
}

const ReadyToGetStartedSection: React.FC<ReadyToGetStartedSectionProps> = ({
  className = "",
}) => {
  const [animationData, setAnimationData] = useState<Record<
    string,
    unknown
  > | null>(null);

  useEffect(() => {
    // Load animation data
    const loadAnimation = async () => {
      try {
        const response = await fetch("/images/animations/ready-frame.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      }
    };

    loadAnimation();
  }, []);

  return (
    <section
      className={`container mx-auto px-4 py-12 lg:py-16 text-center ${className} select-none`}
      aria-labelledby="ready-to-get-started-title"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="relative flex flex-col bg-metabase-primary rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
            {/* Content Overlay - Absolutely positioned and centered */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
              style={{
                height: "9.375rem",
                width: "100%",
                margin: "auto",
              }}
            >
              <h3
                id="ready-to-get-started-title"
                className="text-white font-bold mb-2 md:mb-4"
                style={{ fontSize: "1.875rem", lineHeight: "1.11" }}
              >
                آماده شروع هستید؟
              </h3>
              <p
                className="text-metabase-blue-85 mb-6 md:mb-8 mt-2"
                style={{ fontSize: "1.13rem", lineHeight: "1.4" }}
              >
                همین حالا شروع کنید و راه‌اندازی کنید.
              </p>
              <a
                href="https://store.metabase.com/checkout"
                className="inline-block px-8 py-3 bg-metabase-blue-25 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#071b2c] focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="شروع کنید - رفتن به صفحه خرید"
              >
                شروع کنید
              </a>
            </div>

            {/* Lottie Animation Container */}
            <div className="relative w-full h-full pt-16 md:pt-0 rounded-2xl overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  maskImage: "radial-gradient(circle, white, black)",
                  WebkitMaskImage: "radial-gradient(circle, white, black)",
                }}
              >
                <div className="relative w-full h-full">
                  {animationData && (
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      autoplay={true}
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;
