"use client";

import Link from "next/link";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type VideoAsset = {
  poster: string;
  mp4: string;
  webm: string;
  alt: string;
};

type TabContent = {
  id: string;
  mobileTitle: string;
  buttonLabel: string;
  highlight: string;
  description: ReactNode;
  mobileDescription: ReactNode;
  timerSeconds: number;
  video: VideoAsset;
};

const inlineLinkClass =
  "text-metabase-primary-dark font-semibold underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary-dark/30 rounded-sm";

const tabsContent: TabContent[] = [
  {
    id: "query-without-code",
    mobileTitle: "داده‌کاوی بدون نوشتن حتی یک خط کد",
    buttonLabel: "تحلیل بدون کدنویسی",
    highlight: "پرس‌وجو به زبان طبیعی با متابوت",
    description: (
      <>
        هر کسی در سازمان می‌تواند داده‌ها را جست‌وجو کند، نتایج را مصورسازی
        کند و به پاسخ برسد. با{" "}
        <a
          className={inlineLinkClass}
          href="https://www.metabase.com/features/metabot-ai"
          target="_blank"
          rel="noreferrer"
        >
          متابوت AI
        </a>{" "}
        پرسش را به زبان طبیعی مطرح کنید، روی نمودارها کلیک کنید تا دلیل تغییر
        را بیابید یا با{" "}
        <Link className={inlineLinkClass} href="/features/query-builder">
          سازنده پرس‌وجوی بصری
        </Link>{" "}
        یک کوئری بدون کدنویسی بسازید.
      </>
    ),
    mobileDescription: (
      <>
        همه اعضای تیم می‌توانند داده‌ها را مرور کنند، نتایج را به تصویر بکشند و
        سؤال‌های خود را پاسخ دهند.{" "}
        <Link className={inlineLinkClass} href="/features/query-builder">
          سازنده پرس‌وجوی بصری
        </Link>{" "}
        متابیس همه چیز را بدون نیاز به دانش SQL فراهم می‌کند.
      </>
    ),
    timerSeconds: 13,
    video: {
      poster: "/images/home/query-builder.png",
      mp4: "/images/home/query-builder.mp4",
      webm: "/images/home/query-builder.webm",
      alt: "دموی سازنده پرس‌وجوی متابیس",
    },
  },
  {
    id: "custom-insights",
    mobileTitle: "از گزارش‌های عمومی تا بینش‌های اختصاصی",
    buttonLabel: "بینش‌های سفارشی برای هر تیم",
    highlight: "گزارش‌های اشتراکی و داشبوردهای تعاملی",
    description: (
      <>
        فیلتر کنید، برش بزنید و زمینه عمیق‌تری برای داده‌ها بسازید.{" "}
        <Link className={inlineLinkClass} href="/features/analytics-dashboards">
          داشبوردهای تعاملی
        </Link>{" "}
        را با تیم خود به اشتراک بگذارید یا در محصول تعبیه کنید تا گزارش‌دهی سمت
        مشتری را پوشش دهید. همچنین می‌توانید اجازه دهید هر فرد داشبورد خودش را
        بسازد و منتشر کند.
      </>
    ),
    mobileDescription: (
      <>
        داشبوردها را سفارشی کنید، آن‌ها را با تیم به اشتراک بگذارید یا مستقیماً
        در محصول قرار دهید تا به گزارش‌های مشتری پاسخ دهید. هر کاربر می‌تواند
        نسخه شخصی خود را تولید کند و آن را به اشتراک بگذارد.
      </>
    ),
    timerSeconds: 13,
    video: {
      poster: "/images/home/dashboards.png",
      mp4: "/images/home/dashboards.mp4",
      webm: "/images/home/dashboards.webm",
      alt: "تعامل با داشبوردهای متابیس",
    },
  },
  {
    id: "guided-answers",
    mobileTitle: "کاربران را به پاسخ درست هدایت کنید",
    buttonLabel: "مدل‌های معنادار برای تیم‌ها",
    highlight: "مدل‌های مطمئن و متریک‌های معتبر",
    description: (
      <>
        مدل‌های غنی از متادیتا بسازید، متریک‌های قابل اعتماد تعریف کنید و منابع
        داده تأییدشده را مشخص کنید تا همه روی بنیان مشترکی کار کنند. با{" "}
        <Link className={inlineLinkClass} href="/features/models">
          مدل‌های متابیس
        </Link>{" "}
        تنها با یک تب باز و بدون نیاز به خط فرمان این کار انجام می‌شود.
      </>
    ),
    mobileDescription: (
      <>
        با ساخت مدل‌های معنایی و متریک‌های مورد اعتماد، کاربران را به سمت داده
        درست هدایت کنید تا هر بار از صفر شروع نکنند.
      </>
    ),
    timerSeconds: 13,
    video: {
      poster: "/images/home/models.png",
      mp4: "/images/home/models.mp4",
      webm: "/images/home/models.webm",
      alt: "ساخت مدل‌های داده در متابیس",
    },
  },
];

const BusinessIntelligenceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const clearAutoplay = useCallback(() => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    clearAutoplay();
    if (!isInView || prefersReducedMotion) {
      return;
    }

    const delayMs = (tabsContent[activeIndex]?.timerSeconds ?? 12) * 1000;
    autoplayTimeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % tabsContent.length);
    }, delayMs);

    return () => {
      clearAutoplay();
    };
  }, [activeIndex, clearAutoplay, isInView, prefersReducedMotion]);

  useEffect(() => {
    const video = activeVideoRef.current;
    if (!video) {
      return;
    }

    if (!isInView || prefersReducedMotion) {
      video.pause();
      return;
    }

    video.currentTime = 0;
    video
      .play()
      .catch(() => {
        /* autoplay can fail silently */
      });
  }, [activeIndex, isInView, prefersReducedMotion]);

  useEffect(
    () => () => {
      clearAutoplay();
    },
    [clearAutoplay]
  );

  const handleSelectTab = useCallback(
    (index: number) => {
      if (index === activeIndex) {
        const video = activeVideoRef.current;
        if (video) {
          video.currentTime = 0;
          void video.play();
        }
        return;
      }
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const headingId = "business-intelligence-heading";
  const descriptionId = "business-intelligence-description";
  const activeTab = tabsContent[activeIndex];

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className="bg-metabase-bg-neutral-98 py-16 md:py-24"
      itemScope
      itemType="https://schema.org/HowToSection"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold text-metabase-primary-dark">
            توانمندسازی تیم‌ها با یک منبع حقیقت مشترک
          </p>
          <h2
            id={headingId}
            className="mt-4 text-2xl leading-snug font-black text-metabase-text-dark md:text-4xl"
          >
            هوش تجاری‌ای که کل تیم واقعاً از آن استفاده می‌کند
          </h2>
          <p
            id={descriptionId}
            className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-metabase-text-light leading-7"
          >
            اگر عبارت «تحلیل سلف‌سرویس» شما را به یاد داشبوردهای بلااستفاده و
            کوئری‌های شکسته می‌اندازد، این بخش برای شماست. متابیس تجربه‌ای
            متفاوت و واقعاً قابل استفاده ارائه می‌دهد.
          </p>
        </div>

        {/* موبایل */}
        <div className="mt-12 space-y-10 md:hidden">
          {tabsContent.map((tab) => (
            <article
              key={tab.id}
              className="space-y-4"
            >
              <p className="text-sm font-bold text-metabase-text-dark">
                {tab.mobileTitle}
              </p>
              <p className="mt-3 text-sm text-metabase-text-light leading-7">
                {tab.mobileDescription}
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl bg-metabase-bg-neutral-96">
                <video
                  className="w-full"
                  autoPlay
                  muted
                  playsInline
                  loop
                  poster={tab.video.poster}
                  preload="metadata"
                >
                  <source src={tab.video.mp4} type="video/mp4" />
                  <source src={tab.video.webm} type="video/webm" />
                  <p className="p-4 text-sm text-metabase-text-light">
                    برای مشاهده این ویدیو لطفاً مرورگر خود را به‌روزرسانی کنید.
                  </p>
                </video>
                <span className="sr-only">{tab.video.alt}</span>
              </div>
            </article>
          ))}
        </div>

        {/* دسکتاپ */}
        <div className="mt-14 hidden gap-10 md:flex md:items-center md:justify-center">
          <nav
            className="w-full max-w-md space-y-6"
            aria-label="گزینه‌های هوش تجاری"
            role="tablist"
          >
            {tabsContent.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={tab.id} className="relative pr-6">
                  <button
                    type="button"
                    role="tab"
                    id={`${tab.id}-tab`}
                    aria-selected={isActive}
                    aria-controls={`${tab.id}-panel`}
                    onClick={() => handleSelectTab(index)}
                    className={`relative block w-full text-right transition-colors ${
                      isActive
                        ? "text-metabase-text-dark"
                        : "text-metabase-text-light"
                    }`}
                  >
                    <p className="text-sm font-semibold text-metabase-text-dark">
                      {tab.buttonLabel}
                    </p>
                    <p className="mt-2 text-base font-bold text-metabase-primary-dark">
                      {tab.highlight}
                    </p>
                    <p className="mt-3 text-sm text-metabase-text-light leading-7">
                      {tab.description}
                    </p>
                  </button>
                  <span
                    className={`pointer-events-none absolute inset-y-0 right-0 w-1 rounded-full ${
                      isActive
                        ? "bg-metabase-primary-dark"
                        : "bg-metabase-border-light"
                    }`}
                  />
                </div>
              );
            })}
          </nav>

          <article
            role="tabpanel"
            id={`${activeTab.id}-panel`}
            aria-labelledby={`${activeTab.id}-tab`}
            className="relative flex-1 overflow-hidden rounded-[32px] bg-linear-to-b from-metabase-bg-neutral-96 to-white p-6"
            tabIndex={0}
          >
            <div className="overflow-hidden rounded-2xl bg-metabase-bg-neutral-95">
              <video
                key={activeTab.id}
                ref={(node) => {
                  activeVideoRef.current = node;
                }}
                className="h-full w-full"
                muted
                playsInline
                loop
                poster={activeTab.video.poster}
                preload="auto"
              >
                <source src={activeTab.video.mp4} type="video/mp4" />
                <source src={activeTab.video.webm} type="video/webm" />
                <p className="p-4 text-sm text-metabase-text-light">
                  برای مشاهده این ویدیو لطفاً مرورگر خود را به‌روزرسانی کنید.
                </p>
              </video>
            </div>
            <div className="sr-only">{activeTab.video.alt}</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligenceSection;

