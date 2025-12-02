---
title: عیب‌یابی مجوزها
---

# عیب‌یابی مجوزها

اگر کسی سطح دسترسی اشتباه به یک داشبورد یا سؤال دارد، مشکل ممکن است از تنظیمات گروه، مجوزهای کلکسیون، یا مجوزهای داده ناشی شود.

1. به **Admin** > **People** بروید و بررسی کنید که آیا شخص در [بیش از یک گروه با مجوزهای متفاوت][group-permissions] است.
2. اگر یک شخص **نمی‌تواند سؤال‌ها یا داشبوردها را مشاهده یا ویرایش کند**، به [عیب‌یابی مجوزهای کلکسیون](#troubleshooting-collection-permissions) مراجعه کنید.
3. اگر یک شخص **نمی‌تواند به داده دسترسی پیدا کند**، مثل schema، جداول، ردیف‌ها، یا ستون‌ها، به [عیب‌یابی مجوزهای داده](#troubleshooting-data-permissions) مراجعه کنید.

اگر مشکل متفاوتی دارید، به [مشکلات مرتبط](#do-you-have-a-different-problem) مراجعه کنید.

## عیب‌یابی مجوزهای کلکسیون

- [یک گروه کاربری نمی‌تواند به یک داشبورد در یک کلکسیونی که به آن مجوز دارند دسترسی پیدا کند][troubleshooting-viewing-editing].
- [یک گروه کاربری می‌تواند کلکسیون‌هایی که شامل داده محدود شده است را مشاهده کند][collections-restricted-data].

## [عیب‌یابی مجوزهای داده][troubleshooting-data-permissions]

### مجوزهای ردیف و ستون

- [عیب‌یابی امنیت داده ردیف و ستون](./row-and-column-security.md)

### مجوزهای کوئری native (SQL)

- [یک گروه کاربری نمی‌تواند به ویرایشگر SQL دسترسی پیدا کند][sql-access].
- [یک گروه کاربری با مجوزهای SQL توسط امنیت ردیف و ستون آن‌ها محدود نمی‌شود](./row-and-column-security.md)

### مجوزهای جدول یا schema

- [یک گروه کاربری دسترسی اشتباه به یک جدول یا schema دارد][table-schema-access].
- [دریافت یک پیام خطای "permission denied"][permission-denied].
- [بررسی دسترسی کسی به یک جدول یا schema](./data-permissions.md#checking-someones-access-to-a-table-or-schema)

## آیا مشکل متفاوتی دارید؟

- [نمی‌توانم سؤال یا داشبورد خود را ذخیره کنم][proxies].
- [نمی‌توانم جداول خود را ببینم](./cant-see-tables.md).

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید مشکل خود را با استفاده از راهنماهای عیب‌یابی حل کنید:

- در [انجمن متابیس][discourse] جستجو کنید یا بپرسید.
- برای [باگ‌ها یا محدودیت‌های شناخته شده][known-issues] جستجو کنید.

[admin-permissions]: ../permissions/start.md
[collection-permissions]: ../permissions/collections.md
[collections-restricted-data]: ./data-permissions.md#a-user-group-can-view-collections-that-contain-restricted-data
[connecting-database]: ../databases/connecting.md
[data-browser]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/data-browser
[data-model]: ../data-modeling/metadata-editing.md
[data-permissions]: ../permissions/data.md
[discourse]: https://discourse.metabase.com/
[group-permissions]: ../permissions/introduction.md#key-points-regarding-permissions
[known-issues]: ./known-issues.md
[learn-permissions]: https://www.metabase.com/learn/metabase-basics/administration/permissions
[permission-denied]: ./data-permissions.md#getting-a-permission-denied-error-message
[proxies]: ./proxies.md
[setting-collection-permissions]: ../permissions/collections.md#setting-permissions-for-collections
[sql-access]: ./data-permissions.md#a-user-group-cant-access-the-sql-editor
[table-schema-access]: ./data-permissions.md#a-user-group-has-the-wrong-access-to-a-table-or-schema
[troubleshooting-data-permissions]: ./data-permissions.md
[troubleshooting-viewing-editing]: ./cant-view-or-edit.md
