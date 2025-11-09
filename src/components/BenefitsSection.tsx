import React from "react";
import { DollarSign, Grid3x3, Users } from "lucide-react";

interface BenefitItemProps {
  title: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title }) => {
  return (
    <h3 className="text-xl lg:text-2xl font-bold text-metabase-primary-dark select-none group-hover/benefit:text-metabase-primary transition-colors duration-300">
      {title}
    </h3>
  );
};

interface BenefitsSectionProps {
  className?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  className = "",
}) => {
  const benefitsData = [
    {
      title: "صرفه‌جویی در هزینه و زمان",
      icon: DollarSign,
      items: [
        <>
          حذف <strong>هزینه‌های سنگین لایسنس</strong> سالیانه نرم‌افزارهای تجاری
        </>,
        <>
          کاهش وابستگی به <strong>تیم فنی</strong> برای{" "}
          <strong>گزارش‌گیری‌های روزمره</strong>
        </>,
        <>
          افزایش <strong>سرعت تحلیل داده</strong> و <strong>تصمیم‌گیری</strong>
        </>,
      ],
    },
    {
      title: "انعطاف‌پذیری و مقیاس‌پذیری",
      icon: Grid3x3,
      items: [
        <>
          استقرار در محیط‌های مختلف <strong>(On-Premise, Cloud, Hybrid)</strong>
        </>,
        <>
          <strong>مقیاس‌پذیری</strong> از استارتاپ‌ها تا{" "}
          <strong>سازمان‌های بزرگ</strong>
        </>,
        <>
          قابلیت <strong>سفارشی‌سازی</strong> بر اساس نیازهای خاص
        </>,
      ],
    },
    {
      title: "جامعه فعال جهانی",
      icon: Users,
      items: [
        <>
          پشتیبانی توسط <strong>جامعه‌ای از توسعه‌دهندگان</strong> در سراسر جهان
        </>,
        <>
          <strong>به‌روزرسانی مستمر</strong> و <strong>رفع سریع باگ‌ها</strong>
        </>,
        <>
          <strong>کتابخانه گسترده</strong> افزونه‌ها و قابلیت‌های اضاف
        </>,
      ],
    },
  ];

  return (
    <section
      className={`relative bg-metabase-bg-neutral-98 py-16 lg:py-24 select-none overflow-hidden ${className}`}
      aria-labelledby="benefits-section-title"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-metabase-primary-lighter opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-metabase-primary-lighter opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-metabase-primary mx-auto rounded-full"></div>
          </div>
          <h2
            id="benefits-section-title"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-metabase-primary-dark mb-4 select-none"
          >
            مزایای استفاده از متابیس
          </h2>
          <div className="w-24 h-1 bg-metabase-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="relative group/benefit">
              {/* Decorative Line */}
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-metabase-border-light hidden lg:block">
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 w-3 h-3 bg-metabase-primary rounded-full -mt-1.5"></div>
              </div>

              <div className="relative bg-white rounded-2xl border border-metabase-border-light p-8 lg:p-10 hover:border-metabase-primary-lighter transition-all duration-300 flex items-center flex-row-reverse gap-6 lg:gap-8 group/benefit">
                {/* Icon on the left - absolutely aligned */}
                <div className="relative shrink-0">
                  <div className=" bg-metabase-primary opacity-10 rounded-xl blur-lg group-hover/benefit:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center bg-metabase-bg-light border-2 border-metabase-primary-lighter rounded-xl group-hover/benefit:border-metabase-primary transition-all duration-300 group-hover/benefit:scale-110">
                    {React.createElement(benefit.icon, {
                      className:
                        "w-12 h-12 lg:w-16 lg:h-16 text-metabase-primary",
                      strokeWidth: 2,
                    })}
                  </div>
                </div>

                {/* Content on the right */}
                <div className="flex-1">
                  <BenefitItem title={benefit.title} />
                  <ul className="mt-6 lg:mt-8 space-y-4">
                    {benefit.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-4 text-base lg:text-lg text-metabase-text-light leading-relaxed group/item"
                      >
                        <div className="relative shrink-0 mt-1">
                          <div className="absolute inset-0 bg-metabase-primary opacity-10 rounded-full blur-sm group-hover/item:opacity-20 transition-opacity duration-300"></div>
                          <svg
                            className="relative w-5 h-5 text-metabase-primary shrink-0"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                            aria-hidden="true"
                          >
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </div>
                        <span className="select-none group-hover/item:text-metabase-text-secondary transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Bottom Element */}
              {index < benefitsData.length - 1 && (
                <div className="flex items-center justify-center mt-12 lg:mt-16">
                  <div className="flex items-center gap-4 w-full max-w-md">
                    <div className="flex-1 h-0.5 bg-metabase-border-light"></div>
                    <div className="w-2 h-2 bg-metabase-primary rounded-full"></div>
                    <div className="flex-1 h-0.5 bg-metabase-border-light"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
