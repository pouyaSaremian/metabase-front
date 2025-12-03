---
title: نوارهای پیشرفت (Progress bar)
redirect_from:
  - /docs/latest/questions/sharing/visualizations/progress-bar
---

<!-- markdownlint-disable-next-line MD025 -->
# نوارهای پیشرفت (Progress bar)

**Progress bar** برای مقایسهٔ یک عدد تکی با مقدار هدفی است که شما تعیین می‌کنید.

![Progress bar](../images/progress.png)

## چه زمانی از Progress bar استفاده کنیم؟

Progress bar زمانی مفید است که می‌خواهید حرکت یک معیار (Metric) به سمت یک هدف (Goal) را نشان دهید؛ مثلاً ارزیابی عملکرد یک KPI یا رصد درصد اتمام یک پروژه.

Progress bar این امکان را می‌دهد که هر وقت نتیجهٔ یک سؤال به Goal تعریف‌شده در تنظیمات Progress bar برسد، Alert تنظیم کنید. بخش [Progress bar alerts](../alerts.md#progress-bar-alerts) را ببینید.

## شکل داده برای Progress bar

برای ساخت Progress bar به این موارد نیاز دارید:

- یک کوئری که فقط **یک ردیف** با یک یا چند ستون عددی برگرداند، مثل «Sum of order quantity». Progress bar با Breakout کار نمی‌کند.

  | Sum of Quantity | Average Quantity | Max Quantity |
  | --------------- | ---------------- | ------------ |
  | 4910            | 17.32            | 173          |

- یک مقدار هدف (Goal). این مقدار می‌تواند یک عدد ثابت مثبت باشد یا مقداری از یک ستون دیگر در همان کوئری؛ بخش [تنظیم Goal](#تنظیم-هدف-برای-progress-bar-set-goal-for-a-progress-bar) را ببینید.

  مقدار Goal در [تنظیمات نمودار](#گزینه‌های-progress-bar-progress-bar-options) تنظیم می‌شود.

  ![Progress bar KPI](../images/progress-bar-elements.png)

## ساخت Progress bar

بعد از این‌که کوئری‌ای ساختید که خروجی‌اش شکل مناسب برای Progress bar دارد، می‌توانید Visualization را به Progress تغییر دهید:

1. نتایج کوئری را Visualize کنید.
   به‌صورت پیش‌فرض، متابیس ممکن است نتایج را به‌صورت جدول یا عدد (Number) نمایش دهد، اما شما می‌توانید نوع Visualization را عوض کنید.
2. هنگام مشاهدهٔ Visualization، روی دکمهٔ **Visualization** در پایین چپ صفحه کلیک کنید و نوع Visualization را روی **Progress** بگذارید.
3. برای تنظیم Metric و Goal نوار پیشرفت، روی آیکون **چرخ‌دنده (gear)** در پایین چپ کلیک کنید تا سایدبار تنظیمات باز شود.
4. در نوار «Display» در سایدبار تنظیمات، ستونی را که به‌عنوان Metric استفاده می‌شود و ستونی (یا عددی) را که به‌عنوان Goal استفاده می‌شود انتخاب کنید. بخش [تنظیم هدف](#تنظیم-هدف-برای-progress-bar-set-goal-for-a-progress-bar) را ببینید.

   اگر کوئری فقط یک عدد برگرداند، فقط می‌توانید یک Goal ثابت تنظیم کنید.

## تنظیم هدف برای Progress bar (Set goal for a progress bar)

می‌توانید یک هدف ثابت (مثلاً ۵۰۰۰) یا هدفی پویا بر اساس ستون دیگری تنظیم کنید.

### استفاده از هدف ثابت

برای تنظیم Goal ثابت:

1. هنگام مشاهدهٔ Progress bar، روی آیکون **Gear** در پایین چپ برای باز کردن تنظیمات کلیک کنید.
2. در تب Display، روی منوی کشویی **Goal** کلیک کنید و گزینهٔ **Custom value** را انتخاب کنید.

   اگر نتیجهٔ کوئری فقط شامل یک ستون باشد، منوی انتخاب ستون را نخواهید دید و فقط یک فیلد برای وارد کردن مقدار ثابت Goal می‌بینید.

3. مقدار هدف را وارد کنید.

### استفاده از ستون دیگر به‌عنوان Goal

Goal سفارشی باید از ستونی در همان کوئری بیاید؛ بنابراین خروجی کوئری باید شبیه زیر باشد:

| Value | Goal |
| ----- | ---- |
| 4910  | 5000 |

اگر از Query builder استفاده می‌کنید، ممکن است لازم باشد هم Metric و هم Goal را به‌صورت Aggregation محاسبه کنید، بنابراین [تعبیرهای سفارشی Aggregation](../query-builder/expressions-list.md#aggregations) می‌توانند مفید باشند.

برای مثال، اگر می‌خواهید Progress barی بسازید که `Count of orders this year` (به‌عنوان Metric) را با `Count of orders last year` (به‌عنوان Goal) مقایسه کند، می‌توانید از [`CountIf()`](../query-builder/expressions/countif.md) استفاده کنید و کوئری‌ای بسازید که شمارش‌های شرطی بر اساس سال‌ها برگرداند:

![Conditional counts as metric and goal](../images/progress-conditional-count.png)

توجه کنید که هر دو ستون در این مثال فیلدهای محاسبه‌شده (Computed fields) هستند؛ یکی برای سال ۲۰۲۴ و دیگری برای سال جاری.

بعد از این‌که ستونی که می‌خواهید به‌عنوان Goal استفاده کنید ایجاد شد:

1. هنگام مشاهدهٔ Visualization Progress bar، روی آیکون **Gear** در پایین چپ کلیک کنید.
2. در تب Display، ستونی را که قرار است به‌عنوان Value و ستونی را که قرار است به‌عنوان Goal استفاده شود انتخاب کنید.

![Set custom goal for progress bar](../images/progress-set-custom-goal.png)

### استفاده از نتیجهٔ یک کوئری دیگر به‌عنوان Goal

برای این‌که نتیجهٔ یک کوئری دیگر را به‌عنوان Goal در Progress bar استفاده کنید، ابتدا باید آن مقدار را به‌عنوان یک ستون به کوئری اصلی اضافه کنید و سپس همان ستون جدید را در تنظیمات Progress bar به‌عنوان Goal انتخاب کنید. در Query builder می‌توانید نتیجهٔ یک سؤال دیگر را با یک Join روی `1=1` وارد کوئری کنید:

1. یک سؤال جداگانه بسازید که فقط یک عدد (Goal پویا) را برگرداند.
2. یک سؤال جدید بسازید. این سؤال باید Metricی را که می‌خواهید با Goal مقایسه کنید برگرداند؛ همین سؤال را بعداً به‌صورت Progress bar نمایش می‌دهید.
3. این سؤال را با سؤالی که در مرحلهٔ ۱ ساخته‌اید [Join](../query-builder/join.md) کنید. Join را با استفاده از یک عبارت سفارشی `1` برای هر دو سمت Join انجام دهید. بخش [Joins با عبارت‌های سفارشی](../query-builder/join.md#joins-with-custom-expressions) را ببینید.

   این Join باید ستون Goal پویا را به‌عنوان یک ستون جدید به نتیجهٔ کوئری اضافه کند.

   ![Dynamic goal in the query builder](../images/progress-bar-dynamic.png)

4. Visualization را روی [Progress bar](#ساخت-progress-bar) بگذارید و [ستون Goal پویا را به‌عنوان Goal انتخاب کنید](#استفاده-از-ستون-دیگر-به‌عنوان-goal).

## گزینه‌های Progress bar (Progress bar options)

برای باز کردن تنظیمات نمودار، روی آیکون چرخ‌دنده در پایین چپ کلیک کنید.

گزینه‌های فرمت روی هم مقدار Metric و هم Goal اعمال می‌شوند:

![Progress bar with format applied](../images/progress-with-format.png)

اگر در گزینه‌های فرمت، **Style: Percent** را انتخاب کنید، فقط نحوهٔ نمایش نتیجهٔ کوئری عوض می‌شود؛ مثلاً `17` به‌صورت `1700%` نمایش داده می‌شود. اگر می‌خواهید نتیجهٔ کوئری را به‌صورت «درصدی از Goal» نشان دهید، باید این درصد را در خود کوئری محاسبه کنید. مثلاً برای نمایش `Count of orders` به‌صورت درصدی از Goal برابر با `20`، می‌توانید با استفاده از [تعبیرهای سفارشی](../query-builder/expressions.md) عبارتی مثل «Count of orders divided by 20» بسازید و نتیجه را به‌صورت درصد فرمت کنید.

## آلارم‌های Progress bar

می‌توانید به متابیس بگویید وقتی Progress bar بالاتر یا پایین‌تر از Goal رفت، برایتان آلارم بفرستد. بخش [Progress bar alerts](../alerts.md#progress-bar-alerts) را ببینید.

## محدودیت‌ها و جایگزین‌ها

- Progress bar فرض می‌کند هدف شما این است که یک Metric را **افزایش** دهید. اگر هدف کاهش یک Metric باشد (مثلاً کم‌ کردن نرخ خطا)، بهتر است از [Gauge chart](./gauge.md) استفاده کنید.
- Progress bar از Breakout پشتیبانی نمی‌کند. اگر می‌خواهید پیشرفت یک Metric نسبت به Goal را به‌صورت شکسته‌شده بر اساس Dimensionها نمایش دهید، می‌توانید از [نمودار میله‌ای یا خطی با خط هدف (Goal line)](./line-bar-and-area-charts.md#goal-lines) استفاده کنید.

## مطالعهٔ بیشتر

- [نمودار Gauge](./gauge.md)
- [خط هدف در نمودارهای میله‌ای و خطی](./line-bar-and-area-charts.md#goal-lines)
- راهنما: [از کدام نمودار استفاده کنم؟](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/chart-guide)


