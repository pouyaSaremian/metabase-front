---
title: "سریال‌سازی (Serialization)"
summary: چگونه با استفاده از سریال‌سازی، محتوای متابیس را بین اینستنس‌ها صادر (Export) و وارد (Import) کنیم؛ مناسب برای کنترل نسخه، محیط‌های staging و تکثیر دارایی‌ها.
redirect_from:
  - /docs/latest/enterprise-guide/serialization
---

# سریال‌سازی (Serialization)

{% include plans-blockquote.html feature="Serialization" %}

وقتی کار با متابیس را جلو می‌برید، معمولاً بیش از یک اینستنس متابیس خواهید داشت؛ مثلاً چند اینستنس تست و توسعه و یکی دو اینستنس Production، یا شاید برای هر دفتر یا منطقهٔ جغرافیایی یک متابیس جداگانه داشته باشید.

برای چنین سناریوهایی، متابیس قابلیتی به نام سریال‌سازی فراهم کرده است که به شما اجازه می‌دهد از محتوای یک اینستنس متابیس یک _Export_ بسازید و آن را در یک یا چند اینستنس دیگر _Import_ کنید.

**Export** کل محتوای اینستنس مبدأ متابیس را به‌صورت فایل‌های YAML سریال‌سازی می‌کند.

**Import** این فایل‌های YAML را می‌خواند و بر اساس آن‌ها در اینستنس مقصد، آیتم‌ها را ایجاد یا به‌روزرسانی می‌کند.

برای اجرای دستورات `export` و `import` دو راه اصلی وجود دارد:

- [استفاده از دستورات CLI](#serialization-with-cli-commands)
- [استفاده از API](#serialization-via-the-api)

> ما علاقه‌مندیم سریال‌سازی را مطابق جریان کاری شما بهبود بدهیم. اگر این قابلیت برایتان مهم است، یک Issue مرتبط را در GitHub [Upvote کنید](https://github.com/metabase/metabase/issues?q=is%3Aissue+is%3Aopen+serialization+label%3AOperation%2FSerialization). اگر Issue مرتبطی وجود ندارد، لطفاً یکی بسازید و نیاز خود را توضیح دهید.

## کاربردهای سریال‌سازی

- **محیط‌های Staging.** برای داشبوردهای مهم می‌توانید گردش‌کار Staging→Production داشته باشید: محتوای اینستنس Staging را Export کنید و در اینستنس(های) Production Import کنید.
- **کنترل نسخه.** می‌توانید فایل‌های Export‌شده را در سیستم کنترل نسخه قرار دهید و تغییرات آن‌ها را بررسی کنید؛ چون فایل‌های YAML خوانایی خوبی دارند.
- **تکثیر دارایی‌ها در اینستنس‌های دیگر متابیس.** می‌توانید دادهٔ «قالب» (Template) را از یک متابیس مبدأ Export و در یک یا چند اینستنس مقصد Import کنید.

برای مطالعهٔ بیشتر:

- [اجرای چند محیط](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/multi-env)
- [راه‌اندازی گردش‌کار مبتنی بر Git](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/git-based-workflow)

## Export چگونه کار می‌کند؟

- [چه چیزهایی Export می‌شوند](#what-gets-exported)
- [تنظیمات سراسری متابیس که Export می‌شوند](#general-metabase-settings-that-are-exported)
- [سفارشی‌سازی موارد Export](#customize-what-gets-exported)
- [نمونهٔ یک سؤال سریال‌سازی‌شده](#example-of-a-serialized-question)
- [استفاده از Entity ID برای شناسایی آیتم‌ها](#metabase-uses-entity-ids-to-identify-and-reference-metabase-items)

### چه چیزهایی Export می‌شوند؟

متابیس فقط نهادهای زیر را Export می‌کند:

- کالکشن‌ها (اما کالکشن‌های شخصی فقط در صورت مشخص‌کردن صریح در [گزینه‌های Export](#customize-what-gets-exported) Export می‌شوند)
- داشبوردها
- سؤال‌های ذخیره‌شده
- اسناد (بدون نظرها)
- Actions
- مدل‌ها
- متریک‌ها
- Snippetها
- مدل داده و متادیتای جدول‌ها
- Segmentها
- تنظیمات اشتراک‌گذاری عمومی برای سؤال‌ها و داشبوردها
- [تنظیمات سراسری متابیس](#general-metabase-settings-that-are-exported)
- رویدادها و Timelineها
- رشته‌های اتصال دیتابیس (Database connection strings)، فقط در صورت مشخص‌کردن در [گزینه‌های Export](#customize-what-gets-exported)

سایر نهادها — از جمله کاربران، گروه‌ها، مجوزها، هشدارها، اشتراک‌ها و نظرهای اسناد — Export نمی‌شوند.

متابیس خروجی سریال‌سازی را در دایرکتوری‌ای شامل فایل‌های YAML ذخیره می‌کند. این Export شامل موارد زیر است:

- دایرکتوری‌هایی که حاوی فایل‌های YAML برای نهادهای مختلف متابیس هستند. بسته به چیزی که Export کرده‌اید و محتوای متابیس، ساختاری مشابه زیر خواهید دید:

  - `actions`
  - `collections`
    - `cards`
    - `dashboards`
    - `timelines`
  - `databases`

  هنگام سریال‌سازی از طریق API، این دایرکتوری [به‌صورت یک فایل `.tar.gz` فشرده می‌شود](#you-must-compress-your-files-when-serializing-via-api-calls).

- یک فایل `settings.yaml` که شامل بخشی از [تنظیمات سراسری متابیس](#general-metabase-settings-that-are-exported) است.

جزئیات اتصال دیتابیس‌ها به‌صورت پیش‌فرض Export نمی‌شود، اما می‌توانید [Export را طوری تنظیم کنید](#customize-what-gets-exported) که آن‌ها را نیز دربر بگیرد.

### تنظیمات سراسری متابیس که Export می‌شوند

در این‌جا فهرست تنظیمات کلی‌ای است که متابیس در فایل `settings.yaml` Export می‌کند. برای جزئیات بیشتر دربارهٔ تنظیمات، به بخش [Configuring Metabase](../configuring-metabase/start.md) مراجعه کنید.

```txt
humanization-strategy
native-query-autocomplete-match-style
site-locale
report-timezone-short
report-timezone-long
application-name
enable-xrays
show-homepage-pin-message
source-address-header
enable-nested-queries
custom-geojson-enabled
start-of-week
custom-geojson
available-timezones
unaggregated-query-row-limit
aggregated-query-row-limit
hide-embed-branding?
search-typeahead-enabled
enable-sandboxes?
application-font
available-locales
landing-page
enable-embedding
application-colors
application-logo-url
application-favicon-url
show-homepage-xrays
show-metabot
enable-whitelabeling?
show-homepage-data
site-name
application-font-files
loading-message
report-timezone
persisted-models-enabled
enable-content-management?
subscription-allowed-domains
breakout-bins-num
available-fonts
custom-formatting
```

### سفارشی‌سازی موارد Export

می‌توانید دقیقاً مشخص کنید چه چیزهایی Export شوند. به‌عنوان مثال می‌توانید به متابیس بگویید:

- فقط کالکشن‌های مشخصی را Export کن.
- هیچ کالکشنی را Export نکن.
- تنظیمات متابیس را Export نکن.
- متادیتای جدول‌ها را Export نکن.
- نمونه‌مقدارهای فیلدها را نیز اضافه کن (به‌صورت پیش‌فرض حذف می‌شوند).
- جزئیات اتصال دیتابیس (شامل نام کاربری و رمز عبور) را اضافه کن (به‌صورت پیش‌فرض حذف می‌شوند).

برای جزئیات بیشتر، [پارامترهای Export در CLI](#export-options) یا [پارامترهای Export در API](#api-export-parameters) را ببینید.

### نمونهٔ یک سؤال سریال‌سازی‌شده

سؤال‌ها در دایرکتوری `cards` در زیرمجموعهٔ دایرکتوری کالکشن قرار می‌گیرند. در این‌جا نمونه‌ای از یک فایل YAML برای سؤالی را می‌بینید که با SQL نوشته شده، از فیلتر فیلد استفاده می‌کند و یک نمودار Area دارد.

برای حفظ فرمت چندخطی کوئری‌های Native، فاصله‌های خالی انتهای خطوط را حذف کنید؛ در غیر این صورت YAML ممکن است کوئری را به یک رشتهٔ تک‌خطی تبدیل کند (که روی عملکرد، نه، بلکه روی نمایش اثر می‌گذارد).

```yml
name: Products by week
description: Area chart of products created by week
entity_id: r6vC_vLmo9zG6_r9sAuYG
created_at: "2024-05-08T19:10:24.348808Z"
creator_id: admin@metabase.local
display: area
archived: false
collection_id: onou5H28Wvy3kWnjxxdKQ
collection_preview: true
collection_position: null
query_type: native
dataset: false
cache_ttl: null
database_id: Sample Database
table_id: null
enable_embedding: false
embedding_params: null
made_public_by_id: null
public_uuid: null
parameters:
  - default:
      - Gizmo
    id: c37d2f38-05fa-48c4-a208-19d9dba803c6
    name: Pick a category
    slug: category_filter
    target:
      - dimension
      - - template-tag
        - category_filter
    type: string/=
parameter_mappings: []
dataset_query:
  database: Sample Database
  native:
    query: |-
      SELECT
        category,
        date_trunc ('week', created_at) AS "Week",
        count(*) AS "Count"
      FROM
        products
      WHERE
        {{category_filter}}
      GROUP BY
        category,
        "Week"
    template-tags:
      category_filter:
        default:
          - Gizmo
        dimension:
          - field
          - - Sample Database
            - PUBLIC
            - PRODUCTS
            - CATEGORY
          - base-type: type/Text
        display-name: Pick a category
        id: c37d2f38-05fa-48c4-a208-19d9dba803c6
        name: category_filter
        type: dimension
        widget-type: string/=
  type: native
result_metadata:
  - base_type: type/Text
    display_name: CATEGORY
    effective_type: type/Text
    field_ref:
      - field
      - CATEGORY
      - base-type: type/Text
    name: CATEGORY
    semantic_type: null
  - base_type: type/DateTime
    display_name: Week
    effective_type: type/DateTime
    field_ref:
      - field
      - Week
      - base-type: type/DateTime
    name: Week
    semantic_type: null
  - base_type: type/BigInteger
    display_name: Count
    effective_type: type/BigInteger
    field_ref:
      - field
      - Count
      - base-type: type/BigInteger
    name: Count
    semantic_type: type/Quantity
visualization_settings:
  column_settings: null
  graph.dimensions:
    - Week
    - CATEGORY
  graph.metrics:
    - Count
serdes/meta:
  - id: r6vC_vLmo9zG6_r9sAuYG
    label: products_created_by_week
    model: Card
initially_published_at: null
metabase_version: v1.49.7 (f0ff786)
type: question
```

### استفاده از Entity ID برای شناسایی آیتم‌ها

متابیس برای هر آیتم (داشبورد، سؤال، مدل، کالکشن و غیره) یک Entity ID منحصربه‌فرد اختصاص می‌دهد. این شناسه علاوه بر ID ترتیبی داخلی است. Entity IDها از فرمت [NanoID](https://github.com/ai/nanoid) استفاده می‌کنند و در میان اینستنس‌های مختلف «پایدار» هستند؛ یعنی می‌توانید یک داشبورد را از یک متابیس Export کنید و در متابیس دیگری Import کنید و همان Entity ID حفظ شود.

برای به‌دست‌آوردن Entity ID یک آیتم در متابیس:

1. به صفحهٔ آن آیتم در متابیس بروید.
2. روی دکمهٔ Info کلیک کنید.
3. در تب Overview، مقدار Entity ID را کپی کنید.

همچنین می‌توانید Entity ID هر آیتم را در فایل YAML مربوطه در فیلد `entity_id` ببینید. برای مثال، در [نمونهٔ سؤال سریال‌سازی‌شده](#example-of-a-serialized-question):

```yaml
entity_id: r6vC_vLmo9zG6_r9sAuYG
```

این ID در فیلد `serdes/meta → id` هم تکرار می‌شود (این دو مقدار باید با هم برابر باشند):

```yaml
serdes/meta:
  - id: r6vC_vLmo9zG6_r9sAuYG
```

To disambiguate entities that share the same name, Metabase includes Entity IDs in the file and directory names for exported entities.

```
r6vC_vLmo9zG6_r9sAuYG_products_by_week.yaml
IA96oUzmUbYfNFl0GzhRj_accounts_model.yaml
KUEGiWvoBFEc5oGQCEnPg_converted_customers.yaml
```

For example, in the [Example of a serialized question](#example-of-a-serialized-question) above, you can see the field `collection_id`:

```yaml
collection_id: onou5H28Wvy3kWnjxxdKQ
```

This ID refers to the collection where the question was saved. In a real export, you'd be able to find a YAML file for this collection whose name starts with its ID: `onou5H28Wvy3kWnjxxdKQ`.

### Entity IDها در Embedding

متابیس برای سؤال‌ها، داشبوردها و کالکشن‌ها در [Embedding استاتیک](../embedding/static-embedding.md)، [Embedded analytics JS](../embedding/embedded-analytics-js.md)، [Embedding تعاملی](../embedding/interactive-embedding.md) و [SDK تعبیهٔ تحلیلی](../embedding/sdk/introduction.md) از Entity IDها استفاده می‌کند.

یک سناریوی سطح بالا برای استفاده از Entity ID در Embedding اپلیکیشن می‌تواند این‌طور باشد:

1. روی یک متابیس محلی روی سیستم‌تان یک داشبورد بسازید.
2. داشبورد را با استفاده از Entity ID آن در اپلیکیشن‌تان Embed کنید.
3. تغییرات متابیس (از جمله داشبورد جدید) را از طریق سریال‌سازی به فایل‌های YAML Export کنید.
4. این فایل‌های YAML را در متابیس Production Import کنید.
5. چون Entity ID در متابیس Production هم ثابت می‌ماند، می‌توانید کد اپلیکیشن را به Production Push کنید و همان کد همچنان به داشبورد درست اشاره خواهد کرد.

### دیتابیس‌ها، Schemaها، جدول‌ها و فیلدها بر اساس نام شناسایی می‌شوند

به‌طور پیش‌فرض، متابیس برخی تنظیمات دیتابیس و مدل داده را Export می‌کند، اما رشته‌های اتصال دیتابیس‌ها را Export نمی‌کند مگر این‌که [آن را صراحتاً فعال کرده باشید](#customize-what-gets-exported). همچنین می‌توانید مدل داده را کلاً از Export حذف کنید.

متابیس دیتابیس‌ها و جدول‌ها را در دایرکتوری `databases` سریال‌سازی می‌کند و برای هر دیتابیس، جدول، فیلد، Segment و Metric فایل YAML جداگانه دارد.

دیتابیس‌ها، جدول‌ها و فیلدها بر اساس نام‌شان شناسایی و به آن‌ها ارجاع داده می‌شود (برخلاف آیتم‌های مخصوص متابیس که [بر اساس Entity ID شناخته می‌شوند](#metabase-uses-entity-ids-to-identify-and-reference-metabase-items)).

برای مثال، در [نمونهٔ سؤال سریال‌سازی‌شده](#example-of-a-serialized-question)، چند کلید YAML به `Sample Database` اشاره می‌کنند:

```yaml
database_id: Sample Database
---
dataset_query:
  database: Sample Database
```

در توضیح فیلتر فیلد (`category_filter:`) در همان مثال، ارجاع به فیلدی که گزینه‌های فیلتر را پر می‌کند به این صورت است:

```yaml
dimension:
  - field
  - - Sample Database
    - PUBLIC
    - PRODUCTS
    - CATEGORY
```

این YAML به فیلد `CATEGORY` در جدول `PRODUCTS` در Schema به نام `PUBLIC` در دیتابیس `Sample Database` اشاره دارد. نسخهٔ سریال‌سازی‌شدهٔ `Sample Database` در دایرکتوری `databases` شامل فایل‌های YAML مربوط به این جدول و فیلد خواهد بود.

## Import چگونه کار می‌کند؟

در هنگام Import، متابیس فایل‌های YAML ورودی را می‌خواند و بر اساس مشخصات موجود در آن‌ها آیتم‌ها را می‌سازد. [نمونهٔ سؤال سریال‌سازی‌شده](#example-of-a-serialized-question) نشان می‌دهد متابیس اطلاعات لازم برای بازسازی آیتم را چگونه ذخیره می‌کند.

در طول Import، متابیس آیتمی را از اینستنس مقصد حذف نمی‌کند، اما آیتم‌های موجود ممکن است بازنویسی شوند.

متابیس برای تصمیم‌گیری دربارهٔ این‌که کدام آیتم‌ها باید ساخته یا بازنویسی شوند و روابط بین آیتم‌ها چگونه است، به [Entity IDها](#metabase-uses-entity-ids-to-identify-and-reference-metabase-items) متکی است. هنگام Import به اینستنس‌ای که قبلاً محتوا دارد، موارد زیر را در نظر داشته باشید:

- اگر آیتمی را Import کنید که `entity_id` آن در متابیس مقصد وجود ندارد، متابیس یک آیتم جدید می‌سازد.
- اگر آیتمی را Import کنید که `entity_id` آن در متابیس مقصد وجود دارد، آیتم موجود بازنویسی می‌شود.

  یعنی اگر یک سؤال را Export کنید، بعد در فایل YAML نام آن را با ویرایش فیلد `name` عوض کنید و دوباره Import کنید، متابیس همان سؤال موجود را با تغییرات جدید به‌روزرسانی می‌کند.

- اگر آیتمی را Import کنید که `entity_id` آن خالی باشد، متابیس یک آیتم جدید با Entity ID تازه می‌سازد. در این حالت هر مقداری در `serdes/meta → id` نادیده گرفته می‌شود.
- همهٔ آیتم‌ها و منابع داده‌ای که در YAML به آن‌ها ارجاع شده است باید یا از قبل در متابیس مقصد وجود داشته باشند یا همراه همان Import آورده شوند.

  برای مثال، اگر در فایل YAML فیلدی با مقدار `collection_id: onou5H28Wvy3kWnjxxdKQ` وجود داشته باشد، کالکشن با این ID باید در متابیس مقصد موجود باشد یا Export شما شامل YAML مربوط به همین کالکشن باشد.

## بهترین شیوه‌های سریال‌سازی

### یکسان بودن نسخهٔ متابیس در مبدأ و مقصد

در حال حاضر، سریال‌سازی فقط زمانی پشتیبانی می‌شود که نسخهٔ Major متابیس در مبدأ و مقصد یکسان باشد.
اگر از دستورات CLI برای سریال‌سازی استفاده می‌کنید، نسخهٔ فایل JAR که با آن دستورات `export` و `import` را اجرا می‌کنید باید با نسخهٔ متابیس مبدأ و مقصد یکی باشد.

### استفاده از H2 به‌عنوان دیتابیس اپلیکیشن

اگر از H2 به‌عنوان دیتابیس اپلیکیشن استفاده می‌کنید، باید قبل از Import یا Export، متابیس را متوقف کنید.

اگر از Postgres یا MySQL به‌عنوان دیتابیس اپلیکیشن استفاده می‌کنید، می‌توانید در حالی که متابیس در حال اجراست هم Import و Export انجام دهید.

### استفاده نکردن از سریال‌سازی برای بک‌آپ

سریال‌سازی برای بک‌آپ‌گیری از متابیس طراحی نشده است.

برای بک‌آپ، به [Backing up Metabase](./backing-up-metabase-application-data.md) مراجعه کنید.

اگر به‌دنبال یک مهاجرت یک‌باره از دیتابیس H2 پیش‌فرض متابیس به MySQL/Postgres هستید، از [راهنمای مهاجرت](./migrating-from-h2.md) استفاده کنید.

### افزودن دستی License token

License token شما در Export لحاظ نمی‌شود، بنابراین اگر چند محیط مختلف از Metabase Enterprise Edition دارید، باید Token را به‌صورت دستی در متابیس مقصد اضافه کنید؛ یا از طریق [رابط کاربری](../installation-and-operation/activating-the-enterprise-edition.md) یا از طریق [متغیر محیطی](../configuring-metabase/environment-variables.md#mb_premium_embedding_token).

### لاگ‌های Export و Import

- در Export، متابیس لاگ‌ها را به‌صورت فایل `export.log` در دایرکتوری فشرده‌شده قرار می‌دهد.
- در Import، می‌توانید با فلگ `-o -` لاگ‌ها را مستقیماً در ترمینال ببینید، یا مثلاً با `-o import.log` در فایل ذخیره کنید.

## سریال‌سازی با دستورات CLI

> برای سریال‌سازی داده‌ها در Metabase Cloud باید از [Endpointهای API مربوط به Import و Export](#serialization-via-the-api) استفاده کنید.

متابیس دستورات CLI [`export`](#exporting-with-cli) و [`import`](#importing-with-cli) را در اختیار شما قرار می‌دهد.

برای درک بهتر، به بخش‌های [Export چگونه کار می‌کند](#how-export-works)، [Import چگونه کار می‌کند](#how-import-works) و [بهترین شیوه‌های سریال‌سازی](#serialization-best-practices) مراجعه کنید.

### Export با CLI

برای Export کردن محتوای یک اینستنس متابیس، به دایرکتوری‌ای بروید که متابیس JAR را از آن اجرا می‌کنید و دستور زیر را بزنید:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar export dir_name
```

در این‌جا `dir_name` نام دایرکتوری خروجی است و می‌تواند هر نامی باشد.

### گزینه‌های `export`

برای دیدن فهرست گزینه‌های `export` از دستور `help` استفاده کنید:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar help export
```

خروجی چیزی شبیه زیر خواهد بود:

```txt
export path & options
	 Serialize Metabase instance into directory at `path`.
	 Options:
	   -c, --collection ID             Export only specified ID; may occur multiple times.
	   -C, --no-collections            Do not export any content in collections.
	   -S, --no-settings               Do not export settings.yaml
	   -D, --no-data-model             Do not export any data model entities; useful for subsequent exports.
	   -f, --include-field-values      Include field values along with field metadata.
	   -s, --include-database-secrets  Include database connection details (in plain text; use caution).
```

#### `--collection`

به‌صورت پیش‌فرض، متابیس همهٔ کالکشن‌ها (به‌جز کالکشن‌های شخصی) را Export می‌کند. برای گنجاندن کالکشن‌های شخصی باید آن‌ها را با فلگ `--collection` صراحتاً مشخص کنید.

فلگ `--collection` (یا `-c`) به شما اجازه می‌دهد با استفاده از ID، یک یا چند کالکشن را به Export اضافه کنید. می‌توانید ID کالکشن را در URL آن پیدا کنید؛ مثلاً اگر URL کالکشن به شکل `your-metabase.com/collection/42-terraforming-progress` باشد، ID آن `42` است.

اگر می‌خواهید چند کالکشن را مشخص کنید، IDها را با ویرگول جدا کنید. مثلاً:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar export export_name --collection 1,2,3
```

#### `--no-collections`

فلگ `--no-collections` (یا `-C`) باعث می‌شود متابیس هیچ محتوایی از کالکشن‌ها Export نکند.

#### `--no-settings`

فلگ `--no-settings` (یا `-S`) باعث می‌شود فایل `settings.yaml` شامل [تنظیمات سراسری](#general-metabase-settings-that-are-exported) Export نشود.

#### `--no-data-model`

فلگ `--no-data-model` (یا `-D`) متادیتای مدل داده (Table Metadata) را از Export حذف می‌کند. این تنظیمات در تب [Table Metadata](../data-modeling/metadata-editing.md) در Admin settings تعریف می‌شود.

#### `--include-field-values`

فلگ `--include-field-values` (یا `-f`) به متابیس می‌گوید نمونه‌مقدارهای فیلدها را نیز Export کند؛ این داده‌ها برای پرکردن Dropdownها استفاده می‌شوند. به‌صورت پیش‌فرض، این نمونه‌مقدارها Export نمی‌شوند.

#### `--include-database-secrets`

فلگ `--include-database-secrets` (یا `-s`) باعث می‌شود جزئیات اتصال دیتابیس (از جمله نام کاربری و رمز عبور) نیز Export شوند. این اطلاعات در قالب متن ساده ذخیره می‌شوند، بنابراین در استفاده از این گزینه باید احتیاط کنید. اگر از این فلگ استفاده نکنید، باید اطلاعات اتصال را در اینستنس مقصد به‌صورت دستی وارد کنید.

### Import با CLI

برای Import کردن خروجی سریال‌سازی در یک اینستنس متابیس، به دایرکتوری‌ای بروید که متابیس مقصد (اینستنس Target) در آن اجرا می‌شود و از دستور زیر استفاده کنید؛ در این‌جا `path_to_export` مسیر پوشهٔ Export است:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar import path_to_export
```

در حال حاضر تنها در صورتی می‌توانید Export را Import کنید که اینستنس مقصد با همان نسخهٔ متابیس ایجاد شده باشد.

### گزینه‌های `import`

بیشتر گزینه‌ها هنگام Export تعیین می‌شوند. برای دیدن فهرست فلگ‌های Import، دستور زیر را اجرا کنید:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar help import
```

خروجی چیزی شبیه زیر است:

```txt
import path & options
         Load serialized Metabase instance as created by the [[export]] command from directory `path`.
```

## سریال‌سازی از طریق API

> همان‌طور که برای دستورات CLI سریال‌سازی، این Endpointها فقط در پلن‌های [Pro](https://www.metabase.com/product/pro) و [Enterprise](https://www.metabase.com/product/enterprise) در دسترس هستند.

می‌توانید داده‌های سریال‌سازی‌شدهٔ متابیس را از طریق API Export و Import کنید؛ این قابلیت سریال‌سازی را برای استقرارهای [Metabase Cloud](https://www.metabase.com/cloud/) نیز امکان‌پذیر می‌کند.

دو Endpoint اصلی وجود دارد:

- `POST /api/ee/serialization/export`
- `POST /api/ee/serialization/import`

> برای `/export` از `POST` استفاده می‌کنیم، نه `GET`. این عملیات متابیس شما را تغییر نمی‌دهد، اما ممکن است طولانی و سنگین باشد؛ به همین دلیل از `POST` استفاده می‌کنیم تا از Exportهای ناخواسته جلوگیری شود.

در حال حاضر این Endpointها همگی هم‌زمان (Synchronous) هستند. اگر فرآیند سریال‌سازی خیلی طول بکشد، ممکن است درخواست Timeout شود؛ در این صورت استفاده از CLI پیشنهاد می‌شود.

برای اطلاعات کلی‌تر، دوباره بخش‌های [Export چگونه کار می‌کند](#how-export-works)، [Import چگونه کار می‌کند](#how-import-works) و [بهترین شیوه‌های سریال‌سازی](#serialization-best-practices) را مرور کنید.

### پارامترهای Export در API

می‌توانید پارامترهای اختیاری به URL اضافه کنید تا مشخص کنید چه چیزهایی در Export لحاظ یا حذف شوند. اکثر این پارامترها را می‌توان با هم ترکیب کرد (به‌جز ترکیب ناسازگار `all_collections=false` با انتخاب کالکشن‌های مجزا).

مثلاً اگر روی `localhost` کار می‌کنید و می‌خواهید همهٔ کالکشن‌ها را از Export حذف کنید، URL می‌تواند به این شکل باشد:

```txt
http://localhost:3000/api/ee/serialization/export?all_collections=false
```

می‌توانید چند پارامتر را با `&` ترکیب کنید. برای مثال، برای حذف تنظیمات و مدل داده از Export:

```txt
http://localhost:3000/api/ee/serialization/export?data_model=false&settings=false
```

### `collection`

- نوع: آرایه‌ای از عدد صحیح.
- مقدار پیش‌فرض: همهٔ کالکشن‌ها Export می‌شوند، مگر این‌که `all_collections` روی `false` تنظیم شده باشد.

برای مشخص‌کردن کالکشن‌های Export، ID آن‌ها را به‌صورت جداگانه اضافه کنید. برای مثال، برای Export کالکشن‌های `1` و `2`:

```txt
collection=1&collection=2
```

### `all_collections`

- نوع: مقدار بولی.
- پیش‌فرض: `true` (مگر این‌که زیرمجموعه‌ای از کالکشن‌ها را با `collection` مشخص کرده باشید).

برای حذف همهٔ کالکشن‌ها:

```txt
all_collections=false
```

### `settings`

- نوع: مقدار بولی.
- پیش‌فرض: `true`.

برای حذف فایل `settings.yaml` که شامل تنظیمات سراسری است:

```txt
settings=false
```

### `data_model`

- نوع: مقدار بولی.
- پیش‌فرض: `true`.

برای حذف [Table Metadata](../data-modeling/metadata-editing.md):

```txt
data_model=false
```

### `field_values`

- نوع: مقدار بولی.
- پیش‌فرض: `false`.

برای گنجاندن نمونه‌مقدارهای فیلدها که متابیس برای Dropdownها از آن‌ها استفاده می‌کند:

```txt
field_values=true
```

### `database_secrets`

- نوع: مقدار بولی.
- پیش‌فرض: `false`.

برای گنجاندن جزئیات اتصال دیتابیس مانند نام کاربری و رمز عبور:

```txt
database_secrets=true
```

### `dirname`

- نوع: رشته.
- پیش‌فرض: `<instance-name>-<YYYY-MM-dd_HH_mm>`

برای تعیین نام دایرکتوری خروجی:

```txt
dirname=name_of_your_directory
```

### فشرده‌کردن فایل‌ها هنگام استفاده از API

برای کنترل حجم فایل‌ها روی شبکه، هر دو Endpoint `export` و `import` انتظار فایل‌های Tar فشرده‌شده با GZIP (`.tgz`) را دارند.

#### فشرده‌کردن یک دایرکتوری

برای فشرده‌کردن دایرکتوری‌ای مانند `metabase_data`:

```sh
tar -czf  metabase_data.tgz metabase_data
```

#### استخراج یک دایرکتوری

برای استخراج محتویات فایل tgz:

```sh
tar -xvf  metabase_data.tgz
```

## نمونهٔ استفاده از API سریال‌سازی

### گام ۱: تنظیم API key

1. یک [API key](../people-and-groups/api-keys.md) بسازید.
2. این کلید را به گروه Admin اختصاص دهید.

### گام ۲: Export

1. یک درخواست `curl` برای Export داده‌ها ارسال کنید:

```sh
curl \
  -H 'x-api-key: YOUR_API_KEY' \
  -X POST 'https://your-metabase-url/api/ee/serialization/export' \
  -o metabase_data.tgz
```

substituting `YOUR_API_KEY` with your API key and `your-metabase-url` with the URL of your Metabase instance.

> We use `POST`, not `GET`, for the `/export` endpoint.

This command will download the files as a GZIP-compressed Tar file named `metabase_data.tgz`.

2. Unzip the compressed file:

```sh
tar -xvf metabase_data.tgz
```

دایرکتوری استخراج‌شده نامی شبیه `metabase-yyyy-MM-dd_HH-mm` خواهد داشت که شامل تاریخ و زمان Export است.

### گام ۳: Import

1. دایرکتوری‌ای که داده‌های سریال‌سازی‌شدهٔ متابیس (فایل‌های YAML) را شامل می‌شود فشرده کنید.

فرض کنیم فایل‌های YAML شما در دایرکتوری `metabase_data` قرار دارند؛ قبل از Import به متابیس مقصد باید این دایرکتوری را فشرده کنید:

```sh
tar -czf metabase_data.tgz metabase_data
```

3. سپس به `/api/ee/serialization/import` POST کنید.

از دایرکتوری‌ای که فایل `.tgz` را در آن قرار داده‌اید، دستور زیر را اجرا کنید:

```sh
curl -X POST \
  -H 'x-api-key: YOUR_API_KEY' \
  -F file=@metabase_data.tgz \
  'https://your-metabase-url/api/ee/serialization/import' \
  -o -
```

در این‌جا به‌جای `YOUR_API_KEY`، API key خود و به‌جای `your-metabase-url`، URL اینستنس متابیس خود را قرار دهید. گزینهٔ `-o -` باعث می‌شود لاگ‌ها در همان ترمینال چاپ شوند.

> اگر داده‌های Export‌شده را در همان اینستنس مبدأ Import کنید، سؤال‌ها، داشبوردها و سایر آیتم‌های موجود بازنویسی می‌شوند. برای جزئیات، به بخش [Import چگونه کار می‌کند](#how-import-works) مراجعه کنید.

## سایر کاربردهای سریال‌سازی

سریال‌سازی عمدتاً برای کنترل نسخه، گردش‌کار Staging→Production و تکثیر دارایی‌ها به اینستنس‌های دیگر متابیس طراحی شده است. اگرچه از نظر فنی می‌توان از سریال‌سازی برای سناریوهای دیگری (مثل تکثیر دارایی‌ها _در داخل یک اینستنس_) هم استفاده کرد، این موارد رسماً پشتیبانی نمی‌شوند.

در ادامه چند راهنمایی برای این سناریوهای خارج از حالت پشتیبانی‌شده ارائه می‌کنیم، اما مسئولیت استفاده از آن‌ها بر عهدهٔ خود شماست. قویاً توصیه می‌کنیم هر فرآیند مبتنی بر سریال‌سازی را ابتدا روی یک اینستنس غیر Production آزمایش کنید و در صورت نیاز با [help@metabase.com](mailto:help@metabase.com) در ارتباط باشید.

### استفاده از سریال‌سازی برای تکثیر محتوا در همان اینستنس

> تکثیر دارایی‌ها از طریق سریال‌سازی اگرچه از نظر فنی ممکن است، اما رسماً پشتیبانی نمی‌شود؛ استفاده از آن با ریسک خود شماست. ریسک اصلی این است که ممکن است زنجیره‌های وابستگی طولانی‌ای وجود داشته باشد و احتمال فراموش‌کردن ویرایش یک Entity ID یا بازنویسی اشتباهی آن زیاد است. حتماً از سیستم بک‌آپ و کنترل نسخه استفاده کنید.

استفاده از سریال‌سازی برای تکثیر محتوا ساده نیست، چون باید [Entity IDها](#metabase-uses-entity-ids-to-identify-and-reference-metabase-items) را برای همهٔ آیتم‌هایی که می‌خواهید تکثیر کنید — و همهٔ آیتم‌های وابسته به آن‌ها — مدیریت کنید تا از بازنویسی داده‌های موجود جلوگیری شود.

قبل از شروع این مسیر پرریسک، حتماً بخش‌های [Export چگونه کار می‌کند](#how-export-works) و [Import چگونه کار می‌کند](#how-import-works) را با دقت بخوانید و در صورت ابهام با [help@metabase.com](mailto:help@metabase.com) تماس بگیرید.

موارد زیر را به‌خاطر بسپارید:

- Import کردن آیتمی با Entity ID موجود، همان آیتم را بازنویسی می‌کند. برای ساخت آیتم جدید از روی یک YAML موجود، باید یا یک Entity ID جدید بسازید یا مقدار Entity ID را خالی کنید.
- دو آیتم نمی‌توانند Entity ID یکسانی داشته باشند.
- فیلدهای `entity_id` و `serdes/meta → id` در فایل YAML باید با هم برابر باشند.
- اگر در فایل YAML برای یک آیتم، فیلدهای `entity_id` و `serdes/meta → id` خالی باشند، متابیس یک آیتم جدید با Entity ID تازه می‌سازد.
- همهٔ آیتم‌ها و منابع داده‌ای‌ای که یک آیتم به آن‌ها وابسته است باید یا در اینستنس مقصد از قبل وجود داشته باشند یا در Import گنجانده شده باشند.

  برای مثال، یک کالکشن می‌تواند داشبوردی داشته باشد که در آن سؤالی قرار دارد که بر روی مدلی ساخته شده که به دیتابیس خاصی وصل است. همهٔ این وابستگی‌ها باید یا در Import آورده شوند یا از قبل وجود داشته باشند.

  این یعنی احتمالاً باید Export/Import چندمرحله‌ای انجام دهید: ابتدا برخی آیتم‌های پایه (مثل کالکشن‌ها) را در متابیس بسازید و Export کنید تا Entity ID آن‌ها را بگیرید؛ سپس آیتم‌هایی که می‌خواهید تکثیر کنید را Export کرده و Entity IDها را مطابق نیاز به‌روزرسانی کنید.

برای مثال، برای تکثیر کالکشنی که فقط سؤال‌هایی بر پایهٔ دادهٔ خام (نه مدل‌ها یا سؤال‌های ذخیره‌شدهٔ دیگر) دارد و نمی‌خواهید منبع دادهٔ سؤال‌ها را عوض کنید، می‌توانید:

1. در متابیس یک کالکشن «Template» بسازید و آیتم‌هایی را که می‌خواهید تکثیر کنید در آن قرار دهید.
2. یک کالکشن جدید بسازید که محل قرارگیری نسخه‌های تکثیرشده خواهد بود.
3. کالکشن Template و کالکشن هدف را Export کنید (می‌توانید با [گزینه‌های Export](#customize-what-gets-exported) فقط این چند کالکشن را Export کنید).
   فایل‌های YAML مربوط به سؤال‌های Template در Export، Entity IDهای خودشان و Entity ID کالکشن Template را دارند.
4. از Export کالکشن هدف، Entity ID آن را بردارید.
5. در فایل‌های YAML سؤال‌های Template:

   - مقادیر فیلدهای `entity_id` و `serdes/meta → id` را خالی کنید تا متابیس به‌جای بازنویسی سؤال‌های Template، سؤال‌های جدید بسازد.
   - مقادیر `collection_id` را از ID کالکشن Template به ID کالکشن جدید تغییر دهید.

6. فایل‌های ویرایش‌شده را Import کنید.

این فرآیند فرض می‌کند همهٔ سؤال‌های تکثیرشده روی یک منبع دادهٔ مشترک کار می‌کنند. می‌توانید این روش را با [تعویض منبع داده](#using-serialization-to-swap-the-data-source-for-questions-within-one-instance) ترکیب کنید تا برای هر کالکشن تکثیرشده منبع دادهٔ متفاوتی داشته باشید.

اگر بخواهید چندین نسخه از یک کالکشن را هم‌زمان بسازید، به‌جای تکرار کردن کل فرآیند برای هر نسخه، می‌توانید خودتان Entity IDهای هدف را تولید کنید (هر رشته‌ای مطابق [فرمت NanoID](https://github.com/ai/nanoid) قابل‌قبول است)، همهٔ فایل‌های YAML Template را کپی کنید و Entity IDهای Template و ارجاعات به آن‌ها را با Entity IDهای جدید جایگزین کنید.

اگر کالکشن شما شامل داشبوردها، مدل‌ها و سایر آیتم‌های با وابستگی بیشتر باشد، این فرآیند می‌تواند بسیار پیچیده‌تر شود، چون باید همهٔ وابستگی‌ها را مدیریت کنید. اکیداً توصیه می‌کنیم ابتدا این فرایند را روی یک اینستنس غیر Production آزمایش کنید و در صورت نیاز با [help@metabase.com](mailto:help@metabase.com) تماس بگیرید.

### استفاده از سریال‌سازی برای تعویض منبع دادهٔ سؤال‌ها در یک اینستنس

> برای سناریوهایی که می‌خواهید یک داشبورد بسازید و دیتابیسی که پرس‌وجو می‌کند بر اساس کاربری که آن را می‌بیند تغییر کند، متابیس یک راه‌حل رسمی به نام [Database routing](../permissions/database-routing.md) ارائه کرده است. ابتدا این بخش را بررسی کنید.

اگر Database routing مشکل شما را حل نکند، می‌توانید از سریال‌سازی به‌عنوان راه‌حل جایگزین استفاده کنید.

اگر می‌خواهید _همهٔ_ سؤال‌هایی را که روی دیتابیس A ساخته شده‌اند به دیتابیس B منتقل کنید و دیتابیس B دقیقاً همان Schema دیتابیس A را دارد، نیازی به سریال‌سازی نیست؛ کافی است Connection string را در بخش **Admin > Databases** جابه‌جا کنید.

اگر می‌خواهید منبع داده را فقط برای برخی سؤال‌ها — مثلاً سؤال‌های موجود در یک کالکشن خاص — تغییر دهید، می‌توانید سؤال‌ها را Export کنید، فایل‌های YAML را ویرایش کنید و سپس Import کنید.

دیتابیس‌های شما باید موتور یکسانی داشته باشند و در حالت ایده‌آل Schema آن‌ها نیز یکسان باشد.

باید به نکات زیر توجه کنید:

- دیتابیس‌ها، جدول‌ها و فیلدها [بر اساس نام شناسایی می‌شوند](#databases-schemas-tables-and-fields-are-identified-by-name).
- جزئیات اتصال دیتابیس‌ها به‌صورت پیش‌فرض Export نمی‌شوند؛ برای Export آن‌ها باید [پارامترهای Export](#customize-what-gets-exported) را طوری تنظیم کنید.
- همهٔ دیتابیس‌ها، جدول‌ها و فیلدهایی که در فایل YAML به آن‌ها ارجاع شده است باید در اینستنس مقصد یا از قبل وجود داشته باشند یا در Import آورده شوند.

برای مثال، اگر می‌خواهید همهٔ سؤال‌های کالکشن `Movie reviews` را به‌جای دیتابیس `Horror` روی دیتابیس `Romance` اجرا کنید، به شرطی که هر دو دیتابیس Schema یکسانی داشته باشند، می‌توانید مراحل زیر را انجام دهید:

1. در متابیس، یک اتصال دیتابیس جدید به نام `Romance` در **Admin > Databases** اضافه کنید.
2. کالکشن `Movie reviews` را Export کنید.

   می‌توانید متابیس را طوری تنظیم کنید که فقط یک کالکشن را Export کند یا همهٔ کالکشن‌ها را Export کرده و فقط روی پوشهٔ مربوط به `Movie reviews` کار کنید.

3. در فایل‌های YAML مربوط به آیتم‌های این کالکشن، تمام ارجاعات به دیتابیس `Horror` را با `Romance` جایگزین کنید.
4. فایل‌های ویرایش‌شده را Import کنید.

Import، سؤال‌های اصلی را بازنویسی می‌کند. اگر قصد دارید سؤال‌های جدیدی ایجاد کنید که از منبع دادهٔ متفاوتی استفاده می‌کنند (و سؤال‌های قدیمی را نگه دارید)، می‌توانید این فرآیند را با [استفاده از سریال‌سازی برای تکثیر دارایی‌ها](#using-serialization-for-duplicating-content-within-the-same-metabase) ترکیب کنید.

این فرآیند فرض می‌کند منبع دادهٔ جدید دقیقاً همان Schema را دارد. اگر Schema متفاوت باشد، باید همهٔ ارجاعات به جدول‌ها و فیلدها را نیز به‌روزرسانی کنید، که می‌تواند پیچیده و مستعد خطا باشد؛ بنابراین قویاً توصیه می‌کنیم ابتدا این کار را روی اینستنس غیر Production آزمایش کنید و در صورت نیاز از [help@metabase.com](mailto:help@metabase.com) کمک بگیرید.

## مهاجرت از دستورات قدیمی سریال‌سازی

اگر از نسخهٔ ۴۶.x یا قدیمی‌تر متابیس ارتقا می‌دهید، این موارد را باید بدانید:

- دستور `export` جایگزین دستور قدیمی `dump` شده است.
- دستور `import` جایگزین دستور قدیمی `load` شده است.

چند تغییر مهم دیگر:

- ساختار فایل‌های YAML خروجی کمی متفاوت شده است:
  - متابیس ابتدای نام هر فایل را با یک Entity ID ۲۴ کاراکتری پر می‌کند (مثل `IA96oUzmUbYfNFl0GzhRj_accounts_model.yaml`).  
    می‌توانید با استفاده از یک دستور متابیس [Entity IDها را حذف کنید](./commands.md#drop-entity-ids).
  - ساختار درخت فایل‌ها کمی تغییر کرده است.
- برای سریال‌سازی کالکشن‌های شخصی کافی است ID آن‌ها را در لیست IDهای جداشده با ویرگول بعد از گزینهٔ `-c` (کوتاه‌شدهٔ `--collection`) قرار دهید.

اگر برای خودکارسازی سریال‌سازی اسکریپت نوشته‌اید، باید:

- متابیس را با نسخهٔ جدید (که از دستورات جدید `export` و `import` استفاده می‌کند) دوباره سریال‌سازی کنید. توجه کنید که سریال‌سازی فقط زمانی کار می‌کند که Export و Import با یک نسخهٔ متابیس انجام شوند.
- اسکریپت‌ها را با دستورات جدید به‌روزرسانی کنید (بخش [گزینه‌های جدید Export](#export-options) را ببینید).
- اگر اسکریپت‌های شما روی ساختار دایرکتوری Export یا محتوای YAML پردازش‌های اضافی انجام می‌دهند، ممکن است لازم باشد آن‌ها را مطابق ساختار جدید به‌روزرسانی کنید.

## مطالعهٔ بیشتر

- [آموزش سریال‌سازی](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/serialization)
- [Database routing](../permissions/database-routing.md)
- [چند محیط](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/multi-env)
- [راه‌اندازی گردش‌کار مبتنی بر Git](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/git-based-workflow)
- برای کمک بیشتر با [support@metabase.com](mailto:support@metabase.com) در تماس باشید.
