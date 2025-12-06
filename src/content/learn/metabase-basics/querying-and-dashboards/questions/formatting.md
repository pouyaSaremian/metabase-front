---
title: "آموزش: تمیز و فرمت کردن متن"
description: "نحوه استفاده از عبارات سفارشی برای تمیز کردن متنی که ناسازگار، بدون ساختار، یا خالی است."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/questions/formatting
  - /learn/visualization/formatting
toc:
  - id: "tutorial-cleaning-and-formatting-text"
    title: "آموزش: تمیز و فرمت کردن متن"
    level: 1
    href: "#tutorial-cleaning-and-formatting-text"
  - id: "searching-and-extracting-text"
    title: "جستجو و استخراج متن"
    level: 2
    href: "#searching-and-extracting-text"
  - id: "consolidating-values-from-different-columns"
    title: "یکپارچه کردن مقادیر از ستون‌های مختلف"
    level: 2
    href: "#consolidating-values-from-different-columns"
  - id: "extracting-text-and-consolidating-the-results"
    title: "استخراج متن و یکپارچه کردن نتایج"
    level: 2
    href: "#extracting-text-and-consolidating-the-results"
  - id: "combining-values-from-different-columns"
    title: "ترکیب مقادیر از ستون‌های مختلف"
    level: 2
    href: "#combining-values-from-different-columns"
  - id: "labeling-rows-with-blank-values"
    title: "برچسب زدن ردیف‌ها با مقادیر خالی"
    level: 2
    href: "#labeling-rows-with-blank-values"
  - id: "best-practices-and-tips"
    title: "بهترین روش‌ها و نکات"
    level: 2
    href: "#best-practices-and-tips"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "پرسیدن سؤال‌ها"
    href: "../questions.html"
---

# آموزش: تمیز و فرمت کردن متن

نحوه استفاده از عبارات سفارشی برای تمیز کردن متنی که ناسازگار، بدون ساختار، یا خالی است.

بگویید متابیس می‌خواهد یک مهمانی شام برای جامعه دوست‌داشتنی ما برگزار کند. برای غذای اصلی، گزینه beef tibs یا chickpea stew داریم، و برای غذای فرعی، injera یا grilled vegetables داریم. یک نظرسنجی با گزینه‌های منو ارسال کرده‌ایم تا همه بتوانند به ما بگویند چه می‌خواهند بخورند.

متأسفانه، فراموش کردیم اعتبارسنجی داده را روی فرم خود تنظیم کنیم، پس پاسخ‌ها به این شکل آمده‌اند:

```
| Response ID | Main                                | Side                    |
|-------------|-------------------------------------|-------------------------|
| 1           | beef tibs                           | injera                  |
| 2           | chickpea stew                       | grilled vegetables      |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE |                         |
| 4           |                                     | Grilled Vegetables      |
| 5           | Surprise me.                        |                         |
```

می‌خواهیم:

1. مقادیر main و side را تمیز و ترکیب کنیم تا بتوانیم محبوب‌ترین وعده‌ها را بشماریم.
2. با پاسخ‌هایی که به نوعی نامعتبر هستند (مثل چندین main، یا mainهایی که در منوی ما وجود ندارند) برخورد کنیم.
3. مهمانانی که پاسخ با اطلاعات ناقص ارسال کرده‌اند را ردیابی کنیم.

به طور کلی، امیدواریم به جدولی که شبیه این است برسیم (به راست اسکرول کنید تا جدول کامل را ببینید):

```
| Response ID | Main                                | Side                    | Order                                 | Follow up? |
|-------------|-------------------------------------|-------------------------|---------------------------------------|------------|
| 1           | beef tibs                           | injera                  | beef tibs with injera                 | no         |
| 2           | chickpea stew                       | grilled vegetables      | chickpea stew with grilled vegetables | no         |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE |                         | beef tibs only                        | yes        |
| 4           |                                     | Grilled Vegetables      | grilled vegetables only               | yes        |
| 5           | Surprise me.                        |                         |                                       | yes        |
```

## جستجو و استخراج متن

فرض کنیم تنها گزینه‌های main معتبر beef tibs و chickpea stew هستند. می‌توانیم از [تابع `regexextract`](../../../../docs/latest/questions/query-builder/expressions/regexextract.html) برای بررسی گزینه‌های منوی معتبر در داخل هر پاسخ استفاده کنیم.

برای جستجوی مقادیر در ستون **Main** برای "beef tibs"، یک [ستون سفارشی](custom-expressions.html#custom-columns) با الگوی regex `(?i)(beef tibs)` ایجاد می‌کنیم. این الگوی regex یک بررسی case-insensitive انجام می‌دهد تا ببیند آیا "beef tibs" در هر جای پاسخ ظاهر می‌شود.

ستون سفارشی **Beef** را با استفاده از:

```mbql
regexextract([Main], "(?i)(beef tibs)")
```

ایجاد کنید.

باید خروجی زیر را دریافت کنید:

```
| Response ID | Main                                | Beef      |
|-------------|-------------------------------------|-----------|
| 1           | beef tibs                           | beef tibs |
| 2           | chickpea stew                       |           |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE | BEEF TIBS |
| 4           |                                     |           |
| 5           | Surprise me.                        |           |
```

سپس، می‌خواهیم ستون **Main** را برای مقدار معتبر "chickpea stew" جستجو کنیم.

ستون **Chickpea** را ایجاد کنید:

```mbql
regexextract([Main], "(?i)(chickpea stew)")
```

با خروجی:

```
| Response ID | Main                                | Chickpea      |
|-------------|-------------------------------------|---------------|
| 1           | beef tibs                           |               |
| 2           | chickpea stew                       | chickpea stew |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE | CHICKPEA STEW |
| 4           |                                     |               |
| 5           | Surprise me.                        |               |
```

## یکپارچه کردن مقادیر از ستون‌های مختلف

بعد، ستونی به نام **Main (Clean)** ایجاد می‌کنیم که mainهای معتبر برای پاسخ هر مهمان را یکپارچه می‌کند. می‌خواهیم منطقی تنظیم کنیم تا اگر **Main** شامل:

- یک گزینه معتبر واحد (beef tibs یا chickpea stew)، سپس **Main (Clean)** را با آن گزینه پر کنیم.
- چندین گزینه معتبر، سپس اولین (چپ‌ترین) گزینه معتبر را در **Main (Clean)** قرار دهیم.
- هیچ گزینه معتبری، سپس **Main (Clean)** را با یک مقدار خالی (رشته خالی) پر کنیم.

برای ایجاد **Main (Clean)**، از [تابع `coalesce`](../../../../docs/latest/questions/query-builder/expressions/coalesce.html) برای handle کردن سه مورد فهرست شده بالا استفاده می‌کنیم، و همه چیز را در یک [تابع `lower`](../../../../docs/latest/questions/query-builder/expressions-list.html#lower) wrap می‌کنیم تا همه چیز را به lowercase استاندارد کنیم.

```mbql
lower(coalesce([Beef],[Chickpea],""))
```

که باید خروجی زیر را به ما بدهد (به راست اسکرول کنید تا جدول کامل را ببینید):

```
| Response ID | Main                                | Beef      | Chickpea      | Main (Clean)   |
|-------------|-------------------------------------|-----------|---------------|----------------|
| 1           | beef tibs                           | beef tibs |               | beef tibs      |
| 2           | chickpea stew                       |           | chickpea stew | chickpea stew  |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE | BEEF TIBS | CHICKPEA STEW | beef tibs      |
| 4           |                                     |           |               |                |
| 5           | Surprise me.                        |           |               |                |
```

## استخراج متن و یکپارچه کردن نتایج

ستون **Side** را همانطور که ستون **Main** را handle کردیم handle می‌کنیم. ابتدا، از [تابع `regexextract`](../../../../docs/latest/questions/query-builder/expressions/regexextract.html) برای جستجو و برگرداندن مقادیر معتبر از ستون **Side** استفاده کنید.

ستون سفارشی **Injera** را ایجاد کنید:

```mbql
regexextract([Side], "(?i)injera")
```

و ستون سفارشی **Vegetables**:

```mbql
regexextract([Side], "(?i)(grilled vegetables)")
```

برای دریافت خروجی:

```
| Response ID | Side               | Injera | Vegetables         |
|-------------|--------------------|--------|--------------------|
| 1           | injera             | injera |                    |
| 2           | grilled vegetables |        | grilled vegetables |
| 3           |                    |        |                    |
| 4           | Grilled Vegetables |        | Grilled Vegetables |
| 5           |                    |        |                    |
```

سپس، از [تابع `coalesce`](../../../../docs/latest/questions/query-builder/expressions/coalesce.html) با [تابع `lower`](../../../../docs/latest/questions/query-builder/expressions-list.html#lower) برای handle کردن مواردی که مردم گزینه‌های side جزئی، چندگانه، یا بدون گزینه معتبر قرار داده‌اند، و تبدیل همه مقادیر به lowercase استفاده کنید:

ستون سفارشی **Side (Clean)** را ایجاد کنید:

```mbql
lower(coalesce([Injera],[Vegetables], ""))
```

برای دریافت:

```
| Response ID | Side               | Injera | Vegetables         | Side (Clean)       |
|-------------|--------------------|--------|--------------------|--------------------|
| 1           | injera             | injera |                    | injera             |
| 2           | grilled vegetables |        | grilled vegetables | grilled vegetables |
| 3           |                    |        |                    |                    |
| 4           | Grilled Vegetables |        | Grilled Vegetables | grilled vegetables |
| 5           |                    |        |                    |                    |
```

## ترکیب مقادیر از ستون‌های مختلف

در نهایت، می‌خواهیم سفارش‌های کامل را با بررسی هر سناریو تولید کنیم:

- اگر **Main (Clean)** و **Side (Clean)** هر دو شامل یک گزینه معتبر هستند، سپس "main with side" را برگردانید.
- اگر فقط یک گزینه معتبر وجود دارد، سپس "main only" یا "side only" را برگردانید.
- اگر هیچ گزینه معتبری وجود ندارد، سفارش را خالی بگذارید (یک رشته خالی برگردانید).

برای بررسی اینکه آیا یک ستون non-empty است، از [تابع `isempty`](../../../../docs/latest/questions/query-builder/expressions/isempty.html) استفاده می‌کنیم.

به عنوان مثال، برای بررسی اینکه آیا **Main (Clean)** خالی است:

```mbql
isempty([Main (Clean)])
```

برای بررسی اینکه آیا **Main (Clean)** و **Side (Clean)** *هر دو* خالی هستند، می‌توانید عبارات را با استفاده از `AND` ترکیب کنید:

```mbql
isempty([Main (Clean)]) AND isempty([Side (Clean)])
```

`isempty` در حال حاضر [فقط در داخل تابع دیگر کار می‌کند](../../../../docs/latest/questions/query-builder/expressions/isempty.html#limitations)، پس نیاز داریم هر یک از بررسی‌های خود را در داخل یک [تابع `case`](../../../../docs/latest/questions/query-builder/expressions/case.html) قرار دهیم. برای حالا متن placeholder را به عنوان خروجی قرار می‌دهیم:

```mbql
case(
    (isempty([Main (Clean)]) AND isempty([Side (Clean)])), "",
    isempty([Side (Clean)]), "main only",
    isempty([Main (Clean)]), "side only",
    "main with side"
)
```

توجه کنید که ترتیب caseها مهم است، چون:

- تابع `case` هر عبارت را به ترتیب ارزیابی می‌کند، و به محض پیدا شدن *اولین* case معتبر متوقف می‌شود.
- اگر اولین case را با دومین case عوض کنید، عبارت تأیید می‌کند که **Side (Clean)** خالی است و فوراً "main only" را برمی‌گرداند، بدون اینکه بررسی کند آیا **Main (Clean)** نیز خالی است.

در نهایت، برای پر کردن سفارش نهایی برای هر مهمان، از [تابع `concat`](../../../../docs/latest/questions/query-builder/expressions/concat.html) برای لینک کردن مقادیر از **Main (Clean)** و **Side (Clean)** با کلمات دیگر (شامل whitespaceها) استفاده می‌کنیم.

ستون **Order** را با استفاده از:

```mbql
case(
    (isempty([Main (Clean)]) AND isempty([Side (Clean)])), "",
    isempty([Side (Clean)]), concat([Main (Clean)], " only"),
    isempty([Main (Clean)]), concat([Side (Clean)], " only"),
    concat([Main (Clean)], " with ", [Side (Clean)])
)
```

ایجاد کنید.

به طور کلی، این مجموعه‌ای از ستون‌های فرمت شده مثل این به ما می‌دهد (به راست اسکرول کنید تا جدول کامل را ببینید):

```
| Response ID | Main                                | Side               | Main (Clean)    | Side (Clean)       | Order                                 |
|-------------|-------------------------------------|--------------------|-----------------|--------------------|---------------------------------------|
| 1           | beef tibs                           | injera             | beef tibs       | injera             | beef tibs with injera                 |
| 2           | chickpea stew                       | grilled vegetables | chickpea stew   | grilled vegetables | chickpea stew with grilled vegetables |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE |                    | beef tibs       |                    | beef tibs only                        |
| 4           |                                     | Grilled Vegetables |                 | grilled vegetables | grilled vegetables only               |
| 5           | Surprise me.                        |                    |                 |                    |                                       |
```

## برچسب زدن ردیف‌ها با مقادیر خالی

بگویید می‌خواهیم ستونی به نام **Follow up?** اضافه کنیم تا سفارش‌هایی که main معتبر، side، یا هر دو را ندارند را ردیابی کنیم. این یعنی نیاز داریم بررسی کنیم آیا هر یک از **Order**، **Main (Clean)**، یا **Side (Clean)** خالی هستند.

می‌توانیم [تابع `isempty`](../../../../docs/latest/questions/query-builder/expressions/isempty.html) را با عملگر `OR`[](../../../../docs/latest/questions/query-builder/expressions.html#conditional-operators) ترکیب کنیم تا "yes" را اگر هر یک از سه ستون خالی است برگردانیم، و "no" را اگر همه ستون‌ها با داده معتبر پر شده‌اند.

**Follow up?** را با استفاده از:

```mbql
case(( isempty([Order])
    OR isempty([Main (Clean)])
    OR isempty([Side (Clean)])), "yes", "no")
```

ایجاد کنید.

نتیجه نهایی (به راست اسکرول کنید تا جدول کامل را ببینید):

```
| Response ID | Main                                | Side                    | Order                                 | Follow up? |
|-------------|-------------------------------------|-------------------------|---------------------------------------|------------|
| 1           | beef tibs                           | injera                  | beef tibs with injera                 | no         |
| 2           | chickpea stew                       | grilled vegetables      | chickpea stew with grilled vegetables | no         |
| 3           | BEEF TIBS WITH CHICKPEA STEW PLEASE |                         | beef tibs                             | yes        |
| 4           |                                     | vegetables              | grilled vegetables                    | yes        |
| 5           | Surprise me.                        |                         |                                       | yes        |
```

## بهترین روش‌ها و نکات

در این آموزش، هر بار که نیاز به استخراج، ترکیب، یا برچسب زدن داده متنی خود داشتیم یک ستون سفارشی جدید ایجاد کردیم. همچنین توابع ساده‌تر (مثل `lower` و `isempty`) را با توابع دیگر ترکیب کردیم. به طور کلی، توصیه می‌کنیم هر بار که از تابعی با چندین پارامتر (مثل `case`، `regexextract`، و `coalesce`) استفاده می‌کنید یک ستون سفارشی جدید ایجاد کنید، چون:

- می‌توانید تأیید کنید آیا عبارات شما همانطور که انتظار می‌رود کار می‌کنند.
- منطق راحت‌تر خوانده و به‌روزرسانی می‌شود.

و، اگر به کار با توابع در ابزارهای دیگر، مثل SQL، spreadsheetها، یا Python عادت دارید، بخش **Related functions** در مستندات عبارات سفارشی را بررسی کنید. به عنوان مثال، می‌توانید یاد بگیرید چگونه منطق if-then را به یک عبارت متابیس با استفاده از [توابع مرتبط برای `case`](../../../../docs/latest/questions/query-builder/expressions/case.html#related-functions) تبدیل کنید.

## مطالعه بیشتر

- [آموزش: عبارات سفارشی در query builder](custom-expressions.html)
- [مستندات: عبارات سفارشی](../../../../docs/latest/questions/query-builder/expressions.html)
- [فهرست عبارات سفارشی](../../../../docs/latest/questions/query-builder/expressions-list.html)

[
      
        

      
      
        
        

      
    ](searching-tables.html)
