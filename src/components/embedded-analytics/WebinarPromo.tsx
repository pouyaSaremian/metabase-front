import React from "react";
import Image from "next/image";
import Link from "next/link";

const WebinarPromo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/events/embedded-analytics-with-metabase"
          className="flex flex-col md:flex-row items-center gap-6 bg-white border border-metabase-border-light rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <Image
            src="/images/events/categories/andrew-icon.jpg"
            alt="embedded-analytics-with-metabase"
            width={120}
            height={120}
            className="rounded-lg shrink-0"
            loading="lazy"
          />
          <div className="flex-1 text-right md:text-right">
            <p className="text-lg font-semibold text-metabase-text-primary mb-2">
              وبینار زنده: تجزیه و تحلیل تعبیه شده با Metabase.
            </p>
            <p className="text-metabase-primary flex items-center gap-2">
              همین حالا ثبت نام کنید
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  opacity="0.9"
                  d="M3 8.96338L16 21.9634L29 8.96338"
                  stroke="#509ee3"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WebinarPromo;
