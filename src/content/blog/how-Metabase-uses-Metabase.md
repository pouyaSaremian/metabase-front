---
title: "How Metabase uses Metabase"
description: "Here at Metabase, we use Metabase internally, so we thought it'd be fun to use Metabase to see how we use Metabase."
url: "https://www.metabase.com/blog/how-Metabase-uses-Metabase"
canonical: "how-Metabase-uses-Metabase.html"
image: "https://www.metabase.com/images/posts/how-metabase-uses-metabase/how-metabase-metabases.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "How Metabase uses Metabase"
ogDescription: "Here at Metabase, we use Metabase internally, so we thought it'd be fun to use Metabase to see how we use Metabase."
ogImage: "https://www.metabase.com/images/posts/how-metabase-uses-metabase/how-metabase-metabases.jpg"
ogUrl: "https://www.metabase.com/blog/how-Metabase-uses-Metabase"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "How Metabase uses Metabase"
twitterDescription: "Here at Metabase, we use Metabase internally, so we thought it'd be fun to use Metabase to see how we use Metabase."
twitterImage: "https://www.metabase.com/images/posts/how-metabase-uses-metabase/how-metabase-metabases.jpg"
author: "The Metabase Team"
datePublished: "Sep 21, 2022"
category: "Data explorations"
---

Here at Metabase, we use Metabase internally, so we thought it’d be fun to use Metabase to see how we use Metabase.

As our own first customer, we wanted to understand how we use our own product, and how our usage patterns have evolved as we’ve grown.

## Here’s what we’ve found

- Overall, we use Metabase more and more.
- Table, line, and bar charts are our bread and butter \(sorry, pie charts 🍩\).
- We’re big fans of [dashboard subscriptions](../docs/latest/dashboards/subscriptions.html) and [alerts](../docs/latest/questions/alerts.html) , sending them via both email and Slack.
- We use [collections](../docs/latest/exploration-and-organization/collections.html) to store and organize [questions](../docs/latest/questions/start.html) , [dashboards](../docs/latest/dashboards/start.html) , and [model](../docs/latest/data-modeling/models.html) . Also, we try to limit ourselves to one root collection per team.

## Overall usage

Number of users:

Percentage of us who actively use Metabase \(viewed at least one question\):

Average questions viewed per person:

- The number of people were pretty stable from 2016 up until May 2019 \(mostly comprising of the founding team\). Shortly after our series A, we started hiring more people.
- This growth led to a decline in the percentage of monthly active users. We suspect people were still acclimating themselves to the company and the product and that’s probably why we saw less usage during this period.
- The percentage of active users has since climbed back up; we’ve have been above ninety percent for most of 2022!
- Overall, our usage has been trending up. The average questions viewed per person is up from fifteen questions per month in 2017 to twenty questions per month in 2022.

## Visualizations

Top visualizations used:

Share of visualizations \(table, line, bar, scalar, area\) over time:

- [Tables](../docs/latest/questions/visualizations/table.html) have been the most popular visualization used at Metabase.
- In second and third place, we have the line and bar charts. These charts are versatile, and they make it easy to compare trends over time.

If we take the all\-time top five visualizations and plot their shares over time, we observe some patterns:

- We use more and more table charts, from 28% in 2019 to 55% in 2022.
- We’ve used fewer scalar charts over time. \(Anecdotally, we don’t think they’re as effective as line or bar charts at visualizing changes over time.\)

## Subscriptions and Alerts

Subscriptions and alerts by receiving channel:

Scheduled frequency of subscriptions and alerts:

- We currently have 81 active subscriptions and alerts. Around 60% of them are sent via Slack, the other 40% by email.
- Almost half of these reports are scheduled on a daily basis.
- For those reports delivered weekly or monthly, the majority are scheduled for Mondays \(70%\).

## Collections

The collection depth chart shows how many collections are nested at each level \(16 in the root collection, 125 under one of the root collection, and so on\).

- Out of the 16 root \(top\-level\) collections, half of them are [official collections](../docs/latest/exploration-and-organization/collections.html#official-collections) belonging to different teams.
- We have 125 sub\-collections nested in one of the root collections. This number tapers at the third level, as it’s harder to find and organize things deeper than that.

## We’ll conclude with a tip

The way we organize each team’s official collection is to have a standard set of sub\-collections:

- Useful reports
- Data sources
- Explorations
- Miscellaneous

These standardized collections make it easier for people to navigate each team’s collection.

<!-- blog-related-posts -->

## You might also enjoy

<!-- blog-related-post-1 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [The story behind our AI Dataset Generator](story-behind-ai-dataset-generator.html)

Explore the design choices, challenges, and achievements behind our open source AI Dataset Generator.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-2 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [The story behind our AI Dataset Generator](story-behind-ai-dataset-generator.html)

Explore the design choices, challenges, and achievements behind our open source AI Dataset Generator.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-3 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [The hidden costs of the data stack](the-hidden-cost-of-data-stacks.html)

An incomplete list of the less obvious costs associated with maintaining a data stack, and some things you can do to keep those costs under control.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

---

<!-- blog-related-post-4 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [The hidden costs of the data stack](the-hidden-cost-of-data-stacks.html)

An incomplete list of the less obvious costs associated with maintaining a data stack, and some things you can do to keep those costs under control.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

<!-- /blog-related-posts -->
