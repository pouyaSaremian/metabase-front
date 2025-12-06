---


title: "Use cases for row and column security"
description: "Pair row and column security with user attributes to customize data for almost any situation."
redirect_from:
  - /learn/metabase-basics/administration/permissions/row-and-column-security-use-cases
toc:
  - id: "use-cases-for-row-and-column-security"
    title: "Use cases for row and column security"
    level: 1
    href: "#use-cases-for-row-and-column-security"
  - id: "managing-permissions-in-a-multi-tenant-environment"
    title: "Managing permissions in a multi-tenant environment"
    level: 2
    href: "#managing-permissions-in-a-multi-tenant-environment"
  - id: "restricting-the-email-recipient-list-in-a-dashboard-subscription"
    title: "Restricting the email recipient list in a dashboard subscription"
    level: 2
    href: "#restricting-the-email-recipient-list-in-a-dashboard-subscription"
  - id: "selectively-granting-access-to-sensitive-data"
    title: "Selectively granting access to sensitive data"
    level: 2
    href: "#selectively-granting-access-to-sensitive-data"
  - id: "displaying-custom-data-formats-to-different-groups"
    title: "Displaying custom data formats to different groups"
    level: 2
    href: "#displaying-custom-data-formats-to-different-groups"
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

# Use cases for row and column security

Pair row and column security with user attributes to customize data for almost any situation.

> Row and column security was formerly called data sandboxing. It’s the same feature, it just now has a more descriptive name.

## Managing permissions in a multi-tenant environment

If you’re [embedding Metabase](../../../../docs/latest/embedding/introduction.html) for [multi\-tenant self\-service analytics](../../embedding/multi-tenant-self-service-analytics.html), you can use row and column security to make sure tenant A won’t be able to see tenant B’s data, and vice versa.

Row and column security policies are excellent at managing permissions for complex org structures, even if you only have one customer. For example, if your customer is a university, that university could require different permissions for different groups:

- **Admins** should be able to see data from all students.
- **Students** should only see their own data, but not the data of other students.
- **Professors** should see the data from multiple students \(the ones that they teach\), but not all students.

In this scenario, you’d create separate [groups](../../../../docs/latest/people-and-groups/managing.html#groups) for your Admins, Students, and Professors, and then configure row and column security policies for those groups to automatically display a different set of rows or columns to each group.

Your setup will look a bit different depending on whether your tenant data is commingled into one schema or not — you can compare the options using our [Multi\-tenant permissions](multi-tenant-permissions.html) article.

If you’re ready to tinker with row and column security yourself, try the [examples](../../../../docs/latest/permissions/row-and-column-security-examples.html), or have a look in the [docs](../../../../docs/latest/permissions/row-and-column-security.html).

## Restricting the email recipient list in a dashboard subscription

Some members of our community use row and column security to lock down email addresses in Metabase. When creating a [dashboard subscription](../../../../docs/latest/dashboards/subscriptions.html), a person in a group with row and column security configured will only see their own email address in the list of recipients.

Say you have a group of **Professors** who need to send dashboard subscription emails to their respective **Students**. If you configure row and column security for the **Students** group, you’ll automatically prevent students from:

- Sending subscription emails to their **Professors** .
- Seeing the email addresses of other students.

If you only want to restrict email lists without necessarily hiding any rows or columns from a group, use a [security configuration with a custom view](../../../../docs/latest/permissions/row-and-column-security.html#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table) and set the view to `SELECT * FROM table`.

## Selectively granting access to sensitive data

If you work with sensitive information, like financial or medical data, you can use row and column security to:

- Let specific teams see sensitive data on a need\-to\-know basis.
- Hide that sensitive data from everyone else.

For example, say you work in telemedicine, and you have a **Patient Chat** table that records the interactions between a nurse and a telemedicine patient in a schema like this:

| Nurse ID | Start Time | End Time | Transcript |
| --- | --- | --- | --- |
| … | … | … | … |

To ensure that nurses can see the full records \(including the **Transcript** column\) for their own chats, but not the chats of other nurses:

- Create a **Nurse** group with a user attribute for “Nurse ID”, and add your nurses to the group.
- Set up [row\-level security](../../../../docs/latest/permissions/row-and-column-security.html#row-level-security-filter-by-a-column-in-the-table) for the **Nurse** group and **Patient Chat** table so that nurses can only see rows that match their Nurse ID.

Then, to restrict the columns of the chat table, so that everyone else at the company can see the **Nurse ID**, **Start Time**, and **End Time** of a chat, but not the sensitive **Transcript**:

- Create a **Non\-Nurse** group and add non\-nurse employees to the group.
- Set up a [column\-level security](../../../../docs/latest/permissions/row-and-column-security.html#setting-up-column-security) for the **Non\-Nurse** group and **Patient Chat** table that hides the sensitive **Transcript** column.

## Displaying custom data formats to different groups

A lesser\-known use case for row and column security is that you can use them to format data for different groups.

For example, you can display a table’s currency in:

- Pounds \(£\) for people in a **United Kingdom** group.
- Yen \(¥\) for people in a **Japan** group.

Or maybe you want to display a column of datetimes in:

- 24\-hour format for people in a **Military** group.
- 12\-hour format for people in a **Non\-Military** group.

You can do your custom formatting in a SQL question, then use this question to create [custom view](../../../../docs/latest/permissions/row-and-column-security.html#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table) of the data for people in different groups.

## Further reading

- [Managing people in Metabase](../../../../docs/latest/people-and-groups/managing.html)
- [Strategies for delivering customer\-facing analytics](../../embedding/overview.html)
- [Multi\-tenant self\-service analytics](../../embedding/multi-tenant-self-service-analytics.html)

[
      
        

      
      
        
        
      
    ](column-permissions.html)
[
      
        
        
      
      
        

      
    ](keep-tabs-on-your-data.html)
