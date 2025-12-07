import type { ReactNode } from "react";
import type { DocsLayoutProps } from "@/types/docs";
import { ContentLayout } from "@/components/common/ContentLayout";
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
  return (
    <ContentLayout
      sidebarSections={sidebarSections}
      sidebarData={sidebarData}
      version={version}
      tocItems={tocItems}
    >
      {children}
    </ContentLayout>
  );
};
