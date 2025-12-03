---
title: تحلیل استفاده
---

# تحلیل استفاده

{% include plans-blockquote.html feature="Usage analytics" %}

مجموعه **Usage analytics** یک مجموعه ویژه است که شامل سؤال‌ها، داشبوردها و مدل‌های فقط‌خواندنی است که به شما کمک می‌کنند بفهمید افراد چگونه از متابیس شما استفاده می‌کنند.

![Usage analytics collection](./images/metabase-analytics.png)

می‌توانید مجموعه **Usage analytics** را زیر **collections** در نوار کناری ناوبری سمت چپ پیدا کنید. همچنین می‌توانید گزارش‌های سفارشی ایجاد کنید.

این منابع برای موارد زیر مفید هستند:

- **درک الگوی استفاده**: بفهمید افراد چگونه از متابیس شما استفاده می‌کنند (مثلاً سؤال‌های جدید، فعال‌ترین افراد و گروه‌ها و غیره).
- **ممیزی فعالیت**: بدانید چه کسی چه کاری را چه زمانی انجام داده است، از جمله ردیابی نمایش داشبورد و سؤال، پرس‌وجوها، دانلودها و سایر فعالیت‌ها مانند تغییر تنظیمات یا دعوت افراد به متابیس.
- **بهبود عملیات**: کندترین داشبوردها و سؤال‌ها، عملکرد پایگاه‌داده‌ها، اینکه چه کسانی بیشترین منابع را مصرف می‌کنند و موارد دیگر را شناسایی کنید.

> متابیس چند حساب کاربری پیش‌فرض ایجاد می‌کند که ممکن است در تحلیل استفاده خود ببینید، مانند `internal@metabase.com`. [حساب‌های پیش‌فرض](../people-and-groups/managing.md#default-user-accounts) را ببینید.

## دسترسی به تحلیل استفاده

می‌توانید مجموعه **Usage analytics** را زیر **collections** در نوار ناوبری پیدا کنید. به‌طور پیش‌فرض فقط ادمین‌ها می‌توانند مجموعه Usage analytics را ببینند، اما ادمین‌ها می‌توانند به گروه‌های دیگر دسترسی مشاهده بدهند. می‌توانید مجوزها برای این مجموعه را در **Admin settings** > **Permissions** > **Collections** مدیریت کنید.

برای مجموعه Usage analytics فقط دو نوع دسترسی وجود دارد: **View** و **No access**. حتی ادمین‌ها هم نمی‌توانند Usage analytics را ویرایش (curate) کنند.

علاوه بر این، این مجموعه Usage analytics یک زیرمجموعه پیش‌فرض به نام «Custom reports» دارد که می‌توانید برای ذخیره سؤال‌ها، داشبوردها و مدل‌های کپی‌شده/ویرایش‌شده از آن استفاده کنید. این زیرمجموعه همان مجوزهای مجموعه والد را به ارث می‌برد، اما فقط‌خواندنی نیست؛ ادمین‌ها به‌طور پیش‌فرض دسترسی curate دارند و می‌توانند به گروه‌های دیگر دسترسی مشاهده بدهند.

> اگر از نسخه‌ای قدیمی‌تر از 48 ارتقا می‌دهید، افرادی که در گروه‌هایی با دسترسی monitoring هستند نیز به مجموعه Usage analytics دسترسی خواهند داشت. اما پس از آن «به ارث‌رسیدن اولیه»، امتیاز monitoring دیگر به Usage analytics ربطی ندارد؛ باید به‌طور مشخص به گروه‌ها برای مجموعه Usage analytics دسترسی بدهید.

## مشاهده بینش‌های استفاده برای یک سؤال، داشبورد یا مدل

> فقط افرادی در گروه‌هایی با دسترسی مشاهده به مجموعه Usage analytics این گزینه Usage insights را خواهند دید.

برای مشاهده تحلیل استفاده یک سؤال، داشبورد یا مدل:

- به مورد مربوطه بروید.
- روی دکمه info در بالا سمت راست کلیک کنید.
- روی **Insights** کلیک کنید.

متابیس شما را به داشبورد استفاده مرتبط می‌برد و ID آن مورد را در آن قرار می‌دهد.

## مدت نگهداری داده‌های استفاده در متابیس

به‌طور پیش‌فرض، متابیس داده‌های مربوط به [activity](#activity-log-model)، [views](#view-log-model)، و [اجرای پرس‌وجو](#query-log-model) را به مدت **۷۲۰ روز** نگه می‌دارد. دو بار در روز، متابیس ردیف‌های قدیمی‌تر از این آستانه را حذف می‌کند. می‌توانید این حد را با تنظیم متغیر محیطی [`MB_AUDIT_MAX_RETENTION_DAYS`](../configuring-metabase/environment-variables.md#mb_audit_max_retention_days) تغییر دهید.

اگر روی نسخه Open Source متابیس، یا روی [پلن Metabase Cloud Starter](https://www.metabase.com/pricing/) هستید، متابیس داده‌های [Activity](#activity-log-model) و [View](#view-log-model) را جمع‌آوری نمی‌کند. اگر به یک پلن Pro یا Enterprise، چه self-hosted و چه Cloud، ارتقا دهید، فقط داده‌های View و Activity را در Usage Analytics از _زمان ارتقا_ به بعد خواهید دید.

## Creating custom reports

You can duplicate any of the questions, dashboards and models in the Usage analytics collection and tweak them to your liking, but you'll need to save them to a different collection.

### Custom reports collection

While you _can_ save custom questions, models, and dashboards wherever you like (except for the Usage analytics collection), we recommend that you save your custom Usage analytics reports in the conveniently named "Custom reports" sub-collection. That way these items inherit the same permissions as the parent Usage analytics collection.

There is one thing to know about the Custom reports collection: its metadata resets whenever Metabase restarts. While you are able to temporarily rename the Custom reports collection, or give it a description or an Official badge, Metabase will drop this collection's metadata when it restarts. But rest assured that Metabase will preserve any questions, models, events, or dashboards that you add to the Custom reports collection.

## Dashboards

The Usage analytics collection includes a set of read-only dashboards.

### Metabase metrics dashboard

General information about people viewing and creating dashboards, questions, subscriptions, and alerts. Cards include:

- Active users last week
- Question views last week
- Questions created last week
- Dashboards created last week
- Alerts and subscriptions created last week
- Weekly active users
- Question views per week
- Most active users
- Most active creators
- Most viewed dashboards
- Most viewed cards

### Most viewed content dashboard

View the most relevant content in your Metabase. Cards include:

- Most viewed dashboards
- Most viewed questions
- Most viewed tables

### Person overview dashboard

See what someone's been up to in your Metabase. Cards include:

- Member of
- Active alerts
- Questions created per month
- Question views per month
- Most viewed dashboards
- Most viewed questions
- Last viewed dashboards
- Last viewed questions
- Last viewed tables
- Recent activity
- Last queries

### Dashboard overview dashboard

Information about dashboards, questions, models, and tables. Cards include:

- Dashboard metadata
- Dashboard views per month
- Question performance
- Most active people on this dashboard
- Questions in this dashboard
- Most active people on this dashboard
- Questions in this dashboard
- Recent activity on dashboard
- Subscriptions on this dashboard

### Question overview dashboard

Views, performance, activity, and other data for a particular question. Cards include:

- Question metadata
- Question views per month
- Question performance
- Most active people on this question
- Dashboards with this question
- Last activity on this question
- Alerts on this question

### Performance overview dashboard

Question, dashboard and database performance. Cards include:

- Slowest dashboards
- Dashboards consuming most resources
- Slowest questions
- Questions consuming the most resources
- Dashboards with more questions in the same tab
- Users consuming the most resources

> If you're using MySQL or MariaDB as your application database, the Performance overview dashboard won't display results for the cards displaying the 50th and 90th percentile query running times, because MySQL and MariaDB don't support the [Percentile aggregation](../questions/query-builder/expressions-list.md#percentile). We recommend using PostgreSQL as your application database.

### Content with cobwebs dashboard

Dashboards and questions that you could consider archiving. Cards include:

- Dashboards without recent reviews
- Questions without recent reviews
- Questions that don't belong to a dashboard

## Models

The Usage analytics collection includes a bunch of useful models based on Metabase's application database.

## Activity log model

Each row of this model describes one event of a particular topic. Fields include:

- ID
- Topic
- Timestamp
- End Timestamp
- User ID
- Model
- Model ID
- Details

The topics include:

- alert-create
- alert-delete
- card-create
- card-delete
- card-update
- dashboard-add-cards
- dashboard-create
- dashboard-delete
- dashboard-remove-cards
- install
- metric-create
- metric-delete
- metric-update
- segment-create
- segment-delete
- segment-update
- setting-update
- subscription-create
- subscription-delete
- user-joined

## View log model

Tracks views cards (which includes models), dashboards, and tables. Fields include:

- ID
- Timestamp
- User ID
- Entity Type (card, dashboard, or table)
- Entity ID
- Entity Qualified ID

## Query log model

Information about all queries Metabase ran across all dashboards. Fields include:

- Entity ID
- Started At
- Running Time Seconds
- Result Rows
- Is Native
- Query Source
- Error
- User ID
- Card ID
- Card Qualified ID
- Dashboard ID
- Dashboard Qualified ID
- Pulse ID
- Database ID
- Database Qualified ID
- Cache Hit
- Action ID

Query sources include:

- action
- ad-hoc
- collection
- csv-download
- dashboard
- embedded-dashboard
- embedded-csv-download
- embedded-json-download
- embedded-question
- embedded-xlsx-download
- json-download
- map-tiles
- metabot (experimental)
- public-dashboard
- public-question
- pulse (which includes dashboard subscriptions and alerts)
- question
- xlsx-download

## Alerts model

All alerts, both active and archived.

- Entity ID
- Entity Qualified ID
- Created At
- Updated At
- Creator ID
- Card ID
- Card Qualified ID
- Alert Condition
- Schedule Type
- Schedule Day
- Schedule Hour
- Archived
- Recipient Type
- Recipients
- Recipient External

### Content model

Questions, dashboards, models, events, and collections.

- Entity ID
- Entity Qualified ID
- Entity Type
- Created At
- Updated At
- Creator ID
- Name
- Description
- Collection ID
- Made Public By User
- Is Embedding Enabled
- Archived
- Action Type
- Action Model ID
- Collection Is Official
- Collection Is Personal
- Question Viz Type
- Question Database ID
- Question Is Native
- Event Timestamp

Entity types include:

- action
- collection
- dashboard
- event
- model
- question

## People model

Everyone in your Metabase, including deactivated accounts. Fields include:

- User ID
- Email
- First Name
- Last Name
- Full Name
- Date Joined
- Last Login
- Updated At
- Is Admin
- Is Active
- SSO Source
- Locale

## Dashboard subscriptions model

Which subscriptions are active, who created them, who's subscribed to them, when they're sent, and more.

- Entity ID
- Entity Qualified ID
- Created At
- Updated At
- Creator ID
- Archived
- Dashboard Qualified ID
- Schedule Type
- Schedule Day
- Schedule Hour
- Recipient Type
- Recipients
- Recipient External
- Parameters

## Dashboard cards model

Each row is a dashboard card: either a question card or a text card. Fields include:

- ID
- Dashboard ID
- Dashboardtab ID
- Question ID
- Created At
- Updated At
- Size X
- Size Y
- Visualization Settings
- Parameter Mappings

## Databases model

Information about your connected data sources. Fields include:

- Entity ID
- Entity Qualified ID
- Created At
- Updated At
- Name
- Description
- Database Type
- Metadata Sync Schedule
- Cache Field Values Schedule
- Timezone
- Is On Demand
- Auto Run Queries
- Cache Ttl
- Creator ID
- Db Version

## Tables model

List of all tables across all connected data sources. Fields include:

- Entity ID
- Entity Qualified ID
- Created At
- Updated At
- Name
- Display Name
- Description
- Active
- Database ID
- Schema
- Is Upload

## Fields model

All fields from all connected data sources. Fields include:

- Entity ID
- Entity Qualified ID
- Created At
- Updated At
- Name
- Display Name
- Description
- Base Type
- Visibility Type
- Fk Target Field ID
- Has Field Values
- Active
- Table ID

## System tasks model

Describes the last 14 days of Metabase internal processes tasks.

- ID
- Task
- Database Qualified ID
- Started At
- Ended At
- Duration Seconds
- Details
