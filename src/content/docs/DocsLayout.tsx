import type { ReactNode } from "react";
import type { DocsLayoutProps } from "@/types/docs";
import { DocsSidebar } from "./DocsSidebar";
import { AsideMenu } from "@/components/common/AsideMenu";
import { DocsTOC } from "./DocsTOC";
import { cn } from "@/lib/utils";
import type { AsideMenuSection } from "@/components/common/AsideMenu";

interface ExtendedDocsLayoutProps extends Omit<DocsLayoutProps, "sidebarData"> {
  sidebarData?: DocsLayoutProps["sidebarData"];
  sidebarSections?: AsideMenuSection[];
}

export const DocsLayout = ({
  children,
  version = "latest",
  sidebarData,
  sidebarSections,
  tocItems,
}: ExtendedDocsLayoutProps): ReactNode => {
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
        {sidebarSections ? (
          <AsideMenu
            sections={sidebarSections}
            toggler={{
              docs: {
                label: "مستندات",
                href: "/docs/latest",
              },
              learn: {
                label: "یادگیری",
                href: "/learn",
              },
            }}
            className=""
          />
        ) : sidebarData ? (
          <DocsSidebar data={sidebarData} version={version} className="" />
        ) : null}
        <article
          className={cn(
            "learn__post learn__article",
            "bg-metabase-bg-neutral-98",
            "shadow-[1000px_0_0_#fafbfe]",
            "relative w-full"
          )}
        >
          {children}
        </article>
        {hasTOC && tocItems ? <DocsTOC items={tocItems} /> : null}
      </div>
    </div>
  );
};
