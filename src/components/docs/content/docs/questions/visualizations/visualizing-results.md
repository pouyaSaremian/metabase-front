---
title: نمای کلی بصری‌سازی
redirect_from:
  - /docs/latest/users-guide/05-visualizing-results
  - /docs/latest/questions/sharing/visualizing-results
  - /docs/latest/questions/visualizations
---

<!-- markdownlint-disable-next-line MD025 -->
# نمای کلی بصری‌سازی

جدول‌ها برای جست‌وجوی اطلاعات یا پیدا کردن عددهای مشخص عالی‌اند، اما برای دیدن روندها و فهم تصویر کلی، نمودارها معمولاً بسیار کمک‌کننده‌ترند.

## بصری‌سازی نتایج کوئری

در Query builder، متابیس به‌طور خودکار یک نمودار مناسب برای نمایش نتایج انتخاب می‌کند. اما برای کوئری‌های Native، باید خودتان نوع نمودار را انتخاب کنید.

### بصری‌سازی سؤالات در Query builder

برای بصری‌سازی نتایج سؤالی که با [Query builder](../query-builder/editor.md) ساخته‌اید، روی دکمهٔ **Visualize** زیر آخرین مرحلهٔ Query builder کلیک کنید. متابیس یک نوع نمودار متناسب با داده‌های شما انتخاب می‌کند، اما می‌توانید هر زمان خواستید [نوع نمودار را عوض کنید](#change-visualization-type). همچنین می‌توانید بین نمای نمودار و جدول نتایج جابه‌جا شوید.

می‌توانید با دکمهٔ **Visualization**/**Editor** در گوشهٔ بالا راست، بین نمای نمودار و خود Query builder سوییچ کنید.

![Switch to editor](../images/switch-to-editor.png)

### بصری‌سازی سؤالات Native

برای بصری‌سازی نتایج یک کوئری Native، روی دکمهٔ **Visualization** در پایین صفحه کلیک کنید و نوع نمودار را انتخاب کنید.

![Visualize a native query](../images/visualize-native.png)

تا وقتی «شکل» نتایج کوئری Native با نوع نمودار سازگار باشد — مثلاً یک معیار تجمیعی که بر اساس ستون تاریخ گروه‌بندی شده برای نمودار Trend — می‌توانید از همهٔ انواع نمودار استفاده کنید، به‌جز [Pivot table](./pivot-table.md). در حال حاضر [Pivot table](./pivot-table.md) برای کوئری‌های Native در دسترس نیست.

## تغییر نوع نمودار

برای تغییر نحوهٔ نمایش پاسخ سؤال، روی دکمهٔ **Visualization** در پایین-چپ صفحه کلیک کنید تا سایدبار تنظیمات نمودار باز شود.

![Visualization options](../images/VisualizeChoices.png)

اگر یک نوع نمودار با پاسخ شما جور نباشد، آن گزینه در بخش «Other charts» نمایش داده می‌شود. هنوز هم می‌توانید آن نمودار را انتخاب کنید، فقط ممکن است لازم باشد کمی در تنظیمات نمودار دست ببرید تا با داده‌تان سازگار شود.

نمی‌دانید از کدام نوع نمودار استفاده کنید؟ بخش [کدام نمودار را باید استفاده کنید؟](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/chart-guide) را ببینید.

## گزینه‌های نمودار

![Options for a chart](../images/viz-options.png)

هر نوع نمودار مجموعه‌ای از تنظیمات پیشرفتهٔ خودش را دارد. برای تغییر تنظیمات یک نمودار مشخص (مثلاً Row chart)، روی آیکون **Gear** در پایین-چپ نمودار کلیک کنید.

## نمودارهای Area

[نمودارهای Area](./line-bar-and-area-charts.md) زمانی مفیدند که می‌خواهید نسبت دو معیار را در طول زمان مقایسه کنید. هم Bar chart و هم Area chart را می‌توان به‌صورت Stacked نمایش داد.

![Stacked area chart](../images/area.png)

## نمودارهای Bar

[Bar chartها](./line-bar-and-area-charts.md) برای نمایش یک عدد که بر اساس یک دسته‌بندی گروه‌بندی شده عالی‌اند (مثلاً تعداد کاربران به تفکیک کشور).

![Bar chart](../images/bar.png)

## نمودارهای Combo

[نمودارهای Combo](./combo-chart.md) به شما اجازه می‌دهند Bar و Line (یا Area) را روی یک نمودار با هم ترکیب کنید.

![Line + bar](../images/combo-chart.png)

## نمای Detail

Visualization نوع [Detail](./detail.md) یک رکورد (ردیف) را در یک نمایش دوستونه، خوانا و جمع‌وجور نشان می‌دهد.

![Detail of a record in the account table](../images/detail.png)

## Funnel

[Funnelها](./funnel.md) به‌طور متداول در تجارت الکترونیک و فروش استفاده می‌شوند تا نشان دهند در هر مرحله از قیف خرید یا چرخهٔ فروش چه تعداد مشتری حضور دارند. به‌طور کلی، Funnelها مقادیر را بر اساس مراحل مختلف و درصد کاهش بین هر دو مرحلهٔ متوالی نشان می‌دهند.

![Funnel](../images/funnel.png)

## Gauge

[Gauge](./gauge.md) امکان نمایش یک عدد را در زمینهٔ یک سری بازهٔ رنگی که خودتان تعریف می‌کنید فراهم می‌کند.

![Gauge](../images/gauge.png)

## نمودارهای Line

[Line chartها](./line-bar-and-area-charts.md) بهترین گزینه برای نمایش روند یک عدد در طول زمان هستند، مخصوصاً زمانی که مقدارهای زیادی روی محور x دارید. برای جزئیات بیشتر، [راهنمای Line chart](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/line-charts) و آموزش [تحلیل سری زمانی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series) را ببینید.

![Trend lines](../images/trend-lines.png)

## نقشه‌ها

وقتی Visualization نوع [Map](./map.md) را انتخاب می‌کنید، متابیس سعی می‌کند براساس جدول یا Result set، مناسب‌ترین نوع نقشه را تشخیص بدهد.

![Region map](../images/map.png)

## Numbers

گزینهٔ [Numbers](./numbers.md) برای نمایش یک عدد تکی است، آن هم درشت و چشم‌گیر.

![Number](../images/number.png)

## نمودارهای Pie، Donut و Sunburst

از [Pie یا Donut chart](./pie-or-donut-chart.md) می‌توانید وقتی استفاده کنید که می‌خواهید یک معیار را بر اساس یک بُعد واحد خرد کنید، مخصوصاً اگر تعداد این دسته‌ها کم باشد (مثل حساب‌ها بر اساس پلن).

[Sunburst chart](./pie-or-donut-chart.md) نسخهٔ چندحلقه‌ای Pie chart است که داده را بر اساس بُعدهای بیشتری در حلقه‌های بیرونی نمایش می‌دهد.

![Donut](../images/pie-sunburst-demo.png)

## Pivot table

[Pivot table](./pivot-table.md) به شما اجازه می‌دهد سطرها و ستون‌ها را جابه‌جا کنید، داده‌ها را گروه‌بندی کنید و Subtotal اضافه کنید. می‌توانید یک یا چند معیار را بر اساس یک یا چند بُعد گروه‌بندی کنید.

![Pivot table options](../images/pivot-table-options.png)

## Progress bar

[Progress bar](./progress-bar.md) برای مقایسهٔ یک عدد تکی با مقدار هدفی است که خودتان تعیین می‌کنید.

![Progress bar](../images/progress.png)

## Row chart

[Row chart](./line-bar-and-area-charts.md) برای وقتی مناسب است که داده را بر اساس ستونی با تعداد مقادیر زیاد گروه‌بندی می‌کنید؛ مثلاً فیلد Vendor یا Product Title.

![Row chart](../images/row.png)

## جدول‌ها

گزینهٔ [Table](./table.md) برای نمایش داده‌های جدولی (بدیهی است!) یا فهرست‌ها، مثل لیست کاربران یا سفارش‌ها، انتخاب خوبی است.

![Conditional formatting](../images/conditional-formatting.png)

## Trend

Visualization نوع [Trend](./trend.md) برای نمایش این است که یک عدد تکی بین دو بازهٔ زمانی چطور تغییر کرده است.

![Trend settings](../images/trend-settings.png)

## Histogram

اگر یک Bar chart مثل «تعداد کاربران بر حسب سن» داشته باشید، جایی که محور x یک عدد است، به‌صورت خودکار یک [Histogram](./line-bar-and-area-charts.md) می‌گیرید که در آن هر میله نشان‌دهندهٔ یک بازهٔ مقداری (یا «Bin») است.

![Histogram](../images/histogram.png)

## نمودارهای Sankey

[نمودارهای Sankey](./sankey.md) نشان می‌دهند داده‌ها چطور در میان چند مرحلهٔ چندبُعدی جریان پیدا می‌کنند.

![Left-aligned sankey chart](../images/sankey-left-aligned.png)

## نمودارهای Waterfall

[نمودارهای Waterfall](./waterfall-chart.md) نوعی Bar chart هستند که برای نمایش نتایجی که هم مقادیر مثبت و هم منفی دارند مفیدند.

![Waterfall chart](../images/waterfall-chart.png)

## Scatterplot و Bubble chart

[Scatterplot](./scatterplot-or-bubble-chart.md) برای نمایش رابطهٔ بین دو متغیر کاربرد دارد؛ مثلاً مقایسهٔ سن کاربران اپ شما در مقابل میزان پولی که خرج کرده‌اند.

![Scatter](../images/scatter.png)

## استایل‌دهی و قالب‌بندی داده در نمودارها

![Chart formatting options](../images/chart-formatting-options.png)

می‌توانید به گزینه‌های قالب‌بندی برای ستون‌های استفاده‌شده در نمودار دسترسی داشته باشید؛ کافی است تنظیمات Visualization را با کلیک روی آیکون **Gear** در پایین-چپ باز کنید.

بسته به نوع نمودار، گزینه‌ها متفاوت‌اند و می‌توانند تنظیمات مربوط به داده، نمایش و محورهای نمودار را شامل شوند.

همچنین بخش [تنظیمات پیش‌فرض قالب‌بندی](../../data-modeling/formatting.md) را ببینید.

## مطالعهٔ بیشتر

- [نمودارهای چندسری](../../dashboards/multiple-series.md)
- [ظاهر رابط](../../configuring-metabase/appearance.md)
- [بهترین رویه‌ها برای داشبوردهای BI](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/dashboards/bi-dashboard-best-practices.html)
