---


title: "Overview of time series analysis"
description: "An overview of methods you can use to track progress, estimate impact, and more."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/time-series/start
  - /learn/time-series/start
toc:
  - id: "overview-of-time-series-analysis"
    title: "Overview of time series analysis"
    level: 1
    href: "#overview-of-time-series-analysis"
  - id: "what-is-time-series-analysis"
    title: "What is time series analysis?"
    level: 2
    href: "#what-is-time-series-analysis"
  - id: "trends"
    title: "Trends"
    level: 2
    href: "#trends"
  - id: "analyzing-trends-in-metabase"
    title: "Analyzing trends in Metabase"
    level: 3
    href: "#analyzing-trends-in-metabase"
  - id: "rolling-metrics"
    title: "Rolling metrics"
    level: 2
    href: "#rolling-metrics"
  - id: "kpis"
    title: "KPIs"
    level: 2
    href: "#kpis"
  - id: "measuring-ltv-with-metabase"
    title: "Measuring LTV with Metabase"
    level: 3
    href: "#measuring-ltv-with-metabase"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Querying and dashboards"
    href: "../index.html"
  - title: "Time series analysis"
    href: "../time-series.html"
---

# Overview of time series analysis

An overview of methods you can use to track progress, estimate impact, and more.

## What is time series analysis?

A time series is a dataset where every row represents an event or measurement at a different point in time. For example, all of the tables in the Sample Database are time series datasets, because every row has a “Created At” timestamp. [Fact tables](../data-modeling/fact-table.html) can also be used for time series analysis.

Time series analysis combines metrics and data visualizations to answer business questions like:

- How is my revenue growing, shrinking, or plateauing over time?
- When do my customers come back \(or not\)?
- Are my customers getting more value from my business over time?

## Trends

A trend tracks a [measure](../../../grow-your-data-skills/data-fundamentals/dimensions-and-measures.html) or metric over different time periods.

When analyzing trends, you’ll want to pick a time period that matches your business. For example, if you post fresh content to a blog each week, you’ll look at weekly audience engagement metrics. If your business uses a monthly subscription model, you’ll track your subscription revenue monthly.

### Analyzing trends in Metabase

- [Comparing time periods](time-series-comparisons.html) shows you how to get the total revenue one year at a time, so that you can compare the revenue year over year. Month over month and season over season comparisons are also covered in this tutorial.
- [Visualizing time periods](compare-times.html) gives you tips on how to organize and present trends from different questions on a single dashboard.
- [Rates of change](time-series-comparisons.html) calculates a percentage metric over all of the months in a dataset and visualizes the trend as a line chart. You’ll also learn how to display extra context in the chart tooltip.
- [Dates in SQL](time-series-comparisons.html) is the SQL companion to [Rates of change](time-series-comparisons.html) .
- The [Trend](../../../../docs/latest/questions/visualizations/visualizing-results.html#trends) visualization type is a snapshot of the delta from the previous time period to the current time period.

## Rolling metrics

A trend with a rolling metric calculates the metric over a shifting window. For example, instead of calculating revenue each calendar month, you’d calculate revenue over shifting 30\-day periods:

- Jan 1 to Jan 30
- Jan 2 to Jan 31
- Jan 3 to Feb 1
- and so on, until Jan 28 to Feb 28

The most common type of rolling metric is a rolling average \(sometimes called a moving average\). Rolling metrics are useful because they smooth out seasonality and noise in your data.

For example, churn rate is commonly calculated as a rolling metric, because subscription cancellation can happen at any time in the calendar month.

## KPIs

Some metrics summarize a group of numbers better than an average or ratio. These metrics are often used as Key Performance Indicators \(KPIs\).

For example, Customer Lifetime Value \(CLV or LTV\) is a metric that estimates customer value using a combination of average historical spend and *predicted* future spend.

The trend in a metric like LTV can give you a better representation of how your business is doing \(compared to an average or ratio\), because the LTV calculation is based on more information.

### Measuring LTV with Metabase

- [Calculating LTV: are you doing it wrong?](../../../../blog/calculating-ltv.html) is a light primer on when to calculate LTV, and how to interpret the results.
- [Calculating LTV using SQL](../../../grow-your-data-skills/learn-sql/working-with-sql/ltv-with-metabase.html) is an advanced SQL tutorial that calculates the monthly change in LTV using revenue, active subscriptions, and churn rate.

[
      
        
        
      
      
        

      
    ](time-series-comparisons.html)
