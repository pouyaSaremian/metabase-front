---
title: مستندات متابیس
redirect_from:
  - /docs/latest/enterprise-guide
  - /docs/latest/users-guide
  - /docs/latest/administration-guide
  - /docs/latest/operations-guide
  - /docs/latest/faq
---

<!-- markdownlint-disable-next-line MD025 -->
# مستندات متابیس

![نمایی از داشبورد متابیس](./images/metabase-product-screenshot.png)

متابیس یک پلتفرم متن‌باز هوش تجاری است. با متابیس می‌توانید دربارهٔ داده‌های‌تان سؤال بپرسید یا آن را درون محصول خود تع嬬ب کنید تا مشتریان‌تان بتوانند به‌صورت مستقل داده‌های خود را بررسی کنند.

## گام‌های نخست

### مستندات متابیس کلود

ساده‌ترین راه برای شروع کار با متابیس، ثبت‌نام در دورهٔ آزمایشی رایگان [Metabase Cloud](https://store.metabase.com/checkout) است. در این نسخه پشتیبانی، نسخهٔ پشتیبان، به‌روزرسانی‌ها، سرور SMTP، گواهی SSL، گزارش ممیزی امنیتی SoC2 Type 2 و موارد دیگر را دریافت می‌کنید (و هزینه‌ای که می‌پردازید صرف بهبود متابیس می‌شود). برای تصمیم‌گیری سریع می‌توانید مقایسهٔ [کلود در برابر میزبانی شخصی](./cloud/cloud-vs-self-hosting.md) را بخوانید. هر زمان که بخواهید می‌توانید بین [نصب شخصی](./installation-and-operation/installing-metabase.md) و کلود جابه‌جا شوید.

### [نصب متابیس](./installation-and-operation/installing-metabase.md)

می‌توانید متابیس را به‌صورت فایل JAR، با Docker یا در [Metabase Cloud](https://store.metabase.com/checkout) اجرا کنید.

### [پیکربندی متابیس](./configuring-metabase/setting-up-metabase.md)

پس از نصب، متابیس را پیکربندی کنید و آن را به داده‌های خود متصل نمایید.

### [شروع کار](https://www.metabase.com/learn/metabase-basics/getting-started/index)

بعد از اتصال داده‌ها، ساخت پرسش‌ها، تشکیل داشبوردها و به‌اشتراک‌گذاری نتایج را آغاز کنید.

### [تور متابیس](https://www.metabase.com/learn/metabase-basics/overview/tour-of-metabase)

متابیس یک محصول عمیق با ابزارهای متعدد برای ساده‌سازی هوش تجاری است؛ از نمودارهای قابل تع嬬ب و داشبوردهای تعاملی گرفته تا ویرایشگرهای GUI و SQL، حسابرسی و امنیت سطر و ستون و موارد بیشتر.

## موضوعات مستندات

مرجع جامع مستندات متابیس.

### نصب

- [نمای کلی نصب](./installation-and-operation/start.md)
- [نصب متابیس](./installation-and-operation/installing-metabase.md)
- [به‌روزرسانی متابیس](./installation-and-operation/upgrading-metabase.md)
- [پیکربندی پایگاه‌دادهٔ برنامهٔ متابیس](./installation-and-operation/configuring-application-database.md)
- [پشتیبان‌گیری از متابیس](./installation-and-operation/backing-up-metabase-application-data.md)
- [مهاجرت به پایگاه‌دادهٔ تولیدی](./installation-and-operation/migrating-from-h2.md)
- [پایش متابیس](./installation-and-operation/monitoring-metabase.md)
- [نمونه‌های توسعه](./installation-and-operation/development-instance.md)
- [سریال‌سازی](./installation-and-operation/serialization.md)
- [همگام‌سازی از راه دور](./installation-and-operation/remote-sync.md)
- [فرمان‌ها](./installation-and-operation/commands.md)
- [مرورگرهای پشتیبانی‌شده](./installation-and-operation/supported-browsers.md)
- [حریم خصوصی](./installation-and-operation/privacy.md)
- [جزئیات دادهٔ ناشناس جمع‌آوری‌شده](./installation-and-operation/information-collection.md)

### پایگاه‌های داده

- [نمای کلی پایگاه‌های داده](./databases/start.md)
- [افزودن و مدیریت پایگاه‌های داده](./databases/connecting.md)
- [کاربران، نقش‌ها و سطوح دسترسی پایگاه داده](./databases/users-roles-privileges.md)
- [همگام‌سازی و اسکن پایگاه‌های داده](./databases/sync-scan.md)
- [رمزنگاری اتصال پایگاه داده](./databases/encrypting-details-at-rest.md)
- [تونل‌زدن SSH](./databases/ssh-tunnel.md)
- [گواهی SSL](./databases/ssl-certificates.md)
- [بارگذاری داده‌ها](./databases/uploads.md)

### پرسش‌ها

- [نمای کلی پرسش‌ها](./questions/start.md)
- [هشدارها](./questions/alerts.md)
- [خروجی گرفتن از داده](./questions/exporting-results.md)

#### سازندهٔ پرسش

- [ویرایشگر پرسش](./questions/query-builder/editor.md)
- [فیلتر کردن](./questions/query-builder/filters.md)
- [خلاصه‌سازی و گروه‌بندی](./questions/query-builder/summarizing-and-grouping.md)
- [عبارت‌های سفارشی](./questions/query-builder/expressions.md)
- [فهرست عبارت‌ها](./questions/query-builder/expressions-list.md)
- [اتصال داده‌ها](./questions/query-builder/join.md)

#### SQL و پرسش‌های بومی

- [ویرایشگر SQL](./questions/native-editor/writing-sql.md)
- [پارامترهای SQL](./questions/native-editor/sql-parameters.md)
- [ارجاع مدل‌ها و پرسش‌های ذخیره‌شده](./questions/native-editor/referencing-saved-questions-in-queries.md)
- [اسنیپت‌ها](./questions/native-editor/snippets.md)
- [مجوزهای پوشهٔ اسنیپت‌ها](./permissions/snippets.md)

#### مصورسازی داده

- [مصورسازی داده](./questions/visualizations/visualizing-results.md)
- [نمودار ترکیبی](./questions/visualizations/combo-chart.md)
- [جزئیات](./questions/visualizations/detail.md)
- [قیفی](./questions/visualizations/funnel.md)
- [گیج](./questions/visualizations/gauge.md)
- [خطی، میله‌ای و مساحتی](./questions/visualizations/line-bar-and-area-charts.md)
- [نقشه‌ها](./questions/visualizations/map.md)
- [اعداد](./questions/visualizations/numbers.md)
- [کیکی یا دوناتی](./questions/visualizations/pie-or-donut-chart.md)
- [جدول محوری](./questions/visualizations/pivot-table.md)
- [نوار پیشرفت](./questions/visualizations/progress-bar.md)
- [نمودار سنکی](./questions/visualizations/sankey.md)
- [پراکندگی یا حبابی](./questions/visualizations/scatterplot-or-bubble-chart.md)
- [جدول](./questions/visualizations/table.md)
- [راهنماها (Tooltips)](./questions/visualizations/tooltips.md)
- [روند](./questions/visualizations/trend.md)
- [آبشاری](./questions/visualizations/waterfall-chart.md)

### داشبوردها

- [نمای کلی داشبوردها](./dashboards/start.md)
- [مقدمه‌ای بر داشبوردها](./dashboards/introduction.md)
- [فیلترهای داشبورد](./dashboards/filters.md)
- [داشبوردهای تعاملی](./dashboards/interactive.md)
- [نمودارهای چندسری](./dashboards/multiple-series.md)
- [اشتراک‌های داشبورد](./dashboards/subscriptions.md)
- [اقدام‌ها در داشبورد](./dashboards/actions.md)

### اسناد

- [مقدمه‌ای بر اسناد](./documents/introduction.md)

### مدل‌سازی داده

- [نمای کلی مدل‌سازی داده](./data-modeling/start.md)
- [مدل‌ها](./data-modeling/models.md)
- [پایداری مدل](./data-modeling/model-persistence.md)
- [شاخص‌ها](./data-modeling/metrics.md)
- [تنظیمات ابردادهٔ جدول برای مدیران](./data-modeling/metadata-editing.md)
- [انواع فیلد](./data-modeling/semantic-types.md)
- [پیش‌فرض‌های قالب‌بندی](./data-modeling/formatting.md)
- [کار با JSON](./data-modeling/json-unfolding.md)
- [سگمنت‌ها](./data-modeling/segments.md)

### اکشن‌ها

- [نمای کلی اکشن‌ها](./actions/start.md)
- [مقدمه‌ای بر اکشن‌ها](./actions/introduction.md)
- [اکشن‌های پایه](./actions/basic.md)
- [اکشن‌های سفارشی](./actions/custom.md)

### هوش مصنوعی

- [نمای کلی هوش مصنوعی](./ai/start.md)
- [متابوت](./ai/metabot.md)
- [راه‌اندازی متابوت](./ai/settings.md)

### اکتشاف و سازمان‌دهی

- [نمای کلی سازمان](./exploration-and-organization/start.md)
- [اکتشاف پایه](./exploration-and-organization/exploration.md)
- [کلکسیون‌ها](./exploration-and-organization/collections.md)
- [میانبرهای صفحه‌کلید](./exploration-and-organization/keyboard-shortcuts.md)
- [تاریخچه](./exploration-and-organization/history.md)
- [سطل زباله](./exploration-and-organization/delete-and-restore.md)
- [مرجع داده](./exploration-and-organization/data-model-reference.md)
- [رویدادها و جدول‌های زمانی](./exploration-and-organization/events-and-timelines.md)
- [ایکس‌ری‌ها](./exploration-and-organization/x-rays.md)
- [راستی‌آزمایی محتوا](./exploration-and-organization/content-verification.md)

### افراد

- [نمای کلی افراد](./people-and-groups/start.md)
- [تنظیمات حساب کاربری](./people-and-groups/account-settings.md)
- [مدیریت افراد و گروه‌ها](./people-and-groups/managing.md)
- [سختی گذرواژه](./people-and-groups/changing-password-complexity.md)
- [انقضای نشست](./people-and-groups/changing-session-expiration.md)
- [ورود با Google](./people-and-groups/google-sign-in.md)
- [LDAP](./people-and-groups/ldap.md)
- [کلیدهای API](./people-and-groups/api-keys.md)

#### گزینه‌های SSO پولی

- [احراز هویت مبتنی بر JWT](./people-and-groups/authenticating-with-jwt.md)
- [احراز هویت مبتنی بر SAML](./people-and-groups/authenticating-with-saml.md)
  - [SAML با Auth0](./people-and-groups/saml-auth0.md)
  - [SAML با Microsoft Entra ID](./people-and-groups/saml-azure.md)
  - [SAML با Google](./people-and-groups/saml-google.md)
  - [SAML با Keycloak](./people-and-groups/saml-keycloak.md)
  - [SAML با Okta](./people-and-groups/saml-okta.md)
- [تأمین کاربر با SCIM](./people-and-groups/user-provisioning.md)

### سطح دسترسی‌ها

- [نمای کلی سطح دسترسی](./permissions/start.md)
- [مقدمه‌ای بر سطح دسترسی](./permissions/introduction.md)
- [مجوزهای داده](./permissions/data.md)
- [مجوزهای کلکسیون](./permissions/collections.md)
- [مجوزهای برنامه](./permissions/application.md)
- [امنیت سطر و ستون](./permissions/row-and-column-security.md)
- [نمونه‌های امنیت سطر و ستون](./permissions/row-and-column-security-examples.md)
- [شبیه‌سازی اتصال](./permissions/impersonation.md)
- [مسیریابی پایگاه داده](./permissions/database-routing.md)
- [مجوزهای پوشهٔ اسنیپت](./permissions/snippets.md)
- [مجوزهای اعلان](./permissions/notifications.md)
- [پیکربندی مجوزها برای تع嬬ب](./permissions/embedding.md)

### تع嬬ب (Embedding)

- [نمای کلی تع嬬ب](./embedding/start.md)
- [مقدمه‌ای بر تع嬬ب](./embedding/introduction.md)
- [تع嬬ب تعاملی](./embedding/interactive-embedding.md)
- [راهنمای سریع تع嬬ب تعاملی](./embedding/interactive-embedding-quick-start-guide.md)
- [تع嬬ب ایستا](./embedding/static-embedding.md)
- [پارامترهای تع嬬ب ایستا](./embedding/static-embedding-parameters.md)
- [ایمن‌سازی متابیس تع嬬ب‌شده](./embedding/securing-embeds.md)

### پیکربندی

- [نمای کلی پیکربندی](./configuring-metabase/start.md)
- [راه‌اندازی متابیس](./configuring-metabase/setting-up-metabase.md)
- [تنظیمات عمومی](./configuring-metabase/settings.md)
- [ایمیل](./configuring-metabase/email.md)
- [اسلک](./configuring-metabase/slack.md)
- [وب‌هوک‌ها](./configuring-metabase/webhooks.md)
- [متغیرهای محیطی](./configuring-metabase/environment-variables.md)
- [فایل پیکربندی](./configuring-metabase/config-file.md)
- [پیکربندی لاگ متابیس](./configuring-metabase/log-configuration.md)
- [منطقه‌های زمانی](./configuring-metabase/timezones.md)
- [زبان‌ها و بومی‌سازی](./configuring-metabase/localization.md)
- [ظاهر](./configuring-metabase/appearance.md)
- [ذخیره‌سازی نتایج پرسش](./configuring-metabase/caching.md)
- [نقشه‌های سفارشی](./configuring-metabase/custom-maps.md)
- [سفارشی‌سازی وب‌سرور Jetty متابیس](./configuring-metabase/customizing-jetty-webserver.md)

### ابزارها

- [نمای کلی ابزارها](./usage-and-performance-tools/start.md)
- [تحلیل استفاده](./usage-and-performance-tools/usage-analytics.md)
- [ابزارهای مدیر سیستم](./usage-and-performance-tools/tools.md)

### متابیس کلود

- [مستندات متابیس کلود و فروشگاه](./cloud/start.md)

### API متابیس

- [مستندات API متابیس](./api.html)
- [آموزش API](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-api)

### عیب‌یابی

- [راهنماهای عیب‌یابی](./troubleshooting-guide/index.md)

### راهنمای توسعه‌دهندگان

- [راهنمای توسعه‌دهندگان](./developers-guide/start.md)

## دریافت کمک

### راهنمای عیب‌یابی

- [راهنماهای عیب‌یابی](troubleshooting-guide/index.md)
- [انجمن متابیس](https://discourse.metabase.com/)
- [پیکربندی لاگ‌گیری](./configuring-metabase/log-configuration.md)

### آموزش‌ها و راهنماها

وب‌سایت [Learn Metabase](https://www.metabase.com/learn) مقالات فراوانی دربارهٔ کار با متابیس، بهترین شیوه‌های داده و موضوعات مرتبط ارائه می‌دهد.

## منابع بیشتر

### [گفت‌وگو](https://discourse.metabase.com)

با سایر کاربران متابیس ارتباط بگیرید و تجربه‌ها را به‌اشتراک بگذارید.

### [داستان‌های جامعه](https://www.metabase.com/community)

تجربه‌ها و توصیه‌های عملی کاربران متابیس.

### [وبلاگ متابیس](https://www.metabase.com/blog)

اخبار، به‌روزرسانی‌ها و ایده‌ها.

### [مشتریان](https://www.metabase.com/case-studies)

داستان واقعی شرکت‌ها، داده‌ها و دستاوردهای‌شان.

### [توییتر متابیس](https://twitter.com/metabase)

آخرین نکات و خبرها را در توییتر دنبال کنید.

### [مخزن کد در گیت‌هاب](https://github.com/metabase/metabase)

ما را در گیت‌هاب دنبال کنید.

### [فهرست انتشارها](https://github.com/metabase/metabase/releases)

فهرست تمام نسخه‌های متابیس، شامل نسخهٔ سازمانی و متن‌باز.

### [مشارکت در توسعه](./developers-guide/start.md)

در پروژهٔ متن‌باز متابیس مشارکت کنید!

### [واژه‌نامهٔ داده و هوش تجاری](https://www.metabase.com/glossary)

توضیح شفاف اصطلاحات داده‌ای.

### [متخصصان متابیس](https://www.metabase.com/partners/)

اگر به منابع فنی بیشتری برای راه‌اندازی پشتهٔ داده با متابیس نیاز دارید، با یکی از [متخصصان متابیس](https://www.metabase.com/partners/) ارتباط بگیرید.

<!-- bump 2 -->
