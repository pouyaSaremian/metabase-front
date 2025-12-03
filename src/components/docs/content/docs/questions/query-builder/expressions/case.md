---
title: Case
---

# Case

تابع `case` (و نام مستعار آن، `if`) مقدارها را با مجموعه‌ای از شرط‌ها مقایسه می‌کند و بر اساس **اولین شرطی که برقرار است** یک خروجی برمی‌گرداند. `if` و `case` در متابیس دقیقاً یک کار انجام می‌دهند.

می‌توانید به‌صورت اختیاری یک خروجی پیش‌فرض هم تعیین کنید تا اگر هیچ‌کدام از شرط‌ها برقرار نبود، آن مقدار برگردانده شود. اگر خروجی پیش‌فرض تنظیم نکنید، بعد از بررسی همهٔ شرط‌ها، `case` مقدار `null` برمی‌گرداند (که در متابیس به‌صورت سلول خالی نمایش داده می‌شود).

از `case` هر زمان که نیاز دارید:

- [مقادیر را در باکت‌های مختلف دسته‌بندی کنید](#باکت‌بندی-داده-برای-جدول‌های-فراوانی-یا-هیستوگرام‌ها-bucketing-data-for-frequency-tables-or-histograms)،
- [بر اساس چند ستون، برای هر ردیف برچسب بسازید](#برچسب‌گذاری-ردیف‌ها-بر-اساس-شرط‌های-چند-ستون-labeling-a-row-based-on-conditions-from-multiple-columns)،
- [بر اساس منطق شرطی، روی ردیف‌ها تجمیع انجام دهید](#تجمیع-داده-بر-اساس-شرایط-از-چند-ستون-aggregating-data-based-on-conditions-from-multiple-columns)،

استفاده کنید.

| Syntax                                                                |
| --------------------------------------------------------------------- |
| `case(condition1, output1, condition2, output2, ..., default_output)` |
| برمی‌گرداند: خروجیِ اولین شرطی که برقرار باشد.                        |

| Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- |
| `case(isempty("glass half full"), "empty glass", isNull("glass half full"), "missing glass", "glass half full")` |
| "glass half full"                                                                                                |

## باکت‌بندی داده برای جدول‌های فراوانی یا هیستوگرام‌ها (Bucketing data for frequency tables or histograms)

| Amount | Bucket |
| ------ | ------ |
| 6      | 0-9    |
| 18     | 10-19  |
| 31     | 30-39  |
| 57     | 50+    |

ستون **Bucket** با این عبارت سفارشی ساخته شده است:

```text
case([Amount] >= 0  AND [Amount] <=  9, "0-9",
     [Amount] >= 10 AND [Amount] <= 19, "10-19",
     [Amount] >= 20 AND [Amount] <= 29, "20-29",
     [Amount] >= 30 AND [Amount] <= 39, "30-39",
     [Amount] >= 40 AND [Amount] <= 49, "40-49", "50+")
```

## برچسب‌گذاری ردیف‌ها بر اساس شرط‌های چند ستون (Labeling a row based on conditions from multiple columns)

| Sighting ID | Has Wings | Has Face | Sighting Type |
| ----------- | --------- | -------- | ------------- |
| 1           | True      | True     | Bird          |
| 2           | True      | False    | Plane         |
| 3           | False     | True     | Superman      |
| 4           | False     | False    | Unknown       |

ستون **Sighting Type** با این عبارت ساخته شده است:

```text
case([Has Wings] = TRUE  AND [Has Face] = TRUE,  "Bird",
     [Has Wings] = TRUE  AND [Has Face] = FALSE, "Plane",
     [Has Wings] = FALSE AND [Has Face] = TRUE,  "Superman", "Unknown")
```

چنین ستون‌های برچسب‌دار می‌توانند برای این موارد استفاده شوند:

- اعمال [منطق کسب‌وکاری اختصاصی][business-logic] روی داده‌ها،
- [قدرت دادن به فیلترها][filter-learn] (مثلاً بر اساس نوع مشاهده)،
- [پیاده‌سازی Row/Column security](../../../permissions/row-and-column-security.md).

## تجمیع داده بر اساس شرایط از چند ستون (Aggregating data based on conditions from multiple columns)

می‌توانید `case` را با توابع Aggregation ترکیب کنید تا فقط روی ردیف‌هایی که شرایط خاصی دارند محاسبه انجام شود.

مثلاً اگر بخواهیم برای هر روز، تعداد سفارش‌های منحصربه‌فرد با وضعیت "Shipped" را بشماریم:

| Order ID | Order Date | Status    |
| -------- | ---------- | --------- |
| 1        | 2022-04-01 | Paid      |
| 1        | 2022-04-03 | Shipped   |
| 2        | 2022-05-12 | Paid      |
| 2        | 2022-05-12 | Cancelled |

1. یک عبارت سفارشی مثل `distinct(case([Status] = "Shipped", [Order ID]))` بسازید و نامش را مثلاً **Total Orders Shipped** بگذارید.
2. ستون **Order Date** را برای group by انتخاب کنید.
3. روی **Visualize** کلیک کنید تا نتایج را ببینید:

| Order Date | Total Orders Shipped |
| ---------- | -------------------- |
| 2022-04-01 | 1                    |
| 2022-05-01 | 0                    |

## انواع دادهٔ پذیرفته‌شده

| [Data type][data-types] | سازگار با `case` |
| ----------------------- | ----------------- |
| String                  | ✅                |
| Number                  | ✅                |
| Timestamp               | ✅                |
| Boolean                 | ✅                |
| JSON                    | ❌                |

## محدودیت‌ها

همهٔ خروجی‌های یک `case` باید **هم‌نوع** باشند (همه String، یا همه Number، و ...).

**این کار غلط است**:

```text
case(condition1, "string", condition2, TRUE, condition3, 1)
```

**این کار درست است**:

```text
case(condition1, "string", condition2, "TRUE", condition3, "1")
```

## توابع مرتبط

در این بخش توابعی را می‌بینید که می‌توانند نقش مشابه `case` را بازی کنند، بسته به این‌که دنبال چه نوع محاسبه‌ای هستید:

**[تعبیرهای متابیس][custom-expressions-list]**

- [Coalesce](./coalesce.md)
- [Countif](./sumif.md#countif)
- [Sumif](./sumif.md)

**ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### Coalesce

با استفاده از جدول [مثال Coalesce: تجمیع مقادیر](./coalesce.md#تجمیع-مقادیر-از-چند-ستون-consolidating-values-from-different-columns):

| Notes          | Comments          | `coalesce([Notes], [Comments], "No notes or comments.")` |
| -------------- | ----------------- | -------------------------------------------------------- |
| I have a note. | I have a comment. | I have a note.                                           |
|                | I have a comment. | I have a comment.                                        |
| I have a note. |                   | I have a note.                                           |
|                |                   | No notes or comments.                                    |

عبارت [`coalesce` در متابیس](./coalesce.md):

```text
coalesce([Notes], [Comments], "No notes or comments.")
```

معادل این `case` است:

```text
case(ISBLANK([Notes]) = FALSE AND ISBLANK([Comments]) = FALSE, [Notes],
     ISBLANK([Notes]) = TRUE  AND ISBLANK([Comments]) = FALSE, [Comments],
     ISBLANK([Notes]) = FALSE AND ISBLANK([Comments]) = TRUE,  [Notes],
     ISBLANK([Notes]) = TRUE  AND ISBLANK([Comments]) = TRUE,  "No notes or comments")
```

وقتی مشکلی با این ندارید که در حالت «هردو ستون مقدار دارند»، اولین مقدار را برگردانید، `coalesce` نوشتن ساده‌تری است. اگر در این حالت خروجی خاصی (مثل "I have a note _and_ a comment") می‌خواهید، از `case` استفاده کنید.

### Countif

با استفاده از جدول [مثال Aggregating data](#تجمیع-داده-بر-اساس-شرایط-از-چند-ستون-aggregating-data-based-on-conditions-from-multiple-columns):

| Order ID | Order Date | Status    |
| -------- | ---------- | --------- |
| 1        | 2022-04-01 | Paid      |
| 1        | 2022-04-03 | Shipped   |
| 2        | 2022-05-12 | Paid      |
| 2        | 2022-05-12 | Cancelled |

تابع [`countif` در متابیس][countif]:

```text
countif([Status] = "Shipped")
```

در حالت شمارش «همهٔ ردیف‌هایی که شرط را دارند»، معادل این عبارت با `case` است:

```text
count(case([Status] = "Shipped", [Row ID]))
```

اگر به‌جای «شمارش کل» نیاز به «شمارش منحصربه‌فرد» داشته باشید، دیگر این دو معادل نیستند و باید از ترکیب دیگری استفاده کنید.

### Sumif

با استفاده از نسخهٔ توسعه‌یافتهٔ همان جدول Aggregating data:

| Row ID | Order ID | Order Date | Status    | Amount |
| ------ | -------- | ---------- | --------- | ------ |
| 1      | 1        | 2022-04-01 | Paid      | \$20   |
| 2      | 1        | 2022-04-03 | Shipped   | \$20   |
| 3      | 2        | 2022-05-12 | Paid      | \$80   |
| 4      | 2        | 2022-05-12 | Cancelled | \$80   |

تابع [`sumif` در متابیس][sumif]:

```text
sumif([Amount], [Status] = "Shipped")
```

معادل این عبارت با `case` است:

```text
sum(case([Status] = "Shipped", [Amount]))
```

وقتی فقط یک ستون را برای **یک شرط** جمع می‌زنید، `sumif` و `case` معادل‌اند. اگر بخواهید برای چند شرط مختلف ستون‌های مختلفی را جمع بزنید، باید از `case` استفاده کنید.

### SQL

در اغلب موارد، سؤال‌هایی که با [notebook editor][notebook-editor-def] ساخته می‌شوند به SQL تبدیل و روی دیتابیس اجرا می‌شوند. عبارت‌های `case` در متابیس به دستورهای `CASE WHEN` در SQL ترجمه می‌شوند.

با استفاده از جدول مثال برچسب‌گذاری:

| Sighting ID | Has Wings | Has Face | Sighting Type |
| ----------- | --------- | -------- | ------------- |
| 1           | True      | True     | Bird          |
| 2           | True      | False    | Plane         |
| 3           | False     | False    | Superman      |
| 4           | False     | True     | Unknown       |

عبارت SQL زیر:

```sql
SELECT
    CASE WHEN "Has Wings" = TRUE  AND "Has Face" = TRUE  THEN 'Bird'
         WHEN "Has Wings" = TRUE  AND "Has Face" = FALSE THEN 'Plane'
         WHEN "Has Wings" = FALSE AND "Has Face" = TRUE  THEN 'Superman'
         ELSE 'Unknown' END AS sighting_type
FROM mystery_sightings;
```

معادل این عبارت در متابیس است:

```text
case([Has Wings] = TRUE  AND [Has Face] = TRUE,  "Bird",
     [Has Wings] = TRUE  AND [Has Face] = FALSE, "Plane",
     [Has Wings] = FALSE AND [Has Face] = TRUE,  "Superman", "Unknown")
```

مثلاً [ترفندهای SQL برای مرتب‌سازی نمودارها](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-tricks-ordering-charts) را می‌توانید با `case` در خودِ متابیس هم پیاده کنید.

### Spreadsheets

با استفاده از همان جدول برچسب‌گذاری:

| Sighting ID | Has Wings | Has Face | Sighting Type |
| ----------- | --------- | -------- | ------------- |
| 1           | True      | True     | Bird          |
| 2           | True      | False    | Plane         |
| 3           | False     | False    | Superman      |
| 4           | False     | True     | Unknown       |

فرمول زیر در Spreadsheet:

```text
=IF(AND(B2 = TRUE, C2 = TRUE), "Bird",
    IF(AND(B2 = TRUE, C2 = FALSE), "Plane",
       IF(AND(B2 = FALSE, C2 = TRUE), "Superman", "Unknown")
    )
  )
```

معادل همان عبارت `case` است:

```text
case([Has Wings] = TRUE  AND [Has Face] = TRUE,  "Bird",
     [Has Wings] = TRUE  AND [Has Face] = FALSE, "Plane",
     [Has Wings] = FALSE AND [Has Face] = TRUE,  "Superman", "Unknown")
```

### Python

برای داده‌هایی که در یک DataFrame پانداس ذخیره شده‌اند، چند الگوی رایج برای منطق شرطی وجود دارد که معادل `case` هستند.

با استفاده از همان جدول برچسب‌گذاری (و DataFrame به نام `df`):

| Sighting ID | Has Wings | Has Face | Sighting Type |
| ----------- | --------- | -------- | ------------- |
| 1           | True      | True     | Bird          |
| 2           | True      | False    | Plane         |
| 3           | False     | False    | Superman      |
| 4           | False     | True     | Unknown       |

**استفاده از `numpy.select`**[numpy]

```python
conditions = [
    (df["has_wings"] == True) & (df["has_face"] == True),
    (df["has_wings"] == True) & (df["has_face"] == False),
    (df["has_wings"] == False) & (df["has_face"] == True),
]

outputs = ["Bird", "Plane", "Superman"]

df["Sighting Type"] = np.select(conditions, outputs, default="Unknown")
```

**تابع کمکی با `pandas.apply`**[pandas]

```python
def identify(row):
    if (row["has_wings"] == True) and (row["has_face"] == True):
        return "Bird"
    elif (row["has_wings"] == True) and (row["has_face"] == False):
        return "Plane"
    elif (row["has_wings"] == False) and (row["has_face"] == True):
        return "Superman"
    else:
        return "Unknown"

df["Sighting Type"] = df.apply(identify, axis=1)
```

هر دو الگوی بالا معادل همین عبارت `case` هستند:

```text
case([Has Wings] = TRUE  AND [Has Face] = TRUE,  "Bird",
     [Has Wings] = TRUE  AND [Has Face] = FALSE, "Plane",
     [Has Wings] = FALSE AND [Has Face] = TRUE,  "Superman", "Unknown")
```

## مطالعهٔ بیشتر

- [مستندات تعبیرهای سفارشی][custom-expressions-doc]
- [لیست کامل تعبیرهای سفارشی][custom-expressions-list]
- [آموزش تعبیرهای سفارشی][custom-expressions-learn]

[aggregate-functions]: ../expressions-list.md#aggregations  
[business-logic]: https://www.metabase.com/learn/grow-your-data-skills/analytics/avoiding-data-jargon#create-specific-language-and-shared-definitions  
[countif]: ../expressions-list.md#countif  
[custom-expressions-doc]: ../expressions.md  
[custom-expressions-list]: ../expressions-list.md  
[custom-expressions-learn]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions  
[data-types]: https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types  
[filter-learn]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/searching-tables  
[notebook-editor-def]: https://www.metabase.com/glossary/notebook-editor  
[numpy]: https://numpy.org/doc/  
[pandas]: https://pandas.pydata.org/pandas-docs/stable/  
[sql-reference-guide]: https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#common-sql-reference-guides  
[sumif]: ./sumif.md


