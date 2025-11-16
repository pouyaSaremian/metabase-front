import React from "react";
import Link from "next/link";

const WhyNotBuildItSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-12 text-center">
          چرا فقط آن را نسازیم؟
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Cons */}
          <div>
            <h5 className="text-xl font-bold text-metabase-text-primary mb-4">
              DIY و کتابخانه‌های نمودار:
            </h5>
            <ul className="space-y-4 text-metabase-text-secondary mb-8">
              <li>
                در ابتدا ساده به نظر می‌رسد اما{" "}
                <strong className="text-metabase-text-primary">
                  به سرعت در دامنه گسترش می‌یابد
                </strong>
                . به مجوزها، انواع تجسم جدید، فیلترهای دلخواه، مرتب‌سازی،
                دکمه‌های صادرات فکر کنید (پس، آیا هنوز بیدار هستید؟)
              </li>
              <li>
                <strong className="text-metabase-text-primary">
                  نیاز به زمان توسعه مداوم
                </strong>{" "}
                برای نگهداری، رفع اشکال، امنیت و مقیاس‌پذیری.
              </li>
              <li>
                <strong className="text-metabase-text-primary">
                  بدون مجوزهای داخلی
                </strong>
                ، چند مستأجره، تجزیه و تحلیل خودخدمت، یا صادرات.
              </li>
            </ul>

            <hr className="my-8 border-metabase-border-light" />

            <h5 className="text-xl font-bold text-metabase-text-primary mb-4">
              سایر راه‌حل‌های تجزیه و تحلیل تعبیه شده:
            </h5>
            <ul className="space-y-4 text-metabase-text-secondary">
              <li>
                <strong className="text-metabase-text-primary">
                  منحنی یادگیری شیب‌دارتر
                </strong>{" "}
                برای کاربران تا بتوانند به تنهایی گزارش اجرا کنند.
              </li>
              <li>
                <strong className="text-metabase-text-primary">
                  هنوز می‌تواند ماه‌ها طول بکشد تا به POC برسد.
                </strong>
              </li>
            </ul>
          </div>

          {/* Right Column - Pros */}
          <div>
            <h5 className="text-xl font-bold text-metabase-text-primary mb-4">
              Metabase:
            </h5>
            <ul className="space-y-4 text-metabase-text-secondary">
              <li>
                <strong className="text-metabase-text-primary">
                  سریع‌ترین زمان برای ارزش
                </strong>{" "}
                — در چند ساعت شروع کنید
              </li>
              <li>
                <strong className="text-metabase-text-primary">
                  مقرون به صرفه
                </strong>{" "}
                — با قیمت‌گذاری شفاف، بدون وابستگی به فروشنده
              </li>
              <li>
                <strong className="text-metabase-text-primary">
                  امنیت داخلی
                </strong>{" "}
                — مجوزهای دقیق و چند مستأجره
              </li>
              <li>
                <strong className="text-metabase-text-primary">
                  انعطاف‌پذیری متن‌باز
                </strong>{" "}
                با گزینه‌های استقرار
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/embedding-demo"
                className="inline-flex items-center gap-2 text-metabase-primary hover:underline font-semibold"
              >
                دموی زنده را بررسی کنید
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    opacity="0.9"
                    d="M3 8.96338L16 21.9634L29 8.96338"
                    stroke="#509ee3"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNotBuildItSection;
