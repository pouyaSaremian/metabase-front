---
title: پارامتر گروه‌بندی زمانی
---

<!-- markdownlint-disable-next-line MD025 -->
# پارامتر گروه‌بندی زمانی

می‌توانید به سؤال‌های SQL پارامتری اضافه کنید که تعیین کند نتایج بر اساس زمان چگونه گروه‌بندی شوند: بر اساس روز، هفته، ماه و غیره.

برای افزودن یک پارامتر گروه‌بندی زمانی، به این موارد نیاز دارید:

- یک Aggregation (مثل `COUNT`).
- یک پارامتر در بخش `SELECT`.
- همان پارامتر در بخش `GROUP BY`.

## مثال پارامتر گروه‌بندی زمانی

در مثال زیر تعداد سفارش‌ها در جدول `orders` شمارش می‌شود و پارامتری قرار داده‌ایم که به کاربران اجازه می‌دهد نحوهٔ گروه‌بندی نتایج بر اساس ستون `created_at` را تغییر دهند.

```sql
{% raw %}
SELECT
  COUNT(*) AS "Orders",
  {{created_at_param}} AS "Created At"
FROM
  orders
GROUP BY
  {{created_at_param}}
{% endraw %}
```

همان‌طور که در همهٔ Group byهای SQL، باید پارامتر را هم در `SELECT` و هم در `GROUP BY` قرار دهید. همچنین می‌توانید بر اساس چند ستون گروه‌بندی کنید، مانند:

```sql
{% raw %}
SELECT
  COUNT(*) AS "Count",
  {{created_at_param}} AS "Created at",
  {{trial_ends_at}} AS "Trial ends at"
FROM
  accounts
GROUP BY
  {{created_at_param}},
  {{trial_ends_at}}
{% endraw %}
```

مثل سایر پارامترها، می‌توانید یک مقدار پیش‌فرض (مثلاً "month") تنظیم کنید. برای پارامترهای گروه‌بندی زمانی، گزینه‌های مجاز به [پارامتر گروه‌بندی زمانی](../../dashboards/filters.md#time-grouping-parameter) محدود می‌شوند.

اگر کاربران مقداری برای پارامتر تنظیم نکنند، متابیس نتایج را بر اساس «بخش تاریخ» (مثل روز یا هفته) گروه‌بندی نمی‌کند؛ بلکه بر اساس تاریخ‌های دست‌نخورده (Untruncated) گروه‌بندی خواهد کرد.

## کار با Aliasها

مشابه Field filterها، اگر برای جدولی Alias تعریف کرده باشید و پارامتر گروه‌بندی زمانی را به فیلدی در آن جدول Aliased Map کنید، باید [Alias جدول و فیلد را به متابیس اعلام کنید](./field-filters.md#specifying-the-table-and-field-alias).

## اتصال به فیلتر داشبورد

بخش [Dashboard filters and parameters](../../dashboards/filters.md) را ببینید.
