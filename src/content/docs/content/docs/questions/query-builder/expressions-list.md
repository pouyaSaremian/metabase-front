---
title: فهرست عبارت‌ها
redirect_from:
  - /docs/latest/users-guide/expressions-list
---

<!-- markdownlint-disable-next-line MD025 -->
# فهرست عبارت‌ها

برای آشنایی اولیه با عبارت‌ها، به [نمای کلی عبارت‌های سفارشی][expressions] سر بزنید.

- [Aggregationها](#aggregations)

  - [Average](#average)
  - [Count](#count)
  - [CountIf](./expressions/countif.md)
  - [Distinct](#distinct)
  - [DistinctIf](#distinctif)
  - [Max](#max)
  - [Median](#median)
  - [Min](#min)
  - [Percentile](#percentile)
  - [Share](#share)
  - [StandardDeviation](#standarddeviation)
  - [Sum](#sum)
  - [SumIf](./expressions/sumif.md)
  - [Variance](#variance)
  - [CumulativeSum](./expressions/cumulative.md)
  - [CumulativeCount](./expressions/cumulative.md)

- توابع (Functions)

  - [توابع منطقی](#logical-functions)

    - [between](#between)
    - [case](./expressions/case.md)
    - [coalesce](./expressions/coalesce.md)
    - [if](./expressions/case.md)
    - [in](#in)
    - [isNull](./expressions/isnull.md)
    - [notIn](#notin)
    - [notNull](#notnull)

  - [توابع ریاضی](#math-functions)

    - [abs](#abs)
    - [ceil](#ceil)
    - [exp](#exp)
    - [floor](#floor)
    - [integer](#integer)
    - [log](#log)
    - [power](#power)
    - [round](#round)
    - [sqrt](#sqrt)

  - [توابع متنی (String)](#string-functions)

    - [concat](./expressions/concat.md)
    - [contains](#contains)
    - [date](#date)
    - [datetime](#datetime)
    - [doesNotContain](#doesnotcontain)
    - [domain](#domain)
    - [endsWith](#endswith)
    - [float](#float)
    - [host](#host)
    - [isEmpty](./expressions/isempty.md)
    - [integer](#integer)
    - [lTrim](#ltrim)
    - [length](#length)
    - [lower](#lower)
    - [notEmpty](#notempty)
    - [path](#path)
    - [regexExtract](./expressions/regexextract.md)
    - [replace](#replace)
    - [splitPart](#splitpart)
    - [rTrim](#rtrim)
    - [startsWith](#startswith)
    - [subdomain](#subdomain)
    - [substring](./expressions/substring.md)
    - [text](#text)
    - [trim](#trim)
    - [upper](#upper)

  - [توابع تاریخ](#date-functions)

    - [convertTimezone](./expressions/converttimezone.md)
    - [date](#date)
    - [datetime](#datetime)
    - [datetimeAdd](./expressions/datetimeadd.md)
    - [datetimeDiff](./expressions/datetimediff.md)
    - [datetimeSubtract](./expressions/datetimesubtract.md)
    - [day](#day)
    - [dayName](#dayname)
    - [hour](#hour)
    - [interval](#interval)
    - [minute](#minute)
    - [month](#month)
    - [monthName](#monthname)
    - [now](./expressions/now.md)
    - [quarter](#quarter)
    - [quarterName](#quartername)
    - [relativeDateTime](#relativedatetime)
    - [second](#second)
    - [timeSpan](#timespan)
    - [today](#today)
    - [week](#week)
    - [weekday](#weekday)
    - [year](#year)

  - [توابع Type-casting](#type-casting-functions)

    - [date](#date)
    - [datetime](#datetime)
    - [float](#float)
    - [integer](#integer)
    - [text](#text)

  - [توابع Window](#window-functions)

    - [Offset](./expressions/offset.md)
    - [CumulativeCount](./expressions/cumulative.md)
    - [CumulativeSum](./expressions/cumulative.md)

- [محدودیت‌ها](#limitations)
  - [محدودیت‌های پایگاه‌داده](#database-limitations)

## Aggregations

عبارت‌های Aggregation همهٔ مقادیر یک فیلد را در نظر می‌گیرند. این عبارت‌ها فقط در بخش **Summarize** در Query builder قابل استفاده هستند.

### Average

میانگین مقادیر ستون را برمی‌گرداند.

Syntax: ‎`Average(column)`‎

Example: ‎`Average([Quantity])`‎ میانگین فیلد `Quantity` را محاسبه می‌کند.

### Count

تعداد ردیف‌ها (Records) در دادهٔ انتخاب‌شده را برمی‌گرداند.

Syntax: ‎`Count()`‎

Example: اگر جدول یا نتیجه ۱۰ ردیف داشته باشد، ‎`Count()`‎ مقدار `10` را برمی‌گرداند.

### [CountIf](./expressions/countif.md)

فقط ردیف‌هایی را می‌شمارد که شرط مشخص‌شده برایشان برقرار است.

Syntax: `CountIf(condition)`

Example: ‎`CountIf([Subtotal] > 100)`‎ تعداد ردیف‌هایی را برمی‌گرداند که مقدار `Subtotal` در آن‌ها بیش از ۱۰۰ است.

### Distinct

تعداد مقادیر یکتای موجود در یک ستون را برمی‌گرداند.

Syntax: `Distinct(column)`

Example: ‎`Distinct([Last Name])`‎ تعداد نام‌خانوادگی‌های منحصربه‌فرد این ستون را می‌دهد؛ مقدارهای تکراری (مثلاً چندین «Smith») فقط یک‌بار شمرده می‌شوند.

### DistinctIf

تعداد مقادیر یکتای یک ستون را **فقط** در ردیف‌هایی برمی‌گرداند که شرط مشخصی برایشان برقرار است.

Syntax: `DistinctIf(column, condition)`

Example: ‎`DistinctIf([ID], [Category] = "Gizmo")`‎ تعداد `ID`‌های منحصربه‌فردی را می‌دهد که ستون `Category` در آن‌ها برابر `"Gizmo"` است.

### Max

بزرگ‌ترین مقدار موجود در یک ستون را برمی‌گرداند.

Syntax: `Max(column)`

Example: ‎`Max([Age])`‎ بیشترین سن موجود در ستون `Age` را برمی‌گرداند.

Related: [Min](#min)، [Average](#average)، [Median](#median)

### Median

مقدار میانهٔ یک ستون را برمی‌گرداند؛ یعنی مقداری که نیمی از رکوردها کوچک‌تر و نیمی بزرگ‌تر از آن هستند.

Syntax: `Median(column)`

Example: ‎`Median([Age])`‎ سنی را پیدا می‌کند که نصف افراد از آن مسن‌تر و نصف دیگر کم‌سن‌ترند.

پایگاه‌داده‌هایی که از `median` پشتیبانی نمی‌کنند: Druid، MariaDB، MongoDB، MySQL، SQLite، Vertica و SQL Server. در Presto این مقدار تقریباً (نه دقیق) محاسبه می‌شود.

Related: [Min](#min)، [Max](#max)، [Average](#average)

### Min

کوچک‌ترین مقدار موجود در ستون را برمی‌گرداند.

Syntax: `Min(column)`

Example: ‎`Min([Salary])`‎ کمترین حقوق ثبت‌شده در ستون `Salary` را برمی‌گرداند.

Related: [Max](#max)، [Median](#median)، [Average](#average)

### Percentile

مقداری از ستون را برمی‌گرداند که در یک صدک (Percentile) مشخص قرار دارد.

Syntax: `Percentile(column, percentile-value)`

Example: ‎`Percentile([Score], 0.9)`‎ مقداری را برمی‌گرداند که در صدک نودم همهٔ نمره‌ها قرار می‌گیرد.

پایگاه‌داده‌هایی که از `percentile` پشتیبانی نمی‌کنند: Druid، H2، MariaDB، MySQL، MongoDB، SQL Server، SQLite، Vertica. در Presto این مقدار تقریباً محاسبه می‌شود.

### Share

درصد ردیف‌هایی را که یک شرط مشخص در آن‌ها برقرار است، به‌صورت عدد اعشاری برمی‌گرداند.

Syntax: `Share(condition)`

Example: ‎`Share([Color] = "Blue")`‎ تعداد ردیف‌هایی را که مقدار `Color` در آن‌ها `"Blue"` است، بر تعداد کل ردیف‌ها تقسیم می‌کند.

### StandardDeviation

انحراف معیار ستون را محاسبه می‌کند؛ یعنی معیاری از پراکندگی مقادیر حول میانگین.  
انحراف معیار کم یعنی مقادیر نزدیک به میانگین متمرکز شده‌اند، و انحراف معیار زیاد یعنی مقادیر گسترهٔ وسیعی را پوشش می‌دهند.

Syntax: `StandardDeviation(column)`

Example: ‎`StandardDeviation([Population])`‎ انحراف معیار مقادیر ستون `Population` را برمی‌گرداند.

پایگاه‌داده‌هایی که از `StandardDeviation` پشتیبانی نمی‌کنند: Druid و SQLite.

### Sum

تمام مقادیر یک ستون را با هم جمع می‌کند.

Syntax: `Sum(column)`

Example: ‎`Sum([Subtotal])`‎ مجموع همهٔ مقادیر ستون `Subtotal` را برمی‌گرداند.

### [SumIf](./expressions/sumif.md)

فقط برای ردیف‌هایی که یک شرط مشخص در آن‌ها برقرار است، مقادیر ستون را جمع می‌کند.

Syntax: `SumIf(column, condition)`

Example: ‎`SumIf([Subtotal], [Order Status] = "Valid")`‎ مجموع زیرجمع‌های سفارش‌هایی را می‌دهد که وضعیت آن‌ها `"Valid"` است.

### Variance

واریانس (نوسان حول میانگین) را برای یک ستون عددی برمی‌گرداند.

Syntax: `Variance(column)`

Example: ‎`Variance([Temperature])`‎ معیاری از پراکندگی دماها نسبت به میانگین دما را در ستون `Temperature` برمی‌گرداند.

Related: [StandardDeviation](#standarddeviation)، [Average](#average)

پایگاه‌داده‌هایی که از `Variance` پشتیبانی نمی‌کنند: Druid و SQLite.

## Functions

عبارت‌های تابعی (Function) روی **هر مقدار به‌صورت جداگانه** اعمال می‌شوند.  
از این توابع می‌توانید برای تغییر مقدار یک ستون، فیلترکردن داده‌ها یا ساخت ستون‌های سفارشی جدید استفاده کنید.

## Logical functions

توابع منطقی مشخص می‌کنند آیا یک شرط برقرار است یا نه، و بر اساس آن تصمیم می‌گیرند چه مقداری برگردانده شود.

### between

اگر مقدار یک ستون عددی یا تاریخی داخل یک بازهٔ مشخص قرار بگیرد، مقدار `true` و در غیر این صورت `false` برمی‌گرداند.

Syntax: `between(column, start, end)`

Example: اگر فیلتر را این‌طور تنظیم کنید:  
‎`between([Created At], "2019-01-01", "2020-12-31")`‎، متابیس فقط ردیف‌هایی را برمی‌گرداند که تاریخ `Created At` آن‌ها بین ۱ ژانویه ۲۰۱۹ و ۳۱ دسامبر ۲۰۲۰ (شامل هر دو تاریخ ابتدا و انتها) باشد.

Related: [interval](#interval)

### [case](./expressions/case.md)

تابع `case` (هم‌ارز `if`) یک عبارت را در برابر چند شرط بررسی می‌کند و مقدار متناظر با **اولین شرط برقرار** را برمی‌گرداند؛ در صورت نیاز می‌توانید یک مقدار پیش‌فرض هم برای زمانی که هیچ شرطی برقرار نیست تعیین کنید.

Syntax: `case(condition, output, …)`

Example:  
‎`case([Weight] > 200, "Large", [Weight] > 150, "Medium", "Small")`‎  
اگر مقدار `Weight` برابر ۲۵۰ باشد، نتیجه `"Large"` خواهد بود. در این مثال مقدار پیش‌فرض `"Small"` است، پس برای هر وزن ۱۵۰ یا کمتر، `"Small"` برگردانده می‌شود.

### [coalesce](./expressions/coalesce.md)

به‌ترتیب آرگومان‌ها را بررسی می‌کند و **اولین مقدار غیر null** را برای هر ردیف برمی‌گرداند.

Syntax: `coalesce(value1, value2, …)`

Example: ‎`coalesce([Comments], [Notes], "No comments")`‎  
اگر هر دو ستون `Comments` و `Notes` در یک ردیف `null` باشند، این عبارت `"No comments"` را برمی‌گرداند.

### [if](./expressions/case.md)

تابع `if` در متابیس در واقع همان [case](./expressions/case.md) است (Alias).

Syntax: `if(condition, output, ...)`

Example:  
‎`if([Weight] > 200, "Large", [Weight] > 150, "Medium", "Small")`‎  
اگر وزن ۲۵۰ باشد، مقدار `"Large"`، و برای وزن‌های ۱۵۰ یا کمتر مقدار پیش‌فرض `"Small"` برگردانده می‌شود.

### in

اگر `value1` برابر با هرکدام از `value2`، `value3` و … باشد، `true` و در غیر این صورت `false` برمی‌گرداند.

Syntax: `in(value1, value2, ...)`

- `value1`: ستونی یا مقداری که قرار است بررسی شود.  
- `value2, ...`: فهرستی از ستون‌ها یا مقادیری که می‌خواهید با آن‌ها مقایسه کنید.

Example: ‎`in([Category], "Widget", "Gadget")`‎ برای ردیف‌هایی که مقدار `Category` در آن‌ها `"Widget"` یا `"Gadget"` است، مقدار `true` برمی‌گرداند.

Related: [notIn](#notin)، [contains](#contains)، [startsWith](#startswith)، [endsWith](#endswith)

### [isNull](./expressions/isnull.md)

اگر مقدار ستون در آن ردیف `null` باشد، `true` و در غیر این صورت `false` برمی‌گرداند.

Syntax: `isNull(column)`

Example: ‎`isNull([Tax])`‎ در ردیف‌هایی که هیچ مقدار مالیاتی ثبت نشده (`null` است)، مقدار `true` می‌دهد.

Related: [notNull](#notnull)، [isEmpty](#isempty)

### notNull

اگر ستون در آن ردیف **هر مقداری غیر از `null`** داشته باشد، مقدار `true` برمی‌گرداند.

Syntax: `notNull(column)`

Example: ‎`notNull([Tax])`‎ زمانی `true` است که برای ستون `Tax` در آن ردیف مقداری ثبت شده باشد.

Related: [isNull](#isnull)، [notEmpty](#notempty)

### notIn

برعکس `in` عمل می‌کند: اگر `value1` با هیچ‌کدام از مقدارهای داده‌شده برابر نباشد، `true` برمی‌گرداند.

Syntax: `notIn(value1, value2, ...)`

- `value1`: ستونی یا مقداری که قرار است بررسی شود.  
- `value2, ...`: مقادیری که نباید با آن‌ها برابر باشد.

Example: ‎`notIn([Category], "Widget", "Gadget")`‎ برای ردیف‌هایی که مقدار `Category` در آن‌ها نه `"Widget"` است و نه `"Gadget"`, مقدار `true` می‌دهد.

Related: [in](#in)، [case](./expressions/case.md)

## Math functions

توابع ریاضی عملیات معمولی و پرکاربرد ریاضی را پیاده‌سازی می‌کنند.

### abs

قدر مطلق (مقدار همیشه مثبت) را برمی‌گرداند.

Syntax: `abs(column)`

Example: اگر مقدار `Debt` برابر `-100` باشد، ‎`abs([Debt])`‎ عدد `100` را برمی‌گرداند.

### ceil

عدد اعشاری را همیشه رو به بالا گرد می‌کند (Ceiling).

Syntax: `ceil(column)`

Example: ‎`ceil(2.99)`‎ مقدار `3` را برمی‌گرداند.

Related: [floor](#floor)، [round](#round)

### exp

[عدد اویلر](https://en.wikipedia.org/wiki/E_(mathematical_constant)) یعنی `e` را به توان عدد داده‌شده می‌رساند.

Syntax: `exp(column)`

Example: ‎`exp([Interest Months])`‎

Related: [power](#power)

### floor

عدد اعشاری را همیشه رو به پایین گرد می‌کند.

Syntax: `floor(column)`

Example: اگر `Price` برابر `1.99` باشد، ‎`floor([Price])`‎ مقدار `1` را برمی‌گرداند.

Related: [ceil](#ceil)، [round](#round)

### log

لگاریتم عدد بر مبنای ۱۰ را برمی‌گرداند.

Syntax: `log(column)`

Example: ‎`log([Value])`‎

### power

یک عدد را به توان مقدار داده‌شده می‌رساند.

Syntax: `power(column, exponent)`

Example: اگر `Length` برابر `3` باشد، ‎`power([Length], 2)`‎ مقدار `9` را برمی‌گرداند (`3*3`).

پایگاه‌داده‌هایی که از `power` پشتیبانی نمی‌کنند: SQLite.

Related: [exp](#exp)

### round

یک عدد اعشاری را به نزدیک‌ترین عدد صحیح گرد می‌کند (بالا یا پایین).

Syntax: `round(column)`

Example: اگر `Temperature` برابر `13.5` باشد، ‎`round([Temperature])`‎ مقدار `14` را برمی‌گرداند.

Example: ‎`round([Temperature] * 10) / 10`‎ اگر `Temperature` برابر `100.75` باشد، مقدار `100.8` را برمی‌گرداند.

### sqrt

ریشهٔ دوم یک مقدار را برمی‌گرداند.

Syntax: `sqrt(column)`

Example: ‎`sqrt([Hypotenuse])`‎

پایگاه‌داده‌هایی که از `sqrt` پشتیبانی نمی‌کنند: SQLite.

Related: [power](#power)

## String functions

توابع متنی (String) برای کار با رشته‌ها و اعتبارسنجی یا تغییر آن‌ها استفاده می‌شوند.

### [concat](./expressions/concat.md)

چند رشته را به هم متصل می‌کند.

Syntax: `concat(value1, value2, …)`

Example: ‎`concat([Last Name], ", ", [First Name])`‎ رشته‌ای با فرمت `"Last Name, First Name"` تولید می‌کند؛ مثلاً `"Palazzo, Enrico"`.

### contains

بررسی می‌کند که آیا `string1` شامل `string2` هست یا نه.

به‌صورت پیش‌فرض **حساس به حروف بزرگ/کوچک** است؛ با پارامتر `"case-insensitive"` می‌توانید تطبیق غیرحساس به حروف داشته باشید.

Syntax:  
‎`contains(string1, string2)`‎ (حساس به حروف)  
‎`contains(string1, string2, "case-insensitive")`‎ (غیرحساس به حروف)

Example: اگر `Status` برابر `"Classified"` باشد، ‎`contains([Status], "Class")`‎ مقدار `true` و اگر `"classified"` باشد مقدار `false` برمی‌گرداند.

Related: [doesNotContain](#doesnotcontain)، [regexExtract](#regexextract)

### date

> در Oracle و درایور غیر JDBC برای Apache Druid در دسترس نیست.

- روی رشته‌ای با فرمت تاریخ ISO 8601، آن را به نوع Date تبدیل می‌کند (اگر زمان هم وجود داشته باشد، بخش زمان حذف می‌شود).  
- روی مقدار datetime، بخش زمان را حذف کرده و فقط تاریخ را نگه می‌دارد.

Syntax: `date(value)`

Example: ‎`date("2025-03-20")`‎ یک مقدار تاریخ برمی‌گرداند تا بتوانید در Query builder از امکانات مربوط به تاریخ (گروه‌بندی بر اساس ماه، فیلتر ۳۰ روز گذشته و …) استفاده کنید.

فرمت استاندارد ISO 8601 شامل این اجزاست:

- Year (YYYY): 2025  
- Month (MM): 03  
- Day (DD): 25  
- Time separator (T)  
- Hours (HH): 14  
- Minutes (MM): 30  
- Seconds (SS): 45  
- UTC indicator (Z)

نمونه‌های معتبر ISO 8601:

- فقط تاریخ: ‎`2025-03-25`‎  
- تاریخ با زمان: ‎`2025-03-25T14:30:45`‎  
- تاریخ با زمان و منطقهٔ زمانی: ‎`2025-03-25T14:30:45+01:00`‎

Example: ‎`date(2025-04-19T17:42:53+01:00)`‎ مقدار `2025-04-19` را برمی‌گرداند.

Related: [datetime](#datetime)

### datetime

> روی PostgreSQL، MySQL/MariaDB، BigQuery، Redshift، ClickHouse و Snowflake در دسترس است.

رشته، بایت یا عدد را به مقدار datetime تبدیل می‌کند.

Syntax: `datetime(value, mode)`

- `value`: رشته، بایت یا عددی که باید به datetime تبدیل شود.  
- `mode`: اختیاری؛ قالب ورودی را مشخص می‌کند و یکی از `"simple"`, `"iso"`, `"simpleBytes"`, `"isoBytes"`, `"unixSeconds"`, `"unixMilliseconds"`, `"unixMicroseconds"`, `"unixNanoseconds"` است. مقدار پیش‌فرض `"iso"` است.

Example: ‎`datetime("2025-03-20 12:45:04")`‎

`datetime` از این فرمت‌های متنی پشتیبانی می‌کند:

```txt
2025-05-15T22:20:01
2025-05-15 22:20:01
```

ممکن است برخی دیتابیس‌ها فرمت‌های دیگری را هم بپذیرند.

Related: [date](#date)

### doesNotContain

بررسی می‌کند که آیا `string1` **شامل** `string2` هست یا نه، و اگر **نباشد** مقدار `true` برمی‌گرداند.

به‌صورت پیش‌فرض حساس به حروف است؛ با `"case-insensitive"` می‌توانید حساسیت را غیرفعال کنید.

Syntax:  
‎`doesNotContain(string1, string2)`‎ (حساس)  
‎`doesNotContain(string1, string2, "case-insensitive")`‎ (غیرحساس)

Example: اگر `Status` برابر `"Classified"` باشد، ‎`doesNotContain([Status], "Class")`‎ مقدار `false` برمی‌گرداند.

Related: [contains](#contains)، [regexExtract](#regexextract)

### domain

نام دامنه را از یک URL یا ایمیل استخراج می‌کند.

Syntax: `domain(urlOrEmail)`

Example: اگر مقدار `[Page URL]` برابر `https://www.metabase.com` باشد، ‎`domain([Page URL])`‎ مقدار `metabase` را برمی‌گرداند. برای `hello@metabase.com` هم ‎`domain([Email])`‎ مقدار `metabase` را استخراج می‌کند.

Related: [host](#host)، [path](#path)، [subdomain](#subdomain)

### endsWith

اگر انتهای متن با رشتهٔ مقایسه برابر باشد، مقدار `true` برمی‌گرداند.

به‌صورت پیش‌فرض حساس به حروف است؛ با `"case-insensitive"` می‌توانید آن را غیراحساس کنید.

Syntax:  
‎`endsWith(text, comparison)`‎ (حساس)  
‎`endsWith(text, comparison, "case-insensitive")`‎ (غیرحساس)

Example: ‎`endsWith([Appetite], "hungry")`‎ اگر `Appetite` با `"hungry"` تمام شود، مقدار `true` برمی‌گرداند.

Related: [startsWith](#startswith)، [contains](#contains)، [doesNotContain](#doesnotcontain)

### float

> در PostgreSQL، MySQL/MariaDB، BigQuery، Redshift، ClickHouse و Snowflake در دسترس است.

رشته را به عدد اعشاری (Floating point) تبدیل می‌کند؛ زمانی مفید است که دادهٔ عددی شما به‌صورت رشته ذخیره شده باشد و بخواهید روی آن محاسبات انجام دهید.

Syntax: `float(value)`

Example: ‎`float("123.45")`‎ مقدار عددی `123.45` را برمی‌گرداند.

### host

بخش Host (دامنه به‌همراه TLD) را از یک URL یا ایمیل استخراج می‌کند.

Syntax: `host(urlOrEmail)`

Example: اگر `[Page URL]` برابر `https://www.metabase.com` باشد، ‎`host([Page URL])`‎ مقدار `metabase.com` را برمی‌گرداند. برای `hello@metabase.com` هم ‎`host([Email])`‎ مقدار `metabase.com` را استخراج می‌کند.

Related: [domain](#domain)، [path](#path)، [subdomain](#subdomain)

### [isEmpty](./expressions/isempty.md)

اگر یک **ستون متنی** مقدار رشتهٔ خالی یا `null` داشته باشد، مقدار `true` برمی‌گرداند. استفاده از این تابع روی ستون‌های غیرمتنی خطا ایجاد می‌کند؛ برای آن‌ها از [isNull](#isnull) استفاده کنید.

Syntax: `isEmpty(column)`

Example: ‎`isEmpty([Feedback])`‎ برای ردیف‌هایی که مقدار `Feedback` خالی (`''`) یا `null` است، `true` برمی‌گرداند.

Related: [notEmpty](#notempty)، [isNull](#isnull)

### integer

> فقط در BigQuery، ClickHouse، MySQL، PostgreSQL، Amazon Redshift و Snowflake در دسترس است.

- رشته را به عدد صحیح تبدیل می‌کند (وقتی دادهٔ عددی به‌صورت String ذخیره شده).  
- عدد اعشاری را با گرد کردن به عدد صحیح تبدیل می‌کند.

Syntax: `integer(value)`

مثال رشته‌ای: ‎`integer("123")`‎ مقدار صحیح `123` را برمی‌گرداند؛ اگر رشته‌ای مثل `"123.45"` بدهید، خطا می‌گیرید.  
مثال اعشاری: ‎`integer(123.45)`‎ مقدار `123` را برمی‌گرداند.

Related: [round](#round)

### lTrim

فاصله‌های اضافی ابتدای رشته را حذف می‌کند.

Syntax: `lTrim(text)`

Example: اگر `Comment` برابر `" I'd prefer not to"` باشد، ‎`lTrim([Comment])`‎ مقدار `"I'd prefer not to"` را برمی‌گرداند.

Related: [trim](#trim)، [rTrim](#rtrim)

### length

تعداد کاراکترهای یک رشته را برمی‌گرداند.

Syntax: `length(text)`

Example: اگر `Comment` برابر `"wizard"` باشد، ‎`length([Comment])`‎ مقدار `6` را برمی‌گرداند.

### lower

تمام حروف رشته را به حروف کوچک تبدیل می‌کند.

Syntax: `lower(text)`

Example: اگر `Status` برابر `"QUIET"` باشد، ‎`lower([Status])`‎ مقدار `"quiet"` را برمی‌گرداند.

Related: [upper](#upper)

### notEmpty

اگر ستون متنی مقداری **غیر از رشتهٔ خالی** داشته باشد، `true` برمی‌گرداند. روی ستون‌های غیرمتنی نباید از این تابع استفاده کنید (از [notNull](#notnull) استفاده کنید).

Syntax: `notEmpty(column)`

Example: ‎`notEmpty([Feedback])`‎ برای ردیف‌هایی که `Feedback` حاوی متنی غیر از `''` است، مقدار `true` می‌دهد.

Related: [isEmpty](#isempty)، [isNull](#isnull)، [notNull](#notnull)

### path

بخش Path (مسیر) را از یک URL استخراج می‌کند.

Syntax: `path(url)`

Example: ‎`path("https://www.example.com/path/to/page.html?key1=value")`‎ مقدار `/path/to/page.html` را برمی‌گرداند.

Related: [domain](#domain)، [host](#host)، [subdomain](#subdomain)

### [regexExtract](./expressions/regexextract.md)

> ⚠️ در MongoDB، SQLite و SQL Server در دسترس نیست. در Druid فقط با درایور Druid‑JDBC کار می‌کند.

زیررشته‌هایی را که با یک عبارت باقاعده (Regex) مطابقت دارند، استخراج می‌کند.

Syntax: `regexExtract(text, regular_expression)`

Example: ‎`regexExtract([Address], "[0-9]+")`‎ اولین رشتهٔ عددی موجود در `Address` را بیرون می‌کشد.

پایگاه‌داده‌هایی که از `regexExtract` پشتیبانی نمی‌کنند: H2، SQL Server و SQLite.

Related: [contains](#contains)، [doesNotContain](#doesnotcontain)، [substring](#substring)

### replace

همهٔ وقوع‌های یک رشتهٔ جستجو را در متن ورودی با رشتهٔ جایگزین عوض می‌کند.

Syntax: `replace(text, find, replace)`

Example: ‎`replace([Title], "Enormous", "Gigantic")`‎ همهٔ `"Enormous"`‌ها را با `"Gigantic"` جایگزین می‌کند.

### splitPart

> در PostgreSQL، MySQL/MariaDB، BigQuery، Redshift، ClickHouse و Snowflake در دسترس است.

رشته را بر اساس یک جداکننده (Delimiter) می‌شکند و زیررشتهٔ n‌ام را برمی‌گرداند.

Syntax: `splitPart(text, delimiter, position)`

- `text`: ستون یا مقدار متنی که می‌خواهید بخشی از آن را برگردانید.  
- `delimiter`: الگوی جداکننده (مثلاً `" "` یا `", "`).  
- `position`: شمارهٔ زیررشته بعد از Split؛ اندیس از ۱ شروع می‌شود.

Example: ‎`splitPart([Date string], " ", 1)`‎ اگر `Date string` برابر `"2024-09-18 16:55:15.373733-07"` باشد، مقدار `"2024-09-18"` را برمی‌گرداند.  
مثال دیگر: ‎`splitPart("First name, Middle Name, Last name", ", ", 3)`‎ مقدار `"Last Name"` را برمی‌گرداند.

### rTrim

فاصله‌های انتهای رشته را حذف می‌کند.

Syntax: `rTrim(text)`

Example: اگر `Comment` برابر `"Fear is the mindkiller. "` باشد، ‎`rTrim([Comment])`‎ مقدار `"Fear is the mindkiller."` را برمی‌گرداند.

Related: [trim](#trim)، [lTrim](#ltrim)

### startsWith

اگر ابتدای متن با رشتهٔ مقایسه برابر باشد، `true` برمی‌گرداند. به‌صورت پیش‌فرض حساس به حروف است و می‌توانید `"case-insensitive"` را به‌عنوان پارامتر اختیاری بدهید.

Syntax:  
‎`startsWith(text, comparison)`‎ (حساس)  
‎`startsWith(text, comparison, "case-insensitive")`‎ (غیرحساس)

Example: ‎`startsWith([Course Name], "Computer Science")`‎ برای `"Computer Science 101: An introduction"` مقدار `true` می‌دهد، اما برای `"Computer science 201: Data structures"` در حالت حساس به حروف، `false` خواهد بود.

در عوض ‎`startsWith([Course Name], "Computer Science", "case-insensitive")`‎ برای هر دو مثال مقدار `true` برمی‌گرداند.

Related: [endsWith](#endswith)، [contains](#contains)، [doesNotContain](#doesnotcontain)

### subdomain

زیر دامنه را از URL استخراج می‌کند و `www` را نادیده می‌گیرد (در این صورت مقدار خالی برمی‌گرداند).

Syntax: `subdomain(url)`

Example: اگر `[Page URL]` برابر `https://status.metabase.com` باشد، ‎`subdomain([Page URL])`‎ مقدار `status` را برمی‌گرداند.

Related: [domain](#domain)، [host](#host)، [path](#path)

### [substring](./expressions/substring.md)

بخشی از متن را براساس موقعیت شروع و طول برمی‌گرداند.

Syntax: `substring(text, position, length)`

Example: ‎`substring([Title], 1, 10)`‎ اولین ۱۰ کاراکتر از رشتهٔ `Title` را برمی‌گرداند (اندیس از ۱ شروع می‌شود).

Related: [regexExtract](#regexextract)، [replace](#replace)

### text

> در درایور غیر JDBC برای Druid در دسترس نیست.

عدد یا تاریخ را به متن (String) تبدیل می‌کند؛ برای استفاده از فیلترهای متنی یا Join بر اساس مقایسهٔ متنی مفید است.

Syntax: `text(value)`

Example: ‎`text([Created At])`‎ مقدار datetime ستون `Created At` را به رشته‌ای مانند `"2024-03-17 16:55:15.373733-07"` تبدیل می‌کند.

### trim

فاصله‌های اضافی ابتدای و انتهای یک رشته را حذف می‌کند.

Syntax: `trim(text)`

Example: ‎`trim([Comment])`‎ فاصله‌های دو طرف متن `Comment` را پاک می‌کند.

### upper

همهٔ حروف متن را به حروف بزرگ تبدیل می‌کند.

Syntax: `upper(text)`

Example: اگر مقدار `Status` برابر `"hyper"` باشد، ‎`upper([Status])`‎ مقدار `"HYPER"` را برمی‌گرداند.

Related: [lower](#lower)

## Date functions

توابع تاریخ برای کار با مقادیر تاریخ/زمان، استخراج بخش‌هایی از آن‌ها یا ساخت مقادیر جدید استفاده می‌شوند.

### [convertTimezone](./expressions/converttimezone.md)

یک مقدار تاریخ یا Timestamp را از یک منطقهٔ زمانی به منطقهٔ زمانی دیگر تبدیل می‌کند.

Syntax: `convertTimezone(column, target, source)`

Example: ‎`convertTimezone("2022-12-28T12:00:00", "Canada/Pacific", "Canada/Eastern")`‎ مقدار `2022-12-28T09:00:00` را برمی‌گرداند که به‌صورت `December 28, 2022, 9:00 AM` نمایش داده می‌شود.

برای محدودیت‌های دیتابیس‌ها، بخش [database limitations](./expressions/converttimezone.md#limitations) را ببینید.

### [datetimeAdd](./expressions/datetimeadd.md)

یک واحد زمانی مشخص را به مقدار تاریخ/زمان اضافه می‌کند.

Syntax: `datetimeAdd(column, amount, unit)`

Example: ‎`datetimeAdd("2021-03-25", 1, "month")`‎ مقدار `2021-04-25` را برمی‌گرداند.

نکته: `amount` باید عدد صحیح باشد؛ مقادیر کسری (مثل ۰٫۵ سال) پشتیبانی نمی‌شوند.

Related: [between](#between)، [datetimeSubtract](#datetimesubtract)

### [datetimeDiff](./expressions/datetimediff.md)

اختلاف دو مقدار datetime را در یک واحد زمانی مشخص برمی‌گرداند.  
مثلاً ‎`datetimeDiff(d1, d2, "day")`‎ تعداد روزهای بین `d1` و `d2` را می‌دهد.

Syntax: `datetimeDiff(datetime1, datetime2, unit)`

Example: ‎`datetimeDiff("2022-02-01", "2022-03-01", "month")`‎ مقدار `1` را برمی‌گرداند.

برای محدودیت‌های دیتابیس‌ها، بخش [database limitations](./expressions/datetimediff.md#limitations) را ببینید.

### [datetimeSubtract](./expressions/datetimesubtract.md)

یک واحد زمانی مشخص را از مقدار تاریخ/زمان کم می‌کند.

Syntax: `datetimeSubtract(column, amount, unit)`

Example: ‎`datetimeSubtract("2021-03-25", 1, "month")`‎ مقدار `2021-02-25` را برمی‌گرداند.

نکته: `amount` باید عدد صحیح باشد و مقادیر اعشاری (مثل ۰٫۵ سال) پشتیبانی نمی‌شوند.

Related: [between](#between)، [datetimeAdd](#datetimeadd)

### day

روز ماه را از یک datetime استخراج می‌کند.

Syntax: `day([datetime column])`

Example: ‎`day("2021-03-25T12:52:37")`‎ مقدار `25` را برمی‌گرداند.

### dayName

نام محلی‌شدهٔ روز هفته (مثلاً Sunday) را بر اساس شمارهٔ روز (۱ تا ۷) برمی‌گرداند و به تنظیم [اولین روز هفته](../../configuring-metabase/localization.md#first-day-of-the-week) احترام می‌گذارد.

Syntax: `dayName(dayNumber)`

Example: ‎`dayName(1)`‎ در تنظیم پیش‌فرض مقدار `Sunday` را برمی‌گرداند.

Related: [quarterName](#quartername)، [monthName](#monthname)

### hour

ساعت را به‌صورت عددی بین ۰ تا ۲۳ از datetime استخراج می‌کند.

Syntax: `hour([datetime column])`

Example: ‎`hour("2021-03-25T12:52:37")`‎ مقدار `12` را برمی‌گرداند.

### interval

بررسی می‌کند مقدار تاریخ در یک ستون داخل یک بازهٔ **نسبی** قرار دارد یا نه.

Syntax: `interval(column, number, text)`

Example: ‎`interval([Created At], -1, "month")`‎ بازه‌ای یک‌ماهه قبل از تاریخ فعلی را مشخص می‌کند.

نکته: `number` باید عدد صحیح باشد؛ مقدار کسری مجاز نیست.

Related: [between](#between)

### minute

دقیقه را به‌صورت عددی بین ۰ تا ۵۹ از datetime استخراج می‌کند.

Syntax: `minute([datetime column])`

Example: ‎`minute("2021-03-25T12:52:37")`‎ مقدار `52` را برمی‌گرداند.

### month

شمارهٔ ماه (۱ تا ۱۲) را از datetime برمی‌گرداند.

Syntax: `month([datetime column])`

Example: ‎`month("2021-03-25T12:52:37")`‎ مقدار `3` (ماه مارس) را برمی‌گرداند.

### monthName

نام کوتاه محلی‌شدهٔ ماه را بر اساس شمارهٔ ماه برمی‌گرداند.

Syntax: `monthName([Birthday Month])`

Example: ‎`monthName(10)`‎ مقدار `Oct` را برمی‌گرداند.

Related: [dayName](#dayname)، [quarterName](#quartername)

### [now](./expressions/now.md)

تاریخ و زمان فعلی را بر اساس [Report timezone متابیس](../../configuring-metabase/localization.md#report-timezone) برمی‌گرداند.

Syntax: `now()`

### quarter

شمارهٔ فصل (Quarter) سال را از datetime به‌صورت عددی بین ۱ تا ۴ برمی‌گرداند.

Syntax: `quarter([datetime column])`

Example: ‎`quarter("2021-03-25T12:52:37")`‎ مقدار `1` (سه‌ماههٔ اول سال) را برمی‌گرداند.

### quarterName

بر اساس شمارهٔ فصل (۱ تا ۴)، رشته‌ای مانند `Q1` برمی‌گرداند.

Syntax: `quarterName([Fiscal Quarter])`

Example: ‎`quarterName(3)`‎ مقدار `Q3` را برمی‌گرداند.

Related: [dayName](#dayname)، [monthName](#monthname)

### relativeDateTime

یک Timestamp نسبی نسبت به «الان» تولید می‌کند.

Syntax: `relativeDateTime(number, text)`

- `number`: طول بازه؛ مقادیر منفی یعنی برگشت به گذشته. باید عدد صحیح باشد.  
- `text`: نوع بازه، مثل `"day"`، `"month"`، `"year"`.

توجه کنید که `relativeDateTime()` خروجی را تا واحد مورد نظر گرد می‌کند (مثلاً روز).

Example: فیلتر ‎`[Orders → Created At] < relativeDateTime(-30, "day")`‎ سفارش‌هایی را برمی‌گرداند که بیش از ۳۰ روز قبل از امروز ایجاد شده‌اند.

Related: [datetimeAdd](#datetimeadd)، [datetimeSubtract](#datetimesubtract)

### second

ثانیه را (۰ تا ۵۹) از datetime استخراج می‌کند.

Syntax: `second([datetime column])`

Example: ‎`second("2021-03-25T12:52:37")`‎ مقدار `37` را برمی‌گرداند.

### timeSpan

یک بازهٔ زمانی با طول مشخص می‌سازد.

Syntax: `timeSpan(number, text)`

- `number`: طول بازه (اعداد منفی یعنی رو به گذشته). باید عدد صحیح باشد.  
- `text`: نوع بازه، مانند `"day"`، `"month"`، `"year"`.

Example: ‎`[Orders → Created At] + timeSpan(7, "day")`‎ تاریخی را برمی‌گرداند که ۷ روز بعد از `Created At` است.

### today

تاریخ امروز را بدون بخش زمان برمی‌گرداند.

Syntax: `today()`

Example: اگر امروز ۴ مهٔ ۲۰۲۵ باشد، ‎`today()`‎ مقدار `2025-05-04` را برمی‌گرداند.

Related: [now](#now)

### [week](./expressions/week.md)

شمارهٔ هفتهٔ سال را از datetime استخراج می‌کند.

Syntax: `week(column, mode)`

Example: ‎`week("2021-03-25T12:52:37")`‎ ممکن است مقدار `12` را برگرداند.

- `column`: ستون تاریخ یا datetime  
- `mode` (اختیاری):
  - `ISO`: (پیش‌فرض) هفتهٔ ۱ دوشنبه قبل از اولین پنج‌شنبهٔ ژانویه است.  
  - `US`: هفتهٔ ۱ از ۱ ژانویه شروع می‌شود و بقیهٔ هفته‌ها از یکشنبه.  
  - `Instance`: هفتهٔ ۱ از ۱ ژانویه شروع می‌شود و بقیهٔ هفته‌ها از روزی که در تنظیمات بومی‌سازی متابیس تعریف کرده‌اید.

نکته: گروه‌بندی «Week of year» در Query builder ممکن است منطق متفاوتی برای هفتهٔ اول داشته باشد؛ برای جزئیات بیش‌تر صفحهٔ [Week of year](./expressions/week.md) را ببینید.

### weekday

شمارهٔ روز هفته (۱ تا ۷) را از datetime برمی‌گرداند.

Syntax: `weekday(column)`

- `column`: ستون datetime

Example:

```text
case(
  weekday([Created At]) = 1, "Sunday",
  weekday([Created At]) = 2, "Monday",
  weekday([Created At]) = 3, "Tuesday",
  weekday([Created At]) = 4, "Wednesday",
  weekday([Created At]) = 5, "Thursday",
  weekday([Created At]) = 6, "Friday",
  weekday([Created At]) = 7, "Saturday")
```

### year

سال را از datetime به‌صورت عدد صحیح برمی‌گرداند.

Syntax: `year([datetime column])`

Example: ‎`year("2021-03-25T12:52:37")`‎ مقدار `2021` را برمی‌گرداند.

## Type-casting functions

- [date](#date)
- [datetime](#datetime)
- [float](#float)
- [integer](#integer)
- [text](#text)

## Window functions

توابع Window فقط در بخش **Summarize** قابل استفاده‌اند و نمی‌توان از آن‌ها برای ساخت ستون سفارشی یا فیلتر سفارشی استفاده کرد.

### CumulativeCount

برای توضیحات کامل‌تر، صفحهٔ [توابع تجمعی](./expressions/cumulative.md) را ببینید.

مجموع تجمعی تعداد ردیف‌ها را روی Breakout محاسبه می‌کند.

Syntax: `CumulativeCount()`

### CumulativeSum

برای توضیحات کامل‌تر، صفحهٔ [توابع تجمعی](./expressions/cumulative.md) را ببینید.

مجموع تجمعی (Running total) یک ستون را روی Breakout محاسبه می‌کند.

Syntax: `CumulativeSum(column)`

Example: ‎`CumulativeSum([Subtotal])`‎

Related: [Sum](#sum)، [SumIf](#sumif)

### Offset

> ⚠️ تابع `Offset` در حال حاضر برای MySQL/MariaDB، ClickHouse، MongoDB و Druid در دسترس نیست.

برای جزئیات کامل، صفحهٔ [Offset](./expressions/offset.md) را ببینید.

مقدار یک عبارت را از سطری دیگر برمی‌گرداند. `Offset` فقط در گام **Summarize** Query builder قابل استفاده است و برای ساخت ستون سفارشی به‌کار نمی‌رود.

Syntax: `Offset(expression, rowOffset)`

- `expression`: عبارتی که می‌خواهید مقدارش را از سطر دیگری بخوانید.  
- `rowOffset`: اختلاف سطر نسبت به سطر فعلی؛ مثلاً `-1` یعنی سطر قبلی، `1` یعنی سطر بعدی.

Example: ‎`Offset(Sum([Total]), -1)`‎ مقدار `Sum([Total])` را از سطر قبلی برمی‌گرداند.

## Limitations

- عبارت‌های [Aggregation](#aggregations) فقط در بخش **Summarize** Query builder قابل استفاده هستند.

## Database limitations

محدودیت‌ها برای هر Aggregation و تابع در بخش‌های مربوطه ذکر شده‌اند؛ در این‌جا خلاصه‌ای از آن‌ها را می‌بینید:

**H2** (including Metabase Sample Database): `Median`, `Percentile`, `convertTimezone`, `regexExtract`, `datetime`, `float`, `splitPart`.

**Athena**: `convertTimezone`, `datetime`, `float`, `splitPart`.

**Databricks**: `convertTimezone`, `datetime`, `float`, `splitPart`.

**Druid**: `Median`, `Percentile`, `StandardDeviation`, `power`, `log`, `exp`, `sqrt`, `Offset`, `datetime`, `float`, `splitPart`. Function `regexExtract` and some [type casting functions](#type-casting-functions) are only available for the Druid-JDBC driver.

**MongoDB**: `Median`, `Percentile`, `power`, `log`, `exp`, `sqrt`, `Offset`, `regexExtract`, `datetime`, `float`, `splitPart`.

**MariaDB**: `Median`, `Percentile`, `Offset`.

**MySQL**: `Median`, `Percentile`, `Offset`.

**Oracle**: `date`, `datetime`, `float`, `splitPart`.

**Presto**: `convertTimezone`, `datetime`, `float`, `splitPart`. Only provides _approximate_ results for `Median` and `Percentile`.

**SparkSQL**: `convertTimezone`, `datetime`, `float`, `splitPart`.

**SQL Server**: `Median`, `Percentile`, `regexExtract`, `datetime`, `float`, `splitPart`.

**SQLite**: `exp`, `log`, `Median`, `Percentile`, `power`, `regexExtract`, `StandardDeviation`, `sqrt`, `Variance`, `datetime`, `float`, `splitPart`.

**Vertica**: `Median`, `Percentile`, `datetime`, `float`, `splitPart`.

اگر از یک درایور شخص‌ثالث برای دیتابیس استفاده می‌کنید، برای اطلاع از تغییرات و محدودیت‌ها به [Wiki مربوط به Driverها](https://github.com/metabase/metabase/wiki/What's-new-in-0.35.0-for-Metabase-driver-authors) مراجعه کنید.

برای آشنایی بیشتر با عبارت‌های سفارشی در Query builder، آموزش [Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions) را ببینید.

[expressions]: ./expressions.md
