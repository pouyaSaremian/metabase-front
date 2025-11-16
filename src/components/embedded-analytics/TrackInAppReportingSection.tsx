import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrackInAppReportingSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6">
            ردیابی نحوه استفاده از گزارش‌دهی درون برنامه شما
          </h2>
          <p className="text-lg text-metabase-text-secondary mb-6">
            <Link
              href="/features/usage-analytics"
              className="text-metabase-primary hover:underline"
            >
              تجزیه و تحلیل استفاده
            </Link>{" "}
            به شما بینش می‌دهد که چه کسی چه کاری انجام می‌دهد، چه زمانی، تا
            بتوانید بهینه‌سازی کنید و بدانید چه زمانی باید افزایش دهید.
          </p>
          <ul className="space-y-4 mb-6 text-metabase-text-secondary">
            <li>
              <strong className="text-metabase-text-primary">
                ببینید چقدر مردم از تجزیه و تحلیل مشتری‌محور شما استفاده
                می‌کنند.
              </strong>{" "}
              سرمایه‌گذاری خود را در تنظیم گزارش‌دهی درون برنامه خود اعتبارسنجی
              کنید.
            </li>
            <li>
              <strong className="text-metabase-text-primary">
                بفهمید مشتریان شما بیشتر به چه چیزی علاقه دارند.
              </strong>{" "}
              به مردم بیشتر از آنچه می‌خواهند بدهید و محتوای استفاده نشده را
              بایگانی کنید.
            </li>
            <li>
              <strong className="text-metabase-text-primary">
                یک لاگ فعالیت جامع برای اهداف حسابرسی و امنیتی دریافت کنید.
              </strong>{" "}
              حتی می‌توانید هشدارها را تنظیم کنید تا در مورد فعالیت غیرعادی در
              تجزیه و تحلیل خود مطلع شوید.
            </li>
          </ul>
          <Link
            href="/features/usage-analytics"
            className="inline-flex items-center gap-2 text-metabase-primary hover:underline font-semibold"
          >
            بیشتر بدانید
            <Image
              src="/images/chevron_blue_right.svg"
              alt="Chevron"
              width={24}
              height={24}
              className="rotate-180"
            />
          </Link>
        </div>
        <div>
          <Image
            src="/images/product/embedded-analytics/track-in-app-reporting.png"
            alt="ردیابی گزارش‌دهی درون برنامه"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackInAppReportingSection;
