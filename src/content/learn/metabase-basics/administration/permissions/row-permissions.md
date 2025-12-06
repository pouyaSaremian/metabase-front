---


title: "Tutorial: Row-level permissions in Metabase"
description: "Learn how to set row-level permissions based on people's user attributes."
redirect_from:
  - /learn/metabase-basics/administration/permissions/row-permissions
  - /learn/metabase-basics/administration/permissions/data-sandboxing-row-permissions
  - /learn/permissions/data-sandboxing-row-permissions
toc:
  - id: "tutorial-row-level-permissions-in-metabase"
    title: "Tutorial: Row-level permissions in Metabase"
    level: 1
    href: "#tutorial-row-level-permissions-in-metabase"
  - id: "before-you-set-up-row-security"
    title: "Before you set up row security"
    level: 2
    href: "#before-you-set-up-row-security"
  - id: "our-scenario"
    title: "Our scenario"
    level: 2
    href: "#our-scenario"
  - id: "creating-a-customer-group"
    title: "Creating a customer group"
    level: 2
    href: "#creating-a-customer-group"
  - id: "creating-an-account-and-adding-an-attribute"
    title: "Creating an account and adding an attribute"
    level: 2
    href: "#creating-an-account-and-adding-an-attribute"
  - id: "restricting-row-access-for-a-group"
    title: "Restricting row access for a group"
    level: 2
    href: "#restricting-row-access-for-a-group"
  - id: "revoke-access-from-all-users-group"
    title: "Revoke access from All Users group"
    level: 2
    href: "#revoke-access-from-all-users-group"
  - id: "check-settings-as-ms-brown-sees-the-world"
    title: "Check settings as Ms. Brown sees the world"
    level: 2
    href: "#check-settings-as-ms-brown-sees-the-world"
  - id: "limitations-of-row-level-security-with-user-attributes"
    title: "Limitations of row-level security with user attributes"
    level: 2
    href: "#limitations-of-row-level-security-with-user-attributes"
  - id: "further-reading"
    title: "Further reading"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Administration"
    href: "../index.html"
  - title: "Permissions"
    href: "index.html"
---

# Tutorial: Row-level permissions in Metabase

Learn how to set row-level permissions based on people's user attributes.

> Looking for docs on row\-level security? See [Docs: Row and column security](../../../../docs/latest/permissions/row-and-column-security.html).

Metabase’s [Pro and Enterprise plans](../../../../pricing/index.html) include [row and column security](../../../../docs/latest/permissions/row-and-column-security.html) that gives you granular control over the rows and columns that people can see and use in questions.

In this article, we’ll walk through an example of setting up [row\-level security](../../../../docs/latest/permissions/row-and-column-security.html#row-level-security-filter-by-a-column-in-the-table) using the [Sample Database](../../../../glossary/sample-database.html) included with Metabase. For column\-level permissions, see [Column\-level security](column-permissions.html).

> Row and column security was formerly called data sandboxing. It’s the same feature, it just now has a more descriptive name.

## Before you set up row security

You should back up [your Metabase application data](../../../../docs/latest/installation-and-operation/backing-up-metabase-application-data.html). In addition, you may want to check out our [guide to data permissions](data-permissions.html), [guide to collection permissions](collection-permissions.html), and our [permissions overview](../../../../docs/latest/permissions/introduction.html) to get a better sense of how row and column security fits in with Metabase’s permissions system.

## Our scenario

Our goal is to make sure a customer, Ms. Brown, is only able to see table rows related to her account.

## Creating a customer group

Metabase uses groups to organize permissions, so we’ll first need to [create a group](../../../../docs/latest/people-and-groups/managing.html#groups), which we’ll call Customers. To do this, click on the **gears icon** in the navigation sidebar and select \> **Admin settings** \> **People** \> **Groups**. Then choose **Create a Group**.

![The Groups page after creating our Customers group.](../../../images/row-permissions/customer-group.png)

## Creating an account and adding an attribute

Before we can set up row\-level security for the Customers group, we need to [create an account](../../../../docs/latest/people-and-groups/managing.html#creating-an-account) for Ms. Brown, and add an attribute to her account. From **Admin settings** \> **People** tab, we’ll click **Invite Someone**, fill out the names and email fields, and add her to the Customers group.

And here’s the important part: we’ll add an attribute to our new person, Ms. Brown, with a key of `user_id` and a value of `20`.

![Adding Ms. Brown to the Customers group, and giving her an attribute: user_id: 20.](../../../images/row-permissions/add-someone-with-attribute.png)

There’s nothing magical about the `user_id` key: it’s just a variable. We can add attributes with whatever key\-value pairs we choose. What we want is to use a key that corresponds to a column, and a value that corresponds to row values, for the relevant table that we want to restrict. The idea is that we’ll link this attribute to a column in a table to determine which rows Ms. Brown can view.

We’re setting this attribute up manually for the sake of this walkthrough, but we can use single sign\-on services \(SSO\), like [SAML](../../../../docs/latest/people-and-groups/authenticating-with-saml.html) to programmatically assign and synchronize attributes to users.

## Restricting row access for a group

Now that we have our group, and at least one member of that group with an attribute \(Ms. Brown\), we’re ready to head over to the [data permissions page](data-permissions.html) to set up row\-level security for the Sample Database.

In the left\-hand sidebar, we’ll click **Databases** and **Sample Database**. To restrict View data access to the `Orders` table for the Customer group, all we need to do is click on the `Orders` table, navigate to the Customers row and in **View data** column, select **Row and column security** from the dropdown menu.

![Restricting row access for the Customer group for the Orders table.](../../../images/row-permissions/restrict-row-access.png)

If you didn’t edit permissions for the **All Users** group, you’ll see a message warning you that the All Users group has greater access.

![Restricting row access for the Customer group for the Orders table.](../../../images/row-permissions/all-users-warning.png)

What this means: if a person is in multiple user groups, Metabase chooses the **most permissive** access for them. Because all people using your Metabase are always in the All Users group, this means that if All Users group has more permissive access \(e.g. unrestricted access to rows\), this will override the row\-level security that we about to set up. So after we’re done setting up row\-level security, we’ll need to change permissions for the All Users group. For now, click **Revoke access** on the warning. This will revoke table access for the currently selected group only.

Next, Metabase will ask if you want to change the access permissions for this **database**.

![alt text](../../../images/row-permissions/change-access-for-db.png)

Remember that we’re trying to set up row\-level security just for the Orders table. The reason Metabase is asking about the entire database is because our Customers group currently can has permissions to write native \(SQL\) queries. But Metabase doesn’t parse the SQL that people write, so it doesn’t know which tables are being queried \- and so it won’t know if a person with restricted row access is trying to query the restricted table. This means that a person with row\-level restrictions on any table can’t be allowed to write SQL queries, so Metabase warns you that it’ll remove SQL querying permissions. Click **Change** to remove native querying permissions for the Sample Database from the Customers group.

Finally, Metabase will ask you “How do you want to filter this table for users in this group?” and present two options:

- Filter by a column in the table.
- Use a saved question to create a custom view for this table.

For now, we’ll leave the setting as **Filter by a column in the table**—using a saved question is a more advanced feature, and we discuss it [here](data-permissions.html).

![Configure RLS.](../../../images/row-permissions/configure-rls.png)

For the column, we’ll select the `User ID` column of the `Orders` table, and we’ll connect that to the `user_id` attribute from the dropdown menu of attributes we’ve assigned to people.

Metabase will provide us with a summary of the changes we’ve made: “Users in Customers can view rows in the `Orders` table where `User ID` field equals `user_id`.” Let’s save our changes and repeat the process for the `People` table.

- Pick “Row and column security” permissions for the Customers group for the `People` table.
- Select the **Filter by a column** option.
- Select the `ID` column of the `People` table and connect that to the `user_id` attribute.
- Review the summary and click save.

Finally, we’ll need to click the **Save Changes** button to confirm our changes.

## Revoke access from All Users group

When we were setting up row\-level security, Metabase warned us that the All Users group has higher level of access, which will override the rules we set up for Customers. So we’ll need to revoke access from All Users group.

Keep in mind that this means that everyone who *isn’t* in the Customers or Admin groups will lose access to the tables, so if you have more people in your Metabase, you should set up groups and permissions for them before revoking access from All Users.

Go into the permissions settings for the Sample Database \(just like you did for Customers\) and set **View data** permissions to **Blocked**. Note that this will also remove any querying permissions from the group.

## Check settings as Ms. Brown sees the world

Now let’s test out our settings to confirm that our customer, Ms. Brown, can only see orders connected to her user ID. We’ll open our Metabase instance in an incognito browser window and log in as Ms. Brown. When we navigate to the `Orders` table, Ms. Brown will only see the orders she placed \(User ID 20\).

![Ms. Brown will only see orders associated with her ID: 20.](../../../images/row-permissions/orders-user-20.png)

With row\-level security, we can create a single question or dashboard, and rest assured that people with restricted row access to that data will only be able to see the data associated with their account.

If we combine row\-level security with [embedding](../../../../docs/latest/embedding/embedded-analytics-js.html), we can embed these dashboards in our application, and use SSO to pass attributes to the embedded Metabase instance, allowing us to restrict which data do people see on the questions and dashboards embedded in our application. To learn more, see [How to embed Metabase in your app to deliver multi\-tenant, self\-service analytics](../../embedding/multi-tenant-self-service-analytics.html).

## Limitations of row-level security with user attributes

- A user can only have one row and column security configuration for each table per table, so only add users to a single group that has restricted row or column access.
- If a group has SQL querying access to a database, row\-level security policy cannot prevent people in that group from viewing data in those tables.
- By extension, if people in that group have access to questions written in SQL, those questions are unaware of row\-level security policies, and will show people in that group all results, not just the results restricted by row\-level security policies.

Learn more about the [limitations of row and column security](../../../../docs/latest/permissions/row-and-column-security.html#limitations).

## Further reading

- [Row and column security reference](../../../../docs/latest/permissions/row-and-column-security.html) .
- [Column\-level security](column-permissions.html) .

[
      
        

      
      
        
        
      
    ](collection-permissions.html)
[
      
        
        
      
      
        

      
    ](column-permissions.html)
