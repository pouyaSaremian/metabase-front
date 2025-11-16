"use client";

import Link from "next/link";
import Image from "next/image";

interface ConnectorCardProps {
  name: string;
  description: string;
  imagePath: string;
  href: string;
}

const ConnectorCard: React.FC<ConnectorCardProps> = ({
  name,
  description,
  imagePath,
  href,
}) => {
  return (
    <Link
      href={href}
      className="bg-white border border-[#e4ecfb] rounded-xl text-metabase-text-primary gap-2 p-6 transition-shadow duration-300 hover:shadow-[0_8px_8px_-4px_rgba(16,24,40,0.031372549),0_20px_24px_-4px_rgba(16,24,40,0.0784313725)] block"
    >
      <div className="logo-and-title flex items-center text-xl font-bold gap-2 leading-[22px] mb-3 text-right">
        <div className="border border-[#e4ecfb] rounded-lg h-10 w-10 p-2 shrink-0 flex items-center justify-center">
          <Image
            src={imagePath}
            alt={name}
            width={24}
            height={24}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <span>{name}</span>
      </div>
      <p className="text-metabase-text-secondary text-base font-normal leading-6 mb-0 text-right">
        {description}
      </p>
    </Link>
  );
};

export default ConnectorCard;
