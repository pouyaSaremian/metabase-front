---
title: Substring
---

# Substring

تابع `substring` بخشی از یک متن را استخراج می‌کند.  
این تابع برای تمیزکردن متن (یا هر مقداری با [نوع دادهٔ رشته‌ای](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types)) که فرمت ثابتی دارد، بسیار کاربردی است.

برای مثال، `substring` برای رشته‌هایی مثل شمارهٔ SKU، کدهای ISO، و آدرس‌های ایمیل استاندارد انتخاب مناسبی است.

| Syntax                                                                                            | Example                                |
| ------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `substring(text, position, length)`                                                               | `substring("user_id@email.com", 1, 7)` |
| بخشی از متن را با توجه به نقطهٔ شروع (`position`) و طول (`length` بر حسب تعداد کاراکتر) برمی‌گرداند. | `"user_id"`                            |

## پارامترها

- اولین کاراکتر در رشته، در موقعیت `1` قرار دارد.
- طول `length` همیشه باید عددی **مثبت** باشد.

## گرفتن زیررشته از سمت چپ

| Mission ID  | Agent |
| ----------- | ----- |
| 19951113006 | 006   |
| 20061114007 | 007   |
| 19640917008 | 008   |

ستون **Agent** یک ستون سفارشی است با این عبارت:

```text
substring([Mission ID], 9, 3)
```

## گرفتن زیررشته از سمت راست

به‌جای استفادهٔ مستقیم از یک عدد ثابت برای موقعیت، می‌توانید از فرمول زیر استفاده کنید:

```text
1 + length([column]) - position_from_right
```

در این‌جا، `position_from_right` تعداد کاراکترهایی است که می‌خواهید از سمت راست به چپ بشمارید.

با همان جدول نمونه:

| Mission ID  | Agent |
| ----------- | ----- |
| 19951113006 | 006   |
| 20061114007 | 007   |
| 19640917008 | 008   |

در این مثال، ستون **Agent** با این عبارت ساخته شده است:

```text
substring([Mission ID], (1 + length([Mission ID]) - 3), 3)
```

## انواع دادهٔ قابل قبول

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `substring` |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| String                                                                                                                         | ✅                    |
| Number                                                                                                                         | ❌                    |
| Timestamp                                                                                                                      | ❌                    |
| Boolean                                                                                                                        | ❌                    |
| JSON                                                                                                                           | ❌                    |

## محدودیت‌ها

تابع `substring` متن را فقط با شمردن یک تعداد ثابت کاراکتر استخراج می‌کند.  
اگر لازم است بر اساس الگوهای پیچیده‌تری متن را جدا کنید، از [`regexExtract`](../expressions-list.md#regexextract) استفاده کنید.

اگر فقط می‌خواهید فاصله‌های اضافهٔ اطراف متن را حذف کنید، می‌توانید از عبارت‌های [`trim`](../expressions-list.md#trim)، [`lTrim`](../expressions-list.md#ltrim) یا [`rTrim`](../expressions-list.md#rtrim) استفاده کنید.

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که شبیه عبارت `substring` در متابیس کار می‌کنند، همراه با نکاتی برای انتخاب گزینهٔ مناسب.

**[عبارت‌های متابیس](../expressions-list.md)**

- [`regexExtract`](#regexextract)

**ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### RegexExtract

اگر لازم است متن را بر اساس قواعد پیچیده‌تر یا الگوهای خاص (مثل «آخرین وقوع ۰۰» و …) استخراج کنید، از [regexExtract](./regexextract.md) کمک بگیرید.  
مثلاً می‌توانید شناسهٔ Agent را با الگویی که آخرین وقوع `"00"` و هرچه بعدش هست را می‌گیرد، بیرون بکشید:

```text
regexExtract([Mission ID], ".+(00.+)$")
```

که باید همان نتیجهٔ عبارت زیر را برگرداند:

```text
substring([Mission ID], 9, 3)
```

### SQL

وقتی سؤالی را با [notebook editor](https://www.metabase.com/glossary/notebook-editor) اجرا می‌کنید، متابیس تنظیمات گرافیکی شما را به کوئری تبدیل کرده و روی دیتابیس اجرا می‌کند.

اگر [دادهٔ نمونه](#getting-a-substring-from-the-left) را در PostgreSQL ذخیره کرده باشید:

```sql
SELECT
    mission_id,
    SUBSTRING(mission_id, 9, 3) AS agent
FROM
    this_message_will_self_destruct;
```

این کوئری معادل عبارت زیر در متابیس است:

```text
substring([Mission ID], 9, 3)
```

### Spreadsheets

اگر [دادهٔ نمونه](#getting-a-substring-from-the-left) را در Spreadsheet داشته باشید و "Mission ID" در ستون A باشد، فرمول زیر:

```text
=MID(A2, 9, 3)
```

همان نتیجه‌ای را می‌دهد که:

```text
substring([Mission ID], 9, 3)
```

### Python

اگر [دادهٔ نمونه](#getting-a-substring-from-the-left) در یک ستون DataFrame به نام `df` باشد:

```text
df['Agent'] = df['Mission ID'].str.slice(8, 11)
```

این کد همان کار زیر را انجام می‌دهد:

```text
substring([Mission ID], 9, 3)
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
