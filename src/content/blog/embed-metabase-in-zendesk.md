---
title: "Embed a Metabase dashboard in Zendesk"
description: "Get the customer data and insights you need automatically filtered and ready for use within your support tickets. You can also embed a dashboard in Salesforce, Stripe, Jira, or platforms that allow embedding URLs."
url: "https://www.metabase.com/blog/embed-metabase-in-zendesk"
canonical: "embed-metabase-in-zendesk.html"
image: "https://www.metabase.com/images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "Embed a Metabase dashboard in Zendesk"
ogDescription: "Get the customer data and insights you need automatically filtered and ready for use within your support tickets. You can also embed a dashboard in Salesforce, Stripe, Jira, or platforms that allow embedding URLs."
ogImage: "https://www.metabase.com/images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg"
ogUrl: "https://www.metabase.com/blog/embed-metabase-in-zendesk"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Ignacio Beines Furcada and Sarina Bloodgood"
twitterTitle: "Embed a Metabase dashboard in Zendesk"
twitterDescription: "Get the customer data and insights you need automatically filtered and ready for use within your support tickets. You can also embed a dashboard in Salesforce, Stripe, Jira, or platforms that allow embedding URLs."
twitterImage: "https://www.metabase.com/images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg"
author: "Ignacio Beines Furcada and Sarina Bloodgood"
datePublished: "Feb 26, 2024"
category: "Using Metabase"
---

One cool thing about Metabase is that you can embed a dashboard in the apps you use every day.

We recently embedded our customer dashboard right into Zendesk. Having this dashboard side\-by\-side with support tickets allows us to see customer information without having to switch between Metabase and Zendesk. We even passed a few filter parameters to automatically filter on the customer and organization in the dashboard, significantly speeding up how quickly we can troubleshoot issues.

The dashboard includes:

- **Account information** : Customer name, when their account was created, if it was cancelled and when, subscription status, plan name
- **Support tier information** : Support tier, whether their account is active
- **Deployment and Metabase version information** : Deployment type, cloud provider, Metabase version number and last time they updated
- **Account details** : Annual value, LTV, number of users, country
- **Cloud details** : How many questions and dashboards the customer has, and link to their instance log
- **Contact information** : Email, name, level of technical knowledge
- **Customer happiness or sentiment** : Survey responses, CSAT responses, etc.
- **List of associated GitHub issues and tickets**

Technically, you can embed a Metabase dashboard into any app that allows iframe embedding or allows third\-party apps that support the use of embedding URLs. A few other platforms that you can test this out with are [Salesforce](https://appexchange.salesforce.com/), [Jira](https://marketplace.atlassian.com/), [Stripe](https://stripe.com/apps), and [Shopify](https://apps.shopify.com/).

Here’s a quick walkthrough of how we embedded our customer dashboard in Zendesk.

## Our setup: an interactive dashboard embedded in an iframe using a third-party app

1. We used [interactive embedding](../docs/latest/embedding/interactive-embedding.html) in this example. You *can* use [public embedding](../docs/latest/embedding/public-links.html) to embed a dashboard, but for this instance, we needed to protect customer data as public embedding enables public links. It’s best to stick with interactive embedding if you’re in a similar position.
2. We decided to use an iFrame app rather than build our own app. By going with a third\-party app, we saved engineering resources and got to a working implementation faster. One downside: the logo for the app we went with, Customer360, is always visible. Not ideal, but not really an issue for our internal\-facing use.

## The iframe apps we considered

To get started, we narrowed down apps and made a list of their pros and cons:

- [Iframe Plus](https://www.zendesk.com/marketplace/apps/support/149904/iframe-plus/?queryID=aae992ecfc8aafcb2af785124981ac34) : $7 per instance, so it’s low price, but the con is there isn’t any support.
- [Zendesk Iframe](https://www.zendesk.com/marketplace/apps/support/1/iframe/?queryID=0585c97cb38c4b1ec6b166679feb59ea) : Free, but there was no ticket sidebar option, which is where we wanted the dashboard to live. E.g., the dashboard will only show up in organization view, not ticket view.
- [Customer360](https://www.zendesk.com/marketplace/apps/chat/213783/customer-360/) : $4 per agent, so it’s low price and the UI is easy\-to\-use. **This is the app we went with** .

## Enable interactive embedding

Next, we enabled [interactive embedding](../docs/latest/embedding/interactive-embedding.html) by going to **Settings \> Admin settings \> Embedding**. Click on **Enable**, and click on **Interactive embedding**.

We then grabbed the URL for our dashboard from Metabase and properly formatted it to use in the Customer360 app.

You’ll need to set the source attribute to [your site URL](../docs/latest/embedding/interactive-embedding.html#pointing-an-iframe-to-a-metabase-url). For example, `https://metabase.yourcompany.com/dashboard/1`.

## Authorize Zendesk and Customer 360 URLs in Metabase

We also needed to authorize the following Zendesk URLs in Metabase. To do this, we navigated to **Admin Settings \> Settings \> Embedding \> Interactive \> Authorized Origins** and added the following URLs:

Zendesk URLs

- `https://*.zdusercontent.com`
- `https://*.zndsk.com`
- `https://*.zendesk.com`

Customer 360 URL

- `https://*.myplaylist.io`

## Install the Customer 360 app and add your dashboard URL

Next, we [installed the Customer 360 app](https://www.zendesk.com/marketplace/apps/sell/562618/customer-360/?queryID=702f1711116f7af8c09eb4ee3484d563) and input our dashboard URL \(with the source attribute set to our Metabase instance\).

## Show only the customer data you need by passing parameters in the URL to filters in your dashboard

You can pass values to your dashboard’s filters via parameterized URLs. For example, we pass both Organization and Ticket requester information, so now our dashboard automatically filters to show only the information we need about the customer and their organization.

The Customer 360 app lets you use the following parameters:

- `{{ticket.requester.email}}`
- `{{ticket.requester.emails}}` \(comma\-separated list of requester’s emails\)
- `{{ticket.requester.external_id}}`
- `{{ticket.requester.id}}`
- `{{ticket.requester.custom_fields.<field_key>}}`
- `{{ticket.organization.id}}`
- `{{ticket.organization.external_id}}`
- `{{ticket.organization.custom_fields.<field_key>}}`
- `{{ticket.ticket_field_<field ID number>}}`

See the [setting a SQL variable docs](../docs/latest/questions/native-editor/sql-parameters.html).

![Customer 360 app settings in Zendesk](../images/posts/embed-metabase-in-zendesk/customer-360-setup.png)

### A small caveat about SSO

Metabase will ask you to sign in again if you refresh the Zendesk ticket page or add a new ticket. Also, you will need an active session in your Metabase to not be kicked out every time you enter the ticket sidebar. We got around this by setting our environment’s `MB_SESSION_COOKIE_SAMESITE` to `none`, as mentioned in the [interactive embedding setup docs](../docs/latest/embedding/interactive-embedding.html) and [environment variables docs](../docs/latest/configuring-metabase/environment-variables.html#mb_session_cookie_samesite).

## Tidy up your dashboard view in Zendesk

Now, when we click on a ticket in Zendesk and the ticket sidebar pops up, our customer dashboard appears and is filtered down to the customer and their organization!

![A Metabase dashboard embedded in the Zendesk ticket sidebar](../images/posts/embed-metabase-in-zendesk/metabase-embedded-dashboard-in-zendesk.png)

We hid a few Metabase UI components, like headers or breadcrumbs, by setting `header` to `false` in the embedding URL. We did this to clean up the way our dashboard looks in\-app.

There’s a list of examples of what else you can do in the [showing or hiding Metabase UI components docs](../docs/latest/embedding/interactive-embedding.html#showing-or-hiding-metabase-ui-components). Note that some of these feature may not work for certain dashboards as it depends on the components in the dashboard.

## Check out other embedding projects

If you need inspiration, check out projects and feedback in our [GitHub tracker](https://github.com/metabase/metabase/issues?q=is%3Aopen+is%3Aissue+label%3AEmbedding%2FInteractive+). If you enter the repo manually in the future, just filter by `label:Embedding/Interactive` to get a full list of current embedding\-related issues \(click on closed to see resolved issues.\)

## More embedded analytics resources

- [What is embedded analytics](what-is-embedded-analytics.html)
- [Strategies for delivering customer\-facing analytics](../learn/metabase-basics/embedding/overview.html)
- [The five stages of embedding grief](../learn/grow-your-data-skills/analytics/embedding-mistakes.html)
- [A Metabase mystery](../learn/metabase-basics/embedding/external-sharing.html)

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

![Keeping tabs on embedded analytics Image](../images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg)

### [Keeping tabs on embedded analytics](embedding-usage-analytics.html)

Metabase's usage analytics can help you learn who your most engaged customers are and what’s most important to them.

*Feb 19, 2024 • Using Metabase • The Metabase Team • 3 min read*

---

<!-- blog-related-post-4 -->

![Keeping tabs on embedded analytics Image](../images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg)

### [Keeping tabs on embedded analytics](embedding-usage-analytics.html)

Metabase's usage analytics can help you learn who your most engaged customers are and what’s most important to them.

*Feb 19, 2024 • Using Metabase • The Metabase Team • 3 min read*

<!-- /blog-related-posts -->
