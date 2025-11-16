import React from "react";

const ThreeCardsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1: Open source and scalable */}
        <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75Z"
                stroke="#509ee3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.75 10.75L11.25 13L8.75 15.25"
                stroke="#509ee3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
            متن‌باز و مقیاس‌پذیر
          </h4>
          <p className="text-metabase-text-secondary">
            از پیش‌بذر تا عرضه اولیه عمومی، با قیمت‌گذاری که برای استارتاپ‌ها
            منطقی است.
          </p>
        </div>

        {/* Card 2: Self-host or deploy on Metabase Cloud */}
        <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 8L12.5 4.75L19.75 8L12.5 11.25L5.25 8Z"
                stroke="#509ee3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 16L12.5 19.25L19.75 16"
                stroke="#509ee3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.75 8V16"
                stroke="#509ee3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 8V16"
                stroke="#509ee3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 11.5V19"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
            میزبانی خودی یا استقرار در Metabase Cloud
          </h4>
          <p className="text-metabase-text-secondary">
            با ابر قدرتمند ما بدون نیاز به دسترسی، خودتان میزبانی کنید، یا حتی
            Metabase خود را air-gap کنید.
          </p>
        </div>

        {/* Card 3: Secure data sharing */}
        <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.003 4.75 4.753 8s-.75 11.25 7.25 11.25S19.253 8 19.253 8l-7.25-3.25Z"
              />
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m9.75 12.75 1.25 1.5 3.25-4.5"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
            اشتراک‌گذاری امن داده
          </h4>
          <p className="text-metabase-text-secondary">
            از لایه‌های ETL و مدل‌سازی برای شروع سریع و بدون دردسر صرف نظر کنید.
            وقتی آماده شدید، ساختار را اضافه کنید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsSection;
