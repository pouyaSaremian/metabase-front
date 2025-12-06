---


title: "Tutorial: Multiple environments"
description: "Options for spinning up dev, staging, or test environments."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/multi-env
  - /learn/administration/multi-env
toc:
  - id: "tutorial-multiple-environments"
    title: "Tutorial: Multiple environments"
    level: 1
    href: "#tutorial-multiple-environments"
  - id: "one-instance-per-environment"
    title: "One instance per environment"
    level: 2
    href: "#one-instance-per-environment"
  - id: "example-creating-a-self-hosted-staging-instance"
    title: "Example: creating a self-hosted staging instance"
    level: 3
    href: "#example-creating-a-self-hosted-staging-instance"
  - id: "one-collection-per-environment"
    title: "One collection per environment"
    level: 2
    href: "#one-collection-per-environment"
  - id: "example-creating-prod-and-dev-collections"
    title: "Example: creating Prod and Dev collections"
    level: 3
    href: "#example-creating-prod-and-dev-collections"
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

# Tutorial: Multiple environments

Options for spinning up dev, staging, or test environments.

Once you start [running Metabase in production](metabase-in-production.html), you’ll probably want to do your testing and development in separate environments. For most teams, this means making a copy of some \(or all\) of the charts and dashboards in production, making changes to those copies, and then optionally pushing those changes back to production.

For teams that want to make programmatic changes to many Metabase items or settings at once, it’s best to set up [one instance per environment](#one-instance-per-environment). You can also mimic dev and prod environments for [dashboard maintenance](../../../grow-your-data-skills/analytics/editing-dashboards.html) by creating [one collection per environment](#one-collection-per-environment).

## One instance per environment

To set up one instance for each of your environments, you’ll need a **self\-hosted [Pro or Enterprise plan](../../../../pricing/index.html)**. Since self\-hosted Pro and Enterprise plans conveniently [charge per account](../../../../docs/latest/cloud/how-billing-works.html#what-counts-as-a-user-account), you can spin up as many Metabase instances as you want. Just keep in mind that you’ll pay for the total number of users across all your Metabases, so only add the minimum number of users you need to set up your staging or dev instances \(for example, set up a single test user in one group to test permissions, instead of adding all the users from your prod instance\).

To stand up a new environment based on your production Metabase, you’ll use Metabase’s [serialization](../../../../docs/latest/installation-and-operation/serialization.html) feature to create an export of your charts, dashboards, and settings. You can also edit the export’s YAML files before importing it into a new staging instance of Metabase. For example, you can create a set of dashboard templates with [branding](../../../../docs/latest/configuring-metabase/appearance.html) that can be used to populate any new environment.

When it’s time to push changes from staging back to prod, your team will use the same serialization process to export from staging and import it into prod. You can also set up your own integration tests to avoid importing anything that might break your production instance.

### Example: creating a self-hosted staging instance

Let’s say your production instance of Metabase is running on Docker or similar:

1. Make a backup of the application database used for your prod instance.
2. Create a new container called **staging** .
  - Connect to your prod application database using the appropriate [environment variables](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_db_host) .
  - Add your license key using the [`MB_PREMIUM_EMBEDDING_TOKEN`](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_premium_embedding_token) .
  - Include the version tag \(such as `metabase/metabase-enterprise:v1.56.12` \) that matches your prod instance.
3. From the **staging** container, start a fresh Metabase with the following settings:
4. Once Metabase is running in the **staging** container, run the serialization [export](../../../../docs/latest/installation-and-operation/serialization.html) command.
5. Persist the export to any object storage you want.
6. Optional: edit the export’s YAML files. For example, you can run a script to replace `ID = 1` with `ID = 2` .
7. Restart the **staging** container.
8. From the **staging** container, create a fresh application database.
  - Connect to the new application database using the appropriate [environment variables](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_db_host) .
  - Add your license key using the [`MB_PREMIUM_EMBEDDING_TOKEN`](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_premium_embedding_token) .
  - Include the version tag \(such as `metabase/metabase-enterprise:v1.56.12` \) that matches your prod instance.
9. Start Metabase with the serialization \[import\]\(/docs/latest/installation\-and\-operation/serialization command:

The exact steps will depend on your deployment. If you get stuck, you can always [ask one of our success engineers](https://www.metabase.com/help-premium)!

## One collection per environment

To manage changes to Metabase dashboards without serialization, you can use [collections](../../../../docs/latest/exploration-and-organization/collections.html), [collection permissions](../../../../docs/latest/permissions/collections.html), and [history](../../../../docs/latest/exploration-and-organization/history.html) instead.

### Example: creating Prod and Dev collections

Here’s an example of how to set up one “environment” per collection:

1. Create two [collections](../../../../docs/latest/exploration-and-organization/collections.html) called **Prod** and **Dev** .
2. Create two [groups](../../../../docs/latest/people-and-groups/managing.html#creating-a-group) called **End Users** and **Developers** .
  - **Developers** can **Curate** the **Prod** and **Dev** collections.
  - **End Users** can **View** the **Prod** collection.
3. Set [collection permissions](../../../../docs/latest/permissions/collections.html) per group:
  - **Developers** get **Query builder and native** access to tables or databases used in the **Dev** and **Prod** collections.
  - **End Users** have **Row and column security** set up for tables or databases used in the **Prod** collection.
4. Optional: set [data permissions](../../../../docs/latest/permissions/data.html) per group. For example:

Members of the Developers group can [copy](../../../../docs/latest/dashboards/introduction.html#duplicating-a-dashboard) and [move](../../../../docs/latest/exploration-and-organization/collections.html#moving-items-from-collection-to-collection) items between the **Prod** to **Dev** collections to make changes without exposing work in progress. People will also be able to view and revert changes using an item’s [**History**](../../../../docs/latest/exploration-and-organization/history.html).

## Further reading

- [Serialization: preloading dashboards in a new Metabase instance](serialization.html)
- [Working with collection permissions](../permissions/collection-permissions.html)
- [Metabase at scale](metabase-at-scale.html)

[
      
        

      
      
        
        
      
    ](same-page.html)
[
      
        
        
      
      
        

      
    ](serialization.html)
