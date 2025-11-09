import React from "react";
import Image from "next/image";

const ArrowSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="row justify-center">
        <div className="flex flex-row-reverse col-xs-12 justify-center items-center pt-9 pb-3 relative">
          <Image
            alt="Curved Arrow"
            src="/images/curved-arrow.svg"
            width={18}
            height={18}
            className="ml-2"
          />
          <p className="mb-0 ml-2 text-metabase-text-secondary pb-3 text-sm font-bold">
            در کمتر از ۳ دقیقه اولین داشبورد تحلیلی خود را ایجاد کنید
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrowSection;
