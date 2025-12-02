---
title: Isempty
---

# Isempty

تابع `isEmpty` بررسی می‌کند که مقدار یک **ستون متنی** رشتهٔ خالی (`""`) یا `null` است یا نه. اگر `isEmpty` را روی ستونی غیرمتنی صدا بزنید، خطا رخ می‌دهد.

## نحو (Syntax)

```text
isEmpty(text column)
```

می‌توانید از `isEmpty` در [فیلترهای سفارشی](../expressions.md#filter-expressions-and-conditionals)، یا به‌عنوان شرط در تجمیع‌های شرطی [`CountIf`](../expressions/countif.md) و [`SumIf`](../expressions/sumif.md) استفاده کنید.  
برای ساخت ستون سفارشی با `isEmpty` باید آن را با تابع دیگری که مقدار بولی (`true`/`false`) می‌پذیرد ترکیب کنید، مانند [`case`](./case.md).

## رفتار متابیس با رشته‌های خالی و مقدارهای null

در متابیس، ستون‌هایی با [نوع دادهٔ متنی][data-types] برای این موارد سلول خالی نمایش می‌دهند:

- رشته‌های خالی،
- رشته‌هایی شامل فقط کاراکترهای فاصله (Whitespace)، و
- مقدارهای `null` (اگر ستون در دیتابیس nullable باشد).

جدول زیر خروجی تابع `isEmpty` را برای حالت‌های مختلف نشان می‌دهد:

| نمایش در متابیس | مقدار در دیتابیس      | `isEmpty(value)` |
| --------------- | --------------------- | ---------------- |
|                 | `null`                | `true`           |
|                 | `""` (رشتهٔ خالی)    | `true`           |
|                 | `" "` (فاصلهٔ خالی)  | `false`          |
| kitten          | `"kitten"`            | `false`          |

## ساخت ستون بولی سفارشی

برای ساخت ستون سفارشی با `isEmpty` باید آن را با یک تابع دیگر ترکیب کنید.  
مثلاً اگر بخواهید ستونی بسازید که وقتی ستون `Feedback` خالی یا null است مقدار `true` و در غیر این صورت مقدار `false` داشته باشد، می‌توانید از [عبارت `case`](./case.md) استفاده کنید:

```text
case(isEmpty([Feedback]), true, false)
```

## جایگزینی رشته‌های خالی با مقدار دیگر

می‌توانید `isEmpty` را با [عبارت `case`](./case.md) ترکیب کنید تا رشته‌های خالی را با متن خواناتری جایگزین کنید.

مثلاً می‌توانید ستونی بسازید که وقتی ستون اصلی `[Feedback]` خالی یا null است، مقدار `"No feedback"` را برگرداند و وقتی مقدار غیرخالی دارد، همان مقدار اصلی را نمایش دهد:

```text
case(isEmpty([Feedback]), "No feedback.", [Feedback])
```

| Feedback               | `case(isEmpty([Feedback]), "No feedback.", [Feedback])` |
| ---------------------- | ------------------------------------------------------- |
| `""`                   | `"No feedback."`                                        |
| `null`                 | `"No feedback."`                                        |
| `"I like your style."` | `"I like your style."`                                  |

## انواع دادهٔ قابل قبول

| [نوع داده][data-types] | سازگار با `isEmpty` |
| ----------------------- | ------------------- |
| String                  | ✅                  |
| Number                  | ❌                  |
| Timestamp               | ❌                  |
| Boolean                 | ❌                  |
| JSON                    | ❌                  |

## محدودیت‌ها

- برای ساخت ستون سفارشی باید `isEmpty` را با تابع/عبارتی ترکیب کنید که آرگومان بولی (`true` یا `false`) می‌پذیرد (مثل `case`).
- `isEmpty` در هر فراخوانی فقط یک مقدار را می‌پذیرد. اگر لازم است چند ستون را از نظر خالی‌بودن بررسی کنید، باید چندین عبارت `isEmpty` را همراه با [عبارت `case`](./case.md) استفاده کنید.

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که می‌توانند به‌جای عبارت `isEmpty` متابیس استفاده شوند، همراه با نکاتی برای انتخاب گزینهٔ مناسب در سناریوی شما.

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

مثال‌های زیر همگی از همان جدول نمونهٔ [جایگزینی رشته‌های خالی](#replacing-empty-strings-with-another-value) استفاده می‌کنند:

| Feedback               | `case(isEmpty([Feedback]), "No feedback.", [Feedback])` |
| ---------------------- | ------------------------------------------------------- |
| `""`                   | `"No feedback."`                                        |
| `null`                 | `"No feedback."`                                        |
| `"I like your style."` | `"I like your style."`                                  |

### SQL

در اغلب موارد (مگر در پایگاه‌داده‌های NoSQL)، سؤال‌هایی که با [Query builder][notebook-editor-def] ساخته می‌شوند به SQL ترجمه شده و روی دیتابیس اجرا می‌شوند.

```sql
CASE WHEN (Feedback = "" OR Feedback IS NULL) THEN "No feedback"
     ELSE Feedback END
```

از نظر منطقی معادل عبارت زیر در متابیس است:

```text
case(isEmpty([Feedback]), "No feedback.", [Feedback])
```

### Spreadsheets

اگر ستون نمونهٔ [Feedback](#replacing-empty-strings-with-another-value) در یک Spreadsheet باشد و مقدارها در ستون A قرار داشته باشند، فرمول زیر:

```text
=IF(A2 = "", "Unknown feedback.", A2)
```

معادل این عبارت در متابیس است:

```text
case(isEmpty([Feedback]), "No feedback.", [Feedback])
```

### Python

اگر ستون نمونهٔ [Feedback](#replacing-empty-strings-with-another-value) در یک DataFrame به نام `df["Feedback"]` باشد:

```python
df["Custom Column"] = np.where((df["Feedback"] == "") | (df["Feedback"].isnull()), "No feedback.", df["Feedback"])
```

معادل عبارت زیر در متابیس است:

```text
case(isEmpty([Feedback]), "No feedback.", [Feedback])
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions][custom-expressions-doc]
- [آموزش Custom expressions][custom-expressions-learn]

[custom-expressions-doc]: ../expressions.md
[custom-expressions-learn]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions
[data-types]: https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types
[notebook-editor-def]: https://www.metabase.com/glossary/query-builder
[numpy]: https://numpy.org/doc/
[pandas]: https://pandas.pydata.org/pandas-docs/stable/
