---
title: "Metabase Community Data Stack Report 2025"
description: "We asked 330+ teams how they build and use their data stacks - from tool choices to AI adoption. Here's what we learned."
url: "https://www.metabase.com/blog/metabase-community-data-stack-report-2025-key-analysis"
canonical: "metabase-community-data-stack-report-2025-key-analysis.html"
image: "https://www.metabase.com/images/og-data-stack-report-2025.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "Metabase Community Data Stack Report 2025"
ogDescription: "We asked 330+ teams how they build and use their data stacks - from tool choices to AI adoption. Here's what we learned."
ogImage: "https://www.metabase.com/images/og-data-stack-report-2025.jpg"
ogUrl: "https://www.metabase.com/blog/metabase-community-data-stack-report-2025-key-analysis"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Alex Yarosh"
twitterTitle: "Metabase Community Data Stack Report 2025"
twitterDescription: "We asked 330+ teams how they build and use their data stacks - from tool choices to AI adoption. Here's what we learned."
twitterImage: "https://www.metabase.com/images/og-data-stack-report-2025.jpg"
author: "Alex Yarosh"
datePublished: "2025-09-03T08:00:00+08:00"
dateModified: "2025-09-03T08:00:00+08:00"
category: "News"
---

We asked 330\+ teams across 50\+ countries how they build and use their data stacks, from tool choices to AI adoption. This is what we learned.

## Building a community resource for data stack decisions in 2025

For this report, we ask teams how they build their data stacks: what tools they choose, what challenges they face, and what their plans for the future are. Our goal is to build a community\-sourced, open source resource that can help people make informed decisions about their data tools and shape modern data practices together.

In 2025, we heard from 330\+ teams of all shapes and sizes \- from two\-person startups to orgs with hundreds of employees \- from 15\+ different industries and 50\+ countries. Teams shared their tool choices, adoption timelines, happiness levels, and how AI is changing the way they work. We compiled all that wisdom into a report \(built with Metabase, of course\) that we’re making available to the community.

If you want to jump straight to the full report, [go forth](../data-stack-report-2025.html).

## Key takeaways

### Most data teams are small, even at large companies

Most companies in our survey started building out their stacks when they reached 20\-50 people \- but then again, most of the companies that we surveyed tend to be around that size as well, so take this with a grain of salt. We found that the sizes of data teams, however, don’t vary much \- most data teams are around 1\-3 people, even in companies with hundreds of employees.

### PostgreSQL dominates both transactional and analytics workloads

Postgres is the most popular transactional database *and* the most popular analytics storage. It’s the database that people choose the most regardless of their main concerns, and the database that most people who are thinking of leaving their current tool are considering as a replacement. It’s also the highest rated transactional database among our respondents, and in top 3 highest rated tools for analytics storage.

### 50% of teams don’t use a data warehouse or a data lake to store their analytics data

Nearly everyone we asked is separating their analytics data from their transactional data, but \- maybe surprisingly \- about half of respondents aren’t using a specialized tool \(like a data warehouse or a data lake\) to store their analytics data. No judgement from us: we’re long believed that [you don’t need a data warehouse](no-data-warehouse-necessary.html) \(until you do\).

Larger companies with larger data teams are more likely to be using data warehouses and data lakes, probably because larger company have more intense data needs.

### ETL and transformation tools as data maturity indicators

About 60% of people using an [ingestion/ETL tool](../learn/grow-your-data-skills/data-landscape/etl-landscape.html), and about 60% are using a modeling/transformation tool \- with most of those people using both tools. Reverse ETL is also up there: if your company has the need for reverse ETL \(which not every company does\), you are likely to also be using ingestion and modeling tools as well. Companies also tend to adopt those around the same time. So if you’re reaching the point in your data journey where you’re considering an ingestion tool \- you might want to evaluate whether it might be the time to add a modeling tool as well.

## What surprised us

### AI trust does not track with AI adoption

People across nearly all industries, roles, and company sizes have adopted AI querying and code generation. That’s not newsworthy in 2025, of course, but what surprised us was how low the trust in the results of AI queries actually was, considering that near\-universal adoption. People in more technical roles tend to trust AI results less.

### Engineers are the hardest to please

Across the entire stack, software and data engineers consistently gave lower ratings to their tools. The only exception to this rule is modeling/transformation tools, where the end users of the data that comes out of those tools \(like product managers\) rate them much lower than other tools, while people handling the day\-to\-day \(data engineers\) \- rate them much higher.

## Individual tools matter less than how they play together

People rated individual tools in their stack generally higher than they rated their stack as a whole. We think it’s because it doesn’t really matter if you have the best tools in the world handling their specific tasks \- if you can’t ensure that the flow of data through the stack is smooth and transparent. The tools with the rating closest to the rating of the whole stack are the ingestion/ETL tools, whose entire purpose is to facilitate the movement of data across the data stack.

## The methodology and analytical process behind the report

It might not surprise you that we, people at Metabase, thought that Metabase was the best tool to analyze and present the results of the survey.

Our survey was conducted through a Typeform form, which gave us the results as a CSV file. Then we uploaded that CSV to [Metabase Cloud Storage](../docs/latest/cloud/storage.html) for analysis \- no need to even set up a database.

The data needed some additional formatting and cleaning \- like relabeling answers for better presentation, accounting for different spellings, or combining answers for different types of analytics storage into a single column \- so we used a [Metabase model](../learn/metabase-basics/getting-started/models.html) to create a cleaned\-up and transformed dataset based on the original CSV.

Metabase has a built\-in [graphical query builder](../learn/metabase-basics/getting-started/ask-a-question.html) which we used to build questions like “what is the average satisfaction by role” based on our augmented CSV model and build visualizations without writing any code.

This was sufficient for all explorations that we were interested in \- except for one \(can you guess which one?\). One question required a more complicated query, so to handle that, we used SQL on our CSV: when you upload data to Metabase Cloud Storage, you’re actually putting it into a [ClickHouse database](../docs/latest/databases/connections/clickhouse.html), so you can use Metabase to query data from your CSV using SQL. In our case of one stray question, we used SQL instead of graphical query builder because we needed to make use of a [`UNION`](../learn/sql/combining-tables/sql-union.html).

Here at Metabase, we have a lot of [strong opinions](top-5-dashboard-fails.html) about [best practices](https://www.youtube.com/playlist?list=PLzmftu0Z5MYFo7k8-GgrYuGq8Vmv1NaqK) for building dashboards, which we applied judiciously to build a dashboard that communicates the insights we found interesting while making sure to avoid misrepresenting the data.

We wanted the dashboard to stand out visually, so we defined a custom color palette and uploaded a custom font to our Metabase instance and used it on the dashboard.

Once the dashboard was ready, we created a [public embed](../learn/metabase-basics/embedding/charts-and-dashboards.html) so that people could access the dashboard without having a Metabase account and just iframe’d the embed into [our website](../data-stack-report-2025.html).

## Explore the full report

You can [check out the full report](../data-stack-report-2025.html), or, if you want to run your own analysis of the survey data, we’ve [set up a repository](https://github.com/metabase/metabase-data-stack) for you that spins up Metabase with the anonymized survey data pre\-loaded, so you can explore it yourself.

Let’s get the conversation rolling. Post your insights and tag us! We love seeing your takeaways in action.

<!-- blog-related-posts -->

## You might also enjoy

<!-- blog-related-post-1 -->

![The Metabase Community Data Stack Survey: by data teams, for data teams Image](../images/posts/metabase-data-stack-survey-2025-blog.jpg)

### [The Metabase Community Data Stack Survey: by data teams, for data teams](metabase-community-data-stack-survey-2025.html)

How the modern data stack is evolving: share yours and see how it compares

*May 11, 2025 • News • Margaret Rimek • 2 min read*

---

<!-- blog-related-post-2 -->

![The Metabase Community Data Stack Survey: by data teams, for data teams Image](../images/posts/metabase-data-stack-survey-2025-blog.jpg)

### [The Metabase Community Data Stack Survey: by data teams, for data teams](metabase-community-data-stack-survey-2025.html)

How the modern data stack is evolving: share yours and see how it compares

*May 11, 2025 • News • Margaret Rimek • 2 min read*

---

<!-- blog-related-post-3 -->

![Product Hunt AMA Recap: embedding, open source success, and more Image](../images/product-hunt-blog-post-image.png)

### [Product Hunt AMA Recap: embedding, open source success, and more](metabase-product-hunt-ama.html)

Before our launch, I hosted an AMA on ProductHunt and answered questions about Metabase, embeddings, building an open source company, and more.

*Apr 07, 2025 • News • Sameer Al-Sakran • 8 min read*

---

<!-- blog-related-post-4 -->

![Product Hunt AMA Recap: embedding, open source success, and more Image](../images/product-hunt-blog-post-image.png)

### [Product Hunt AMA Recap: embedding, open source success, and more](metabase-product-hunt-ama.html)

Before our launch, I hosted an AMA on ProductHunt and answered questions about Metabase, embeddings, building an open source company, and more.

*Apr 07, 2025 • News • Sameer Al-Sakran • 8 min read*

<!-- /blog-related-posts -->
