"use client";

import Image from "next/image";
import { useState } from "react";
import CodeStyler from "./CodeStyler";

interface ModeCard {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  code: string;
}

interface PermissionModeToggleProps {
  modes: ModeCard[];
}

export default function PermissionModeToggle({
  modes,
}: PermissionModeToggleProps) {
  const [activeId, setActiveId] = useState(modes[0]?.id);
  const activeMode = modes.find((mode) => mode.id === activeId) ?? modes[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-3">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setActiveId(mode.id)}
            className={`rounded-2xl border px-5 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metabase-primary ${
              mode.id === activeId
                ? "border-metabase-primary bg-metabase-primary text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-metabase-primary hover:text-metabase-primary"
            }`}
            aria-pressed={mode.id === activeId}
          >
            {mode.title}
          </button>
        ))}
      </div>
      <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50">
        <Image
          src={activeMode.imageSrc}
          alt={activeMode.imageAlt}
          width={720}
          height={420}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
      <div className="space-y-4 text-right">
        <p className="text-base font-bold text-gray-900">
          {activeMode.description}
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          {activeMode.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-metabase-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <CodeStyler code={activeMode.code} label="نمونه پیکربندی دسترسی" />
      </div>
    </div>
  );
}
