export interface MenuLink {
    href: string;
    title: string;
    description?: string;
    icon: React.ReactNode;
    badge?: string;
}

export interface DropdownMenu {
    id: string;
    title: string;
    sections: MenuLink[][];
    footer?: {
        links: MenuLink[];
    };
}

export interface NavigationItems {
    product: string;
    features: string;
    docs: string;
    resources: string;
    pricing: string;
    login: string;
    getStarted: string;
}

export interface HoverHighlight {
    left: number;
    width: number;
    opacity: number;
}
