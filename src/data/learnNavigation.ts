import type { AsideMenuSection } from "@/components/common/AsideMenu";

export const learnNavigationSections: AsideMenuSection[] = [
  {
    title: "دوره‌ها",
    items: [
      {
        id: "getting-started",
        title: "شروع کار",
        href: "/learn/metabase-basics/getting-started",
        children: [
          {
            id: "metabase-concepts",
            title: "مفاهیم متابیس",
            href: "/learn/metabase-basics/overview/concepts",
          },
          {
            id: "find-data",
            title: "پیدا کردن داده",
            href: "/learn/metabase-basics/getting-started/find-data",
          },
          {
            id: "ask-a-question",
            title: "پرسیدن یک سؤال",
            href: "/learn/metabase-basics/getting-started/ask-a-question",
          },
          {
            id: "create-dashboards",
            title: "ایجاد داشبورد",
            href: "/learn/metabase-basics/getting-started/create-dashboards",
          },
          {
            id: "explore-data",
            title: "کاوش داشبوردها",
            href: "/learn/metabase-basics/getting-started/explore-data",
          },
          {
            id: "filter",
            title: "فیلتر و محدود کردن داده",
            href: "/learn/metabase-basics/getting-started/filter",
          },
          {
            id: "summarize",
            title: "خلاصه کردن داده",
            href: "/learn/metabase-basics/getting-started/summarize",
          },
          {
            id: "custom-columns",
            title: "افزودن ستون‌های سفارشی",
            href: "/learn/metabase-basics/getting-started/custom-columns",
          },
          {
            id: "dashboard-filters",
            title: "استفاده از فیلترهای داشبورد",
            href: "/learn/metabase-basics/getting-started/dashboard-filters",
          },
          {
            id: "models",
            title: "ساخت مدل‌ها",
            href: "/learn/metabase-basics/getting-started/models",
          },
        ],
      },
    ],
  },
  {
    title: "آموزش‌های متابیس",
    items: [
      {
        id: "overview",
        title: "نمای کلی متابیس",
        href: "/learn/metabase-basics/overview",
        children: [
          {
            id: "tour-of-metabase",
            title: "گشت‌زنی در متابیس",
            href: "/learn/metabase-basics/overview/tour-of-metabase",
          },
          {
            id: "next-steps",
            title: "ویژگی‌های پیشرفته متابیس برای تحلیل‌گران داده",
            href: "/learn/metabase-basics/overview/next-steps",
          },
          {
            id: "beyond-bi",
            title: "فراتر از BI: مشکلات دیگری که می‌توانید با متابیس حل کنید",
            href: "/learn/metabase-basics/overview/beyond-bi",
          },
        ],
      },
      {
        id: "querying-and-dashboards",
        title: "پرس‌وجو و داشبوردها",
        href: "/learn/metabase-basics/querying-and-dashboards",
        children: [
          {
            id: "questions",
            title: "پرسیدن سؤال‌ها",
            href: "/learn/metabase-basics/querying-and-dashboards/questions",
          },
          {
            id: "visualization",
            title: "تجسم داده",
            href: "/learn/metabase-basics/querying-and-dashboards/visualization",
          },
          {
            id: "dashboards",
            title: "ساخت داشبوردها",
            href: "/learn/metabase-basics/querying-and-dashboards/dashboards",
          },
          {
            id: "sql-in-metabase",
            title: "SQL در متابیس",
            href: "/learn/metabase-basics/querying-and-dashboards/sql-in-metabase",
          },
          {
            id: "time-series",
            title: "تحلیل سری زمانی",
            href: "/learn/metabase-basics/querying-and-dashboards/time-series",
          },
        ],
      },
      {
        id: "administration",
        title: "مدیریت",
        href: "/learn/metabase-basics/administration",
        children: [
          {
            id: "administration-and-operation",
            title: "مدیریت و عملیات",
            href: "/learn/metabase-basics/administration/administration-and-operation",
            children: [
              {
                id: "guide",
                title: "نمای کلی Admin",
                href: "/learn/metabase-basics/administration/administration-and-operation/guide",
              },
              {
                id: "metabase-and-your-db",
                title: "نحوه کار متابیس با پایگاه داده شما",
                href: "/learn/metabase-basics/administration/administration-and-operation/metabase-and-your-db",
              },
              {
                id: "metabase-in-production",
                title: "نحوه اجرای متابیس در production",
                href: "/learn/metabase-basics/administration/administration-and-operation/metabase-in-production",
              },
              {
                id: "managing-people",
                title: "مدیریت افراد در متابیس",
                href: "/learn/metabase-basics/administration/administration-and-operation/managing-people",
              },
              {
                id: "guide-to-sharing-data",
                title: "راهنمای اشتراک‌گذاری داده",
                href: "/learn/metabase-basics/administration/administration-and-operation/guide-to-sharing-data",
              },
              {
                id: "same-page",
                title: "سازماندهی تجزیه و تحلیل شما",
                href: "/learn/metabase-basics/administration/administration-and-operation/same-page",
              },
              {
                id: "multi-env",
                title: "آموزش: محیط‌های چندگانه",
                href: "/learn/metabase-basics/administration/administration-and-operation/multi-env",
              },
              {
                id: "serialization",
                title: "استفاده از serialization",
                href: "/learn/metabase-basics/administration/administration-and-operation/serialization",
              },
              {
                id: "git-based-workflow",
                title: "گردش کار مبتنی بر Git",
                href: "/learn/metabase-basics/administration/administration-and-operation/git-based-workflow",
              },
              {
                id: "making-dashboards-faster",
                title: "سریع‌تر کردن داشبوردها",
                href: "/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster",
              },
              {
                id: "metabase-at-scale",
                title: "متابیس در مقیاس",
                href: "/learn/metabase-basics/administration/administration-and-operation/metabase-at-scale",
              },
              {
                id: "data-engineering",
                title: "متابیس برای مهندسان داده",
                href: "/learn/metabase-basics/administration/administration-and-operation/data-engineering",
              },
              {
                id: "metabase-api",
                title: "کار با API متابیس",
                href: "/learn/metabase-basics/administration/administration-and-operation/metabase-api",
              },
            ],
          },
          {
            id: "permissions",
            title: "مجوزها",
            href: "/learn/metabase-basics/administration/permissions",
            children: [
              {
                id: "strategy",
                title: "استراتژی‌های مجوز",
                href: "/learn/metabase-basics/administration/permissions/strategy",
              },
              {
                id: "data-permissions",
                title: "مجوزهای داده",
                href: "/learn/metabase-basics/administration/permissions/data-permissions",
              },
              {
                id: "collection-permissions",
                title: "مجوزهای مجموعه",
                href: "/learn/metabase-basics/administration/permissions/collection-permissions",
              },
              {
                id: "row-permissions",
                title: "مجوزهای سطح ردیف",
                href: "/learn/metabase-basics/administration/permissions/row-permissions",
              },
              {
                id: "column-permissions",
                title: "مجوزهای سطح ستون",
                href: "/learn/metabase-basics/administration/permissions/column-permissions",
              },
            ],
          },
        ],
      },
      {
        id: "embedding",
        title: "جاسازی",
        href: "/learn/metabase-basics/embedding",
        children: [
          {
            id: "overview",
            title: "استراتژی‌های تحویل تجزیه و تحلیل مشتری‌محور",
            href: "/learn/metabase-basics/embedding/overview",
          },
          {
            id: "charts-and-dashboards",
            title: "انتشار تجسم‌های داده به وب",
            href: "/learn/metabase-basics/embedding/charts-and-dashboards",
          },
        ],
      },
    ],
  },
  {
    title: "رشد مهارت‌های داده",
    items: [
      {
        id: "learn-sql",
        title: "یادگیری SQL",
        href: "/learn/sql",
        children: [
          {
            id: "getting-started-sql",
            title: "شروع کار با SQL",
            href: "/learn/sql/getting-started",
            children: [
              {
                id: "sql-introduction",
                title: "مقدمه",
                href: "/learn/sql/getting-started/introduction",
              },
              {
                id: "sql-querying-tables",
                title: "پرس‌وجوی جداول با SQL",
                href: "/learn/sql/getting-started/querying-tables",
              },
              {
                id: "sql-filtering",
                title: "فیلتر کردن با SQL",
                href: "/learn/sql/filtering",
              },
              {
                id: "sql-combining-tables",
                title: "ترکیب جداول با SQL",
                href: "/learn/sql/combining-tables",
              },
            ],
          },
          {
            id: "working-with-sql",
            title: "کار با SQL",
            href: "/learn/sql/working-with-sql",
          },
          {
            id: "debugging-sql",
            title: "اشکال‌زدایی SQL",
            href: "/learn/sql/debugging-sql",
          },
        ],
      },
      {
        id: "database-fundamentals",
        title: "مبانی پایگاه داده",
        href: "/learn/grow-your-data-skills/data-fundamentals",
      },
      {
        id: "data-landscape",
        title: "منظره داده",
        href: "/learn/grow-your-data-skills/data-landscape",
      },
      {
        id: "strategies-for-analytics",
        title: "استراتژی‌های تجزیه و تحلیل",
        href: "/learn/grow-your-data-skills/analytics",
      },
      {
        id: "data-visualization",
        title: "تجسم داده",
        href: "/learn/grow-your-data-skills/data-visualization",
      },
      {
        id: "business-analysis-methods",
        title: "روش‌های تحلیل کسب‌وکار",
        href: "/learn/grow-your-data-skills/business-analysis-methods",
      },
      {
        id: "spreadsheets-to-databases",
        title: "از صفحات گسترده به پایگاه داده",
        href: "/learn/grow-your-data-skills/spreadsheets-to-databases",
      },
    ],
  },
  {
    title: "راهنمای سریع",
    items: [
      {
        id: "which-chart-to-use",
        title: "کدام نمودار را استفاده کنیم؟",
        href: "/learn/cheat-sheets/which-chart-to-use",
      },
      {
        id: "which-map-to-use",
        title: "کدام نقشه را استفاده کنیم؟",
        href: "/learn/cheat-sheets/how-to-choose-the-right-map-visualization",
      },
      {
        id: "sql-cheat-sheet",
        title: "راهنمای سریع SQL",
        href: "/learn/cheat-sheets/sql-cheat-sheet",
      },
      {
        id: "transition-guides",
        title: "انتقال از ابزارهای BI دیگر",
        href: "/learn/cheat-sheets/transition-guides",
      },
    ],
  },
];
