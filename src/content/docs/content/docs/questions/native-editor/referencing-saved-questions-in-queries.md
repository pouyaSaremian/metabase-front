---
title: ارجاع به مدل‌ها و سؤال‌های ذخیره‌شده
redirect_from:
  - /docs/latest/users-guide/referencing-saved-questions-in-queries
---

<!-- markdownlint-disable-next-line MD025 -->
# ارجاع به مدل‌ها و سؤال‌های ذخیره‌شده

در پایگاه‌های داده SQL می‌توانید یک [مدل][model] یا یک سؤال موجود را به‌عنوان مبنای کوئری جدید استفاده کنید، یا آن را به‌صورت یک Common Table Expression یا [CTE][cte] به کار ببرید.

مثلاً فرض کنید داده‌های شما در چندین جدول پخش شده، اما مردم فقط به یک زیرمجموعه از آن داده‌ها علاقه‌مندند. می‌توانید یک‌بار یک کوئری پیچیده بنویسید تا آن نتایج را برگرداند و آن سؤال را به‌عنوان یک مدل ذخیره کنید؛ سپس دیگران می‌توانند در کوئری‌های خود مثل یک جدول معمولی به آن مدل ارجاع بدهند.

## جست‌وجوی مدل‌ها و سؤال‌ها هنگام تایپ

اول یک سؤال یا مدل بسازید و ذخیره کنید که مجموعهٔ نتایجی را که می‌خواهید برای دیگران قابل کوئری باشد برگرداند.

برای ارجاع به آن سؤال یا مدل در یک کوئری SQL، از Typeahead داخل یک متغیر که با `#` شروع می‌شود استفاده کنید.

رشتهٔ `{% raw %}{{#your search term }}{% endraw %}` را تایپ کنید تا متابیس لیستی از مدل‌ها و سؤال‌های مرتبط با عبارت جست‌وجوی شما نشان دهد.

![Typeahead search dropdown for referencing questions and models in SQL queries](../images/search-dropdown.png)

همچنین می‌توانید شناسهٔ سؤال یا مدل را از طریق خود رابط متابیس پیدا کنید: به مدل یا سؤالی که می‌خواهید در کوئری به آن ارجاع دهید بروید. ID در URL نوار آدرس مرورگر شما است؛ عددی است که بعد از `/model/` یا `/question/` می‌آید. مثلاً در آدرس `https://metabase.example.com/model/12345-example-name`، شناسهٔ مدل `12345` است.

فقط وجود `#` و ID کافی است؛ متابیس نام مدل یا سؤال را صرفاً برای خواناتر شدن کوئری نمایش می‌دهد.

## استفاده از مدل، جدول یا سؤال ذخیره‌شده به‌عنوان CTE

همین سینتکس را می‌توان در [Common Table Expression (CTE)](https://www.metabase.com/learn/sql/working-with-sql/sql-cte) نیز استفاده کرد (در پایگاه‌های داده SQL که CTE را پشتیبانی می‌کنند):

```sql
WITH gizmo_orders AS {% raw %}{{#5-gizmo-orders-in-2019}}{% endraw %}
SELECT count(*)
FROM gizmo_orders
```

وقتی این کوئری اجرا شود، عبارت `{% raw %}{{#5-gizmo-orders-in-2019}}{% endraw %}` با کوئری SQL سؤال مرجع جایگزین می‌شود و آن کوئری داخل پرانتز قرار می‌گیرد. در پشت صحنه چیزی شبیه این خواهید داشت:

```sql
WITH
  gizmo_orders AS (
    SELECT
      *
    FROM
      orders AS o
      INNER JOIN products AS p ON o.product_id = p.id
    WHERE
      p.category = 'Gizmo'
      AND o.created_at BETWEEN '2019-01-01' AND '2019-12-31'
  )
SELECT
  count(*)
FROM
  gizmo_orders
```

## محدودیت‌ها و ملاحظات

- فقط زمانی می‌توانید در یک کوئری به مدل یا سؤال ذخیره‌شده ارجاع بدهید که با پایگاه‌داده SQLای مثل PostgreSQL، MySQL، Snowflake یا SQL Server کار می‌کنید.
- مدل یا سؤال ذخیره‌شده باید روی همان پایگاه‌داده‌ای ساخته شده باشد که در حال حاضر در ویرایشگر Native انتخاب کرده‌اید.
- نمی‌توانید در Subqueryها به متغیرها ارجاع دهید؛ فقط به _نتایج_ مدل یا سؤال ذخیره‌شده دسترسی دارید، نه به خود کوئری آن‌ها. مثلاً اگر سؤالی ذخیره‌شده داشته باشید که از یک [Field filter](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/field-filters) استفاده می‌کند، نمی‌توانید به آن متغیر در کوئری ارجاع‌دهنده دسترسی پیدا کنید. اگر لازم است نحوهٔ فیلتر شدن نتایج در آن سؤال را تغییر دهید، باید خود آن سؤال را به‌روزرسانی (یا Duplicate) کرده و فیلتر را روی همان سؤال اعمال کنید.

## مطالعهٔ بیشتر

- [مدل‌ها](../../data-modeling/models.md)
- [Snippetها](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-snippets)
- [Snippets در مقابل سؤال‌های ذخیره‌شده و Viewها](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/organizing-sql)
- [راهنمای عیب‌یابی SQL](../../troubleshooting-guide/sql.md)

[cte]: https://www.metabase.com/learn/sql/working-with-sql/sql-cte
[model]: ../../data-modeling/models.md
