"use client";
import Image from "next/image";
import React from "react";
import PricingPlanCard from "./PricingPlanCard";

type BillingMode = "monthly" | "annual";

const PricingGrid: React.FC = () => {
  const [billingMode, setBillingMode] = React.useState<BillingMode>("monthly");
  const [useCase, setUseCase] = React.useState<"bi" | "ea">("bi");

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
      {/* Use-case selector */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-600">
            <Image
              src="/images/icons/arrow-curvy_right.svg"
              alt=""
              width={24}
              height={24}
              className="h-4 w-auto rotate-180"
              aria-hidden="true"
            />
            <span className="font-bold">
              انتخاب کنید چگونه از متابیس استفاده می‌کنید
            </span>
            <Image
              src="/images/icons/arrow-curvy_right.svg"
              alt=""
              width={24}
              height={24}
              className="h-4 w-auto"
              aria-hidden="true"
            />
          </div>
          <div
            className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1"
            role="tablist"
            aria-label="حالت استفاده"
          >
            <button
              type="button"
              role="tab"
              aria-selected={useCase === "bi"}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                useCase === "bi"
                  ? "bg-white text-neutral-900 shadow"
                  : "text-neutral-600"
              }`}
              onClick={() => setUseCase("bi")}
            >
              هوش تجاری
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={useCase === "ea"}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                useCase === "ea"
                  ? "bg-white text-neutral-900 shadow"
                  : "text-neutral-600"
              }`}
              onClick={() => setUseCase("ea")}
            >
              آنالیتیکس تعبیه‌شده
            </button>
          </div>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm">
          <span className="text-sm font-medium text-neutral-600">ماهانه</span>
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
          <span className="text-sm font-medium text-neutral-600">سالانه</span>
          <span className="text-xs font-bold text-emerald-600">
            ۱۰٪ صرفه‌جویی
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <PricingPlanCard
          title="متن‌باز"
          description="مناسب برای توسعه‌دهندگان و تیم‌های کوچک با زیرساخت خودشان."
          isFree
          ctaLabel="راهنمای نصب"
          ctaHref="/start/oss"
          compareHref="#compare"
          theme="yellow"
          features={[
            { text: "نصب روی سرورهای خودتان" },
            { text: "بدون محدودیت سؤال، نمودار و داشبورد" },
            { text: "امکان تعبیه پایه با نشان «ساخته‌شده با متابیس»" },
            { text: "اتصال به پایگاه‌های داده پشتیبانی‌شده" },
          ]}
          logos={[
            { src: "/images/logos/pricing/dribble.png", alt: "Dribbble" },
            { src: "/images/logos/pricing/lago.png", alt: "Lago" },
            { src: "/images/logos/pricing/dub.png", alt: "Dub" },
            { src: "/images/logos/pricing/my-agro.png", alt: "myAgro" },
          ]}
          deploymentNote="استقرار خود-میزبان"
        />
        <PricingPlanCard
          title="استارتر"
          description="یک نمونهٔ مدیریت‌شده و پشتیبانی‌شده در متابیس کلاد."
          priceLabelMonthly="۱۰۰ دلار + ۶ دلار به‌ازای هر کاربر / ماه"
          priceLabelAnnual="۹۱۸ دلار + ۵۴ دلار به‌ازای هر کاربر / سال"
          billingMode={billingMode}
          usersIncludedNote="۵ کاربر اول شامل است"
          ctaLabel="شروع دورهٔ آزمایشی"
          ctaHref="https://store.metabase.com/checkout?plan=starter&use_case=bi"
          compareHref="#compare"
          theme="green"
          features={[
            { text: "استقرار ابری در منطقهٔ شما" },
            { text: "ارتقا، پشتیبان‌گیری و مانیتورینگ خودکار" },
            { text: "پشتیبانی ایمیلی سریع" },
          ]}
          logos={[{ src: "/images/logos/pricing/dub.png", alt: "Dub" }]}
          deploymentNote="استقرار ابری"
        />
        <PricingPlanCard
          title="پرو"
          description="ویژگی‌های بیشتر برای مدیریت کاربران زیاد و الزامات انطباق."
          priceLabelMonthly="۵۷۵ دلار + ۱۲ دلار به‌ازای هر کاربر / ماه"
          priceLabelAnnual="۵۴۰۰ دلار + ۱۰۸ دلار به‌ازای هر کاربر / سال"
          billingMode={billingMode}
          usersIncludedNote="۱۰ کاربر اول شامل است"
          ctaLabel="شروع دورهٔ آزمایشی"
          ctaHref="https://store.metabase.com/checkout?plan=pro&use_case=bi"
          compareHref="#compare"
          theme="blue"
          features={[
            { text: "تفکیک دادهٔ ریزدانه با مجوزهای سطر و ستون" },
            { text: "کنترل‌های پیشرفتهٔ کش برای داشبوردهای سریع‌تر" },
            { text: "مدیریت محیط (مرحله/تولید)" },
            { text: "تحلیل استفاده برای انطباق و ردیابی رفتار" },
            { text: "برندسازی کامل و بدون نشان «ساخته‌شده با Metabase»" },
            { text: "امکان تعبیهٔ تعاملی و چندمستاجره" },
          ]}
          logos={[{ src: "/images/logos/pricing/lago.png", alt: "Lago" }]}
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
