---
title: "مقدمه"
description: "راه‌اندازی متابیس و شروع به پرس‌وجو."
redirect_from:
  - /learn/sql/getting-started/introduction
toc:
  - id: "learn-sql-with-metabase"
    title: "یادگیری SQL با متابیس"
    level: 1
    href: "#learn-sql-with-metabase"
  - id: "get-up-and-running-with-metabase"
    title: "راه‌اندازی و اجرای متابیس"
    level: 2
    href: "#get-up-and-running-with-metabase"
  - id: "start-a-new-sql-question"
    title: "شروع یک سؤال SQL جدید"
    level: 2
    href: "#start-a-new-sql-question"
  - id: "why-learn-sql-with-metabase"
    title: "چرا SQL را با متابیس یاد بگیریم"
    level: 2
    href: "#why-learn-sql-with-metabase"
  - id: "sql-to-get-data"
    title: "SQL برای دریافت داده"
    level: 2
    href: "#sql-to-get-data"
  - id: "sql-to-filter-data"
    title: "SQL برای فیلتر کردن داده"
    level: 2
    href: "#sql-to-filter-data"
  - id: "working-with-sql"
    title: "کار با SQL"
    level: 2
    href: "#working-with-sql"
  - id: "combining-tables-with-sql"
    title: "ترکیب جداول با SQL"
    level: 2
    href: "#combining-tables-with-sql"
  - id: "debugging-sql"
    title: "عیب‌یابی SQL"
    level: 2
    href: "#debugging-sql"
  - id: "more-tutorials-coming-soon"
    title: "آموزش‌های بیشتر به زودی!"
    level: 2
    href: "#more-tutorials-coming-soon"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "شروع با SQL"
    href: "index.html"
---

# یادگیری SQL با متابیس

راه‌اندازی متابیس و شروع به پرس‌وجو.

![SQL editor](../../images/sql-introduction/sql-editor.png)

## راه‌اندازی و اجرای متابیس

- [نسخه رایگان و متن‌باز متابیس](../../../start/oss/index.html) را دانلود کنید.
- برای [آزمایش رایگان 14 روزه متابیس کلود](../../../pricing/index.html) ثبت‌نام کنید.

## شروع یک سؤال SQL جدید

برای دنبال کردن در متابیس با مثال‌های این آموزش‌ها، متابیس را باز کنید، روی دکمه + New کلیک کنید و **SQL query** را انتخاب کنید. برای منبع داده، Sample Database را انتخاب کنید. [ویرایشگر SQL](../../../docs/latest/questions/native-editor/writing-sql.html#starting-a-new-sql-query) را ببینید.

## چرا SQL را با متابیس یاد بگیریم

- متابیس برای همیشه رایگان است. (اگرچه اگر می‌خواهید برای [آزمایش رایگان 14 روزه متابیس کلود](../../../cloud/index.html) ثبت‌نام کنید، به ایمیل و کارت اعتباری نیاز دارید).
- یک query builder گرافیکی دارد که SQL تولید شده را به شما نشان می‌دهد، پس می‌توانید در حین کار یاد بگیرید.
- با یک پایگاه داده نمونه همراه است که می‌توانید با آن بازی کنید.
- می‌توانید متابیس را به پایگاه داده خود متصل کنید، یا فایل‌های CSV را آپلود کنید تا داده‌های خود را کاوش کنید. اگر در یک پلن کلود با Storage هستید، می‌توانید متابیس را به یک پوشه Google Drive متصل کنید تا Google Sheets را همگام کنید.

> نیاز به مرجع سریع در حین یادگیری دارید؟ [برگه تقلب SQL](../../cheat-sheets/sql-cheat-sheet.html) ما تمام دستورات ضروری را با مثال‌های تجاری دارد. عالی برای باز نگه داشتن در حین تمرین.

![Query builder view SQL](../../images/sql-introduction/query-builder-view-sql.png)

حتی متخصصان SQL اغلب query builder را ترجیح می‌دهند چون سریع‌تر است و سؤال‌های ساخته شده با آن [نمودارهای تعاملی](../../metabase-basics/querying-and-dashboards/questions/drill-through.html) تولید می‌کنند که مردم می‌توانند از آن‌ها drill through کنند. و اگر می‌خواهید روی کدی که تولید می‌کند فکر کنید، همیشه می‌توانید سؤال را به یک پرس‌وجوی SQL تبدیل کنید.

## SQL برای دریافت داده

- [پرس‌وجو از جداول](querying-tables.html)

## SQL برای فیلتر کردن داده

- [متن](../filtering/by-text.html)
- [تاریخ‌ها](../filtering/by-date.html)

## کار با SQL

- [بهترین روش‌ها برای نوشتن SQL](../working-with-sql/sql-best-practices.html)
- [کار با تاریخ‌ها در SQL](../working-with-sql/dates-in-sql.html)
- [محاسبه ارزش طول عمر مشتری (LTV) با متابیس](../../grow-your-data-skills/learn-sql/working-with-sql/ltv-with-metabase.html)
- [استفاده از عبارات جدول مشترک (CTE)](../working-with-sql/sql-cte.html)
- [مرجع نحو SQL](../working-with-sql/syntax-reference.html)

## ترکیب جداول با SQL

- [انواع join در SQL](../working-with-sql/sql-join-types.html)
- [نحوه join کردن جداول در SQL](../../grow-your-data-skills/learn-sql/working-with-sql/sql-joins.html)
- [ترکیب جداول با SQL UNION](../combining-tables/sql-union.html)

## عیب‌یابی SQL

- [عیب‌یابی منطق SQL](../debugging-sql/sql-logic.html)
- [رفع داده‌های گم‌شده در نتایج SQL](../../grow-your-data-skills/learn-sql/debugging-sql/sql-logic-missing-data.html)
- [رفع داده‌های تکراری در نتایج SQL](../debugging-sql/sql-logic-duplicated-data.html)
- [عیب‌یابی خطاهای نحو SQL](../../grow-your-data-skills/learn-sql/debugging-sql/sql-syntax.html)

## آموزش‌های بیشتر به زودی!

در انتظار باشید.

[
      
        
        

      
      
        

      
    ](querying-tables.html)
