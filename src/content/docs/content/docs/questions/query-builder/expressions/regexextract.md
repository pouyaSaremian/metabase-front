---
title: RegexExtract
---

# RegexExtract

> ⚠️ تابع `regexExtract` برای MongoDB، SQLite و SQL Server در دسترس نیست و در Druid فقط روی درایور Druid‑JDBC کار می‌کند.

تابع `regexExtract` با استفاده از [عبارات باقاعده (Regular expressions / Regex)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) بخشی از یک متن را استخراج می‌کند.

`regexExtract` برای متونی که ساختار مشخصی ندارند (مثل URLها یا پاسخ‌های متنیِ آزاد در نظرسنجی‌ها) بسیار مناسب است.  
اگر با رشته‌هایی با قالب قابل پیش‌بینی کار می‌کنید (مثل SKU، ID، یا کدهای استاندارد)، بهتر است اول سراغ تابع ساده‌تر [substring](../expressions/substring.md) بروید.

می‌توانید از `regexExtract` برای ساخت ستون‌های سفارشی با لیبل‌های کوتاه و خوانا استفاده کنید، مثلاً برای:

- منوهای کشویی فیلترها،
- لیبل‌های چارت‌ها، یا
- پارامترهای Embedding.

| Syntax                                                         | Example                                  |
| -------------------------------------------------------------- | ---------------------------------------- |
| `regexExtract(text, regular_expression)`                       | `regexExtract("regexExtract", "ex(.*)")` |
| بخشی از متن را با استفاده از یک عبارت باقاعده استخراج می‌کند. | `"extract"`                              |

## جستجو و پاک‌سازی متن

فرض کنید داده‌های وب با URLهای مختلف دارید و می‌خواهید هر URL را به یک نام کمپین کوتاه و خوانا نگاشت کنید:

| URL                                                   | Campaign Name |
| ----------------------------------------------------- | ------------- |
| https://www.metabase.com/docs/?utm_campaign=alice     | alice         |
| https://www.metabase.com/learn/?utm_campaign=neo      | neo           |
| https://www.metabase.com/glossary/?utm_campaign=candy | candy         |

می‌توانید ستونی سفارشی به نام **Campaign Name** با این عبارت بسازید:

```text
regexExtract([URL], "^[^?#]+\?utm_campaign=(.*)")
```

در این‌جا، الگوی Regex `^[^?#]+\?` [همهٔ URLهای معتبر را تا قبل از علامت سؤال/هاش](https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch07s13.html) می‌گیرد. می‌توانید `utm_campaign=` را با هر پارامتر Query دیگری جایگزین کنید.  
در انتهای الگو، [گروه گیرنده (Capturing group)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences) یعنی `(.*)` تمام کاراکترهایی را که بعد از پارامتر `utm_campaign=` می‌آیند، استخراج می‌کند.

حالا می‌توانید از ستون **Campaign Name** هرجا که لیبل تمیز لازم دارید استفاده کنید؛ مثل [منوهای کشویی فیلترها](../../../dashboards/filters.md)، [چارت‌ها](../../visualizations/visualizing-results.md)، و [پارامترهای Embedding](../../../embedding/static-embedding-parameters.md).

## انواع دادهٔ قابل قبول

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `regexExtract` |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| String                                                                                                                         | ✅                       |
| Number                                                                                                                         | ❌                       |
| Timestamp                                                                                                                      | ❌                       |
| Boolean                                                                                                                        | ❌                       |
| JSON                                                                                                                           | ❌                       |

## محدودیت‌ها

- `regexExtract` برای MongoDB، SQLite و SQL Server در دسترس نیست.  
- در Druid فقط هنگام استفاده از درایور Druid‑JDBC کار می‌کند.

Regex می‌تواند «هنر سیاه» باشد؛ با احتیاط از آن استفاده کنید.

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که رفتاری مشابه عبارت `regexExtract` در متابیس دارند، همراه با نکاتی برای انتخاب گزینهٔ مناسب.

**[عبارت‌های متابیس](../expressions-list.md)**

- [`substring`](#substring)

**ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### Substring

از [substring](../expressions/substring.md) زمانی استفاده کنید که متن شما ساختار ثابتی دارد (تعداد کاراکترها و ترتیب آن‌ها قابل پیش‌بینی است).

مثلاً برای استخراج پارامتر Query از [URLهای نمونه](#searching-and-cleaning-text)، `substring` مناسب نیست؛ چون هم طول Path و هم طول نام پارامترها متغیر است.  
اما اگر بخواهید فقط بخش بین `https://www.` و `.com` را بگیرید، می‌توانید هم از `substring` و هم از `regexExtract` استفاده کنید:

```text
substring([URL], 13, 8)
```

یا:

```text
regexExtract([URL], "^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/.\n]+)")
```

### SQL

وقتی سؤالی را با [notebook editor](https://www.metabase.com/glossary/notebook-editor) اجرا می‌کنید، متابیس تنظیمات گرافیکی شما (فیلترها، Summarize و …) را به یک کوئری تبدیل می‌کند و آن را روی دیتابیس اجرا می‌کند.

اگر [دادهٔ نمونه](#searching-and-cleaning-text) را در PostgreSQL ذخیره کرده باشید:

```sql
SELECT
    url,
    SUBSTRING(url, '^[^?#]+\?utm_campaign=(.*)') AS campaign_name
FROM follow_the_white_rabbit
```

این کوئری معادل عبارت زیر در متابیس است:

```text
regexExtract([URL], "^[^?#]+\?utm_campaign=(.*)")
```

### Spreadsheets

اگر [دادهٔ نمونه](#searching-and-cleaning-text) را در Spreadsheet داشته باشید و "URL" در ستون A باشد، فرمول زیر:

```text
regexExtract(A2, "^[^?#]+\?utm_campaign=(.*)")
```

تقریباً همان سینتکس عبارت متابیس را دارد:

```text
regexExtract([URL], "^[^?#]+\?utm_campaign=(.*)")
```

### Python

اگر [دادهٔ نمونه](#searching-and-cleaning-text) را در یک DataFrame به نام `df` نگه‌داری کنید:

```text
df['Campaign Name'] = df['URL'].str.extract(r'^[^?#]+\?utm_campaign=(.*)')
```

این کد معادل عبارت زیر در متابیس است:

```text
regexExtract([URL], "^[^?#]+\?utm_campaign=(.*)")
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
