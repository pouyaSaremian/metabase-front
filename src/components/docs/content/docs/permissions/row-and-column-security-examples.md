---
title: مثال‌های امنیت ردیف و ستون
redirect_from:
  - /docs/latest/permissions/row-and-column-security-examples
---

# مثال‌های امنیت ردیف و ستون

{% include plans-blockquote.html feature="Row and column security" %}

[امنیت ردیف و ستون](./row-and-column-security.md) به شما امکان می‌دهد:

- [محدود کردن **ردیف‌ها**](./row-and-column-security.md#row-level-security-filter-by-a-column-in-the-table).
- [محدود کردن **ستون‌ها** (و ردیف‌ها)](./row-and-column-security.md#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table).

## تنظیمات برای همه مثال‌های زیر

مثال‌های زیر از Sample database همراه متابیس استفاده می‌کنند. در اینجا تنظیمات پایه است:

1. **مجوزها را برای گروه All users مسدود کنید**: Cmd/ctrl + k را بزنید تا command palette باز شود و برای "Permissions" جستجو کنید. در تب **Permissions** > **Data**. روی گروه **All users** کلیک کنید. برای Sample database، مجوز [View data](./data.md#view-data-permissions) All User را به "Blocked" تنظیم کنید.

2. **یک گروه به نام Customers ایجاد کنید**. Cmd/ctrl + k را بزنید و برای تنظیمات People جستجو کنید. [یک گروه به نام "Customers" ایجاد کنید].

3. **یک حساب کاربر برای Cloyd Beer ایجاد کنید**. ما [یک حساب کاربر ایجاد می‌کنیم](../people-and-groups/managing.md#creating-an-account) برای یک شخص تصادفی از جدول People در Sample Database خود. بیایید با `Cloyd Beer` از جدول `People` Sample database برویم.

4. **یک ویژگی کاربر به حساب اضافه کنید**: ما یک ویژگی کاربر به حساب Cloyd اضافه می‌کنیم. چون می‌خواهیم بتوانیم داده را بر اساس user ID فیلتر کنیم، ID Cloyd را از جدول `People` Sample database می‌گیریم و ID را به‌عنوان یک [ویژگی کاربر](../people-and-groups/managing.md#adding-a-user-attribute) اضافه می‌کنیم: `user_id: 2499` (`2499` ID آقای Beer در Sample database است).

![جزئیات کاربر](images/edit-user-details.png)

5. **آقای Beer را به گروه Customers اضافه کنید**: به [اضافه کردن افراد به گروه‌ها](../people-and-groups/managing.md#adding-people-to-groups) مراجعه کنید.

6. **یک کلکسیون ایجاد کنید که فقط توسط ادمین‌ها قابل مشاهده است.** آن را "Admin collection" بنامید. از این کلکسیون برای ذخیره سؤال‌های SQL که برای امن کردن جداول در مثال‌های 2 و 3 استفاده می‌کنیم استفاده می‌کنیم. به [مجوزهای کلکسیون](./collections.md) مراجعه کنید.

## فیلتر کردن ردیف‌ها بر اساس ویژگی‌های کاربر

در این مثال، جدول `Orders` خود را امن می‌کنیم تا هر کسی در گروه Customers ما فقط بتواند ردیف‌هایی را در جدول Orders ببیند که ستون `User ID` با ویژگی `user_id` شخص تطبیق دارد.

1. **به Admin settings > Permissions > data بروید**. روی گروه "Customers" کلیک کنید.

2. **View data را به Granular تنظیم کنید**. برای Sample Database، مجوز [View data](./data.md#view-data-permissions) گروه Customer را به "Granular" تنظیم کنید. تنظیم به "Granular" به ما امکان می‌دهد مجوزها را روی جداول جداگانه برای گروه Customer تنظیم کنیم.

3. **امنیت ردیف و ستون را به جداول Orders و People اضافه کنید**. اینجا، مجوزهای View data را روی جداول `Orders` و `People` به "Row and column security" تنظیم می‌کنیم. و چون می‌خواهیم افراد داده خود را self-serve کنند (با پرسیدن سؤال‌ها، ایجاد داشبوردها، و غیره)، همچنین مجوز [Create queries](../permissions/data.md#create-queries-permissions) آن‌ها را به "Query builder only" تنظیم می‌کنیم.

![تنظیم امنیت ردیف و ستون](./images/apply-row-and-column-security.png)

4. **بر اساس یک ستون برای هر جدول فیلتر کنید.** برای هر جدول، متابیس از ما می‌پرسد "چگونه می‌خواهید این جدول را برای کاربران در این گروه فیلتر کنید؟". در هر مورد، انتخاب پیش‌فرض را نگه می‌داریم: "Filter by a column on this table." برای جدول `Orders`، بر اساس ستون `User ID` فیلتر می‌کنیم، که آن را برابر با ویژگی `user_id` برای افراد در گروه Customers تنظیم می‌کنیم.

![انتخاب ویژگی کاربر](images/select-user-attribute.png)

برای جدول `People`، بر اساس ستون `ID` فیلتر می‌کنیم، که آن را برابر با همان ویژگی `user_id` تنظیم می‌کنیم.

5. **تغییرات خود را ذخیره کنید**. در غیر این صورت، همه بیهوده است.

### تست کردن امنیت ردیف

برای تست کردن نمای آقای Beer از جهان، یک پنجره مرورگر incognito/private جدید باز می‌کنیم و با استفاده از حساب آقای Beer وارد می‌شویم.

1. به‌عنوان Cloyd Beer وارد شوید.
2. روی **Browse** > **Databases** کلیک کنید.
3. روی جدول **Orders** کلیک کنید.
4. تأیید کنید که متابیس فقط سفارش‌هایی را که آقای Beer ثبت کرده است نمایش می‌دهد، یعنی سفارش‌های مرتبط با User ID `2499`.

اگر آقای Beer هر نمودار، داشبورد، یا حتی [اکتشافات X-ray خودکار](../exploration-and-organization/x-rays.md) که شامل داده امن‌شده `Orders` است را مشاهده کند، متابیس همچنین آن نتایج را فیلتر می‌کند تا فقط داده‌ای که آقای Beer مجاز به دیدن است را نمایش دهد. وقتی آقای Beer از query builder برای پرسیدن سؤال‌های جدید استفاده می‌کند، نتایج او به داده فیلترشده محدود می‌شود.

## استفاده از یک سؤال برای تعریف یک نمای سفارشی از یک جدول

می‌توانید امنیت ردیف و ستون را طوری تنظیم کنید که وقتی کسی در آن گروه جدول را کوئری می‌کند، در پشت صحنه متابیس در عوض از سؤالی که ایجاد کردید به‌عنوان منبع داده برای کوئری آن‌ها استفاده کند.

می‌توانید:

- [ستون‌ها را فیلتر کنید](#custom-example-1-filtering-columns)
- [ردیف‌ها و ستون‌ها را فیلتر کنید](#custom-example-2-filtering-rows-and-columns)

## مثال سفارشی 1: فیلتر کردن ستون‌ها

در این مثال، یک جدول به نام `People` داریم که می‌خواهیم آن را کاهش دهیم تا آقای Beer و دیگر Customers بتوانند هر ردیف را مشاهده کنند، اما فقط برخی ستون‌ها.

![جدول People اصلی](images/advanced-example-1-people-table.png)

1. **یک کوئری ایجاد کنید که ستون‌ها را در جدول People محدود می‌کند.** با استفاده از ویرایشگر native/SQL، یک کوئری می‌نویسیم که فقط ستون‌هایی را در آن جدول که _می‌خواهیم_ گروه Customers ما ببیند برمی‌گرداند، مثل این:

```sql
SELECT
  id AS "ID",
  name AS "Name",
  created_at AS "Created At",
  state AS "State"
FROM
  People
```

در اینجا نتایج هستند:

![سؤال فیلتر کردن](images/filtering-question.png)

این سؤال را "Filtered people table" می‌نامیم. آن را در "Admins collection" که در تنظیمات ایجاد کردید (یا هر کلکسیونی که فقط ادمین‌ها به آن دسترسی دارند) ذخیره کنید.

2. **از یک سؤال SQL برای ایجاد یک نمای سفارشی برای این جدول استفاده کنید**: به بخش Permissions می‌رویم و امنیت ردیف و ستون را به این جدول برای این گروه اعطا می‌کنیم. این بار گزینه دوم را انتخاب می‌کنیم، "Use a saved question to create a custom view for this table"، و سؤالی که تازه ایجاد کردیم ("Filtered people table") را انتخاب می‌کنیم، مثل این:

![استفاده از یک سؤال برای ایجاد یک نمای سفارشی](images/question-modal.png)

3. **تغییرات را ذخیره کنید**، مبادا زحمت ما بیهوده باشد.

4. **تأیید کنید که همه چیز به‌درستی کار می‌کند**. می‌توانیم به‌عنوان آقای Beer وارد شویم، و وقتی جدول `People` را باز می‌کنیم، باید ببینیم که آقای Beer در عوض می‌تواند نتایج سؤال فیلتر کردن را ببیند.

وقتی آقای Beer یک نمودار که از داده این جدول امن‌شده استفاده می‌کند را مشاهده می‌کند، متابیس همچنین فیلتر کردن را اعمال می‌کند. **اگر نمودار از هر ستونی که توسط جدول امن‌شده حذف شده است استفاده کند، نمودار برای آقای Beer بارگذاری نمی‌شود.**

## مثال سفارشی 2: فیلتر کردن ردیف‌ها و ستون‌ها

اگر می‌خواهیم مشخص کنیم کدام ستون‌ها _و_ ردیف‌ها را افراد می‌توانند مشاهده کنند، می‌توانیم امنیت ردیف و ستون را به یک جدول بر اساس یک سؤال SQL با یک متغیر اعمال کنیم، و آن متغیر را با یک ویژگی کاربر مرتبط کنیم. برای انجام این کار، به گروه Customers خود یک نمای سفارشی از جدول `Orders` می‌دهیم، اما فقط به هر شخص اجازه می‌دهیم ردیف‌هایی را بر اساس ویژگی کاربر `user_id` خود ببیند.

1. **یک سؤال SQL با یک متغیر ایجاد کنید**. یک کوئری ایجاد می‌کنیم که فقط برخی از ستون‌ها را از جدول `Orders` انتخاب می‌کند، و سپس یک بند `WHERE` با یک متغیر اضافه می‌کنیم که می‌توانیم آن را با ویژگی کاربر `user_id` Cloyd Beer مرتبط کنیم.

در اینجا کد است:

```sql
{% raw %}
SELECT
  id,
  created_at,
  product_id,
  quantity,
  total,
  user_id
FROM
  orders
WHERE
  user_id = {{user_id}}
{% endraw %}
```

آن را در "Admins collection" که در تنظیمات ایجاد کردید (یا هر کلکسیونی که فقط ادمین‌ها به آن دسترسی دارند) ذخیره کنید.

2. **نمای سفارشی را ایجاد کنید**: به تب **Permissions** برگردید. گروه Customer آقای Beer را انتخاب کنید، و دسترسی **View data** را برای جدول `Orders` به **Row and column security** تنظیم کنید. **Use a saved question to create a custom view for this table** را انتخاب کنید. مودال امنیت ردیف و ستون را باز کنید و گزینه دوم را انتخاب کنید. سؤال فیلتر کردن را انتخاب کنید، بخش اضافی را می‌بینیم که به ما امکان می‌دهد متغیری که در سؤال خود تعریف کردیم را با یک ویژگی کاربر نگاشت کنیم:

3. **تغییرات خود را ذخیره کنید**. یا همه امید را رها کنید.

4. **تأیید کنید که مجوزها کار می‌کنند**: حالا، وقتی به‌عنوان آقای Beer وارد می‌شویم و به جدول `Orders` نگاه می‌کنیم، آقای Beer فقط ستون‌هایی را می‌بیند که در سؤال فیلتر کردن شامل کردیم، و ردیف‌ها طبق متغیر در بند `WHERE` سؤال فیلتر می‌شوند:

![نتایج](images/advanced-example-2-results.png)

## مطالعهٔ بیشتر

- [تنظیم مجوزهای سطح ردیف](https://www.metabase.com/learn/metabase-basics/administration/permissions/data-sandboxing-row-permissions)
- [نمای سفارشی: محدود کردن دسترسی به ستون‌ها](https://www.metabase.com/learn/metabase-basics/administration/permissions/data-sandboxing-column-permissions)
- [پیکربندی مجوزها برای جاسازی](../permissions/embedding.md)
