"use client";

import React from "react";
import Accordion from "@/components/common/Accordion";
import type { AccordionItem } from "@/components/common/Accordion";
import Link from "next/link";

const EmbeddedAnalyticsFAQ: React.FC = () => {
  const faqItems: AccordionItem[] = [
    {
      question: "Metabase هنگام تعبیه در برنامه ما چگونه عمل می‌کند؟",
      answer: (
        <p>
          Metabase برای سرعت بهینه شده است و به صورت زنده روی داده‌های شما اجرا
          می‌شود—بدون انتظار برای استخراج یا همگام‌سازی. نمودارها و داشبوردها به
          سرعت بارگذاری می‌شوند و عملکرد با زیرساخت شما مقیاس می‌شود.
        </p>
      ),
    },
    {
      question: "چقدر قابل سفارشی است؟",
      answer: (
        <p>
          نمودارها و داشبوردهای تعاملی تعبیه شده خود را با برچسب سفید بدون کد و
          ابزارهای کافی برای رسیدن به جایی که نیاز دارید بدون غرق شدن سفارشی
          کنید. از React SDK برای کامپوننت‌های تجزیه و تحلیل سفارشی که با رابط
          کاربری شما با گزینه‌های تم CSS یکپارچه می‌شوند استفاده کنید.
        </p>
      ),
    },
    {
      question:
        "آیا به اندازه کافی امن است تا اطمینان حاصل شود که مشتریان من هرگز داده‌های مشتری دیگری را نمی‌بینند؟",
      answer: (
        <p>
          کاملاً. Metabase با انطباق درجه یک، مانند SOC2 Type II، GDPR و CCPA
          به‌روز است. مجوزهای دقیق، چند مستأجره، تجزیه و تحلیل استفاده و لاگ‌های
          حسابرسی، و میزبانی خودی در دسترس است.
        </p>
      ),
    },
    {
      question: "آیا می‌توانیم ساده شروع کنیم و بعداً به React SDK منتقل شویم؟",
      answer: (
        <p>
          بله، و این یک مسیر رایج است. Embedded Analytics JS یک کتابخانه
          JavaScript ساخته شده بر روی React SDK است تا به سرعت با بدون کد بسازید
          و ارسال کنید، تقاضا را اعتبارسنجی کنید، سپس{" "}
          <Link
            href="/product/embedded-analytics-sdk"
            className="text-metabase-primary hover:underline"
          >
            برای تجربه یکپارچه‌تر و برند شده به SDK منتقل شوید
          </Link>
          . Metabase از هر دو گردش کار با حداقل اصطکاک پشتیبانی می‌کند.
        </p>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-2xl md:text-3xl font-bold text-metabase-text-primary mb-4">
          برای توسعه‌دهندگان: سوالات متداول
        </h4>
        <p className="text-lg text-metabase-text-secondary mb-8">
          برای اطلاعات بیشتر در مورد نحوه کار و راه‌اندازی سریع، به مستندات یا
          Quickstart مراجعه کنید.
        </p>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default EmbeddedAnalyticsFAQ;
