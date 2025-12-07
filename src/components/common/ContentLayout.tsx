import type { ReactNode } from "react";
import { AsideMenu } from "@/components/common/AsideMenu";
import { DocsTOC } from "@/content/docs/DocsTOC";
import { DocsSidebar } from "@/content/docs/DocsSidebar";
import { cn } from "@/lib/utils";
import type { AsideMenuSection } from "@/components/common/AsideMenu";
import type { TOCItem } from "@/types/docs";
import type { DocsNavigationItem } from "@/types/docs";

interface ContentLayoutProps {
  children: ReactNode;
  sidebarSections?: AsideMenuSection[];
  sidebarData?: DocsNavigationItem[];
  version?: string;
  tocItems?: TOCItem[];
}

export const ContentLayout = ({
  children,
  sidebarSections,
  sidebarData,
  version = "latest",
  tocItems,
}: ContentLayoutProps): ReactNode => {
  const hasTOC = tocItems && tocItems.length > 0;

  return (
    <div className="w-full bg-metabase-bg-neutral-98">
      <div
        className={cn(
          "border-b border-metabase-bg-blue-95",
          "shadow-[1000px_0_0_#fafbfe]",
          "grid",
          "mx-auto w-full",
          // Base: smaller screens - matching .bootstrap .learn
          "max-w-[678px]",
          "grid-cols-[226px_1fr]",
          // lg breakpoint (992px+) - matching @media screen and (min-width:992px)
          "lg:shadow-[600px_0_0_#fafbfe]",
          "lg:max-w-[920px]",
          // xl breakpoint (1200px+) - matching @media screen and (min-width:1200px)
          "xl:max-w-[1100px]",
          // 2xl breakpoint (1400px+) - matching @media screen and (min-width:1400px)
          "2xl:max-w-[1280px]",
          // When TOC exists, adjust grid to include TOC column
          hasTOC && "lg:grid-cols-[226px_1fr_200px]",
          // Mobile: single column - matching @media screen and (max-width:991px)
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
            "relative w-full",
            "min-w-0",
            "overflow-x-hidden"
          )}
        >
          {children}
        </article>
        {hasTOC && tocItems ? <DocsTOC items={tocItems} /> : null}
      </div>
    </div>
  );
};
