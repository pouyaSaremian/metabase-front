import React from "react";
import Link from "next/link";

interface CTACard {
  badge: string;
  title: string;
  href: string;
}

interface CTACardsSectionProps {
  cards?: CTACard[];
}

const CTACardsSection: React.FC<CTACardsSectionProps> = ({ cards }) => {
  const defaultCards: CTACard[] = [
    {
      badge: "ویدیو دمو",
      title: "از صفر تا داشبورد در 5 دقیقه",
      href: "/demo",
    },
    {
      badge: "وبینار",
      title: "تور Metabase برای مبتدیان",
      href: "/events/metabase-for-beginners",
    },
    {
      badge: "ویژگی",
      title: "داشبوردهای تعاملی دریافت کنید",
      href: "/features/analytics-dashboards",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-metabase-text-primary mb-12">
          بیشتر درباره Metabase بیاموزید
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {displayCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="bg-white border border-metabase-border-light rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow text-right block"
            >
              <span className="bg-metabase-bg-light text-metabase-primary text-xs font-bold px-3 py-2 rounded-lg inline-block mb-4 uppercase">
                {card.badge}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-metabase-text-primary">
                {card.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTACardsSection;
