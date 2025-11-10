"use client";

import Image from "next/image";
import React from "react";
import {
  FeatureRow,
  PlanInfo,
  planComparisonSections,
  planInfos,
} from "@/data/planComparison";

const gridTemplate =
  "grid-cols-[minmax(220px,280px)_repeat(4,minmax(180px,1fr))]";

const Tooltip: React.FC<{ content: string }> = ({ content }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const tooltipId = React.useId();

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
    if (event.key === "Enter" || event.key === " ") {
      setIsOpen((prev) => !prev);
      event.preventDefault();
    }
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-400 text-[10px] font-bold text-neutral-500 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-300"
        aria-label="توضیح بیشتر"
        aria-describedby={isOpen ? tooltipId : undefined}
        onKeyDown={handleKeyDown}
      >
        i
      </button>
      <div
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full z-20 mb-2 w-48 rounded-md bg-neutral-900 px-3 py-2 text-xs leading-5 text-white shadow-lg transition-opacity duration-150 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {content}
        <span className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-neutral-900" />
      </div>
    </div>
  );
};

const PlanHeader: React.FC = () => (
  <div
    className={`hidden lg:grid ${gridTemplate} items-end gap-3 rounded-t-3xl border border-transparent px-6 pb-6 pt-8 shadow-sm`}
  >
    <div className="text-sm font-bold text-neutral-500">ویژگی</div>
    {planInfos.map((plan) => (
      <div
        key={plan.key}
        className="flex flex-col items-center gap-3 text-center"
      >
        <div className="text-lg font-bold text-neutral-800">{plan.title}</div>
        <a
          href={plan.ctaHref}
          className="inline-flex items-center justify-center rounded-full border border-gray-900 px-4 py-1.5 text-xs font-bold text-blue-600 transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          {plan.ctaLabel}
        </a>
      </div>
    ))}
  </div>
);

type PlanComparisonCellProps = {
  plan: PlanInfo;
  row: FeatureRow;
};

const PlanComparisonCell: React.FC<PlanComparisonCellProps> = ({
  plan,
  row,
}) => {
  const value = row.values[plan.key];

  if (value.type === "empty") {
    return (
      <div className="flex min-h-[64px] items-center justify-center text-neutral-300">
        —
      </div>
    );
  }

  if (value.type === "text") {
    return (
      <div className="flex min-h-[64px] items-center justify-center px-4 text-sm text-neutral-600">
        {value.text}
      </div>
    );
  }

  return (
    <div className="flex min-h-[64px] flex-col items-center justify-center gap-1 px-4 text-center">
      <Image
        src="/images/icons/rounded-checkmark.svg"
        alt="شامل است"
        width={18}
        height={18}
      />
      {value.note ? (
        <span className="text-xs text-neutral-500">{value.note}</span>
      ) : null}
    </div>
  );
};

type FeatureLabelProps = {
  row: FeatureRow;
};

const FeatureLabel: React.FC<FeatureLabelProps> = ({ row }) => (
  <div className="flex min-h-[64px] flex-col justify-center gap-2 px-4 py-3 text-right">
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-neutral-800">
        {row.label}
      </span>
      {row.tooltip ? <Tooltip content={row.tooltip} /> : null}
    </div>
    {row.href ? (
      <a
        href={row.href}
        className="text-xs font-bold text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        اطلاعات بیشتر
      </a>
    ) : null}
  </div>
);

const PlanComparison: React.FC = () => (
  <div className="rounded-3xl border border-gray-900  shadow-sm">
    <div className="relative overflow-hidden rounded-t-3xl">
      <div className="sticky top-24 z-10">
        <PlanHeader />
      </div>
    </div>

    <div className="divide-y divide-gray-900">
      {planComparisonSections.map((section) => (
        <div key={section.id} className="space-y-4 px-4 py-6 lg:px-6">
          <div className="px-2 text-right lg:px-0">
            <h3 className="text-lg font-bold text-neutral-800">
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              {section.description}
            </p>
          </div>

          <div className="overflow-x-auto">
            <div
              className={`grid ${gridTemplate} gap-px rounded-2xl text-center text-sm`}
            >
              <div className="flex rounded-2xl rounded-br-none rounded-tr-none px-4 py-3 text-right text-sm font-semibold text-neutral-600">
                ویژگی
              </div>
              {planInfos.map((plan) => (
                <div
                  key={plan.key}
                  className="flex items-center justify-center  px-4 py-3 text-sm font-semibold text-neutral-600"
                >
                  {plan.title}
                </div>
              ))}

              {section.rows.map((row) => (
                <React.Fragment key={row.id}>
                  <div className="group rounded-bl-2xl rounded-tl-2xl  text-right transition hover:bg-blue-50">
                    <FeatureLabel row={row} />
                  </div>
                  {planInfos.map((plan) => (
                    <div
                      key={`${row.id}-${plan.key}`}
                      className=" transition hover:bg-blue-50"
                    >
                      <PlanComparisonCell plan={plan} row={row} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PlanComparison;
