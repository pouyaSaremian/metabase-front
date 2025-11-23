import React from "react";
import Link from "next/link";

interface ComparisonRow {
  feature: string;
  competitor: boolean;
  metabase: boolean;
}

const comparisonRows: ComparisonRow[] = [
  { feature: "سوالات نامحدود", competitor: true, metabase: true },
  { feature: "نمودارها و گراف‌های نامحدود", competitor: true, metabase: true },
  { feature: "15+ نوع تجسم", competitor: true, metabase: true },
  {
    feature: "White-label برای مطابقت با برند شما",
    competitor: true,
    metabase: true,
  },
  {
    feature: "خدمات حرفه‌ای اختیاری برای onboarding و بیشتر",
    competitor: true,
    metabase: true,
  },
  {
    feature: "گزارش‌دهی خودکار از طریق اشتراک‌ها",
    competitor: true,
    metabase: true,
  },
  {
    feature: "اتصال به 20+ منبع داده، از جمله آپلود CSV",
    competitor: false,
    metabase: true,
  },
  { feature: "کمک فنی نامحدود", competitor: false, metabase: true },
  { feature: "تجزیه و تحلیل استفاده جامع", competitor: false, metabase: true },
  {
    feature: "گزینه‌های میزبانی مدیریت شده یا خودی انعطاف‌پذیر",
    competitor: false,
    metabase: true,
  },
  {
    feature: "قیمت‌گذاری شفاف و مقرون به صرفه",
    competitor: false,
    metabase: true,
  },
];

const CheckIcon: React.FC = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1994_4779)">
      <path
        clipRule="evenodd"
        d="M13.9132 2.85803C14.3906 2.38066 15.1646 2.38066 15.6419 2.85803C16.1193 3.3354 16.1193 4.10937 15.6419 4.58674L6.79055 13.4382C6.3132 13.9156 5.5392 13.9156 5.06185 13.4382L0.358029 8.73435C-0.119343 8.257 -0.119343 7.483 0.358029 7.00565C0.8354 6.52825 1.60937 6.52825 2.08674 7.00565L5.9262 10.8451L13.9132 2.85803Z"
        fillRule="evenodd"
        fill="#5a6072"
      />
    </g>
    <defs>
      <clipPath id="clip0_1994_4779">
        <rect fill="white" height="16" width="16" />
      </clipPath>
    </defs>
  </svg>
);

const ComparisonTableSection: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-metabase-text-primary mb-4">
            چه چیزی Metabase را به انتخاب خوبی برای تجزیه و تحلیل تعبیه شده
            تبدیل می‌کند؟
          </h3>
          <p className="text-base md:text-lg text-metabase-text-secondary">
            تقریباً همه چیز که در مورد نام‌های بزرگ در تجزیه و تحلیل تعبیه شده
            دوست دارید با کسری از هزینه، یک رابط کاربرپسند برای تجربه کاربری
            عالی، با کمک فنی بی‌نظیر.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-metabase-border-light">
                <th className="text-right p-4 font-bold text-metabase-text-primary">
                  &nbsp;
                </th>
                <th
                  className="text-center p-4 font-bold text-metabase-text-secondary"
                  style={{ width: "17%" }}
                >
                  <span className="text-metabase-text-light">رقیب</span>
                </th>
                <th
                  className="text-center p-4 font-bold text-metabase-primary"
                  style={{ width: "17%" }}
                >
                  <span>Metabase</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-metabase-border-light hover:bg-metabase-bg-light transition-colors"
                >
                  <td className="p-4 text-metabase-text-primary font-medium">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center">
                    {row.competitor ? (
                      <div className="flex justify-center">
                        <CheckIcon />
                      </div>
                    ) : (
                      <span className="text-metabase-text-light">—</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.metabase ? (
                      <div className="flex justify-center">
                        <CheckIcon />
                      </div>
                    ) : (
                      <span className="text-metabase-text-light">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/pricing/#compare"
            className="inline-flex items-center gap-2 text-metabase-primary hover:text-metabase-primary-darker font-semibold"
          >
            مشاهده تمام ویژگی‌ها
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 10.5L8.75 7L5.25 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTableSection;

