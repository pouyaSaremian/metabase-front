import React from "react";
import Link from "next/link";

const WorksWithStackSection: React.FC = () => {
  const cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            stroke="#509EE3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.782 19.25h7.436c.565 0 1.009-.468.896-1.021C13.804 16.7 12.79 14 9.5 14s-4.304 2.701-4.615 4.229c-.112.553.332 1.021.897 1.021ZM15.75 14c2.079 0 2.93 2.148 3.274 3.696.185.836-.49 1.554-1.347 1.554h-.927M9.5 10.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM14.75 10.25c1.519 0 2.5-1.231 2.5-2.75s-.981-2.75-2.5-2.75"
          />
        </svg>
      ),
      title: "با پایگاه داده و پشته شما یکپارچه می‌شود",
      description: (
        <>
          Metabase به{" "}
          <Link
            href="/data-sources"
            className="text-metabase-primary hover:underline"
          >
            20+ منبع داده
          </Link>{" "}
          متصل می‌شود، با تعبیه برای متناسب با هر چارچوب (SDK با React کار
          می‌کند، Embedded Analytics JS با همه چیز کار می‌کند).
        </>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            stroke="#509EE3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.782 19.25h7.436c.565 0 1.009-.468.896-1.021C13.804 16.7 12.79 14 9.5 14s-4.304 2.701-4.615 4.229c-.112.553.332 1.021.897 1.021ZM15.75 14c2.079 0 2.93 2.148 3.274 3.696.185.836-.49 1.554-1.347 1.554h-.927M9.5 10.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM14.75 10.25c1.519 0 2.5-1.231 2.5-2.75s-.981-2.75-2.5-2.75"
          />
        </svg>
      ),
      title: "متن‌باز، قابلیت اطمینان اثبات شده",
      description:
        "هیچ جعبه سیاه یا وابستگی به فروشنده وجود ندارد. پشتیبانی شده توسط یک جامعه قوی. هر زمان که بخواهید زیر کاپوت را ببینید.",
    },
    {
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
      title: "میزبانی خودی یا ابر",
      description: (
        <>
          کنترل داده‌ها و استقرار خود را حفظ کنید. یا وظایف میزبانی را با{" "}
          <Link href="/cloud" className="text-metabase-primary hover:underline">
            استقرار ابر قدرتمند ما
          </Link>{" "}
          به ما بسپارید.
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-4">
          با پشته شما برای تجسم‌ها و گزارش‌های زنده کار می‌کند، نه استخراج‌ها
        </h3>
        <p className="text-lg text-metabase-text-secondary mb-12">
          داده‌های شما در پایگاه داده شما باقی می‌ماند—Metabase آن را جذب
          نمی‌کند، ذخیره نمی‌کند یا به‌روزرسانی نمی‌کند.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-right"
            >
              <div className="mb-4">{card.icon}</div>
              <h4 className="text-xl font-bold text-metabase-text-primary mb-3">
                {card.title}
              </h4>
              <p className="text-metabase-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksWithStackSection;
