---
title: Concat
---

# Concat

تابع `concat` مقدارهای دو یا چند ستون یا مقدار دلخواه را به هم می‌چسباند و یک رشته (String) برمی‌گرداند.

## نحوهٔ نوشتن (Syntax)

```text
concat(value1, value2, ...)
```

`value1`، `value2` و ... می‌توانند ستون یا مقدار ثابت باشند. متابیس قبل از الحاق مقادیر، ستون‌های غیرمتنی (مثل عدد یا تاریخ) را به رشته تبدیل می‌کند.

### مثال

| Expression                               | Result                   |
| ---------------------------------------- | ------------------------ |
| `concat("Vienna", "Austria")`            | `"ViennaAustria"`        |
| `concat("Vienna", " is in " ,"Austria")` | `"Vienna is in Austria"` |
| `concat([City], " is in " ,[Country])`   | `"Vienna is in Austria"` |

### استفاده از مقدارهای خام برای ستون‌های غیررشته‌ای

وقتی در `concat` از ستون‌های غیررشته‌ای استفاده می‌کنید، متابیس هر نوع [فرمت‌گذاری‌ای](../../../data-modeling/formatting.md) را که روی آن ستون‌ها اعمال شده نادیده می‌گیرد و از مقدار خام استفاده می‌کند.

مثلاً اگر عددی را طوری فرمت کرده باشید که فقط دو رقم اعشار نمایش داده شود، ولی مقدار خام آن رقم‌های اعشار بیشتری داشته باشد، خروجی `concat` همان تعداد اعشارِ واقعی را نشان می‌دهد.

| Formatted display | Value                     | `concat("Result:", " ", [Value])` |
| ----------------- | ------------------------- | --------------------------------- |
| `Kitten`          | `Kitten`                  | `Result: Kitten`                  |
| `17`              | `17`                      | `Result: 17`                      |
| `31.25`           | `31.24823945`             | `Result: 31.24823945`             |
| `42%`             | `0.42`                    | `Result: 0.42`                    |
| `January 1, 2024` | `2025-02-11 21:40:27.892` | `Result: 2025-02-11 21:40:27.892` |

## انواع دادهٔ پذیرفته‌شده

| [Data type](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `concat` |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| String                                                                                                                         | ✅                  |
| Number                                                                                                                         | ✅                  |
| Timestamp                                                                                                                      | ✅                  |
| Boolean                                                                                                                        | ✅                  |
| JSON                                                                                                                           | ✅                  |

انواعِ غیررشته‌ای قبل از الحاق به رشته تبدیل می‌شوند. مستقل از نوع دادهٔ ورودی، خروجی `concat` همیشه یک رشته است.

## توابع مرتبط

در این بخش توابع و الگوهایی را می‌بینید که معادل `concat` در ابزارهای دیگر هستند:

- [SQL](#sql)
- [Spreadsheet](#spreadsheets)
- [Python](#python)

### SQL

در اغلب موارد (مگر این‌که از دیتابیس NoSQL استفاده کنید)، سؤال‌هایی که با [notebook editor](https://www.metabase.com/glossary/notebook-editor) ساخته می‌شوند به SQL ترجمه شده و روی دیتابیس اجرا می‌شوند.

اگر دادهٔ نمونه در یک دیتابیس رابطه‌ای ذخیره شده باشد:

```sql
SELECT
    CONCAT(City, ', ', Country) AS "Location"
FROM
    richard_linklater_films;
```

معادل این عبارت در متابیس است:

```text
concat([City], ", ", [Country])
```

### Spreadsheets

اگر دادهٔ نمونه در یک Spreadsheet باشد که ستون "City" در ستون A و ستون "Country" در ستون B باشد، می‌توانید ستون سومی به نام "Location" بسازید:

```text
=CONCATENATE(A2, ", ", B2)
```

که معادل عبارت زیر در متابیس است:

```text
concat([City], ", ", [Country])
```

### Python

اگر دادهٔ نمونه در یک DataFrame به نام `df` ذخیره شده باشد:

```python
df["Location"] = df["City"] + ", " + df["Country"]
```

معادل عبارت زیر در متابیس است:

```text
concat([City], ", ", [Country])
```

## مطالعهٔ بیشتر

- [مستندات تعبیرهای سفارشی](../expressions.md)
- [آموزش تعبیرهای سفارشی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)


