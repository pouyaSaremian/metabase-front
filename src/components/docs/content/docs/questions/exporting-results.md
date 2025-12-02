---
title: Export کردن نتایج
summary: خروجی‌گرفتن از سؤال‌ها و داشبوردهای متابیس به‌صورت فایل‌های CSV، Excel، JSON، PDF یا PNG.
redirect_from:
  - /docs/latest/questions/sharing/exporting-results
---

<!-- markdownlint-disable-next-line MD025 -->
# Export کردن نتایج

می‌توانید نتایج یک سؤال یا داشبورد را Export کنید.

## Export کردن نتایج یک سؤال

برای Export کردن نتایج یک سؤال، روی دکمهٔ **Download** در گوشهٔ پایین-راست سؤال کلیک کنید.

![Exporting results of a question](./images/exporting-the-results-of-a-question.png)

می‌توانید نتایج سؤال را به این فرمت‌ها خروجی بگیرید:

- ‎.csv
- ‎.xlsx
- ‎.json
- ‎.png (اگر ویژوالیزیشن نمودار باشد)

می‌توانید انتخاب کنید نتایج را به‌صورت زیر دانلود کنید:

- **Formatted**: با تمام [قالب‌بندی‌هایی](../data-modeling/formatting.md) که در متابیس اعمال کرده‌اید.
- **Unformatted**: متابیس نتایج خام سؤال را بدون اعمال [قالب‌بندی‌هایی که روی ستون‌ها اعمال کرده‌اید](../data-modeling/formatting.md) Export می‌کند. مثلاً اگر عدد اعشاری را طوری قالب‌بندی کرده باشید که فقط دو رقم اعشار در جدول نمایش داده شود، Export غیرقالب‌بندی‌شده ممکن است اعشارهای بیشتری را که در دادهٔ خام وجود دارند، شامل شود.

اگر گزینهٔ Export را نمی‌بینید، ممکن است [سطح دسترسی دانلود نتایج](../permissions/data.md#download-results-permissions) را نداشته باشید.

## Export کردن Pivot tableها

به‌صورت پیش‌فرض، متابیس نتایج Pivot‌شده را Export می‌کند، اما این امکان را هم دارید که نتایج Unpivot‌شده را خروجی بگیرید.

### Pivot table در متابیس

![Pivot table in Metabase](./images/pivot-table-in-metabase.png)

### Export نتایج Unpivot‌شده

![Unpivoted results](./images/unpivoted-results.png)

### Export نتایج Pivot‌شده

![Pivoted results](./images/pivoted-results.png)

نتایج Pivot‌شده در Excel به‌صورت یک جدول تخت (Flat) نمایش داده می‌شوند، نه به شکل [PivotTable بومی Excel](https://support.microsoft.com/en-us/office/overview-of-pivottables-and-pivotcharts-527c8fa3-02c0-445a-a2db-7794676bce96).

اگر می‌خواهید از PivotTable بومی Excel استفاده کنید، بهتر است به‌جای آن، سطرهای خام و غیرتجمیع‌شدهٔ داده‌ای را که لازم دارید Export کنید. یعنی ابتدا هرگونه Summarize و Grouping در سؤال را بردارید و _بعد_ نتایج را Export کنید.

به یک نکته دقت کنید: بعضی Summarizeها در متابیس شامل Joinهای ضمنی هستند، بنابراین وقتی Summarize را حذف می‌کنید، ممکن است لازم باشد جدول‌ها را جوین کنید تا تمام ستون‌های موردنیازتان را در خروجی داشته باشید.

**جدول خام** (جدول Orders به‌همراه جدول Products جوین‌شده):

![Raw table](./images/raw-table.png)

دلیل این‌که متابیس سعی نمی‌کند نتایج را به‌صورت PivotTable بومی Excel خروجی بگیرد، این است که Excel از تمام توابع Aggregation متابیس پشتیبانی نمی‌کند. تلاش برای بازسازی Pivot tableهای متابیس به‌عنوان PivotTable در Excel بدون این توابع می‌تواند به نتایج نادرست منجر شود؛ چیزی که خلاف هدف اصلی نگاه‌کردن به داده‌هاست.

## محدودیت‌های Export

### محدودیت تعداد سطر

به‌صورت پیش‌فرض، متابیس حداکثر 1048575 سطر از نتایج را Export می‌کند.

- برای Exportهای CSV می‌توانید این سقف را با متغیر محیطی [`MB_DOWNLOAD_ROW_LIMIT`](../configuring-metabase/environment-variables.md) افزایش دهید؛ هرچند این کار می‌تواند روی کارایی متابیس تأثیر منفی بگذارد.
- Exportهای XLSX همیشه به حداکثر مجاز Excel یعنی 1048575 سطر (به‌علاوهٔ ردیف Header) محدود هستند.

### محدودیت تعداد کاراکتر در هر سلول برای Exportهای Excel

وقتی نتایج را به یک فایل Excel ‎(.xlsx)‎ Export می‌کنید، متابیس تعداد کاراکترهای هر سلول را به 32767 محدود می‌کند که همان [محدودیت اعمال‌شده توسط Excel](https://support.microsoft.com/en-us/office/excel-specifications-and-limit-1672b34d-7043-467e-8e27-269d656771c3) است. اگر تعداد کاراکترهای یک سلول خیلی زیاد باشد، متابیس متن را برای قرارگرفتن در این محدودیت برش می‌دهد.

## Export کردن نتایج از کارت‌های موجود در Documentها

می‌توانید نتایج نمودارهای جاسازی‌شده در [Documentها](../documents/introduction.md) را دانلود کنید.

برای Export کردن نتایج یک نمودار در Document:

1. روی نمودار در Document هاور کنید.
2. روی منوی سه‌نقطه (**...**) کلیک کنید.
3. گزینهٔ **Download results** را انتخاب کنید.
4. فرمت موردنظر را انتخاب کنید: ‎.csv، ‎.xlsx یا ‎.json.

می‌توانید نتایج را به‌صورت قالب‌بندی‌شده یا بدون قالب‌بندی Export کنید (برای Export بدون قالب‌بندی، هنگام کلیک روی فرمت، روی مک دکمهٔ `Option` و روی ویندوز دکمهٔ `Alt` را نگه‌دارید).

اگر گزینهٔ **Download results** را نمی‌بینید، ممکن است [سطح دسترسی دانلود نتایج](../permissions/data.md#download-results-permissions) را نداشته باشید.

## Export کردن داده ازطریق لینک عمومی

می‌توانید یک [لینک عمومی](../embedding/public-links.md#public-link-to-export-question-results-in-csv-xlsx-json) بسازید که دیگران بتوانند با استفاده از آن، داده را در یک فرمت مشخص دانلود کنند؛ از جمله [نتایج خام و بدون قالب‌بندی سؤال](../embedding/public-links.md#exporting-raw-unformatted-question-results).

## Export کردن دادهٔ سؤال ازطریق هشدار

می‌توانید با تنظیم یک [هشدار](./alerts.md)، داده را هم‌چنان Export کنید.

## Export کردن نتایج داشبورد

راه‌های مختلفی برای Export کردن نتایج یک داشبورد و کارت‌های آن وجود دارد:

### Export داشبورد به PDF

می‌توانید یک داشبورد را به‌صورت PDF خروجی بگیرید. روی دکمهٔ **Sharing** کلیک کنید و گزینهٔ **Export as PDF** را بزنید.

![Exporting a dashboard as a PDF](./images/export-dashboard-as-pdf.png)

فایل PDF فقط اسکرین‌شات‌هایی از نمودارها را همان‌طور که در داشبورد نمایش داده می‌شوند شامل می‌شود.

### Export کردن نتایج یک کارت داشبورد

برای Export کردن نتایج یک کارت مشخص، روی کارت داشبورد هاور کنید، روی منوی سه‌نقطه (**...**) کلیک کنید و گزینهٔ **Download results** را انتخاب کنید.

![Export results of a dashboard card](./images/download-card-results.png)

از این‌جا می‌توانید یکی از فرمت‌ها را انتخاب کنید:

- ‎.csv
- ‎.xlsx
- ‎.json
- ‎.png (اگر ویژوالیزیشن نمودار باشد)

برای Export کردن نتایج خام و بدون قالب‌بندی، روی مک دکمهٔ `Option` و روی ویندوز دکمهٔ `Alt` را نگه دارید و سپس روی فرمت دانلود کلیک کنید.

اگر این گزینه را نمی‌بینید، ممکن است [سطح دسترسی دانلود نتایج](../permissions/data.md#download-results-permissions) را نداشته باشید.

### Export کردن نتایج داشبورد ازطریق اشتراک‌ها

می‌توانید از [اشتراک‌های داشبورد](../dashboards/subscriptions.md) استفاده کنید تا به‌طور منظم دادهٔ همهٔ سؤال‌های موجود در یک داشبورد را Export کنید و آن نتایج را به‌صورت فایل ضمیمه در ایمیل دریافت کنید.

## حذف برند متابیس از خروجی‌ها

به‌صورت پیش‌فرض، خروجی‌های داده (PDF، PNG، ایمیل‌های هشدار و اشتراک و غیره) برند متابیس را نمایش می‌دهند، مثل لوگوی «Made with Metabase»:

![Question with Metabase logo](./images/question-with-metabase-logo.png)

برای حذف لوگو و برند متابیس از خروجی‌ها، باید مشترک یکی از پلن‌های [Pro یا Enterprise](https://www.metabase.com/pricing/) شوید.

## مطالعهٔ بیشتر

- [هشدارها](./alerts.md)
- [اشتراک‌های داشبورد](../dashboards/subscriptions.md)
- [جداول](./visualizations/table.md)
