import type { ReactNode } from "react";
import type { DocsLayoutProps } from "@/types/docs";
import { DocsSidebar } from "./DocsSidebar";
import { DocsTOC } from "./DocsTOC";
import { cn } from "@/lib/utils";

export const DocsLayout = ({
  children,
  version = "latest",
  sidebarData,
  tocItems,
}: DocsLayoutProps): ReactNode => {
  const hasTOC = tocItems && tocItems.length > 0;

  return (
    <div className="w-full">
      <div
        className={cn(
          "border-b border-metabase-bg-blue-95",
          "shadow-[1000px_0_0_#fafbfe]",
          "grid",
          "mx-auto w-full",
          // Base: smaller screens
          hasTOC ? "max-w-[976px]" : "max-w-[678px]",
          hasTOC ? "grid-cols-[226px_1fr_250px]" : "grid-cols-[226px_1fr]",
          // lg breakpoint (992px+)
          "lg:shadow-[600px_0_0_#fafbfe]",
          hasTOC ? "lg:max-w-[1218px]" : "lg:max-w-[920px]",
          hasTOC
            ? "lg:grid-cols-[226px_1fr_250px]"
            : "lg:grid-cols-[226px_1fr]",
          // xl breakpoint (1280px+)
          hasTOC ? "xl:max-w-[1408px]" : "xl:max-w-[1100px]",
          // 2xl breakpoint (1536px+)
          hasTOC ? "2xl:max-w-[1638px]" : "2xl:max-w-[1280px]",
          hasTOC
            ? "2xl:grid-cols-[226px_1fr_250px]"
            : "2xl:grid-cols-[226px_1fr]",
          // Mobile: single column
          "max-lg:shadow-[-400px_0_0_#fafbfe,400px_0_0_#fafbfe] max-lg:grid-cols-1"
        )}
      >
        <DocsSidebar data={sidebarData} version={version} className="" />
        <article
          className={cn(
            "bg-metabase-bg-neutral-98",
            "shadow-[1000px_0_0_#fafbfe]",
            "py-16 pl-[72px] pr-0",
            "relative w-full",
            "rtl:pl-0 rtl:pr-[72px]",
            "max-lg:px-5"
          )}
        >
          <div className="w-full">{children}</div>
        </article>
        {hasTOC && tocItems ? <DocsTOC items={tocItems} /> : null}
      </div>
    </div>
  );
};
