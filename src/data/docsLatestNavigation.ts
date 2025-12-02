import type { AsideMenuSection } from "@/components/common/AsideMenu";

export const docsLatestNavigationSections: AsideMenuSection[] = [
  {
    title: "تحلیل و بررسی",
    items: [
      {
        id: "getting-started-learn",
        title: "شروع کار",
        href: "/learn/metabase-basics/getting-started",
      },
      {
        id: "metabase-concepts",
        title: "مفاهیم متابیس",
        href: "/learn/metabase-basics/overview/concepts",
      },
      {
        id: "queries-and-charts",
        title: "سوالات و نمودارها",
        href: "/docs/latest/questions/start",
        children: [
          {
            id: "questions-introduction",
            title: "مقدمه",
            href: "/docs/latest/questions/introduction",
          },
          {
            id: "query-builder",
            title: "سازنده کوئری",
            href: "#",
            children: [
              {
                id: "query-editor",
                title: "ویرایشگر",
                href: "/docs/latest/questions/query-builder/editor",
              },
              {
                id: "query-filters",
                title: "فیلتر کردن",
                href: "/docs/latest/questions/query-builder/filters",
              },
              {
                id: "summarizing-grouping",
                title: "خلاصه‌سازی و گروه‌بندی",
                href: "/docs/latest/questions/query-builder/summarizing-and-grouping",
              },
              {
                id: "joining-data",
                title: "اتصال داده",
                href: "/docs/latest/questions/query-builder/join",
              },
              {
                id: "custom-expressions",
                title: "عبارات سفارشی",
                href: "/docs/latest/questions/query-builder/expressions",
              },
              {
                id: "expressions-list",
                title: "فهرست عبارات",
                href: "/docs/latest/questions/query-builder/expressions-list",
              },
            ],
          },
          {
            id: "sql-native-queries",
            title: "کوئری‌های SQL و بومی",
            href: "#",
            children: [
              {
                id: "sql-editor",
                title: "ویرایشگر SQL",
                href: "/docs/latest/questions/native-editor/writing-sql",
              },
              {
                id: "sql-parameters",
                title: "پارامترهای SQL",
                href: "/docs/latest/questions/native-editor/sql-parameters",
              },
              {
                id: "field-filters",
                title: "فیلترهای فیلد",
                href: "/docs/latest/questions/native-editor/field-filters",
              },
              {
                id: "basic-sql-parameters",
                title: "پارامترهای پایه SQL",
                href: "/docs/latest/questions/native-editor/basic-sql-parameters",
              },
              {
                id: "time-grouping-parameters",
                title: "پارامترهای گروه‌بندی زمانی",
                href: "/docs/latest/questions/native-editor/time-grouping-parameters",
              },
              {
                id: "optional-variables",
                title: "متغیرهای اختیاری",
                href: "/docs/latest/questions/native-editor/optional-variables",
              },
              {
                id: "filter-widgets",
                title: "ویجت‌های فیلتر",
                href: "/docs/latest/questions/native-editor/filter-widgets",
              },
              {
                id: "referencing-models",
                title: "ارجاع به مدل‌ها و سوالات",
                href: "/docs/latest/questions/native-editor/referencing-saved-questions-in-queries",
              },
              {
                id: "snippets",
                title: "اسنیپت‌ها",
                href: "/docs/latest/questions/native-editor/snippets",
              },
              {
                id: "snippet-permissions",
                title: "مجوزهای پوشه اسنیپت",
                href: "/docs/latest/permissions/snippets",
              },
            ],
          },
          {
            id: "visualizations",
            title: "تجسم‌سازی",
            href: "#",
            children: [
              {
                id: "visualizing-results",
                title: "نمای کلی",
                href: "/docs/latest/questions/visualizations/visualizing-results",
              },
              {
                id: "combo-chart",
                title: "نمودار ترکیبی",
                href: "/docs/latest/questions/visualizations/combo-chart",
              },
              {
                id: "detail-chart",
                title: "نمودار جزئیات",
                href: "/docs/latest/questions/visualizations/detail",
              },
              {
                id: "funnel-chart",
                title: "نمودار قیفی",
                href: "/docs/latest/questions/visualizations/funnel",
              },
              {
                id: "gauge-chart",
                title: "نمودار گیج",
                href: "/docs/latest/questions/visualizations/gauge",
              },
              {
                id: "line-bar-area",
                title: "نمودارهای خطی، میله‌ای و ناحیه‌ای",
                href: "/docs/latest/questions/visualizations/line-bar-and-area-charts",
              },
              {
                id: "map",
                title: "نقشه‌ها",
                href: "/docs/latest/questions/visualizations/map",
              },
              {
                id: "numbers",
                title: "نمودار عددی",
                href: "/docs/latest/questions/visualizations/numbers",
              },
              {
                id: "pie-donut",
                title: "نمودارهای دایره‌ای و خورشیدی",
                href: "/docs/latest/questions/visualizations/pie-or-donut-chart",
              },
              {
                id: "pivot-table",
                title: "جداول محوری",
                href: "/docs/latest/questions/visualizations/pivot-table",
              },
              {
                id: "progress-bar",
                title: "نوار پیشرفت",
                href: "/docs/latest/questions/visualizations/progress-bar",
              },
              {
                id: "sankey",
                title: "نمودار سنکی",
                href: "/docs/latest/questions/visualizations/sankey",
              },
              {
                id: "scatterplot",
                title: "نمودار پراکندگی",
                href: "/docs/latest/questions/visualizations/scatterplot-or-bubble-chart",
              },
              {
                id: "table",
                title: "جدول",
                href: "/docs/latest/questions/visualizations/table",
              },
              {
                id: "trend",
                title: "نمودار روند",
                href: "/docs/latest/questions/visualizations/trend",
              },
              {
                id: "waterfall",
                title: "نمودار آبشاری",
                href: "/docs/latest/questions/visualizations/waterfall-chart",
              },
              {
                id: "tooltips",
                title: "راهنماهای ابزار",
                href: "/docs/latest/questions/visualizations/tooltips",
              },
            ],
          },
          {
            id: "alerts",
            title: "هشدارها",
            href: "/docs/latest/questions/alerts",
          },
          {
            id: "exporting-results",
            title: "صادرات داده",
            href: "/docs/latest/questions/exporting-results",
          },
        ],
      },
      {
        id: "dashboards",
        title: "داشبوردها",
        href: "/docs/latest/dashboards/start",
        children: [
          {
            id: "dashboards-introduction",
            title: "نمای کلی",
            href: "/docs/latest/dashboards/introduction",
          },
          {
            id: "dashboard-filters",
            title: "فیلترهای داشبورد",
            href: "/docs/latest/dashboards/filters",
          },
          {
            id: "linked-filters",
            title: "فیلترهای مرتبط",
            href: "/docs/latest/dashboards/linked-filters",
          },
          {
            id: "dashboard-interactivity",
            title: "تعامل داشبورد",
            href: "/docs/latest/dashboards/interactive",
          },
          {
            id: "multiple-series",
            title: "نمودارها با چند سری",
            href: "/docs/latest/dashboards/multiple-series",
          },
          {
            id: "dashboard-subscriptions",
            title: "اشتراک‌های داشبورد",
            href: "/docs/latest/dashboards/subscriptions",
          },
          {
            id: "dashboard-actions",
            title: "اقدامات روی داشبورد",
            href: "/docs/latest/dashboards/actions",
          },
        ],
      },
      {
        id: "ai",
        title: "هوش مصنوعی",
        href: "/docs/latest/ai/start",
        children: [
          {
            id: "metabot",
            title: "متابوت هوش مصنوعی",
            href: "/docs/latest/ai/metabot",
          },
          {
            id: "metabot-settings",
            title: "تنظیمات متابوت",
            href: "/docs/latest/ai/settings",
          },
        ],
      },
      {
        id: "data-modeling",
        title: "مدل‌سازی داده",
        href: "/docs/latest/data-modeling/start",
        children: [
          {
            id: "models",
            title: "مدل‌ها",
            href: "/docs/latest/data-modeling/models",
          },
          {
            id: "model-persistence",
            title: "پایداری مدل",
            href: "/docs/latest/data-modeling/model-persistence",
          },
          {
            id: "metrics",
            title: "معیارها",
            href: "/docs/latest/data-modeling/metrics",
          },
          {
            id: "metadata-editing",
            title: "تنظیمات متادیتای جدول",
            href: "/docs/latest/data-modeling/metadata-editing",
          },
          {
            id: "semantic-types",
            title: "انواع داده و معنایی",
            href: "/docs/latest/data-modeling/semantic-types",
          },
          {
            id: "formatting",
            title: "پیش‌فرض‌های قالب‌بندی",
            href: "/docs/latest/data-modeling/formatting",
          },
          {
            id: "json-unfolding",
            title: "کار با JSON",
            href: "/docs/latest/data-modeling/json-unfolding",
          },
          {
            id: "segments",
            title: "بخش‌ها",
            href: "/docs/latest/data-modeling/segments",
          },
          {
            id: "actions",
            title: "اقدامات",
            href: "#",
            children: [
              {
                id: "actions-introduction",
                title: "نمای کلی",
                href: "/docs/latest/actions/introduction",
              },
              {
                id: "basic-actions",
                title: "اقدامات پایه",
                href: "/docs/latest/actions/basic",
              },
              {
                id: "custom-actions",
                title: "اقدامات سفارشی",
                href: "/docs/latest/actions/custom",
              },
            ],
          },
        ],
      },
      {
        id: "organization",
        title: "سازمان‌دهی",
        href: "/docs/latest/exploration-and-organization/start",
        children: [
          {
            id: "exploration",
            title: "کاوش پایه",
            href: "/docs/latest/exploration-and-organization/exploration",
          },
          {
            id: "keyboard-shortcuts",
            title: "میانبرهای صفحه‌کلید",
            href: "/docs/latest/exploration-and-organization/keyboard-shortcuts",
          },
          {
            id: "collections",
            title: "مجموعه‌ها",
            href: "/docs/latest/exploration-and-organization/collections",
          },
          {
            id: "data-model-reference",
            title: "مرجع داده",
            href: "/docs/latest/exploration-and-organization/data-model-reference",
          },
          {
            id: "events-timelines",
            title: "رویدادها و خطوط زمانی",
            href: "/docs/latest/exploration-and-organization/events-and-timelines",
          },
          {
            id: "x-rays",
            title: "اشعه ایکس",
            href: "/docs/latest/exploration-and-organization/x-rays",
          },
          {
            id: "content-verification",
            title: "تأیید محتوا",
            href: "/docs/latest/exploration-and-organization/content-verification",
          },
          {
            id: "history",
            title: "تاریخچه",
            href: "/docs/latest/exploration-and-organization/history",
          },
          {
            id: "delete-restore",
            title: "حذف و بازیابی",
            href: "/docs/latest/exploration-and-organization/delete-and-restore",
          },
        ],
      },
    ],
  },
  {
    title: "جاسازی",
    items: [
      {
        id: "embedding-introduction",
        title: "نمای کلی",
        href: "/docs/latest/embedding/introduction",
      },
      {
        id: "modular-embedding",
        title: "جاسازی ماژولار",
        href: "/docs/latest/embedding/sdk/introduction",
        children: [
          {
            id: "embedded-analytics-js",
            title: "تحلیل تعبیه‌شده JS",
            href: "/docs/latest/embedding/embedded-analytics-js",
          },
          {
            id: "embedded-analytics-sdk",
            title: "SDK تحلیل تعبیه‌شده",
            href: "#",
            children: [
              {
                id: "sdk-introduction",
                title: "مقدمه",
                href: "/docs/latest/embedding/sdk/introduction",
              },
              {
                id: "sdk-quickstart",
                title: "شروع سریع",
                href: "/docs/latest/embedding/sdk/quickstart",
              },
              {
                id: "sdk-quickstart-cli",
                title: "شروع سریع با CLI",
                href: "/docs/latest/embedding/sdk/quickstart-cli",
              },
              {
                id: "sdk-quickstart-sample",
                title: "شروع سریع با برنامه نمونه",
                href: "/docs/latest/embedding/sdk/quickstart-with-sample-app",
              },
              {
                id: "sdk-questions",
                title: "سوالات",
                href: "/docs/latest/embedding/sdk/questions",
              },
              {
                id: "sdk-dashboards",
                title: "داشبوردها",
                href: "/docs/latest/embedding/sdk/dashboards",
              },
              {
                id: "sdk-ai-chat",
                title: "چت هوش مصنوعی",
                href: "/docs/latest/embedding/sdk/ai-chat",
              },
              {
                id: "sdk-collections",
                title: "مجموعه‌ها",
                href: "/docs/latest/embedding/sdk/collections",
              },
              {
                id: "sdk-authentication",
                title: "احراز هویت",
                href: "/docs/latest/embedding/sdk/authentication",
              },
              {
                id: "sdk-appearance",
                title: "ظاهر",
                href: "/docs/latest/embedding/sdk/appearance",
              },
              {
                id: "sdk-config",
                title: "پیکربندی",
                href: "/docs/latest/embedding/sdk/config",
              },
              {
                id: "sdk-next-js",
                title: "کار با Next.js",
                href: "/docs/latest/embedding/sdk/next-js",
              },
              {
                id: "sdk-version",
                title: "نسخه‌گذاری",
                href: "/docs/latest/embedding/sdk/version",
              },
              {
                id: "sdk-upgrade",
                title: "ارتقا",
                href: "/docs/latest/embedding/sdk/upgrade",
              },
              {
                id: "sdk-plugins",
                title: "افزونه‌ها",
                href: "/docs/latest/embedding/sdk/plugins",
              },
              {
                id: "sdk-api",
                title: "API",
                href: "/docs/latest/embedding/sdk/api",
              },
            ],
          },
        ],
      },
      {
        id: "static-embedding",
        title: "جاسازی استاتیک",
        href: "/docs/latest/embedding/static-embedding",
        children: [
          {
            id: "static-embedding-overview",
            title: "نمای کلی",
            href: "/docs/latest/embedding/static-embedding",
          },
          {
            id: "static-embedding-parameters",
            title: "پارامترهای جاسازی استاتیک",
            href: "/docs/latest/embedding/static-embedding-parameters",
          },
          {
            id: "translations",
            title: "ترجمه جاسازی‌ها",
            href: "/docs/latest/embedding/translations",
          },
        ],
      },
      {
        id: "interactive-embedding",
        title: "جاسازی تعاملی",
        href: "/docs/latest/embedding/interactive-embedding",
        children: [
          {
            id: "interactive-embedding-overview",
            title: "نمای کلی",
            href: "/docs/latest/embedding/interactive-embedding",
          },
          {
            id: "interactive-embedding-quickstart",
            title: "شروع سریع",
            href: "/docs/latest/embedding/interactive-embedding-quick-start-guide",
          },
          {
            id: "interactive-ui-components",
            title: "پارامترهای جاسازی تعاملی",
            href: "/docs/latest/embedding/interactive-ui-components",
          },
        ],
      },
      {
        id: "public-links",
        title: "لینک‌ها و جاسازی‌های عمومی",
        href: "/docs/latest/embedding/public-links",
      },
      {
        id: "securing-embeds",
        title: "امن‌سازی متابیس جاسازی‌شده",
        href: "/docs/latest/embedding/securing-embeds",
      },
    ],
  },
  {
    title: "مدیریت",
    items: [
      {
        id: "installation",
        title: "نصب و راه‌اندازی",
        href: "/docs/latest/installation-and-operation/start",
        children: [
          {
            id: "installing-metabase",
            title: "نصب متابیس",
            href: "#",
            children: [
              {
                id: "installation-overview",
                title: "نمای کلی نصب",
                href: "/docs/latest/installation-and-operation/installing-metabase",
              },
              {
                id: "metabase-cloud",
                title: "متابیس کلود",
                href: "/docs/latest/cloud/start",
              },
              {
                id: "running-jar",
                title: "اجرای فایل JAR",
                href: "/docs/latest/installation-and-operation/running-the-metabase-jar-file",
              },
              {
                id: "running-docker",
                title: "اجرای در Docker",
                href: "/docs/latest/installation-and-operation/running-metabase-on-docker",
              },
              {
                id: "other-installation",
                title: "گزینه‌های نصب دیگر",
                href: "/docs/latest/installation-and-operation/installing-metabase#other-installation-options",
              },
            ],
          },
          {
            id: "upgrading-metabase",
            title: "ارتقای متابیس",
            href: "/docs/latest/installation-and-operation/upgrading-metabase",
          },
          {
            id: "configuring-app-db",
            title: "پیکربندی پایگاه داده برنامه متابیس",
            href: "/docs/latest/installation-and-operation/configuring-application-database",
          },
          {
            id: "activating-enterprise",
            title: "فعال‌سازی ویژگی‌های Enterprise",
            href: "/docs/latest/installation-and-operation/activating-the-enterprise-edition",
          },
          {
            id: "migrating-from-h2",
            title: "مهاجرت به پایگاه داده برنامه تولید",
            href: "/docs/latest/installation-and-operation/migrating-from-h2",
          },
        ],
      },
      {
        id: "data-sources",
        title: "منابع داده",
        href: "/docs/latest/databases/start",
        children: [
          {
            id: "adding-databases",
            title: "افزودن و مدیریت پایگاه‌های داده",
            href: "/docs/latest/databases/connecting",
          },
          {
            id: "supported-databases",
            title: "پایگاه‌های داده پشتیبانی‌شده",
            href: "#",
            children: [
              {
                id: "athena",
                title: "Athena",
                href: "/docs/latest/databases/connections/athena",
              },
              {
                id: "aws-rds",
                title: "Amazon RDS",
                href: "/docs/latest/databases/connections/aws-rds",
              },
              {
                id: "bigquery",
                title: "BigQuery",
                href: "/docs/latest/databases/connections/bigquery",
              },
              {
                id: "clickhouse",
                title: "ClickHouse",
                href: "/docs/latest/databases/connections/clickhouse",
              },
              {
                id: "databricks",
                title: "Databricks",
                href: "/docs/latest/databases/connections/databricks",
              },
              {
                id: "druid",
                title: "Druid",
                href: "/docs/latest/databases/connections/druid",
              },
              {
                id: "mariadb",
                title: "MariaDB",
                href: "/docs/latest/databases/connections/mariadb",
              },
              {
                id: "mongodb",
                title: "MongoDB",
                href: "/docs/latest/databases/connections/mongodb",
              },
              {
                id: "mysql",
                title: "MySQL",
                href: "/docs/latest/databases/connections/mysql",
              },
              {
                id: "oracle",
                title: "Oracle",
                href: "/docs/latest/databases/connections/oracle",
              },
              {
                id: "postgresql",
                title: "PostgreSQL",
                href: "/docs/latest/databases/connections/postgresql",
              },
              {
                id: "presto",
                title: "Presto",
                href: "/docs/latest/databases/connections/presto",
              },
              {
                id: "redshift",
                title: "Redshift",
                href: "/docs/latest/databases/connections/redshift",
              },
              {
                id: "snowflake",
                title: "Snowflake",
                href: "/docs/latest/databases/connections/snowflake",
              },
              {
                id: "sql-server",
                title: "SQL Server",
                href: "/docs/latest/databases/connections/sql-server",
              },
              {
                id: "sqlite",
                title: "SQLite",
                href: "/docs/latest/databases/connections/sqlite",
              },
              {
                id: "sparksql",
                title: "Spark SQL",
                href: "/docs/latest/databases/connections/sparksql",
              },
              {
                id: "starburst",
                title: "Starburst",
                href: "/docs/latest/databases/connections/starburst",
              },
              {
                id: "vertica",
                title: "Vertica",
                href: "/docs/latest/databases/connections/vertica",
              },
              {
                id: "community-drivers",
                title: "درایورهای جامعه",
                href: "/docs/latest/developers-guide/community-drivers",
              },
            ],
          },
          {
            id: "db-users-roles",
            title: "کاربران، نقش‌ها و امتیازات پایگاه داده",
            href: "/docs/latest/databases/users-roles-privileges",
          },
          {
            id: "sync-scan",
            title: "همگام‌سازی و اسکن پایگاه‌های داده",
            href: "/docs/latest/databases/sync-scan",
          },
          {
            id: "encrypting-details",
            title: "رمزگذاری اتصال پایگاه داده",
            href: "/docs/latest/databases/encrypting-details-at-rest",
          },
          {
            id: "ssh-tunnel",
            title: "تونل SSH",
            href: "/docs/latest/databases/ssh-tunnel",
          },
          {
            id: "ssl-certificates",
            title: "گواهی SSL",
            href: "/docs/latest/databases/ssl-certificates",
          },
          {
            id: "data-uploads",
            title: "تنظیم آپلود داده",
            href: "/docs/latest/databases/uploads",
          },
          {
            id: "uploading-data",
            title: "آپلود داده",
            href: "/docs/latest/exploration-and-organization/uploads",
          },
          {
            id: "cloud-storage",
            title: "ذخیره‌سازی ابری متابیس",
            href: "/docs/latest/cloud/storage",
          },
          {
            id: "google-sheets",
            title: "همگام‌سازی Google Sheets",
            href: "/docs/latest/cloud/google-sheets",
          },
        ],
      },
      {
        id: "configuration",
        title: "پیکربندی",
        href: "/docs/latest/configuring-metabase/start",
        children: [
          {
            id: "setting-up-metabase",
            title: "تنظیم متابیس",
            href: "/docs/latest/configuring-metabase/setting-up-metabase",
          },
          {
            id: "general-settings",
            title: "تنظیمات عمومی",
            href: "/docs/latest/configuring-metabase/settings",
          },
          {
            id: "email",
            title: "تنظیم ایمیل",
            href: "/docs/latest/configuring-metabase/email",
          },
          {
            id: "slack",
            title: "تنظیم Slack",
            href: "/docs/latest/configuring-metabase/slack",
          },
          {
            id: "webhooks",
            title: "Webhooks",
            href: "/docs/latest/configuring-metabase/webhooks",
          },
          {
            id: "environment-variables",
            title: "متغیرهای محیطی",
            href: "/docs/latest/configuring-metabase/environment-variables",
          },
          {
            id: "config-file",
            title: "فایل پیکربندی",
            href: "/docs/latest/configuring-metabase/config-file",
          },
          {
            id: "config-template",
            title: "قالب فایل پیکربندی",
            href: "/docs/latest/configuring-metabase/config-template",
          },
          {
            id: "log-configuration",
            title: "پیکربندی لاگ متابیس",
            href: "/docs/latest/configuring-metabase/log-configuration",
          },
          {
            id: "timezones",
            title: "مناطق زمانی",
            href: "/docs/latest/configuring-metabase/timezones",
          },
          {
            id: "localization",
            title: "زبان‌ها و بومی‌سازی",
            href: "/docs/latest/configuring-metabase/localization",
          },
          {
            id: "appearance",
            title: "ظاهر",
            href: "/docs/latest/configuring-metabase/appearance",
          },
          {
            id: "fonts",
            title: "فونت‌ها",
            href: "/docs/latest/configuring-metabase/fonts",
          },
          {
            id: "caching",
            title: "کش کردن نتایج کوئری",
            href: "/docs/latest/configuring-metabase/caching",
          },
          {
            id: "custom-maps",
            title: "نقشه‌های سفارشی",
            href: "/docs/latest/configuring-metabase/custom-maps",
          },
          {
            id: "customizing-jetty",
            title: "سفارشی‌سازی وب‌سرور Jetty متابیس",
            href: "/docs/latest/configuring-metabase/customizing-jetty-webserver",
          },
        ],
      },
      {
        id: "operations-monitoring",
        title: "عملیات و نظارت",
        href: "/docs/latest/installation-and-operation/start",
        children: [
          {
            id: "backing-up",
            title: "پشتیبان‌گیری از متابیس",
            href: "/docs/latest/installation-and-operation/backing-up-metabase-application-data",
          },
          {
            id: "development-instance",
            title: "نمونه‌های توسعه",
            href: "/docs/latest/installation-and-operation/development-instance",
          },
          {
            id: "monitoring",
            title: "نظارت بر متابیس",
            href: "/docs/latest/installation-and-operation/monitoring-metabase",
          },
          {
            id: "prometheus",
            title: "قابلیت مشاهده با Prometheus",
            href: "/docs/latest/installation-and-operation/observability-with-prometheus",
          },
          {
            id: "serialization",
            title: "سریال‌سازی",
            href: "/docs/latest/installation-and-operation/serialization",
          },
          {
            id: "commands",
            title: "دستورات",
            href: "/docs/latest/installation-and-operation/commands",
          },
          {
            id: "usage-analytics",
            title: "تحلیل استفاده",
            href: "/docs/latest/usage-and-performance-tools/usage-analytics",
          },
          {
            id: "admin-tools",
            title: "ابزارهای مدیریتی",
            href: "/docs/latest/usage-and-performance-tools/tools",
          },
        ],
      },
      {
        id: "authentication",
        title: "احراز هویت",
        href: "/docs/latest/people-and-groups/start",
        children: [
          {
            id: "account-settings",
            title: "تنظیمات حساب",
            href: "/docs/latest/people-and-groups/account-settings",
          },
          {
            id: "password-complexity",
            title: "پیچیدگی رمز عبور",
            href: "/docs/latest/people-and-groups/changing-password-complexity",
          },
          {
            id: "session-expiration",
            title: "انقضای نشست",
            href: "/docs/latest/people-and-groups/changing-session-expiration",
          },
          {
            id: "google-sign-in",
            title: "ورود با Google",
            href: "/docs/latest/people-and-groups/google-sign-in",
          },
          {
            id: "ldap",
            title: "LDAP",
            href: "/docs/latest/people-and-groups/ldap",
          },
          {
            id: "user-provisioning",
            title: "تأمین کاربر",
            href: "/docs/latest/people-and-groups/user-provisioning",
          },
          {
            id: "api-keys",
            title: "کلیدهای API",
            href: "/docs/latest/people-and-groups/api-keys",
          },
          {
            id: "paid-sso",
            title: "گزینه‌های SSO پولی",
            href: "/docs/latest/people-and-groups/start",
            children: [
              {
                id: "jwt-auth",
                title: "احراز هویت مبتنی بر JWT",
                href: "/docs/latest/people-and-groups/authenticating-with-jwt",
              },
              {
                id: "saml-auth",
                title: "احراز هویت مبتنی بر SAML",
                href: "/docs/latest/people-and-groups/authenticating-with-saml",
              },
              {
                id: "saml-auth0",
                title: "SAML با Auth0",
                href: "/docs/latest/people-and-groups/saml-auth0",
              },
              {
                id: "saml-azure",
                title: "SAML با Microsoft Entra ID",
                href: "/docs/latest/people-and-groups/saml-azure",
              },
              {
                id: "saml-google",
                title: "SAML با Google",
                href: "/docs/latest/people-and-groups/saml-google",
              },
              {
                id: "saml-keycloak",
                title: "SAML با Keycloak",
                href: "/docs/latest/people-and-groups/saml-keycloak",
              },
              {
                id: "saml-okta",
                title: "SAML با Okta",
                href: "/docs/latest/people-and-groups/saml-okta",
              },
            ],
          },
        ],
      },
      {
        id: "permissions",
        title: "مجوزها",
        href: "/docs/latest/permissions/start",
        children: [
          {
            id: "permissions-introduction",
            title: "مقدمه مجوزها",
            href: "/docs/latest/permissions/introduction",
          },
          {
            id: "managing-people",
            title: "مدیریت افراد و گروه‌ها",
            href: "/docs/latest/people-and-groups/managing",
          },
          {
            id: "data-permissions",
            title: "مجوزهای داده",
            href: "/docs/latest/permissions/data",
          },
          {
            id: "collection-permissions",
            title: "مجوزهای مجموعه",
            href: "/docs/latest/permissions/collections",
          },
          {
            id: "application-permissions",
            title: "مجوزهای برنامه",
            href: "/docs/latest/permissions/application",
          },
          {
            id: "row-column-security",
            title: "امنیت سطر و ستون",
            href: "/docs/latest/permissions/row-and-column-security",
          },
          {
            id: "row-column-examples",
            title: "مثال‌های امنیت سطر و ستون",
            href: "/docs/latest/permissions/row-and-column-security-examples",
          },
          {
            id: "database-routing",
            title: "مسیریابی پایگاه داده",
            href: "/docs/latest/permissions/database-routing",
          },
          {
            id: "impersonation",
            title: "جعل هویت",
            href: "/docs/latest/permissions/impersonation",
          },
          {
            id: "snippet-permissions",
            title: "مجوزهای پوشه اسنیپت",
            href: "/docs/latest/permissions/snippets",
          },
          {
            id: "notification-permissions",
            title: "مجوزهای اعلان",
            href: "/docs/latest/permissions/notifications",
          },
          {
            id: "embedding-permissions",
            title: "پیکربندی مجوزها برای جاسازی",
            href: "/docs/latest/permissions/embedding",
          },
        ],
      },
    ],
  },
  {
    title: "منابع دیگر",
    items: [
      {
        id: "api",
        title: "API",
        href: "/docs/latest/api",
      },
      {
        id: "metabase-cloud",
        title: "متابیس کلود",
        href: "/docs/latest/cloud/start",
        children: [
          {
            id: "cloud-vs-self-hosting",
            title: "کلود در مقابل میزبانی خود",
            href: "/docs/latest/cloud/cloud-vs-self-hosting",
          },
          {
            id: "custom-domain",
            title: "دامنه سفارشی",
            href: "/docs/latest/cloud/custom-domain",
          },
          {
            id: "cloud-limitations",
            title: "محدودیت‌های کلود",
            href: "/docs/latest/cloud/limitations",
          },
          {
            id: "change-region",
            title: "تغییر منطقه",
            href: "/docs/latest/cloud/change-region",
          },
          {
            id: "ip-addresses",
            title: "آدرس‌های IP برای لیست سفید",
            href: "/docs/latest/cloud/ip-addresses-to-whitelist",
          },
          {
            id: "migrate-to-cloud",
            title: "مهاجرت از میزبانی خود به کلود",
            href: "/docs/latest/cloud/migrate/guide",
          },
          {
            id: "migrate-from-cloud",
            title: "مهاجرت از کلود به میزبانی خود",
            href: "/docs/latest/cloud/migrate/cloud-to-self-hosted",
          },
          {
            id: "migrate-heroku",
            title: "مهاجرت از Heroku",
            href: "/docs/latest/cloud/migrate/heroku",
          },
        ],
      },
      {
        id: "billing",
        title: "صورتحساب",
        href: "/docs/latest/cloud/how-billing-works",
        children: [
          {
            id: "how-billing-works",
            title: "نحوه کار صورتحساب",
            href: "/docs/latest/cloud/how-billing-works",
          },
          {
            id: "accounts-billing",
            title: "حساب‌ها و صورتحساب",
            href: "/docs/latest/cloud/accounts-and-billing",
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "عیب‌یابی",
        href: "/docs/latest/troubleshooting-guide",
      },
      {
        id: "developer-guide",
        title: "راهنمای توسعه‌دهنده",
        href: "/docs/latest/developers-guide/start",
      },
      {
        id: "paid-features",
        title: "ویژگی‌های Pro و Enterprise",
        href: "/docs/latest/paid-features",
      },
      {
        id: "accessibility",
        title: "دسترسی‌پذیری",
        href: "/docs/latest/installation-and-operation/accessibility",
      },
      {
        id: "supported-browsers",
        title: "مرورگرهای پشتیبانی‌شده",
        href: "/docs/latest/installation-and-operation/supported-browsers",
      },
      {
        id: "privacy",
        title: "حریم خصوصی",
        href: "/docs/latest/installation-and-operation/privacy",
      },
      {
        id: "information-collection",
        title: "درباره داده‌های استفاده ناشناس که جمع‌آوری می‌کنیم",
        href: "/docs/latest/installation-and-operation/information-collection",
      },
    ],
  },
];
