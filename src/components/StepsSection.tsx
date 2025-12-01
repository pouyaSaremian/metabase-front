import type { ReactNode } from "react";

interface StepItem {
  number?: string;
  content: ReactNode;
}

type HeadingLevel = "h2" | "h3";

interface StepsSectionProps {
  title: string;
  steps: StepItem[];
  sectionClassName?: string;
  containerClassName?: string;
  listClassName?: string;
  cardClassName?: string;
  numberClassName?: string;
  textClassName?: string;
  titleTag?: HeadingLevel;
}

const defaultSectionClass =
  "py-16 bg-metabase-bg-neutral-98 max-w-xl bg-red-500";
const defaultContainerClass =
  "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 rounded-3xl bg-white p-8 text-center";
const defaultListClass = "mt-10 grid gap-6 md:grid-cols-2";
const defaultCardClass =
  "flex items-start gap-4 rounded-2xl border border-blue-100 bg-metabase-bg-neutral-98 p-5 text-right w-full";
const defaultNumberClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-metabase-primary text-base font-bold text-white";
const defaultTextClass = "flex-1 text-base leading-relaxed text-gray-700";

export default function StepsSection({
  title,
  steps,
  sectionClassName = defaultSectionClass,
  containerClassName = defaultContainerClass,
  listClassName = defaultListClass,
  cardClassName = defaultCardClass,
  numberClassName = defaultNumberClass,
  textClassName = defaultTextClass,
  titleTag = "h3",
}: StepsSectionProps) {
  const TitleTag = titleTag;

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <TitleTag className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {title}
        </TitleTag>
        <div className={listClassName}>
          {steps.map((step, index) => (
            <div key={`step-${index}`} className={cardClassName}>
              <div className={numberClassName}>
                {step.number ?? `${index + 1}`}
              </div>
              <p className={textClassName}>{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
