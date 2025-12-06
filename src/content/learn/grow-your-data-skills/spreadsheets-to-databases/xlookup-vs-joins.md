---
title: "از VLOOKUP/XLOOKUP به Joinها"
description: "مقدمه‌ای بر joinهای پایگاه داده بر اساس توابع VLOOKUP و XLOOKUP اکسل."
redirect_from:
  - /learn/grow-your-data-skills/spreadsheets-to-databases/xlookup-vs-joins
toc:
  - id: "from-vlookup-xlookup-to-joins"
    title: "از VLOOKUP/XLOOKUP به Joinها"
    level: 1
    href: "#from-vlookup-xlookup-to-joins"
  - id: "a-look-at-xlookup"
    title: "نگاهی به XLOOKUP"
    level: 2
    href: "#a-look-at-xlookup"
  - id: "looking-up-using-xlookup"
    title: "جستجو با استفاده از XLOOKUP"
    level: 2
    href: "#looking-up-using-xlookup"
  - id: "using-a-join-instead"
    title: "استفاده از یک JOIN به جای آن"
    level: 2
    href: "#using-a-join-instead"
  - id: "joining-tables-using-the-query-builder"
    title: "Join کردن جداول با استفاده از query builder"
    level: 3
    href: "#joining-tables-using-the-query-builder"
  - id: "specifying-the-join-in-sql"
    title: "مشخص کردن join در SQL"
    level: 3
    href: "#specifying-the-join-in-sql"
  - id: "joins-vs-xlookup"
    title: "Joinها در مقابل XLOOKUP"
    level: 3
    href: "#joins-vs-xlookup"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "صفحه‌گسترده‌ها به پایگاه‌های داده"
    href: "index.html"
---

# از VLOOKUP/XLOOKUP به Joinها

مقدمه‌ای بر joinهای پایگاه داده بر اساس توابع VLOOKUP و XLOOKUP اکسل.

در نرم‌افزار صفحه‌گسترده مثل اکسل و Google Sheets، تابع XLOOKUP (و پیش‌ساز آن، VLOOKUP) داده‌ای را که به sheetهای مختلف یا بخش‌هایی از یک صفحه‌گسترده تقسیم شده است متصل می‌کند. اگر قبلاً از XLOOKUP استفاده کرده‌اید، ممکن است متوجه نشده باشید که اساساً همان عملیات یک join پایگاه داده که دو جدول پایگاه داده را ترکیب می‌کند را انجام داده‌اید. در اینجا نگاهی به نحوه کار XLOOKUP و نحوه ارتباط آن با joinهای ساده پایگاه داده وجود دارد.

## نگاهی به XLOOKUP

این دو تابع lookup همان هدف را دارند: پیدا کردن یک رکورد در یک صفحه‌گسترده بر اساس یک مقدار lookup. آن‌ها در برخی روش‌های نسبتاً جزئی که برای اهداف این بحث نادیده می‌گیریم متفاوت هستند. [XLOOKUP نسخه انعطاف‌پذیرتر و قدرتمندتر VLOOKUP است](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929)، به همین دلیل است که برای بقیه این مقاله فقط به XLOOKUP اشاره می‌کنیم.

![Sheetهای Product و Order](../../images/spreadsheets-to-databases/xlookup-tables.png)

به عنوان مثال، در تصویر بالا، sheet سمت چپ شامل یک فهرست از سفارش‌ها است، در حالی که صفحه‌گسترده سمت راست شامل اطلاعات درباره محصولات است. هر سفارش فقط یک نوع محصول دارد، اما مقدار سفارش داده شده می‌تواند متفاوت باشد. می‌خواهیم مجموع برای هر محصول را محاسبه کنیم. نتیجه صفحه‌گسترده دیگری خواهد بود، که شبیه این به نظر می‌رسد.

![sheet حاصل از مجموع سفارش‌ها](../../images/spreadsheets-to-databases/table-totals.png)

Sheetهای Orders و Products برخی داده مشترک دارند، یک فهرست از Product IDها که به ما اجازه می‌دهد محصولات را به سفارش‌ها پیوند دهیم.

![صفحه‌گسترده‌های Product و Order با ستون‌های ProductID برجسته شده](../../images/spreadsheets-to-databases/xlookup-tables-highlighted.png)

در sheet *Products*، مقادیر در ستون `ProductID` ردیف‌ها در sheet *Products* خود را شناسایی می‌کنند. در sheet *Orders*، مقادیر در ستون `ProductID` به ردیف‌ها در یک sheet *مختلف*، در این مورد sheet *Products* اشاره می‌کنند.

برای محاسبه مجموع برای هر سفارش، باید محصول را در جدول *Products* جستجو کنیم، قیمت آن را از ستون *Price* دریافت کنیم، و سپس آن را در ورودی در ستون *Quantity* سفارش ضرب کنیم.

## جستجو با استفاده از XLOOKUP

تابع XLOOKUP چندین آرگومان می‌گیرد:

- `lookup_value`: مقدار برای جستجو (کدام ستون)
- `lookup_array`: کجا آن را جستجو کنیم (کدام جدول)
- `return_array`: چه چیزی برگردانیم
- (به علاوه چند آرگومان اختیاری، که در اینجا نادیده می‌گیریم)

در مورد ما، مقداری که می‌خواهیم جستجو کنیم یک مقدار در ستون `ProductID` جدول *Orders* ما است. *کجا آن را جستجو کنیم* اولین ستون sheet *Products* است که همچنین `ProductID` نامیده می‌شود.

![XLOOKUP بین جداول Orders و Products](../../images/spreadsheets-to-databases/xlookup-tables-match.png)

XLOOKUP ستون را اسکن می‌کند تا یک `ProductID` مطابق پیدا کند، سپس یک مقدار از آرگومان "چه چیزی برگردانیم" از ردیف مطابق برمی‌گرداند. ما ستون `Price` را به عنوان "چه چیزی برگردانیم" مشخص می‌کنیم، پس XLOOKUP مقدار در ستون Price ردیف با `ProductID` مطابق را برمی‌گرداند. XLOOKUP سپس این قیمت را در sheet *Totals* ما وارد می‌کند.

![وارد کردن مقدار پیدا شده در جدول Order Totals ما](../../images/spreadsheets-to-databases/xlookup-tables-transfer.png)

در این نقطه، می‌توانیم مجموع سفارش خود را با توابع استاندارد اکسل یا Google Sheets دریافت کنیم. به سادگی `Quantity` سفارش را در `Price` آن ضرب می‌کنیم.

برای انجام این عملیات روی کل جدول، می‌توانیم به سادگی فرمول را در همه ردیف‌ها کپی کنیم، دوباره دقیقاً مثل اینکه در هر صفحه‌گسترده‌ای انجام می‌دهید. یک چیز برای مراقبت این است که مطمئن شویم محدوده‌های lookup و return با کپی کردن فرمول به پایین ستون لغزش نمی‌کنند. برای جزئیات درباره نحوه استفاده از XLOOKUP در اکسل، [مستندات XLOOKUP](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929) را ببینید.

## استفاده از یک JOIN به جای آن

در یک پایگاه داده، همان عملیاتی که فقط انجام دادیم با یک [join](../../sql/working-with-sql/sql-joins.html) انجام می‌شود. یک join اساساً همان روش XLOOKUP کار می‌کند، اما روی کل جدول به یکباره عمل می‌کند. در زیر کاپوت، یک join هر ردیف در جدول سفارش‌ها را "جستجو می‌کند"، دقیقاً مثل XLOOKUP.

اگر یک پایگاه داده با همان جداول مثل مثال صفحه‌گسترده بالا داشته باشیم، می‌توانیم همان جدول مجموع‌ها را ایجاد کنیم. ابتدا از [query builder](../../../docs/latest/questions/query-builder/editor.html) متابیس استفاده می‌کنیم، و سپس نگاهی به نحوه انجام آن با استفاده از یک پرس‌وجوی SQL می‌اندازیم.

### Join کردن جداول با استفاده از query builder

![Join کردن جداول Orders و Product با استفاده از query builder](../../images/spreadsheets-to-databases/orders-query-builder.png)

اینجا، ما دو جدول را برای join شدن در سمت چپ انتخاب می‌کنیم، *Orders* و *Products*. سپس نحوه join کردن آن‌ها را در سمت راست تعریف می‌کنیم، که با مقایسه ستون‌های `ProductID` مربوطه در هر کدام انجام می‌شود.

سپس می‌توانیم یک ستون سفارشی ایجاد کنیم که مقادیر در ستون `Quantity` جدول *Orders* را در `Price` در *Products* ضرب می‌کند.

ما به همان نتیجه استفاده از XLOOKUP بالا می‌رسیم، به جز اینکه حالا از پایگاه داده ما می‌آید.

![نتیجه استفاده از یک join روی یک پایگاه داده](../../images/spreadsheets-to-databases/join-result-metabase.png)

### مشخص کردن join در SQL

SQL، *زبان پرس‌وجوی ساختار یافته*، روش بومی صحبت با یک پایگاه داده است. برای بسیاری از سؤال‌ها، یک ویرایشگر بصری مثل یکی بالا راه است، اما برای برخی پرس‌وجوهای پیشرفته، SQL ضروری است. مثال اینجا فقط برای نشان دادن نحوه کار یک پرس‌وجوی SQL ساده است.

پرس‌وجو شامل سه بخش است:

- انتخاب فیلدهای مرتبط از جدول Orders (`OrderID`، `Quantity`، و غیره)
- ضرب مقدار `Price` در `Quantity` (در خطی که به `AS Total` ختم می‌شود)
- ایجاد join با استفاده از دستور `LEFT JOIN` و مشخص کردن کدام فیلدها باید مطابقت داشته باشند

```sql
SELECT
  Orders.OrderID,
  Orders.ProductID,
  Orders.Quantity,
  Products.Price * Orders.Quantity AS Total,
  Products.Name

FROM
  Orders
 
LEFT JOIN Products ON Orders.ProductID = Products.ProductID
```

جزئیات join کنار، نکته اصلی این است که همان عناصر را مثل XLOOKUP مشخص کرده‌ایم: join با استفاده از یک ستون از هر یک از دو جدول مختلف تعریف شده است، و ما مشخص می‌کنیم کدام مقدار را از ردیف مطابق برای عملیات بیشتر بگیریم.

### Joinها در مقابل XLOOKUP

قطعاً تفاوت‌هایی بین joinهای پایگاه داده و XLOOKUP در صفحه‌گسترده‌ها وجود دارد. انواع مختلفی از joinها وجود دارد، به عنوان مثال، و ما فقط left outer joinها را در اینجا پوشش می‌دهیم. Joinها همچنین می‌توانند روی چندین فیلد مطابقت داشته باشند، از توابع به عنوان بخشی از مطابقت استفاده کنند، و غیره.

با این حال، برای هدف ترکیب داده از دو جدول که روی یک ستون واحد مطابقت دارند، XLOOKUP و (left outer) joinها اساساً همان عملیات را انجام می‌دهند.

جایی که پایگاه‌های داده واقعاً می‌درخشند مدیریت عملیات پیچیده‌تر است. شاید می‌خواهید مجموع همه مجموع‌ها به ازای سال یا ماه را محاسبه کنید، یا تفاوت بین مقادیر و یک میانگین متحرک را محاسبه کنید. در یک پایگاه داده، تجمیع و سایر عملیات می‌توانند در همان پرس‌وجو به عنوان یک join انجام شوند.

[
      
      
        

      
      
        
        
      
    ](sheets-vs-tables.html)
