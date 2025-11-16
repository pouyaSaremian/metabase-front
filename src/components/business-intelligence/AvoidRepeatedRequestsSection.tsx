"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
}

const AvoidRepeatedRequestsSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features: Feature[] = [
    {
      id: "metabot",
      icon: (
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75 5.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1v-3.5ZM4.75 14.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1v-3.5ZM16.25 5v5M16.25 14v5"
            stroke="#509EE3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "از Metabot AI بپرسید",
      description: (
        <>
          <a
            href="/features/metabot-ai"
            className="text-metabase-primary hover:underline"
          >
            با پایگاه داده خود چت کنید
          </a>{" "}
          تا پاسخ‌ها را به زبان طبیعی دریافت کنید. این کار را برای هم‌تیمی‌های
          کمتر فنی شما آسان‌تر می‌کند تا داده‌ها را به صورت خودخدمت دریافت کنند.
        </>
      ),
      image:
        "/images/product/business-intelligence/avoid-repeated-requests-1.png",
      imageAlt: "Metabot AI",
    },
    {
      id: "drill-through",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6667 22.9999C19.2691 22.9999 23 19.269 23 14.6666C23 10.0642 19.2691 6.33325 14.6667 6.33325C10.0643 6.33325 6.33337 10.0642 6.33337 14.6666C6.33337 19.269 10.0643 22.9999 14.6667 22.9999Z"
            stroke="#509ee3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.6666 20.6667L25.6666 25.6667"
            stroke="#509ee3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6666 11.6667V17.6667"
            stroke="#509ee3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6666 14.6667H11.6666"
            stroke="#509ee3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "روی نمودارها کلیک کنید تا به داده‌ها نفوذ کنید",
      description:
        "منوهای drillthrough سوالات را پیش‌بینی می‌کنند، مانند «آیا می‌توانیم این را بر اساس سطح پلن تقسیم کنیم؟» یا «در مورد فقط کاربران ماه گذشته چطور؟» و بدون تشکیل کوئری جدید عمیق‌تر شوید. برای شما از قبل پیکربندی شده است.",
      image:
        "/images/product/business-intelligence/avoid-repeated-requests-2.png",
      imageAlt: "Drill-through",
    },
    {
      id: "sql-editor",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            stroke="#509ee3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.667 25.667h16.666c.737 0 1.334-.597 1.334-1.334V7.668c0-.737-.597-1.334-1.334-1.334H7.667c-.737 0-1.334.597-1.334 1.334v16.667c0 .736.597 1.333 1.334 1.333ZM25.667 12.333H7M25.667 19.667H7"
          />
        </svg>
      ),
      title: "داده‌ها را با یا بدون SQL کوئری کنید",
      description: (
        <>
          کوئری‌ها را به صورت بصری در{" "}
          <a
            href="/features/query-builder"
            className="text-metabase-primary hover:underline"
          >
            سازنده کوئری بصری
          </a>{" "}
          بدون نوشتن SQL کنار هم بگذارید. به کاربران قدرتمند اجازه دهید تجزیه و
          تحلیل پیچیده‌تری با{" "}
          <a
            href="/features/sql-editor"
            className="text-metabase-primary hover:underline"
          >
            ویرایشگر SQL
          </a>{" "}
          انجام دهند.
        </>
      ),
      image:
        "/images/product/business-intelligence/avoid-repeated-requests-3.png",
      imageAlt: "SQL editor",
    },
    {
      id: "collections",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <g fill="none" fillRule="evenodd">
            <path
              stroke="#509ee3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m16 7 9 5.276-9 5.276-9-5.276z"
            />
            <path
              stroke="#509EE3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.586 16 7 19.724 16 25l9-5.276L19.317 16"
            />
            <path d="M0 0h32v32H0z" />
          </g>
        </svg>
      ),
      title: "محتوای قابل اعتماد و آسان برای یافتن بسازید",
      description:
        "داشبوردها، مدل‌ها، متریک‌ها و سوالات را به عنوان رسمی علامت بزنید. محتوا را منظم و آسان برای یافتن در مجموعه‌ها نگه دارید.",
      image:
        "/images/product/business-intelligence/avoid-repeated-requests-4.png",
      imageAlt: "Collections and verified items",
    },
    {
      id: "alerts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <g fill="none" fillRule="evenodd">
            <path
              stroke="#509ee3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M23.966 16v-3.034a7.966 7.966 0 1 0-15.932 0V16L5 22.448h22L23.966 16Zm-12.518 7.207S11.448 27 16 27s4.552-3.793 4.552-3.793"
            />
            <path d="M0 0h32v32H0z" />
          </g>
        </svg>
      ),
      title: "باارزش‌ترین داده‌ها را در مقابل مردم قرار دهید",
      description:
        "گزارش‌ها را برای ارسال بدون نیاز به هیچ کسی (حتی خارج از سازمان شما) از طریق Slack یا ایمیل برنامه‌ریزی کنید. داده‌ها را با فعال کردن هشدارها در Slack، ایمیل و HTTP در زمان واقعی قابل اقدام کنید.",
      image:
        "/images/product/business-intelligence/avoid-repeated-requests-5.png",
      imageAlt: "Alerts",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-4">
            از درخواست‌های تکراری با گزارش‌هایی که هر کسی می‌تواند اجرا کند
            اجتناب کنید
          </h3>
          <p className="text-lg text-metabase-text-secondary max-w-2xl mx-auto">
            به مردم اجازه دهید بدون نیاز به کمک، عمیق‌تر به داده‌ها بپردازند.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  activeFeature === index
                    ? "bg-metabase-bg-blue-95 border-2 border-metabase-primary"
                    : "bg-white border border-metabase-border-light hover:border-metabase-primary"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold text-metabase-text-light mb-2 flex items-center gap-2">
                      {feature.id === "metabot" && "Metabot"}
                      {feature.id === "drill-through" && "Drill-through"}
                      {feature.id === "sql-editor" && "ویرایشگر SQL"}
                      {feature.id === "collections" &&
                        "مجموعه‌ها و موارد تأیید شده"}
                      {feature.id === "alerts" && "هشدارها"}
                    </h6>
                    <h4 className="text-xl font-bold text-metabase-text-primary mb-2">
                      {feature.title}
                    </h4>
                    <div className="text-metabase-text-secondary text-sm">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Display */}
          <div className="relative">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`transition-opacity duration-300 ${
                  activeFeature === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-metabase-text-primary mb-4">
            از درخواست‌های تکراری با گزارش‌هایی که هر کسی می‌تواند اجرا کند
            اجتناب کنید
          </h3>
          <p className="text-base text-metabase-text-secondary">
            به مردم اجازه دهید بدون نیاز به کمک، عمیق‌تر به داده‌ها بپردازند.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col-reverse md:flex-row-reverse gap-6"
            >
              <div className="flex-1">
                <h6 className="text-sm font-semibold text-metabase-text-light mb-2 flex items-center gap-2">
                  {feature.icon}
                  {feature.id === "metabot" && "Metabot"}
                  {feature.id === "drill-through" && "Drill-through"}
                  {feature.id === "sql-editor" && "ویرایشگر SQL"}
                  {feature.id === "collections" &&
                    "مجموعه‌ها و موارد تأیید شده"}
                  {feature.id === "alerts" && "هشدارها"}
                </h6>
                <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
                  {feature.title}
                </h4>
                <div className="text-metabase-text-secondary">
                  {feature.description}
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvoidRepeatedRequestsSection;
