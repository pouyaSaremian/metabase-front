"use client";

import React from "react";
import Image from "next/image";

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

const NoCodeIterationSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-6">
            تکرار بدون کد
          </h2>
          <p className="text-lg text-metabase-text-secondary mb-6">
            داده‌ها را پرس‌وجو و تجسم کنید، حتی رفتار کلیک سفارشی را تعریف کنید،
            همه در رابط کاربری Metabase. تغییرات داشبورد را از 2 روز زمان مهندسی
            به 2 ساعت زمان موفقیت مشتری کاهش دهید.
          </p>
          <Testimonial
            text="تعبیه Metabase به ما امکان داده است تا به سرعت تجزیه و تحلیل را در پلتفرم خود توسعه، تکرار و نگهداری کنیم که در غیر این صورت تلاش‌های مهندسی زیادی می‌طلبید. ما Metabase را دوست داریم."
            author="Emil Sedgh"
            company="مهندس ارشد، Rechat"
            authorImage="/images/case-studies/testimonials/emil-sedgh-with-border.png"
            companyImage="/images/logos/rechat-square.png"
          />
        </div>
        <div>
          <Image
            src="/images/product/embedded-analytics/need-a-change.png"
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

export default NoCodeIterationSection;
