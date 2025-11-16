import React from "react";
import Image from "next/image";

const TrustedBySection: React.FC = () => {
  const logos = [
    { src: "/images/logos/Huggingface.svg", alt: "لوگوی Huggingface" },
    { src: "/images/logos/mcdonalds.svg", alt: "لوگوی McDonald's" },
    { src: "/images/logos/huma.svg", alt: "لوگوی Huma" },
    { src: "/images/logos/capital-one.svg", alt: "لوگوی Capital One" },
    { src: "/images/logos/home/airbyte.svg", alt: "لوگوی Airbyte" },
    { src: "/images/logos/betterment.svg", alt: "لوگوی Betterment" },
    {
      src: "/images/logos/deutsche-telekom.svg",
      alt: "لوگوی Deutsche Telekom",
    },
    { src: "/images/logos/kong.svg", alt: "لوگوی Kong" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-metabase-text-secondary mb-8 text-lg">
          بیش از 80,000 شرکت به Metabase اعتماد دارند
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
