import React from "react";
import Link from "next/link";

const WhyNotBuildItSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-16 text-center">
          چرا فقط آن را نسازیم؟
        </h2>

        {/* First Card - Cons (DIY and Other Solutions) */}
        <div className="w-full max-w-[800px] bg-[#fafbfe] border border-[#e4ecfb] rounded-xl p-6 mb-8 shadow-[0_1px_3px_0_rgba(16,24,40,0.1),0_1px_2px_0_rgba(16,24,40,0.06)]">
          <h5 className="text-[#5a6072] text-base font-bold leading-6 mb-4">
            DIY و کتابخانه‌های نمودار:
          </h5>
          <ul className="text-right space-y-5 mb-6">
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#e4ecfb] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage: "url(/images/icons/attention-triangle.svg)",
                  backgroundSize: "18px 18px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              در ابتدا ساده به نظر می‌رسد اما{" "}
              <strong className="text-metabase-text-primary">
                به سرعت در دامنه گسترش می‌یابد
              </strong>
              . به مجوزها، انواع تجسم جدید، فیلترهای دلخواه، مرتب‌سازی، دکمه‌های
              صادرات فکر کنید (پس، آیا هنوز بیدار هستید؟)
            </li>
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#e4ecfb] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage: "url(/images/icons/attention-triangle.svg)",
                  backgroundSize: "18px 18px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                نیاز به زمان توسعه مداوم
              </strong>{" "}
              برای نگهداری، رفع اشکال، امنیت و مقیاس‌پذیری.
            </li>
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none mb-5">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#e4ecfb] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage: "url(/images/icons/attention-triangle.svg)",
                  backgroundSize: "18px 18px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                بدون مجوزهای داخلی
              </strong>
              ، چند مستأجره، تجزیه و تحلیل خودخدمت، یا صادرات.
            </li>
          </ul>

          <hr className="bg-[#e4ecfb] opacity-100 w-full my-0 mb-[30px] border-0 h-px" />

          <h5 className="text-[#5a6072] text-base font-bold leading-6 mb-4">
            سایر راه‌حل‌های تجزیه و تحلیل تعبیه شده:
          </h5>
          <ul className="text-right space-y-5">
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#e4ecfb] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage: "url(/images/icons/attention-triangle.svg)",
                  backgroundSize: "18px 18px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                منحنی یادگیری شیب‌دارتر
              </strong>{" "}
              برای کاربران تا بتوانند به تنهایی گزارش اجرا کنند.
            </li>
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none mb-5">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#e4ecfb] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage: "url(/images/icons/attention-triangle.svg)",
                  backgroundSize: "18px 18px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                هنوز می‌تواند ماه‌ها طول بکشد تا به POC برسد.
              </strong>
            </li>
          </ul>
        </div>

        {/* Second Card - Pros (Metabase) */}
        <div className="w-full max-w-[800px] bg-white border border-[#e4ecfb] rounded-xl p-6 shadow-[0_20px_24px_-4px_rgba(16,24,40,0.08),0_8px_8px_-4px_rgba(16,24,40,0.03)]">
          <h5 className="text-[#5a6072] text-base font-bold leading-6 mb-4">
            Metabase:
          </h5>
          <ul className="text-right space-y-5">
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#f7f9f1] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url(/images/icons/green-checkmark-outline.svg)",
                  backgroundSize: "32px 32px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                سریع‌ترین زمان برای ارزش
              </strong>{" "}
              — در چند ساعت شروع کنید
            </li>
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#f7f9f1] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url(/images/icons/green-checkmark-outline.svg)",
                  backgroundSize: "32px 32px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                مقرون به صرفه
              </strong>{" "}
              — با قیمت‌گذاری شفاف، بدون وابستگی به فروشنده
            </li>
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#f7f9f1] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url(/images/icons/green-checkmark-outline.svg)",
                  backgroundSize: "32px 32px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                امنیت داخلی
              </strong>{" "}
              — مجوزهای دقیق و چند مستأجره
            </li>
            <li className="text-[#5a6072] text-base leading-6 pl-6 relative list-none mb-5">
              <span
                className="absolute w-8 h-8 rounded-full bg-[#f7f9f1] -left-2 top-[-4px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url(/images/icons/green-checkmark-outline.svg)",
                  backgroundSize: "32px 32px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <strong className="text-metabase-text-primary">
                انعطاف‌پذیری متن‌باز
              </strong>{" "}
              با گزینه‌های استقرار
            </li>
          </ul>
        </div>

        {/* Link */}
        <Link
          href="/embedding-demo"
          className="flex items-center gap-2 text-xl text-metabase-primary hover:underline mt-16"
        >
          دموی زنده را بررسی کنید
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[14px] relative top-[6px] -rotate-90"
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
    </section>
  );
};

export default WhyNotBuildItSection;
