---


title: "Master the bar chart"
description: "Create a bar chart and customize it with visualization settings."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/visualization/bar-charts
  - /learn/basics/visualizing-data/bar-charts
  - /learn/visualization/bar-charts
toc:
  - id: "master-the-bar-chart"
    title: "Master the bar chart"
    level: 1
    href: "#master-the-bar-chart"
  - id: "create-a-bar-chart"
    title: "Create a bar chart"
    level: 2
    href: "#create-a-bar-chart"
  - id: "bar-chart-settings"
    title: "Bar chart settings"
    level: 2
    href: "#bar-chart-settings"
  - id: "data"
    title: "Data"
    level: 2
    href: "#data"
  - id: "display-settings"
    title: "Display settings"
    level: 2
    href: "#display-settings"
  - id: "add-a-goal-line"
    title: "Add a goal line"
    level: 3
    href: "#add-a-goal-line"
  - id: "show-values"
    title: "Show values"
    level: 3
    href: "#show-values"
  - id: "add-a-trend-line"
    title: "Add a trend line"
    level: 3
    href: "#add-a-trend-line"
  - id: "stacking-options"
    title: "Stacking options"
    level: 3
    href: "#stacking-options"
  - id: "axes"
    title: "Axes"
    level: 2
    href: "#axes"
  - id: "label"
    title: "Label"
    level: 3
    href: "#label"
  - id: "show-lines-and-marks"
    title: "Show lines and marks"
    level: 3
    href: "#show-lines-and-marks"
  - id: "scale"
    title: "Scale"
    level: 3
    href: "#scale"
  - id: "stacked-bar-charts"
    title: "Stacked bar charts"
    level: 2
    href: "#stacked-bar-charts"
  - id: "don-t-stack"
    title: "Don’t stack"
    level: 3
    href: "#don-t-stack"
  - id: "stack"
    title: "Stack"
    level: 3
    href: "#stack"
  - id: "stack-100"
    title: "Stack-100%"
    level: 3
    href: "#stack-100"
  - id: "further-reading"
    title: "Further reading"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Querying and dashboards"
    href: "../index.html"
  - title: "Visualizing data"
    href: "../visualization.html"
---

# Master the bar chart

Create a bar chart and customize it with visualization settings.

We’ll walk through [creating a bar chart](#create-a-bar-chart) and [editing that bar chart’s settings](#bar-chart-settings), then talk about [stacked bar charts](#stacked-bar-charts) and when we might want to use them.

## Create a bar chart

You can follow along using Metabase’s [Sample Database](../../../../glossary/sample-database.html). Select **\+ New** \> **Question** \> **Raw data** \> **Sample database**. Choose the Sample Database’s `Orders` table as your data. Next, summarize the count of rows and group by Product \-\> Category.

![Notebook of question that summarizes the count of orders grouped by product category.](../../../images/master-the-bar-chart-visualization/notebook.png)

Click **Visualize**, and Metabase will present the data as a bar chart:

![The humble bar chart.](../../../images/master-the-bar-chart-visualization/bar-chart.png)

## Bar chart settings

To customize the chart, click on the **gear** icon at the bottom left of the chart to open the settings sidebar, within the settings, you’ll find the following tabs:

- [Data](#data)
- [Display](#display-settings)
- [Axes](#axes)

## Data

Here we can format and style our bar chart by clicking the `...` under Y\-axis.
To change bar colors, click the color swatch and choose from the palette.

Customize your chart in the **Formatting tab** by adjusting numbers, separators, decimals, and scale. You can also add Prefix/Suffix as needed. In the **Style tab**, select colors, modify labels, choose a chart type \(line, area, or bar\), and position the Y\-axis according to your chart preferences.

![formart and style.](../../../images/master-the-bar-chart-visualization/format-style.png)

## Display settings

In the Settings \> Display section, you can customize your chart in several ways:

### Add a goal line

This specifies where you want the values to be. Metabase can [alert](../../../../docs/latest/questions/alerts.html) you when the values exceed \(or drop below\) that goal. For example, you can add a goal line at 5500 and name it ‘Arbitrary Sales Goal’.

### Show values

Toggling on ‘Show values’ places the count values above each column.

![Adding a goal line for our arbitrary sales goal.](../../../images/master-the-bar-chart-visualization/goal-line.png)

### Add a trend line

When your data is summarized and grouped by a datetime field, you can add a trend lie. The trend line shows the general direction that your data is heading in over time. To add a trend line, simply toggle on the ‘Trend line’ option.

### Stacking options

When creating bar or area charts with multiple series, you can choose how the series are displayed with the stacking options. You can choose not to stack the series, stack them, or stack them at 100%.
We can also set the display to a [stacked bar chart](#stacked-bar-charts), which we’ll get into in a bit.

## Axes

Select `Axes` in the **Settings sidebar**.

Here we can specify how we want our table organized.

### Label

Here we can hide or customize axes labels.

### Show lines and marks

With the **Show lines and marks** options we can change the way the categories and quantities are represented on each axis. The options for the y\-axis are hide and show, while the x\-axis has several more:

- Hide
- Show
- Compact
- Rotate 45˚
- Rotate 90˚

### Scale

We’ll find three Y\-axis scaling options:

- Linear
- Power
- Log

The linear option is selected automatically, and for our example provides the most accurate representation of our data, so we’ll keep it.

## Stacked bar charts

If the data we’re visualizing can be broken down into multiple categories within a whole, we could consider using a stacked bar chart. A 100% stacked bar chart is similar, but displays those parts as relative percentages, so every bar spans the full y\-axis.

To create a stacked bar chart, click on **Settings** \> **Display** and select either **Stack** or **Stack \- 100%**.

Let’s say we wanted to see how many orders were placed per product category across different quarters of a year. Here’s that example displayed in three different bar chart styles:

### Don’t stack

![An unstacked multi-series bar chart.](../../../images/master-the-bar-chart-visualization/multi-series-bar-chart.png)

### Stack

![A standard stacked bar chart.](../../../images/master-the-bar-chart-visualization/stacked-bar-chart.png)

### Stack-100%

![A 100% stacked bar chart.](../../../images/master-the-bar-chart-visualization/stacked-100-bar-chart.png)

Explore different display settings to tailor the visualization to your data and team preferences.

## Further reading

- [Visualization options](../../../../docs/latest/questions/visualizations/visualizing-results.html#line-charts)
- [Setting default formatting for your data](../../../../docs/latest/data-modeling/formatting.html)
- [Create charts with explorable data](../questions/drill-through.html)

[
      
        

      
      
        
        
      
    ](line-charts.html)
[
      
        
        
      
      
        

      
    ](histograms.html)
