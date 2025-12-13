---
title: "A product manager's guide to getting started with Metabase"
description: "You may have plenty of product management tools at your disposal, but really getting to know your product data and customers is still a challenge. Learn how Metabase can help your product team make smarter data-driven decisions without relying exclusively on event instrumentation."
url: "https://www.metabase.com/blog/product-team-guide-to-metabase"
canonical: "product-team-guide-to-metabase.html"
image: "https://www.metabase.com/images/posts/A-product-managers-guide-to-getting-started-with-Metabase.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "A product manager's guide to getting started with Metabase"
ogDescription: "You may have plenty of product management tools at your disposal, but really getting to know your product data and customers is still a challenge. Learn how Metabase can help your product team make smarter data-driven decisions without relying exclusively on event instrumentation."
ogImage: "https://www.metabase.com/images/posts/A-product-managers-guide-to-getting-started-with-Metabase.jpg"
ogUrl: "https://www.metabase.com/blog/product-team-guide-to-metabase"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "A product manager's guide to getting started with Metabase"
twitterDescription: "You may have plenty of product management tools at your disposal, but really getting to know your product data and customers is still a challenge. Learn how Metabase can help your product team make smarter data-driven decisions without relying exclusively on event instrumentation."
twitterImage: "https://www.metabase.com/images/posts/A-product-managers-guide-to-getting-started-with-Metabase.jpg"
author: "The Metabase Team"
datePublished: "May 27, 2022"
category: "Using Metabase"
---

As a product manager, you’re always on the lookout for better ways to learn about your users, prioritize features, and measure the success of your product as a whole. Funnels and user journeys are your bread and butter. And despite the power of event instrumentation and behavioral analytics, measuring product success can be an exercise in frustration, especially if you’re storing product data separately from data about your buyers and users.

[Metabase](../pricing/index.html) could be what you’re looking for. Metabase is an open\-source [BI tool](../glossary/bi-tool.html) that puts your data in the hands of everyone at your organization, not just the analysts. With Metabase, your team can analyze and compare different data sources in one centralized place — like quickly loading data from Zendesk, Shopify, Intercom, GitHub, and so on — so you can track the metrics you need to gain a more comprehensive understanding of your product.

## Why Metabase for product teams

### Use your production database as a source of knowledge

Event instrumentation is a powerful tool, but requires some serious planning and discipline. Reality occasionally has other plans, meaning that upfront instrumentation isn’t always possible, and event properties are often not clean enough. And even once you have that tracking in place, it can take a while to accumulate a useful baseline of data that your team can draw on to make decisions.

With Metabase, you don’t have to rely exclusively on instrumented events to measure the success of a product feature or decision your team made. Instead, you can identify trends and draw conclusions directly from your preexisting application database to understand user behavior. You can learn from that data no matter how far back as it goes, not just from the point you started that event instrumentation. Less meticulous structuring in advance, more exploration. As an added bonus, you get to own the data that’s yours, keeping everything within your data warehouse instead of relying on a black\-box product analytics tool.

### Drill through your data to evaluate feature adoption

Metabase’s [drill\-through](../learn/metabase-basics/querying-and-dashboards/questions/drill-through.html) functionality can be a game\-changer for your product team when it comes to gauging the success of a feature. By drilling through your data allows you to really dig into the fine\-grain detail of user behavior. These explorations into your data can also signal which product areas are worth investing in or which features you may want to kill. Aggregating and drilling into your data makes this kind of evaluation a lot more doable, without needing to establish those structures or events ahead of time.

For example, you could use Metabase to identify when a feature has been used \(such as uploading a photo or creating an entity\), aggregate those results, filter them by a certain number of times that action happened, and then drill through the data to see the actual users who uploaded a photo more than 25 times.

### Find sources for qualitative research

Behavioral analytics can’t solve every problem — at some point you’ll need to get out there and actually talk to the people who buy and use your product. This qualitative research can be invaluable in gaining fresh perspective about how those customers interact with your product, what it is they want, and any pain points they may face. But if your product data is siloed from customer data, even figuring out who to talk to can be a challenge.

Metabase can make identifying those sources a lot more straightforward, enabling your team to see exactly who uses a feature most often so you can reach out to those customers for an interview. Maybe you’re looking to identify commonalities too — like seeing if a new feature appeals to customers with a certain number of users, clustered in a specific region, or according to some other unifying factor.

### Monitor your product with alerts

[Alerts](../docs/latest/questions/alerts.html) in Metabase are a simple but effective way to monitor an area of your product. For your team, this may mean configuring Metabase to send an alert every time a user fills out a survey or an alert signaling that no users have logged in via Google for more than eight hours.

## Getting started with Metabase

At this point, Metabase may sound well and good, but you’re probably wondering how much setup is involved, and how Metabase even fits into your organization’s existing configuration. That [data stack](the-modern-data-stack.html) may fall anywhere from simple to complex, with plenty of moving parts and pipeline services.

Setting up Metabase is something doable in an afternoon, *not* six months. Here’s a quick rundown of what you’ll need to get up and running:

1. A [data source](../data-sources/index.html): this could be a read\-only copy of your production database or a more complex [data warehouse](../glossary/data-warehouse.html) setup.
2. Someone with credentials for connecting to your data source, like an analyst or engineer, who can [install Metabase](../docs/latest/installation-and-operation/installing-metabase.html) \(or set up [Metabase Cloud](../pricing/index.html)\) and [connect your data source](../docs/latest/databases/connecting.html). They’ll thank you — since Metabase enables teams to answer their own questions, that analyst or engineer will save a lot of time not having to “pull the data” every week for your team.

And… that’s pretty much it. Metabase doesn’t host any of your data, and instead sits on top of your database as an analytics layer. We know that product teams move fast — you don’t have the time to spend weeks vetting and configuring an analytics tool. This is part of why people [love](../love.html) Metabase: setup is quick and straightforward, and everybody can get their hands on the data right away.

## Further reading

- [Getting started with Metabase](../learn/metabase-basics/getting-started/ask-a-question.html)
- [A tour of Metabase](../learn/metabase-basics/overview/tour-of-metabase.html)

<!-- blog-related-posts -->

## You might also enjoy

<!-- blog-related-post-1 -->

![Set up a basic pipeline for log analysis Image](../images/posts/best-practices-logging-pipeline.jpg)

### [Set up a basic pipeline for log analysis](set-up-a-logging-pipeline-for-analysis.html)

You can use a BI tool for small scale log analysis with data visualizations. Here are a few tips and suggestions to get started.

*Mar 04, 2024 • Using Metabase • The Metabase Team • 4 min read*

---

<!-- blog-related-post-2 -->

![Set up a basic pipeline for log analysis Image](../images/posts/best-practices-logging-pipeline.jpg)

### [Set up a basic pipeline for log analysis](set-up-a-logging-pipeline-for-analysis.html)

You can use a BI tool for small scale log analysis with data visualizations. Here are a few tips and suggestions to get started.

*Mar 04, 2024 • Using Metabase • The Metabase Team • 4 min read*

---

<!-- blog-related-post-3 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [Embed a Metabase dashboard in Zendesk](embed-metabase-in-zendesk.html)

Get the customer data and insights you need automatically filtered and ready for use within your support tickets. You can also embed a dashboard in Salesforce, Stripe, Jira, or platforms that allow embedding URLs.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

---

<!-- blog-related-post-4 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [Embed a Metabase dashboard in Zendesk](embed-metabase-in-zendesk.html)

Get the customer data and insights you need automatically filtered and ready for use within your support tickets. You can also embed a dashboard in Salesforce, Stripe, Jira, or platforms that allow embedding URLs.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

<!-- /blog-related-posts -->
