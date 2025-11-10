import React from "react";

type PricingLogo = {
  src: string;
  alt: string;
};

type PricingFeature = {
  text: string;
};

type PricingTheme = "yellow" | "green" | "blue" | "purple" | "gray";

export type PricingPlanCardProps = {
  title: string;
  description?: string;
  isFree?: boolean;
  customPricingNote?: string;
  priceLabelMonthly?: string;
  priceLabelAnnual?: string;
  billingMode?: "monthly" | "annual";
  usersIncludedNote?: string;
  ctaLabel: string;
  ctaHref: string;
  compareHref?: string;
  theme: PricingTheme;
  features: PricingFeature[];
  logos?: PricingLogo[];
  deploymentNote?: string;
};

const themeClasses: Record<PricingTheme, string> = {
  yellow:
    "border-yellow-300/60 hover:shadow-yellow-100/60 focus-visible:ring-yellow-300",
  green:
    "border-emerald-300/60 hover:shadow-emerald-100/60 focus-visible:ring-emerald-300",
  blue: "border-blue-300/60 hover:shadow-blue-100/60 focus-visible:ring-blue-300",
  purple:
    "border-purple-300/60 hover:shadow-purple-100/60 focus-visible:ring-purple-300",
  gray: "border-gray-200 hover:shadow-gray-100 focus-visible:ring-gray-300",
};

const badgeClasses: Record<PricingTheme, string> = {
  yellow: "bg-yellow-50 text-yellow-700",
  green: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
  gray: "bg-gray-50 text-gray-700",
};

export const PricingPlanCard: React.FC<PricingPlanCardProps> = ({
  title,
  description,
  isFree,
  customPricingNote,
  priceLabelMonthly,
  priceLabelAnnual,
  billingMode,
  usersIncludedNote,
  ctaLabel,
  ctaHref,
  compareHref,
  theme,
  features,
  logos,
  deploymentNote,
}) => {
  const rootTheme = themeClasses[theme];
  const chipTheme = badgeClasses[theme];

  const handleKeyDown: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      (e.currentTarget as HTMLAnchorElement).click();
      e.preventDefault();
    }
  };

  return (
    <div
      className={`rounded-2xl border ${rootTheme} transition-shadow duration-200 bg-white`}
    >
      <div className="p-6 md:p-7">
        <h2 className="text-neutral-800 text-xl md:text-2xl font-bold mb-2">
          {title}
        </h2>
        {description ? (
          <p className="text-neutral-600 text-sm leading-6 mb-4">
            {description}
          </p>
        ) : null}

        {/* Pricing */}
        <div className="mb-3">
          {isFree ? (
            <span className="text-neutral-800 font-bold text-lg">رایگان</span>
          ) : customPricingNote ? (
            <span className="text-neutral-800 font-bold text-base">
              {customPricingNote}
            </span>
          ) : (
            <div className="flex items-center gap-2 text-neutral-800 font-bold">
              {billingMode === "annual" ? (
                <span className="text-base">{priceLabelAnnual}</span>
              ) : (
                <span className="text-base">{priceLabelMonthly}</span>
              )}
            </div>
          )}
        </div>

        {usersIncludedNote ? (
          <div
            className={`inline-flex items-center px-2 py-1 rounded ${chipTheme} mb-4`}
          >
            <span className="text-xs">{usersIncludedNote}</span>
          </div>
        ) : null}

        <div className="space-y-3 mt-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-bold outline-none focus-visible:ring-2"
            role="button"
            aria-label={ctaLabel}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {ctaLabel}
          </a>
          {compareHref ? (
            <a
              href={compareHref}
              className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-bold text-blue-600 hover:text-blue-700 focus-visible:ring-2 outline-none"
              aria-label="مشاهدهٔ جزئیات کامل پلن"
            >
              مشاهدهٔ جزئیات پلن
            </a>
          ) : null}
          {deploymentNote ? (
            <p className="text-neutral-600 text-sm">{deploymentNote}</p>
          ) : null}
        </div>

        <ul className="mt-5 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-neutral-800 text-sm"
            >
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

        {logos && logos.length > 0 ? (
          <div className="mt-5">
            <div className="text-neutral-500 text-xs mb-2">مورد اعتماد:</div>
            <div className="flex flex-wrap gap-3 items-center">
              {logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  aria-label={logo.alt}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PricingPlanCard;
