---
title: "مرتب‌سازی میله‌ها در یک نمودار"
description: "یک ترفند ساده برای حفظ ترتیبی که می‌خواهید میله‌ها در یک نمودار ظاهر شوند."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-tricks-ordering-charts
  - /learn/sql-questions/sql-tricks-ordering-charts
toc:
  - id: "ordering-bars-in-a-chart"
    title: "مرتب‌سازی میله‌ها در یک نمودار"
    level: 1
    href: "#ordering-bars-in-a-chart"
  - id: "example-of-sorting-using-a-case-expression"
    title: "مثال مرتب‌سازی با استفاده از یک عبارت CASE"
    level: 2
    href: "#example-of-sorting-using-a-case-expression"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "تجسم داده"
    href: "../visualization.html"
---

# مرتب‌سازی میله‌ها در یک نمودار

یک ترفند ساده برای حفظ ترتیبی که می‌خواهید میله‌ها در یک نمودار ظاهر شوند.

مشکل اینجا: یک پرس‌وجو می‌نویسید، و می‌خواهید نتایج را روی یک نمودار میله یا funnel مرتب نگه دارید، اما مقادیری که پرس‌وجو برمی‌گرداند ترتیب را به هم می‌زند.

به عنوان مثال، بگویید می‌خواهید چیزی که خیلی خوب مرتب نمی‌شود را مرتب کنید، مثل اگر چهار مرحله مختلف با برچسب "First"، "Second"، "Third"، "Fourth" داشتید و می‌خواستید آن‌ها را به ترتیب معنایی مرتب کنید، بدون توجه به هر مقدار متناظری که دارند. متابیس (یا هر ابزاری که استفاده می‌کنید) آن مقادیر را به عنوان رشته مرتب می‌کند (یعنی، به ترتیب حروف الفبا مرتب می‌شوند، نه معنایی، که خیلی منطقی نیست: "First"، "Fourth"، "Second"، "Third").

در اینجا یک ترفند برای rearranging نمودار برای مشخص کردن ترتیبی که می‌خواهید.

1. پرس‌وجوی خود را هر طور که می‌خواهید بنویسید (طبیعتاً [بهترین روش‌ها](../../../sql/working-with-sql/sql-best-practices.html) را دنبال کنید).
2. با فرض اینکه می‌خواهید بر اساس مقادیر در یک ستون به نام `step` مرتب کنید، در انتهای پرس‌وجو، از یک عبارت `CASE` برای تعریف ترتیب مقادیر در ستون `step` استفاده کنید.

```sql
ORDER BY
    CASE
        WHEN step = 'First' THEN 1
        WHEN step = 'Second' THEN 2
        WHEN step = 'Third' THEN 3
        WHEN step = 'Fourth' THEN  4
    END
```

## مثال مرتب‌سازی با استفاده از یک عبارت CASE

![استفاده از یک عبارت CASE برای enforce کردن ترتیب میله‌ها روی یک نمودار.](../../../images/sql-case/case-expression.png)

در اینجا مثالی که از پایگاه داده نمونه شامل شده با متابیس استفاده می‌کند که می‌توانید خودتان امتحان کنید. بگویید می‌خواهیم تعداد سفارش‌ها در هر دسته محصول را ببینیم، اما نیاز داریم آن‌ها را مثل این مرتب کنیم: Widget، Gizmo، Gadget، Doohickey. در اینجا کد با statement case:

```sql
-- می‌خواهیم دو ستون برگردانیم، مرتب شده بر اساس products.category
SELECT products.category,
       Count(*)
FROM   orders
       LEFT JOIN products
              ON orders.product_id = products.id
GROUP  BY products.category
-- عبارت CASE یک مقدار جدید برای مرتب‌سازی assign می‌کند
ORDER  BY CASE
            WHEN products.category = 'Widget' THEN 1
            WHEN products.category = 'Gizmo' THEN 2
            WHEN products.category = 'Gadget' THEN 3
            WHEN products.category = 'Doohickey' THEN 4
          END
```

این ترفند به خصوص با [نمودارهای funnel](../../../../docs/v0.54/questions/visualizations/funnel.html) زمانی که نیاز به حفظ sequence دارید مفید است.

[
      
        
        

      
      
        
        

      
    ](../visualization/histograms.html)
