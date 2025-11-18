import React from "react";
import Image from "next/image";

interface TestimonialProps {
  text: string;
  author: string;
  company: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  company,
  imageSrc,
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-metabase-text-primary mb-8 leading-relaxed">
          {text}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Image
            src={imageSrc}
            alt={`عکس ${author}`}
            width={84}
            height={84}
            className="rounded-full"
            loading="lazy"
          />
          <div>
            <p className="font-semibold text-metabase-text-primary mb-1">
              {author}
            </p>
            <p className="text-metabase-text-secondary text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;


