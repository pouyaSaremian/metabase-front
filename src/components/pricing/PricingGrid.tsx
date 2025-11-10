/* eslint-disable react/button-has-type */
"use client";
import React from "react";
import PricingPlanCard from "./PricingPlanCard";

type BillingMode = "monthly" | "annual";

const PricingGrid: React.FC = () => {
  const [billingMode, setBillingMode] = React.useState<BillingMode>("monthly");

  const handleToggle = () => {
    setBillingMode((prev) => (prev === "monthly" ? "annual" : "monthly"));
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggle();
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-700">ماهانه</span>
          <button
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-neutral-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            role="switch"
            aria-checked={billingMode === "annual"}
            aria-label="تغییر صورت‌حساب ماهانه/سالانه"
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                billingMode === "annual" ? "translate-x-6" : "-translate-x-1"
              }`}
            />
          </button>
          <span className="text-sm text-neutral-700">سالانه</span>
          <span className="text-xs text-neutral-500 mr-2">۱۰٪ صرفه‌جویی</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        <PricingPlanCard
          title="متن‌باز"
          description="مناسب برای توسعه‌دهندگان و تیم‌های کوچک با زیرساخت خودشان."
          isFree
          ctaLabel="راهنمای نصب"
          ctaHref="/start/oss"
          compareHref="#compare"
          theme="gray"
          features={[
            { text: "نصب روی سرورهای خودتان" },
            { text: "بدون محدودیت سؤال، نمودار و داشبورد" },
            { text: "امکان تعبیه پایه با نشان «ساخته‌شده با متابیس»" },
            { text: "اتصال به پایگاه‌های داده پشتیبانی‌شده" },
          ]}
          logos={[{ src: "/logo.svg", alt: "نمونه لوگو" }]}
          deploymentNote="استقرار خود-میزبان"
        />

        <PricingPlanCard
          title="استارتر"
          description="یک نمونهٔ مدیریت‌شده و پشتیبانی‌شده در متابیس کلاد."
          priceLabelMonthly="۱۰۰ دلار + ۶ دلار به‌ازای هر کاربر / ماه"
          priceLabelAnnual="۹۱۸ دلار + ۵۴ دلار به‌ازای هر کاربر / سال"
          billingMode={billingMode}
          usersIncludedNote="۵ کاربر اول شامل است"
          ctaLabel="شروع دوره آزمایشی"
          ctaHref="https://store.metabase.com/checkout?plan=starter&use_case=bi"
          compareHref="#compare"
          theme="green"
          features={[
            { text: "استقرار ابری در منطقهٔ شما" },
            { text: "ارتقا، پشتیبان‌گیری و مانیتورینگ خودکار" },
            { text: "پشتیبانی ایمیلی سریع" },
          ]}
          logos={[{ src: "/logo.svg", alt: "نمونه لوگو" }]}
          deploymentNote="استقرار ابری"
        />

        <PricingPlanCard
          title="پرو"
          description="ویژگی‌های بیشتر برای مدیریت کاربران زیاد و الزامات انطباق."
          priceLabelMonthly="۵۷۵ دلار + ۱۲ دلار به‌ازای هر کاربر / ماه"
          priceLabelAnnual="۵۴۰۰ دلار + ۱۰۸ دلار به‌ازای هر کاربر / سال"
          billingMode={billingMode}
          usersIncludedNote="۱۰ کاربر اول شامل است"
          ctaLabel="شروع دوره آزمایشی"
          ctaHref="https://store.metabase.com/checkout?plan=pro&use_case=bi"
          compareHref="#compare"
          theme="blue"
          features={[
            { text: "تفکیک دادهٔ ریزدانه با مجوزهای سطر و ستون" },
            { text: "کنترل‌های پیشرفتهٔ کش برای داشبوردهای سریع‌تر" },
            { text: "مدیریت محیط (مرحله/تولید)" },
            { text: "آنالیتیکس استفاده برای انطباق و ردیابی رفتار" },
            { text: "برندسازی سفید و بدون نشان «Powered by Metabase»" },
            { text: "امکان تعبیهٔ تعاملی و چندمستاجره" },
          ]}
          logos={[{ src: "/logo.svg", alt: "نمونه لوگو" }]}
          deploymentNote="ابری یا خود-میزبان"
        />

        <PricingPlanCard
          title="سازمانی"
          description="کمک در فرایند تدارکات و دسترسی به خدمات حرفه‌ای."
          customPricingNote="قیمت‌گذاری سفارشی"
          usersIncludedNote="شروع از ۲۰هزار دلار در سال"
          ctaLabel="گفت‌وگو با تیم فروش"
          ctaHref="/sales?plan=enterprise"
          compareHref="#compare"
          theme="purple"
          features={[
            { text: "کمک در فرایند تدارکات — بدون نیاز به کارت" },
            { text: "مهندس موفقیت اختصاصی با SLA یک‌روزه" },
            { text: "مناسب نمونه‌های بزرگ با کاربران فراوان" },
            { text: "گزینهٔ Air-gapped یا میزبانی تک‌مستاجره" },
            { text: "دسترسی به خدمات حرفه‌ای در صورت نیاز" },
          ]}
          logos={[{ src: "/logo.svg", alt: "نمونه لوگو" }]}
          deploymentNote="ابری یا خود-میزبان"
        />
      </div>
    </div>
  );
};

export default PricingGrid;
