---


title: "Metabase for data engineers"
description: "Stuff data engineers should know about Metabase."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/data-engineering
toc:
  - id: "metabase-for-data-engineers"
    title: "Metabase for data engineers"
    level: 1
    href: "#metabase-for-data-engineers"
  - id: "metabase-as-a-client-to-databases"
    title: "Metabase as a client to databases"
    level: 2
    href: "#metabase-as-a-client-to-databases"
  - id: "database-types-and-metabase"
    title: "Database types and Metabase"
    level: 2
    href: "#database-types-and-metabase"
  - id: "async-processes-and-metadata"
    title: "Async processes and metadata"
    level: 2
    href: "#async-processes-and-metadata"
  - id: "disabling-the-get-filter-values-process"
    title: "Disabling the “Get filter values” process"
    level: 3
    href: "#disabling-the-get-filter-values-process"
  - id: "disabling-fingerprinting"
    title: "Disabling fingerprinting"
    level: 3
    href: "#disabling-fingerprinting"
  - id: "how-to-identify-the-queries-that-metabase-is-sending-to-the-database"
    title: "How to identify the queries that Metabase is sending to the database"
    level: 2
    href: "#how-to-identify-the-queries-that-metabase-is-sending-to-the-database"
  - id: "performance-considerations"
    title: "Performance considerations"
    level: 2
    href: "#performance-considerations"
  - id: "the-notify-endpoint"
    title: "The notify endpoint"
    level: 2
    href: "#the-notify-endpoint"
  - id: "metadata-storage"
    title: "Metadata storage"
    level: 2
    href: "#metadata-storage"
  - id: "the-metabasemetadata-table"
    title: "The _metabase_metadata table"
    level: 2
    href: "#the-metabasemetadata-table"
breadcrumbs:
  - title: "Home"
    href: "../../../index.html"
  - title: "Administration"
    href: "../index.html"
  - title: "Administration and operation"
    href: "index.html"
---

# Metabase for data engineers

Stuff data engineers should know about Metabase.

- Metabase is a data visualization tool based on the philosophy of self\-service analytics. We want everyone to be able to ask their own questions about their data. How easy it’ll be for people to ask questions depends on the data they have available and how you’ve modeled that data.
- Metabase is a self\-contained web application that exposes REST APIs: you can use Metabase’s UI, or you can talk with it via our [REST API](../../../../docs/latest/api.html) . You can integrate it with the rest of your stack with just HTTP calls.
- Like with any data tool, be mindful of permissions. If you give Metabase a root account on your database, anyone who has SQL access in Metabase will be able to do anything that a root user can, so be deliberate about the credentials you use to connect Metabase to your database and the permissions you give to Metabase groups.

## Metabase as a client to databases

Metabase uses JDBC drivers to connect to databases, but we don’t use the pure drivers: we wrap these in Clojure code \(Metabase’s backend is written in Clojure\). We do this wrapping for a reason: our drivers are high\-level abstractions that transform database data types into simpler data types that people can understand. Our drivers also pull in metadata from your database so Metabase can learn how to work with your data.

You shouldn’t expect the same response time from a query that you run in Metabase compared with a query run from a native client \(or, if your database is a SaaS product, the database’s web console\). But we’re talking just a few milliseconds: the time Metabase needs to transform these Java objects that the JDBC protocol speaks into JSON.

## Database types and Metabase

Metabase supports many databases officially and some others unofficially \(via community drivers\). If you need to connect to a database that we don’t support, check if your database engine can do federated queries to other engines. Many database engines support connections to all kinds of services, and if these connections work, you’ll be able to use Metabase fine.

If you don’t have any way to connect Metabase to your database, you could pipe your data into a supported database. There are many products on the market that let you pick a source and destination, and in a few hours, you’ll be good to go.

## Async processes and metadata

To make it easy for people to query your data, Metabase [syncs metadata](../../../../docs/latest/databases/sync-scan.html) from your database:

- **Sync and scan** : Metabase asks for the list of schemas, tables, columns, and column data types.
- **Get filter values** : During this process, Metabase will fire queries to your database asking for the first 1,000 unique values of any text field it finds.
- **Fingerprinting** : This process runs after the first two. It takes a sample of the first 10,000 values of numbers and dates to understand the minimum, maximum, and average of every field. This helps Metabase offer better x and y axes on charts, and more.

Metabase will also pick up the comments you add to tables and columns in your `CREATE TABLE` statements. It’ll show these comments in the data reference, as well as the query builder and table view \(hover over a column to see its description\).

You can change sync and scan processes from hourly to daily. You can also [turn off syncing and scanning for specific tables](../../../../docs/latest/databases/sync-scan.html#disabling-syncing-and-scanning-for-specific-tables).

You can also turn off getting filter values and fingerprinting, but you should understand the implications:

### Disabling the “Get filter values” process

Disabling this process is a good choice if your database has massive tables or simply doesn’t care about `LIMIT` clauses and performs a full column scan, like BigQuery does.

Consequence: people won’t see the list of available values when trying to filter on a text field in questions and dashboards. They’ll have to either enter a value in an input or search box. If you configure the field to show a search box, Metabase will fire a `LIKE` query statement to the database to look for the value that the person enters, so take precautions if your database struggles with those types of queries.

If even the search box approach is a problem, you might want to consider getting the field values through an external process. You can grab those values more efficiently, then populate the filter values in Metabase dashboards via an API call. For example, you could create a data pipeline queries your database to get the unique values of a column via optimized statements \(e.g., HLL or approximate count\), and then call Metabase’s API to update the filters in the dashboards.

### Disabling fingerprinting

When you hover over column headings, you might see that the data’s off: like maximums, minimums, or averages that aren’t right.

## How to identify the queries that Metabase is sending to the database

Sync and scan processes:

- Query the information schema, or any schema that your database uses to keep the inventory of schemas, tables, and columns, or
- Query `SELECT TRUE` or `SELECT 1` on specific tables.

If the query ends with `LIMIT 1000`, then you’re seeing the `get-filter-values` process, while if you’re seeing queries that end with `LIMIT 10000`, then you’re most probably seeing fingerprinting queries. You can’t override those limits. The limits determine how and what data is displayed in the application, like filters or charts.

## Performance considerations

As databases grow in size, some metadata queries might be very costly to run. For example, if your database has 500 million rows, you might not want Metabase running queries to fingerprint data or get field values at random times. We recommend taking the following precautions when your data grows considerably \(both when tables get big in terms of rows or when your database has more than 100 tables\):

- Go to your database settings under **Admin settings** \> **Databases** .
- Enable **Choose when sync and scan happens** .
- Set the sync and scan cadence to weekly.
- Set **Scan for filter values** to “Never, I’ll do it manually if I need to” or to “When a filter is added”.
- Keep fingerprinting disabled.

The “100 tables” number we mention above is heavily dependent on how fast your queries can run. If you have 100 tables of 5 rows each with 10 columns, that’s not the same as 100 tables of 500 columns each with 10 million rows, so take this recommendation with a grain of salt.

## The notify endpoint

Metabase has a special endpoint designed specifically for data pipelines and/or very large databases. This endpoint tells Metabase when a data pipeline has finished running so Metabase can go to a specific table or schema and crawl it.

If your data is big enough, or if you need to tell Metabase at any moment to go over a specific table or schema \(maybe the hourly job isn’t enough or very costly\), consider using the notify endpoint and leaving the sync job to run only once a day.

The endpoint comes in two flavors, which need the Metabase database internal ID passed in the URL:

- `/api/notify/db/<id>` : endpoint will rescan known tables

This endpoint needs the following parameters passed in the body of the HTTP call:

- `scan` : ‘full’ or ‘schema’, means that you want Metabase to go over all the schemas or a specific one
- `table_name` or `table_id` : you want Metabase to go over a specific table, not all. Useful for atomic syncs.
- `synchronous`: if you want Metabase to start the process right away, or schedule it for the next few minutes \(when the internal task runner starts polling for available jobs\). Useful if people need to see updated changes as soon as possible.
- `/api/notify/db/<id>/new-table` : endpoint will search for a new table in the database and scan it.

This endpoint requires the new table name and a schema name. These parameters should be in the body of the HTTP call.

## Metadata storage

Metabase stores all the metadata in the application database. If at some point Metabase can’t find a schema, table, or column that was there before, it will soft delete the record in Metabase’s application database \(it puts a flag in the database to completely hide it from the UI\).

Don’t give Metabase access to data that people won’t ever query. If Metabase accesses those objects in the database and syncs them, they’ll be kept there forever—even if you remove access to them. Having those tables in there won’t cause any kind of performance penalty in the Metabase backend, but it will make the backups of the Metabase application database bigger than they need to be.

## The _metabase_metadata table

If you haven’t added any comments on your `CREATE TABLE` statements or your database simply doesn’t support it, you can create a special table in the database with the following structure:

```
CREATE TABLE public._metabase_metadata (
    keypath character varying(255) NOT NULL,
    value character varying(255)
);
INSERT INTO public._metabase_metadata VALUES
    ('table.description', 'This is a table description'),
    ('table.field.description', 'This is a field description');

```

You can use this pattern to insert the metadata you want for your tables and fields.

[
      
        

      
      
        
        
      
    ](metabase-at-scale.html)
[
      
        
        
      
      
        

      
    ](metabase-api.html)
