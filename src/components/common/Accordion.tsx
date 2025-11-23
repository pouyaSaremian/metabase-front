"use client";

import { ChevronDown } from "lucide-react";
import React, { useId, useState } from "react";

export interface AccordionItem {
  id?: string;
  question: string;
  answer: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** if provided, accordion acts controlled */
  openIndex?: number | null;
  /** default open index for uncontrolled mode */
  defaultOpenIndex?: number | null;
  /** called when an item toggles (uncontrolled and controlled) */
  onToggle?: (index: number | null) => void;
  /** additional className on root */
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  openIndex,
  defaultOpenIndex = null,
  onToggle,
  className = "",
}) => {
  const isControlled = typeof openIndex === "number" || openIndex === null;
  const [internalOpen, setInternalOpen] = useState<number | null>(
    defaultOpenIndex
  );
  const currentOpen = isControlled ? openIndex : internalOpen;
  const groupId = useId();

  const handleToggle = (index: number) => {
    const next = currentOpen === index ? null : index;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = currentOpen === index;
        const answerId = `${groupId}-answer-${index}`;
        const buttonId = `${groupId}-button-${index}`;
        const paddingClasses =
          index === 0
            ? "border-t-0 pt-0 pb-6"
            : "border-t border-[#E4ECFB] py-6";
        const lastPadding = index === items.length - 1 ? "pb-3 md:pb-3" : "";

        return (
          <div key={item.id || index} className="w-full">
            <button
              id={buttonId}
              type="button"
              className={`flex w-full justify-between gap-5 text-right text-metabase-text-primary font-bold cursor-pointer focus:outline-none transition-colors duration-200 ${paddingClasses} ${lastPadding}`}
              aria-controls={answerId}
              aria-expanded={isOpen}
              onClick={() => handleToggle(index)}
            >
              <div className="text-[1rem] leading-6">{item.question}</div>
              <ChevronDown
                className={`h-[14px] w-[14px] text-[#509EE3] transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "pt-[5px] pb-2" : "pt-0 pb-0"
              }`}
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden text-[1rem] leading-6">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
