---
title: "ترکیب داده از پایگاه‌های داده مختلف"
description: "نحوه join کردن جداول از پایگاه‌های داده مختلف در متابیس."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/questions/cross-db-joins
toc:
  - id: "combining-data-from-different-databases"
    title: "ترکیب داده از پایگاه‌های داده مختلف"
    level: 1
    href: "#combining-data-from-different-databases"
  - id: "why-doesn-t-metabase-do-cross-database-joins"
    title: "چرا متابیس joinهای cross-database انجام نمی‌دهد؟"
    level: 2
    href: "#why-doesn-t-metabase-do-cross-database-joins"
  - id: "best-solution-use-a-data-warehouse"
    title: "بهترین راه‌حل: استفاده از یک data warehouse"
    level: 2
    href: "#best-solution-use-a-data-warehouse"
  - id: "combine-series-on-dashboard-cards"
    title: "ترکیب سری‌ها روی کارت‌های داشبورد"
    level: 2
    href: "#combine-series-on-dashboard-cards"
  - id: "postgresql-use-foreign-data-wrappers"
    title: "PostgreSQL: استفاده از Foreign Data Wrapperها"
    level: 2
    href: "#postgresql-use-foreign-data-wrappers"
  - id: "mysql-create-a-view"
    title: "MySQL: ایجاد یک view"
    level: 2
    href: "#mysql-create-a-view"
  - id: "snowflake-create-a-view"
    title: "Snowflake: ایجاد یک view"
    level: 2
    href: "#snowflake-create-a-view"
  - id: "use-a-federated-query-engine"
    title: "استفاده از یک موتور پرس‌وجوی federated"
    level: 2
    href: "#use-a-federated-query-engine"
  - id: "check-your-database-functionality"
    title: "بررسی عملکرد پایگاه داده خود"
    level: 2
    href: "#check-your-database-functionality"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "پرسیدن سؤال‌ها"
    href: "../questions.html"
---

# ترکیب داده از پایگاه‌های داده مختلف

نحوه join کردن جداول از پایگاه‌های داده مختلف در متابیس.

بیایید درباره اینکه چرا ما در متابیس به مردم اجازه join کردن داده از چندین پایگاه داده را نمی‌دهیم (و چند ایده و راه‌حل به شما می‌دهیم اگر واقعاً باید این کار را انجام دهید) صحبت کنیم.

![ترکیب داده از پایگاه داده مختلف](../../../images/cross-db-joins/combining-data.png)

## چرا متابیس joinهای cross-database انجام نمی‌دهد؟

متابیس یک موتور ذخیره‌سازی یا موتور پرس‌وجو نیست. متابیس به پایگاه داده شما متصل می‌شود، پرس‌وجوها را به پایگاه داده ارسال می‌کند؛ سپس خود پایگاه داده پرس‌وجوها را اجرا می‌کند، و متابیس نتایج را می‌کشد و آن‌ها را تجسم می‌کند. داده شما در پایگاه داده شما می‌ماند، و همه پردازش در داخل پایگاه داده شما اتفاق می‌افتد.

بیشتر پایگاه‌های داده برای پردازش کارآمد پرس‌وجوها روی داده خود بهینه شده‌اند، اما راه بومی برای ارتباط با پایگاه‌های داده دیگر ندارند. برای join کردن داده از دو پایگاه داده مختلف، متابیس نیاز به کشیدن داده از چندین پایگاه داده به حافظه خود یا نوشتن آن روی دیسک، اجرای پرس‌وجوها روی آن داده دارد. این *می‌تواند* برای جداول کوچک کار کند، اما به خوبی scale نمی‌شود (بدون ذکر این نکته که متابیس نیاز به ذخیره داده شما *خارج* از پایگاه داده شما دارد).

تصور کنید صدها نفر پرس‌وجوهایی را اجرا می‌کنند که نیاز به join از چندین پایگاه داده دارند، هر کدام با یک تن ردیف، قرار دادن همه آن داده در حافظه متابیس شما، و اجرای پرس‌وجوهای بهینه نشده روی آن داده join شده. این بسیار کند (و بسیار گران) می‌شود.

برخی ابزارهای BI دیگر با ایجاد یک لایه میانی بین پایگاه داده شما و BI برای ذخیره داده این مشکل را دور می‌زنند، که اغلب به معنای نیاز به deploymentهای بزرگ، پیچیده - و *گران* - است.

برای نگه داشتن متابیس سبک و ساده، آن عملکرد را مستقیماً در محصول خود نساخته‌ایم (هنوز! هرگز نگو هرگز - هر از گاهی روی [roadmap محصول متابیس](../../../../roadmap.html) بررسی کن). اما در اینجا برخی راه‌هایی که می‌توانید داده خود را برای اجازه پرس‌وجوهای شامل چندین پایگاه داده تنظیم کنید، در حالی که performance-conscious و در کنترل داده خود باقی می‌مانید.

## بهترین راه‌حل: استفاده از یک data warehouse

([یا یک data lake](../../../grow-your-data-skills/data-landscape/data-mart-data-warehouse-data-lake.html). یا یک data lakehouse. جهان صدف شماست.)

![نمودار یک data warehouse](../../../images/cross-db-joins/data-warehouse.png)

نکته این است: یک فرآیند [ETL](../../../grow-your-data-skills/data-landscape/etl-landscape.html) (یا ELT، یا ELTL، ایده را می‌گیرید) تنظیم می‌کنید تا به طور منظم داده را از همه پایگاه‌های داده مختلف و سیستم‌های third-party که استفاده می‌کنید بیاورد، آن داده را در یک مکان واحد - یک data warehouse - house کند، و از آن data warehouse برای پشتیبانی از همه نیازهای تحلیلی خود استفاده کنید.

مزایا:

- همه داده از قبل در یک مکان است، نیاز به ارسال داده از طریق شبکه به و از پایگاه داده دیگر ندارید.
- معماری data warehouseهای مدرن برای پرس‌وجوهای تحلیلی بهینه شده است.
- شما در کنترل کامل داده خود هستید.

متابیس می‌تواند به همه محبوب‌ترین data warehouseها مثل [Snowflake](../../../../data-sources/snowflake.html)، [Redshift](../../../../data-sources/amazon-redshift.html)، [BigQuery](../../../../data-sources/bigquery.html)، [Databricks](../../../../data-sources/amazon-redshift.html) و سایرین متصل شود. [کدام data warehouse باید استفاده کنم؟](../../../grow-your-data-skills/data-landscape/which-data-warehouse.html) را بررسی کنید.

برای ساخت یک data warehouse، نیاز دارید، حداقل، زیرساخت را تنظیم کنید، یک pipeline برای کپی داده بسازید، و داده را به شکل‌های مناسب برای تحلیل model کنید - یک سرمایه‌گذاری اولیه غیربدیهی. اما یک محیط سازگار، performant، و scalable برای پشتیبانی از تحلیل شما ایجاد می‌کند، پس در آینده جواب می‌دهد.

اگر نمی‌توانید در ساخت یک data warehouse سرمایه‌گذاری کنید، برخی جایگزین‌ها وجود دارند:

## ترکیب سری‌ها روی کارت‌های داشبورد

اگر همه آنچه نیاز دارید ترکیب دو سری روی یک نمودار واحد است، و هر سری بر اساس داده از یک پایگاه داده واحد ساخته شده است، می‌توانید هر دو سری را به یک کارت داشبورد اضافه کنید.

به عنوان مثال، بگویید می‌خواهید تعداد کاربران بر اساس ماه، گرفته شده از پایگاه داده Users خود، را روی همان نمودارها و میانگین مقدار پرداخت بر اساس ماه از پایگاه داده Finance خود با هم نشان دهید. همه آنچه نیاز دارید افزودن آن سری‌ها به یک کارت داشبورد واحد است—هیچ join cross-database نیاز نیست.

مستندات ما را برای [ترکیب سؤال‌های ذخیره شده](../../../../docs/latest/dashboards/multiple-series.html#combining-multiple-questions-on-one-dashboard-card) ببینید.

![ترکیب دو سری روی یک داشبورد](../../../images/cross-db-joins/combine-series.png)

## PostgreSQL: استفاده از Foreign Data Wrapperها

اگر می‌خواهید داده از دو پایگاه داده Postgres (یا یک پایگاه داده Postgres و برخی پایگاه‌های داده دیگر) را ترکیب کنید، و نمی‌خواهید یک data warehouse بسازید، می‌توانید از یک [Foreign Data Wrapper (FDW)](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) استفاده کنید. Foreign Data Wrapperها به پایگاه داده Postgres شما اجازه خواندن داده از data storeهای remote، شامل پایگاه‌های داده دیگر را می‌دهند.

![نمودار یک postgres foreign data wrappers](../../../images/cross-db-joins/fdw.png)

برای پرس‌وجو از یک پایگاه داده Postgres از دیگری می‌توانید از [extension `postgres_fdw`](https://www.postgresql.org/docs/current/postgres-fdw.html) که بخشی از توزیع رسمی PostgreSQL است استفاده کنید.

فرض کنیم داریم:

1. یک پایگاه داده `db1` با جدول `table1` در schema `public`،
2. یک پایگاه داده `db2` با جدول `table2` در schema `public`

و می‌خواهیم داده از `table1` و `table2` را با هم پرس‌وجو کنیم.

جداول از `db2` را در یک schema در `db1` mirror می‌کنیم، پس ممکن است به `db1` متصل شویم (مثلاً، با متابیس) و پرس‌وجوهایی برای دسترسی به داده از `db2` اجرا کنیم.

1. در ابزار admin پایگاه داده خود (نه در متابیس)، این اسکریپت را روی `db1` اجرا کنید. مطمئن شوید نام‌ها و رمزهای خود را جایگزین کنید. ``` ------ Run on DB1: ------ -- Add the postgres_fdw extension CREATE EXTENSION postgres_fdw; -- Create a server object to represent the foreign database -- Specify the connection information for DB2 in OPTIONS -- In this script we're connecting to a database inside the same server and that's why we use 'localhost' CREATE SERVER db2_server FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'localhost', dbname 'db2'); -- Create a user mapping for the foreign server -- It maps the user accessing DB1 (for example, metabase_user) to a user accessing DB2 (your_db2_user) -- The user in DB1 will use that role to access the remote DB2 server CREATE USER MAPPING FOR metabase_user SERVER db2_server OPTIONS (user 'your_db2_user', password 'your_db2_password'); -- Import public.table2 from DB2 into public schema of DB1. -- You can use other schemas or create a new schema specifically for the foreign tables IMPORT FOREIGN SCHEMA public LIMIT TO (table2) FROM SERVER db2_server INTO public; -- You should be able to query table2 from DB1 now SELECT * FROM table2; ``` اگر با مشکلی مواجه شدید، [مستندات postgres_fdw](https://www.postgresql.org/docs/current/postgres-fdw.html) را بررسی کنید
2. متابیس را به پایگاه داده PostgreSQL خود `db1` (آن که جداول foreign را *در* آن mirror کردید) متصل کنید. وقتی اتصال برقرار شد، باید جدول foreign `table2` در `db1` (همراه با `table1`) در "Browse data" در sidebar nav متابیس ظاهر شود.
3. حالا که می‌توانید هم `table1` و هم `table2` را از یک اتصال به `db1` پرس‌وجو کنید، باید قادر به ایجاد پرس‌وجوهایی که داده از `table1` و `table2` را با استفاده از query builder یا SQL join می‌کنند باشید.

Foreign data wrapperهای دیگری وجود دارند - مثلاً یک FDW برای پرس‌وجو از پایگاه‌های داده Oracle یا MySQL از Postgres - به عنوان ابزارهای third-party در دسترس هستند، اما اگر تصمیم به استفاده از FDW third-party گرفتید، بررسی کنید که هنوز به طور فعال maintain می‌شوند. [فهرست foreign data wrapperها در wiki PostgreSQL](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) را بررسی کنید.

## MySQL: ایجاد یک view

MySQL یک راه بومی برای پرس‌وجوی داده از یک پایگاه داده مختلف روی همان سرور با استفاده از syntax مثل `database.schema.table.field` ارائه می‌دهد. اما در متابیس، وقتی به یک پایگاه داده (بیایید آن را `db1` بنامیم) متصل می‌شوید، متابیس نمی‌داند پایگاه داده دیگری `db2` روی همان سرور وجود دارد، پس قادر به اجرای پرس‌وجوها روی `db1` که به `db2` ارجاع می‌دهند نخواهید بود.

راه‌حل ایجاد یک view mirror کردن داده از `db2` در داخل `db1` است.

![نمودار یک MySQL view استفاده شده برای "mirror" کردن یک جدول](../../../images/cross-db-joins/mysql-view.png)

پس بگویید دارید:

1. یک پایگاه داده `db1` با جدول `table1`،
2. یک پایگاه داده `db2` با جدول `table2`،

و می‌خواهید داده از `table1` و `table2` را join کنید.

1. در ابزار admin پایگاه داده خود (نه در متابیس)، یک view در `db1` ایجاد کنید که `table2` را از `db2` انتخاب می‌کند: ``` ------ Run on DB1: ------ -- Create a view for db2.table2 inside db1. CREATE VIEW table2 AS SELECT * FROM db2.table2; ```
2. متابیس را به پایگاه داده MySQL خود `db1` (آن که view را در آن ایجاد کردید) متصل کنید. وقتی اتصال برقرار شد، باید view `table2` در `db1` (همراه با `table1`) در "Browse data" در sidebar nav متابیس ظاهر شود.
3. حالا که می‌توانید هم `table1` و هم `table2` را از یک اتصال به `db1` دسترسی داشته باشید، باید قادر به ایجاد پرس‌وجوهایی که داده از `table1` و `table2` را با استفاده از query builder یا SQL join می‌کنند باشید.

## Snowflake: ایجاد یک view

درست مثل MySQL، Snowflake یک راه بومی برای پرس‌وجوی داده از یک پایگاه داده مختلف با استفاده از syntax مثل `database.schema.table` ارائه می‌دهد. اما در متابیس، وقتی به یک پایگاه داده (بیایید آن را `db1` بنامیم) متصل می‌شوید، متابیس نمی‌داند پایگاه داده دیگری `db2` وجود دارد، پس قادر به اجرای پرس‌وجوها روی `db1` که به `db2` ارجاع می‌دهند نخواهید بود.

راه‌حل ایجاد یک view mirror کردن داده از `db2` در داخل `db1` است. پس بگویید دارید:

1. یک پایگاه داده `db1` با جدول `table1` در schema `public`،
2. یک پایگاه داده `db2` با جدول `table2` در schema `public`،

و می‌خواهید داده از `table1` و `table2` را join کنید.

1. در ابزار admin پایگاه داده خود (نه در متابیس)، یک view در `db1` ایجاد کنید که `table2` را از `db2` انتخاب می‌کند: ``` ------ Run on DB1: ------ -- Create a view for db2.public.table2 inside db1. CREATE VIEW table2 AS SELECT * FROM db2.public.table2; ```
2. متابیس را به پایگاه داده Snowflake خود `db1` (آن که view را در آن ایجاد کردید) متصل کنید. وقتی اتصال برقرار شد، باید view `table2` در `db1` (همراه با `table1`) در "Browse data" در sidebar nav متابیس ظاهر شود.
3. حالا که می‌توانید هم `table1` و هم `table2` را از یک اتصال به `db1` دسترسی داشته باشید، باید قادر به ایجاد پرس‌وجوهایی که داده از `table1` و `table2` را با استفاده از query builder یا SQL join می‌کنند باشید.

## استفاده از یک موتور پرس‌وجوی federated

کار یک موتور پرس‌وجوی federated دادن یک رابط واحد به شما برای پرس‌وجو و تحلیل داده از منابع داده مختلف است. می‌توانید موتور پرس‌وجوی federated خود را به چندین پایگاه داده متصل کنید، سپس متابیس خود را به موتور federated متصل کنید، و همه داده را از طریق آن پرس‌وجو کنید گویی در یک پایگاه داده واحد است.

![نمودار یک موتور پرس‌وجوی federated](../../../images/cross-db-joins/federated-query-engine.png)

به سرعت یک data warehouse اختصاصی نخواهد بود، چون data warehouseها می‌توانند داده را به طور کارآمدتر ذخیره کنند و پرس‌وجوها را بهینه کنند، اما می‌تواند یک راه‌حل میانی خوب باشد.

متابیس می‌تواند به چندین موتور پرس‌وجوی federated محبوب متصل شود: [Presto](../../../../data-sources/presto.html)، [Trino و Starburst](../../../../data-sources/starburst.html)، و [Athena](../../../../data-sources/amazon-athena.html).

## بررسی عملکرد پایگاه داده خود

اگر از پایگاه داده دیگری غیر از PostgresSQL یا MySQL استفاده می‌کنید، و نمی‌توانید از یک موتور پرس‌وجوی federated استفاده کنید یا یک data warehouse بسازید، با پایگاه داده خاص خود بررسی کنید - ممکن است از قبل عملکردی که نیاز دارید برای حل مورد استفاده خاص خود دارید.

ایده: اگر پایگاه داده شما راهی برای خواندن داده از پایگاه‌های داده دیگر دارد، سپس می‌توانید از آن عملکرد برای دریافت داده از `db2` به `db1` استفاده کنید، سپس متابیس خود را به `db1` متصل کنید، و داده از `db2` در `db1` آماده برای پرس‌وجو (و join) ظاهر شود.

به عنوان مثال، [جداول خارجی BigQuery](https://cloud.google.com/bigquery/docs/external-tables)، یا [پرس‌وجوهای federated Redshift](https://docs.aws.amazon.com/redshift/latest/dg/federated-overview.html) ممکن است برای برخی موارد استفاده کار کنند. [Databricks](https://docs.databricks.com/aws/en/query-federation/) و [ClickHouse](https://clickhouse.com/docs/integrations/index) نیز عملکرد مشابه ارائه می‌دهند.

[
      
        

      
      
        
        

      
    ](joins-in-metabase.html)
[
      
        
        

      
      
        
        

      
    ](multi-aggregation.html)
