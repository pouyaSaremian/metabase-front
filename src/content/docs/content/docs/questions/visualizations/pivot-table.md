---
title: Pivot tableها
redirect_from:
  - /docs/latest/questions/sharing/visualizations/pivot-table
---

<!-- markdownlint-disable-next-line MD025 -->
# Pivot tableها

> Pivot tableها در حال حاضر فقط برای سؤال‌هایی که با [Query builder](../query-builder/editor.md) ساخته شده‌اند پشتیبانی می‌شوند. Pivot table برای پایگاه‌داده‌های NoSQL مثل MongoDB در دسترس نیست.

Pivot tableها به شما اجازه می‌دهند سطرها و ستون‌ها را جابه‌جا کنید، داده‌ها را Pivot کنید، و Subtotalها را در جدول نمایش دهید. می‌توانید یک یا چند Metric را بر اساس یک یا چند Dimension گروه‌بندی کنید.

{% include youtube.html id='yTRzCQeTmO8' %}

## Pivot table در مقابل جدول معمولی

یک جدول سادهٔ معمولی، شبکه‌ای از سلول‌ها است؛ هر Dimension (که به آن Attribute یا "group by" هم گفته می‌شود) به‌صورت یک ستون نمایش داده می‌شود و هر رکورد یک سطر است. مثلاً در جدول زیر، `Source`، `Plan` و `Created at` Dimension/Attributeهایی برای Metricهای `Sum of Seats` و `Count` هستند:

![Unpivoted table](../images/unpivoted-table.png)

Pivot table جدولی است که در آن Dimensionها هم در سطرها و هم در ستون‌ها قرار می‌گیرند و مقدار Metricها داخل سلول‌ها نمایش داده می‌شود. Pivot tableها می‌توانند سطرهای خلاصه (Subtotal) برای Dimensionها اضافه کنند:

![Pivoted table](../images/pivoted-table.png)

علت این‌که به آن‌ها Pivot table گفته می‌شود این است که می‌توانید یک ستون را ۹۰ درجه «بچرخانید» تا مقدارهای آن ستون خودشان به سرستون تبدیل شوند. Pivot کردن مقادیر به سرستون‌ها برای تحلیل داده بر اساس چند Attribute مختلف (مثل زمان، مکان و دسته‌بندی) بسیار مفید است. می‌توانید چند سطر را به ستون Pivot کنید و برعکس، یا اصلاً Pivot نکنید.

Pivot table تنها نوع Visualization در متابیس (علاوه بر جدول ساده) است که می‌تواند چند Metric را هم‌زمان روی چند Dimension نمایش دهد.

## چگونه یک Pivot table بسازیم

برای ساخت Pivot table باید از Query builder استفاده کنید. در حال حاضر نمی‌توانید برای سؤال‌هایی که با SQL نوشته‌ شده‌اند، مستقیماً Pivot table بسازید، چون متابیس برای محاسبهٔ Subtotalها مجبور می‌شود SQL شما را تغییر دهد. اگر نیاز دارید از SQL استفاده کنید، راه‌حل این است که سؤال را در دو مرحله بسازید:  
ابتدا همهٔ منطق پیچیده را در SQL پیاده‌سازی کنید و خروجی را به‌عنوان یک سؤال ذخیره کنید، سپس آن سؤال SQL ذخیره‌شده را به‌عنوان ورودی یک سؤال جدید در Query builder استفاده کنید و روی آن summarize و Pivot انجام دهید.

1. در Query builder سؤالی بسازید که یک summary با حداقل یک breakout داشته باشد، مثلاً: «`Count` of orders by `Category` and `Month`».
2. می‌توانید چند Metric در کوئری داشته باشید (مثلاً: «`Count` و `Average of Total` of orders by `Category` and `Month`»).

   ![Pivot table notebook](../images/pivot-table-notebook.png)

3. روی **Visualize** کلیک کنید.
4. برای تغییر Visualization به Pivot table، روی آیکون **Visualization** در پایین چپ کلیک کنید و از سایدبار **Pivot table** را انتخاب کنید.
5. برای تنظیم این‌که کدام فیلدها به‌عنوان سطر و ستون در Pivot table استفاده شوند، روی آیکون **چرخ‌دنده (gear)** کلیک کنید و فیلدها را در یکی از سه بخش قرار دهید: **rows**، **columns** یا **measures**.

   - بخش **Rows** و **Columns** باید شامل Dimensionها یا Breakoutها باشند؛ یعنی فیلدهایی که بر اساس آن‌ها group by انجام می‌دهید، مثل `Category` یا `Created at`.
   - بخش **Measures** باید شامل summaryها یا Metricها باشد؛ مثل `Count` یا `Average of Total`.

   ![Pivot table options](../images/pivot-table-options.png)

   می‌توانید چندین فیلد را در بخش‌های "rows" و "columns" قرار دهید، اما توجه کنید که ترتیب فیلدها روی نحوهٔ نمایش جدول تأثیر می‌گذارد: هر فیلد اضافه‌شده داخل فیلد قبلی تو‌در‌تو (Nested) می‌شود.

در حال حاضر همهٔ Dimensionها و Metricهایی که در کوئری استفاده شده‌اند باید به‌عنوان row، column یا measure در Pivot table قرار بگیرند (اگرچه می‌توانید [سطرها را فقط روی مجموع‌ها Collapse کنید](#مجموع‌ها-و-جمع-کل-totals-and-grand-totals)). اگر نمی‌خواهید Breakout یا Metric خاصی در Pivot table نمایش داده شود، باید آن را از خودِ کوئری حذف کنید؛ نمی‌توانید فقط در Pivot table پنهانش کنید.

## مجموع‌ها و جمع کل (Totals and grand totals)

جایی که منطقی باشد، متابیس به‌طور خودکار Subtotalها را برای سطرهای گروه‌بندی‌شده اضافه می‌کند.

![Pivot table options](../images/pivot-table-options.png)

برای مثال، همان‌طور که در تصویر بالا می‌بینید، چون سطرها ابتدا بر اساس `Source` و سپس بر اساس `Plan` گروه‌بندی شده‌اند، متابیس هر Plan را برای هر `Source` لیست می‌کند و سپس Metric(های) مربوط به آن Source را تجمیع می‌کند.

برای جمع‌کردن (Collapse) یک گروه در Pivot table، می‌توانید روی دکمهٔ منفی (–) کنار سرگروه کلیک کنید (و برای بازکردن گروه روی دکمهٔ مثبت (+)). وقتی Pivot table را ذخیره کنید، متابیس به‌خاطر می‌سپارد کدام گروه‌ها باز و کدام بسته بوده‌اند.

می‌توانید از طریق تنظیمات Pivot table (آیکون **gear**) و خاموش کردن گزینهٔ «Show row/column totals»، نمایش مجموع سطرها/ستون‌ها را غیرفعال کنید.

## فرمت‌گذاری شرطی در Pivot tableها

می‌توانید براساس شرط‌ها، یا با استفاده از بازهٔ مقادیر، رنگ‌ها را روی Pivot table اعمال کنید:

![Conditional formatting](../images/pivot-conditional-formatting.png)

متابیس روی مجموع‌ها و جمع کل (Totals و Grand totals) فرمت‌گذاری شرطی اعمال نمی‌کند.

فرمت‌گذاری شرطی برای Pivot tableها دقیقاً مانند جدول‌های معمولی عمل می‌کند؛ بنابراین بخش [Conditional formatting](./table.md#conditional-table-formatting) را ببینید.

## استفاده از Pivot table به‌عنوان هیت‌مپ (Heatmap)

می‌توانید با استفاده از فرمت‌گذاری شرطی، Pivot table را به یک هیت‌مپ مقادیر بر اساس Dimensionها تبدیل کنید:

1. یک سؤال در Query builder بسازید که در بلوک Summary این ویژگی‌ها را داشته باشد:
2. یک Metric که شدت/مقدار هر سلول را مشخص ‌کند.
3. دو Breakout که مؤلفه‌های افقی و عمودی هیت‌مپ را تعیین کنند.

2. Visualization را روی Pivot table بگذارید.
3. یک فرمت‌گذاری شرطی از نوع **"Color range"** اضافه کنید.

برای مثال، برای ساخت هیت‌مپ از فعالیت ساعتی بر اساس روز هفته، می‌توانید کوئری‌ای بسازید که بر اساس «ساعت روز» و «روز هفته» Breakout داشته باشد:

![Query for the heatmap](../images/heatmap-query.png)

سپس Pivot table را با فرمت‌گذاری شرطی استفاده کنید:

![Pivot table as a heatmap](../images/pivot-table-as-heatmap.png)

## خروجی گرفتن از Pivot tableها

برای خروجی گرفتن Pivot tableها به‌صورت فایل XLSX چند نکتهٔ خاص وجود دارد. بخش [Exporting pivot tables](../exporting-results.md#exporting-pivot-tables) را ببینید.

## محدودیت‌های Pivot table

- Pivot tableها فقط برای دیتابیس‌های SQL در دسترس هستند.
- همهٔ Metricها و Dimensionهایی که در کوئری تعریف شده‌اند در Pivot table نمایش داده می‌شوند.
- Pivot tableها فقط برای سؤال‌هایی در دسترس‌اند که با Query builder ساخته شده‌اند.
- سؤال Query builder باید یک بلوک Summary داشته باشد.

اگر ناچارید از SQL استفاده کنید و کوئری SQL شما پارامتر ندارد، می‌توانید آن کوئری را ذخیره کنید و سپس [نتایج آن را به‌عنوان ورودی](../native-editor/writing-sql.md#explore-sql-question-results-using-the-query-builder) برای یک سؤال Query builder استفاده کنید. نکتهٔ کلیدی این است که عملیات Aggregation و Grouping را در Query builder انجام دهید؛ یعنی از سؤال SQL فقط برای گرفتن دادهٔ خامی که می‌خواهید با آن کار کنید (یا حتی [ساخت یک مدل](../../data-modeling/models.md)) استفاده کنید، و بعد یک سؤال جدید در Query builder بسازید تا روی آن داده‌ها فیلتر، Summary و Group by انجام دهید.


