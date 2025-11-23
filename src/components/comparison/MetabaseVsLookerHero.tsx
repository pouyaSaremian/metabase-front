"use client";

import React from "react";
import Button from "@/components/Button";

const MetabaseVsLookerHero: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-bold mb-6 text-2xl md:text-3xl lg:text-4xl text-metabase-text-primary">
              Metabase در مقابل Looker
              <br />
              کدام برای تیم من مناسب است؟
            </h1>
            <p className="text-base md:text-lg text-metabase-text-secondary mb-8">
              Metabase ابزار هوش تجاری آسان برای استفاده با UX دوستانه است که به
              همه در تیم شما امکان کار با داده را می‌دهد.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://store.metabase.com/checkout"
                variant="primary"
                size="lg"
                className="text-sm rounded-xl"
              >
                شروع کنید
              </Button>
              <Button
                href="/talk-to-a-person"
                variant="outline"
                size="lg"
                className="text-sm rounded-xl border-metabase-primary text-metabase-primary hover:bg-metabase-primary hover:text-white"
              >
                تماس با ما
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-metabase-border-light bg-white">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5sJmlkaD7UM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetabaseVsLookerHero;
