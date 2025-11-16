"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface TabContent {
  id: string;
  title: string;
  description: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
    authorImage: string;
    companyImage: string;
  };
  image?: string;
  video?: {
    poster: string;
    mp4: string;
    webm: string;
  };
}

const EasyToUseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && activeTab === index) {
        video.play().catch(() => {
          // Autoplay failed
        });
      } else if (video) {
        video.pause();
      }
    });
  }, [activeTab]);

  const tabs: TabContent[] = [
    {
      id: "metabot",
      title: "دستیار داده AI را تعبیه کنید",
      description: (
        <>
          دسترسی مشتریان به پاسخ‌های داده را آسان‌تر کنید، با{" "}
          <Link
            href="/features/metabot-ai"
            className="text-metabase-primary hover:underline"
          >
            رابط چت Metabot
          </Link>{" "}
          که به آن‌ها امکان می‌دهد سوالات را به زبان ساده بپرسند. (در دسترس در
          نسخه بتا با{" "}
          <Link
            href="/product/embedded-analytics-sdk"
            className="text-metabase-primary hover:underline"
          >
            SDK تجزیه و تحلیل تعبیه شده برای React
          </Link>
          )
        </>
      ),
      testimonial: {
        text: "به جای اختراع مجدد چرخ و ساخت تجسم‌های داده خودمان در Aula—که زمان توسعه و طراحی گسترده‌ای می‌طلبید—می‌توانیم به سادگی از تعبیه Metabase برای نمایش داشبوردها برای مربیان در Aula استفاده کنیم.",
        author: "Mariana Aguiar",
        role: "مشاور موفقیت مشتری، Aula",
        authorImage:
          "/images/case-studies/testimonials/mariana-aguiar-with-border.png",
        companyImage: "/images/case-studies/aula-logo-square.png",
      },
      image: "/images/product/embedded-analytics/how-are-our-apps-doing.png",
    },
    {
      id: "click-explore",
      title: "کلیک کنید تا داده‌ها را کاوش کنید و بینش‌ها را کشف کنید",
      description:
        "Metabase شکل داده‌های شما را تشخیص می‌دهد و به مشتریان شما مماس‌های مرتبط برای تپ کردن می‌دهد بدون اینکه شما مجبور باشید آن‌ها را به صورت دستی پیکربندی یا پیش‌بینی کنید.",
      testimonial: {
        text: "ویژگی تعبیه Metabase تیم ما را از زمان و سردرد زیادی نجات داده است! ما فقط باید یک قطعه کد را وصل می‌کردیم و به طور خودکار به یک داشبورد زیبا متصل می‌شد که توسط اعضای غیر مهندسی تیم نگهداری می‌شود!",
        author: "Magnus Fagerlund",
        role: "مدیر بازاریابی محصول، Lime Technologies",
        authorImage:
          "/images/case-studies/testimonials/magnus-fagerlund-with-border.png",
        companyImage:
          "/images/case-studies/testimonials/lime-technologies-rounded.png",
      },
      video: {
        poster: "/images/product/embedded-analytics/click-to-explore-data.gif",
        mp4: "/images/product/embedded-analytics/click-to-explore-data.mp4",
        webm: "/images/product/embedded-analytics/click-to-explore-data.webm",
      },
    },
    {
      id: "simple-reporting",
      title: "راه ساده‌ای برای هر کسی برای اجرای گزارش‌ها و تجزیه و تحلیل",
      description:
        "از کاربران تجاری تا متخصصان داده. بلوک‌های سازنده را با مدل‌ها و متادیتا به آن‌ها بدهید.",
      testimonial: {
        text: "ویژگی تعبیه Metabase تیم ما را از زمان و سردرد زیادی نجات داده است! ما فقط باید یک قطعه کد را وصل می‌کردیم و به طور خودکار به یک داشبورد زیبا متصل می‌شد که توسط اعضای غیر مهندسی تیم نگهداری می‌شود!",
        author: "Peer Richelsen",
        role: "بنیان‌گذار مشترک، Cal.com",
        authorImage:
          "/images/case-studies/testimonials/peer-richelsen-with-border.png",
        companyImage: "/images/case-studies/testimonials/cal-rounded.png",
      },
      video: {
        poster:
          "/images/product/embedded-analytics/a-simple-way-to-run-reports.gif",
        mp4: "/images/product/embedded-analytics/a-simple-way-to-run-reports.mp4",
        webm: "/images/product/embedded-analytics/a-simple-way-to-run-reports.webm",
      },
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6 text-center">
          آسان برای استفاده برای همه انواع مشتریان
        </h2>
        <p className="text-lg text-metabase-text-secondary mb-12 text-center">
          تجزیه و تحلیل خودخدمت که به همه امکان می‌دهد با داده کار کنند. از
          عاشقان صفحه گسترده تا متخصصان داده.
        </p>

        {/* Tabs */}
        <nav className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg transition-colors ${
                activeTab === index
                  ? "bg-metabase-primary text-white"
                  : "bg-white text-metabase-text-secondary hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.id === "metabot"
                ? "Metabot AI"
                : tab.id === "click-explore"
                ? "کلیک برای کاوش"
                : "گزارش‌دهی ساده"}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                activeTab === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-blue-95 rounded-lg p-4 flex items-center justify-center">
                {tab.video ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="w-full rounded-lg"
                    poster={tab.video.poster}
                    autoPlay={activeTab === index}
                    muted
                    playsInline
                    loop
                  >
                    <source src={tab.video.mp4} type="video/mp4" />
                    <source src={tab.video.webm} type="video/webm" />
                  </video>
                ) : (
                  tab.image && (
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                  )
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-metabase-text-primary mb-4">
                  {tab.title}
                </h3>
                <p className="text-lg text-metabase-text-secondary mb-6">
                  {tab.description}
                </p>
                {tab.testimonial && (
                  <blockquote>
                    <p className="text-lg text-metabase-text-primary mb-6 leading-relaxed">
                      {tab.testimonial.text}
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={tab.testimonial.authorImage}
                          alt={tab.testimonial.author}
                          width={48}
                          height={48}
                          className="rounded-full border-2 border-white"
                          loading="lazy"
                        />
                        <Image
                          src={tab.testimonial.companyImage}
                          alt={tab.testimonial.author}
                          width={48}
                          height={48}
                          className="rounded-full border-2 border-white"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-metabase-text-primary">
                          {tab.testimonial.author}
                        </p>
                        <p className="text-sm text-metabase-text-secondary">
                          {tab.testimonial.role}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyToUseSection;
