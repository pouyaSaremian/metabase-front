---


title: "Admin overview"
description: "An overview and list of resources for Metabase admins."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/guide
  - /learn/administration/guide
toc:
  - id: "admin-overview"
    title: "Admin overview"
    level: 1
    href: "#admin-overview"
  - id: "basic-setup"
    title: "Basic setup"
    level: 2
    href: "#basic-setup"
  - id: "get-connected"
    title: "Get connected"
    level: 3
    href: "#get-connected"
  - id: "curate-your-data"
    title: "Curate your data"
    level: 3
    href: "#curate-your-data"
  - id: "set-up-data-and-collection-permissions"
    title: "Set up data and collection permissions"
    level: 2
    href: "#set-up-data-and-collection-permissions"
  - id: "encourage-people-to-use-the-query-builder"
    title: "Encourage people to use the query builder"
    level: 2
    href: "#encourage-people-to-use-the-query-builder"
  - id: "annotate-data-with-events"
    title: "Annotate data with events"
    level: 2
    href: "#annotate-data-with-events"
  - id: "keep-things-organized"
    title: "Keep things organized"
    level: 2
    href: "#keep-things-organized"
  - id: "learn-the-different-ways-you-can-share-data"
    title: "Learn the different ways you can share data"
    level: 2
    href: "#learn-the-different-ways-you-can-share-data"
  - id: "embed-charts-and-dashboards"
    title: "Embed charts and dashboards"
    level: 2
    href: "#embed-charts-and-dashboards"
  - id: "advanced-administration"
    title: "Advanced administration"
    level: 2
    href: "#advanced-administration"
  - id: "tell-your-team-about-metabase-resources"
    title: "Tell your team about Metabase resources"
    level: 2
    href: "#tell-your-team-about-metabase-resources"
  - id: "give-people-a-tour-of-your-data"
    title: "Give people a tour of your data"
    level: 2
    href: "#give-people-a-tour-of-your-data"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Administration"
    href: "../index.html"
  - title: "Administration and operation"
    href: "index.html"
---

# Admin overview

An overview and list of resources for Metabase admins.

The good news is that all you really need to do to get started as an Admin is connect Metabase to your data sources, invite people to your Metabase, and ask them to build some dashboards. But you probably have bigger plans, so we put together a list of resources that we’ve written to help you solve common problems that orgs face when standing up an analytics platform.

This article assumes you’re either on a [Metabase Cloud plan](../../../../pricing/index.html), or that you already have your self\-hosted [Metabase up and running](../../../../docs/latest/installation-and-operation/start.html).

## Basic setup

From the main Metabase navigation, if you click on the **Gear icon** \> **Admin Settings** \> **Settings** page, Metabase lists some tasks for you to complete:

### Get connected

- [Add a database](../../../../docs/latest/databases/connecting.html)
- [Set up email](../../../../docs/latest/configuring-metabase/email.html)
- [Set Slack credentials](../../../../docs/latest/configuring-metabase/slack.html)
- [Invite team members](../../../../docs/latest/people-and-groups/managing.html)

### Curate your data

- [Hide irrelevant tables](../../../../docs/latest/data-modeling/metadata-editing.html#table-visibility)
- [Organize questions](../../../../docs/latest/permissions/collections.html)
- [Create metrics](../../../../docs/latest/data-modeling/metrics.html#creating-a-metric)
- [Create segments](../../../../docs/latest/data-modeling/segments.html#creating-a-segment)

Again, the most important things are to [add your databases](../../../../docs/latest/databases/connecting.html) \(or get someone else who has your database connection details to add them\), [invite people to Metabase](../../../../docs/latest/people-and-groups/managing.html), and ask them to [build some dashboards](../../querying-and-dashboards/dashboards.html). Eventually you’ll probably want to get [reports emailed out](../../../../docs/latest/dashboards/subscriptions.html) and whatnot, but the main thing is to just get everyone onboard.

## Set up data and collection permissions

Though Metabase simplifies permissions, managing permissions is just inherently complicated. In addition to our docs on permissions, we wrote an article on managing people in Metabase, and a whole guide to permissions:

- [Managing people in Metabase](managing-people.html)
- [Guide to Permissions](../permissions/index.html)
- [Permissions reference documentation](../../../../docs/latest/permissions/introduction.html)

## Encourage people to use the query builder

While your analysts will probably gravitate toward SQL queries, it’s generally better to use the query builder. The reason is twofold:

1. With questions built using the query builder, people can [drill through the data](../../querying-and-dashboards/questions/drill-through.html) .
2. Query builder questions are also easier for people to copy and play around with. No one needs to know SQL \(though query builder questions make a great stepping\-stone toward learning SQL\).

Alternatively, you can use a SQL query to [build a model](../../getting-started/models.html), and let everyone use the query builder to slice and dice the data in that model.

## Annotate data with events

You can [add events](../../../../docs/latest/exploration-and-organization/events-and-timelines.html) to collections to capture institutional knowledge: when you shipped important product updates, had a sale, ran an ad campaign, and so on. Events will show up on charts, so people will stop having to ask \(again\) why the data spiked back in April.

## Keep things organized

Once people figure out what they can do with Metabase, the questions and dashboards will start piling up. You don’t need to \(and probably can’t\) tame the chaos completely, but that’s okay. We wrote up some strategies for fighting entropy as your Metabase grows.

- [Keeping your analytics organized](same-page.html)

## Learn the different ways you can share data

You’re probably going to have to share charts and dashboards, both within and outside of your org.

- [Guide to sharing data](guide-to-sharing-data.html)

## Embed charts and dashboards

If you’re using Metabase to embed charts and dashboards in your app, that’s a whole other game, and we have some articles for you:

- [Strategies for delivering customer\-facing analytics](../../embedding/overview.html)
- [Publishing data visualizations to the web](../../embedding/charts-and-dashboards.html)
- [Multi\-tenant self\-service analytics](../../embedding/multi-tenant-self-service-analytics.html)

## Advanced administration

If you really want to get serious about running Metabase, we’ve got you covered:

- To preload a Metabase with questions, dashboards, collections and so on, check out: [Serialization](serialization.html)
- For running Metabase in production, check out [Metabase at Scale](metabase-at-scale.html)
- Tips on how to speed up dashboards: [Making dashboards faster](making-dashboards-faster.html)
- To see how people are using your Metabase, check out [How to keep tabs on your data](../permissions/keep-tabs-on-your-data.html)
- To program Metabase, check out [Working with the Metabase API](metabase-api.html)

## Tell your team about Metabase resources

There’s no need to develop a whole course here, but even a single session where you demo Metabase with your data can help your team make the most of their new tool.

We \(the Metabase team\) create a lot of resources to help level people up, so make sure your teams know about them.

- Tutorials and guides: [Learn Metabase](../../../index.html) \(you’re staring at a Learn article right now; you are *learning* \).
- Metabase reference: [Metabase docs](../../../../docs/latest/index.html) .
- Forum where people \(like you\) can ask and answer questions: [discourse.metabase.com](https://discourse.metabase.com/) .
- Community posts, where data practitioners \(also like you\) share their stories and tips: [Community Stories](../../../../community.html) .
- Blog: [Metabase Blog](../../../../blog.html) .

## Give people a tour of your data

Because people have access to these resources, and can learn on their own, it’s more important for you to walk people through what data you have, and where people can find that data. You might not know about all of your data, so find out who does and ask them to educate the relevant teams. Some orgs host data happy hours, or lunch hours, or just recurring meetings where people present their analysis and show people where they can find the data they used. Or better: have people build a [model in Metabase](../../getting-started/models.html), and present on the model they made, and the kinds of questions that model can answer.

These meetings can be fun \(for some definition of fun\) and surprisingly effective at circulating institutional knowledge. The main things to emphasize are:

- How to take existing questions and find the underlying data.
- That it’s safe to play around with existing questions. Starting from existing questions is a great way for people to teach each other not only how Metabase’s query builder works, but what data your org has to offer.
- That they can [X\-ray tables](../../../../docs/latest/exploration-and-organization/x-rays.html) to get a starting set of questions to play around with.

You can also create a dashboard in your Metabase and use text cards and charts to present your teams with an overview of your data.

[
      
        
        
      
      
        

      
    ](metabase-and-your-db.html)
