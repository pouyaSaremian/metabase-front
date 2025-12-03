---
title: PostgreSQL
redirect_from:
  - /docs/latest/administration-guide/databases/postgresql
---

# PostgreSQL

> این صفحه اتصال به PostgreSQL را به‌عنوان یک _انبار داده (data warehouse)_ پوشش می‌دهد. برای استفاده از PostgreSQL به‌عنوان _پایگاه‌داده برنامه متابیس_، [پیکربندی پایگاه‌داده برنامه متابیس](../../installation-and-operation/configuring-application-database.md) را ببینید.

برای افزودن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

فیلدهای پایگاه‌داده را پر کنید و در انتها روی **Save changes** کلیک کنید.

## نسخه‌های پشتیبانی‌شده

متابیس از قدیمی‌ترین نسخه پشتیبانی‌شده PostgreSQL تا آخرین نسخه پایدار پشتیبانی می‌کند. [نسخه‌های PostgreSQL](https://www.postgresql.org/support/versioning/) را ببینید.

## اتصال به Supabase

برای اتصال به یک پایگاه‌داده Supabase، نوع پایگاه‌داده PostgreSQL را انتخاب کنید. برای جزئیات بیشتر، [مستندات Supabase](https://supabase.com/docs/guides/database/metabase) را ببینید.

## اتصال و همگام‌سازی (Connection and sync)

بعد از اتصال به پایگاه‌داده، بخشی با عنوان «Connection and sync» می‌بینید که وضعیت فعلی اتصال و گزینه‌های مدیریت اتصال پایگاه‌داده را نمایش می‌دهد.

در این بخش می‌توانید [schema پایگاه‌داده را sync کنید و مقادیر فیلدها را دوباره اسکن کنید](../sync-scan.md) و جزئیات اتصال را ویرایش کنید.

## ویرایش جزئیات اتصال

می‌توانید هر زمان این تنظیمات را ویرایش کنید. فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط متابیس.

### Host

IP پایگاه‌داده یا نام دامنه آن (مثلاً `esc.mydatabase.com`).

### Port

پورت پایگاه‌داده، مثلاً ۵۴۳۲.

### Database name

نام پایگاه‌داده‌ای که به آن متصل می‌شوید.

### Username

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید برای اتصال استفاده کنید. می‌توانید چند اتصال مختلف به یک پایگاه‌داده داشته باشید که هرکدام از اکانت‌های کاربری متفاوتی با مجموعه‌های متفاوت [سطح دسترسی](../users-roles-privileges.md) استفاده کنند.

### Password

رمز عبوری که برای اتصال به پایگاه‌داده همراه با آن username استفاده می‌کنید.

### استفاده از provider احراز هویت

{% include plans-blockquote.html feature="Authenticating with a provider" %}

به‌جای رمز عبور، می‌توانید با یک provider پشتیبانی‌شده احراز هویت کنید.

این گزینه فقط برای پلن‌های Pro و Enterprise self-hosted در دسترس است.

#### Azure Managed Identity

برای استفاده از Azure Managed Identity باید [client ID](https://learn.microsoft.com/en-us/previous-versions/azure/postgresql/single-server/how-to-connect-with-managed-identity#retrieving-the-access-token-from-azure-instance-metadata-service) خود را وارد کنید.

#### OAuth

برای استفاده از OAuth به‌عنوان provider، باید موارد زیر را وارد کنید:

- نشانی Auth token URL
- هدرهای درخواست Auth token (به‌صورت JSON map)

### Schemas

می‌توانید مشخص کنید کدام schemaها را می‌خواهید sync و scan کنید. گزینه‌ها:

- All
- Only these...
- All except...

برای گزینه‌های **Only these** و **All except** می‌توانید یک فهرست جداشده با کاما وارد کنید تا به متابیس بگویید کدام schemaها را شامل (یا مستثنا) کند. مثلاً:

```text
foo,bar,baz
```

می‌توانید از wildcard `*` برای match کردن چند schema استفاده کنید.

فرض کنید سه schema دارید: `foo`، `bar` و `baz`:

- اگر **Only these...** را انتخاب کنید و رشته `b*` را وارد کنید، `bar` و `baz` sync می‌شوند.
- اگر **All except...** را انتخاب کنید و رشته `b*` را وارد کنید، فقط `foo` sync می‌شود.

توجه: فقط wildcard `*` پشتیبانی می‌شود؛ نمی‌توانید از regex یا کاراکترهای ویژه دیگر استفاده کنید.

### استفاده از اتصال امن (SSL)

متابیس به‌صورت خودکار ابتدا تلاش می‌کند با SSL به پایگاه‌داده متصل شود و اگر موفق نشد، بدون SSL تلاش می‌کند. اگر اتصال با SSL امکان‌پذیر باشد، متابیس آن را به‌عنوان پیش‌فرض برای این پایگاه‌داده تنظیم می‌کند. اگر ترجیح می‌دهید بدون این لایه امنیتی متصل شوید، بعداً می‌توانید این تنظیم را تغییر دهید، اما برای امنیت داده‌ها پیشنهاد می‌کنیم SSL روشن بماند.

#### SSL Mode

پایگاه‌داده‌های PostgreSQL سطوح مختلفی از امنیت اتصال با overhead متفاوت دارند.

گزینه‌های SSL Mode شامل موارد زیر است:

- allow
- prefer
- require
- verify-ca
- verify-full

برای جدول مقایسه سطوح مختلف [SSL Modes](https://jdbc.postgresql.org/documentation/ssl/#configuring-the-client) مستندات PostgreSQL را ببینید و گزینه مناسب خود را انتخاب کنید.

#### SSL root certificate (PEM)

اگر SSL Mode را روی «verify-ca» یا «verify-full» تنظیم کنید، باید یک روت‌سرتیفیکیت (PEM) مشخص کنید. می‌توانید از **مسیر فایل محلی (Local file path)** یا **مسیر فایل آپلودشده (Uploaded file path)** استفاده کنید. اگر روی Metabase Cloud هستید، باید **Uploaded file path** را انتخاب و سرتیفیکیت خود را آپلود کنید.

#### احراز هویت با client certificate

این گزینه را روشن کنید تا تنظیمات گواهی‌نامه کلاینت نمایش داده شود.

#### SSL Client Certificate (PEM)

می‌توانید از **Local file path** یا **Uploaded file path** استفاده کنید. اگر روی Metabase Cloud هستید، باید **Uploaded file path** را انتخاب کنید و سرتیفیکیت را آپلود کنید.

#### SSL Client Key (PKCS-8/DER)

دوباره می‌توانید از **Local file path** یا **Uploaded file path** استفاده کنید. اگر روی Metabase Cloud هستید، باید **Uploaded file path** را انتخاب و کلید را آپلود کنید. همچنین باید **SSL Client Key Password** را وارد کنید.

کلید خصوصی باید در قالب PKCS8 و به صورت DER ذخیره شده باشد.

اگر به‌جای آن یک کلید client در قالب PEM دارید، می‌توانید با استفاده از [openssl](https://www.openssl.org/) آن را به فرمت PKCS-8/DER تبدیل کنید. مثلاً:

```bash
openssl pkcs8 -topk8 -inform PEM -outform DER -in client-key.pem -out client-key.der -nocrypt
```

توجه: اگر از GCP استفاده می‌کنید و client certificate صادر کرده‌اید، همه چیز در قالب PEM داده می‌شود؛ فقط لازم است `client-key.pem` را برای «SSL Client Key» به `client-key.der` تبدیل کنید.

### استفاده از SSH tunnel

[راهنمای SSH tunneling](../ssh-tunnel.md) ما را ببینید.

### Unfold JSON Columns

برای پایگاه‌داده‌های PostgreSQL، متابیس می‌تواند ستون‌های JSON را به فیلدهای جزء باز کند تا جدولی بسازد که در آن هر کلید JSON یک ستون مجزا شود. JSON unfolding به‌طور پیش‌فرض فعال است، اما اگر عملکرد کند شد می‌توانید آن را خاموش کنید.

اگر JSON unfolding را روشن بگذارید، می‌توانید برای هر ستون به‌صورت جداگانه در [متادیتای جدول](../../data-modeling/metadata-editing.md#unfold-json) این رفتار را کنترل کنید.

### گزینه‌های اضافی در connection string JDBC

می‌توانید گزینه‌های بیشتری را به connection string که متابیس برای اتصال به پایگاه‌داده استفاده می‌کند اضافه کنید. قالب:

```text
options=-c%20key=value
```

URIهای اتصال PostgreSQL برای فاصله‌ها و نمادها از [percent-encoding](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) استفاده می‌کنند.

### اجرای دوباره پرس‌وجوها برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمه play) کلیک کنند، این گزینه را روی **OFF** بگذارید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینه گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) پرس‌وجو را اجرا می‌کند. اگر پایگاه‌داده شما کند است، شاید بخواهید اجرای خودکار را غیرفعال کنید تا با هر کلیک داده بارگذاری نشود.

### انتخاب زمان sync و scan

[sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌داده شما را افزایش می‌دهد.

این گزینه را روی **ON** بگذارید تا هر بار متابیس [sync](../sync-scan.md#how-database-syncs-work) انجام می‌دهد، یک نمونه از مقادیر را اسکن کند.

یک پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و از آن داده برای تخمین تعداد مقادیر یکتا در هر ستون، کمینه و بیشینه مقادیر ستون‌های عددی و زمانی و غیره استفاده می‌کند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار در زمان راه‌اندازی برای هر ستون fingerprint می‌سازد.

## امکانات مدل (Model features)

می‌توانید انتخاب کنید آیا امکانات مرتبط با [مدل‌های متابیس](../../data-modeling/models.md) را فعال کنید یا نه. این امکانات معمولاً نیاز دارند اکانت کاربری پایگاه‌داده‌ای که برای اتصال استفاده می‌کنید هم مجوز خواندن و هم نوشتن داشته باشد.

### Model actions

این تنظیم را روشن کنید تا [actions](../../actions/introduction.md) قابل اجرا از روی مدل‌های ساخته‌شده روی این داده باشند. اکشن‌ها می‌توانند داده‌ها را بخوانند، بنویسند و حذف کنند. اکانت پایگاه‌داده شما باید مجوز نوشتن داشته باشد.

### Model persistence

متابیس جداولی با داده‌های مدل ایجاد می‌کند و آن‌ها را بر اساس زمان‌بندی‌ای که تعریف می‌کنید تازه‌سازی می‌کند. برای فعال کردن [model persistence](../../data-modeling/model-persistence.md)، باید به اعتبارنامه‌های این اتصال، مجوز خواندن و نوشتن روی schemaای که متابیس فراهم می‌کند بدهید.

## ویرایش دادهٔ جدول (Editable table data)

این تنظیم را روی **ON** بگذارید تا امکان ویرایش داده جدول‌ها مستقیماً در متابیس فعال شود. وقتی این ویژگی فعال باشد، ادمین‌ها می‌توانند رکوردها را در جدول‌های شما از طریق رابط متابیس ایجاد، به‌روزرسانی و حذف کنند.

اتصال پایگاه‌داده شما برای فعال شدن این قابلیت باید مجوز نوشتن داشته باشد؛ یعنی اکانت کاربری پایگاه‌داده‌ای که برای اتصال متابیس استفاده می‌کنید باید مجوزهای لازم برای تغییر داده در جدول‌هایی که می‌خواهید قابل ویرایش باشند داشته باشد. [مجوزها](../users-roles-privileges.md) را ببینید.

## مسیریابی پایگاه‌داده (Database routing)

با Database routing، ادمین می‌تواند یک‌بار با استفاده از یک پایگاه‌داده سؤال بسازد و آن سؤال، بسته به اینکه چه کسی آن را می‌بیند، روی پایگاه‌داده دیگری با همان schema اجرا شود.

[Database routing](../../permissions/database-routing.md) را ببینید.

## بخش خطر (Danger zone)

[Danger zone](../danger-zone.md) را ببینید.

## مطالعه بیشتر

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم مجوزهای دسترسی به داده](../../permissions/data.md)

