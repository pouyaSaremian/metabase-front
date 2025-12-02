---
title: ویجت‌های فیلتر و پارامتر برای کد Native
---

<!-- markdownlint-disable-next-line MD025 -->
# ویجت‌های فیلتر و پارامتر برای کد Native

وقتی یک [متغیر یا پارامتر SQL](./sql-parameters.md) به کوئری Native/SQL خود اضافه می‌کنید، متابیس یک ویجت در بالای کوئری اضافه می‌کند که کاربران می‌توانند با آن مقدار متغیر را تنظیم کنند.

## ساخت انواع مختلف ویجت‌های فیلتر و پارامتر

نوع ویجت فیلتری که متابیس هنگام ساخت یک Field filter نمایش می‌دهد، به تنظیمی برای آن فیلد در متابیس بستگی دارد که **Filtering on this field** نام دارد. مدیران سامانه می‌توانند این گزینه را روی یکی از حالت‌های زیر تنظیم کنند:

- [Input box](#input-box)
- [Search box](#search-box)
- [Dropdown list](#dropdown-menu-and-search)

برای فیلدهای تاریخ، یا یک فیلتر تاریخ ساده (برای متغیرهای تاریخ) نمایش داده می‌شود یا یک Date picker پویا (برای Field filterهایی که به فیلد تاریخ Map شده‌اند).

اگر می‌خواهید ویجت فیلتر پیش‌فرض برای یک فیلد خاص را عوض کنید، باید از ادمین بخواهید آن فیلد را در [Table Metadata](../../data-modeling/metadata-editing.md) و گزینهٔ "Filtering on this field" را به مقدار دلخواه تغییر دهد.

برای Dropdown و Search boxها می‌توانید مقادیر موجود در لیست را نیز سفارشی کنید (در ادامه ببینید).

### Input box

1. یک متغیر SQL در کوئری‌تان قرار دهید.
2. نوع **Variable type** را روی **Field filter** بگذارید. اگر در کوئری فیلد پایگاه‌داده‌ای برای اتصال فیلتر وجود ندارد، بسته به نوع فیلتر می‌توانید از نوع Text یا Number هم استفاده کنید.
3. گزینهٔ **Field to map to** را روی فیلد مناسب تنظیم کنید (فقط اگر نوع متغیر Field filter باشد).
4. **Filter widget operator** را روی هر [عملگری](#filter-widget-operators) که می‌خواهید بگذارید.
5. گزینهٔ **How should users filter on this variable** را روی "Input box" تنظیم کنید.

### Search box

1. یک متغیر SQL در کوئری‌تان قرار دهید.
2. نوع **Variable type** را روی **Field filter** بگذارید. اگر کوئری فیلد پایگاه‌داده مناسب ندارد، می‌توانید از نوع Text یا Number استفاده کنید.
3. گزینهٔ **Field to map to** را روی فیلدی با نوع «Category» تنظیم کنید (فقط اگر نوع متغیر Field filter باشد).
4. **Filter widget operator** را روی هر [عملگری](#filter-widget-operators) که می‌خواهید بگذارید.
5. گزینهٔ **How should users filter on this variable** را روی "Search box" تنظیم کنید. اگر از Field filter استفاده نمی‌کنید، باید تنظیمات Search box را ویرایش کنید و [به متابیس بگویید مقادیر جستجو از کجا تأمین شوند](#customizing-values-for-dropdown-lists-and-search-boxes).

برای محافظت در برابر حملات SQL injection، متابیس هر چیزی را که در Search box وارد می‌شود به String تبدیل می‌کند. اگر می‌خواهید از Wildcard استفاده کنید، [مطلب ما در Learn در مورد متغیرهای SQL][sql-variables] را ببینید.

### منوی Dropdown همراه با جست‌وجو

برای ساخت یک منوی Dropdown که هم قابلیت جست‌وجو داشته باشد و هم لیست کاملی از مقادیر را نشان دهد:

1. یک متغیر در کوئری‌تان قرار دهید.
2. نوع **Variable type** را روی **Field filter** تنظیم کنید. اگر کوئری فیلد پایگاه‌داده مناسب ندارد، بسته به نیاز می‌توانید از نوع Text یا Number هم استفاده کنید.
3. گزینهٔ **Field to map to** را روی فیلد مناسب قرار دهید (فقط اگر نوع متغیر Field filter باشد).
4. **Filter widget operator** را روی هر [عملگری](#filter-widget-operators) که می‌خواهید بگذارید.
5. گزینهٔ **How should users filter on this variable** را روی "Dropdown list" تنظیم کنید. اگر از Field filter استفاده نمی‌کنید، باید تنظیمات Dropdown را ویرایش کنید و [به متابیس بگویید مقادیر لیست از کجا بیایند](#customizing-values-for-dropdown-lists-and-search-boxes).

اگر تعداد مقادیر آن ستون برای نمایش در یک Dropdown خیلی زیاد باشد، متابیس به‌جای آن فقط یک Search box نشان می‌دهد. مثلاً اگر ستون شامل تعداد زیادی آدرس ایمیل باشد احتمالاً فقط یک Search box خواهید دید. ویجت‌های Dropdown برای جاهایی بهتر کار می‌کنند که مجموعهٔ مقادیر محدود است (مثل ۵۰ ایالت آمریکا).

## سفارشی‌سازی مقادیر Dropdown و Search box

وقتی یک Dropdown یا Search box اضافه می‌کنید، می‌توانید تعیین کنید متابیس کدام مقادیر را به کاربر برای انتخاب در ویجت فیلتر نمایش دهد.

1. یک Dropdown یا Search box اضافه کنید.
2. کنار گزینه‌ای که انتخاب کرده‌اید روی **Edit** کلیک کنید.
3. متابیس یک Modal باز می‌کند که در آن می‌توانید مشخص کنید **Where the values should come from**.

گزینه‌های شما:

- **From connected fields**. اگر نوع متغیر را Field filter انتخاب کرده باشید، می‌توانید از فیلد متصل‌شده هم استفاده کنید.
- **From another model or question**. در این حالت باید یک مدل یا سؤال را انتخاب کنید و سپس فیلدی از آن مدل یا سؤال را مشخص کنید که متابیس مقادیر Dropdown یا Search box را از آن تأمین کند. مثلاً اگر می‌خواهید Dropdown لیست پلن‌های ممکن برای یک حساب را نشان دهد، می‌توانید یک مدل «Account» که ساخته‌اید را انتخاب کنید و فیلد «Plan» را به‌عنوان منبع Dropdown تنظیم کنید. در این حالت، Dropdown همهٔ پلن‌های متمایز موجود در ستون «Plan» مدل Accounts را فهرست خواهد کرد.
- **Custom list**. هر آیتم را در یک خط بنویسید. می‌توانید هر رشته‌ای که می‌خواهید اضافه کنید.

همچنین می‌توانید [مقادیر قابل‌انتخاب یک فیلتر داشبورد](../../dashboards/filters.md#change-a-filters-selectable-values) را هم تغییر دهید.

## تنظیم مقدار پیش‌فرض در ویجت فیلتر

در سایدبار متغیرها می‌توانید یک مقدار پیش‌فرض برای متغیر تعریف کنید. این مقدار به‌صورت پیش‌فرض (حتی اگر ویجت خالی به‌نظر برسد) در ویجت فیلتر قرار داده می‌شود.

برای نادیده گرفتن مقدار پیش‌فرض، کافی است مقدار جدیدی را در ویجت فیلتر وارد کنید.

## اجباری کردن مقدار برای ویجت فیلتر

در سایدبار تنظیمات **Variable** می‌توانید گزینهٔ **Always require a value** را فعال کنید. اگر این گزینه را روشن کنید:

- باید حتماً یک مقدار پیش‌فرض وارد کنید.
- مقدار پیش‌فرض هرگونه [سینتکس اختیاری](./optional-variables.md) در کد شما (مثلاً یک عبارت `WHERE` اختیاری) را Override می‌کند. اگر هیچ مقداری به فیلتر داده نشود، متابیس کوئری را با مقدار پیش‌فرض اجرا خواهد کرد. برای دیدن SQL نهایی‌ای که متابیس اجرا می‌کند می‌توانید روی آیکون **Eye** در ویرایشگر کلیک کنید.

## عملگرهای ویجت فیلتر

برای ویجت‌های فیلتر متن، عدد و تاریخ باید یک عملگر فیلتر انتخاب کنید.

### متن (Text)

گزینه‌های عملگر برای متن:

- String
- String is not
- String contains
- String does not contain
- String starts with
- String ends with

### عدد (Number)

گزینه‌های عملگر برای عدد:

- Equal to
- Not equal to
- Between
- Greater than or equal to
- Less than or equal to

### تاریخ (Dates)

گزینه‌های عملگر برای تاریخ:

- Month and year
- Quarter and year
- Single date
- Date range
- Relative date
- All options (متابیس منویی نشان می‌دهد که می‌توانید انتخاب کنید تاریخ‌ها چطور فیلتر شوند: بر اساس بازه، تاریخ نسبی و غیره).

[sql-variables]: https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-variables
