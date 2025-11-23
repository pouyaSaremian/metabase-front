import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocsContentProps {
  children: ReactNode;
  className?: string;
}

export const DocsContent: React.FC<DocsContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:font-bold prose-headings:text-gray-900",
        "prose-p:text-gray-700 prose-p:leading-relaxed",
        "prose-a:text-[#509ee3] prose-a:no-underline hover:prose-a:underline",
        "prose-code:text-[#509ee3] prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
        "prose-pre:bg-gray-900 prose-pre:text-gray-100",
        "prose-strong:text-gray-900 prose-strong:font-semibold",
        "prose-ul:text-gray-700 prose-ol:text-gray-700",
        "prose-li:my-2",
        "prose-img:rounded-lg prose-img:shadow-md",
        "prose-blockquote:border-r-4 prose-blockquote:border-[#509ee3] prose-blockquote:pr-4 prose-blockquote:bg-gray-50",
        "rtl:prose-blockquote:border-l-4 rtl:prose-blockquote:border-r-0 rtl:prose-blockquote:pl-4 rtl:prose-blockquote:pr-0",
        "text-start",
        className
      )}
    >
      {children}
    </div>
  );
};
