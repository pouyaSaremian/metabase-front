---
title: "Calculating LTV: are you doing it wrong?"
description: "You've heard that customer lifetime value (LTV) is an important metric, but how exactly are you supposed to know what formula to use? This article offers a simple LTV formula for SaaS companies, along with use cases for the metrics and common pitfalls people encounter when working with LTV."
url: "https://www.metabase.com/blog/calculating-ltv"
canonical: "calculating-ltv.html"
image: "https://www.metabase.com/images/posts/Calculating-LTV_are-you-doing-it wrong_.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "Calculating LTV: are you doing it wrong?"
ogDescription: "You've heard that customer lifetime value (LTV) is an important metric, but how exactly are you supposed to know what formula to use? This article offers a simple LTV formula for SaaS companies, along with use cases for the metrics and common pitfalls people encounter when working with LTV."
ogImage: "https://www.metabase.com/images/posts/Calculating-LTV_are-you-doing-it wrong_.jpg"
ogUrl: "https://www.metabase.com/blog/calculating-ltv"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Bruno Bergher"
twitterTitle: "Calculating LTV: are you doing it wrong?"
twitterDescription: "You've heard that customer lifetime value (LTV) is an important metric, but how exactly are you supposed to know what formula to use? This article offers a simple LTV formula for SaaS companies, along with use cases for the metrics and common pitfalls people encounter when working with LTV."
twitterImage: "https://www.metabase.com/images/posts/Calculating-LTV_are-you-doing-it wrong_.jpg"
author: "Bruno Bergher"
datePublished: "Apr 25, 2022"
category: "Analytics and BI"
---

## What is customer LTV?

Despite the intimidating number of ways that you can calculate **lifetime value** \(LTV, sometimes called customer lifetime value and abbreviated as CLTV or CLV\), they’re all trying to get you the same result: the average total that a customer will spend over the span of their relationship with a company. Knowing your organization’s LTV and how it changes over time should motivate you to think about customer relationships on a longer\-term scale, rather than focusing only on quick gains.

Don’t jump to figuring out an LTV formula if you’re just getting your startup off the ground; while you don’t need to be profitable yet, you can’t calculate LTV without having some real paying customers.

### Basic LTV formula for SaaS companies

Calculating LTV won’t look the same for every organization — that’s part of why it can be such a tricky formula to nail down. For subscription\-based companies \(like a SaaS startup\), you’ll need to know your **churn rate** and your **average revenue per customer**, user, or account in a billing cycle \(known as either ARPC, ARPU, or ARPA — itself a calculated [metric](../glossary/metric.html), determined by dividing monthly recurring revenue \[MRR\] by the number of active subscriptions\).

Once you know your ARPC, simple LTV can be calculated by dividing it by your customer churn rate:

![ARPC and LTV formulas](../images/posts/calculating-ltv/ltv-formulas.png)

Churn rate plays a bigger role in this equation than any other variable. If your customers never churn — that is, your net retention rate \(NRR\) remains near or above 100 — they theoretically never stop paying, and that LTV skyrockets. Practically speaking, this means that retaining customers will have a much greater long\-term impact than convincing those customers to upgrade.

Let’s say you have an MRR of $500,000, 1000 active subscriptions, and a churn rate of 10%. This means your average revenue per customer in each billing cycle is $500. To calculate LTV using this basic formula, you’ll do the following:

`500 / 0.10 = 5000`

So your average customer will spend $5000 over the entire course of their subscription. Now, if you managed to improve your churn rate, dropping it to 7%, your LTV would change accordingly \(and significantly\):

`500 / 0.07 = 7143`

These retention improvements compound — in this case, a 30% improvement in retention \(from 10% churn to 7%\) leads to a much greater \(42%\) improvement in LTV.

## LTV use cases

Once you have it in hand, LTV can guide decisions like:

- **Prioritizing marketing efforts** – Maybe you’re considering an ad buy, but need a sense of how much you can spend to acquire a customer. Calculating LTV according to different channels \(like email, search, or social media\) can indicate where it might be best to place those ads. And after the campaign concludes, you can compare how those ad buys affected LTV.
- **Advocating for a product feature** – If you know that some customers churned because your product lacks a specific feature, calculating the LTV of that customer segment can help decision\-makers justify whether that feature is worth developing for a future release.
- **Budgeting for team expansion** – A higher LTV means that your org can spend more to acquire new customers, like in bringing additional team members onboard.

Part of what’s beautiful about LTV is that it can help a team prioritize work for existing customers above new features for new customers. People’s instincts are usually that to grow revenue, you have to build new things for a broader base of users, but this calculation can help you justify investing in improving current use cases.

## LTV setbacks: where organizations go wrong

### Problem: there are too many different ways to calculate LTV

**Solution**: Start with a simple calculation and refine it over time.

Don’t spend too much time or effort on a complex formula at first; go with something simple at first \(like this [basic formula](#basic-ltv-formula-for-saas-companies) above\). As with any useful metric, you *should* be evaluating and refining your formula as your company grows, like building on your calculation to consider gross profit margins and account expansion.

These more complex formulas can provide more precise results, but that’ll take extra analyst hours. If you just want to get some idea of your LTV right away, start with a basic calculation.

Beyond tweaking the formula, you’ll probably also want to [break out](../glossary/breakout.html) that number by different subscription levels or customer cohorts.

### Problem: You’re unsure how healthy your LTV really is

**Solution**: Compare LTV to your **customer acquisition cost \(CAC\)**.

LTV won’t be of much use in a vacuum; you also need to know how much it costs to acquire customers. A good rule of thumb here is to aim for an LTV to CAC ratio of 3:1 or better, to make sure you’re able to maintain healthy profit margins and set yourself up for sustainable growth. That ratio will vary depending on how you’ve segmented LTV, as some channels will bring in more value than others.

### Problem: LTV fluctuates too much to make a decision

**Solution**: Be patient, and track the trend of your LTV rather that the individual ups and downs.

LTV relies on historical data. If you’re a new organization with a smaller customer base and less data to draw on, don’t be surprised when that number sees big changes every month. Fortunately, your LTV will get more stable over time as your data grows, it just might be a while before you can rely on LTV as a steady metric.

In the meantime, it’ll help to use a [trend line](../learn/metabase-basics/querying-and-dashboards/visualization/line-charts.html#trend-lines-and-goal-lines) when plotting LTV over time, rather than focusing too much on monthly swings.

### Problem: stakeholders don’t understand how you calculate LTV

**Solution**: Work on your messaging around LTV and consider using a simpler formula.

Complex metrics can be confusing, especially those involving rates of change and even more so if you’re not someone who spends their day steeped in numbers. When your team opts for a complex LTV model, you’re trading that added precision for accessibility.

If you’re struggling to effectively communicate in human terms where that LTV figure came from, the metric probably won’t be of much use in the long run. In this sense, the messaging around LTV can be more important than the exact formula itself. Talking up the importance of customer retention can be helpful here, given its impact in LTV.

### Problem: no one knows if your LTV actually matches reality

**Solution**: Institute regular back\-testing to measure the accuracy of your calculations.

As with many common business metrics, LTV is a forecast — there’s always going be some element of guesswork. Back\-testing your calculation by comparing the predicted LTV to the amount that actual churned customers spent at your company \(like with weighted averages of spend across all churned accounts\) can give you a good idea of how close to reality that projected value was within a given time period.

## How to get started

Calculating LTV can get complex really quick, but it doesn’t have to be. To get started, you just need to know your ARPC and churn rate. From there, you can build out more complex models, segment your customers by subscription type or account size, and use those numbers to guide decision\-making. You can even [calculate LTV using SQL queries in Metabase](../learn/grow-your-data-skills/learn-sql/working-with-sql/ltv-with-metabase.html)!

Customer LTV is just one facet of your org’s overall analytics picture, but knowing how to calculate it — and what to do with that number — can set you up for long\-term success.

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
