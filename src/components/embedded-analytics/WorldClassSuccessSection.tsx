"use client";

import React from "react";
import Image from "next/image";

interface Review {
  quote: string;
  author: string;
  role: string;
  authorImage: string;
  companyImage: string;
}

const WorldClassSuccessSection: React.FC = () => {
  const reviews: Review[] = [
    {
      quote:
        "تخصص و تعامل تیم Metabase در تضاد شدیدی با آنچه که در 18+ ماه گذشته از Looker دریافت کرده‌ایم و در زندگی‌های قبلی، از Tableau دریافت کرده‌ایم قرار دارد.",
      author: "Dave Holmes-Kinsella",
      role: "رئیس علوم داده، Synctera",
      authorImage: "/images/reviews/profiles/dave-holmes-kinsella.jpg",
      companyImage: "/images/reviews/companies/synctera.png",
    },
    {
      quote:
        "10/10. پشتیبانی Metabase بهترین در صنعت است و به عنوان نمونه درخشان از آنچه که ما برای مشتریان خود تلاش می‌کنیم عمل می‌کند.",
      author: "Philip Lorenzo",
      role: "رئیس داده، StructionSite",
      authorImage: "/images/reviews/profiles/philip-lorenzo.jpg",
      companyImage: "/images/reviews/companies/structionsite.png",
    },
    {
      quote:
        "Johannes یک مهندس پشتیبانی درجه یک است. من واقعاً به او 5 ستاره برای کمکی که ارائه داد می‌دهم. همه پاسخ‌ها بسیار سریع، مستقیم و مفید بودند. نمی‌توانستم پشتیبانی بهتری بخواهم. یک متخصص واقعی.",
      author: "Chad Remesch",
      role: "CTO، The Lobby",
      authorImage: "/images/reviews/profiles/chad-remesch.jpg",
      companyImage: "/images/reviews/companies/the-lobby.png",
    },
    {
      quote:
        "من پاسخ عالی و به موقع به سوالم دریافت کردم. از سطح جزئیاتی که ارائه دادید متشکرم، شما باعث شدید احساس کنم که اگر نصب ما را به سرویس ابری شما منتقل کنیم، از پشتیبانی شما برخوردار خواهیم شد.",
      author: "Michael Masouras",
      role: "مدیرعامل، Motohunt",
      authorImage: "/images/reviews/profiles/michael-masouras.jpg",
      companyImage: "/images/reviews/companies/motohunt.png",
    },
    {
      quote:
        "Johannes بهترین است! او همیشه پاسخ‌های کامل و مراحل بعدی ارائه می‌دهد که به ما کمک می‌کند انتظارات را با کاربران نهایی خود مدیریت کنیم.",
      author: "Meghan Maloy",
      role: "مهندس تجزیه و تحلیل ارشد، Datadog",
      authorImage: "/images/reviews/profiles/meghan-maloy.jpg",
      companyImage: "/images/reviews/companies/datadog.png",
    },
    {
      quote:
        "من واقعاً از سرعت پاسخ Luis و سادگی توصیه‌هایش قدردانی کردم. شما عالی هستید!",
      author: "Aimée Walker",
      role: "مهندس فنی، Revenue.io",
      authorImage: "/images/reviews/profiles/aimee-walker.jpg",
      companyImage: "/images/reviews/companies/revenue-io.png",
    },
    {
      quote: "پاسخ در تمام نکات مطرح شده من خاص بود و خیلی سریع برگشت!",
      author: "Andrea Mazza",
      role: "تحلیل‌گر داده دریایی، Breeze",
      authorImage: "/images/reviews/profiles/andrea-mazza.jpg",
      companyImage: "/images/reviews/companies/breeze.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6">
              کمک از تیم موفقیت درجه یک ما
            </h2>
            <p className="text-lg text-metabase-text-secondary mb-6">
              ما دوست نداریم تعریف کنیم، پس اجازه می‌دهیم مشتریان ما این کار را
              انجام دهند.
            </p>
            <p className="text-lg text-metabase-text-secondary mb-6">
              <strong className="text-metabase-text-primary">
                با تعبیه در پلن‌های Pro و Enterprise، به موارد زیر دسترسی خواهید
                داشت:
              </strong>
            </p>
            <ul className="space-y-4 text-metabase-text-secondary">
              <li>
                پشتیبانی از متخصصان فنی واقعی. ما همه کاربران مشتاق Metabase
                هستیم، بنابراین در جای شما بوده‌ایم.
              </li>
              <li>
                کمک با هر مشکلی که دارید، چه عیب‌یابی مدیر باشد و چه مشاوره در
                مورد بهترین روش‌ها.
              </li>
              <li>
                بدون ربات چت، بدون خطوط انتظار، بدون دور زدن خدمات مشتری. فقط به
                ما ایمیل بزنید، ما اینجا هستیم.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6 max-h-[800px] overflow-y-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-metabase-border-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-metabase-text-primary mb-6 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={review.authorImage}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                    />
                    <Image
                      src={review.companyImage}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-metabase-text-primary">
                      {review.author}
                    </p>
                    <p className="text-sm text-metabase-text-secondary">
                      {review.role}
                    </p>
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

export default WorldClassSuccessSection;
