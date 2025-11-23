import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const ReadyToGetStartedSection: React.FC = () => {
  return (
    <section className="bg-metabase-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center text-white p-8 lg:p-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              آماده شروع هستید؟
            </h2>
            <p className="text-lg mb-8 text-white/90">
              در 5 دقیقه با یک دوره آزمایشی 14 روزه راه‌اندازی و اجرا کنید.
            </p>

            <div className="mb-12">
              <Button
                href="https://store.metabase.com/checkout"
                variant="secondary"
                size="lg"
                className="text-sm rounded-xl bg-white text-metabase-primary hover:bg-gray-100"
              >
                شروع کنید
              </Button>
            </div>

            <blockquote className="border-r-4 border-white/30 pr-6">
              <p className="text-lg md:text-xl italic mb-6 text-white/95">
                &quot;Metabase راه‌حل تعبیه شده‌ای بود که به دنبال آن بودیم:
                آسان برای یکپارچه‌سازی، قابل سفارشی‌سازی و عملکردی.&quot;
              </p>
              <footer className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/profiles/sincera_ian-meyers.png"
                    alt="Ian Meyers - Co-Founder at Sincera"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Ian Meyers</p>
                  <p className="text-sm text-white/80">Co-Founder at Sincera</p>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage:
                  "url(/images/embedding/get-started-with-mb.png)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;

