---


title: "Managing people in Metabase"
description: "How to go from managing dozens of users to thousands."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/managing-people
toc:
  - id: "managing-people-in-metabase"
    title: "Managing people in Metabase"
    level: 1
    href: "#managing-people-in-metabase"
  - id: "1-create-groups-in-metabase"
    title: "1. Create groups in Metabase"
    level: 2
    href: "#1-create-groups-in-metabase"
  - id: "group-managers"
    title: "Group managers"
    level: 3
    href: "#group-managers"
  - id: "2-assign-data-and-collection-permissions-to-those-groups"
    title: "2. Assign data and collection permissions to those groups"
    level: 2
    href: "#2-assign-data-and-collection-permissions-to-those-groups"
  - id: "hiding-irrelevant-or-technical-data-for-all-users"
    title: "Hiding irrelevant or technical data for all users"
    level: 3
    href: "#hiding-irrelevant-or-technical-data-for-all-users"
  - id: "row-and-column-security"
    title: "Row and column security"
    level: 3
    href: "#row-and-column-security"
  - id: "sql-editor-access-and-row-or-column-security-are-mutually-exclusive"
    title: "SQL editor access and row or column security are mutually exclusive"
    level: 3
    href: "#sql-editor-access-and-row-or-column-security-are-mutually-exclusive"
  - id: "sql-permissions"
    title: "SQL permissions"
    level: 3
    href: "#sql-permissions"
  - id: "application-permissions"
    title: "Application permissions"
    level: 3
    href: "#application-permissions"
  - id: "3-set-up-sso-in-your-metabase"
    title: "3. Set up SSO in your Metabase"
    level: 2
    href: "#3-set-up-sso-in-your-metabase"
  - id: "authentication-options"
    title: "Authentication options"
    level: 3
    href: "#authentication-options"
  - id: "4-synchronize-sso-and-metabase-groups"
    title: "4. Synchronize SSO and Metabase groups"
    level: 2
    href: "#4-synchronize-sso-and-metabase-groups"
  - id: "5-tell-people-they-can-create-a-metabase-account-just-by-logging-in"
    title: "5. Tell people they can create a Metabase account just by logging in"
    level: 2
    href: "#5-tell-people-they-can-create-a-metabase-account-just-by-logging-in"
  - id: "6-use-the-usage-analytics-collection-to-monitor-how-people-are-using-your-metabase"
    title: "6. Use the Usage Analytics collection to monitor how people are using your Metabase"
    level: 2
    href: "#6-use-the-usage-analytics-collection-to-monitor-how-people-are-using-your-metabase"
  - id: "further-reading"
    title: "Further reading"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Administration"
    href: "../index.html"
  - title: "Administration and operation"
    href: "index.html"
---

# Managing people in Metabase

How to go from managing dozens of users to thousands.

This article gives an overview of how to set up and scale self\-service analytics. We’ll stay at a high\-level and link out to more detailed guides on individual features, and our focus here will be on the administration of Metabase, particularly of people in your organization. For operational scaling—the actual running of the Metabase application—check out [Metabase at scale](metabase-at-scale.html).

The goal with democratizing data in your organization is to give people the information they need to make better decisions. And the best way to do that is to give everyone access to as much data as you can, while ensuring that they can’t see any data they’re not supposed to see.

To that end, we recommend you organize your Metabase with the goal of simplifying permissions. You probably collect sensitive data for various reasons \(payments, taxes, liability, and so on\), but that data isn’t relevant for business intelligence \(though it’s probably mixed in with data that *is* relevant\). The idea is to put hard boundaries in key places so you don’t have to worry about who can see what, then set up lightweight systems—or even just conventions—that [keep the place tidy](same-page.html) as the number of people grows.

## 1. Create groups in Metabase

Metabase manages permissions using [groups](../../../../docs/latest/people-and-groups/managing.html#groups), which is more efficient and more manageable than setting permissions for each person. We recommend that you set up your Metabase so that the groups in your identity provider map to the same groups in Metabase. In general, your groups should map to departments in your organization, and possibly also to project or mission teams that cut across departments. That way, once the new person in Accounting starts, they’ll log into Metabase and already have access to the same databases and collections that other people in Accounting have.

### Group managers

On [Pro and Enterprise plans](../../../../pricing/index.html), you can deputize [group managers](../../../../docs/latest/people-and-groups/managing.html#group-managers) that can add and remove people from the group.

## 2. Assign data and collection permissions to those groups

There are fundamentally two types of permissions in Metabase: [data permissions](../permissions/data-permissions.html), which determine access to databases, and [collection permissions](../permissions/collection-permissions.html), which determine access to items in Metabase like questions and dashboards. These permissions work at the level of tables or collections, but what if you need to restrict access to rows or columns?

### Hiding irrelevant or technical data for all users

If there are fields \(or entire tables\) that aren’t very helpful or relevant, administrators can hide those in the **Data Model tab**. Note that SQL queries are *not* affected by this setting—users with SQL editor access for a database can always access all tables and fields in that database.

![Selecting Do not include will hide fields in the GUI interfaces (though the field will still be acccesible in SQL/native queries.](../../../images/scaling-self-service-analytics/do-not-include.png)

Setting a field’s visibility to `Do not include` will exclude the field from menus and tables in questions built with the Query Builder. The disadvantage of changing the field visibility at the data model level is that the action is global, so it’s not very flexible. If, however, you want to *selectively* grant access to rows or columns to different groups of people, you’ll need to use row and column security permissions.

### Row and column security

[Row and column](../../../../docs/latest/permissions/row-and-column-security.html) is a feature available in Metabase [Pro and Enterprise plans](../../../../pricing/index.html) that, when combined with single sign\-on \(SSO\), lets you restrict access to rows or columns based on user attributes. You can add these attributes manually in Metabase, or via your authentication service. You can set up [row\-level access](../permissions/row-permissions.html) keyed to a user attribute, or you can [restrict access to columns](../permissions/column-permissions.html) by creating custom views of tables that exclude certain fields. Note that row and column security policies only apply to questions built with a graphical query builder, which brings us to:

### SQL editor access and row or column security are mutually exclusive

An important thing you need to know about permissions is that groups with SQL access to a database can access *all* data in the database. Even if a field is not visible in the query builder or in the [data browser](../../querying-and-dashboards/data-browser.html), people with SQL access will still be able to query the tables \(and all rows and columns\) in the database. More specifically, they’ll be able to query any data available to the user account in the database that you used to connect Metabase to that database. Which brings us to:

### SQL permissions

Metabase lacks table\-level SQL permissions: you either grant a group SQL editor access to a database, or you don’t. But since you can set SQL editor permissions at the database level, you can create two \(or more\) connections to the same database, each with different connection strings for different user accounts in that database. For example, you could set up:

- Connection 1 with access to the whole database
- Connection 2 with access to tables A, B, and C only

You can then grant most of your groups access to connection 2 \(the less permissive one\), and grant select users \(like dedicated data analysts\) access to connection 1 \(the whole database\). Metabase will treat these connections as if they were two separate databases, even though they are just two different access levels to the same database. From the perspective of each person, however, they’ll only see one database \(the one their group has access to\).

### Application permissions

On [Pro and Enterprise plans](../../../../pricing/index.html), you can assign [application permissions](../../../../docs/latest/permissions/application.html) to groups to give people access to administrative tools a la carte, without giving them access to data.

## 3. Set up SSO in your Metabase

While we hope Metabase will always have a special place in your heart, we know it’s not the only piece of software you use. If your organization is starting to grow, chances are you’re working with a single sign\-on \(SSO\) identity provider like [Okta](https://www.okta.com/products/single-sign-on/), [Auth0](https://auth0.com/single-sign-on/), or [OneLogin](https://www.onelogin.com/product/sso) that lets people authenticate once and get access to all the apps your org uses. Metabase integrates with services that use the SAML and JWT standards, which will give you fine\-grained control over access to data.

### Authentication options

There are currently four basic options for authentication in Metabase. In the open source edition, you have:

- [Google Sign\-In](../../../../docs/latest/people-and-groups/google-sign-in.html)
- [LDAP](../../../../docs/latest/people-and-groups/ldap.html)

On [Pro and Enterprise](../../../../pricing/index.html), you also have:

- [SAML](../../../../docs/latest/people-and-groups/authenticating-with-saml.html)
- [JWT](../../../../docs/latest/people-and-groups/authenticating-with-jwt.html)

**SAML** is an open protocol for exchanging data between identity and service providers using XML. JWT is similar, though less formal—it’s a token, not a protocol. Both standards are used by identity providers like Okta and Auth0 to create authentication services \(essentially a global password manager for the people in your organization\). With Okta, for example, can sign in to your identity provider once, then they’ll be able to use all the services they have access to without having to constantly re\-enter their login and password—or different logins and passwords. The identity provider \(in this case Okta\) will handle the handshakes with each service provider. To learn more, check out Auth0’s [overview of SAML](https://auth0.com/blog/how-saml-authentication-works/).

The big advantage with setting up SSO with SAML or JWT is that you can pass user attributes to Metabase, which allows you to set up row and column security based on who the user is.

## 4. Synchronize SSO and Metabase groups

Now that you’ve created groups, set permissions, and connected your SSO provider to Metabase, it’s time to synchronize groups. Check out our documentation to learn how to [synchronize group membership with your identity provider](../../../../docs/latest/people-and-groups/authenticating-with-saml.html#synchronizing-group-membership-with-your-idp). Note that you can also [synchronize groups using LDAP](../../../../docs/latest/people-and-groups/ldap.html) \(an option available for the free, open source edition of Metabase\).

## 5. Tell people they can create a Metabase account just by logging in

At this point, you should have everything set up. People should be able to log in to Metabase and see everything they need to see, and no more.

## 6. Use the Usage Analytics collection to monitor how people are using your Metabase

Lastly, on [Pro and Enterprise plans](../../../../pricing/index.html), you can explore [Metabase usage analytics](../../../../docs/latest/usage-and-performance-tools/usage-analytics.html) to verify what people are looking at and confirm that your permissions work as you expect. You can see which dashboards and questions people view, the contents of SQL queries they run, and what data they download. It’s also a great way to see how your rollout is going, like how many new users are logging in over time, and how much stuff everyone’s looking at.

Usage Analytics is also useful for checking the performance of your workhorse dashboards and questions. One of the issues with democratizing data is that people of all skill ranges will be asking questions, and that can sometimes lead to some less efficient queries. You can use Usage Analytics to find commonly viewed items that are running slowly, then check out our posts for tips on [making dashboards faster](making-dashboards-faster.html) and [best practices for writing SQL queries](../../../sql/working-with-sql/sql-best-practices.html).

To learn more about usage analytics, check out our article on [how to keep tabs on your data](../permissions/keep-tabs-on-your-data.html).

## Further reading

- [Keeping your analytics organized](same-page.html) .
- [Deliver self\-service analytics to your customers](../../embedding/multi-tenant-self-service-analytics.html) .

[
      
        

      
      
        
        
      
    ](metabase-in-production.html)
[
      
        
        
      
      
        

      
    ](guide-to-sharing-data.html)
