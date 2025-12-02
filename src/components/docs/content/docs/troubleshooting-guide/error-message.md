---
title: عیب‌یابی پیام‌های خطا
---

# عیب‌یابی پیام‌های خطا

یک پیام خطا می‌تواند به شما کمک کند راهنمای عیب‌یابی صحیح را پیدا کنید. کلمات دقیق به پایگاه داده و نسخه متابیس شما بستگی دارد، بنابراین سعی کنید نزدیک‌ترین تطبیق را جستجو کنید.

## ویرایشگر SQL

ببینید آیا جزئیات خطای شما شامل هر یک از این‌ها است:

- [جدول یا ستون "not found" یا "not recognized"](https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#column-or-table-name-is-not-found-or-not-recognized).
- [تابع وجود ندارد](https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#sql-function-does-not-exist).
- [مجوز رد شد](./data-permissions.md#getting-a-permission-denied-error-message).

به‌عنوان مثال، این خطای SQL به شما می‌گوید که تابع `DATEFROMPARTS` روی یک پایگاه داده BigQuery کار نمی‌کند:

![پیام خطای SQL نمونه](./images/sample-error-sql.png)

## سؤال‌ها و داشبوردها

- [سؤال شما خیلی طول کشید](./timeout.md).
- [هنوز در حال انتظار...](./my-dashboard-is-slow.md).

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید خطای خود را در این صفحه پیدا کنید:

- در [انجمن متابیس](https://discourse.metabase.com/) جستجو کنید یا بپرسید.
- برای [باگ‌ها یا محدودیت‌های شناخته شده](./known-issues.md) جستجو کنید.
