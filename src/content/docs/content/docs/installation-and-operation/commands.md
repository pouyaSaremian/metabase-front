---
title: خط فرمان متابیس (Metabase CLI)
---

# خط فرمان متابیس (Metabase CLI)

متابیس همراه با مجموعه‌ای از دستورات خط فرمان (CLI) کاربردی عرضه می‌شود. برای دیدن فهرست دستورات در دسترس، فایل jar متابیس را با آرگومان `help` اجرا کنید.

```
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar help
```

متابیس در خروجی، راهنمای مربوط به دستورات موجود را چاپ می‌کند.

## `api-documentation`

یک فایل Markdown حاوی مستندات همهٔ endpointهای API تولید می‌کند. خروجی در فایلی با نام `docs/api.html` ذخیره می‌شود.

## `driver-methods` | `driver-methods _docs`

فهرستی از تمام multimethodهایی را چاپ می‌کند که یک driver می‌تواند پیاده‌سازی کند. اگر پسوند `_docs` را اضافه کنید، توضیحات (docstring) هر متد نیز نمایش داده می‌شود.

## `config-template`

یک فایل Markdown شامل مستندات و یک مثال از فایل پیکربندی در قالب YAML تولید می‌کند. این قالب YAML شامل تنظیمات متابیس و مقادیر پیش‌فرض آن‌هاست. متابیس این فایل را به‌صورت `docs/configuring-metabase/config-template.md` ذخیره می‌کند.

## `drop-entity-ids`

شناسه‌های Entity را برای نمونه‌های مدل‌های قابل سریال‌سازی حذف می‌کند. این دستور برای مهاجرت از نسخهٔ اول Serialization (نسخه‌های x.46 و قبل) به نسخهٔ دوم (x.47 و بعد) کاربرد دارد.

## `dump path & options`

**توجه: این دستور منسوخ شده است. به‌جای آن از `export` استفاده کنید.**

نمونهٔ متابیس را در مسیر دایرکتوری `path` سریال‌سازی می‌کند.

گزینه‌ها:

- `-u, --user EMAIL` - فقط کالکشن‌هایی را صادر (export) می‌کند که متعلق به کاربر مشخص‌شده هستند.
- `-s, --state (active|all)` - اگر مقدار روی `active` باشد، موجودیت‌های بایگانی‌شده dump نمی‌شوند. مقدار پیش‌فرض `all` است.
- `--include-entity-id` - ویژگی `entity_id` را در همهٔ موجودیت‌های dump‌شده قرار می‌دهد. مقدار پیش‌فرض: false.

## `dump-to-h2 h2-filename & opts`

داده‌ها را از پایگاه‌دادهٔ فعلی به یک پایگاه‌دادهٔ H2 جدید با نام فایل مشخص‌شده منتقل می‌کند. فایل H2 مقصد پیش از شروع عملیات حذف می‌شود، مگر این‌که گزینهٔ `--keep-existing` را تعیین کرده باشید.

گزینه‌ها:

- `-k, --keep-existing` - اگر فایل H2 مقصد وجود داشته باشد، آن را حذف نکن.
- `-p, --dump-plaintext` - محتوای dump‌شده را رمزنگاری نکن (plain text).

## `environment-variables-documentation`

یک فایل Markdown حاوی مستندات متغیرهای محیطی مرتبط با پیکربندی متابیس تولید می‌کند. این دستور تنها متغیرهایی را شامل می‌شود که به‌عنوان defsettings ثبت شده‌اند. برای دیدن فهرست کامل متغیرهای محیطی، به آدرس https://www.metabase.com/docs/latest/configuring-metabase/environment-variables مراجعه کنید.

## `export path & options`

{% include plans-blockquote.html feature="Serialization" self-hosted-only="true" %}

نمونهٔ متابیس را در دایرکتوری واقع در مسیر `path` سریال‌سازی (export) می‌کند.

گزینه‌ها:

- `-c, --collection ID` - فقط ID(های) مشخص‌شده را صادر می‌کند. برای چند ID از ویرگول استفاده کنید. می‌توانید Entity IDها را با پیشوند `eid:<...>` ارسال کنید.
- `-C, --no-collections` - هیچ محتوایی از کالکشن‌ها صادر نشود.
- `-S, --no-settings` - فایل `settings.yaml` صادر نشود.
- `-D, --no-data-model` - هیچ موجودیتی از مدل داده صادر نشود؛ این گزینه برای exportهای بعدی (incremental) مفید است.
- `-f, --include-field-values` - مقادیر فیلدها را همراه با متادیتای فیلدها شامل کن.
- `-s, --include-database-secrets` - جزئیات اتصال پایگاه‌داده (به‌صورت متن ساده؛ با احتیاط استفاده کنید) را نیز صادر کن.
- `-e, --continue-on-error` - در صورت بروز خطا اجرای دستور را متوقف نکن.
- `--full-stacktrace` - در صورت بروز خطا، تمام stack traceها را در خروجی چاپ کن.

## `help command-name` | `help`

پیام راهنمایی که فهرست دستورات معتبر متابیس را نشان می‌دهد چاپ می‌کند. برای دیدن جزئیات یک دستور خاص از `help command-name` استفاده کنید.

## `import path & options`

{% include plans-blockquote.html feature="Serialization" self-hosted-only="true" %}

نمونهٔ سریال‌سازی‌شدهٔ متابیس را که پیش‌تر با دستور `export` در دایرکتوری `path` ایجاد شده، بارگذاری (import) می‌کند.

گزینه‌ها:

- `-e, --continue-on-error` - در صورت بروز خطا اجرای دستور را متوقف نکن.
- `--full-stacktrace` - در صورت بروز خطا، تمام stack traceها را در خروجی چاپ کن.

## `load path & options`

**توجه: این دستور منسوخ شده است. به‌جای آن از `import` استفاده کنید.**

نمونهٔ سریال‌سازی‌شدهٔ متابیس را که با دستور `dump` در دایرکتوری `path` ایجاد شده، بارگذاری می‌کند.

گزینه‌ها:

- `-m, --mode (skip|update)` - در صورت بروز تعارض (conflict)، رکوردها را به‌روزرسانی کند یا از آن‌ها عبور کند. مقدار پیش‌فرض: `skip`.
- `-e, --on-error (continue|abort)` - در صورت خطا ادامه دهد یا متوقف شود. مقدار پیش‌فرض: `continue`.

## `load-from-h2` | `load-from-h2 h2-connection-string`

داده‌ها را از یک پایگاه‌دادهٔ H2 موجود به پایگاه‌دادهٔ MySQL یا Postgres جدیدی که با متغیرهای محیطی تنظیم شده منتقل می‌کند.

## `migrate direction`

مهاجرت‌های پایگاه‌داده (database migrations) را اجرا می‌کند. گزینه‌های معتبر برای `direction` عبارت‌اند از: `up`، `force`، `down`، `print` یا `release-locks`.

## `profile`

متابیس را مانند حالت عادی راه‌اندازی کرده و سپس خارج می‌شود. این دستور برای پروفایل‌کردن زمان راه‌اندازی متابیس مفید است.

## `reset-password email-address`

رمز عبور کاربری را که آدرس ایمیل او `email-address` است بازنشانی می‌کند.

## `rotate-encryption-key new-key`

کلید رمزنگاری پایگاه‌دادهٔ متابیس را چرخش (rotate) می‌دهد. متغیر محیطی `MB_ENCRYPTION_SECRET_KEY` باید روی کلید فعلی تنظیم شده باشد و پارامتر `new-key` کلید جدید باشد. مقدار `new-key` باید حداقل ۱۶ کاراکتر باشد.

## `remove-encryption`

داده‌های رمزنگاری‌شده در پایگاه‌دادهٔ متابیس را رمزگشایی می‌کند. متغیر محیطی `MB_ENCRYPTION_SECRET_KEY` باید روی کلید فعلی تنظیم شده باشد.

## `seed-entity-ids`

برای نمونه‌های مدل‌های قابل سریال‌سازی که هنوز Entity ID ندارند، شناسهٔ Entity ایجاد و مقداردهی می‌کند.

## `version`

اطلاعات نسخهٔ متابیس و سیستم فعلی را در خروجی چاپ می‌کند.

## دستورات کاربردی اضافی

### H2 SQL Shell

بازکردن یک پوستهٔ SQL برای پایگاه‌دادهٔ H2 متابیس:

```sh
java -cp metabase.jar org.h2.tools.Shell -url jdbc:h2:/path/to/metabase.db
```
