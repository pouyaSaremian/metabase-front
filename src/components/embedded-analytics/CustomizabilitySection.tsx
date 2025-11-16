"use client";

import React, { useState } from "react";

interface ChartTheme {
  id: string;
  name: string;
  embedURL: string;
  colors: string[];
  font: string;
  appearance: string;
}

const CustomizabilitySection: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState("Classic");

  const themes: ChartTheme[] = [
    {
      id: "classic",
      name: "Classic",
      embedURL:
        "https://metabase-www-1.metabaseapp.com/public/question/d6cc184d-78c2-44c3-b559-199ec2b2aa96",
      colors: ["#FFFFFF", "#509EE3", "#4C5773"],
      font: "Lato",
      appearance: "Light",
    },
    {
      id: "tech",
      name: "Tech",
      embedURL:
        "https://metabase-www-2.metabaseapp.com/public/question/37669a1d-ca5e-48a5-a7f7-7380ad1a3f76#theme=night",
      colors: ["#22242B", "#64BD0D", "#5A6072"],
      font: "Source Code Pro",
      appearance: "Dark",
    },
    {
      id: "elegant",
      name: "Elegant",
      embedURL:
        "https://metabase-www-3.metabaseapp.com/public/question/ea2a4cd3-08fe-4d14-a428-dd3439f689ed",
      colors: ["#FFFFFF", "#428E60", "#4C5773"],
      font: "Georgia",
      appearance: "Light",
    },
    {
      id: "playful",
      name: "Playful",
      embedURL:
        "https://metabase-www-4.metabaseapp.com/public/question/2bb42002-1c3e-4760-acc8-076a3ffb7cc9#theme=night",
      colors: ["#22242B", "#F25353", "#5A6072"],
      font: "Varela Round",
      appearance: "Dark",
    },
  ];

  const currentTheme = themes.find((t) => t.name === activeTheme) || themes[0];

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6 text-center">
          تعادل کامل بین plug-and-play و سفارشی‌سازی
        </h2>
        <p className="text-lg text-metabase-text-secondary mb-12 text-center max-w-4xl mx-auto">
          شما هر جزئیات از محصول خود را عرق می‌کنید—ما مطمئن می‌شویم که
          گزارش‌دهی شما کاملاً متناسب است.{" "}
          <a
            href="/features/white-label-analytics"
            className="text-metabase-primary hover:underline"
          >
            برچسب‌ها، رنگ‌ها، فونت‌ها، برندسازی
          </a>{" "}
          و موارد دیگر را برای یک تجربه تجزیه و تحلیل یکپارچه و آماده سفارشی
          کنید.
        </p>

        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
            {/* Chart */}
            <div>
              <iframe
                src={currentTheme.embedURL}
                className="w-full rounded-lg"
                style={{ height: "350px" }}
                allowTransparency
                title="Customizable Chart"
              />
            </div>

            {/* Parameters */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h6 className="text-sm font-bold text-metabase-text-secondary mb-4 uppercase">
                رنگ‌های نمودار
              </h6>
              {currentTheme.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 mb-4 last:mb-8"
                >
                  <div
                    className="w-6 h-6 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-sm text-metabase-text-secondary">
                    {color}
                  </p>
                </div>
              ))}
              <h6 className="text-sm font-bold text-metabase-text-secondary mb-4 uppercase">
                فونت
              </h6>
              <p className="text-sm text-metabase-text-secondary mb-8">
                {currentTheme.font}
              </p>
              <h6 className="text-sm font-bold text-metabase-text-secondary mb-4 uppercase">
                ظاهر
              </h6>
              <p className="text-sm text-metabase-text-secondary">
                {currentTheme.appearance}
              </p>
            </div>
          </div>
        </div>

        {/* Theme Buttons */}
        <div className="flex flex-wrap justify-center gap-4 bg-white p-4 rounded-lg">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme.name)}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                activeTheme === theme.name
                  ? "bg-metabase-primary text-white"
                  : "bg-gray-100 text-metabase-text-secondary hover:bg-gray-200"
              }`}
            >
              <span className="font-bold">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizabilitySection;
