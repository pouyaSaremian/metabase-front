"use client";
import React from "react";
import PricingPlanCard from "./PricingPlanCard";

const PricingGrid: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-metabase-border-light rounded-3xl mt-8">
        <PricingPlanCard
          title="‌Basic"
          description="مناسب برای توسعه‌دهندگان و تیم‌های کوچک با زیرساخت خودشان."
          ctaLabel="راهنمای نصب"
          className="border-l"
          ctaHref="/start/oss"
          compareHref="#compare"
          theme="yellow"
          features={[
            { text: "راستچین" },
            { text: "پشتیبانی کامل از زبان فارسی" },
            { text: "امکان تعریف تقویم جلالی" },
            { text: "امکانات کامل متابیس متن باز" },
          ]}
          deploymentNote="Docker - JAR"
        />

        <PricingPlanCard
          title="Pro"
          className="border-l"
          description="ویژگی‌های بیشتر برای مدیریت کاربران زیاد و الزامات انطباق."
          // priceLabelMonthly="۵۷۵ دلار + ۱۲ دلار به‌ازای هر کاربر / ماه"
          // priceLabelAnnual="۵۴۰۰ دلار + ۱۰۸ دلار به‌ازای هر کاربر / سال"
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
          deploymentNote="Docker - JAR"
        />
        <PricingPlanCard
          title="Pro + React SDK"
          description="کمک در فرایند تدارکات و دسترسی به خدمات حرفه‌ای."
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
          deploymentNote="Docker - JAR"
        />
      </div>
    </div>
  );
};

export default PricingGrid;
