export interface DocsNavigationItem {
    id: string;
    title: string;
    href: string;
    icon?: React.ReactNode;
    children?: DocsNavigationItem[];
    expanded?: boolean;
    active?: boolean;
    badge?: string;
}

export interface TOCItem {
    id: string;
    title: string;
    level: number; // 1 for h1, 2 for h2, etc.
    href: string;
}

export interface DocsPageMetadata {
    title: string;
    description?: string;
    version?: string;
    lastUpdated?: string;
}

export interface DocsLayoutProps {
    children: React.ReactNode;
    version?: string;
    sidebarData: DocsNavigationItem[];
    tocItems?: TOCItem[];
    metadata?: DocsPageMetadata;
}

