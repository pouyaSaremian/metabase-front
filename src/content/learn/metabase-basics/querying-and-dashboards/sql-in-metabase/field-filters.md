---


title: "Tutorial: Field filters for SQL questions"
description: "Learn how to use Metabase Field Filters in SQL queries to build smarter filter widgets."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/field-filters
  - /learn/building-analytics/sql-templates/field-filters
  - /learn/sql-questions/field-filters
toc:
  - id: "tutorial-field-filters-for-sql-questions"
    title: "Tutorial: Field filters for SQL questions"
    level: 1
    href: "#tutorial-field-filters-for-sql-questions"
  - id: "introduction-to-field-filters"
    title: "Introduction to Field Filters"
    level: 2
    href: "#introduction-to-field-filters"
  - id: "distinguishing-field-filters-from-simple-text-number-and-date-variables"
    title: "Distinguishing Field Filters from simple Text, Number, and Date variables"
    level: 2
    href: "#distinguishing-field-filters-from-simple-text-number-and-date-variables"
  - id: "creating-a-sql-filter-widget-with-a-dropdown-menu"
    title: "Creating a SQL filter widget with a dropdown menu"
    level: 2
    href: "#creating-a-sql-filter-widget-with-a-dropdown-menu"
  - id: "creating-sophisticated-sql-filter-widgets-for-date-fields"
    title: "Creating sophisticated SQL filter widgets for date fields"
    level: 2
    href: "#creating-sophisticated-sql-filter-widgets-for-date-fields"
  - id: "field-filter-gotchas"
    title: "Field Filter gotchas"
    level: 2
    href: "#field-filter-gotchas"
  - id: "omit-the-direct-assignment-in-the-where-clause"
    title: "Omit the direct assignment in the WHERE clause"
    level: 3
    href: "#omit-the-direct-assignment-in-the-where-clause"
  - id: "learn-more-about-sql-filters-and-variables"
    title: "Learn more about SQL filters and variables"
    level: 2
    href: "#learn-more-about-sql-filters-and-variables"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Querying and dashboards"
    href: "../index.html"
  - title: "SQL in Metabase"
    href: "index.html"
---

# Tutorial: Field filters for SQL questions

Learn how to use Metabase Field Filters in SQL queries to build smarter filter widgets.

> Looking for docs on field filters? See [Docs: field filters](../../../../docs/latest/questions/native-editor/field-filters.html).

This article shows how to add smart SQL filter widgets to your SQL queries in Metabase using a special type of variable called a **field filter**.

## Introduction to Field Filters

![A Field Filter is a special type of variable that can wire up a variable in your SQL code to a field (column) in a table, which enables it to create a](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/example-field-filter-powering-filter-widget.gif)

For Metabase questions written in SQL, we can use [basic variable types](sql-variables.html)—Text, Number, and Date—to create simple SQL filter widgets. To create “smarter” filter widgets that can display options specific to the data in the filtered columns, such as to create a dropdown menu of values, we can use a special variable type called a [field filter](../../../../docs/latest/questions/native-editor/field-filters.html).

![To create a Field Filter, add a variable to your SQL code by enclosing the variable in double braces (Mustache style), and select Field Filter as the Variable type from the Variables sidebar.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/field-filter-selection.png)

Field filters can initially confuse some people, because people expect them to behave like basic input variables \(which they don’t\). However, Field Filters are well worth learning, as you can use them to create much more sophisticated filter widgets. This article will go through Field Filters in depth, but first let’s discuss the main differences between Field Filter variables and basic Text, Number, and Date variables.

## Distinguishing Field Filters from simple Text, Number, and Date variables

1. *Field Filters are optional by default.* If no value is given, the SQL query will run as if the Field Filter didn’t exist. You do, however, have the option to require a value.
2. *Field Filters use a special syntax so they can handle SQL code behind the scenes.* You simply supply a Field Filter to a `WHERE` clause \(without a column or operator\) and the Field Filter will manage the SQL code for you. This allows the code to account for multiple selections people make in the filter widget.

The second point can be especially confusing, so let’s unpack it with an example.

## Creating a SQL filter widget with a dropdown menu

We’ll use the [Sample Database](../../../../glossary/sample-database.html) included with Metabase to add a filter widget with a dropdown menu to a question written in SQL. Let’s say we want to create a SQL question that grabs all the orders from the `Orders` table, but we want to give people the option to filter the results by category in the `Products` table. We *could* create a `Products.category` filter with a basic input variable, like so:

```
SELECT *
FROM Orders
LEFT JOIN Products
ON Orders.product_id = Products.id
[[WHERE Products.category = {{category}}]];

```

In this case, we enclose the `WHERE` clause in double brackets to make the input optional, and use the **Variables sidebar** to set the variable type to `Text` and the filter widget label to `Category`. This approach works, but it’s not ideal:

- In order to filter the data, people would have to know which categories exist \(and spell them correctly when they input them\).
- Plus, they can’t select multiple categories at a time, as the `{{category}}` variable only accepts a single value.

By contrast, a Field Filter will map the variable to the actual column data. The filter widget connected to the variable then “knows” which categories are available, and can present a dropdown menu of those categories, like so:

![A filter widget created by a Field Filter that](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/field-filter-dropdown.png)

A word on the widget: the dropdown menu is just one of the options available. In the case of fields of type `Category`, like our `category` field in the `Products` table, we could also set the filter widget as a search box or a plain input box. Admins can configure field settings in the **Data Model tab** of the **Admin Panel**.

![In the Data Model tab of the Admin Panel, Admins can edit the field settings. For fields of type Category, Admins can select three options for field widgets: Search box, A list of all values (dropdown), or Plain input box.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/data-model-field-settings.png)

Note that Metabase will automatically use a search box if the number of distinct values in the column is greater than 300, even if you select the dropdown option. Learn more about [editing metadata](../../../../docs/latest/data-modeling/metadata-editing.html) in our documentation.

Now, let’s get back to our question. Here’s the syntax for the `Products.category` Field Filter. Note the omission of the column and operator before the variable in the `WHERE` clause—we’ll talk more about Field Filter syntax below:

```
SELECT *
FROM orders
LEFT JOIN products
ON orders.product_id = products.id
WHERE {{category}};

```

With our variable in place in the `WHERE` clause, we can use the **Variables sidebar** to wire up our variable as a Field Filter. We’ll set:

- `Variable type` to `Field Filter` .
- `Field to map to` to `Products → Category` . This setting tells Metabase to connect the variable in our SQL code to the `category` column of the `Products` table.
- `Field widget type` to `category` .
- `Field widget label` to `category` .

![Setting a variable](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/product-category-field-filter.gif)

We won’t require the variable, so no default value is necessary. If the query runs without a specified value in the filter widget, the query will return records from all categories.

Note that the `WHERE` clause does not specify which column the variable should be equal to. This implicit syntax \(the hidden SQL code\) allows the Field Filter to handle the SQL code behind the scenes to accommodate multiple selections.

## Creating sophisticated SQL filter widgets for date fields

We can create a basic input variable of type Date, which will add a SQL filter widget with a simple date filter. If, instead, we use a Field Filter variable, we can connect that variable to a field \(column\) that contains dates, which unlocks a lot more options for configuring our filter widget. Here’s the SQL:

```
SELECT *
FROM ORDERS
WHERE {{created_at}}

```

![Setting the Field to map to option to a field containing dates will open up a range of Filter widget types: Month and Year, Quarter and Year, Single Date, Date Range, Relative Date, and Date Filter.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/filter-widget-type.png)

Here are the different widget types for Field Filters mapped to Date fields:

- Month and Year
- Quarter and Year
- Single Date
- Date Range
- Relative Date
- Date Filter

Each widget type offers different ways for people to filter the results. Here are three SQL field filter examples:

![The Month and Year widget type.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/month-and-year.png)

![The Relative Date widget type.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/relative-date.png)

![The Date Filter widget type.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/date-filter.gif)

The Date Filter widget type offers the most flexibility, allowing people to filter by relative dates and ranges.

## Field Filter gotchas

There are a few places that people typically get stuck when trying to implement Field Filters.

### Omit the direct assignment in the WHERE clause

As stated above, the SQL code around Field Filters is not exactly street legal. You may be tempted to write:

```
-- DON'T DO THIS
WHERE category = {{ category }}

```

because that is the correct syntax for a `WHERE` clause in standard SQL. But that syntax won’t work for Field Filters. The correct syntax for Field Filters omits the `=` operator:

```
WHERE {{ category }}

```

The reason for this shorthand is so that Metabase can, behind the scenes, insert the SQL code for situations like multiple selections, e.g., when a user selects multiple categories from a dropdown.

## Learn more about SQL filters and variables

Check out our guide to [basic SQL input variables \- Text, Number, and Date](sql-variables.html).

You can also read our documentation on:

- [Basic input variables](../../../../docs/latest/questions/native-editor/sql-parameters.html)
- [Field Filters](../../../../docs/latest/questions/native-editor/field-filters.html)

[
      
        

      
      
        
        
      
    ](sql-variables.html)
[
      
        
        
      
      
        

      
    ](snippets.html)
