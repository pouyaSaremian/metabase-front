import type { ReactNode } from "react";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { docsNavigationData } from "@/data/docsNavigation";
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
      id: "getting-started",
      title: "شروع کار",
      level: 2,
      href: "#getting-started",
    },
    {
      id: "main-categories",
      title: "دسته‌بندی‌های اصلی",
      level: 2,
      href: "#main-categories",
    },
    {
      id: "analytics",
      title: "تحلیل و بررسی",
      level: 3,
      href: "#analytics",
    },
    {
      id: "data-modeling",
      title: "مدل‌سازی داده",
      level: 3,
      href: "#data-modeling",
    },
    {
      id: "databases",
      title: "پایگاه‌های داده",
      level: 3,
      href: "#databases",
    },
    {
      id: "permissions",
      title: "مجوزها",
      level: 3,
      href: "#permissions",
    },
    {
      id: "embedding",
      title: "جاسازی",
      level: 3,
      href: "#embedding",
    },
  ];

  return (
    <DocsLayout
      version="latest"
      sidebarData={docsNavigationData}
      tocItems={tocItems}
    >
      {children}
    </DocsLayout>
  );
}
