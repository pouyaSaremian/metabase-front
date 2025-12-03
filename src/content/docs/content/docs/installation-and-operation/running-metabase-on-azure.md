---
title: اجرای متابیس روی Microsoft Azure
redirect_from:
  - /docs/latest/operations-guide/running-metabase-on-azure
---

# اجرای متابیس روی Microsoft Azure

در این راهنما مراحل اصلی اجرای یک نمونهٔ متابیس روی Microsoft Azure با استفاده از Docker را مرور می‌کنیم.

## گام ۱: ایجاد Resource Group (گروه منابع)

در کنسول مدیریت Azure روی آیکون **Resource Groups** در بالای صفحه کلیک کنید (یا عبارت Resource Groups را جست‌وجو کنید). اگر از قبل یک Resource Group دارید، می‌توانید مستقیم به [گام ۲](#step-2-create-the-vnet-virtual-network) بروید.

در صفحهٔ Resource Groups روی دکمهٔ **+ Add** در نوار بالا کلیک کنید تا یک گروه منابع جدید بسازید. در صفحهٔ **Create a resource group**، اشتراک (Subscription) معتبر خود را انتخاب کنید، نام گروه منابع را وارد کنید و یک Region انتخاب کنید.

![Create a Resource Group](images/AZResource_group_Add.png)

روی **Next** کلیک کنید تا به صفحه‌ای برسید که دکمهٔ **Create** در آن نمایش داده می‌شود، سپس روی آن کلیک کنید.

هنگام انتخاب Region برای متابیس، علاوه بر هزینه‌های زیرساخت، حتماً موقعیت جغرافیایی کاربران و انبار داده (Data Warehouse) خود و همین‌طور قوانین حریم خصوصی و محدودیت‌های احتمالی انتقال داده بین کشورها را هم در نظر بگیرید.

## گام ۲: ایجاد VNET (شبکهٔ مجازی)

در مرکز صفحه روی دکمهٔ **Create resources** کلیک کنید و عبارت **VNET** را جست‌وجو کنید:

![VNET Marketplace](images/AZMarketPlaceVnet.png)

محصول VNET از Microsoft را انتخاب کرده و روی **Create** کلیک کنید:

![VNET Product](images/AZVnet.png)

برای شبکهٔ مجازی یک نام انتخاب کنید و همان Region گام قبل (Resource Group) را انتخاب کنید. سپس در پایین صفحه روی **Next: IP Addresses** کلیک کنید.

در این مرحله یک شبکهٔ امن می‌سازیم که شامل یک subnet عمومی (در معرض اینترنت) و یک subnet خصوصی برای پایگاه‌دادهٔ اپلیکیشن شماست.

در فیلد IPv4 باید مقدار پیش‌فرض `10.0.0.0/16` را ببینید (اگر نبود، این محدودهٔ آدرس را اضافه کنید). سپس دو subnet ایجاد کنید:

- یک subnet با نام `public` و بازهٔ آدرس `10.0.1.0/24`
- یک subnet با نام `private` و بازهٔ آدرس `10.0.2.0/24`

![Azure network configuration](images/AZNetworks.png)

روی **Next** کلیک کنید تا به صفحهٔ **Review and create** برسید، سپس روی دکمهٔ **Create** در پایین صفحه کلیک کنید تا شبکه ایجاد شود.

## گام ۳: ایجاد پایگاه‌دادهٔ اپلیکیشن (PostgreSQL)

از صفحهٔ اصلی کنسول مدیریت Azure یک منبع جدید بسازید و این بار عبارت **Azure Database for PostgreSQL** را جست‌وجو کنید. همچنین می‌توانید این سرویس را در بخش **Databases** از منوی Marketplace پیدا کنید.

![Azure PostgreSQL](images/AZDatabase.png)

در صفحهٔ بعد، باید نحوهٔ استفاده از سرویس را مشخص کنید. فعلاً گزینهٔ **Single server** را انتخاب کنید؛ این گزینه نقطهٔ شروع خوبی است، اما توجه داشته باشید که تنها یک نمونهٔ PostgreSQL ایجاد می‌کند که Single Point of Failure خواهد بود.

در صفحهٔ بعد، موارد زیر را تنظیم کنید:

- **Resource group**: همان گروه منابعی که سایر مؤلفه‌ها را در آن قرار داده‌اید.
- **Server name**: یک نام منحصربه‌فرد برای سرور پایگاه‌داده.
- **Data Source**: می‌تواند روی مقدار `None` بماند.
- **Location**: همان Region مورداستفاده برای Resource Group و VNET.
- **Version**: جدیدترین نسخهٔ در دسترس را انتخاب کنید.
- **Compute + Storage**: می‌توانید منابع را تغییر دهید، اما حتماً Tier را روی `General Purpose` قرار دهید، چون این تنها رده‌ای است که Private Link را پشتیبانی می‌کند.

سپس یک نام کاربری و رمز عبور مدیریتی برای پایگاه‌داده انتخاب کنید.

روی **Next** کلیک کنید تا به صفحهٔ نهایی برسید، سپس روی **Create** کلیک کنید. ایجاد پایگاه‌داده چند دقیقه زمان می‌برد. بعد از اتمام، روی **Go to resource** کلیک کنید.

## گام ۴: ایجاد Private Endpoint

در صفحهٔ تنظیمات سرور Azure Database for PostgreSQL می‌توانید پارامترهای پایگاه‌داده را مدیریت کنید. در این بخش، یک **Private Endpoint** برای پایگاه‌داده ایجاد می‌کنید تا تمام ترافیک بین وب‌اپلیکیشن و پایگاه‌داده از طریق شبکهٔ داخلی Azure عبور کند.

در منوی سمت چپ، روی **Private endpoint connection** که زیر بخش **Security** قرار دارد کلیک کنید.

![Azure Database for PostgreSQL](images/AZPostgreSQLMain.png)

روی دکمهٔ نوار بالا با آیکون + و برچسب **Private endpoint** کلیک کنید. در صفحه‌ای که باز می‌شود:

1. یک نام برای این لینک وارد کنید (هر نام توصیفی مانند `metabase_link` مناسب است). Region را همان Region پایگاه‌داده انتخاب کنید و روی **Next** کلیک کنید.
2. در بخش **Resource**، مطمئن شوید **Resource type** روی مقدار `Microsoft.DBforPostgreSQL/servers` قرار دارد تا بتوانید در منوی کشویی زیر، همان سروری را که در گام قبل ساخته‌اید انتخاب کنید. مقدار **Target sub-resource** را روی مقدار پیش‌فرض بگذارید.
3. در بخش **Configuration**، مقدار مهم **Subnet** است؛ این گزینه را روی subnet خصوصی (`private`) که در گام اول ساخته‌اید قرار دهید و بقیه را به حالت پیش‌فرض بگذارید.

![Azure PrivateLink config](images/AZPrivateLink.png)

سپس به گام آخر بروید و روی **Create** کلیک کنید. پس از ایجاد Endpoint، قبل از ادامه باید دو کار انجام دهید:

1. در صفحهٔ سرور پایگاه‌داده، به بخش **Connection Security** بروید و گزینهٔ **deny all public network access** را فعال کنید تا دسترسی عمومی غیرفعال شود.
2. در صفحهٔ VNET ساخته‌شده، به تنظیمات **Connected devices** بروید؛ باید یک دستگاه متصل به شبکه ببینید. آدرس IP آن را یادداشت کنید، چون در گام ۵ به آن نیاز خواهید داشت (این همان IP خصوصی‌ای است که شبکه به سرور پایگاه‌داده اختصاص داده است).

## گام ۵: ساخت Web App (استقرار متابیس)

در نهایت، جایی که همه‌چیز به هم می‌رسد: به Resource Group خود بروید و یک منبع جدید اضافه کنید، یا در Marketplace به‌دنبال **Web App** (آیکون کرهٔ آبی) بگردید.
![Azure web app](images/AZMarketplaceWebApp.png)

در صفحهٔ تنظیمات Web App مقادیر زیر را تنظیم کنید (Resource Group باید همان موردی باشد که در گام اول استفاده کردید):

- **Name**: نام باید منحصربه‌فرد باشد، چون ساب‌دامین بین همهٔ استقرارهای Azure مشترک است.
- **Publish**: گزینهٔ Docker Container.
- **Operating System**: گزینهٔ Linux.
- **Region**: همان Region مراحل قبلی.
- **App Service Plan**: اگر Plan ندارید، Azure به‌طور خودکار یکی می‌سازد.
- **SKU and Size**: یک Plan در سطح Production با **حداقل** ۲۰۰ ACU و ۳.۵ گیگابایت RAM انتخاب کنید و روی **Apply** کلیک کنید.

در گام بعدی، مقادیر زیر را انتخاب کنید:

- **Options**: گزینهٔ Single container.
- **Image source**: گزینهٔ DockerHub.
- **Access Type**: گزینهٔ Public.
- **Image and tag**: مقدار `metabase/metabase:latest` (یا هر تگ دیگری که ترجیح می‌دهید، مثلاً نسخهٔ Enterprise). برای پیدا کردن آخرین نسخه، به [ریپازیتوری Docker Hub نسخهٔ Community](https://hub.docker.com/r/metabase/metabase/tags?page=1&ordering=last_updated) و [ریپازیتوری Enterprise](https://hub.docker.com/r/metabase/metabase-enterprise/tags?page=1&ordering=last_updated) مراجعه کنید.
- **Startup command**: این فیلد را خالی بگذارید.

روی **Next** کلیک کنید تا به بخش نهایی برسید، سپس روی **Create** کلیک کنید و منتظر بمانید تا اپلیکیشن شما راه‌اندازی شود.

حالا به صفحهٔ تنظیمات Web App بروید و در منوی سمت چپ روی **Settings -> Networking** کلیک کنید. در صفحهٔ بعد، زیر بخش **VNET integration** روی **Click here to configure** کلیک کنید.

![Azure VNET integration](images/AZVNETintegration.png)

روی علامت + کنار **Add VNET** کلیک کنید، VNET ساخته‌شده و سپس subnet عمومی (`public`) را انتخاب کنید. روی **OK** کلیک کنید.

![Azure VNET public subnet](images/AZVNETPublicSubnet.png)

سپس به صفحهٔ تنظیمات Web App برگردید و در منوی سمت چپ روی **Settings -> Configuration** کلیک کنید. در این صفحه چند Application Setting از قبل تعریف شده می‌بینید.

در این بخش باید [متغیرهای محیطی](../configuring-metabase/environment-variables.md) لازم برای اتصال متابیس به [پایگاه‌دادهٔ اپلیکیشن PostgreSQL](../installation-and-operation/configuring-application-database.md#postgresql) را اضافه کنید. حتماً از مقدار کامل **MB_DB_CONNECTION_URI** استفاده کنید.

توجه کنید که در Azure PostgreSQL، نام کاربری به شکل `user@name_of_your_database_engine` است؛ بنابراین رشتهٔ اتصال کامل به شکل زیر خواهد بود:

```
postgresql://databasePrivateIPAddress:port/postgres?user=user@name_of_your_database_engine&password=configuredpassword&ssl=true&sslmode=required
```

برای مثال، اگر مقادیر شما به شکل زیر باشند:

1. **database private IP address**: مقدار `10.0.2.4`
2. **database port**: مقدار `5432` برای Postgres (در MySQL/MariaDB پورت پیش‌فرض `3306` است)
3. **name of the database server**: مقدار `metabase-app-database`
4. **username of the database**: مقدار `metabase`
5. **password**: مقدار `Password1!`

در این صورت رشتهٔ اتصال شما به این شکل خواهد بود:

```
postgresql://10.0.2.4:5432/postgres?user=metabase%40metabase-app-database&password=Password1!&ssl=true&sslmode=require
```

توجه: در این مثال کاراکتر `@` با `%40` جایگزین شده است؛ از نسخهٔ ۴۳ به بعد استفاده از `@` در این بخش از رشتهٔ اتصال کار نخواهد کرد.

روی **Save** کلیک کنید تا تنظیمات ذخیره و نمونهٔ وب‌اپلیکیشن ریستارت شود.

پس از اتمام راه‌اندازی، می‌توانید آدرس متابیس خود را در تب **Overview** و بخش **URL** مشاهده و از همان‌جا آن را در مرورگر باز کنید.

## تنظیمات تکمیلی

### فعال‌کردن Health Checks

فعال‌کردن Health Check در متابیس یک کار توصیه‌شده است. در وب‌اپ خود در Azure به مسیر **Monitoring -> Health Check** بروید، گزینهٔ **Enable health check** را فعال کنید و مسیر `/api/health` را برای Health endpoint قرار دهید.

### نحوهٔ ارتقا

برای ارتقای نسخه، وارد وب‌اپ متابیس خود شوید و روی **Deployment -> Deployment Center** کلیک کنید.

نسخهٔ ایمیج کانتینر را در فیلد **Full Image Name and Tag** در بخش **Registry settings** به نسخهٔ جدید تغییر دهید و روی **Save** کلیک کنید. نسخه‌های موجود ایمیج Docker متابیس را می‌توانید در [Docker Hub](https://hub.docker.com/r/metabase/metabase/tags?page=1&ordering=last_updated) ببینید.

**مهم:** پیش از ارتقا همیشه از پایگاه‌دادهٔ اپلیکیشن متابیس بک‌آپ بگیرید، خصوصاً هنگام ارتقای بین نسخه‌های اصلی (major). متابیس به‌صورت رسمی داون‌گرید نسخه را پشتیبانی نمی‌کند.

### مشاهدهٔ لاگ‌ها

در وب‌اپ Azure، به مسیر **Monitoring -> Log stream** بروید تا لاگ‌ها را ببینید.

در داخل خود متابیس نیز می‌توانید از مسیر Settings -> Admin -> Tools -> Logs لاگ‌ها را مشاهده کنید.

### بهینه‌سازی عملکرد (Performance tuning)

- غیرفعال‌کردن FTP State
- تنظیم HTTP Version روی ۲.۰
- فعال‌کردن WebSockets
- فعال‌بودن ARR Affinity

### دامنه‌های سفارشی (Custom domains)

برای استفاده از دامنهٔ اختصاصی با گواهی‌های خودتان، در وب‌اپ Azure به **Settings -> Custom domains** بروید.

### Scale-up در مقابل Scale-out

Azure راه ساده‌ای برای افزایش ظرفیت سرور با Scale‑up در اختیار شما می‌گذارد؛ کافی است پلنی با RAM و CPU بیشتر انتخاب کنید و نمونهٔ وب‌اپ را ریستارت کنید. این روش از Scale‑out (افزودن سرورهای بیشتر) ساده‌تر است و معمولاً بهتر است ابتدا Scale‑up را امتحان کنید.

برای استقرار متابیس با دسترس‌پذیری بالا (High Availability) می‌توانید وب‌اپ خود را Scale‑out کنید (چند سرور هم‌زمان اپلیکیشن را سرو کنند). در بخش Scale-out می‌توانید با اسلایدر تعداد instanceها را افزایش دهید یا یک سیاست Auto-scaling سفارشی (مثلاً تعداد بیشتر سرورها در ساعات کاری و تعداد کمتر در ساعات غیرکاری) تعریف کنید.

### CORS

اگر متابیس را embed می‌کنید، ممکن است نیاز باشد CORS را در وب‌اپ فعال کنید. در مسیر **Settings -> CORS** در وب‌اپ، دامنه‌های مبدأ (origin) اپلیکیشن‌هایی را که متابیس در آن‌ها embed شده وارد کنید تا Azure درخواست‌های Cross-Origin از آن دامنه‌ها را مجاز بداند.

### نام پایگاه‌داده

Azure هنگام ایجاد سرویس اجازهٔ ساخت دیتابیس جدید را به‌صورت خودکار نمی‌دهد؛ به همین دلیل در مثال‌ها از دیتابیس `postgres` برای نصب متابیس استفاده کردیم. هرچند این کار مشکلی ایجاد نمی‌کند، اما از نظر بهترین رویه بهتر است یک دیتابیس جداگانه به نام `metabase` بسازید. اگر برای تست عجله ندارید، بلافاصله پس از ایجاد سرویس پایگاه‌داده، دیتابیسی به نام `metabase` بسازید و هنگام استقرار کانتینر Docker از رشتهٔ اتصال متناسب با آن استفاده کنید.
در مثال بالا، رشتهٔ اتصال به شکل زیر خواهد بود:

```
postgresql://10.0.2.4:5432/metabase?user=metabase@metabase-app-database&password=Password1!&ssl=true&sslmode=require
```

اگر در اتصال به مشکل برخوردید، به [راهنمای تنظیم Postgres](../installation-and-operation/configuring-application-database.md#postgresql) مراجعه کنید؛ ممکن است مسئله به کاراکتر `@` در بخش نام کاربری رشتهٔ اتصال مربوط باشد. در چنین مواردی استفاده از ترکیب `MB_DB_CONNECTION_URI` همراه با متغیرهای جداگانهٔ `MB_DB_USER` و `MB_DB_PASSWORD` نیز راه‌گشا است.
