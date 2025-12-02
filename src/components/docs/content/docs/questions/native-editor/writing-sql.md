---
title: ویرایشگر SQL
redirect-from:
  - /docs/latest/users-guide/writing-sql
  - /docs/latest/questions/native-editor
---

<!-- markdownlint-disable-next-line MD025 -->
# ویرایشگر SQL

هر وقت به سؤالاتی برسید که با Query builder قابل بیان نباشند، می‌توانید از [SQL][sql-gloss] استفاده کنید.

همچنین می‌توانید از [متابوت](../../ai/metabot.md) برای تولید SQL از روی زبان طبیعی استفاده کنید؛ کافی است از او بخواهید «یک کوئری SQL بنویس که...» و توصیف کنید دربارهٔ داده‌هایتان چه می‌خواهید بدانید.

## SQL چیست؟

SQL (که بعضی‌ها «سی‌کوئل» و بعضی‌ها هم S.Q.L. تلفظ می‌کنند!) مخفف Structured Query Language است و استانداردی فراگیر برای دریافت داده از پایگاه‌های داده محسوب می‌شود. این‌جا قرار نیست خود SQL را آموزش دهیم، اما اگر می‌خواهید بیشتر یاد بگیرید، نگاهی به [Working with SQL][learn-sql] بیندازید.

حتی اگر SQL را نمی‌دانید، بد نیست درکی کلی از نحوهٔ کار آن در متابیس داشته باشید، چون ممکن است دیگران سؤال‌هایی مبتنی بر SQL بسازند که برای شما هم مفید باشد.

## شروع یک کوئری SQL جدید

در نوار ناوبری اصلی روی **+ New** کلیک کنید. اگر [سطح دسترسی](../../permissions/data.md) استفاده از ویرایشگر SQL را داشته باشید، گزینهٔ **SQL query** را همراه با یک آیکون Console خواهید دید.

بعد از کلیک روی **SQL query**، ویرایشگری می‌بینید که می‌توانید در آن کوئری‌هایتان را به زبان SQL (یا زبان Native پایگاه‌داده‌تان) بنویسید و اجرا کنید.

![SQL editor](../images/SQLInterface.png)

برای امتحان، مطمئن شوید [Sample Database][sample-database-gloss] را انتخاب کرده‌اید و این کوئری SQL کوتاه را در ویرایشگر قرار دهید:

```sql
SELECT
    sum(subtotal),
    created_at
FROM orders
GROUP BY created_at;
```

اگر الان همهٔ جزئیات را نمی‌فهمید، نگران نباشید. روی دکمهٔ آبی **Run query** کلیک کنید تا کوئری اجرا شود.

می‌بینید که نتیجهٔ جدولی که برمی‌گردد همان است که اگر با [Query builder](../query-builder/editor.md) از `Orders` بخواهید مجموع `Subtotal` بر حسب `Created At` را ببینید، دریافت می‌کنید.

### اجرای بخش‌های انتخاب‌شده از کوئری

می‌توانید با فشردن **Ctrl + Enter** در ویندوز و لینوکس یا **⌘ + Return** در مک، کوئری SQL خود را اجرا کنید. همچنین می‌توانید فقط بخشی از کوئری را اجرا کنید؛ کافی است بخش موردنظر را هایلایت کنید و دکمهٔ Run را بزنید یا از کلید میانبر استفاده کنید.

سؤال‌هایی که با SQL ساخته می‌شوند هم مثل سؤال‌های Query builder قابل ذخیره، دانلود، تبدیل به مدل و اضافه‌کردن به داشبورد هستند.

همچنین می‌توانید در کوئری‌های SQL خود [به مدل‌ها و سؤال‌های ذخیره‌شده ارجاع بدهید][ref-models].

## استفاده از `??` به‌جای عملگر `?`

اگر در PostgreSQL از عملگر JSON `?` استفاده می‌کنید، در متابیس باید از معادل آن یعنی `??` استفاده کنید.

دلیلش محدودیت JDBC است که علامت سؤال تکی `?` را به‌عنوان Placeholder پارامتر تفسیر می‌کند.

## قالب‌بندی (Format) کوئری‌های SQL

برای قالب‌بندی کوئری‌های SQL می‌توانید روی آیکون «سند» (Document) در سایدبار ویرایشگر کلیک کنید.

**قبل از Format**:

```sql
select sum(subtotal),
  created_at from orders group by created_at;
```

**بعد از Format**:

```sql
SELECT
  sum(subtotal),
  created_at
FROM
  orders
GROUP BY
  created_at;
```

Formatter فقط روی کوئری‌های SQL کار می‌کند و برای SQLite و SQL Server در دسترس نیست.

## استفاده از فیلترها در SQL

اگر شما یا شخص دیگری کوئری SQLای نوشته باشید که شامل [متغیرها][variable-gloss] باشد، آن سؤال ممکن است بالای ویرایشگر، ویجت‌های فیلتر داشته باشد. این ویجت‌ها به شما اجازه می‌دهند قبل از اجرای کوئری، SQL را با مقادیر جدید بازنویسی کنید و نتایج متفاوتی بگیرید.

![SQL filter](../images/SQL-filter-widget.png)

نوشتن کوئری‌های SQL که از متغیرها یا پارامترها استفاده می‌کنند قدرت‌مند است، اما کمی پیشرفته‌تر؛ بنابراین این موضوع صفحهٔ اختصاصی خودش را دارد، اگر خواستید [بیشتر یاد بگیرید](./sql-parameters.md).

## Snippetها

می‌توانید از [Snippetها](snippets.md) برای ذخیره، استفادهٔ مجدد و اشتراک‌گذاری قطعات کد SQL بین چند سؤال که با ویرایشگر SQL ساخته شده‌اند استفاده کنید.

## متابیس چطور کوئری‌های SQL را اجرا می‌کند؟

وقتی از ویرایشگر SQL یک کوئری را اجرا می‌کنید، متابیس همان رشتهٔ کوئری را بدون تغییر برای پایگاه‌داده می‌فرستد. نتایج یا خطاهایی که در متابیس می‌بینید همان چیزهایی هستند که اگر کوئری را مستقیماً روی پایگاه‌داده اجرا کنید دریافت خواهید کرد. اگر سینتکس SQL شما با Dialect پایگاه‌داده هم‌خوانی نداشته باشد، پایگاه‌داده قادر به اجرای آن نخواهد بود.

## ویرایشگر Native برای خواندن داده است، نه نوشتن

ویرایشگر SQL Native برای پرسیدن سؤال دربارهٔ داده طراحی شده است. از این ویرایشگر برای کارهای زیر استفاده نکنید:

- کوئری‌های چنددستوری (Multi-statement)
- Stored procedureها و فراخوانی توابع
- دستورهای DDL (مثل `CREATE`، `ALTER` یا `DROP`)

بسته به سطح دسترسی اتصال شما، ممکن است بعضی از این کارها ظاهراً جواب بدهند، اما هیچ‌کدام به‌طور رسمی پشتیبانی نمی‌شوند و توصیه می‌کنیم برای این کارها از ویرایشگر Native استفاده نکنید.

## تاریخچهٔ نسخهٔ سؤال

برای سؤال‌ها، [داشبوردها](../../dashboards/start.md) و [مدل‌ها](../../data-modeling/models.md)، متابیس تاریخچهٔ ۱۵ نسخهٔ قبلی هر آیتم را نگه می‌دارد.

بخش [تاریخچه](../../exploration-and-organization/history.md) را ببینید.

## اکتشاف نتایج سؤال SQL با Query builder

برای سؤال‌های SQL ذخیره‌شده‌ای که [پارامتر](./sql-parameters.md) ندارند، دکمهٔ **Explore results** را خواهید دید. این دکمه یک سؤال جدید در Query builder می‌سازد که نتایج سؤال SQL را به‌عنوان منبع داده استفاده می‌کند.

![Explore results button](../images/explore-results.png)

## Drill-through در سؤال‌های SQL

ویژوالیزیشن‌هایی که با SQL ساخته می‌شوند، قابلیت‌های [Drill-through][drill-through] محدودی دارند:

- می‌توانید با کلیک روی نقاط داده، نتایج را فیلتر کنید، روی سری‌های زمانی یا نقشه‌ها Zoom کنید، و از برخی [اکشن‌های هدر ستون](../visualizations/table.md#column-heading-options-for-filtering-and-summarizing) استفاده کنید.
- اما نمی‌توانید تا سطح ردیف‌های غیرتجمیع‌شده Drill کنید، Granularity زمانی را تغییر دهید یا بر اساس دسته‌بندی‌ها یا مکان‌ها Breakout بگیرید.

## کش‌کردن نتایج

بخش [Caching question policies](../../configuring-metabase/caching.md#question-caching-policy) را ببینید.

## مطالعهٔ بیشتر

- [بهترین رویه‌ها برای نوشتن کوئری‌های SQL](https://www.metabase.com/learn/sql/working-with-sql/sql-best-practices)
- [راهنمای عیب‌یابی SQL][troubleshooting-sql]

[learn-sql]: https://www.metabase.com/learn/sql/working-with-sql
[ref-models]: ./referencing-saved-questions-in-queries.md
[sample-database-gloss]: https://www.metabase.com/glossary/sample-database
[sql-gloss]: https://www.metabase.com/glossary/sql
[troubleshooting-sql]: ../../troubleshooting-guide/sql.md
[variable-gloss]: https://www.metabase.com/glossary/variable
[drill-through]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through
