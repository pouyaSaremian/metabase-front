---
title: "آموزش: تنظیم یک workflow مبتنی بر git"
description: "مدل‌ها، سؤال‌ها، و داشبوردها را در یک متابیس staging ایجاد کنید، تغییرات خود را به یک repository commit کنید، و آن تغییرات را به متابیس production خود push کنید."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/git-based-workflow
  - /learn/administration/git-based-workflow
toc:
  - id: "tutorial-setting-up-a-git-based-workflow"
    title: "آموزش: تنظیم یک workflow مبتنی بر git"
    level: 1
    href: "#tutorial-setting-up-a-git-based-workflow"
  - id: "first-set-up-your-staging-metabase"
    title: "ابتدا، متابیس staging خود را تنظیم کنید"
    level: 2
    href: "#first-set-up-your-staging-metabase"
  - id: "create-your-metabase-application-database-for-your-staging-metabase"
    title: "پایگاه داده برنامه متابیس خود را برای متابیس staging خود ایجاد کنید"
    level: 3
    href: "#create-your-metabase-application-database-for-your-staging-metabase"
  - id: "your-staging-and-production-databases-must-share-the-same-display-name-database-engine-and-schema"
    title: "پایگاه‌های داده staging و production شما باید نام نمایش، موتور پایگاه داده، و schema یکسان داشته باشند"
    level: 3
    href: "#your-staging-and-production-databases-must-share-the-same-display-name-database-engine-and-schema"
  - id: "define-which-collections-to-check-into-version-control"
    title: "تعریف کدام مجموعه‌ها را در کنترل نسخه check in کنید"
    level: 3
    href: "#define-which-collections-to-check-into-version-control"
  - id: "things-to-avoid-in-your-staging-environment"
    title: "چیزهایی که باید در محیط staging خود از آن‌ها اجتناب کنید"
    level: 3
    href: "#things-to-avoid-in-your-staging-environment"
  - id: "set-up-your-git-repo-and-ci-your-workflows"
    title: "repository Git و CI خود را تنظیم کنید (workflowهای شما)"
    level: 3
    href: "#set-up-your-git-repo-and-ci-your-workflows"
  - id: "there-are-two-basic-staging-to-production-setups"
    title: "دو راه‌اندازی پایه staging-to-production وجود دارد"
    level: 2
    href: "#there-are-two-basic-staging-to-production-setups"
  - id: "when-to-use-the-setup-with-sync-on"
    title: "چه زمانی از راه‌اندازی با sync ON استفاده کنیم"
    level: 3
    href: "#when-to-use-the-setup-with-sync-on"
  - id: "when-to-use-the-setup-with-sync-off"
    title: "چه زمانی از راه‌اندازی با sync OFF استفاده کنیم"
    level: 3
    href: "#when-to-use-the-setup-with-sync-off"
  - id: "metabase-staging-to-production-setup-with-sync-on"
    title: "راه‌اندازی متابیس staging-to-production با sync ON"
    level: 2
    href: "#metabase-staging-to-production-setup-with-sync-on"
  - id: "develop-your-content-in-your-staging-metabase"
    title: "توسعه محتوای خود در متابیس staging خود"
    level: 3
    href: "#develop-your-content-in-your-staging-metabase"
  - id: "serialize-the-changes-you-made-in-your-staging-metabase"
    title: "serialize کردن تغییراتی که در متابیس staging خود ایجاد کردید"
    level: 3
    href: "#serialize-the-changes-you-made-in-your-staging-metabase"
  - id: "create-a-github-action-workflow-yaml-file"
    title: "ایجاد یک فایل YAML workflow GitHub Action"
    level: 3
    href: "#create-a-github-action-workflow-yaml-file"
  - id: "metabase-staging-to-production-setup-with-sync-off"
    title: "راه‌اندازی متابیس staging-to-production با sync OFF"
    level: 2
    href: "#metabase-staging-to-production-setup-with-sync-off"
  - id: "make-sure-you-ve-turned-off-sync"
    title: "اطمینان حاصل کنید که sync را خاموش کرده‌اید"
    level: 3
    href: "#make-sure-you-ve-turned-off-sync"
  - id: "set-up-multiple-staging-environments-with-a-config-file"
    title: "تنظیم چندین محیط staging با یک فایل config"
    level: 3
    href: "#set-up-multiple-staging-environments-with-a-config-file"
  - id: "export-the-table-metadata-from-your-production-metabase"
    title: "export کردن فراداده جدول از متابیس production خود"
    level: 3
    href: "#export-the-table-metadata-from-your-production-metabase"
  - id: "import-content-from-your-production-metabase-to-your-staging-metabase-s"
    title: "import کردن محتوا از متابیس production خود به متابیس staging خود"
    level: 3
    href: "#import-content-from-your-production-metabase-to-your-staging-metabase-s"
  - id: "develop-your-content-in-your-staging-metabase-s"
    title: "توسعه محتوای خود در متابیس staging خود"
    level: 3
    href: "#develop-your-content-in-your-staging-metabase-s"
  - id: "export-the-changes-you-made-in-your-staging-metabase-to-your-production-metabase"
    title: "export کردن تغییراتی که در متابیس staging خود ایجاد کردید به متابیس production خود"
    level: 3
    href: "#export-the-changes-you-made-in-your-staging-metabase-to-your-production-metabase"
  - id: "example-workflow-yaml-files-for-sync-off-setup"
    title: "فایل‌های YAML workflow نمونه برای راه‌اندازی sync off"
    level: 3
    href: "#example-workflow-yaml-files-for-sync-off-setup"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مدیریت و عملیات"
    href: "index.html"
---

# آموزش: تنظیم یک workflow مبتنی بر git

مدل‌ها، سؤال‌ها، و داشبوردها را در یک متابیس staging ایجاد کنید، تغییرات خود را به یک repository commit کنید، و آن تغییرات را به متابیس production خود push کنید.

> Serialization فقط در
      [Pro](../../../../product/pro.html) و
      [Enterprise](../../../../product/enterprise.html)
      (هم self-hosted و هم در متابیس کلود)
      در دسترس است.

این مقاله نحوه استفاده از ویژگی [serialization](../../../../docs/latest/installation-and-operation/serialization.html) متابیس برای نگه داشتن متابیس‌های staging و production در sync را پوشش می‌دهد.

با این راه‌اندازی، می‌توانید سؤال‌ها، مدل‌ها، و داشبوردهای خود را در متابیس staging خود fine-tune کنید. سپس، وقتی از کار خود راضی شدید، می‌توانید آن تغییرات را به یک repo git commit کنید، و آن تغییرات را به متابیس production خود push کنید.

## ابتدا، متابیس staging خود را تنظیم کنید

> این راه‌اندازی فقط برای متابیس‌های self-hosted اعمال می‌شود، هم برای staging و هم production.

فرض می‌کنیم از قبل یک متابیس production در play دارید، و می‌خواهید متابیس دیگری برای stage کردن توسعه سؤال‌ها، مدل‌ها، و داشبوردها تنظیم کنید.

متابیس staging خود را روی یک سرور تنظیم کنید، یا روی سرورهای on-prem خود، یا با ارائه‌دهنده کلود ترجیحی خود. متابیس staging باید همان نسخه متابیس production شما باشد. هر بار که متابیس production خود را upgrade می‌کنید، به یاد داشته باشید متابیس staging خود را نیز upgrade کنید.

### پایگاه داده برنامه متابیس خود را برای متابیس staging خود ایجاد کنید

همچنین نیاز دارید یک [پایگاه داده برنامه](../../../../docs/latest/installation-and-operation/configuring-application-database.html) جداگانه برای هر متابیس اضافی که می‌خواهید برای staging استفاده کنید تنظیم کنید. از PostgreSQL برای ذخیره همه مدل‌ها، سؤال‌ها، مجموعه‌ها، و غیره استفاده کنید. (یا MySQL، اگر متابیس production شما از آن استفاده می‌کند).

### پایگاه‌های داده staging و production شما باید نام نمایش، موتور پایگاه داده، و schema یکسان داشته باشند

برای تکرار، پایگاه‌های داده staging و production شما باید:

- همان نوع/موتور باشند. به عنوان مثال، اگر یکی Postgres است، دیگری نیز باید Postgres باشد. همان نسخه ایده‌آل است، اما معمولاً مهم نیست.
- همان schema را داشته باشند.
- همان نام نمایش در متابیس داشته باشند (فیلد **نام نمایش** هنگام پر کردن جزئیات اتصال پایگاه داده، نه نام پایگاه داده خود).

وقتی اطلاعات اتصال خود را وارد کردید، نیاز دارید تا متابیس sync را تمام کند صبر کنید.

### تعریف کدام مجموعه‌ها را در کنترل نسخه check in کنید

می‌توانید همه مجموعه‌ها را serialize کنید، یا (ترجیحاً) زیرمجموعه‌ای از آن مجموعه‌ها را مشخص کنید. ایده این است که deliberate باشید درباره کدام مجموعه‌ها شامل می‌کنید. می‌تواند مفید باشد مجموعه‌هایی برای آزمایش در متابیس staging خود داشته باشید که می‌توانید از production حذف کنید.

اگر فقط چند مجموعه مشخص می‌کنید، توصیه می‌کنیم آن‌ها را به عنوان [مجموعه‌های رسمی](../../../../docs/latest/exploration-and-organization/collections.html#official-collections) علامت بزنید.

### چیزهایی که باید در محیط staging خود از آن‌ها اجتناب کنید

- از اشتراک‌های داشبورد و هشدارها اجتناب کنید. این آیتم‌ها خاص به حساب‌های مردم هستند، و بنابراین متابیس آن‌ها را از serialization حذف می‌کند.
- از [cache کردن مدل](../../../../docs/latest/data-modeling/model-persistence.html) در متابیس staging خود اجتناب کنید، چون cache کردن مدل با متابیس production شما conflict خواهد کرد.

### repository Git و CI خود را تنظیم کنید (workflowهای شما)

وقتی متابیس‌های staging و production خود را راه‌اندازی کردید، نیاز دارید یک repo برای ذخیره محتوای serialize شده متابیس خود ایجاد کنید، که متابیس به عنوان مجموعه‌ای از فایل‌های YAML export می‌کند.

برای این مقاله، از GitHub Actions برای خودکار کردن pull و push آن داده serialize شده بین متابیس‌های staging و production استفاده خواهیم کرد. ابزار CI شما (در این مورد GitHub Actions) باید دسترسی read/write به این پایگاه داده برنامه داشته باشد.

همچنین یک یا چند فایل YAML workflow GitHub Actions برای خودکار کردن فرآیند serialization اضافه خواهید کرد. به طور اختیاری، می‌توانید محافظت شاخه را برای نیاز به تأیید PR قبل از merge به شاخه `main` خود روشن کنید.

## دو راه‌اندازی پایه staging-to-production وجود دارد

راه‌اندازی‌ها:

- متابیس staging با sync روشن
- متابیس‌های staging با sync خاموش

به طور پیش‌فرض، متابیس برخی پرس‌وجوها را در پس‌زمینه اجرا می‌کند تا فراداده را به شما ارائه دهد:

- **Syncs** schemaهای به‌روزرسانی شده را دریافت می‌کنند.
- **Scans** نمونه‌هایی از مقادیر ستون می‌گیرند تا منوهای dropdown فیلتر را populate کنند.
- **Fingerprinting** نمونه‌های اضافی از مقادیر ستون می‌گیرد تا به رفتار هوشمند کمک کند، مثل auto-binning برای نمودارهای میله‌ای.

اگر این پرس‌وجوهای زمان‌بندی شده فشار زیادی روی پایگاه داده شما وارد کنند (معمولاً فقط اگر data warehouse شما عظیم باشد)، می‌توانید آن‌ها را خاموش کنید. برای بیشتر درباره نحوه به‌روزرسانی فراداده توسط متابیس، [مستندات](../../../../docs/latest/databases/sync-scan.html) ما را بررسی کنید.

### چه زمانی از راه‌اندازی با sync ON استفاده کنیم

- یک متابیس staging واحد دارید.
- منبع داده متصل شما کوچک است.
- جریان داده یک‌طرفه است، از توسعه به production (یعنی، نیاز به pull کردن فراداده یا محتوا از production ندارید).

### چه زمانی از راه‌اندازی با sync OFF استفاده کنیم

- چندین متابیس توسعه دارید (یا می‌خواهید داشته باشید).
- منبع داده زیربنایی شما بزرگ است.
- جریان داده دوطرفه است: یک یا چند متابیس staging push و pull به یک متابیس production می‌کنند.

## راه‌اندازی متابیس staging-to-production با sync ON

در این راه‌اندازی، متابیس staging sync روشن دارد. این راه‌اندازی یک‌طرفه است.

- تغییرات را در یک متابیس staging ایجاد کنید.
- آن تغییرات را در فرمت serialize شده (فایل‌های YAML) export کنید.
- آن فایل‌های YAML را به یک repository commit کنید.
- آن تغییرات را به متابیس production خود import کنید.

![یک متابیس staging (با sync روشن) برای توسعه محتوا استفاده می‌شود، که می‌توانید export کنید، به یک repo commit کنید، سپس به متابیس production خود import کنید.](../../../images/git-workflow/flowchart-sync-on.png)

### توسعه محتوای خود در متابیس staging خود

محتوای خود را ایجاد کنید: مدل‌ها، سؤال‌ها، داشبوردها، مجموعه‌ها، و غیره در متابیس staging خود.

### serialize کردن تغییراتی که در متابیس staging خود ایجاد کردید

وقتی از تغییرات خود راضی شدید، تغییرات خود را serialize می‌کنید تا بتوانید آن‌ها را به repository خود commit کنید.

برای serialize کردن تغییرات خود، دستور `export` متابیس را اجرا خواهید کرد.

به عنوان مثال، اگر فقط مجموعه‌های 2، 3، و 4 را export می‌کنید، می‌توانید اجرا کنید:

```
java -jar metabase.jar export repo_path --collection 2,3,4 --no-data-model --no-settings

```

به طور پیش‌فرض، متابیس مجموعه‌های nested را حذف می‌کند. برای شامل کردن مجموعه‌های nested، نیاز دارید IDهای آن‌ها را نیز مشخص کنید، درست مثل هر مجموعه top-level.

متابیس متابیس staging شما را با تغییراتی که ایجاد کرده‌اید serialize می‌کند. همچنین ممکن است بخواهید این دستور را در یک اسکریپت bash که به repo خود check in می‌کنید قرار دهید، تا نیازی به تایپ کردن آن هر بار نباشد، و بتوانید آن را همانطور که توسعه می‌دهید tweak کنید.

آن تغییرات را به شاخه working خود commit کنید. وقتی شاخه working خود را به شاخه main خود merge می‌کنید، workflow GitHub اجرا می‌شود و آن تغییرات را به متابیس production خود import می‌کند.

### ایجاد یک فایل YAML workflow GitHub Action

می‌توانید repo خود را پیکربندی کنید تا وقتی تغییرات serialize شده خود را به شاخه main خود merge می‌کنید، workflow آن تغییرات serialize شده را به متابیس production خود import کند.

در اینجا یک [workflow نمونه با sync ON](https://github.com/metabase/git-workflow-sync)، یا دنبال کردن اینجا.

## راه‌اندازی متابیس staging-to-production با sync OFF

در این راه‌اندازی، یک یا چند متابیس staging sync را خاموش کرده‌اند. این راه‌اندازی دوطرفه است:

- داده production خود را export کنید تا همه متابیس‌های staging خود را به‌روزرسانی کنید.
- آن تغییرات فایل‌های YAML serialize شده را به یک repository commit کنید.
- آن تغییرات را به یک یا چند متابیس staging import کنید.
- محتوای جدید را در آن متابیس‌های staging توسعه دهید: داشبوردها، مدل‌ها، و غیره.
- آن تغییرات را از متابیس staging export کنید و فایل‌های YAML export شده را commit کنید.
- آن محتوا را به production import کنید.
- اگر چندین متابیس اجرا می‌کنید، نیاز دارید آن‌ها را با تغییرات جدید به‌روزرسانی کنید.

![یک یا چند متابیس staging (با sync خاموش) برای توسعه محتوا استفاده می‌شود، که می‌توانید export کنید، به یک repo commit کنید، سپس به متابیس production خود import کنید. برای نگه داشتن همه متابیس‌های staging به‌روز، شما](../../../images/git-workflow/flowchart-sync-off.png)

### اطمینان حاصل کنید که sync را خاموش کرده‌اید

scheduler متابیس را با استفاده از متغیر محیطی `MB_DISABLE_SCHEDULER=true` غیرفعال کنید.

غیرفعال کردن scheduling، کارهای زمان‌بندی شده متابیس را خاموش می‌کند، که شامل syncs، fingerprinting، و scanning، و همچنین اشتراک‌های داشبورد، هشدارها، و cache کردن مدل است.

### تنظیم چندین محیط staging با یک فایل config

فقط به یک محیط staging برای این راه‌اندازی نیاز دارید، اما اگر ترجیح می‌دهید چندین محیط staging داشته باشید، می‌توانید از یک [فایل config](../../../../docs/latest/configuring-metabase/config-file.html) برای تنظیم چندین متابیس staging استفاده کنید.

### export کردن فراداده جدول از متابیس production خود

چون sync خاموش است، نیاز دارید فراداده جدول خود را از متابیس production خود دریافت کنید و آن را به متابیس‌های staging خود import کنید.

دستور زیر مجموعه‌هایی که مشخص می‌کنید، و همچنین فراداده جدول را export می‌کند.

```
java -jar metabase.jar export --collections COLLECTIONS_TO_SYNC --no-settings

```

اگر می‌خواهید همه مجموعه‌ها را از متابیس production export کنید، به سادگی flag `--collections` و آرگومان‌های آن را حذف کنید.

توصیه می‌کنیم یک workflow تنظیم کنید که این داده را به طور خودکار در یک cadence منظم export کند.

در اینجا یک workflow نمونه:

```
name: export-datamodel-from-prod
on:
  workflow_dispatch:
  # schedule:
  #  - cron: '0 */6 * * *' # Every six hours every day
env:
  MB_VERSION: 1.46.4
  COLLECTIONS_TO_SYNC: "2,3,4"
  MB_DB_TYPE: postgres
  MB_DB_DBNAME: metabase
  MB_DB_HOST: $
  MB_DB_USER: $
  MB_DB_PASS: $

jobs:
  export_data_model:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Download selected version enterprise jar
        run: |
          curl -OL https://downloads.metabase.com/enterprise/v$MB_VERSION/metabase.jar
          stat ./metabase.jar
      - name: Export datamodel and curated collections
        run: |
          java -jar metabase.jar export $GITHUB_WORKSPACE --collections $COLLECTIONS_TO_SYNC --no-settings
      - name: Push Git commit
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          if [[ $(git diff --cached --stat) != '' ]]; then
            git commit -m "Automatic export of the table metadata"
            git push
          fi

```

### import کردن محتوا از متابیس production خود به متابیس staging خود

چون فرآیندهای sync متابیس خاموش هستند، نیاز دارید محتوا را از production pull کنید تا متابیس‌های staging خود را "sync" کنید، از جمله فراداده جدول. اگر چندین متابیس staging اجرا می‌کنید، نیاز دارید آن‌ها را هر بار که تغییراتی به فراداده جدول production وجود دارد، و همچنین هر بار که تغییراتی از هر یک از متابیس‌های staging خود به متابیس production خود push می‌کنید به‌روزرسانی کنید.

نگه داشتن دستی متابیس‌های خود در sync غیرعملی است، پس توصیه می‌کنیم یک action ایجاد کنید، مثل [این action](https://github.com/metabase/git-workflow-no-sync/blob/main/.github/workflows/export-from-prod.yaml)، که یا هر شش ساعت، یا روزانه اجرا می‌شود، تا متابیس‌های staging خود را با تغییرات در متابیس production خود به‌روز نگه دارد.

1. repo جایی که داده production خود را export کردید clone کنید.
2. به دایرکتوری که jar متابیس را برای متابیس staging خود شامل می‌شود تغییر دهید.
3. فراداده جدول و مجموعه‌های curate شده را با اجرای: ``` java -jar metabase.jar import /PATH/TO/REPO ``` import کنید. با `/PATH/TO/REPO` مسیری که داده serialize شده خود را از متابیس production ذخیره کردید. این دستور فراداده جدول به‌روزرسانی شده، و همچنین هر تغییر دیگری به repo را load می‌کند. نیاز دارید این دستور را هر بار که کسی repo محلی شما را به‌روزرسانی می‌کند اجرا کنید.

### توسعه محتوای خود در متابیس staging خود

به متابیس staging خود وارد شوید و هر محتوایی که می‌خواهید به production push کنید ایجاد کنید: مدل‌ها، سؤال‌ها، داشبوردها، و غیره. مطمئن شوید این آیتم‌ها را در آن مجموعه‌های رسمی که برای export به متابیس production خود علامت زده‌اید ذخیره می‌کنید.

### export کردن تغییراتی که در متابیس staging خود ایجاد کردید به متابیس production خود

به عنوان مثال، بگویید می‌خواهید فقط مجموعه‌های 1،2،3 را export کنید.

```
java -jar metabase.jar export /PATH/TO/REPO --collection 1,2,3 --no-data-model --no-settings

```

`/PATH/TO/REPO` را با مسیر به repo خود که داده serialize شده متابیس را شامل می‌شود جایگزین کنید. و `1,2,3` را با شماره‌های ID مجموعه‌هایی که می‌خواهید export کنید جایگزین کنید، هر ID مجموعه را با کاما جدا کنید.

دستور export تغییراتی که در متابیس توسعه خود ایجاد کردید را serialize می‌کند و آن‌ها را به repo خود ذخیره می‌کند.

تغییرات خود را به یک شاخه commit کنید و آن شاخه را به شاخه main خود merge کنید. workflow GitHub که تنظیم کردید اجرا می‌شود و آن تغییرات serialize شده را به متابیس production خود import می‌کند.

### فایل‌های YAML workflow نمونه برای راه‌اندازی sync off

[مثال workflow Git با sync OFF](https://github.com/metabase/git-workflow-no-sync).

[
      
        
        

      
      
        
        

      
    ](serialization.html)
[
      
        
        

      
      
        
        

      
    ](making-dashboards-faster.html)
