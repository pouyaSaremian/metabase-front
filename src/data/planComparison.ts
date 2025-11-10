export type PlanKey = "oss" | "starter" | "pro" | "enterprise";

export type FeatureValue =
    | { type: "included"; note?: string }
    | { type: "text"; text: string }
    | { type: "empty" };

export type FeatureRow = {
    id: string;
    label: string;
    tooltip?: string;
    href?: string;
    values: Record<PlanKey, FeatureValue>;
};

export type FeatureSection = {
    id: string;
    title: string;
    description: string;
    rows: FeatureRow[];
};

export type PlanInfo = {
    key: PlanKey;
    title: string;
    ctaLabel: string;
    ctaHref: string;
};

const emptyValue: FeatureValue = { type: "empty" };
const included = (note?: string): FeatureValue =>
    note ? { type: "included", note } : { type: "included" };
const textValue = (text: string): FeatureValue => ({ type: "text", text });

export const planInfos: PlanInfo[] = [
    {
        key: "oss",
        title: "متن‌باز",
        ctaLabel: "راهنمای نصب",
        ctaHref: "/start/oss",
    },
    {
        key: "starter",
        title: "استارتر",
        ctaLabel: "شروع دورهٔ آزمایشی",
        ctaHref: "https://store.metabase.com/checkout/starter",
    },
    {
        key: "pro",
        title: "پرو",
        ctaLabel: "شروع دورهٔ آزمایشی",
        ctaHref: "https://store.metabase.com/checkout/pro",
    },
    {
        key: "enterprise",
        title: "سازمانی",
        ctaLabel: "گفت‌وگو با تیم فروش",
        ctaHref: "/sales",
    },
];

export const planComparisonSections: FeatureSection[] = [
    {
        id: "query-data",
        title: "پرس‌وجوی داده",
        description:
            "راهی سرراست برای این‌که همه بتوانند به‌تنهایی سؤال بپرسند و پاسخ بگیرند.",
        rows: [
            {
                id: "metabot-ai",
                label: "Metabot AI",
                tooltip:
                    "سؤال‌ها را با زبان طبیعی در رابط گفت‌وگو مطرح کنید، SQL بسازید و اشکال‌زدایی کنید.",
                href: "/features/metabot-ai",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included("رایگان برای مدت محدود در متابیس کلاد"),
                    enterprise: included("رایگان برای مدت محدود در متابیس کلاد"),
                },
            },
            {
                id: "query-builder",
                label: "سازندهٔ پرس‌وجو",
                tooltip:
                    "پرس‌وجوهای بدون SQL را با چند کلیک برای افراد غیر فنی فراهم می‌کند.",
                href: "/features/query-builder",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "sql-editor",
                label: "ویرایشگر SQL",
                tooltip: "انعطاف و دقت برای متخصصان داده در نوشتن پرس‌وجوهای SQL.",
                href: "/features/sql-editor",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "models",
                label: "مدل‌ها",
                tooltip:
                    "منابع دادهٔ ساخت‌یافته برای دسترسی سریع به ستون‌های موردنیاز بدون نیاز به join.",
                href: "/features/models",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "query-and-model-caching",
                label: "کش پرس‌وجو و مدل",
                tooltip: "پاسخ‌های سریع‌تر برای نتایج با تغییر کم.",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "granular-result-and-duration-caching",
                label: "کش ریزدانهٔ نتایج و زمان‌بندی",
                tooltip:
                    "کنترل دقیق روی این‌که چه چیزی و برای چه مدت کش شود.",
                href: "/docs/latest/configuring-metabase/caching",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "visualization-sharing",
        title: "تصورسازی و اشتراک‌گذاری",
        description: "داشبوردها و نمودارهایی که واقعاً استفاده می‌شوند.",
        rows: [
            {
                id: "charts-and-visualizations",
                label: "نمودارها و بصری‌سازی‌ها",
                tooltip: "روندها و بازه‌های زمانی را سریع ببینید و تفسیر کنید.",
                values: {
                    oss: textValue("نامحدود"),
                    starter: textValue("نامحدود"),
                    pro: textValue("نامحدود"),
                    enterprise: textValue("نامحدود"),
                },
            },
            {
                id: "analytics-dashboards",
                label: "داشبوردهای تحلیلی",
                tooltip:
                    "سؤال‌ها، نمودارها و شاخص‌های مرتبط را در یک نما گردآوری می‌کند.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "dashboard-filters",
                label: "فیلترهای داشبورد",
                tooltip:
                    "با فیلترهای تعاملی داده را از زاویه‌ای دیگر مشاهده کنید.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "cross-filters",
                label: "فیلترهای متقابل",
                tooltip: "با کلیک روی کارت‌ها فیلترهای کل داشبورد همگام شود.",
                href: "/features/drill-through",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "interactive-drill-through-menu",
                label: "منوی حفاری تعاملی",
                tooltip: "با کلیک بیشتر یاد بگیرید و به رکوردها دسترسی داشته باشید.",
                href: "/features/drill-through",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "custom-click-behavior",
                label: "رفتار سفارشی کلیک",
                tooltip: "کاربران را به داشبورد، نمودار یا URL مرتبط هدایت کنید.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "automatic-x-ray-reports",
                label: "گزارش‌های خودکار X-ray",
                tooltip:
                    "داشبوردهای خودکار بدون نیاز به تصمیم‌گیری دربارهٔ سؤالات.",
                href: "/features/drill-through",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "scheduled-delivery-email",
                label: "ارسال زمان‌بندی‌شده و هشدار ایمیلی",
                tooltip:
                    "ارسال دوره‌ای به خود، تیم یا خارج سازمان و دریافت هشدار هنگام تغییر.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: textValue("نیاز به SMTP (با نشان متابیس)"),
                    starter: included("(با نشان متابیس)"),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "scheduled-delivery-slack",
                label: "ارسال زمان‌بندی‌شده در اسلک",
                tooltip: "بروزرسانی و هشدار را مستقیماً به اسلک ارسال کنید.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: included("(با نشان متابیس)"),
                    starter: included("(با نشان متابیس)"),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "scheduled-delivery-custom-filters",
                label: "ارسال با فیلتر سفارشی",
                tooltip: "برای هر اشتراک فیلتر جداگانه تعریف کنید.",
                href: "/docs/latest/dashboards/subscriptions#customize-filter-values-for-each-dashboard-subscription",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "pdf-export-downloads",
                label: "خروجی PDF و دانلود فایل‌ها",
                tooltip:
                    "داشبورد و نمودار را در قالب دلخواه ذخیره کنید. نشان PDF در پرو و سازمانی حذف می‌شود.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: included("(با نشان متابیس)"),
                    starter: included("(با نشان متابیس)"),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "public-link-sharing",
                label: "اشتراک لینک عمومی",
                tooltip:
                    "سؤال یا داشبورد را با لینک یا iframe درون یا بیرون سازمان به اشتراک بگذارید.",
                href: "/features/analytics-dashboards",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "organization",
        title: "سازماندهی محتوا",
        description:
            "تحلیل با نظم کافی تا پیدا کردن و بازگشت به محتواهای مهم ساده باشد.",
        rows: [
            {
                id: "collections",
                label: "کالکشن‌ها",
                tooltip:
                    "سؤال‌ها، مدل‌ها و داشبوردها را در پوشه‌ها گروه‌بندی کنید و سطوح دسترسی بدهید.",
                href: "/features/collections",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "data-reference",
                label: "شناسهٔ داده",
                tooltip:
                    "نوع دادهٔ ستون‌ها و توضیحات مرتبط را به‌سرعت ببینید.",
                href: "/features/sql-editor",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "events-and-timelines",
                label: "رویدادها و خط‌های زمانی",
                tooltip:
                    "با افزودن رویدادها، تغییر روندها را توضیح دهید.",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "personal-collection",
                label: "کالکشن شخصی",
                tooltip:
                    "محیطی خصوصی برای آزمایش و ساخت نمونه بدون ایجاد شلوغی برای دیگران.",
                href: "/features/collections",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "official-collections",
                label: "کالکشن‌های رسمی",
                tooltip:
                    "ادمین‌ها می‌توانند کالکشن‌های معتبر را علامت‌گذاری کنند.",
                href: "/features/collections",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "moderated-questions",
                label: "سؤال‌های تأییدشده",
                tooltip:
                    "سؤال‌هایی که متخصصان تأیید کرده‌اند متمایز می‌شوند.",
                href: "/features/collections",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "verified-models",
                label: "مدل‌های تأییدشده",
                tooltip:
                    "مدل‌های معتبر را برای استفادهٔ مطمئن علامت‌گذاری کنید.",
                href: "/features/models",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "permissions",
        title: "چندمستاجره و سطح دسترسی",
        description: "کنترل دقیق این‌که چه کسی به چه داده‌ای دسترسی داشته باشد.",
        rows: [
            {
                id: "dashboard-permissions",
                label: "دسترسی داشبورد",
                tooltip:
                    "سطوح مختلف دسترسی به داشبوردها را برای گروه‌ها مدیریت کنید.",
                href: "/features/permissions",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "collection-permissions",
                label: "دسترسی کالکشن",
                tooltip:
                    "مشاهده یا ویرایش کالکشن‌ها را به گروه‌ها بدهید یا محدود کنید.",
                href: "/features/permissions",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "api-keys",
                label: "کلیدهای API",
                tooltip: "برای احراز هویت درخواست‌های API از کلید استفاده کنید.",
                href: "/docs/latest/people-and-groups/api-keys",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "application-permissions",
                label: "دسترسی‌های کاربردی",
                tooltip: "بخشی از دسترسی‌های مدیریتی را به گروه‌های منتخب بدهید.",
                href: "/features/permissions",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "sso-permission-mapping",
                label: "هم‌نگاشت SSO",
                tooltip: "دسترسی‌ها را با ویژگی‌های کاربر در SSO هم‌تراز کنید.",
                href: "/features/permissions",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "row-column-permissions",
                label: "دسترسی سطر و ستون",
                tooltip: "کنترل ریزدانه برای سناریوهای چندمستاجره.",
                href: "/features/data-segregation",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "database-row-level",
                label: "سطح سطر بر اساس دیتابیس",
                tooltip:
                    "دسترسی تعریف‌شده در دیتابیس را در متابیس اعمال کنید.",
                href: "/features/permissions",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "database-per-tenant",
                label: "یک دیتابیس به‌ازای هر مستاجر",
                tooltip: "مسیر‌یابی پرس‌وجوها به دیتابیس صحیح برای هر کاربر.",
                href: "/features/permissions",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "snippet-controls",
                label: "کنترل اسنیپت‌ها",
                tooltip: "ذخیره و سازماندهی اسنیپت‌ها با دسترسی کنترل‌شده.",
                href: "/features/permissions",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "download-results",
                label: "دانلود نتایج",
                tooltip: "تعیین این‌که کدام گروه‌ها و چند ردیف را می‌توانند دانلود کنند.",
                href: "/features/permissions",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "security-sso",
        title: "امنیت و ورود یکپارچه",
        description: "حفاظت محیط و انطباق با بهترین رویه‌های امنیتی.",
        rows: [
            {
                id: "soc2-type-ii-compliance",
                label: "انطباق SOC2 نوع II",
                tooltip: "کنترل‌های سخت‌گیرانهٔ ما بر دادهٔ مشتری تایید شده است.",
                values: {
                    oss: textValue("ناموجود"),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "google-auth",
                label: "ورود گوگل",
                tooltip: "کاربران با حساب گوگل خود وارد شوند.",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "ldap",
                label: "LDAP",
                tooltip: "احراز هویت کاربران با LDAP و نگاشت دسترسی‌ها.",
                href: "/docs/latest/people-and-groups/ldap",
                values: {
                    oss: textValue("پایه (فقط احراز هویت)"),
                    starter: textValue("پایه (فقط احراز هویت)"),
                    pro: textValue("پیشرفته (همگام‌سازی ویژگی‌ها)"),
                    enterprise: textValue("پیشرفته (همگام‌سازی ویژگی‌ها)"),
                },
            },
            {
                id: "saml",
                label: "SAML",
                tooltip:
                    "با سرویس‌هایی مثل Okta، Auth0، گوگل و Keycloak احراز هویت و نگاشت کنید.",
                href: "/docs/latest/people-and-groups/authenticating-with-saml",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "jwt",
                label: "JWT",
                tooltip: "احراز هویت و نگاشت دسترسی با JSON Web Token.",
                href: "/docs/latest/people-and-groups/authenticating-with-jwt",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "slo",
                label: "خروج یکپارچه (SLO)",
                tooltip: "جلسات ورود را در چند برنامه همزمان پایان دهید.",
                href: "/docs/latest/people-and-groups/authenticating-with-saml#saml-single-logout-slo",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "scim-account-provisioning",
                label: "تأمین خودکار حساب (SCIM)",
                tooltip:
                    "حساب‌ها را جدا از احراز هویت مدیریت و لغو دسترسی کنید.",
                href: "/docs/latest/people-and-groups/user-provisioning",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "approved-domains",
                label: "دامنه‌های مجاز",
                tooltip:
                    "دامنه‌هایی که برای ارسال اشتراک یا هشدار مجاز هستند را محدود کنید.",
                href: "/docs/latest/configuring-metabase/email#approved-domains-for-notifications",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "meta-analytics",
        title: "تحلیل استفاده",
        description:
            "مشاهدهٔ رفتار کاربران برای اطمینان از بهره‌گیری صحیح و پاسخ‌گویی به الزامات.",
        rows: [
            {
                id: "usage-analytics",
                label: "آنالیتیکس استفاده",
                tooltip:
                    "پر‌بازدیدترین داشبوردها و سؤال‌ها، دانلودها و اشتراک‌ها را ببینید.",
                href: "/features/usage-analytics",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "embedded-analytics",
        title: "آنالیتیکس تعبیه‌شده",
        description:
            "به مشتریان‌تان اجازه دهید دادهٔ خود را در محصول شما مشاهده و تحلیل کنند.",
        rows: [
            {
                id: "static-embedding",
                label: "تعبیهٔ ایستا",
                tooltip: "تعبیهٔ پایه داشبوردها و نمودارها.",
                href: "/docs/latest/embedding/static-embedding",
                values: {
                    oss: textValue("با نشان ساخته‌شده با متابیس"),
                    starter: textValue("با نشان ساخته‌شده با متابیس"),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "interactive-embedding",
                label: "تعبیهٔ تعاملی",
                tooltip:
                    "تمام قدرت متابیس در اپلیکیشن شما با قابلیت‌های تعاملی و برند شما.",
                href: "/product/embedded-analytics",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "embedded-query-builder",
                label: "سازندهٔ پرس‌وجوی تعبیه‌شده",
                tooltip: "کاربران‌تان پرس‌وجوی دلخواه را خودشان بسازند.",
                href: "/product/embedded-analytics",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "multi-tenant-analytics",
                label: "آنالیتیکس چندمستاجره",
                tooltip: "با SSO تعیین کنید هر مشتری فقط دادهٔ خود را ببیند.",
                href: "/product/embedded-analytics",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "white-label-branding",
                label: "برندسازی کامل",
                tooltip: "متابیس را با لوگو، رنگ و دامنهٔ خودتان ارایه دهید.",
                href: "/features/white-label-analytics",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "custom-ui-elements",
                label: "رنگ‌ها و UI سفارشی",
                tooltip:
                    "کنترل کامل روی رنگ، فونت و متن رابط کاربری.",
                href: "/features/white-label-analytics",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "multi-language-embeds",
                label: "تعبیهٔ چندزبانه",
                tooltip: "برای تعبیهٔ تعاملی زبان را مشخص کنید.",
                href: "/docs/latest/embedding/interactive-ui-components#locale",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "content-translation-static-embeds",
                label: "ترجمهٔ محتوای تعبیهٔ ایستا",
                tooltip: "محتوای تعبیهٔ ایستا را به زبان‌های دیگر ترجمه کنید.",
                href: "/docs/v0.56/embedding/translations",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "embedded-analytics-sdk",
                label: "SDK تعبیهٔ آنالیتیکس برای React",
                tooltip: "کیف ابزار React برای یکپارچه‌سازی کامل داخل محصول.",
                href: "/product/embedded-analytics-sdk",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "embedded-analytics-js",
                label: "کتابخانهٔ Embedded Analytics JS",
                tooltip: "کتابخانهٔ جاوااسکریپت روی SDK برای تعبیه و شخصی‌سازی اجزای متابیس.",
                href: "/docs/v0.56/embedding/embedded-analytics-js",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "data-sources",
        title: "منابع داده",
        description:
            "رابطی ساده بین داده و کاربران کسب‌وکار برای تحلیل آسان‌تر.",
        rows: [
            {
                id: "20+-database-and-data-warehouse-connectors",
                label: "بیش از ۲۰ اتصال پایگاه داده",
                tooltip: "کانکتورهای رسمی، شریک و جامعه برای ابزارهای دادهٔ شما.",
                href: "/data-sources",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "csv-upload",
                label: "بارگذاری CSV",
                tooltip:
                    "بدون ETL از CSV استفاده کنید یا داده‌ها را با منابع دیگر ترکیب کنید.",
                href: "/product/csv-uploads",
                values: {
                    oss: included(),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
        ],
    },
    {
        id: "deployment",
        title: "استقرار",
        description: "خود میزبانی کنید یا استقرار را به ما بسپارید.",
        rows: [
            {
                id: "multi-region-hosting",
                label: "میزبانی چند منطقه‌ای",
                tooltip: "دادهٔ خود را نزدیک نگه دارید و قارهٔ میزبانی را انتخاب کنید.",
                href: "/cloud",
                values: {
                    oss: textValue("ناموجود"),
                    starter: included(),
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "custom-domains",
                label: "دامنهٔ سفارشی",
                tooltip: "آدرس متابیس‌تان را با نام دلخواه تنظیم کنید.",
                values: {
                    oss: textValue("ناموجود"),
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "single-tenant-hosting",
                label: "میزبانی تک‌مستاجره",
                tooltip: "بدون همسایهٔ پر سر و صدا روی سرور.",
                href: "/cloud",
                values: {
                    oss: textValue("ناموجود"),
                    starter: emptyValue,
                    pro: emptyValue,
                    enterprise: included("(هزینهٔ اضافی)"),
                },
            },
            {
                id: "fully-air-gapped-deployment",
                label: "استقرار Air-gapped",
                tooltip: "متابیس را در محیط‌های فوق امن و جدا از شبکه اجرا کنید.",
                href: "/product/air-gapping",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: emptyValue,
                    enterprise: included("(هزینهٔ اضافی)"),
                },
            },
            {
                id: "serialization",
                label: "سریال‌سازی",
                tooltip:
                    "همه‌چیز را برای پشتیبان‌گیری یا محیط‌های چندگانه خروجی و ورودی بگیرید.",
                href: "/docs/latest/installation-and-operation/serialization",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "development-instances",
                label: "نمونهٔ توسعه",
                tooltip: "محیطی مخصوص تست و توسعه دریافت کنید.",
                href: "/docs/latest/installation-and-operation/development-instance",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included("۱۰۰ دلار در ماه"),
                    enterprise: included("۱۰۰ دلار در ماه"),
                },
            },
        ],
    },
    {
        id: "support-license",
        title: "پشتیبانی و مجوز",
        description: "همیشه کنار شما هستیم.",
        rows: [
            {
                id: "support",
                label: "پشتیبانی",
                tooltip:
                    "دسترسی به مهندسانی که در عیب‌یابی فنی کمک می‌کنند.",
                values: {
                    oss: textValue("انجمن پشتیبانی دوستانه"),
                    starter: textValue("پشتیبانی ایمیلی ۳روزه"),
                    pro: textValue("پشتیبانی ایمیلی ۳روزه"),
                    enterprise: textValue("پشتیبانی اولویت‌دار + امکان آموزش"),
                },
            },
            {
                id: "license",
                label: "مجوز",
                values: {
                    oss: textValue("AGPL"),
                    starter: textValue("کلاد: توافق‌نامه میزبانی"),
                    pro: textValue("کلاد: توافق‌نامه میزبانی | خودمیزبان: مجوز تجاری"),
                    enterprise: textValue("کلاد: توافق‌نامه میزبانی | خودمیزبان: مجوز تجاری"),
                },
            },
        ],
    },
    {
        id: "pricing",
        title: "قیمت‌گذاری",
        description: "نحوهٔ صورتحساب.",
        rows: [
            {
                id: "invoicing",
                label: "صورتحساب",
                values: {
                    oss: emptyValue,
                    starter: emptyValue,
                    pro: included(),
                    enterprise: included(),
                },
            },
            {
                id: "plan-cta",
                label: "اقدام",
                values: {
                    oss: textValue("راهنمای نصب"),
                    starter: textValue("شروع دورهٔ آزمایشی"),
                    pro: textValue("شروع دورهٔ آزمایشی"),
                    enterprise: textValue("گفت‌وگو با تیم فروش"),
                },
            },
        ],
    },
];

