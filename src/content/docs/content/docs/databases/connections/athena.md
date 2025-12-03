---
title: Amazon Athena
---

# Amazon Athena

برای افزودن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

## اتصال و همگام‌سازی

بعد از اتصال به یک پایگاه‌داده، بخشی با عنوان «Connection and sync» را می‌بینید که وضعیت فعلی اتصال و گزینه‌های مدیریت اتصال پایگاه‌داده را نمایش می‌دهد.

در این بخش می‌توانید [schema پایگاه‌داده را sync کنید و مقادیر فیلدها را دوباره اسکن کنید](../sync-scan.md)، و همچنین جزئیات اتصال را ویرایش نمایید.

### ویرایش جزئیات اتصال

می‌توانید این تنظیمات را هر زمان که خواستید ویرایش کنید (و فراموش نکنید که تغییرات را ذخیره کنید).

### Connection string

در اینجا یک connection string قرار دهید تا فیلدهای باقی‌ماندهٔ زیر آن به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Region

منطقهٔ (Region) سرویس AWS که پایگاه‌دادهٔ شما (برای Amazon Athena) در آن میزبانی شده است. برای نمونه، می‌توانید `us-east-1` را وارد کنید.

### Workgroup

Workgroup در AWS. برای مثال: `primary`. برای اطلاعات بیشتر [مستندات workgroupها](https://docs.aws.amazon.com/athena/latest/ug/user-created-workgroups.html) را ببینید.

### S3 Staging directory

این پوشهٔ staging روی S3 باید در همان منطقه‌ای باشد که در بالا تعیین کرده‌اید.

### Access key

بخشی از اطلاعات احراز هویت IAM در AWS. متابیس این اطلاعات را رمزنگاری می‌کند.

اگر متابیس را روی AWS اجرا می‌کنید و می‌خواهید از [زنجیرهٔ پیش‌فرض اعتبارنامه‌های AWS (AWS Default Credentials Chain)](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default) استفاده کنید، فیلدهای Access و Secret key را خالی بگذارید.

همچنین [نکات اتصال به Athena](#نکات-اتصال-به-athena) را ببینید.

### Secret Key

بخشی دیگر از اطلاعات احراز هویت IAM در AWS. متابیس این اطلاعات را نیز رمزنگاری می‌کند.

### گزینه‌های اضافی connection string برای Athena

می‌توانید گزینه‌های اضافی را به‌صورت یک رشته تنظیم کنید؛ مثلاً: `UseResultsetStreaming=0;LogLevel=6`.

### افزودن User ID و query hash به کوئری‌ها

این گزینه می‌تواند برای ممیزی (audit) و عیب‌یابی مفید باشد، اما جلوی cache شدن نتایج در پایگاه‌داده‌ها را می‌گیرد و ممکن است هزینه‌های شما را افزایش دهد. اگر لازم است بدانید کدام کاربران چه کوئری‌هایی اجرا می‌کنند، این قابلیت را فعال کنید.

### اجرای دوبارهٔ کوئری‌ها برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، خودشان روی **Run** (دکمهٔ پخش/اجرای کوئری) کلیک کنند، این گزینه را **خاموش** کنید.

به‌طور پیش‌فرض، متابیس به‌محض این‌که یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) انتخاب کنید، کوئری را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، شاید بهتر باشد این اجرای خودکار را غیرفعال کنید تا با هر کلیک، بار اضافه روی پایگاه‌داده ایجاد نشود.

### انتخاب زمان اجرای sync و scan

بخش [sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> اجرای fingerprint دوره‌ای، بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را **روشن** کنید تا هر بار که متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر ستون‌ها را اسکن کند.

یک کوئری fingerprint، ۱۰٬۰۰۰ ردیف اول هر ستون را بررسی می‌کند و از آن داده‌ها برای تخمین تعداد مقادیر منحصربه‌فرد هر ستون، حداقل و حداکثر مقادیر ستون‌های عددی و زمان‌محور و موارد مشابه استفاده می‌کند. اگر این گزینه را **خاموش** بگذارید، متابیس فقط در زمان راه‌اندازی، یک‌بار ستون‌های شما را fingerprint می‌کند.

## نکات اتصال به Athena

اگر از سرویس‌های دیگر AWS هم استفاده می‌کنید، پیشنهاد می‌کنیم یک AWS Service Account جداگانه بسازید که فقط مجوزهای لازم برای اجرای Athena را داشته باشد، و از اعتبارنامه‌های IAM همان حساب برای اتصال متابیس به Athena استفاده کنید.

برای جزئیات بیشتر، [مستندات Identity and access management در Athena](https://docs.aws.amazon.com/athena/latest/ug/security-iam-athena.html) را ببینید.

### اتصال با استفاده از AWS Default Credentials Chain

اگر متابیس را روی AWS اجرا می‌کنید و می‌خواهید از [AWS Default Credentials Chain](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default) استفاده کنید، فیلدهای Access و Secret key را خالی بگذارید.

- برای EC2 می‌توانید از [instance profileها](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) استفاده کنید.
- برای ECS می‌توانید از [IAM roleهای مخصوص taskها](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) استفاده کنید.

در هر دو حالت، درایور Athena به‌طور خودکار بر اساس IAM roleای که پیکربندی کرده‌اید، اعتبارنامه‌های نشست (session credentials) را دریافت می‌کند.

### مجوزها و IAM Policyها

بیشتر مشکلاتی که هنگام اتصال به AWS Athena می‌بینیم، به مجوزها برمی‌گردد. اجرای کوئری روی AWS Athena به این مجوزها نیاز دارد:

- AWS Athena.
- AWS Glue.
- باکِت S3ای که نتایج Athena در آن ذخیره می‌شود.
- منابعی که Athena روی آن‌ها کوئری اجرا می‌کند (یعنی همان باکت یا باکت‌های S3ای که Athena از آن‌ها می‌خواند).
- اگر از AWS Lake Formation استفاده می‌کنید، باید از طریق AWS Console مجوزهای Lake Formation را هم بدهید (مسیر: AWS Lake Formation > Permissions > Data Lake Permissions > Grant data lake permissions؛ IAM roleای که متابیس استفاده می‌کند باید مجوزهای SELECT و DESCRIBE table را داشته باشد).

### نمونهٔ IAM Policy

این policy مجوزهای فقط‌خواندنی (read-only) برای داده‌های موجود در S3 را فراهم می‌کند. لازم است برای هر باکت S3ای که می‌خواهید متابیس بتواند از آن کوئری بگیرد _و همچنین_ باکتی که در تنظیمات به‌عنوان محل ذخیرهٔ نتایج Athena معرفی کرده‌اید، ARN مربوطه را مشخص کنید.

ممکن است برای برخی قابلیت‌های دیگر Athena، مانند federated queryها، به مجوزهای بیشتری نیاز داشته باشید. برای جزئیات، [مستندات Athena](https://docs.aws.amazon.com/athena/latest/ug/security-iam-athena.html) را ببینید.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Athena",
      "Effect": "Allow",
      "Action": [
        "athena:BatchGetNamedQuery",
        "athena:BatchGetQueryExecution",
        "athena:GetNamedQuery",
        "athena:GetQueryExecution",
        "athena:GetQueryResults",
        "athena:GetQueryResultsStream",
        "athena:GetWorkGroup",
        "athena:ListDatabases",
        "athena:ListDataCatalogs",
        "athena:ListNamedQueries",
        "athena:ListQueryExecutions",
        "athena:ListTagsForResource",
        "athena:ListWorkGroups",
        "athena:ListTableMetadata",
        "athena:StartQueryExecution",
        "athena:StopQueryExecution",
        "athena:CreatePreparedStatement",
        "athena:DeletePreparedStatement",
        "athena:GetPreparedStatement",
        "athena:GetTableMetadata"
      ],
      "Resource": "*"
    },
    {
      "Sid": "Glue",
      "Effect": "Allow",
      "Action": [
        "glue:BatchGetPartition",
        "glue:GetDatabase",
        "glue:GetDatabases",
        "glue:GetPartition",
        "glue:GetPartitions",
        "glue:GetTable",
        "glue:GetTables",
        "glue:GetTableVersion",
        "glue:GetTableVersions"
      ],
      "Resource": "*"
    },
    {
      "Sid": "S3ReadAccess",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket", "s3:GetBucketLocation"],
      "Resource": [
        "arn:aws:s3:::bucket1",
        "arn:aws:s3:::bucket1/*",
        "arn:aws:s3:::bucket2",
        "arn:aws:s3:::bucket2/*"
      ]
    },
    {
      "Sid": "AthenaResultsBucket",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:AbortMultipartUpload",
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": ["arn:aws:s3:::bucket2", "arn:aws:s3:::bucket2/*"]
    }
  ]
}
```

اگر متابیس لازم است جدول هم بسازد، به مجوزهای بیشتری در AWS Glue نیاز خواهید داشت. جفت کلید-مقدار `"Resource": "*"` به این حساب اجازه می‌دهد روی هر جدولی عملیات حذف (Delete) و به‌روزرسانی (Update) انجام دهد:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "glue:BatchCreatePartition",
        "glue:UpdateDatabase",
        "glue:DeleteDatabase",
        "glue:CreateTable",
        "glue:CreateDatabase",
        "glue:UpdateTable",
        "glue:BatchDeletePartition",
        "glue:BatchDeleteTable",
        "glue:DeleteTable",
        "glue:CreatePartition",
        "glue:DeletePartition",
        "glue:UpdatePartition",
        "glue:GetCatalogImportStatus"
      ],
      "Resource": "*"
    }
  ]
}
```

## قابلیت‌های مدل

در حال حاضر هیچ قابلیت مدل خاصی برای Athena در دسترس نیست.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک اتصال داده بسازد، و بعد همان سؤال بسته به این‌که چه کسی آن را مشاهده می‌کند، کوئری‌اش را روی یک اتصال دادهٔ دیگر با همان schema اجرا کند.

البته نام «database routing» در مورد Athena کمی گمراه‌کننده است، چون واژهٔ «database» در Athena بیشتر شبیه مفهوم «schema» در سایر پایگاه‌داده‌ها است. شما نمی‌توانید از database routing برای مسیردهی بین _database_های مختلف در Athena استفاده کنید، اما می‌توانید بین اتصال‌های دادهٔ مختلف مسیردهی کنید؛ مثلاً regionها یا باکت‌های متفاوت، کاربران IAM متفاوت، یا منبع‌ها/کاتالوگ‌های دادهٔ مختلف.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

- [مدیریت پایگاه‌های داده](../../databases/connecting.md)
- [ویرایش ابرداده (Metadata editing)](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم مجوزهای دسترسی به داده](../../permissions/data.md)


