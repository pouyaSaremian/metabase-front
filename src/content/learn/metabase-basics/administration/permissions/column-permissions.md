---


title: "Tutorial: Column-level permissions in Metabase"
description: "Learn how to use a saved SQL query to display specific rows and columns to different people."
redirect_from:
  - /learn/metabase-basics/administration/permissions/column-permissions
  - /learn/metabase-basics/administration/permissions/data-sandboxing-column-permissions
  - /learn/permissions/data-sandboxing-column-permissions
toc:
  - id: "tutorial-column-level-permissions-in-metabase"
    title: "Tutorial: Column-level permissions in Metabase"
    level: 1
    href: "#tutorial-column-level-permissions-in-metabase"
  - id: "the-plan"
    title: "The plan"
    level: 2
    href: "#the-plan"
  - id: "create-a-collection-accessible-only-by-admins"
    title: "Create a collection accessible only by admins"
    level: 2
    href: "#create-a-collection-accessible-only-by-admins"
  - id: "create-a-sql-query"
    title: "Create a SQL query"
    level: 3
    href: "#create-a-sql-query"
  - id: "restrict-the-view-of-the-products-table-using-our-saved-question"
    title: "Restrict the view of the Products table using our saved question"
    level: 2
    href: "#restrict-the-view-of-the-products-table-using-our-saved-question"
  - id: "check-settings-as-the-restricted-user"
    title: "Check settings as the restricted user"
    level: 2
    href: "#check-settings-as-the-restricted-user"
  - id: "use-a-sql-question-to-create-a-custom-restricted-view-of-a-table"
    title: "Use a SQL question to create a custom restricted view of a table"
    level: 2
    href: "#use-a-sql-question-to-create-a-custom-restricted-view-of-a-table"
  - id: "recap"
    title: "Recap"
    level: 2
    href: "#recap"
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

# Tutorial: Column-level permissions in Metabase

Learn how to use a saved SQL query to display specific rows and columns to different people.

> Looking for docs on column security? See [Docs: Row and column security](../../../../docs/latest/permissions/row-and-column-security.html).

Row and column security is available on [Pro and Enterprise plans](../../../../pricing/index.html) as a way to specify what data people can access based on who they are. Our article on [row\-level permissions](row-permissions.html) covered how to restrict rows based on a person’s user attribute. As an example, we created a user, Ms. Brown, and gave her access to rows in the `People` and `Orders` tables that matched her `user_id` attribute.

In this article, we’ll walk through how to limit the rows *and columns* of the Products table that Ms. Brown can view. In this case, we want Ms. Brown to:

- Only see products she’s placed an order for in the `Products` table \(row\-level security\)
- Only see the `Title` , `Category` , and `Price` columns \(and not any of the other columns\).

> Row and column security was formerly called data sandboxing. It’s the same feature, it just now has a more descriptive name.

## The plan

We’re going to:

1. Create a collection that only admins can access.
2. Create a new SQL query. The `Products` table doesn’t include information about users. So to limit Ms. Brown’s access to the `Products` table, we’ll need to find out which products Ms. Brown ordered. We’ll write a SQL query that combines data from the `Products` table with data from the `Orders` table. In combining these tables, we’ll create a new tabular result that only includes the columns we want.
3. Restrict Ms. Brown’s view of the `Products` table by displaying our query’s results instead of the original table.
4. Confirm our the access by verifying what data Ms. Brown can see.

## Create a collection accessible only by admins

We’ll want to create a collection to store the SQL query that we’ll use to restrict Ms.Brown’s view of the `Products` table . Let’s call it `Restricted view questions` and set permissions on this collection so that only admins can curate its questions. This way non\-admins won’t be able to alter the question and change the “dimensions” of the restricted view, for example by including columns Ms. Brown shouldn’t be able to see. See [Collection permissions](collection-permissions.html) to learn more about setting up permissions.

### Create a SQL query

From the top bar, click on **\+ New** \> **SQL query** to [ask a SQL question](../../../../docs/latest/questions/native-editor/writing-sql.html). Select the [Sample Database](../../../../glossary/sample-database.html) included with Metabase.

Here’s the query we’ll paste into the editor:

```
SELECT DISTINCT PRODUCTS.TITLE,
                PRODUCTS.CATEGORY,
                PRODUCTS.PRICE
FROM PRODUCTS
     LEFT JOIN ORDERS ON ORDERS.PRODUCT_ID=PRODUCTS.ID
[[WHERE ORDERS.USER_ID IN ({{user_id}})]]

```

And here’s what the query does:

- Returns a result with columns from the `Products` table: `Title` , `Category` , and `Price` .
- Checks that the products are distinct, i.e., only one row for each product.
- Optionally filters this list to only show products that were ordered by the user with restricted access.

The double square brackets `[[…]]` around the `WHERE` clause make the clause optional. The double curly braces `{{user_id}}` define the variable. We’ll use this `{{user_id}}` variable when using this question to restrict access by user.

Let’s run the query, which gives this result:

![SQL query to create new table.](../../../images/column-permissions/sql-question.png)

Now let’s save this question as `Products from Orders`, store it in the `Restricted view questions` collection we created, and opt out of adding the question to a dashboard.

One point to reiterate here: we only selected columns from the `Products` table, as our query should only return columns from the table we want restrict.

## Restrict the view of the Products table using our saved question

Now that we’ve created our `Products from Orders` question, it’s time to restrict the `Products` table. We’ll set up the permissions so that Metabase inserts the `user_id` attribute we gave Ms. Brown in the article on [row permissions](row-permissions.html) into the `{{user_id}}` variable in our saved SQL question, `Products from Orders`.

We’ll click on the **gears icon**, select **Admin settings**, and click on the **Permissions** tab. On the left, under **Databases**, we’ll click on `Sample Database` and `Products`.

If you went through our tutorial on [row permissions](row-permissions.html) already, you should have permissions for All users group set to “View data: Blocked” and “Create queries: Query builder only”. If not, you’ll need to [make those edits](row-permissions.html#revoke-access-from-all-users-group) before setting up permissions for the Customers group.

Since Ms. Brown is a member of the Customers group, and Metabase [grants data permissions to groups](data-permissions.html), not individuals, we’ll restrict access to the `Products` table for the Customers group. Click on the droptdown in the “View data” column for the “Customers” group and select **Row and column security**.

![Set up access to the Products table for the Customer group.](../../../images/column-permissions/set-up-column-security.png)

When Metabase asks **How do you want to filter this table?** section, we’ll select the second filter option: **Use a saved question to create a custom view for this table.**

We’ll navigate to our admin\-only `Restricted view questions` collection and select our question, `Products from Orders`. For **PARAMETER OR VARIABLE**, we’ll select the variable we included in our SQL query, `{{user_id}}`. For the `USER ATTRIBUTE`, we’ll select `user_id`.

![Configuring column security](../../../images/column-permissions/configure-row-column-security.png)

Our summary now says:

- People in the Customers group
- Can view rows in the `Products from Orders` question
- Where the `user_id` variable’s value equals `user_id` attribute.

Let’s click **Save** in the modal, then confirm our changes by clicking on **Save Changes** in the notice bar.

## Check settings as the restricted user

Let’s see what our restricted `Products` table looks like from Ms. Brown’s perspective. Open a private browser window, navigate to our Metabase, and sign in as Ms. Brown.

When we open up the `Products` table using the [data browser](../../querying-and-dashboards/data-browser.html), we can confirm that Ms. Brown can only see a list of the products she’s ordered, and only the three columns we included in our saved `Products from Orders` question: `Title`, `Category`, and `Price`.

![The Products table from the Metabase home page only showing products that Ms. Brown has ordered.](../../../images/column-permissions/products-table.png)

If Ms. Brown asks a question that queries the `Products` table, she’ll still only see results based on the products she’s ordered. If she has access to a question that includes columns outside of her custom view, she’ll see an error.

## Use a SQL question to create a custom restricted view of a table

While in theory you *could* use a query builder question to create a custom view of a table, you should always use SQL questions instead. Behind the scenes, questions create SQL queries based off the [filters](../../../../docs/latest/questions/query-builder/filters.html), [summaries](../../../../docs/latest/questions/query-builder/summarizing-and-grouping.html), and [joins](../../../../docs/latest/questions/query-builder/join.html) in our question. When you create a custom view based on a query builder question, you may not realize the full extent of the information you’re giving people access to.

## Recap

When restricting row and column access with questions:

- [Use SQL questions](../../../../docs/latest/permissions/row-and-column-security.html#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table) .
- Make sure your saved SQL question only returns columns from the table you intend to restrict.
- Save questions that you’re using to create custom views in a dedicated admin\-only collection.

## Further reading

- [Tutorial: row\-level permissions](row-permissions.html)
- [Row and column security documentation](../../../../docs/latest/permissions/row-and-column-security.html)
- [Permissions overview](../../../../docs/latest/permissions/introduction.html)
- [Guide to data permissions](data-permissions.html)
- [Working with collection permissions](collection-permissions.html)
- [Single sign on with SAML](../../../../docs/latest/people-and-groups/authenticating-with-saml.html)
- [Configuring Metabase appearance](../../../../docs/latest/configuring-metabase/appearance.html)

[
      
        

      
      
        
        
      
    ](row-permissions.html)
[
      
        
        
      
      
        

      
    ](row-and-column-security-use-cases.html)
