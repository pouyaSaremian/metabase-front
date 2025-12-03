---
title: فیلترهای فیلد (Field filters)
summary: فیلترهای فیلد به شما اجازه می‌دهند با اتصال متغیرها به فیلدهای پایگاه‌داده، ویجت‌های فیلتر «هوشمند» برای سؤال‌های SQL بسازید. تا حد ممکن به‌جای متغیرهای ساده از Field filter استفاده کنید.
---

<!-- markdownlint-disable-next-line MD025 -->
# فیلترهای فیلد (Field filters)

فیلترهای فیلد متغیرهای ویژه‌ای هستند که می‌توانید آن‌ها را مستقیماً به فیلدهای پایگاه‌داده متصل کنید.

## چه زمانی از Field filter استفاده کنیم و چه زمانی از متغیر ساده

به‌طور کلی، استفاده از Field filter را ترجیح دهید. این متغیرها ویجت‌های فیلتر «هوشمند» با منوهای کشویی و Date pickerهای پویا ارائه می‌کنند.

اگر در کوئری‌تان فیلدی از پایگاه‌داده که بتوان فیلتر را به آن وصل کرد وجود نداشته باشد، باید از یک [متغیر ساده](./basic-sql-parameters.md) استفاده کنید. مثلاً اگر می‌خواهید روی یک ستون سفارشی که خودتان ساخته‌اید فیلتر بگذارید، ناچارید از متغیر ساده استفاده کنید.

## متغیرهای Field filter

برای اضافه‌کردن یک Field filter:

1. [یک متغیر به عبارت `WHERE` اضافه کنید](#field-filter-syntax).
2. [Field filter را به یک فیلد پایگاه‌داده متصل کنید](#connect-the-field-filter-to-a-database-field).
3. [ویجت فیلترتان را پیکربندی کنید](./sql-parameters.md#configure-your-filter-widget).

### سینتکس Field filter

فرض کنید می‌خواهید یک متغیر Field filter بسازید که جدول `People` را بر اساس فیلد `state` فیلتر کند.

سینتکس Field filter به این شکل است:

```sql
{% raw %}
SELECT
  *
FROM
  PEOPLE
WHERE
  {{state}}
{% endraw %}
```

دقت کنید که در این‌جا خبری از نام ستون و عملگر نیست (یعنی `{% raw %}WHERE state = {{state}}{% endraw %}` نیست، بلکه فقط `{% raw %}WHERE {{state}}{% endraw %}` است). دلیل این ساختار این است که متابیس بتواند در موارد خاص خودش کد SQL را بسازد؛ مثلاً وقتی کاربر _چند_ مقدار را در ویجت فیلتر انتخاب می‌کند، یا یک _بازهٔ_ زمانی را انتخاب می‌کند، متابیس باید بتواند کد SQL مناسب را درون متغیر تزریق کند.

در کوئری Native مربوط به MongoDB، باید Field filter را داخل یک عبارت `$match` قرار دهید:

```text
{% raw %}[ {$match: {{date_var}} } ]{% endraw %}
```

### اتصال Field filter به یک فیلد پایگاه‌داده

برای این‌که یک متغیر Field filter کار کند، باید آن متغیر را به یک فیلد پایگاه‌داده متصل کنید:

1. به سایدبار **Variables and parameters** بروید.
2. زیر **Variable type**، نوع "Field filter" را انتخاب کنید.
3. مشخص کنید این متغیر به کدام **Field** متصل شود (در مثال، فیلد `Category` از جدول `products`).

Field filter را فقط می‌توان به فیلد پایگاه‌داده متصل کرد. اگر امکان استفاده از Field filter را ندارید، می‌توانید به‌عنوان جایگزین از یک [متغیر ساده](./basic-sql-parameters.md) استفاده کنید.

## مشخص کردن Alias جدول و فیلد

اگر فیلتر را به فیلدی از یک جدول Aliased متصل کنید، باید Alias را هم به متابیس اطلاع دهید، وگرنه فیلتر کار نخواهد کرد.

مثلاً فرض کنید می‌خواهید یک Field filter را به فیلد `category` از جدول `products` متصل کنید، اما در کوئری‌تان برای جدول `products` از Alias `p` استفاده کرده‌اید:

```sql
{% raw %}
SELECT
  *
FROM
  products AS p
WHERE
  {{category_filter}}
{% endraw %}
```

در این حالت، علاوه‌بر این‌که فیلتر را به فیلد `category` از جدول `products` متصل می‌کنید، باید در ورودی **Table and field alias** هم مقدار `p.category` را وارد کنید تا متابیس از Alias باخبر شود.

تنظیم **Table and field alias** فقط زمانی لازم است که در کوئری‌تان برای جدولی که فیلد هدف را در خود دارد Alias استفاده کرده باشید.

مثال دیگر، این‌بار با یک CTE:

```sql
{% raw %}
WITH
  expensive_products AS (
    SELECT
      *
    FROM
      products
    WHERE
      price > 50
  )
SELECT
  *
FROM
  expensive_products
WHERE
  {{category_filter}}
{% endraw %}
```

در این‌جا هم فیلتر را دوباره به فیلد `category` در جدول `products` متصل می‌کنیم، اما چون از CTEای با نام `expensive_products` استفاده کرده‌ایم، باید در ورودی **Table and field alias** مقدار `expensive_products.category` را وارد کنیم تا Mapping درست کار کند.

## Field filter باید به فیلدهای موجود در کوئری متصل باشد

کوئری اصلی شما باید از همهٔ جدول‌هایی که متغیر Field filter به آن‌ها اشاره می‌کند آگاه باشد، وگرنه به خطای سینتکس SQL برمی‌خورید. مثلاً فرض کنید کوئری اصلی شما چنین Field filterای دارد:

```sql
{% raw %}
SELECT
  *
FROM
  ORDERS
WHERE
  {{ product_category }}
{% endraw %}
```

اگر متغیر `{% raw %}{{ product_category }}{% endraw %}` به سؤالی دیگر اشاره کند که از جدول `Products` استفاده می‌کند، برای این‌که Field filter کار کند باید در کوئری اصلی Join به `Products` را اضافه کنید:

```sql
{% raw %}
SELECT
  *
FROM
  ORDERS
  JOIN PRODUCTS ON ORDERS.product_id = PRODUCTS.id
WHERE
  {{ product_category }}
{% endraw %}
```

اگر نمی‌توانید از Field filter استفاده کنید، می‌توانید به‌عنوان جایگزین از یک [متغیر ساده](./basic-sql-parameters.md) استفاده کنید.

## Field filter در BigQuery و Oracle

مطمئن شوید Dialect SQL شما با پایگاه‌داده‌ای که انتخاب کرده‌اید مطابقت دارد. یکی از خطاهای رایج به نحوهٔ Quote کردن جدول‌ها و Schema برمی‌گردد:

| Database | نکتهٔ Dialect                                  | Example                    |
| -------- | ---------------------------------------------- | -------------------------- |
| BigQuery | Schema و جدول‌ها باید با Backtick نوشته شوند. | `` FROM `dataset.table` `` |
| Oracle   | Schema و جدول‌ها باید در کوتیشن دوتایی باشند. | `FROM "schema.table"`      |

برای اطلاعات بیشتر، بخش [Troubleshooting SQL error messages](../../troubleshooting-guide/error-message.md#sql-editor) را ببینید.

## اختیاری کردن Field filter

بخش [متغیرهای اختیاری](./optional-variables.md) را ببینید.
