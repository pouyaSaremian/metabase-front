---
title: Isnull
---

# Isnull

تابع `isNull` بررسی می‌کند که آیا یک مقدار برابر `null` است یا نه؛ `null` در دیتابیس‌ها یک مقدار «جای‌خالی» ویژه است که زمانی استفاده می‌شود که دادهٔ واقعی موجود یا مشخص نیست.

## نحو (Syntax)

```text
isNull(text column)
```

می‌توانید از `isNull` در [فیلترهای سفارشی](../expressions.md#filter-expressions-and-conditionals)، یا به‌عنوان شرط در تجمیع‌های شرطی [`CountIf`](../expressions/countif.md) و [`SumIf`](../expressions/sumif.md) استفاده کنید.  
برای ساخت ستون سفارشی با `isNull` باید آن را با تابع دیگری که مقدار بولی (`true`/`false`) می‌پذیرد ترکیب کنید، مانند [`case`](./case.md).

## رفتار متابیس با null

در جدول‌های متابیس، مقادیر `null` به‌صورت سلول‌های خالی نمایش داده می‌شوند. علاوه بر این، در ستون‌های متنی، رشته‌های خالی و رشته‌هایی که فقط از کاراکتر فاصله (Whitespace) تشکیل شده‌اند نیز خالی دیده می‌شوند.

جدول زیر خروجی تابع `isNull` را روی حالت‌های مختلف نشان می‌دهد:

| نمایش در متابیس | مقدار در دیتابیس      | `isNull(value)` |
| --------------- | --------------------- | --------------- |
|                 | `null`                | `true`          |
|                 | `""` (رشتهٔ خالی)    | `false`\*       |
|                 | `" "` (فاصلهٔ خالی)  | `false`         |
| kitten          | `"kitten"`            | `false`         |

\* در دیتابیس‌های Oracle و Vertica، رشته‌های خالی به‌جای مقدار مجزا، عملاً به‌صورت `null` تفسیر می‌شوند.

## ساخت ستون بولی سفارشی

برای ساخت ستون سفارشی با `isNull` باید آن را با یک تابع دیگر ترکیب کنید.  
مثلاً اگر بخواهید ستونی بسازید که وقتی ستون `Discount` مقدار `null` دارد، مقدار `true`، و در غیر این صورت مقدار `false` داشته باشد، می‌توانید از [عبارت `case`](./case.md) استفاده کنید:

```text
case(isNull([Discount]), true, false)
```

## جایگزینی مقادیر null با مقدار دیگر

می‌توانید `isNull` را با [عبارت `case`](./case.md) ترکیب کنید تا اطلاعاتِ غایب را با متن توصیفی‌تری جایگزین کنید.

مثلاً اگر بخواهید ستونی بسازید که وقتی ستون اصلی `[Feedback]` مقدار `null` دارد، `"Unknown feedback"` را نمایش دهد و در غیر این صورت همان مقدار فیدبک را نشان دهد، می‌توانید از این عبارت استفاده کنید:

```text
case(isNull([Feedback]), "Unknown feedback.", [Feedback])
```

| Feedback               | `case(isNull([Feedback]), "Unknown feedback.", [Feedback])` |
| ---------------------- | ----------------------------------------------------------- |
| `null`                 | `"Unknown feedback."`                                       |
| `""`                   | `""`                                                        |
| `"I like your style."` | `"I like your style."`                                      |

## انواع دادهٔ قابل قبول

| [نوع داده][data-types] | سازگار با `isNull` |
| ----------------------- | ------------------ |
| String                  | ✅                 |
| Number                  | ✅                 |
| Timestamp               | ✅                 |
| Boolean                 | ✅                 |
| JSON                    | ✅                 |

## محدودیت‌ها

- در متابیس، برای استفادهٔ عملی از `isNull` باید آن را با عبارتی ترکیب کنید که آرگومان بولی (`true`/`false`) می‌پذیرد (مثل `case`).
- `isNull` در هر بار فراخوانی فقط یک مقدار را بررسی می‌کند. اگر می‌خواهید سلول‌های خالی را در چند ستون مدیریت کنید، بهتر است از [عبارت `coalesce`](./coalesce.md) کمک بگیرید.
- اگر به‌نظر می‌رسد `isNull` روی سلول‌های خالی شما اثری ندارد، احتمالاً با رشته‌های خالی طرف هستید. در این صورت از [عبارت `isEmpty`](./isempty.md) استفاده کنید.

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که می‌توانند به‌جای عبارت `isNull` متابیس استفاده شوند، همراه با نکاتی برای انتخاب گزینهٔ مناسب.

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

مثال‌های زیر همه از جدول نمونهٔ [جایگزینی مقدارهای null](#replacing-null-values-with-another-value) استفاده می‌کنند:

| Feedback               | `case(isNull([Feedback]), "Unknown feedback.", [Feedback])` |
| ---------------------- | ----------------------------------------------------------- |
| `null`                 | `"Unknown feedback."`                                       |
| `""`                   | `""`                                                        |
| `"I like your style."` | `"I like your style."`                                      |

### SQL

در اغلب موارد (به‌جز NoSQLها)، سؤال‌هایی که با [Query builder][notebook-editor-def] ساخته می‌کنید به SQL ترجمه شده و روی دیتابیس اجرا می‌شوند.

```sql
CASE WHEN Feedback IS NULL THEN 'Unknown feedback'
     ELSE Feedback END
```

از نظر منطقی معادل عبارت زیر در متابیس است:

```text
case(isNull([Feedback]), "Unknown feedback.", [Feedback])
```

### Spreadsheets

در Spreadsheetها، مقدار `#N/A` تقریباً نقش `null` در دیتابیس را بازی می‌کند (نشان‌دهندهٔ دادهٔ «نامشخص» یا «مفقود»).

اگر ستون نمونهٔ [Feedback](#replacing-null-values-with-another-value) در ستون A باشد، فرمول زیر:

```text
=IF(ISNA(A2), "Unknown feedback.", A2)
```

معادل این عبارت در متابیس است:

```text
case(isNull([Feedback]), "Unknown feedback.", [Feedback])
```

### Python

در کتابخانه‌های [NumPy][numpy] و [pandas][pandas] معمولاً به‌جای `null` از `NaN` یا `NA` استفاده می‌شود.

اگر ستون نمونهٔ [Feedback](#replacing-null-values-with-another-value) را در یک ستون DataFrame به نام `df["Feedback"]` داشته باشید:

```text
df["Custom Column"] = np.where(df["Feedback"].isnull(), "Unknown feedback.", df["Feedback"])
```

این کد معادل عبارت زیر در متابیس است:

```text
case(isNull([Feedback]), "Unknown feedback.", [Feedback])
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
