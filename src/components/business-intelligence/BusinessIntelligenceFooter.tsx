import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const BusinessIntelligenceFooter: React.FC = () => {
  return (
    <div className="bg-metabase-bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-4">
            آماده شروع هستید؟
          </h3>
          <p className="text-lg text-metabase-text-secondary mb-8 max-w-2xl mx-auto">
            داده‌های خود را در عرض چند دقیقه تجسم کنید. به هم‌تیمی‌های غیرفنی
            اجازه دهید داده‌ها را کاوش کنند و داشبوردهای تعاملی را به اشتراک
            بگذارند که مردم دوست دارند.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              href="https://store.metabase.com/checkout"
              variant="primary"
              size="lg"
              className="text-sm rounded-xl"
            >
              Metabase Cloud را رایگان امتحان کنید
            </Button>
            <Button
              href="/start/oss"
              variant="outline"
              size="lg"
              className="text-sm rounded-xl border-metabase-primary text-metabase-primary hover:bg-metabase-primary hover:text-white"
            >
              استقرار Metabase متن‌باز
            </Button>
          </div>

          {/* Selling Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-metabase-text-light">
            <span className="inline-flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                  stroke="#8d93a5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                  stroke="#8d93a5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              دوره آزمایشی رایگان 14 روزه
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#8d93a5"
                  strokeWidth="1.5"
                  d="M12 19.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5Z"
                />
                <path stroke="#8d93a5" strokeWidth="1.5" d="M12 8v4l2 2" />
              </svg>
              راه‌اندازی فوق‌العاده سریع
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 26 26" fill="#8d93a5">
                <path d="M12.7888232,0 C5.72701843,0 0,5.72623326 0,12.7903935 C0,18.4412506 3.664381,23.2347038 8.74677616,24.9259565 C9.38668842,25.0437318 9.61988344,24.6487921 9.61988344,24.3095993 C9.61988344,24.0065243 9.60889108,23.2017267 9.60260973,22.1346828 C6.04501164,22.9072885 5.29439063,20.419875 5.29439063,20.419875 C4.71258083,18.942188 3.87402097,18.5488187 3.87402097,18.5488187 C2.71275688,17.7557986 3.96195983,17.7715019 3.96195983,17.7715019 C5.24571019,17.8617963 5.92095503,19.0897997 5.92095503,19.0897997 C7.06180474,21.0440839 8.9148022,20.4795478 9.64343849,20.1521326 C9.75964341,19.3261354 10.0901993,18.7623845 10.4553026,18.4428209 C7.61534847,18.1201167 4.62935298,17.0224513 4.62935298,12.12143 C4.62935298,10.7254006 5.12793493,9.58298052 5.94608042,8.68945886 C5.81417212,8.36596947 5.37526298,7.06494541 6.07170736,5.30459782 C6.07170736,5.30459782 7.14503259,4.96069405 9.5884767,6.61582907 C10.6084105,6.33159811 11.7029352,6.19026779 12.7903935,6.18477161 C13.8770666,6.19026779 14.9708062,6.33159811 15.9923103,6.61582907 C18.4341841,4.96069405 19.505939,5.30459782 19.505939,5.30459782 C20.2039537,7.06494541 19.7650445,8.36596947 19.6339214,8.68945886 C20.4536372,9.58298052 20.9482933,10.7254006 20.9482933,12.12143 C20.9482933,17.035014 17.9575868,18.1161909 15.1089958,18.4326137 C15.5675342,18.8275535 15.9766069,19.6080109 15.9766069,20.8014669 C15.9766069,22.5107785 15.9609036,23.8903194 15.9609036,24.3095993 C15.9609036,24.6519328 16.1917431,25.0500132 16.8402922,24.9251714 C21.9187615,23.2299928 25.5800018,18.4396803 25.5800018,12.7903935 C25.5800018,5.72623326 19.8529834,0 12.7888232,0" />
              </svg>
              متن‌باز
            </span>
          </div>

          {/* Screenshot */}
          <div className="mt-12">
            <Image
              src="/images/product/business-intelligence/slanted-screenshot.png"
              alt="اسکرین‌شات برنامه"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligenceFooter;
