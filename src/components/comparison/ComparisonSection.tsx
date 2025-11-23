import React from "react";

interface ComparisonItem {
  text: string;
  bold?: boolean;
}

interface ComparisonSectionProps {
  leftTitle: string;
  leftItems: ComparisonItem[];
  rightTitle: string;
  rightItems: ComparisonItem[];
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}) => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-metabase-text-primary mb-6">
              {leftTitle}
            </h2>
            <ul className="space-y-4">
              {leftItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-metabase-primary mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    {item.bold ? (
                      <span className="font-bold text-metabase-text-primary">
                        {item.text}
                      </span>
                    ) : (
                      <span className="text-metabase-text-secondary">
                        {item.text}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-metabase-text-primary mb-6">
              {rightTitle}
            </h2>
            <ul className="space-y-4">
              {rightItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-metabase-text-light mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    {item.bold ? (
                      <span className="font-bold text-metabase-text-primary">
                        {item.text}
                      </span>
                    ) : (
                      <span className="text-metabase-text-secondary">
                        {item.text}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
