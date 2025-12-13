---
title: "Keeping tabs on embedded analytics"
description: "Metabase's usage analytics can help you learn who your most engaged customers are and what’s most important to them."
url: "https://www.metabase.com/blog/embedding-usage-analytics"
canonical: "embedding-usage-analytics.html"
image: "https://www.metabase.com/images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "Keeping tabs on embedded analytics"
ogDescription: "Metabase's usage analytics can help you learn who your most engaged customers are and what’s most important to them."
ogImage: "https://www.metabase.com/images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg"
ogUrl: "https://www.metabase.com/blog/embedding-usage-analytics"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "Keeping tabs on embedded analytics"
twitterDescription: "Metabase's usage analytics can help you learn who your most engaged customers are and what’s most important to them."
twitterImage: "https://www.metabase.com/images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg"
author: "The Metabase Team"
datePublished: "Feb 19, 2024"
category: "Using Metabase"
---

Metabase offers a few different types of embedding: [interactive](../docs/latest/embedding/interactive-embedding.html), [static](../docs/latest/embedding/static-embedding.html), and [public embedding](../docs/latest/embedding/public-links.html#public-embeds). With [usage analytics](../docs/latest/usage-and-performance-tools/usage-analytics.html), you can track how your customers interact with your customer\-facing analytics.

The level of detail available in usage analytics depends on the embedding type. For example, interactive embedding gives you an additional capability to track usage tied to a log in, whereas usage stats, like views and downloads, with static and public embedding are anonymous.

However, this guide can give you a roundabout idea of how to start track usage analytics for embedded analytics.

## See how often people use your customer-facing analytics

Justify your investment in embedding by keeping track of how often it’s being used. The [Metabase metrics dashboard](../docs/latest/usage-and-performance-tools/usage-analytics.html#metabase-metrics-dashboard) tracks how many active users you have, how many questions people are viewing and creating per week, and trends over time as usage changes week over week.

![The Metabase metrics dashboard](../images/posts/embedding-usage-analytics/metabase-metrics.png)

## Understand what your customers are most interested in

In that same Metabase metrics dashboard, you’ll find a list of who your most engaged data consumers are. See what they’re looking at so you can create more relevant content geared towards their interests. Knowing what your customers actually care about can also lead to more meaningful conversations about how you can support them.

You can also learn when customers start to lose interest. For example, for interactive embedding, you can spot if a particularly active customer suddenly stops visiting your analytics. This could be a sign to reach out and see if they need your support.

For static and public embedding, you can look at usage in aggregate by filtering on anonymous to find what your customers are most interested in.

## Keep questions and dashboards quick and minimize friction so your customers can self-serve what they need

There are two different dashboards you can use to figure out which dashboards and questions are running the slowest or consuming the most resources.

![The Metabase Analytics collection dashboards available in Metabase](../images/posts/embedding-usage-analytics/dashboard-options.png)

1. Use the [Performance Overview dashboard](../docs/latest/usage-and-performance-tools/usage-analytics.html#performance-overview-dashboard) to find out what your slowest dashboards and questions are, and refactor, [cache](../docs/latest/configuring-metabase/caching.html), or [archive](../docs/latest/exploration-and-organization/delete-and-restore.html) them.
2. Look in the [Content with Cobwebs dashboard](../docs/latest/usage-and-performance-tools/usage-analytics.html#content-with-cobwebs-dashboard) to see what’s not being viewed. It might be time to archive, or if you think people are really missing out, put this content somewhere more prominent.

## Keep your data secure with multi-tenant embedded analytics

Usage analytics gives you a comprehensive log for auditing and security purposes.

You can monitor the people or activity logs for anomalies, like suspicious logins or changed settings, and set up subscriptions and alerts on questions created from these logs to keep a constant watch on what’s going on in your instance.

![The activity log filtered by changed settings](../images/posts/embedding-usage-analytics/security-monitoring.png)

You can use these logs in combination with other security features, like [SSO](../docs/latest/people-and-groups/start.html#authentication), [sandboxing](../docs/latest/permissions/data-sandboxes.html), and more, for secure, multi\-tenant analytics.

## Metabase usage analytics resources

Usage analytics spans beyond just tracking embedded analytics. You can also use usage analytics for internal things, like cleaning up your Metabase, giving your data team an idea of how often your data is being used, and more. Check out a few of the other ways you can use the Metabase analytics collection:

- [Usage analytics docs](../docs/latest/usage-and-performance-tools/usage-analytics.html)
- [Metabase housekeeping with usage analytics](metabase-housekeeping-with-usage-analytics.html)
- [Understand how your team uses Metabase](how-to-use-metabase-usage-analytics.html)
- [Video: Metabase usage analytics — what happens inside your instance](../events/metabase-usage-analytics.html)

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
