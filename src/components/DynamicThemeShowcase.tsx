"use client";

import Image from "next/image";
import { useState } from "react";
import CodeStyler from "./CodeStyler";

interface ThemeSlide {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  code: string;
}

interface DynamicThemeShowcaseProps {
  slides: ThemeSlide[];
}

export default function DynamicThemeShowcase({
  slides,
}: DynamicThemeShowcaseProps) {
  const [activeId, setActiveId] = useState(slides[0]?.id);
  const activeSlide =
    slides.find((slide) => slide.id === activeId) ?? slides[0];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50">
        <Image
          src={activeSlide.imageSrc}
          alt={activeSlide.imageAlt}
          width={720}
          height={420}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {slides.map((slide) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveId(slide.id)}
            className={`rounded-full px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary ${
              slide.id === activeId
                ? "bg-metabase-primary text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-metabase-primary hover:text-metabase-primary"
            }`}
            aria-pressed={slide.id === activeId}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <CodeStyler code={activeSlide.code} label="نمونه تم" />
    </div>
  );
}
