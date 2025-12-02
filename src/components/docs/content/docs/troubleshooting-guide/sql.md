---
title: عیب‌یابی سؤال‌های SQL
---

# عیب‌یابی سؤال‌های SQL

## نتایج اشتباه

- [Aggregationها (countها، sumها، و غیره) اشتباه هستند](https://www.metabase.com/learn/sql/debugging-sql/sql-logic#aggregated-results-counts-sums-etc-are-wrong).
- [نتایج ردیف‌های تکراری دارند](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-duplicated-data).
- [نتایج ردیف‌های گم شده دارند](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-missing-data).
- [تاریخ‌ها و زمان‌ها اشتباه هستند](./timezones.md).
- [داده به‌روز نیست](./sync-fingerprint-scan.md).

## متغیرهای SQL و فیلترهای فیلد

- [Widget فیلتر یک منوی dropdown از مقادیر نمایش نمی‌دهد](../data-modeling/metadata-editing.md#changing-a-search-box-filter-to-a-dropdown-filter).
- [کوئری SQL شامل aliasهای جدول است](../questions/native-editor/field-filters.md#specifying-the-table-and-field-alias).
- [خطای syntax SQL: بند `FROM` گم شده](../questions/native-editor/field-filters.md#field-filters-must-be-connected-to-database-fields-included-in-the-query).
- [نوع متغیر SQL را نمی‌دانم](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-variables)

## خطاهای syntax SQL

برای برخی پیام‌های خطای رایج، به [پیام‌های خطا](./error-message.md) مراجعه کنید.

## کار با JSON در SQL

استفاده از عملگر `?` برای کار با JSON در SQL ممکن است باعث شکست کوئری‌ها شود. در PostgreSQL، می‌توانید به جای آن از `??` استفاده کنید.

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید مشکل خود را با استفاده از راهنماهای عیب‌یابی حل کنید:

- در [انجمن متابیس](https://discourse.metabase.com/) جستجو کنید یا بپرسید.
- برای [باگ‌ها یا محدودیت‌های شناخته شده](./known-issues.md) جستجو کنید.
- یک [Metabase Expert](https://www.metabase.com/partners/){:target="\_blank"} استخدام کنید.
