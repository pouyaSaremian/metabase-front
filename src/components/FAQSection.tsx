"use client";

import React from "react";
import Accordion, { AccordionItem } from "./common/Accordion";

const faqItems: AccordionItem[] = [
  {
    question: "عملکرد متابیس هنگام جاسازی (Embedded) در اپلیکیشن ما چگونه است؟",
    answer: (
      <p>
        متابیس برای سرعت بهینه شده و به‌صورت زنده روی داده‌های شما اجرا می‌شود؛
        بدون انتظار برای استخراج یا همگام‌سازی. نمودارها و داشبوردها سریع
        بارگذاری می‌شوند و عملکرد با زیرساخت شما مقیاس‌پذیر است.
      </p>
    ),
  },
  {
    question: "تا چه حد قابل سفارشی‌سازی است؟",
    answer: (
      <p>
        رابط و داشبوردهای تعاملی جاسازی‌شده را بدون کدنویسی برندسازی کنید و با
        ابزارهای کافی بدون پیچیدگی به‌جایی که می‌خواهید برسانید. از React SDK
        برای ساخت کامپوننت‌های تحلیلی سفارشی استفاده کنید که با UI شما یکپارچه
        شده و از تم‌دهی CSS پشتیبانی می‌کند.
      </p>
    ),
  },
  {
    question:
      "آیا به اندازه کافی امن است تا مشتریان هرگز داده‌ همدیگر را نبینند؟",
    answer: (
      <p>
        بله. متابیس با انطباق‌های سطح بالا مانند SOC2 Type II، GDPR و CCPA
        به‌روز است. سطوح دسترسی دقیق، چندمستاجری (multi-tenancy)، آنالیتیکس مصرف
        و گزارش‌های ممیزی، و امکان میزبانی شخصی در دسترس است.
      </p>
    ),
  },
  {
    question: "می‌توانیم ساده شروع کنیم و بعداً به React SDK مهاجرت کنیم؟",
    answer: (
      <p>
        بله، و این مسیر رایجی است. Embedded Analytics JS روی React SDK ساخته شده
        تا بدون کدنویسی سریع بسازید و عرضه کنید، تقاضا را اعتبارسنجی کنید، و سپس
        برای تجربه یکپارچه‌تر و برندشده به SDK انتقال دهید.
      </p>
    ),
  },
];

const FAQSection: React.FC = () => {
  // JSON-LD for FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === "string" ? item.answer : undefined,
      },
    })),
  };

  return (
    <section className="m-0 mt-12 md:mt-24 p-0 select-none">
      <h4 className="text-center text-[30px] font-bold leading-[36px] mb-8">
        سوالات پرتکرار برای توسعه‌دهندگان
      </h4>
      <p className="mb-6 text-center text-[18px] leading-[26px]">
        برای اطلاعات بیشتر درباره نحوه کار و راه‌اندازی سریع، به مستندات مراجعه
        کنید یا راهنمای شروع سریع را ببینید.
      </p>
      <div className="mx-auto w-full max-w-[652px] bg-white border border-[#E4ECFB] rounded-[12px] px-6 py-6 md:px-6 md:py-6">
        <Accordion items={faqItems} className="" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default FAQSection;
