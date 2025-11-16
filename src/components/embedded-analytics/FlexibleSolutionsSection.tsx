"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TestimonialProps {
  text: string;
  author: string;
  company: string;
  authorImage: string;
  companyImage: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  company,
  authorImage,
  companyImage,
}) => {
  return (
    <blockquote className="mt-8">
      <p className="text-lg text-metabase-text-primary mb-6 leading-relaxed">
        {text}
      </p>
      <footer className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={authorImage}
            alt={author}
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
            loading="lazy"
          />
          <Image
            src={companyImage}
            alt={company}
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-semibold text-metabase-text-primary">{author}</p>
          <p className="text-sm text-metabase-text-secondary">{company}</p>
        </div>
      </footer>
    </blockquote>
  );
};

const FlexibleSolutionsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto flex-row-reverse">
        <div className="lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6">
            راه‌حل‌های انعطاف‌پذیر برای هر مرحله
          </h2>
          <p className="text-lg text-metabase-text-secondary mb-6">
            پیاده‌سازی کم‌کد را برای سرعت انتخاب کنید، یا{" "}
            <Link
              href="/product/embedded-analytics-sdk"
              className="text-metabase-primary hover:underline"
            >
              React SDK
            </Link>{" "}
            را برای کنترل بیشتر بر روی یکپارچه‌سازی کامپوننت‌ها در برنامه خود با
            سفارشی‌سازی عمیق. چه به دنبال یک راه‌حل سریع برای درخواست‌های مشتری
            باشید و چه در حال سرمایه‌گذاری در ارزش، Metabase ابزارهای لازم برای
            مقیاس‌پذیری با شما را دارد.
          </p>
          <Testimonial
            text="Metabase یک جزء حیاتی از محصول ما را فراهم کرده است که به مشتریان ما تجزیه و تحلیل بصری می‌دهد و در عین حال به تیم مهندسی ما اجازه می‌دهد روی چیزهای دیگری که برای کسب‌وکار ما اصلی هستند تمرکز کنند."
            author="Thomas Pedersen"
            company="مدیرعامل و بنیان‌گذار مشترک، Bunny"
            authorImage="/images/case-studies/testimonials/thomas-pedersen-with-border.png"
            companyImage="/images/logos/bunny-square.png"
          />
        </div>
        <div className="lg:order-1">
          <Image
            src="/images/product/embedded-analytics/flexible-solutions.png"
            alt="راه‌حل‌های انعطاف‌پذیر برای هر مرحله"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default FlexibleSolutionsSection;
