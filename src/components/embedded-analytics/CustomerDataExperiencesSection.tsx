"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  authorImage: string;
  caseStudyLink: string;
  image: string;
}

const CustomerDataExperiencesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: "sincera",
      title:
        "Sincera از تعبیه Metabase استفاده می‌کند تا بینش‌های تبلیغات دیجیتال و رسانه را به مشتریان خود ارائه دهد",
      quote:
        "Metabase راه‌حل تعبیه‌ای بود که به دنبال آن بودیم: آسان برای یکپارچه‌سازی، قابل سفارشی و با عملکرد بالا.",
      author: "Ian Meyers",
      role: "بنیان‌گذار مشترک در Sincera",
      authorImage: "/images/profiles/sincera_ian-meyers.png",
      caseStudyLink: "/case-studies/sincera",
      image: "/images/embedding/sincera.gif",
    },
    {
      id: "faros",
      title:
        "Faros از تعبیه Metabase استفاده می‌کند تا دید و بینش را به رهبران مهندسی ارائه دهد",
      quote:
        "تعبیه کامل برنامه به مشتریان ما امکان می‌دهد تا معیارهای خود را کاملاً سفارشی کنند. این ارزش فوق‌العاده‌ای را برای ما در Faros و قابلیت‌های پلتفرمی که ارائه می‌دهیم باز می‌کند.",
      author: "Natalie Casey",
      role: "مهندس نرم‌افزار در Faros",
      authorImage: "/images/profiles/faros_natalie-casey.png",
      caseStudyLink: "/case-studies/faros",
      image: "/images/embedding/faros.gif",
    },
  ];

  return (
    <section className="bg-neutral-98 py-16 px-4 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6 text-center">
          مشتریان ما تجربیات داده عالی می‌سازند
        </h2>
        <p className="text-lg text-metabase-text-secondary mb-12 text-center">
          ببینید چگونه شرکت‌های پیشرو به کاربران خود کمک می‌کنند تا با داده کار
          کنند.
        </p>

        {/* Tabs */}
        <nav className="flex justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === index
                  ? "bg-metabase-primary text-white"
                  : "bg-white text-metabase-text-secondary hover:bg-gray-100"
              }`}
            >
              {study.id === "sincera" ? "Sincera" : "Faros"}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                activeTab === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-blue-95 rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-metabase-text-primary mb-6">
                  {study.title}
                </h3>
                <blockquote className="mb-6">
                  <p className="text-lg text-metabase-text-primary mb-6 leading-relaxed">
                    {study.quote}
                  </p>
                  <footer className="flex items-center gap-4">
                    <Image
                      src={study.authorImage}
                      alt={study.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-metabase-text-primary">
                        {study.author}
                      </p>
                      <p className="text-sm text-metabase-text-secondary">
                        {study.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
                <Link
                  href={study.caseStudyLink}
                  className="inline-flex items-center gap-2 text-metabase-primary hover:underline font-semibold mt-8"
                >
                  داستان کامل {study.id === "sincera" ? "Sincera" : "Faros"} را
                  بخوانید
                  <Image
                    src="/images/chevron_blue_right.svg"
                    alt="Chevron"
                    width={24}
                    height={24}
                    className="rotate-180"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerDataExperiencesSection;
