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
        "learn__post__content",
        "w-full",
        "min-w-0",
        "overflow-x-hidden",
        // Typography - matching original CSS
        "[&_p]:text-[18px] [&_p]:leading-[30px] [&_p]:text-[#4c5773] [&_p]:mb-3.5 [&_p]:mt-2",
        "[&_li]:text-[18px] [&_li]:leading-[30px] [&_li]:text-[#4c5773]",
        "[&_h1]:text-[32px] [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-gray-900",
        "[&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-gray-900 [&_h2]:w-full",
        "[&_h2:first-of-type]:border-b [&_h2:first-of-type]:border-[#c6c9d2] [&_h2:first-of-type]:pb-4",
        "[&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-gray-900",
        "[&_h4]:text-[18px] [&_h4]:font-bold [&_h4]:mt-8 [&_h4]:mb-4 [&_h4]:text-gray-900",
        // Links - no underline, darker color on hover
        "[&_a]:text-[#509ee3] [&_a]:font-bold [&_a]:no-underline [&_a]:inline-block",
        "hover:[&_a]:text-[#1c6bb0]",
        // Code
        "[&_code]:text-[#509ee3] [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-base",
        "[&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded",
        // Images
        "[&_img]:rounded-lg [&_img]:shadow-md [&_img]:max-w-full",
        // Lists
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4",
        "[&_li]:mb-2",
        // Blockquotes
        "[&_blockquote]:border-r-4 [&_blockquote]:border-[#509ee3] [&_blockquote]:pr-4 [&_blockquote]:bg-gray-50 [&_blockquote]:my-4",
        "rtl:[&_blockquote]:border-l-4 rtl:[&_blockquote]:border-r-0 rtl:[&_blockquote]:pl-4 rtl:[&_blockquote]:pr-0",
        // Tables - matching learn component styling
        "[&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:bg-white [&_table]:border [&_table]:border-gray-200 [&_table]:rounded",
        "[&_table_thead]:bg-gray-50",
        "[&_table_th]:px-4 [&_table_th]:py-3 [&_table_th]:text-right [&_table_th]:font-bold [&_table_th]:text-[#22242b] [&_table_th]:border-b [&_table_th]:border-gray-200",
        "[&_table_td]:px-4 [&_table_td]:py-3 [&_table_td]:text-right [&_table_td]:border-b [&_table_td]:border-gray-100",
        "[&_table_tbody_tr:hover]:bg-gray-50",
        "[&_table_tbody_tr:last-child_td]:border-b-0",
        // RTL adjustments
        "rtl:[&_ul]:pr-6 rtl:[&_ul]:pl-0",
        "rtl:[&_ol]:pr-6 rtl:[&_ol]:pl-0",
        "rtl:[&_table_th]:text-right",
        "rtl:[&_table_td]:text-right",
        // Mobile table responsiveness
        "max-md:[&_table]:block max-md:[&_table]:overflow-x-auto",
        "max-md:[&_table_thead]:hidden",
        "max-md:[&_table_tbody_tr]:block max-md:[&_table_tbody_tr]:mb-4 max-md:[&_table_tbody_tr]:border max-md:[&_table_tbody_tr]:rounded",
        "max-md:[&_table_td]:block max-md:[&_table_td]:border-0 max-md:[&_table_td]:px-4 max-md:[&_table_td]:py-2",
        "max-md:[&_table_td]:before:content-[attr(data-label)] max-md:[&_table_td]:before:font-bold max-md:[&_table_td]:before:block max-md:[&_table_td]:before:mb-1",
        className
      )}
    >
      {children}
    </div>
  );
};
