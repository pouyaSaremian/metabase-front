import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomerLogosSection: React.FC = () => {
  const logos = [
    {
      src: "/images/logos/Huggingface.svg",
      alt: "لوگوی Huggingface",
    },
    {
      src: "/images/logos/mcdonalds.svg",
      alt: "لوگوی McDonald's",
    },
    {
      src: "/images/logos/huma.svg",
      alt: "لوگوی Huma",
    },
    {
      src: "/images/logos/capital-one.svg",
      alt: "لوگوی Capital One",
    },
    {
      src: "/images/logos/home/airbyte.svg",
      alt: "لوگوی Airbyte",
    },
    {
      src: "/images/logos/betterment.svg",
      alt: "لوگوی Betterment",
    },
    {
      src: "/images/logos/deutsche-telekom.svg",
      alt: "لوگوی Deutsche Telekom",
    },
    {
      src: "/images/logos/kong.svg",
      alt: "لوگوی Kong",
    },
  ];

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center mb-6">
          <p className="text-base md:text-lg text-metabase-text-secondary my-0 mb-3 py-0">
            <b>Metabase توسط بیش از 80,000 شرکت مورد اعتماد است</b>
          </p>
        </div>

        <Link
          href="/case-studies"
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
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
        </Link>
      </div>
    </div>
  );
};

export default CustomerLogosSection;

