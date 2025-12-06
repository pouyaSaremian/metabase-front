---
title: "Markdown در داشبوردها"
description: "نحوه استفاده از Markdown در داشبوردهای خود برای سرگرمی و سود."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/dashboards/markdown
  - /learn/dashboards/markdown
toc:
  - id: "markdown-in-dashboards"
    title: "Markdown در داشبوردها"
    level: 1
    href: "#markdown-in-dashboards"
  - id: "adding-text-to-dashboards"
    title: "افزودن متن به داشبوردها"
    level: 2
    href: "#adding-text-to-dashboards"
  - id: "writing-in-the-text-box"
    title: "نوشتن در جعبه متنی"
    level: 2
    href: "#writing-in-the-text-box"
  - id: "how-markdown-works"
    title: "Markdown چگونه کار می‌کند"
    level: 2
    href: "#how-markdown-works"
  - id: "example-text-box"
    title: "جعبه متنی نمونه"
    level: 2
    href: "#example-text-box"
  - id: "use-variables-in-text-cards-to-create-dynamic-text"
    title: "استفاده از متغیرها در کارت‌های متنی برای ایجاد متن پویا"
    level: 2
    href: "#use-variables-in-text-cards-to-create-dynamic-text"
  - id: "create-a-custom-url-with-a-filter-value"
    title: "ایجاد یک URL سفارشی با مقدار فیلتر"
    level: 2
    href: "#create-a-custom-url-with-a-filter-value"
  - id: "one-last-pro-tip-for-gif-aficionados"
    title: "یک نکته حرفه‌ای آخر برای علاقه‌مندان GIF"
    level: 2
    href: "#one-last-pro-tip-for-gif-aficionados"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "ساخت داشبوردها"
    href: "../dashboards.html"
---

# Markdown در داشبوردها

نحوه استفاده از Markdown در داشبوردهای خود برای سرگرمی و سود.

ساخت داشبوردهای مؤثر اغلب شامل ارائه زمینه برای مردم برای دادن بینش به آن‌ها درباره نحوه یا چرا یک محاسبه وجود دارد. در حالی که عنوان‌های دقیق، توضیحات، و محورهای برچسب‌دار می‌توانند راه زیادی برای روشن کردن تجسم‌های شما بروند، متابیس همچنین به شما اجازه افزودن جعبه‌های متنی انعطاف‌پذیر به داشبوردهای خود را می‌دهد. این پست به شما نشان می‌دهد چگونه از این ویژگی با استفاده از syntax [Markdown](https://en.wikipedia.org/wiki/Markdown) بهره کامل ببرید.

## افزودن متن به داشبوردها

یک داشبورد که می‌خواهید متن به آن اضافه کنید انتخاب کنید، و روی **آیکون مداد** کلیک کنید تا داشبورد را ویرایش کنید. روی دکمه **جعبه متنی** در toolbar داشبورد (نشان داده شده به عنوان `Aa`) کلیک کنید. یک جعبه متنی ظاهر می‌شود، که می‌توانید آن را درست مثل یک جعبه سؤال حرکت دهید. برای تغییر اندازه جعبه متنی، روی گوشه پایین سمت راست آن کلیک و drag کنید.

![افزودن سؤال و جعبه متنی به داشبورد.](../../../images/fun-with-markdown-in-your-dashboards/add_text_box.gif)

## نوشتن در جعبه متنی

برای تعامل با یک جعبه متنی، نیاز به بودن در حالت ویرایش در یک داشبورد دارید. روی **آیکون مداد** در toolbar داشبورد در بالا سمت راست داشبورد کلیک کنید.

جعبه‌های متنی در متابیس دو حالت دارند.

- ویرایش متن (**آیکون مداد**).
- view render شده (**آیکون چشم**).

ویرایشگر متنی در متابیس از یک زبان نشانه‌گذاری سبک به نام Markdown استفاده می‌کند. اگر هرگز از Markdown استفاده نکرده‌اید، کمی عادت کردن می‌خواهد، اما به زودی یاد می‌گیرید سادگی آن را قدردانی کنید. Markdown می‌تواند نویسندگان را احساس کنند مثل کدنویس‌ها و کدنویس‌ها احساس کنند در خانه.

## Markdown چگونه کار می‌کند

برای ایجاد سطوح heading مختلف مثل این:

![Headingها همانطور که متابیس آن‌ها را در یک کارت متنی روی یک داشبورد render می‌کند.](../../../images/fun-with-markdown-in-your-dashboards/headings.png)

می‌نویسید:

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

متن ساده `## Heading 2` به عنوان کد HTML render می‌شود:

```html
<h2>
  Heading
  <h2></h2>
</h2>
```

می‌توانید از syntax Markdown برای افزودن لینک‌ها، تصاویر، gifها، فهرست‌ها، codeblockها، blockquoteها، و بیشتر استفاده کنید. در اینجا یک جعبه متنی با heading، پاراگراف، blockquote، و code block:

![Heading، پاراگراف، و blockquote.](../../../images/fun-with-markdown-in-your-dashboards/heading-paragraph-blockquote.png)

می‌توانید همه آنچه این پست انجام می‌دهد و بیشتر با استفاده از جعبه‌های متنی در متابیس انجام دهید. مسئله بزرگ با Markdown این است که نیاز به نوشتن HTML خسته‌کننده ندارید، و Markdown حتی قبل از اینکه متابیس آن را render کند قابل خواندن انسان است. مجموعه ویژگی‌های مینیمالیست Markdown شما را روی محتوا متمرکز نگه می‌دارد، و ظاهر استاندارد در سراسر داشبوردهای شما ارائه می‌دهد.

می‌توانید بیشتر درباره syntax Markdown [در این راهنما](https://www.markdownguide.org/) یاد بگیرید، و همچنین از [یکی از خالقان اصلی Markdown](https://daringfireball.net/projects/markdown/syntax)، که همچنین شامل [فلسفه](https://daringfireball.net/projects/markdown/syntax#philosophy) پشت Markdown است. به عنوان یک bonus، سایت به شما اجازه مشاهده محتوای خود را در [syntax Markdown](https://daringfireball.net/projects/markdown/syntax.text) می‌دهد.

## جعبه متنی نمونه

در اینجا یک مثال داشبورد با یک سؤال و جعبه متنی:

![داشبورد با سؤال و کارت‌های متنی.](../../../images/fun-with-markdown-in-your-dashboards/dashboard-with-text-box.png)

در اینجا کد Markdown استفاده شده در جعبه متنی بالا:

```markdown
# Analysis

Although `Gadgets` outsold `Gizmos` in 2019, we only introduced `Gizmos` and `Doohickeys` in September of 2019. Additionally, both `Gadgets` and `Widgets` were heavily discounted during our spring, summer, and holiday sales.

We expect sales to continue to grow in the `Gizmo` and `Doohickey` product lines.

# SQL query

    SELECT "PRODUCTS__via__PRODUCT_ID"."CATEGORY" AS "CATEGORY",
    sum("PUBLIC"."ORDERS"."QUANTITY") AS "sum"
    FROM "PUBLIC"."ORDERS"
    LEFT JOIN "PUBLIC"."PRODUCTS" "PRODUCTS__via__PRODUCT_ID" ON
    "PUBLIC"."ORDERS"."PRODUCT_ID" = "PRODUCTS__via__PRODUCT_ID"."ID"
    WHERE ("PUBLIC"."ORDERS"."CREATED_AT" >= timestamp with time zone '2019-01-01 00:00:00.000Z'
    AND "PUBLIC"."ORDERS"."CREATED_AT" < timestamp with time zone '2020-01-01 00:00:00.000Z')
    GROUP BY "PRODUCTS__via__PRODUCT_ID"."CATEGORY"
    ORDER BY "sum" ASC, "PRODUCTS__via__PRODUCT_ID"."CATEGORY" ASC

# Contact

If you have questions, reach out to us on the [\#product](https://fakemessageservice.com/product) channel.
```

تحلیلگر فرضی برخی زمینه، کد، و اطلاعات تماس ارائه داد: اما می‌توانید هر زمینه‌ای که به خوانندگان گزارش شما کمک می‌کند شامل کنید.

توجه: در مثال بالا، تحلیلگر پرس‌وجوی SQL خام تولید شده توسط query builder را برای مرجع paste کرد. می‌توانید SQL composed شده توسط query builder را با کلیک روی **آیکون ویرایشگر** برای ["View the SQL"](../../../../docs/latest/questions/query-builder/editor.html#viewing-the-native-query-that-powers-your-question) وقتی در حالت ویرایش هستید مشاهده کنید.

همچنین می‌توانید از جعبه‌های متنی به عنوان dividerهای ساده برای منظم نگه داشتن داشبوردهای خود استفاده کنید.

![استفاده از یک کارت متنی به عنوان یک divider برای سازماندهی داشبورد خود.](../../../images/fun-with-markdown-in-your-dashboards/text-box-divider.png)

## استفاده از متغیرها در کارت‌های متنی برای ایجاد متن پویا

می‌توانید [متغیرها را اضافه کنید](../../../../docs/latest/dashboards/introduction.html#including-variables-in-text-cards) به کارت‌های متنی و آن‌ها را به فیلترها wire کنید. متابیس مقادیر انتخاب شده در فیلتر را می‌گیرد و آن مقادیر را در متغیرهای متن شما plug می‌کند، ایجاد کارت‌های متنی که به طور خودکار وقتی مردم مقادیر فیلتر را تغییر می‌دهند به‌روزرسانی می‌شوند.

به عنوان مثال، بگویید می‌خواهید یک کارت متنی مقادیر در فیلتر **Plan** روی داشبورد خود را نمایش دهد، مثل این:

![متابیس render کردن دو پلن انتخاب شده در فیلتر،](../../../images/fun-with-markdown-in-your-dashboards/rendered-parameters.png)

پلن‌های فهرست شده در کارت متنی بسته به اینکه کدام پلن‌ها در فیلتر انتخاب شده‌اند تغییر می‌کنند (در این مورد، پلن‌های Business و Premium در فیلتر انتخاب شدند، و بنابراین کارت متنی آن‌ها را نمایش می‌دهد).

برای wire کردن یک متغیر کارت متنی به یک فیلتر:

1. روی **مداد** کلیک کنید تا وارد حالت ویرایش داشبورد شوید.
2. [یک فیلتر اضافه کنید](../../../../docs/latest/dashboards/filters.html) به داشبورد خود.
3. [یک کارت متنی اضافه کنید](../../../../docs/latest/dashboards/introduction.html) به داشبورد خود.
4. مقداری Markdown بنویسید و یک متغیر شامل کنید. متغیرها با براکت‌های دوتایی bookend می‌شوند: ``` # Plan ## {{PLAN}} ```
5. [فیلتر را متصل کنید](../../../../docs/latest/dashboards/filters.html#editing-a-filter) به متغیر در کارت متنی.

![افزودن یک متغیر به کارت متنی خود.](../../../images/fun-with-markdown-in-your-dashboards/parameter.png)

اگر هیچ مقداری در فیلتر plug نشده باشد، متابیس متغیر ناخوشایند `{{PLAN}}` را render می‌کند. برای handle کردن مواردی که فیلتر مقدار ندارد، می‌توانید یک مقدار پیش‌فرض تنظیم کنید یا، بهتر، متن را با محاصره کردن متن متغیر با براکت‌های دوتایی برای اختیاری کردن متن مخفی کنید.

```markdown
# Plan
[[## {{PLAN}}]]
```

براکت‌های دوتایی به متابیس می‌گویند متن را فقط اگر فیلتر متصل حداقل یک مقدار داشته باشد نمایش دهد.

## ایجاد یک URL سفارشی با مقدار فیلتر

می‌توانید یک URL را به یک کارت Markdown مثل این اضافه کنید:

```markdown
[Google Search](https://google.com)
```

که به عنوان لینک قابل کلیک hyperlink ظاهر می‌شود: [Google Search](https://google.com/).

برای ساخت یک URL پویا، مثل یک [Google Search for "filter value"](https://google.com/search?q=filter_value)، می‌توانید یک `{{variable}}` هر جا که می‌خواهید متن مقدار فیلتر ظاهر شود قرار دهید. به عنوان مثال، برای افزودن یک URL پویا به یک داشبورد با جدول **Invoices**:

1. یک فیلتر داشبورد برای "Plan" ایجاد کنید.
2. یک کارت Markdown با URL و متغیرهای خود اضافه کنید: ``` [[ [Google Search for "{{plan}}"](https://google.com/search?q={{plan}}) ]] ```
3. [فیلتر "Plan" را به کارت Markdown متصل کنید](../../../../docs/latest/dashboards/filters.html#editing-a-filter).
4. اختیاری: یک مقدار پیش‌فرض برای فیلتر "Plan" تنظیم کنید.

براکت‌های مربع دوتایی بیرونی در متن کارت Markdown URL را به طور پیش‌فرض وقتی فیلتر خالی است (هیچ مقداری انتخاب نشده و هیچ مقدار پیش‌فرضی تنظیم نشده) مخفی می‌کند.

![یک URL سفارشی که مقدار فیلتر را می‌پذیرد.](../../../images/fun-with-markdown-in-your-dashboards/custom-url.png)

حالا، اگر کسی به فیلتر "Plan" برود و "Basic" را انتخاب کند، یک لینک قابل کلیک در کارت Markdown مثل این می‌بینند: [Google Search for "Basic"](https://google.com/?q=basic).

## یک نکته حرفه‌ای آخر برای علاقه‌مندان GIF

syntax تصویر،

```markdown
![image description](image-link)
```

همچنین برای GIFها کار می‌کند. چون موارد استفاده بسیار مهم‌تری برای جعبه‌های متنی داشبورد وجود دارد:

![یکی از این کارت‌ها مثل بقیه نیست.](../../../images/fun-with-markdown-in-your-dashboards/shades_off_dashboard.gif)

Markdown موفق!

[
      
        

      
      
        
        

      
    ](cross-filtering.html)
[
      
        
        

      
      
        
        

      
    ](build-a-record-lookup-tool.html)
