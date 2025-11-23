import { DocsNavigationItem } from "@/types/docs";

export const docsNavigationData: DocsNavigationItem[] = [
    {
        id: "getting-started",
        title: "شروع کار",
        href: "/docs/latest/getting-started",
        children: [
            {
                id: "installation",
                title: "نصب و راه‌اندازی",
                href: "/docs/latest/getting-started/installation",
            },
            {
                id: "quick-start",
                title: "شروع سریع",
                href: "/docs/latest/getting-started/quick-start",
            },
        ],
    },
    {
        id: "analytics",
        title: "تحلیل و بررسی",
        href: "/docs/latest/analytics",
        children: [
            {
                id: "questions",
                title: "سوالات و نمودارها",
                href: "/docs/latest/questions",
                children: [
                    {
                        id: "questions-intro",
                        title: "مقدمه",
                        href: "/docs/latest/questions/introduction",
                    },
                    {
                        id: "query-builder",
                        title: "سازنده کوئری",
                        href: "/docs/latest/questions/query-builder",
                        children: [
                            {
                                id: "query-editor",
                                title: "ویرایشگر",
                                href: "/docs/latest/questions/query-builder/editor",
                            },
                            {
                                id: "query-filters",
                                title: "فیلترها",
                                href: "/docs/latest/questions/query-builder/filters",
                            },
                        ],
                    },
                    {
                        id: "sql-queries",
                        title: "کوئری‌های SQL",
                        href: "/docs/latest/questions/sql",
                    },
                    {
                        id: "visualizations",
                        title: "تجسم‌سازی",
                        href: "/docs/latest/questions/visualizations",
                    },
                ],
            },
            {
                id: "dashboards",
                title: "داشبوردها",
                href: "/docs/latest/dashboards",
                children: [
                    {
                        id: "dashboards-intro",
                        title: "مقدمه",
                        href: "/docs/latest/dashboards/introduction",
                    },
                    {
                        id: "dashboards-filters",
                        title: "فیلترهای داشبورد",
                        href: "/docs/latest/dashboards/filters",
                    },
                    {
                        id: "dashboards-subscriptions",
                        title: "اشتراک‌گذاری",
                        href: "/docs/latest/dashboards/subscriptions",
                    },
                ],
            },
        ],
    },
    {
        id: "data-modeling",
        title: "مدل‌سازی داده",
        href: "/docs/latest/data-modeling",
        children: [
            {
                id: "models",
                title: "مدل‌ها",
                href: "/docs/latest/data-modeling/models",
            },
            {
                id: "metrics",
                title: "معیارها",
                href: "/docs/latest/data-modeling/metrics",
            },
            {
                id: "segments",
                title: "بخش‌ها",
                href: "/docs/latest/data-modeling/segments",
            },
        ],
    },
    {
        id: "databases",
        title: "پایگاه‌های داده",
        href: "/docs/latest/databases",
        children: [
            {
                id: "connecting",
                title: "اتصال",
                href: "/docs/latest/databases/connecting",
            },
            {
                id: "sync-scan",
                title: "همگام‌سازی و اسکن",
                href: "/docs/latest/databases/sync-scan",
            },
        ],
    },
    {
        id: "permissions",
        title: "مجوزها",
        href: "/docs/latest/permissions",
        children: [
            {
                id: "permissions-intro",
                title: "مقدمه",
                href: "/docs/latest/permissions/introduction",
            },
            {
                id: "data-permissions",
                title: "مجوزهای داده",
                href: "/docs/latest/permissions/data",
            },
        ],
    },
    {
        id: "embedding",
        title: "جاسازی",
        href: "/docs/latest/embedding",
        children: [
            {
                id: "embedding-intro",
                title: "مقدمه",
                href: "/docs/latest/embedding/introduction",
            },
            {
                id: "static-embedding",
                title: "جاسازی استاتیک",
                href: "/docs/latest/embedding/static",
            },
            {
                id: "interactive-embedding",
                title: "جاسازی تعاملی",
                href: "/docs/latest/embedding/interactive",
            },
        ],
    },
    {
        id: "administration",
        title: "مدیریت",
        href: "/docs/latest/administration",
        children: [
            {
                id: "settings",
                title: "تنظیمات",
                href: "/docs/latest/administration/settings",
            },
            {
                id: "email",
                title: "ایمیل",
                href: "/docs/latest/administration/email",
            },
        ],
    },
];

