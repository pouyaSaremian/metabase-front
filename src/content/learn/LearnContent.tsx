import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LearnContentProps {
  children: ReactNode;
  className?: string;
}

export const LearnContent: React.FC<LearnContentProps> = ({
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
        // Typography - matching original HTML/CSS
        "[&_p]:text-[18px] [&_p]:leading-[30px] [&_p]:text-[#4c5773] [&_p]:mb-5 [&_p]:mt-2",
        "[&_li]:text-[18px] [&_li]:leading-[30px] [&_li]:text-[#4c5773]",
        // Headings - matching .bootstrap .learn div.learn__post__content and .bootstrap .learn__post
        // h1: 40px, font-weight 900, color #22242b (from main.css)
        "[&_h1]:text-[40px] [&_h1]:font-black [&_h1]:text-[#22242b]",
        // h2: 24px (1.5rem), font-weight 700, margin 64px 0 24px, color #22242b
        "[&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-[#22242b] [&_h2]:leading-[1.34] [&_h2]:w-full",
        "[&_h2:first-of-type]:border-b [&_h2:first-of-type]:border-[#c6c9d2] [&_h2:first-of-type]:pb-4",
        // h3: need to check, but likely similar to h2 or base
        "[&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-[#22242b] [&_h3]:leading-[1.34]",
        // h4: 1.15rem (18.4px), font-weight 700, line-height 1.34
        "[&_h4]:text-[1.15rem] [&_h4]:font-bold [&_h4]:mt-8 [&_h4]:mb-4 [&_h4]:text-[#22242b] [&_h4]:leading-[1.34]",
        // h5, h6: use base styles with font-weight 700
        "[&_h5]:text-[18px] [&_h5]:font-bold [&_h5]:mt-6 [&_h5]:mb-3 [&_h5]:text-[#22242b]",
        "[&_h6]:text-[16px] [&_h6]:font-bold [&_h6]:mt-6 [&_h6]:mb-3 [&_h6]:text-[#22242b]",
        // Links - matching original style
        "[&_a]:text-[#509ee3] [&_a]:font-bold [&_a]:no-underline [&_a]:inline-block",
        "hover:[&_a]:text-[#1c6bb0]",
        // Inline code - matching .bootstrap .learn article code
        // Only style code that is NOT inside pre (inline code)
        "[&_code]:bg-[#e4ecfb] [&_code]:rounded-sm [&_code]:text-[#5a6072] [&_code]:px-[2px] [&_code]:py-0 [&_code]:font-mono [&_code]:text-base [&_code]:whitespace-normal",
        // Code blocks - matching .bootstrap .learn article pre code structure
        // Structure: .language-* .highlighter-rouge > .highlight > pre.highlight > code
        "[&_.highlighter-rouge]:block [&_.highlighter-rouge]:my-4 [&_.highlighter-rouge]:max-w-full [&_.highlighter-rouge]:w-full",
        "[&_.highlighter-rouge_.highlight]:block [&_.highlighter-rouge_.highlight]:max-w-full [&_.highlighter-rouge_.highlight]:w-full",
        // Pre tag inside .highlight (matching .bootstrap .learn pre, .bootstrap .learn pre code)
        // Force LTR direction for code blocks (CSS handles direction: ltr)
        "[&_.highlighter-rouge_.highlight_pre]:bg-white [&_.highlighter-rouge_.highlight_pre]:rounded-lg [&_.highlighter-rouge_.highlight_pre]:p-6 [&_.highlighter-rouge_.highlight_pre]:overflow-x-auto [&_.highlighter-rouge_.highlight_pre]:my-0 [&_.highlighter-rouge_.highlight_pre]:shadow-[0_3px_24px_rgba(0,0,0,0.08)] [&_.highlighter-rouge_.highlight_pre]:text-left [&_.highlighter-rouge_.highlight_pre]:max-w-full [&_.highlighter-rouge_.highlight_pre]:w-full",
        // Code tag inside pre.highlight (matching .bootstrap .learn article pre code)
        "[&_.highlighter-rouge_.highlight_pre_code]:bg-white [&_.highlighter-rouge_.highlight_pre_code]:text-[#22242b] [&_.highlighter-rouge_.highlight_pre_code]:font-['Roboto_Mono',monospace] [&_.highlighter-rouge_.highlight_pre_code]:p-0 [&_.highlighter-rouge_.highlight_pre_code]:text-sm [&_.highlighter-rouge_.highlight_pre_code]:leading-relaxed [&_.highlighter-rouge_.highlight_pre_code]:whitespace-pre [&_.highlighter-rouge_.highlight_pre_code]:block [&_.highlighter-rouge_.highlight_pre_code]:rounded-lg [&_.highlighter-rouge_.highlight_pre_code]:text-left",
        // Override inline code styles for code inside pre (any pre, not just highlighter-rouge)
        "[&_pre_code]:bg-transparent [&_pre_code]:text-[#22242b] [&_pre_code]:px-0 [&_pre_code]:py-0 [&_pre_code]:font-['Roboto_Mono',monospace] [&_pre_code]:text-sm [&_pre_code]:whitespace-pre [&_pre_code]:text-left",
        // Pre tags (matching .bootstrap .learn pre) - Force LTR (CSS handles direction: ltr)
        "[&_pre]:bg-white [&_pre]:rounded-lg [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:my-4 [&_pre]:shadow-[0_3px_24px_rgba(0,0,0,0.08)] [&_pre]:text-left [&_pre]:max-w-full [&_pre]:w-full",
        // Inline code in headings - matching .bootstrap .learn__post h2 code
        "[&_h2_code]:bg-[#e4ecfb] [&_h2_code]:rounded-sm [&_h2_code]:text-[#5a6072] [&_h2_code]:p-0 [&_h2_code]:px-0 [&_h2_code]:whitespace-normal",
        "[&_h3_code]:bg-[#e4ecfb] [&_h3_code]:rounded-sm [&_h3_code]:text-[#5a6072] [&_h3_code]:p-0 [&_h3_code]:px-0 [&_h3_code]:whitespace-normal",
        "[&_h4_code]:bg-[#e4ecfb] [&_h4_code]:rounded-sm [&_h4_code]:text-[#5a6072] [&_h4_code]:p-0 [&_h4_code]:px-0 [&_h4_code]:whitespace-normal",
        "[&_h5_code]:bg-[#e4ecfb] [&_h5_code]:rounded-sm [&_h5_code]:text-[#5a6072] [&_h5_code]:p-0 [&_h5_code]:px-0 [&_h5_code]:whitespace-normal",
        // Code in links
        "[&_a_code]:text-[#509ee3] [&_a_code]:transition-colors [&_a_code]:duration-[0.25s]",
        "hover:[&_a_code]:text-[#509ee3]",
        // Images - matching .bootstrap .learn article img
        "[&_img]:bg-white [&_img]:rounded-[10px] [&_img]:shadow-[0_3px_24px_rgba(0,0,0,0.08)] [&_img]:mt-[1.2em] [&_img]:mb-[1.728em] [&_img]:max-w-full [&_img]:overflow-hidden",
        // Lists
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4",
        "[&_li]:mb-2",
        // Blockquotes - matching .bootstrap .learn blockquote
        "[&_blockquote]:bg-[#eef6fc] [&_blockquote]:border [&_blockquote]:border-[#509ee3] [&_blockquote]:rounded-[0.625rem] [&_blockquote]:text-[#5a6072] [&_blockquote]:my-8 [&_blockquote]:p-6",
        "[&_blockquote_p]:text-base [&_blockquote_p]:leading-6 [&_blockquote_p]:m-0",
        // Tables - matching original HTML table styling
        "[&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:bg-white",
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
