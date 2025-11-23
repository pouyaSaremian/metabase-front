import React from "react";

interface TestimonialSectionProps {
  text: string;
  author: string;
  company: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  text,
  author,
  company,
}) => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl lg:text-2xl text-metabase-text-primary mb-8 leading-relaxed italic">
            &quot;{text}&quot;
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-metabase-text-primary text-lg">
              {author}
            </p>
            <p className="text-metabase-text-secondary">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
