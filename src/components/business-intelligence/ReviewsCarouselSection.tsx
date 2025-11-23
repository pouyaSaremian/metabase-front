"use client";

import React from "react";
import Image from "next/image";

interface Review {
  quote: string;
  name: string;
  title: string;
  profileImage: string;
  companyLogo: string;
}

const reviews: Review[] = [
  {
    quote:
      "تخصص و تعامل تیم Metabase در تضاد شدیدی با آنچه از Looker در 18+ ماه گذشته و در زندگی‌های قبلی، از Tableau دریافت کرده‌ایم قرار دارد.",
    name: "Dave Holmes-Kinsella",
    title: "Head of Data Science, Synctera",
    profileImage: "/images/reviews/profiles/dave-holmes-kinsella.jpg",
    companyLogo: "/images/reviews/companies/synctera.png",
  },
  {
    quote:
      "10/10. پشتیبانی Metabase بهترین در صنعت است و به عنوان نمونه درخشان آنچه ما برای مشتریان خود تلاش می‌کنیم به دست آوریم عمل می‌کند.",
    name: "Philip Lorenzo",
    title: "Head of Data, StructionSite",
    profileImage: "/images/reviews/profiles/philip-lorenzo.jpg",
    companyLogo: "/images/reviews/companies/structionsite.png",
  },
  {
    quote:
      "Johannes یک مهندس پشتیبانی درجه یک جهانی است. من واقعاً به او 5 ستاره برای کمکی که ارائه داد می‌دهم. همه پاسخ‌ها بسیار سریع، مستقیم و مفید بودند. نمی‌توانستم پشتیبانی بهتری بخواهم. یک متخصص واقعی.",
    name: "Chad Remesch",
    title: "CTO, The Lobby",
    profileImage: "/images/reviews/profiles/chad-remesch.jpg",
    companyLogo: "/images/reviews/companies/the-lobby.png",
  },
  {
    quote:
      "پاسخ عالی و به موقع به سوال من دریافت کردم. از سطح جزئیاتی که ارائه دادید متشکرم، شما باعث شدید احساس کنم که اگر نصب ما را به سرویس ابری شما منتقل کنیم، از پشتیبانی شما برخوردار خواهیم شد.",
    name: "Michael Masouras",
    title: "CEO, Motohunt",
    profileImage: "/images/reviews/profiles/michael-masouras.jpg",
    companyLogo: "/images/reviews/companies/motohunt.png",
  },
  {
    quote:
      "Johannes بهترین است! او همیشه پاسخ‌های کامل و مراحل بعدی ارائه می‌دهد که به ما کمک می‌کند انتظارات را با کاربران نهایی خود مدیریت کنیم.",
    name: "Meghan Maloy",
    title: "Senior Analytics Engineer, Datadog",
    profileImage: "/images/reviews/profiles/meghan-maloy.jpg",
    companyLogo: "/images/reviews/companies/datadog.png",
  },
  {
    quote:
      "من واقعاً از سرعت پاسخ Luis و مستقیم بودن توصیه‌هایش قدردانی کردم. شما عالی هستید!",
    name: "Aimée Walker",
    title: "Technical Engineer, Revenue.io",
    profileImage: "/images/reviews/profiles/aimee-walker.jpg",
    companyLogo: "/images/reviews/companies/revenue-io.png",
  },
  {
    quote: "پاسخ در تمام نکات مطرح شده من خاص بود و خیلی سریع برگشت!",
    name: "Andrea Mazza",
    title: "Marine Data Analyst, Breeze",
    profileImage: "/images/reviews/profiles/andrea-mazza.jpg",
    companyLogo: "/images/reviews/companies/breeze.png",
  },
];

const ReviewsCarouselSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-metabase-text-primary mb-6">
              کمک از تیم موفقیت درجه یک جهانی ما
            </h2>
            <p className="text-base md:text-lg text-metabase-text-secondary mb-6">
              ما دوست نداریم تعریف کنیم، پس می‌گذاریم مشتریان ما این کار را برای
              ما انجام دهند.
            </p>

            <p className="text-base md:text-lg text-metabase-text-primary mb-6">
              <b>با Metabase، به موارد زیر دسترسی خواهید داشت:</b>
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-metabase-primary mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-metabase-text-secondary">
                  پشتیبانی از متخصصان فنی واقعی. ما همه کاربران مشتاق Metabase
                  هستیم که در پلتفرم‌های تجزیه و تحلیل کسب و کار و هوش تجاری
                  مهارت داریم، بنابراین ما در موقعیت شما بوده‌ایم.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-metabase-primary mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-metabase-text-secondary">
                  کمک به هر مشکلی که دارید، از عیب‌یابی ادمین تا مشاوره در مورد
                  بهترین روش‌ها در همه چیز از تجزیه و تحلیل داده، ساختاردهی
                  مجموعه داده‌های شما، اتصال‌دهنده‌های منبع داده، تجسم داده،
                  تعبیه در برنامه‌ها، تجسم داده زنده برای KPIها و متریک‌ها،
                  مدل‌سازی داده و بیشتر!
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-metabase-primary mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-metabase-text-secondary">
                  بدون chatbot، بدون خطوط انتظار، بدون دور زدن خدمات مشتری. فقط
                  به ما ایمیل بزنید، ما اینجا هستیم.
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-base text-metabase-text-primary mb-6 leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={review.profileImage}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={review.companyLogo}
                      alt={`${review.name} company`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center grow">
                    <div className="font-semibold text-metabase-text-primary">
                      {review.name}
                    </div>
                    <div className="text-sm text-metabase-text-secondary">
                      {review.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarouselSection;
