---
title: "How to visualize time-series data: best practices"
description: "Learn about time-series data and how to visualize it. With best practices and a handy cheat sheet."
url: "https://www.metabase.com/blog/how-to-visualize-time-series-data"
canonical: "how-to-visualize-time-series-data.html"
image: "https://www.metabase.com/images/how-to-visualize-time-series-data-og.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "How to visualize time-series data: best practices"
ogDescription: "Learn about time-series data and how to visualize it. With best practices and a handy cheat sheet."
ogImage: "https://www.metabase.com/images/how-to-visualize-time-series-data-og.jpg"
ogUrl: "https://www.metabase.com/blog/how-to-visualize-time-series-data"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Alex Yarosh"
twitterTitle: "How to visualize time-series data: best practices"
twitterDescription: "Learn about time-series data and how to visualize it. With best practices and a handy cheat sheet."
twitterImage: "https://www.metabase.com/images/how-to-visualize-time-series-data-og.jpg"
author: "Alex Yarosh"
datePublished: "2024-11-20T08:00:00+08:00"
dateModified: "2024-11-20T08:00:00+08:00"
category: "Analytics and BI"
---

Here’s a guide to best practices in time\-series visualization, covering chart selection, data structure, and advanced techniques. We’ll skip the mechanics of creating charts, and focus on the principles behind building clear and impactful time\-based visualizations,

This article includes stuff we covered in our [webinar on visualizing time\-series data](../events/visualizing-time-series-data-in-metabase.html).

We also made a [time\-series cheat sheet](https://metaba.se/time-series-dashboard) dashboard with everything we’ve discussed about time\-series visualizations, from selecting the right chart type to structuring your data for comparison across time periods. Bookmark it and use it as a reference for your next time\-series visualization.

## What is time-series data?

Time\-series data refers to a sequence of data points that include datetimes. Unlike other types of data, time series data is ordered chronologically, where each data point represents a specific moment in time, such as hourly, daily, or monthly measurements.

Examples of time\-series data include stock prices, weather temperatures, sales figures, or economic indicators like GDP. These data points are typically grouped by a particular time granularity, like daily sales or weekly temperature readings.

## Types of time-series visualizations

Charts for visualizing time\-series data include:

- **Line Charts** track trends or data progression over time.
- **Bar Charts** compare values across time intervals, especially for discrete data points.
- **Area Charts** illustrate cumulative totals over time.
- **Trend Charts** analyze performance changes by comparing values to previous periods.
- **Waterfall Charts** display sequential changes, though they’re more niche in application.

![Types of time series visualizations](../images/posts/types-time-series-visualizations.png)

![Revenue by category](../images/posts/revenue-by-category.png)

## Best practices for time-series charts

**Focus on a single message**: Each chart should communicate one key insight. For multiple insights, use separate visualizations. Different charts highlight different parts of your data, so start by structuring the results table to match your goal.

Consider:

- “How should the results look for this chart?” For comparisons, include values for current, last week, and last month in your table.
- “How do I control which month shows in a trend?” Make sure the target month is at the top of the table.

![Same table, different presentations](../images/posts/same-table-different-presentations.png)

**Consider data shape**: Data structure informs the best chart type.

**One metric over time**

![One metric over time](../images/posts/time-series-visualizations.png)

**Multiple metrics over time**

![Multiple metrics over time](../images/posts/time-series-visualizations-multiple-metrics-over-time.png)

**One metric with a breakout**

![One metric with a breakout](../images/posts/time-series-visualizations-02.png)

Different charts emphasize different aspects of data, so pick the right chart for the aspect that you want to communicate.

**Current state**

**Evolution**

**Magnitude**

**Proportion**

- Area charts \(and bar charts\) work better for showing *size* instead of trend.
- Stacked area charts can be used to show how the shares of a metric’s breakouts change over time.
- Don’t make conclusions about change in the *metric* itself from stacked area charts \- they can be misleading! Stacked bar charts are only meant to show the change in proportions of the metric’s breakouts.

**Accumulation**

**Use `Offset` for comparisons**: The [offset function](../docs/latest/questions/query-builder/expressions/offset.html) in Metabase allows you to compare a metric’s value in the current row to its value in a previous row. For example, if you’re grouping by month, setting the offset to \-12 will show the metric’s value from 12 months prior. You can use `Offset` to add columns to a row that include values from previous rows, which makes it easier to compare metrics like year\-over\-year changes in a single chart.

![Offset function in Metabase](../images/posts/using-offset-metabase.png)

Now that you’ve got the basics down, it’s time to get hands\-on and start building your own time\-series charts with [Metabase](../cloud/login.html). Go ahead, create something awesome, and share it with the community!

## More data visualization resources

- [Top 5 Dashboard fails \(and how to fix them\)](top-5-dashboard-fails.html)
- [Time\-series visualizations cheat sheet](https://metaba.se/time-series-dashboard)
- [Video \- Visualizing time\-series data in Metabase](../events/visualizing-time-series-data-in-metabase.html)
- [Data visualization tips for the non\-analyst](visualization-mistakes.html)
- [How to build better line and bar charts](how-to-build-better-line-and-bar-charts.html)
- [Maps data visualizations: best practices](maps-data-visualization.html)
- [The perfect chart: choosing the right visualization for every scenario](the-right-visualization.html)

<!-- blog-related-posts -->

## You might also enjoy

<!-- blog-related-post-1 -->

![How to build sales dashboards that sales teams actually use Image](../images/posts/sales-dashboards/sales-dashboard-og.jpg)

### [How to build sales dashboards that sales teams actually use](how-to-build-sales-dashboards.html)

Build a sales dashboard your team will actually use. See 10 key metrics, tips, and a live example in Metabase.

*Jul 09, 2025 • Analytics and BI • Margaret Rimek • 4 min read*

---

<!-- blog-related-post-2 -->

![How to build sales dashboards that sales teams actually use Image](../images/posts/sales-dashboards/sales-dashboard-og.jpg)

### [How to build sales dashboards that sales teams actually use](how-to-build-sales-dashboards.html)

Build a sales dashboard your team will actually use. See 10 key metrics, tips, and a live example in Metabase.

*Jul 09, 2025 • Analytics and BI • Margaret Rimek • 4 min read*

---

<!-- blog-related-post-3 -->

![What is embedded analytics? Image](../images/posts/what-is-embedded-analytics/what-is-embedded-analytics.png)

### [What is embedded analytics?](what-is-embedded-analytics.html)

Embedded analytics means giving your users access to charts, metrics, and reports directly inside your product, so they can explore and act on their data without needing to leave your app or rely on someone else for answers.

*May 15, 2025 • Analytics and BI • Alex Yarosh • 13 min read*

---

<!-- blog-related-post-4 -->

![What is embedded analytics? Image](../images/posts/what-is-embedded-analytics/what-is-embedded-analytics.png)

### [What is embedded analytics?](what-is-embedded-analytics.html)

Embedded analytics means giving your users access to charts, metrics, and reports directly inside your product, so they can explore and act on their data without needing to leave your app or rely on someone else for answers.

*May 15, 2025 • Analytics and BI • Alex Yarosh • 13 min read*

<!-- /blog-related-posts -->
