import type { ReactNode } from "react";
import { ContentLayout } from "@/components/common/ContentLayout";
import type { AsideMenuSection } from "@/components/common/AsideMenu";
import type { TOCItem } from "@/types/docs";

interface LearnLayoutProps {
  children: ReactNode;
  sidebarSections?: AsideMenuSection[];
  tocItems?: TOCItem[];
}

export const LearnLayout = ({
  children,
  sidebarSections,
  tocItems,
}: LearnLayoutProps): ReactNode => {
  return (
    <ContentLayout sidebarSections={sidebarSections} tocItems={tocItems}>
      {children}
    </ContentLayout>
  );
};
