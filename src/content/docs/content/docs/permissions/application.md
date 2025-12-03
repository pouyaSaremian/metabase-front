---
title: سطح دسترسی اپلیکیشن
summary: دادن دسترسی به گروه‌ها برای استفاده از قابلیت‌های مدیریتی متابیس مانند تنظیمات، ابزارهای مانیتورینگ و اعلان‌ها.
redirect_from:
  - /docs/latest/administration-guide/application-permissions
---

<!-- markdownlint-disable-next-line MD025 -->
# سطح دسترسی اپلیکیشن

{% include plans-blockquote.html feature="Application permissions" %}

سطح دسترسی اپلیکیشن برای این است که به بعضی (و نه همهٔ) قابلیت‌های مدیریتی متابیس، به گروه‌ها دسترسی بدهید.

برای تنظیم سطح دسترسی اپلیکیشن، به گوشهٔ بالا-راست صفحه بروید و روی آیکون **چرخ‌دنده** کلیک کنید، سپس **Admin settings** > **Permissions** > **Application** را انتخاب کنید.

## Settings access

سطح دسترسی Settings access تعیین می‌کند کدام گروه‌ها می‌توانند تنظیمات زیر تب Admin > Settings را ببینند و ویرایش کنند. این تنظیمات شامل موارد زیر است:

- [Settings](../configuring-metabase/settings.md)
- [Email](../configuring-metabase/email.md)
- [Slack](../configuring-metabase/slack.md)
- [Webhooks](../configuring-metabase/webhooks.md)
- [Authentication](../people-and-groups/start.md)
- [Maps](../configuring-metabase/custom-maps.md)
- [Localization](../configuring-metabase/localization.md)
- [Appearance](../configuring-metabase/appearance.md)
- [Public sharing](../embedding/public-links.md)
- [Embedding in other applications](../embedding/start.md)
- [Caching](../configuring-metabase/caching.md)

## Monitoring access

سطح دسترسی Monitoring access مشخص می‌کند چه گروه‌هایی به بخش‌های زیر دسترسی داشته باشند:

- [Tools](../usage-and-performance-tools/tools.md)
- [Troubleshooting](../troubleshooting-guide/index.md)

## Subscriptions and alerts

این تنظیم مشخص می‌کند چه کسانی می‌توانند موارد زیر را ایجاد کنند:

- [Dashboard subscriptions](../dashboards/subscriptions.md)
- [Alerts](../questions/alerts.md)

برای این‌که افراد بتوانند برای یک داشبورد یا سؤال، اعلان (Alert) یا اشتراک (Subscription) تنظیم کنند، باید در گروه‌هایی باشند که حداقل دسترسی View یا Edit به کالکشنی دارند که آن داشبورد یا سؤال در آن ذخیره شده است. نگاه کنید به [Collection permissions](../permissions/collections.md).

برای جلوگیری از ایجاد اعلان‌ها و اشتراک‌ها، سطح دسترسی "Subscriptions and alerts" را روی "No" بگذارید.
