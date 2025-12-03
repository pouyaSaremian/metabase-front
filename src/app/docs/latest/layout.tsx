import type { ReactNode } from "react";
import { DocsLayout } from "@/content/docs/DocsLayout";
import { docsLatestNavigationSections } from "@/data/docsLatestNavigation";
import type { TOCItem } from "@/types/docs";

interface LatestDocsLayoutProps {
  children: ReactNode;
}

export default async function LatestDocsLayout({
  children,
}: LatestDocsLayoutProps) {
  // Extract TOC items from children content
  // For now, we'll generate a basic TOC from headings
  // In a real implementation, you'd parse the markdown/HTML content
  const tocItems: TOCItem[] = [
    {
      id: "first-steps",
      title: "اولین قدم‌ها",
      level: 2,
      href: "#first-steps",
    },
    {
      id: "documentation-topics",
      title: "موضوعات مستندات",
      level: 2,
      href: "#documentation-topics",
    },
    {
      id: "getting-help",
      title: "دریافت کمک",
      level: 2,
      href: "#getting-help",
    },
    {
      id: "more-resources",
      title: "منابع بیشتر",
      level: 2,
      href: "#more-resources",
    },
  ];

  return (
    <DocsLayout
      version="latest"
      sidebarSections={docsLatestNavigationSections}
      tocItems={tocItems}
    >
      {children}
    </DocsLayout>
  );
}
