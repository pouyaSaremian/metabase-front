---
title: "می‌خواهید زود بازنشسته شوید؟ پول بیشتری پس‌انداز کنید"
description: "نرخ‌های پس‌انداز بالای متوسط ژاپن و کره زمان کوتاه‌تری برای رسیدن به استقلال مالی را هدایت می‌کند."
url: "https://www.metabase.com/blog/fire-dashboard"
canonical: "fire-dashboard.html"
image: "https://www.metabase.com/images/posts/fire-calculator/hero.png"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "می‌خواهید زود بازنشسته شوید؟ پول بیشتری پس‌انداز کنید"
ogDescription: "نرخ‌های پس‌انداز بالای متوسط ژاپن و کره زمان کوتاه‌تری برای رسیدن به استقلال مالی را هدایت می‌کند."
ogImage: "https://www.metabase.com/images/posts/fire-calculator/hero.png"
ogUrl: "https://www.metabase.com/blog/fire-dashboard"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "می‌خواهید زود بازنشسته شوید؟ پول بیشتری پس‌انداز کنید"
twitterDescription: "نرخ‌های پس‌انداز بالای متوسط ژاپن و کره زمان کوتاه‌تری برای رسیدن به استقلال مالی را هدایت می‌کند."
twitterImage: "https://www.metabase.com/images/posts/fire-calculator/hero.png"
author: "The Metabase Team"
datePublished: "Aug 30, 2022"
category: "Data explorations"
---

جنبش FIRE (استقلال مالی بازنشستگی زودهنگام) یک روند در حال رشد در سال‌های اخیر بوده است. در حالی که ماشین‌حساب‌های FIRE زیادی برای کمک به شما در فهمیدن اینکه چقدر طول می‌کشد تا زود بازنشسته شوید وجود دارد، ما کنجکاو بودیم ببینیم جغرافیا چگونه بر آن محاسبات تأثیر می‌گذارد. در مورد کاوش ما در زیر بخوانید (یا مستقیماً به [ماشین‌حساب FIRE](https://metabase-public.metabaseapp.com/public/dashboard/ec25ca01-00bf-4057-86a5-5faae03beb9d) بروید).

ما توانستیم مجموعه داده‌های باز در اینترنت را جمع‌آوری کنیم و آنها را به متابیس کشیدیم تا به ما در پیدا کردن پاسخ‌ها کمک کنند.

[سال‌ها تا بازنشستگی بر اساس کشور](https://metabase-public.metabaseapp.com/public/question/753a2403-7e12-4e0c-904b-fcecd9dd4278) — محور y تعداد سال‌هایی را نشان می‌دهد که شهروندان متوسط این کشورها می‌توانند به FIRE برسند. اندازه حباب نشان‌دهنده ارزش خالص پیش‌بینی شده به دلار است.

## مشاهدات

- طبق آخرین [آمار نرخ پس‌انداز شخصی](https://tradingeconomics.com/country-list/personal-savings)، مردم در کشورهای آسیای شرقی مانند ژاپن و کره جنوبی می‌توانند سریع‌ترین به FIRE برسند (۱۴ سال برای ژاپن، و ۲۵ سال برای کره جنوبی). هر دو ملت بالاترین نرخ پس‌انداز را دارند.
- علیرغم داشتن یکی از بالاترین درآمدهای متوسط در جهان، آمریکای شمالی طولانی‌ترین زمان را برای رسیدن به FIRE خواهد داشت (۵۵ سال برای کانادا و ۶۵ سال برای ایالات متحده).
- در حالی که برخی ملت‌ها برنامه‌های بازنشستگی بهتری برای شهروندان خود دارند (به خصوص در اروپای شمالی و استرالیا)، ما نتوانستیم هیچ همبستگی بین سال‌ها تا بازنشستگی در مقابل کیفیت برنامه‌های بازنشستگی پیدا کنیم (مقادیر بالاتر شاخص بازنشستگی بهتر است). ما فرض کرده بودیم که مردم در کشورهایی با برنامه‌های بازنشستگی بهتر نرخ‌های پس‌انداز پایین‌تری خواهند داشت (تفکر اینجا این است که، چون می‌توانستند به بازنشستگی خود تکیه کنند، می‌توانستند نرخ هزینه بالاتری را تحمل کنند)، اما داده این فرض را پشتیبانی نکرد.

[سال‌ها تا بازنشستگی در مقابل مقدار شاخص بازنشستگی](https://metabase-public.metabaseapp.com/public/question/847b7eb0-d55b-497b-a3af-7323b7d0e66a). هیچ همبستگی بین **سال‌ها تا بازنشستگی** و **مقدار شاخص بازنشستگی** وجود نداشت.

## محاسبه کنید چقدر طول می‌کشد تا زود بازنشسته شوید

![چه زمانی می‌توانم بازنشسته شوم؟](../images/posts/fire-calculator/fire-calculator.gif)

محاسبات بالا بر اساس میانگین ملی است. برای دستیابی به FIRE سریع‌تر، باید بهتر از میانگین هدف بگیرید. این [ماشین‌حساب](https://metabase-public.metabaseapp.com/public/dashboard/ec25ca01-00bf-4057-86a5-5faae03beb9d?%2524_annual_income=45000&%2524_annual_expenses=42700&%2524_current_portfolio_value=0&annual_roi=0.05) می‌تواند به شما کمک کند تخمین بزنید چقدر طول می‌کشد تا به FIRE برسید.

### در اینجا SQL که استفاده کردیم آمده است

```
WITH savings_rate_income_by_country
     AS (SELECT s.country
                AS
                country
                   ,
                s.savings_rate
                   AS savings_rate,
                i.average_monthly_net_salary_after_tax_
                AS
                   net_monthly_salary,
                i.average_monthly_net_salary_after_tax_ * 12
                AS
                   annual_income,
                i.average_monthly_net_salary_after_tax_ * 12 * ( 1 -
                s.savings_rate )
                AS
                annual_expense
         FROM   random_datasets.income_savings_rate_oecd_personal_savings_rate s
                INNER JOIN
                random_datasets.income_savings_rate_numbeo_monthly_salary
                i
                        ON s.country = i.country_name),
     years_elapsed
     AS (SELECT country,
                savings_rate,
                annual_income,
                annual_expense,
                Generate_series(1, 100)        AS year,
                annual_income - annual_expense AS annual_contribution
         FROM   savings_rate_income_by_country),
     compound_interest
     AS (SELECT a.*,
                b.annual_contribution * Power(( 1 + 0.05 ), a.year - b.year + 1)
                -
                b.annual_contribution AS compound_interest
         FROM   years_elapsed a
                LEFT JOIN years_elapsed b
                       ON a.year >= b.year
                          AND a.country = b.country
         ORDER  BY a.year),
     yoy_networth_table
     AS (SELECT country,
                savings_rate,
                annual_income,
                annual_expense,
                year,
                annual_contribution,
                Sum(annual_contribution) AS total_contribution,
                Sum(compound_interest)   AS total_interest,
                Sum(annual_contribution)
                + Sum(compound_interest) AS networth
         FROM   compound_interest
         GROUP  BY country,
                   savings_rate,
                   annual_income,
                   annual_expense,
                   year,
                   annual_contribution
         ORDER  BY year)
SELECT c.region                      AS "Region",
       y.country                     AS "Country",
       p.overall_pension_index_value AS "Pension Index Value",
       y.savings_rate                AS "Savings Rate",
       y.annual_income               AS "Annual Income",
       y.annual_expense              AS "Annual Expenses",
       Min(y.year)                   AS "Years to Retire",
       Min(y.networth)               AS "Projected Net Worth"
FROM   yoy_networth_table y
       LEFT JOIN random_datasets.countries_with_regional_codes c
              ON c.NAME = y.country
       LEFT JOIN random_datasets.income_savings_rate_global_pension_index_2021 p
              ON p.country = y.country
WHERE  y.networth * 0.04 >= y.annual_expense
GROUP  BY c.region,
          y.country,
          p.overall_pension_index_value,
          y.savings_rate,
          y.annual_income,
          y.annual_expense

```

جدول [سال‌ها تا بازنشستگی بر اساس کشور](https://metabase-public.metabaseapp.com/public/question/ace63ba1-74f8-4e99-9eed-a3314435f84e) را مشاهده کنید.

## منابع داده

- [نرخ پس‌انداز شخصی](https://tradingeconomics.com/country-list/personal-savings)
- [میانگین حقوق خالص](https://www.numbeo.com/cost-of-living/)
- [شاخص بازنشستگی جهانی ۲۰۲۱](https://www.mercer.com/our-thinking/global-pension-index-2021.html)

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [داستان پشت تولیدکننده مجموعه داده AI ما](story-behind-ai-dataset-generator.html)

انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده مجموعه داده AI منبع باز ما را کاوش کنید.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-2 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [داستان پشت تولیدکننده مجموعه داده AI ما](story-behind-ai-dataset-generator.html)

انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده مجموعه داده AI منبع باز ما را کاوش کنید.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-3 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [هزینه‌های پنهان پشته داده](the-hidden-cost-of-data-stacks.html)

یک لیست ناقص از هزینه‌های کمتر آشکار مرتبط با نگهداری یک پشته داده، و برخی چیزهایی که می‌توانید انجام دهید تا آن هزینه‌ها را تحت کنترل نگه دارید.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

---

<!-- blog-related-post-4 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [هزینه‌های پنهان پشته داده](the-hidden-cost-of-data-stacks.html)

یک لیست ناقص از هزینه‌های کمتر آشکار مرتبط با نگهداری یک پشته داده، و برخی چیزهایی که می‌توانید انجام دهید تا آن هزینه‌ها را تحت کنترل نگه دارید.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

<!-- /blog-related-posts -->
