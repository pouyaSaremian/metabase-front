"use client";

import React from "react";
import Accordion, { AccordionItem } from "./common/Accordion";

const defaultFaqItems: AccordionItem[] = [
  {
    question: "آیا نرم افزار متابیس فارسی بصورت آفلاین قابل اجراست؟",
    answer: (
      <p>
        بله. نرم افزار متابیس فارسی بصورت کامل بصورت آفلاین قابل اجرا می باشد و
        برای اجرا نیاز به هیچگونه ارتباط بیرونی جهت صحت سنجی نمودن توکن نخواهد
        داشت.لذا در محیط های کاملا ایزوله و بدون نیاز دسترسی به اینترنت قابلیت
        اجرا دارد.
      </p>
    ),
  },
  {
    question: "آیا متابیس فارسی قابل سفارشی سازی است؟",
    answer: (
      <p>
        بله. متابیس فارسی بصورت کامل قابل سفارشی سازی می باشد. تیم ما این امکان
        را فرآهم نموده است که در صورت نیاز سازمان شما برای سفارشی سازی نرم افزار
        پس از بررسی و امکان سنجی موارد ذکر شده بر روی نسخه ی اصلی توسعه داده شود
        و در اختیار شما قرار گیرد.
      </p>
    ),
  },
  {
    question:
      "آیا متابیس فارسی به اندازه کافی امن است تا مشتریان هرگز داده‌ همدیگر را نبینند؟",
    answer: (
      <p>
        بله. متابیس با انطباق‌های سطح بالا مانند SOC2 Type II، GDPR و CCPA
        به‌روز است. سطوح دسترسی دقیق، چندمستاجری (multi-tenancy)، آنالیتیکس مصرف
        و گزارش‌های ممیزی، و امکان میزبانی شخصی در دسترس است.
      </p>
    ),
  },
  {
    question:
      "آیا میتوان ابتدا با نرم افزار متابیس فارسی  شروع کرد و پس از بلوغ نیاز های سازمان به React SDK مهاجرت نمود؟",
    answer: (
      <p>
        بله. این یک مسیر متداول است. کتابخانه جاواسکریپت «Embedded Analytics JS»
        بر پایه React SDK توسعه یافته تا بتوانید به سرعت و بدون نیاز به کدنویسی
        راه‌حل خود را پیاده‌سازی و عرضه کنید، تقاضا را ارزیابی نمایید و سپس برای
        تجربه‌ی یکپارچه‌تر و دستیابی به داشبورد های کاملا شخصی سازی شده از SDK
        استفاده کنید. متابیس از هر دو گردش کار با کمترین تغییرات پشتیبانی
        می‌کند.
      </p>
    ),
  },
];

interface FAQSectionProps {
  items?: AccordionItem[];
  title?: string;
  description?: string;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  items = defaultFaqItems,
  title = "سوالات پرتکرار برای سازمان ها",
  className = "",
}) => {
  // Extract text from React elements for FAQ structured data
  const extractTextFromReactElement = (element: React.ReactNode): string => {
    if (typeof element === "string") return element;
    if (typeof element === "number") return String(element);
    if (!element || typeof element !== "object") return "";
    if (Array.isArray(element)) {
      return element.map(extractTextFromReactElement).join(" ");
    }
    if (
      "props" in element &&
      element.props &&
      typeof element.props === "object" &&
      "children" in element.props
    ) {
      return extractTextFromReactElement(
        element.props.children as React.ReactNode
      );
    }
    return "";
  };

  // JSON-LD for FAQPage
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => {
      const answerText = extractTextFromReactElement(item.answer);
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            answerText || (typeof item.answer === "string" ? item.answer : ""),
        },
      };
    }),
  };

  return (
    <section className={`m-0 mt-12 md:mt-24 p-0 select-none ${className}`}>
      <h4 className="text-center text-[30px] font-bold leading-[36px] mb-8">
        {title}
      </h4>
      <div className="mx-auto w-full max-w-[652px] bg-white border border-[#E4ECFB] rounded-[12px] px-6 py-6 md:px-6 md:py-6">
        <Accordion items={items} className="" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default FAQSection;
