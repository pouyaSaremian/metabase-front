---
title: "آموزش: استفاده از serialization برای preload کردن داشبوردها در یک instance متابیس جدید"
description: "نحوه استفاده از ویژگی serialization متابیس برای کپی کردن سؤال‌ها، داشبوردها، مجموعه‌ها، تنظیمات، و بیشتر از یک instance متابیس به یک instance متابیس جدید."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/serialization
  - /learn/administration/serialization
toc:
  - id: "tutorial-use-serialization-for-preloading-dashboards-in-a-new-metabase-instance"
    title: "آموزش: استفاده از serialization برای preload کردن داشبوردها در یک instance متابیس جدید"
    level: 1
    href: "#tutorial-use-serialization-for-preloading-dashboards-in-a-new-metabase-instance"
  - id: "metabase-serialization"
    title: "Serialization متابیس"
    level: 2
    href: "#metabase-serialization"
  - id: "the-plan"
    title: "برنامه"
    level: 2
    href: "#the-plan"
  - id: "prerequisites"
    title: "پیش‌نیازها"
    level: 2
    href: "#prerequisites"
  - id: "step-1-create-a-dedicated-network"
    title: "گام 1 - ایجاد یک شبکه اختصاصی"
    level: 2
    href: "#step-1-create-a-dedicated-network"
  - id: "step-2-spin-up-two-metabases-source-and-target"
    title: "گام 2 - راه‌اندازی دو متابیس: source و target"
    level: 2
    href: "#step-2-spin-up-two-metabases-source-and-target"
  - id: "source-metabase"
    title: "متابیس source"
    level: 3
    href: "#source-metabase"
  - id: "target-metabase"
    title: "متابیس target"
    level: 3
    href: "#target-metabase"
  - id: "add-users-to-our-source-metabase"
    title: "افزودن کاربران به متابیس source ما"
    level: 3
    href: "#add-users-to-our-source-metabase"
  - id: "step-3-create-dashboards-and-collections-in-the-source-metabase"
    title: "گام 3 - ایجاد داشبوردها و مجموعه‌ها در متابیس source"
    level: 2
    href: "#step-3-create-dashboards-and-collections-in-the-source-metabase"
  - id: "step-4-export-from-source-metabase"
    title: "گام 4 - Export از متابیس source"
    level: 2
    href: "#step-4-export-from-source-metabase"
  - id: "settings"
    title: "تنظیمات"
    level: 3
    href: "#settings"
  - id: "databases"
    title: "پایگاه‌های داده"
    level: 3
    href: "#databases"
  - id: "collections"
    title: "مجموعه‌ها"
    level: 3
    href: "#collections"
  - id: "step-5-import-into-target-metabase"
    title: "گام 5 - Import به متابیس target"
    level: 2
    href: "#step-5-import-into-target-metabase"
  - id: "step-6-verify-dashboard-and-collection-in-target-metabase"
    title: "گام 6 - تأیید داشبورد و مجموعه در متابیس target"
    level: 2
    href: "#step-6-verify-dashboard-and-collection-in-target-metabase"
  - id: "serialization-limitations"
    title: "محدودیت‌های serialization"
    level: 2
    href: "#serialization-limitations"
  - id: "serialization-via-the-api"
    title: "Serialization از طریق API"
    level: 2
    href: "#serialization-via-the-api"
  - id: "other-use-cases-for-serialization"
    title: "موارد استفاده دیگر برای serialization"
    level: 2
    href: "#other-use-cases-for-serialization"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مدیریت و عملیات"
    href: "index.html"
---

# آموزش: استفاده از serialization برای preload کردن داشبوردها در یک instance متابیس جدید

نحوه استفاده از ویژگی serialization متابیس برای کپی کردن سؤال‌ها، داشبوردها، مجموعه‌ها، تنظیمات، و بیشتر از یک instance متابیس به یک instance متابیس جدید.

## Serialization متابیس

> Serialization فقط در
      [Pro](../../../../product/pro.html) و
      [Enterprise](../../../../product/enterprise.html)
      (هم self-hosted و هم در متابیس کلود)
      در دسترس است.

بسیاری از مشتریان در [طرح‌های Pro و Enterprise](../../../../pricing/index.html) از متابیس در یک محیط multi-tenant استفاده می‌کنند که نیاز به آپلود مجموعه‌ای از پیش تعریف شده از [سؤال‌ها](../../../../docs/latest/questions/start.html) یا [داشبوردها](../../../../docs/latest/dashboards/start.html) دارد، یا برای تنظیم یک instance متابیس جدید، یا یک اتصال پایگاه داده جدید.

این مقاله نحوه انجام موارد زیر را پوشش می‌دهد:

1. ایجاد مجموعه پیش‌فرض سؤال‌ها و داشبوردها.
2. Export کردن آن داشبوردها.
3. Re-import کردن آن داشبوردها به یک instance جدید.

به طور خاص، از دستورات `export` و `import` در [ویژگی serialization](../../../../docs/latest/enterprise-guide/serialization.html) متابیس برای انجام گام‌های دو و سه، به علاوه کمی curation دستی فایل‌های export شده استفاده خواهیم کرد.

از [Docker](../../../../docs/latest/installation-and-operation/running-metabase-on-docker.html) برای اجرای متابیس‌های source و target خود، و از [PostgresSQL](../../../../docs/latest/installation-and-operation/configuring-application-database.html) برای [پایگاه‌های داده برنامه](../../../../glossary/application-database.html) آن‌ها استفاده خواهیم کرد. توصیه نمی‌کنیم از پایگاه داده پیش‌فرض [H2](../../../../docs/latest/installation-and-operation/configuring-application-database.html) برای production استفاده کنید.

در حالی که این آموزش از دستورات `export` و `import` متابیس استفاده می‌کند، همچنین می‌توانید [داده برنامه متابیس را از طریق API serialize کنید](../../../../docs/latest/installation-and-operation/serialization.html#serialization-via-the-api).

## برنامه

یک متابیس source ایجاد می‌کنیم، یک داشبورد ایجاد می‌کنیم، آن داشبورد را export می‌کنیم، و آن داشبورد را به یک متابیس جدید (target ما) import می‌کنیم. در اینجا برنامه:

1. [ایجاد یک شبکه اختصاصی به نام metanet](#step-1---create-a-dedicated-network).
2. [راه‌اندازی دو متابیس: source و target](#step-2---spin-up-two-metabases-source-and-target).
3. [ایجاد داشبوردها و مجموعه‌ها در متابیس source](#step-3---create-dashboards-and-collections-in-the-source-metabase)
4. [Export کردن داده از متابیس source](#step-4---export-from-source-metabase).
5. [Import کردن export source به متابیس target](#step-5---import-into-target-metabase).
6. [تأیید اینکه داشبورد و مجموعه ما در متابیس target load شده است](#step-6---verify-dashboard-and-collection-in-target-metabase).

## پیش‌نیازها

نیاز دارید [Docker](https://docs.docker.com/get-docker/) روی ماشین خود نصب داشته باشید.

## گام 1 - ایجاد یک شبکه اختصاصی

برای ایجاد یک شبکه اختصاصی به نام "metanet"، دستور زیر را از ترمینال انتخابی خود اجرا کنید:

```
docker network create metanet

```

می‌توانید ایجاد شبکه را با این تأیید کنید:

```
docker network ls

```

شبکه یک scope محلی و یک driver bridge خواهد داشت.

## گام 2 - راه‌اندازی دو متابیس: source و target

دو متابیس به نام‌های `metabase-source` و `metabase-target` راه‌اندازی کنید (اگرچه می‌توانید این محیط‌ها را هر چه می‌خواهید نام‌گذاری کنید). توجه کنید که از `--rm -d` هنگام ایجاد این containerهای Docker استفاده می‌کنیم تا هر دو وقتی آن‌ها را متوقف می‌کنید حذف شوند و در پس‌زمینه اجرا شوند. آزادانه آن flagها را برای تغییر آن رفتار تغییر دهید.

### متابیس source

پایگاه داده Postgres را ایجاد کنید:

```
docker run --rm -d --name postgres \
    -p 5433:5432 \
    -e POSTGRES_USER=metabase \
    -e POSTGRES_PASSWORD=knockknock \
    --network metanet \
    postgres:12

```

متابیس source ما را ایجاد کنید، و آن را به پایگاه داده Postgres که تازه ایجاد کردیم متصل کنید:

```
docker run --rm -d --name metabase-source \
    -p 5001:3000 \
    -e MB_DB_TYPE=postgres \
    -e MB_DB_DBNAME=metabase \
    -e MB_DB_PORT=5432 \
    -e MB_DB_USER=metabase \
    -e MB_DB_PASS=knockknock \
    -e MB_DB_HOST=postgres \
    --network metanet \
    metabase/metabase-enterprise:v1.56.12

```

می‌توانید logهای container را برای مشاهده پیشرفت container بررسی کنید:

```
docker logs metabase-source

```

وقتی خطی که شامل "Metabase initialization COMPLETE" است را می‌بینید، می‌توانید یک مرورگر را به `http://localhost:5001` باز کنید تا instance متابیس خود را مشاهده کنید.

### متابیس target

تنظیم یک متابیس target مشابه است. روی شبکه metanet ما، یک پایگاه داده Postgres به عنوان پایگاه داده برنامه خود تنظیم می‌کنیم، سپس متابیس دیگری را در یک container Docker دیگر راه‌اندازی می‌کنیم.

توجه به تغییرات به:

- پورت‌ها برای هم Postgres (5434) و هم سرور متابیس (5002)
- نام‌های instance: `postgres-target` و `metabase-target`

پایگاه داده برنامه:

```
docker run --rm -d --name postgres-target \
    -p 5434:5432 \
    -e POSTGRES_USER=metabase \
    -e POSTGRES_PASSWORD=knockknock \
    --network metanet postgres:12

```

Instance متابیس:

```
docker run --rm -d --name metabase-target \
    -p 5002:3000 \
    -e MB_DB_TYPE=postgres \
    -e MB_DB_DBNAME=metabase \
    -e MB_DB_PORT=5432 \
    -e MB_DB_USER=metabase \
    -e MB_DB_PASS=knockknock \
    -e MB_DB_HOST=postgres-target \
    --network metanet \
    metabase/metabase-enterprise:v1.56.12

```

بعد از اینکه instanceهای متابیس ما initialization خود را کامل کردند (صبر کنید، این می‌تواند یک یا دو دقیقه طول بکشد)، باید اکنون دو متابیس راه‌اندازی شده داشته باشیم:

- metabase-source در `http://localhost:5001`
- metabase-target در `http://localhost:5002`

### افزودن کاربران به متابیس source ما

بیایید یک حساب Admin، و دو کاربر پایه به instance metabase-source خود اضافه کنیم.

می‌توانید [کاربران را به متابیس خود به صورت دستی اضافه کنید](../../../../docs/latest/configuring-metabase/setting-up-metabase.html) (یعنی، در برنامه متابیس)، اما در اینجا یک اسکریپت bash سریع که یک کاربر Admin (کاربر اولیه) و دو کاربر پایه ایجاد می‌کند:

نیاز دارید [jq](https://jqlang.github.io/jq/) نصب داشته باشید تا JSON را در این اسکریپت handle کنید.

```
#!/bin/sh

ADMIN_EMAIL=${MB_ADMIN_EMAIL:-admin@metabase.local}
ADMIN_PASSWORD=${MB_ADMIN_PASSWORD:-Metapass123}

METABASE_HOST=${MB_HOSTNAME}
METABASE_PORT=${MB_PORT:-3000}

echo "⌚︎ Waiting for Metabase to start"
while (! curl -s -m 5 http://${METABASE_HOST}:${METABASE_PORT}/api/session/properties -o /dev/null); do sleep 5; done

echo "😎 Creating admin user"

SETUP_TOKEN=$(curl -s -m 5 -X GET \
    -H "Content-Type: application/json" \
    http://${METABASE_HOST}:${METABASE_PORT}/api/session/properties \
    | jq -r '.["setup-token"]'
)

MB_TOKEN=$(curl -s -X POST \
    -H "Content-type: application/json" \
    http://${METABASE_HOST}:${METABASE_PORT}/api/setup \
    -d '{
    "token": "'${SETUP_TOKEN}'",
    "user": {
        "email": "'${ADMIN_EMAIL}'",
        "first_name": "Metabase",
        "last_name": "Admin",
        "password": "'${ADMIN_PASSWORD}'"
    },
    "prefs": {
        "allow_tracking": false,
        "site_name": "Metawhat"
    }
}' | jq -r '.id')

echo -e "\n👥 Creating some basic users: "
curl -s "http://${METABASE_HOST}:${METABASE_PORT}/api/user" \
    -H 'Content-Type: application/json' \
    -H "X-Metabase-Session: ${MB_TOKEN}" \
    -d '{"first_name":"Basic","last_name":"User","email":"basic@somewhere.com","login_attributes":{"region_filter":"WA"},"password":"'${ADMIN_PASSWORD}'"}'

curl -s "http://${METABASE_HOST}:${METABASE_PORT}/api/user" \
    -H 'Content-Type: application/json' \
    -H "X-Metabase-Session: ${MB_TOKEN}" \
    -d '{"first_name":"Basic 2","last_name":"User","email":"basic2@somewhere.com","login_attributes":{"region_filter":"CA"},"password":"'${ADMIN_PASSWORD}'"}'

echo -e "\n👥 Basic users created!"

```

کد بالا را به عنوان `create_users.sh` ذخیره کنید، و آن را executable کنید:

```
chmod +x create_users.sh

```

سپس اجرا کنید:

```
MB_HOSTNAME=localhost MB_PORT=5001 ./create_users.sh

```

با instance metabase-source شما راه‌اندازی شده، و کاربران شما ایجاد شده، `http://localhost:5001` را باز کنید و به عنوان کاربر admin که ایجاد کردید وارد شوید. ID کاربر `admin@metabase.local` و رمز عبور `Metapass123` است.

باید یک instance تازه از متابیس ببینید.

![یک instance تازه از متابیس.](../../../images/serialization/fresh-metabase.png)

وقتی وارد شدید، [کلید لایسنس خود را فعال کنید](../../../../docs/latest/installation-and-operation/activating-the-enterprise-edition.html).

## گام 3 - ایجاد داشبوردها و مجموعه‌ها در متابیس source

نیاز به مقداری داده برنامه برای export داریم، پس بیایید برخی داشبوردها با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس ایجاد کنیم. یا بهتر، بگذارید متابیس برخی داشبوردها را برای ما ایجاد کند!

در بخش `Try These X-Rays Based On Your Data`، روی کارتی با یک **صاعقه زرد** که چیزی مثل `A look at Products` می‌گوید کلیک کنید. متابیس مجموعه‌ای از سؤال‌ها را برای شما ایجاد می‌کند که می‌توانید به عنوان یک داشبورد ذخیره کنید.

![یک X-ray از جدول Products در پایگاه داده نمونه شامل شده با متابیس.](../../../images/serialization/x-ray-of-product-table.png)

روی دکمه **Save this** کلیک کنید، و متابیس داشبورد و سؤال‌های آن را در یک [مجموعه](../../../../docs/latest/permissions/collections.html) با عنوان چیزی مثل `A look at Products` ذخیره می‌کند.

این مجموعه به یک مجموعه والد با عنوان `Automatically Generated Dashboards` ذخیره می‌شود. می‌توانید این مجموعه را با کلیک روی لوگوی متابیس در بالا سمت چپ نوار navigation برای بازگشت به صفحه اصلی پیدا کنید. از صفحه اصلی، در بخش **Our Analytics**، روی بخش `Automatically Generated Dashboards` کلیک کنید. از آنجا باید مجموعه `A look at your Products table` را ببینید.

![یک مجموعه با عنوان A look at your Products table.](../../../images/serialization/products-table-collection.png)

بعد، یک مجموعه جدید ایجاد کنید. می‌توانید آن را هر چه می‌خواهید بنامید؛ ما از نام هیجان‌انگیز `Default collection` استفاده می‌کنیم، و آن را به مجموعه **Our Analytics** ذخیره می‌کنیم.

![ایجاد یک مجموعه جدید، با عنوان Default Collection.](../../../images/serialization/default-collection.png)

سپس مجموعه `A look at Products` را به مجموعه تازه ایجاد شده `Default collection` خود منتقل می‌کنیم. روی صفحه مجموعه `A look at Products`، روی سه نقطه **…** کلیک کنید و **Move** را انتخاب کنید.

## گام 4 - Export از متابیس source

اینجا جایی است که واقعاً شروع به استفاده از [ویژگی serialization](../../../../docs/latest/installation-and-operation/serialization.html) متابیس می‌کنیم.

با instance `metabase-source` ما که با برخی سؤال‌ها تنظیم شده است، اکنون زمان export کردن این داده و import کردن آن به `metabase-target` ما است. به این ترتیب مجبور نیستیم مجموعه Default Collection را به صورت دستی در متابیس target دوباره ایجاد کنیم.

ابتدا یک دایرکتوری در دایرکتوری `/tmp` خود به نام `metabase_data` برای ذخیره export خود ایجاد می‌کنیم:

```
cd /tmp
mkdir metabase_data

```

بعد، دستور export را اجرا می‌کنیم.

```
docker run --rm --name metabase-export \
    --network metanet \
    -e MB_DB_CONNECTION_URI="postgres://postgres:5432/metabase?user=metabase&password=knockknock" \
    -v "/tmp/metabase_data:/target" \
    metabase/metabase-enterprise:v1.56.12 "export /target"

```

این دستور یک instance متابیس موقت به نام `metabase-export` ایجاد می‌کند. این متابیس موقت به پایگاه داده برنامه Postgres برای متابیس source ما متصل می‌شود، و داده برنامه آن را export می‌کند.

اگر همه چیز خوب پیش برود، بعد از چند ثانیه باید مقداری خروجی ببینید، به دنبال یک پیام در ترمینال شما که می‌گوید `serialization.cmd :: Export to '/target' complete! 🚛💨 📦`

برای تأیید export، `cd` به دایرکتوری خود: `/tmp/metabase_data`. باید چیزی مثل دو دایرکتوری و سه فایل YAML ببینید:

- [`collections/`](#collections)
- [`databases/`](#databases)
- [`settings.yaml`](#settings)

### تنظیمات

فایل تنظیمات شامل تعدادی گزینه است که می‌توانید هنگام تنظیم یک instance جدید پیکربندی کنید. چیزی شبیه این خواهد بود:

```
aggregated-query-row-limit: null
application-colors: null
application-favicon-url: null
application-font: null
application-font-files: null
application-logo-url: null
application-name: null
available-fonts: null
available-locales: null
available-timezones: null
breakout-bins-num: null
custom-formatting: null
custom-geojson: null
custom-geojson-enabled: null
default-maps-enabled: null
enable-embedding: null
enable-nested-queries: null
enable-sandboxes?: null
enable-whitelabeling?: null
enable-xrays: null
hide-embed-branding?: null
humanization-strategy: null
landing-page: null
loading-message: null
native-query-autocomplete-match-style: null
persisted-models-enabled: null
report-timezone: null
report-timezone-long: null
report-timezone-short: null
search-typeahead-enabled: null
show-homepage-data: null
show-homepage-pin-message: null
show-homepage-xrays: null
show-lighthouse-illustration: null
show-metabot: null
show-static-embed-terms: null
site-locale: null
site-name: Metawhat
source-address-header: null
start-of-week: null
subscription-allowed-domains: null
unaggregated-query-row-limit: null
uploads-database-id: null
uploads-enabled: null
uploads-schema-name: null

```

### پایگاه‌های داده

این دایرکتوری شامل همه تنظیمات [فراداده](../../../../glossary/metadata.html) برای پایگاه‌های داده متصل شما است. در این مورد، فقط پایگاه داده نمونه شامل شده با متابیس را داریم.

### مجموعه‌ها

در دایرکتوری مجموعه‌ها، مجموعه‌ها، داشبوردها، و سؤال‌هایی که تنظیم کردیم هستند. دایرکتوری `eDuYBjvKEwhFg6QxtBziP_default_collection` مجموعه‌های فرعی و سایر آیتم‌ها را دارد. هر آیتم با یک کد پیشوند شده است تا از collision نام جلوگیری شود.

در اینجا نگاهی به یک فایل yaml مجموعه:

```
name: Default collection
description: null
entity_id: qmJu_4D1gviNjHUCcn978
slug: default_collection
created_at: "2024-03-12T15:01:45.955848Z"
archived: false
type: null
parent_id: null
personal_owner_id: null
namespace: null
authority_level: null
serdes/meta:
  - id: qmJu_4D1gviNjHUCcn978
    label: default_collection
    model: Collection

```

در اینجا نگاهی به یک سؤال نمونه (به نام card) با عنوان `Products per category`:

```
ame: Products per Category
description: null
entity_id: bnghENFKtgeKRMfU3sF7y
created_at: "2024-03-12T14:59:01.795343Z"
creator_id: admin@metabase.local
display: row
archived: false
collection_id: JI0l2T_O-_EhdAxk2pdin
collection_preview: true
collection_position: null
query_type: query
dataset: false
cache_ttl: null
database_id: Sample Database
table_id:
  - Sample Database
  - PUBLIC
  - PRODUCTS
enable_embedding: false
embedding_params: null
made_public_by_id: null
public_uuid: null
parameters: []
parameter_mappings: []
dataset_query:
  database: Sample Database
  query:
    aggregation:
      - - count
    breakout:
      - - field
        - - Sample Database
          - PUBLIC
          - PRODUCTS
          - CATEGORY
        - null
    source-table:
      - Sample Database
      - PUBLIC
      - PRODUCTS
  type: query
result_metadata: null
visualization_settings:
  column_settings: null
  graph.colors:
    - "#EF8C8C"
  graph.dimensions:
    - CATEGORY
  graph.metrics:
    - count
  graph.series_labels:
    - null
serdes/meta:
  - id: bnghENFKtgeKRMfU3sF7y
    label: products_per_category
    model: Card
initially_published_at: null
metabase_version: v1.49.0
type: question

```

## گام 5 - Import به متابیس target

نیاز دارید حداقل یک حساب admin در متابیس target ما load شده باشد تا بتوانید یک export را آپلود کنید. می‌توانید از طریق برنامه وارد شوید تا آن کاربر را ایجاد کنید، یا از اسکریپتی که در بالا استفاده کردیم استفاده کنید: فقط به یاد داشته باشید `MB_PORT` را به `5002` تغییر دهید، چون آن پورتی است که به متابیس target خود اختصاص دادیم. به عنوان مثال، `cd` به دایرکتوری جایی که اسکریپت create\_users.sh خود را ذخیره کردید، و اجرا کنید:

```
MB_HOSTNAME=localhost MB_PORT=5002 ./create_users.sh

```

می‌توانیم همه این تنظیمات را به متابیس target آپلود کنیم، اما فرض می‌کنیم فقط می‌خواهیم مجموعه پیش‌فرض خود را import کنیم.

بیایید دایرکتوری `/tmp/metabase_data` خود را کپی کنیم تا بتوانیم محتوای اصلی را نگه داریم و تغییراتی به کپی ایجاد کنیم.

```
cp -r /tmp/metabase_data /tmp/serialize_import

```

چون هر instance متابیس شامل پایگاه داده نمونه است، و هیچ تغییری به فراداده ایجاد نکردیم، بیایید دایرکتوری `databases` را حذف کنیم. اجرا کنید:

```
rm -r /tmp/serialize_import/databases

```

برای تأیید تغییرات، می‌توانید `diff` را برای دیدن تغییرات بین دایرکتوری serialized\_data اصلی، و دایرکتوری serialized\_load که برای import به متابیس target استفاده خواهید کرد اجرا کنید:

```
cd /tmp
diff -r metabase_data serialize_import

```

و باید موارد زیر را ببینید:

```
Only in metabase_data: databases

```

قبل از import کردن داده به متابیس target خود، نیاز دارید [لایسنس خود را فعال کنید](../../../../docs/latest/installation-and-operation/activating-the-enterprise-edition.html).

اکنون، با دایرکتوری `/tmp/serialize_import` ما تنظیم شده، می‌توانیم دستور import را برای import کردن فراداده به متابیس target خود اجرا کنیم.

```
docker run --rm --name metabase-export \
    --network metanet \
    -e MB_DB_CONNECTION_URI="postgres://postgres-target:5432/metabase?user=metabase&password=knockknock" \
    -v "/tmp/serialize_import:/target" \
    metabase/metabase-enterprise:v1.56.12 "import /target"

```

## گام 6 - تأیید داشبورد و مجموعه در متابیس target

اکنون، اگر به متابیس target در `http://localhost:5002` وارد شوید، باید مجموعه `Default collection` ما را آماده ببینید، که شامل مجموعه `A look at your Products table` ما است.

و این تمام است: یک instance تازه از متابیس را با یک مجموعه شامل یک داشبورد پر از سؤال preload کرده‌اید!

## محدودیت‌های serialization

فقط توجه کنید که dumpهای serialization شامل داده‌های خاصی نیستند:

- تنظیمات مجوز
- حساب‌های کاربری یا تنظیمات
- [هشدارها](../../../../docs/latest/questions/alerts.html) روی سؤال‌های ذخیره شده
- مجموعه‌های شخصی یا محتوای آن‌ها

## Serialization از طریق API

همچنین می‌توانید داده برنامه متابیس را از طریق API import و export کنید. [Serializing متابیس از طریق API](../../../../docs/latest/installation-and-operation/serialization.html#serialization-via-the-api) را ببینید. Export و import از طریق API می‌تواند برای instanceهای روی متابیس کلود (جایی که به محیط دسترسی ندارید) مفید باشد.

## موارد استفاده دیگر برای serialization

استفاده از ویژگی serialization برای export کردن سؤال‌ها و داشبوردها برخی امکان‌های جالب را باز می‌کند، از جمله:

- *افزودن کنترل نسخه به سؤال‌ها و داشبوردها*. می‌توانید فراداده دانلود شده را به یک repository check in کنید، و تغییرات به آن داده را از طریق نرم‌افزار کنترل نسخه مثل git مدیریت کنید.
- *تنظیم یک محیط staging برای متابیس*. می‌توانید با یک محیط staging بازی کنید تا از تغییرات راضی شوید، سپس فراداده را export کنید، و آن را به یک محیط production آپلود کنید.

با ویژگی serialization بازی کنید، و به ما اطلاع دهید چگونه از آن استفاده می‌کنید [در انجمن ما](https://discourse.metabase.com/).

[
      
        
        

      
      
        
        

      
    ](multi-env.html)
[
      
        
        

      
      
        
        

      
    ](git-based-workflow.html)
