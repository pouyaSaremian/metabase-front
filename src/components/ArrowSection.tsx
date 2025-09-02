import React from "react";
import Image from "next/image";

const ArrowSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="row justify-center">
        <div className="flex col-xs-12 justify-center items-center pt-9 pb-3 relative">
          <Image
            alt="Curved Arrow"
            src="/images/curved-arrow.svg"
            width={24}
            height={24}
            className="ml-2"
          />
          <p className="mb-0 ml-2 text-metabase-text-secondary pb-3 text-sm font-bold">
            ببینید چگونه در ۳ دقیقه از صفر به داشبورد برسید
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrowSection;
