import Image from "next/image";
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
  className?: string;
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
  yellow: "hover:shadow-yellow-100/70",
  green: "hover:shadow-emerald-100/70",
  blue: "hover:shadow-blue-100/70",
  purple: "hover:shadow-purple-100/70",
  gray: "hover:shadow-neutral-200",
};

const themeAccentText: Record<PricingTheme, string> = {
  yellow: "text-yellow-500",
  green: "text-emerald-600",
  blue: "text-blue-600",
  purple: "text-purple-600",
  gray: "text-neutral-500",
};

const themePrimaryCta: Record<PricingTheme, string> = {
  yellow:
    "bg-yellow-400 hover:bg-yellow-500 text-neutral-900 focus-visible:ring-yellow-300",
  green:
    "bg-emerald-600 hover:bg-emerald-700 text-white focus-visible:ring-emerald-300",
  blue: "bg-blue-600 hover:bg-blue-700 text-white focus-visible:ring-blue-300",
  purple:
    "bg-purple-600 hover:bg-purple-700 text-white focus-visible:ring-purple-300",
  gray: "bg-neutral-900 hover:bg-black text-white focus-visible:ring-neutral-300",
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
  className,
  compareHref,
  theme,
  features,
  logos,
  deploymentNote,
}) => {
  const rootTheme = themeClasses[theme];
  const accentText = themeAccentText[theme];
  const chipTheme = badgeClasses[theme];
  const ctaTheme = themePrimaryCta[theme];

  const handleKeyDown: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      (e.currentTarget as HTMLAnchorElement).click();
      e.preventDefault();
    }
  };

  return (
    <div className={`border-metabase-border-light ${rootTheme} ${className}`}>
      <div className="p-5 md:p-6">
        <h2 className="text-neutral-900 text-lg md:text-xl font-bold mb-2">
          {title}
        </h2>
        {description ? (
          <p className="text-neutral-500 text-[13px] leading-6 mb-3">
            {description}
          </p>
        ) : null}

        {/* Pricing */}
        <div className="mb-2">
          {isFree ? (
            <span className="text-neutral-800 font-bold text-base">رایگان</span>
          ) : customPricingNote ? (
            <span className="text-neutral-800 font-bold text-base">
              {customPricingNote}
            </span>
          ) : (
            <div className="flex items-center gap-2 text-neutral-800 font-bold">
              {billingMode === "annual" ? (
                <span className="text-[15px]">{priceLabelAnnual}</span>
              ) : (
                <span className="text-[15px]">{priceLabelMonthly}</span>
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

        <div className="space-y-3 mt-3">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className={`w-full inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-bold outline-none focus-visible:ring-2 ${ctaTheme}`}
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
              مشاهدهٔ جزئیات کامل پلن
            </a>
          ) : null}
          {deploymentNote ? (
            <p className="text-neutral-500 text-[13px]">{deploymentNote}</p>
          ) : null}
        </div>

        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-neutral-600 text-[13px]"
            >
              <span className={`mt-0.5 ${accentText}`}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 7L9 18L4 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

        {logos && logos.length > 0 ? (
          <div className="mt-5">
            <div className="text-neutral-500 text-xs mb-2">مورد اعتماد:</div>
            <div className="flex flex-wrap gap-3 items-center">
              {logos.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  width={38}
                  height={38}
                  className="h-6 w-auto rounded-full"
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
