---
title: نمودارهای Pie و Sunburst
redirect_from:
  - /docs/latest/questions/sharing/visualizations/pie-or-donut-chart
---

<!-- markdownlint-disable-next-line MD025 -->
# نمودارهای Pie و Sunburst

**Pie chart** زمانی کاربرد دارد که یک Metric را بر اساس یک Dimension واحد خرد می‌کنید. در متابیس، Pieها در واقع Donut هستند. **Sunburst chart** نسخهٔ چندبعدی Pie است که چند Breakout را در حلقه‌های تو در تو نمایش می‌دهد.

![Pie and sunburst charts](../images/pie-sunburst-demo.png)

## چه زمانی از Pie یا Sunburst استفاده کنیم؟

Pie chart برای نمایش یک Metric به‌عنوان «بخشی از کل» مناسب است. Sunburst برای داده‌های سلسله‌مراتبی یا تو‌در‌تو، یا زمانی که چند سطح دسته‌بندی دارید، کاربرد دارد.

Pie و Sunburst زمانی بهترین کارایی را دارند که تعداد مقدارهای Breakout کم باشد، مثل حساب‌ها بر اساس Plan. این نمودارها را فقط باید برای Metricهایی استفاده کنید که مجموع‌شان ۱۰۰٪ می‌شود (مثل Count یا Sum).

Pie بیشتر برای انتقال حسی کلی از نسبت اندازهٔ Breakoutها مناسب است. اگر مقایسهٔ دقیق بین مقادیر مهم است، یا بیش از چند Breakout دارید (مثلاً مشتریان بر اساس کشور)، معمولاً بهتر است از Bar یا Row chart استفاده کنید.

## ساخت Pie یا Sunburst

Pie و Sunburst یک Metric تکی را در یک یا چند Breakout نمایش می‌دهند. هر دو نوع (Pie/Donut و Sunburst) از گزینهٔ "Pie chart" در سایدبار Visualization قابل انتخاب‌اند.

برای یک Pie ساده، به کوئری‌ای نیاز دارید که یک Breakout و یک Metric داشته باشد، مثلاً:

| Type | Sum of Quantity |
| ---- | --------------- |
| Cat  | 23              |
| Bird | 14              |
| Dog  | 35              |

اگر کوئری شما چند Metric داشته باشد، در [تنظیمات نمودار](#pie-and-sunburst-chart-settings) می‌توانید مشخص کنید کدام Metric روی نمودار نمایش داده شود.

![Plain pie](../images/plain-pie.png)

برای Sunburst (Pie چندبعدی)، به کوئری‌ای با حداکثر سه Breakout و یک Metric عددی نیاز دارید. در این‌جا مثالی از خروجی کوئری با دو Breakout `Type` و `Subtype` را می‌بینید:

| Type | Subtype | Sum of Quantity |
| ---- | ------- | --------------- |
| Cat  | Siamese | 4               |
| Cat  | Persian | 12              |
| Cat  | Bengal  | 7               |
| Bird | Crow    | 5               |
| Bird | Parrot  | 9               |
| Dog  | Corgi   | 10              |
| Dog  | Poodle  | 13              |
| Dog  | Bulldog | 7               |
| Dog  | Husky   | 5               |

در [تنظیمات دادهٔ نمودار](#data-settings) می‌توانید مشخص کنید هر Breakout روی حلقهٔ داخلی، میانی یا بیرونی Sunburst قرار بگیرد. اگر کوئری چند Metric داشته باشد، می‌توانید انتخاب کنید کدام Metric نمایش داده شود. نمودار Sunburst زیر بر اساس جدول مثال بالا ساخته شده است:

![Sunburst with two levels](../images/sunburst-two-levels.png)

You don't need to include the percentages in your query. Metabase will automatically compute the percentage of the total for each value of the metric (for example, Metabase will compute that 23 Cats make up 31.9% of all pets).

## Pie and sunburst chart settings

To open the chart options, click on the gear icon at the bottom left of the screen. This will open a settings sidebar with **Data** and **Display** tabs.

### Data settings

You can rename, reorder, or remove slices from the inner ring of a sunburst or pie chart. To reorder the pie slices, drag the cards with the slice names. To rename the slices, click on three dots next to the series name and enter a new name.

To change the color of the pie slices, click on the color circle next to the slice's name. In sunburst charts, you can only change the color of the slices in the _inner_ ring (the slices in the outer rings inherit the colors of their parent slices).

If your query has multiple metrics (columns), you can pick the column that should be depicted on the chart in the **Measure** dropdown.

To format the total displayed in the middle of the chart, click on the three dots next to the metric name in the **Measure** setting. The measure format options — including the "number of decimal places" option — will only apply to the total, and not to the percentage values or labels. To configure the display of the percentage values and labels, go to the [display settings](#display-settings) tab.

![format sunburst](../images/sunburst-metric-options.png)

### Display settings

You can configure whether to show:

- The legend next to the chart.
- The total in the center of the chart. The format of the total can be changed in the [data settings](#data-settings).
- The labels for the pie slices. The labels for the inner ring slices can be changed in the [data settings](#data-settings).

  For sunburst charts with multiple breakouts, only the inner ring breakout will be displayed in the legend. By default, "Show labels" will be turned on. If you turn off "Show labels", the only way to distinguish slices on a sunburst chart will be to hover over them.

- The percentage values for the slices. If you choose to display percentages **In the legend**, but then toggle off **Show legend**, the percentage values won't show up on the chart.

  You can always see percentage values for any slice by hovering over the slice.

To change the number of decimal places in the percentage values, use the **Number of decimal places** setting in the **Display** tab. If you want to change the number of decimal places for the total in the center of the chart, go to [data settings](#data-settings).

![Settings showcase](../images/sunburst-settings-showcase.png)

To make the chart more legible, you can group slices smaller than a certain percentage into one slice by adjusting **Minimum slice percentage**. You'll be able to see the categories and values in the **Other** slice by hovering over it:

![Other slice](../images/pie-other-slice.png)

Currently, you can't change the color or label of the **Other** slice.

## Limitations and alternatives

Consider using a bar or row chart (or a [stacked bar chart](line-bar-and-area-charts.md#stacked-bar-chart)) or a [pivot table](pivot-table.md) instead of a pie or sunburst chart in the following cases:

- Your data has more than three breakouts
- Your metrics don't add up to 100% (for example, average rating - prefer a gauge chart in that case)
- You have a lot of categories in each breakout
