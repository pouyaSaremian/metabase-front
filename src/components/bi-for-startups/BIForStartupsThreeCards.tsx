import React from "react";

const BIForStartupsThreeCards: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: 5 minutes setup */}
          <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#509EE3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 15.25A7.25 7.25 0 1 0 8 .75a7.25 7.25 0 0 0 0 14.5Z"
                />
                <path
                  stroke="#509EE3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.25 4.75H7.375a1.625 1.625 0 1 0 0 3.25h1.25a1.625 1.625 0 1 1 0 3.25H5.75M8 3.75v.5M8 11.75v.5"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
              ابزار BI خود را در 5 دقیقه راه‌اندازی و پرس‌وجو کنید
            </h4>
            <p className="text-metabase-text-secondary">
              بدون نیاز به مهارت‌های فنی تخصصی. با هر چیزی که در پشته داده شما
              وجود دارد با تعدادی کانکتور داده ساده کار می‌کند.
            </p>
          </div>

          {/* Card 2: Host it yourself */}
          <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 15.25H11.25C12.3546 15.25 13.25 14.3546 13.25 13.25V5L9 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V13.25C0.75 14.3546 1.64543 15.25 2.75 15.25Z"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5.25H8.75V1"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.75 11.25H9.25"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.75 8.25H9.25"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
              خودتان میزبانی کنید—یا بگذارید ما برای شما انجام دهیم
            </h4>
            <p className="text-metabase-text-secondary">
              استقرار ابری containerized و multi-tenant امنیت را در اولویت قرار
              می‌دهد. در منطقه نزدیک به شما میزبانی می‌شود تا نرم‌افزار هوش
              تجاری و مدیریت داده شما نزدیک باشد.
            </p>
          </div>

          {/* Card 3: SOC 2 Compliant */}
          <div className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 15.2502H5.25C5.80229 15.2502 6.25 14.8025 6.25 14.2502V1.75C6.25 1.19772 5.80229 0.75 5.25 0.75H1.75C1.19772 0.75 0.75 1.19772 0.75 1.75V14.2502C0.75 14.8025 1.19772 15.2502 1.75 15.2502Z"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.75 6.2502H14.25C14.8023 6.2502 15.25 5.80253 15.25 5.25025V1.75C15.25 1.19772 14.8023 0.75 14.25 0.75H10.75C10.1977 0.75 9.75 1.19772 9.75 1.75V5.25025C9.75 5.80253 10.1977 6.2502 10.75 6.2502Z"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.75 15.2502H14.25C14.8023 15.2502 15.25 14.8025 15.25 14.2502V10.75C15.25 10.1977 14.8023 9.75 14.25 9.75H10.75C10.1977 9.75 9.75 10.1977 9.75 10.75V14.2502C9.75 14.8025 10.1977 15.2502 10.75 15.2502Z"
                  stroke="#509EE3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
              مطابق با SOC 2 Type II برای استارتاپ‌ها
            </h4>
            <p className="text-metabase-text-secondary">
              انطباق سطح سازمانی با برچسب قیمتی که برای استارتاپ‌ها منطقی است.
              تصمیم‌گیری‌های کسب و کار هوشمندتر را در دست کل تیم خود قرار دهید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIForStartupsThreeCards;
