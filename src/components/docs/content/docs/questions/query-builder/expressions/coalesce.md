---
title: Coalesce
---

# Coalesce

تابع `coalesce` مقدارها را به‌ترتیب بررسی می‌کند و **اولین مقدار غیرتهی (non-null)** را برمی‌گرداند.

این تابع زمانی مفید است که می‌خواهید:

- [مقادیر خالی یا Null را پر کنید](#پر-کردن-مقادیر-خالی-یا-null-filling-in-empty-or-null-values)،
- [مقادیر چند ستون را در یک ستون تجمیع کنید](#تجمیع-مقادیر-از-چند-ستون-consolidating-values-from-different-columns)،
- [محاسباتی روی چند ستون انجام دهید حتی وقتی بعضی ستون‌ها null هستند](#محاسبه-روی-ستون‌های-مختلف-creating-calculations-across-different-columns).

| Syntax                                                  | Example                                         |
| ------------------------------------------------------- | ----------------------------------------------- |
| `coalesce(value1, value2, …)`                           | `coalesce("null", "null", "bananas", "null" …)` |
| برمی‌گرداند: اولین مقدار غیر-null از بین یک لیست مقادیر | “bananas”                                       |

## پر کردن مقادیر خالی یا Null (Filling in empty or null values)

| left_table_col | right_table_col | `coalesce([right_table_col], 0)` |
| -------------- | --------------- | -------------------------------- |
| 1              | 1               | 1                                |
| 2              | `null`          | 0                                |
| 3              | `null`          | 0                                |
| 4              | 4               | 4                                |

ممکن است بخواهید مقادیر null را پر کنید اگر:

- داده‌ها تنک (Sparse) هستند،
- یا `null`ها در نتیجهٔ یک left join ایجاد شده‌اند (مثل مثال بالا).

برای مثالِ کامل‌تر، بخش [Filling in data for missing report dates][missing-dates] را ببینید.

## تجمیع مقادیر از چند ستون (Consolidating values from different columns)

| Notes          | Comments          | `coalesce([Notes], [Comments], "No notes or comments.")` |
| -------------- | ----------------- | -------------------------------------------------------- |
| I have a note. | I have a comment. | I have a note.                                           |
|                | I have a comment. | I have a comment.                                        |
| I have a note. |                   | I have a note.                                           |
|                |                   | No notes or comments.                                    |

## محاسبه روی ستون‌های مختلف (Creating calculations across different columns)

| Subtotal | Discount | `coalesce([Subtotal], 0) - coalesce([Discount], 0)` |
| -------- | -------- | --------------------------------------------------- |
| 10.00    | 0.15     | 9.85                                                |
| 21.00    |          | 21.00                                               |
| 16.00    | 1.60     | 14.40                                               |
| 4.00     |          | 4.00                                                |

در متابیس، اگر در یک محاسبه یکی از ستون‌ها `null` باشد، نتیجه هم `null` می‌شود. دلیلش این است که `null` نمایندهٔ «نامشخص» یا «ناموجود» است، نه لزوماً صفر؛ یعنی ۱ + "unknown" = "unknown".

اگر می‌خواهید «نامشخص» را به‌معنای صفر (یا هر مقدار دیگری که در دامنهٔ شما معادل «هیچ» است) در نظر بگیرید، بهتر است ستون‌هایی را که در محاسبات استفاده می‌کنید با `coalesce` بپیچید.

## انواع دادهٔ پذیرفته‌شده

| [Data type][data-types] | سازگار با `coalesce` |
| ----------------------- | --------------------- |
| String                  | ✅                    |
| Number                  | ✅                    |
| Timestamp               | ✅                    |
| Boolean                 | ✅                    |
| JSON                    | ❌                    |

## محدودیت‌ها

در یک فراخوانی `coalesce` بهتر است همهٔ مقادیر از یک نوع داده باشند. اگر می‌خواهید بین نوع‌های مختلف `coalesce` انجام دهید:

- در SQL از `CAST` استفاده کنید.
- یا نوع داده را از صفحهٔ Table Metadata تغییر دهید: [تغییر نوع داده][cast-data-type].

اگر می‌خواهید روی JSON یا JSONB از `coalesce` استفاده کنید، ابتدا باید JSON را به سطح ستون‌های ساده «باز» کنید. برای این کار باید از توابع JSON مربوط به dialect دیتابیس خودتان استفاده کنید. چند [راهنمای مرجع SQL][sql-reference-guide] در انتهای صفحه آمده است.

## توابع مرتبط

این بخش توابع و الگوهایی را نشان می‌دهد که می‌توانید به‌جای `coalesce` (یا در کنار آن) استفاده کنید:

**تعبیرهای متابیس**

- [case](#case)

**ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

در مثال‌ها از همان دادهٔ نمونهٔ [بخش تجمیع مقادیر](#تجمیع-مقادیر-از-چند-ستون-consolidating-values-from-different-columns) استفاده می‌کنیم:

| Notes          | Comments          | `coalesce([Notes], [Comments], "No notes or comments.")` |
| -------------- | ----------------- | -------------------------------------------------------- |
| I have a note. | I have a comment. | I have a note.                                           |
|                | I have a comment. | I have a comment.                                        |
| I have a note. |                   | I have a note.                                           |
|                |                   | No notes or comments.                                    |

### Case

تابع [`case` در متابیس](./case.md):

```text
case(ISBLANK([Notes]) = FALSE AND ISBLANK([Comments]) = FALSE, [Notes],
     ISBLANK([Notes]) = TRUE  AND ISBLANK([Comments]) = FALSE, [Comments],
     ISBLANK([Notes]) = FALSE AND ISBLANK([Comments]) = TRUE,  [Notes],
     ISBLANK([Notes]) = TRUE  AND ISBLANK([Comments]) = TRUE,  "No notes or comments")
```

معادل این عبارت با `coalesce` است:

```text
coalesce([Notes], [Comments], "No notes or comments.")
```

نوشتن `coalesce` معمولاً خیلی ساده‌تر است، به‌شرطی که در حالتی که هر دو ستون مقدار داشته باشند، **اولین مقدار** برای شما کافی باشد. اگر می‌خواهید در این حالت خروجیِ خاصی داشته باشید (مثلاً «I have a note _and_ a comment»)، [بهتر است از `case` استفاده کنید][case-to-coalesce].

### SQL

در اغلب موارد، سؤال‌هایی که از [notebook editor][notebook-editor-def] ساخته می‌شوند به SQL تبدیل و روی دیتابیس اجرا می‌شوند.

تابع `coalesce` در SQL:

```sql
SELECT
    COALESCE(notes, comments, 'No notes or comments.')
FROM
    sample_table;
```

معادل این عبارت در متابیس است:

```text
coalesce([Notes], [Comments], "No notes or comments.")
```

### Spreadsheets

اگر جدول Notes و Comments در یک Spreadsheet باشد و ستون "Notes" در ستون A و "Comments" در ستون B باشد، می‌توانید از فرمول زیر استفاده کنید:

```text
=IF(ISBLANK($A2), $B2, IF(ISBLANK($B2), $A2, "No notes or comments."))
```

که معادل این عبارت در متابیس است:

```text
coalesce([Notes], [Comments], "No notes or comments.")
```

در Spreadsheetها ممکن است برای «coalesce کردن» مقادیر روی سه ستون یا بیشتر از ترکیب INDEX و MATCH در فرمول‌های Array استفاده کنید.

### Python

اگر جدول Notes و Comments در یک DataFrame پانداس به نام `df` ذخیره شده باشد، ترکیب توابع `combine_first()` و `fillna()`:

```python
df["custom_column"] = df["notes"].combine_first(df["comments"])\
                                 .fillna("No notes or comments.")
```

معادل این عبارت در متابیس است:

```text
coalesce([Notes], [Comments], "No notes or comments.")
```

## مطالعهٔ بیشتر

- [مستندات تعبیرهای سفارشی][custom-expressions-doc]
- [آموزش تعبیرهای سفارشی][custom-expressions-learn]

[case-to-coalesce]: ./case.md#coalesce  
[cast-data-type]: ../../../data-modeling/metadata-editing.md#cast-to-a-specific-data-type  
[custom-expressions-doc]: ../expressions.md  
[custom-expressions-learn]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions  
[data-types]: https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types  
[missing-dates]: https://www.metabase.com/learn/sql/debugging-sql/sql-logic-missing-data#how-to-fill-in-data-for-missing-report-dates  
[notebook-editor-def]: https://www.metabase.com/glossary/notebook-editor  
[numpy]: https://numpy.org/doc/  
[pandas]: https://pandas.pydata.org/pandas-docs/stable/  
[sql-reference-guide]: https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#common-sql-reference-guides


