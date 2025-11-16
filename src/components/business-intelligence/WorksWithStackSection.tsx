import React from "react";
import Image from "next/image";
import Link from "next/link";

const WorksWithStackSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-metabase-text-primary mb-4">
          با استک شما برای تجسم‌های زنده و گزارش‌ها کار می‌کند، نه استخراج‌ها
        </h3>
        <p className="text-lg text-metabase-text-secondary mb-8 max-w-2xl mx-auto">
          Metabase یک لایه تجسم و کوئری است که روی پایگاه داده شما قرار می‌گیرد.
          داده‌های شما در پایگاه داده شما باقی می‌ماند—Metabase آن را دریافت
          نمی‌کند، ذخیره نمی‌کند یا به‌روزرسانی نمی‌کند. با بیش از{" "}
          <Link
            href="/data-sources"
            className="text-metabase-primary hover:underline"
          >
            20 منبع داده
          </Link>{" "}
          متصل می‌شود و با هر چیزی که در استک شماست به خوبی کار می‌کند.
        </p>

        <div className="mb-8">
          <Image
            src="/images/product/business-intelligence/works-with-your-stack.svg"
            alt="با استک شما کار می‌کند"
            width={800}
            height={400}
            className="w-full h-auto mx-auto"
            loading="lazy"
          />
        </div>

        <Link
          href="/learn/metabase-basics/administration/administration-and-operation/metabase-and-your-db"
          className="inline-flex items-center gap-2 text-metabase-primary hover:text-metabase-primary-dark font-semibold"
        >
          بیشتر درباره نحوه کار Metabase با پایگاه داده شما بیاموزید
          <Image
            src="/images/chevron_blue_right.svg"
            alt=""
            width={16}
            height={16}
            className="transform rotate-180"
          />
        </Link>
      </div>
    </div>
  );
};

export default WorksWithStackSection;
