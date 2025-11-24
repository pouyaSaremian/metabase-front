"use client";

import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";

const bulletPoints = [
  {
    title: "بار مهندسی به‌مراتب کمتر از ساخت گزارش‌گیری داخلی",
    description:
      "دسترسی‌ها، ویرایش داشبوردها و اصلاح گزارش‌ها را به تیم داده یا همکاران غیر فنی بسپارید تا بدون درگیر کردن تیم توسعه پیش بروند.",
  },
  {
    title: "مقیاس‌پذیر هم‌زمان با رشد محصول شما",
    description:
      "از نمودارهای ساده شروع کنید، داشبوردهای تعاملی را تعبیه کنید یا در صورت نیاز به سراغ SDK بروید تا هر سطحی از سفارشی‌سازی را پوشش دهید.",
  },
  {
    title: "سازگار با هویت بصری و تجربه کاربری محصول",
    description:
      "با برندسازی کامل، استایل پویا و کنترل‌های تعاملی (از مشاهده صرف تا اکتشاف داده) تجربه‌ای همسو با محصول ارائه دهید.",
  },
];

const GridIcon: React.FC = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    aria-hidden="true"
  >
    <rect x="1" y="1" width="32" height="32" rx="16" fill="white" />
    <line
      x1="11.3496"
      y1="1.7998"
      x2="11.3496"
      y2="32.1998"
      stroke="#F1F2F4"
      strokeWidth="1.5"
    />
    <line
      x1="32.2002"
      y1="11.3501"
      x2="1.8002"
      y2="11.3501"
      stroke="#F1F2F4"
      strokeWidth="1.5"
    />
    <line
      x1="22.9502"
      y1="1.7998"
      x2="22.9502"
      y2="32.1998"
      stroke="#F1F2F4"
      strokeWidth="1.5"
    />
    <line
      x1="32.2002"
      y1="22.9502"
      x2="1.8002"
      y2="22.9502"
      stroke="#F1F2F4"
      strokeWidth="1.5"
    />
    <path
      d="M21.2002 11.1997H12.8002C11.9165 11.1997 11.2002 11.9161 11.2002 12.7997V21.1997C11.2002 22.0834 11.9165 22.7997 12.8002 22.7997H21.2002C22.0839 22.7997 22.8002 22.0834 22.8002 21.1997V12.7997C22.8002 11.9161 22.0839 11.1997 21.2002 11.1997Z"
      stroke="#509EE3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4004 16L16.4004 17.8L14.4004 19.6"
      stroke="#509EE3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="1"
      y="1"
      width="32"
      height="32"
      rx="16"
      stroke="#509EE3"
      strokeWidth="2"
    />
  </svg>
);

const EmbeddingCtaSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10 lg:flex-row">
          <article className="w-full  bg-metabase-bg-neutral-99 p-8 lg:w-1/2">
            <GridIcon />
            <h2 className="mt-5 text-2xl font-black leading-snug text-metabase-text-dark">
              آنالیتیکس در سطح تولید را بدون دردسر وارد محصول خود کنید
            </h2>
            <p className="mt-4 text-sm leading-7 text-metabase-text-light">
              داشبوردها، مصورسازی‌ها یا حتی تجربه کامل تحلیل سلف‌سرویس را در SaaS
              خود تعبیه کنید. بین iframe برای پیاده‌سازی سریع یا React SDK برای
              کنترل کامل انتخاب کنید.
            </p>
            <ul className="mt-6 list-disc space-y-4 pr-5 text-sm leading-7 text-metabase-text-dark">
              {bulletPoints.map((point) => (
                <li key={point.title}>
                  <span className="font-semibold text-metabase-text-dark">
                    {point.title}
                  </span>{" "}
                  <span className="text-metabase-text-light">
                    {point.description}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/product/embedded-analytics"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-metabase-primary-dark underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary-dark/30 rounded-sm"
            >
              درباره تعبیه متابیس در محصول بیشتر بدانید
              <ChevronLeft
                size={20}
                strokeWidth={2}
                className="text-metabase-primary-dark"
                aria-hidden="true"
              />
            </Link>
          </article>

          <div className="w-full overflow-hidden rounded-3xl bg-metabase-bg-neutral-96 p-3 lg:w-1/2">
            <video
              className="w-full rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/home/Sincera.gif"
              preload="auto"
            >
              <source src="/images/home/Sincera.mp4" type="video/mp4" />
              <source src="/images/home/Sincera.webm" type="video/webm" />
              <p className="p-4 text-sm text-metabase-text-light">
                برای مشاهده این ویدیو لطفاً مرورگر خود را به‌روزرسانی کنید و
                جاوااسکریپت را فعال نگه دارید.
              </p>
            </video>
            <span className="sr-only">
              پیش‌نمایش تجربه تعبیه‌شده متابیس در محصول Sincera
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbeddingCtaSection;

