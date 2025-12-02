# فهرست کار ترجمه مستندات متابیس

این برنامهٔ کاری براساس ساختار پوشهٔ `docs` و ارجاع به نسخهٔ HTML در `static/docs/latest` تنظیم شده و به‌صورت مرحله‌ای پیش می‌رود. وضعیت هر مورد را پس از اتمام به‌روزرسانی کنید.

## ۱. مقدمات و ریشهٔ مخزن

- [x] `README.md` (همگام با ترجمه‌های موجود در `rtl/`).
- [ ] `CONTRIBUTING.md`
- [ ] `util/README.md`
- [ ] `util/resources/introduction.md`
- [x] مرور `rtl/QUICK_GUIDE.md` برای استخراج واژگان استاندارد.

## ۲. مبانی نصب و راه‌اندازی (`installation-and-operation/` + `configuring-metabase/`)

- [x] پوشهٔ `installation-and-operation/`
  - [x] `start.md`
  - [x] `installing-metabase.md`
  - [x] `upgrading-metabase.md`
  - [x] `configuring-application-database.md`
  - [x] `backing-up-metabase-application-data.md`
  - [x] `accessibility.md`
  - [x] `activating-the-enterprise-edition.md`
  - [x] `commands.md`
  - [x] `creating-RDS-database-on-AWS.md`
  - [x] `development-instance.md`
  - [x] `information-collection.md`
  - [x] `migrating-from-h2.md`
  - [x] `monitoring-metabase.md`
  - [x] `observability-with-prometheus.md`
  - [x] `privacy.md`
  - [x] `remote-sync.md`
  - [x] `running-metabase-as-service.md`
  - [x] `running-metabase-on-azure.md`
  - [x] `running-metabase-on-docker.md`
  - [x] `running-metabase-on-elastic-beanstalk.md`
  - [x] `running-metabase-on-podman.md`
  - [x] `running-the-metabase-jar-file.md`
  - [x] `serialization.md`
  - [x] `supported-browsers.md`

- [x] پوشهٔ `configuring-metabase/`
  - [x] `environment-variables.md`
  - [x] `config-file.md`
  - [x] `log-configuration.md`
  - [x] `setting-up-metabase.md`
  - [x] `settings.md`
  - [x] `email.md`
  - [x] `slack.md`
  - [x] `webhooks.md`
  - [x] `appearance.md`
  - [x] `caching.md`
  - [x] `config-template.md`
  - [x] `custom-maps.md`
  - [x] `customizing-jetty-webserver.md`
  - [x] `fonts.md`
  - [x] `localization.md`
  - [x] `start.md`
  - [x] `timezones.md`

## ۳. پایگاه‌های داده (`databases/`)

- [x] پوشهٔ `databases/`
  - [x] `start.md`
  - [x] `connecting.md`
  - [x] `users-roles-privileges.md`
  - [x] `danger-zone.md`
  - [x] `encrypting-details-at-rest.md`
  - [x] `ssh-tunnel.md`
  - [x] `ssl-certificates.md`
  - [x] `sync-scan.md`
  - [x] `uploads.md`
  - [x] زیرپوشهٔ `connections/` (هر اتصال یک زیرکار است)
    - [x] `athena.md`
    - [x] `aws-rds.md`
    - [x] `bigquery.md`
    - [x] `clickhouse.md`
    - [x] `databricks.md`
    - [x] `druid.md`
    - [x] `mariadb.md`
    - [x] `mongodb.md`
    - [x] `mysql.md`
    - [x] `oracle.md`
    - [x] `postgresql.md`
    - [x] `presto.md`
    - [x] `redshift.md`
    - [x] `snowflake.md`
    - [x] `sparksql.md`
    - [x] `sql-server.md`
    - [x] `sqlite.md`
    - [x] `starburst.md`
    - [x] `vertica.md`

## ۴. سؤال‌ها و ساخت پرسش (`questions/`)

- [x] پوشهٔ `questions/`
  - [x] `start.md`
  - [x] `alerts.md`
  - [x] `exporting-results.md`
  - [x] `introduction.md`

  - [x] زیرپوشهٔ `query-builder/`
    - [x] `editor.md`
    - [x] `filters.md`
    - [x] `summarizing-and-grouping.md`
    - [x] `join.md`
    - [x] `expressions.md`
    - [x] `expressions-list.md`
    - [x] زیرپوشهٔ `expressions/`
      - [x] `case.md`
      - [x] `coalesce.md`
      - [x] `concat.md`
      - [x] `converttimezone.md`
      - [x] `countif.md`
      - [x] `cumulative.md`
      - [x] `datetimeadd.md`
      - [x] `datetimediff.md`
      - [x] `datetimesubtract.md`
      - [x] `in.md`
      - [x] `isempty.md`
      - [x] `isnull.md`
      - [x] `now.md`
      - [x] `offset.md`
      - [x] `regexextract.md`
      - [x] `substring.md`
      - [x] `sumif.md`
      - [x] `week.md`

  - [x] زیرپوشهٔ `native-editor/`
    - [x] `basic-sql-parameters.md`
    - [x] `field-filters.md`
    - [x] `filter-widgets.md`
    - [x] `optional-variables.md`
    - [x] `referencing-saved-questions-in-queries.md`
    - [x] `snippets.md`
    - [x] `sql-parameters.md`
    - [x] `time-grouping-parameters.md`
    - [x] `writing-sql.md`

  - [x] زیرپوشهٔ `visualizations/`
    - [x] `visualizing-results.md`
    - [x] `numbers.md`
    - [x] `line-bar-and-area-charts.md`
    - [x] `combo-chart.md`
    - [x] `progress-bar.md`
    - [x] `sankey.md`
    - [x] `waterfall-chart.md`
    - [x] `tooltips.md`
    - [x] `map.md`
    - [x] `pivot-table.md`
    - [x] `detail.md`
    - [x] `funnel.md`
    - [x] `gauge.md`
    - [x] `pie-or-donut-chart.md`
    - [x] `scatterplot-or-bubble-chart.md`
    - [x] `table.md`
    - [x] `trend.md`
    - [x] `country-codes.md`

## ۵. داشبوردها (`dashboards/`)

- [x] پوشهٔ `dashboards/`
  - [x] `start.md`
  - [x] `introduction.md`
  - [x] `filters.md`
  - [x] `interactive.md`
  - [x] `linked-filters.md`
  - [x] `multiple-series.md`
  - [x] `actions.md`
  - [x] `subscriptions.md`

## ۶. مستندات متنی (`documents/`)

- [x] پوشهٔ `documents/`
  - [x] `start.md`
  - [x] `introduction.md`

## ۷. مدل‌سازی داده (`data-modeling/`)

- [x] پوشهٔ `data-modeling/`
  - [x] `start.md`
  - [x] `models.md`
  - [x] `model-persistence.md`
  - [x] `metrics.md`
  - [x] `editable-tables.md`
  - [x] `formatting.md`
  - [x] `json-unfolding.md`
  - [x] `legacy-metrics.md`
  - [x] `metadata-editing.md`
  - [x] `segments.md`
  - [x] `semantic-types.md`

## ۸. اکشن‌ها (`actions/`)

- [x] پوشهٔ `actions/`
  - [x] `start.md`
  - [x] `introduction.md`
  - [x] `basic.md`
  - [x] `custom.md`

## ۹. هوش مصنوعی (`ai/`)

- [ ] پوشهٔ `ai/`
  - [x] `start.md`
  - [x] `metabot.md`
  - [x] `settings.md`

## ۱۰. اکتشاف و سازمان‌دهی (`exploration-and-organization/`)

- [ ] پوشهٔ `exploration-and-organization/`
  - [x] `start.md`
  - [x] `exploration.md`
  - [x] `collections.md`
  - [x] `keyboard-shortcuts.md`
  - [x] `history.md`
  - [x] `delete-and-restore.md`
  - [x] `content-verification.md`
  - [x] `data-model-reference.md`
  - [x] `events-and-timelines.md`
  - [x] `uploads.md`
  - [x] `x-rays.md`

## ۱۱. افراد و گروه‌ها (`people-and-groups/`)

- [x] پوشهٔ `people-and-groups/`
  - [x] `start.md`
  - [x] `account-settings.md`
  - [x] `api-keys.md`
  - [x] `authenticating-with-jwt.md`
  - [x] `authenticating-with-saml.md`
  - [x] `changing-password-complexity.md`
  - [x] `changing-session-expiration.md`
  - [x] `google-sign-in.md`
  - [x] `ldap.md`
  - [x] `managing.md`
  - [x] `saml-auth0.md`
  - [x] `saml-azure.md`
  - [x] `saml-google.md`
  - [x] `saml-keycloak.md`
  - [x] `saml-okta.md`
  - [x] `user-provisioning.md`

## ۱۲. سطح دسترسی (`permissions/`)

- [x] پوشهٔ `permissions/`
  - [x] `start.md`
  - [x] `introduction.md`
  - [x] `data.md`
  - [x] `collections.md`
  - [x] `application.md`
  - [x] `database-routing.md`
  - [x] `embedding.md`
  - [x] `impersonation.md`
  - [x] `no-self-service-deprecation.md`
  - [x] `notifications.md`
  - [x] `row-and-column-security-examples.md`
  - [x] `row-and-column-security.md`
  - [x] `snippets.md`

## ۱۳. درون‌گذاری (`embedding/`)

- [ ] پوشهٔ اصلی `embedding/`
  - [ ] `start.md`
  - [ ] `introduction.md`
  - [ ] `embedded-analytics-js.md`
  - [ ] `interactive-embedding-quick-start-guide.md`
  - [ ] `interactive-embedding.md`
  - [ ] `interactive-ui-components.md`
  - [ ] `public-links.md`
  - [ ] `securing-embeds.md`
  - [ ] `static-embedding.md`
  - [ ] `static-embedding-parameters.md`
  - [ ] `translations.md`

- [ ] زیرپوشهٔ `embedding/sdk/`
  - [ ] `ai-chat.md`
  - [ ] `appearance.md`
  - [ ] `authentication.md`
  - [ ] `collections.md`
  - [ ] `config.md`
  - [ ] `dashboards.md`
  - [ ] `introduction.md`
  - [ ] `next-js.md`
  - [ ] `plugins.md`
  - [ ] `questions.md`
  - [ ] `quickstart.md`
  - [ ] `quickstart-cli.md`
  - [ ] `quickstart-with-sample-app.md`
  - [ ] `quickstart-with-sample-app/example.md`
  - [ ] `upgrade.md`
  - [ ] `version.md`

## ۱۴. ابزارها و کارایی (`usage-and-performance-tools/`)

- [ ] پوشهٔ `usage-and-performance-tools/`
  - [ ] `start.md`
  - [ ] `usage-analytics.md`
  - [ ] `tools.md`
  - [ ] `audit.md`

## ۱۵. متابیس کلود (`cloud/`)

~~این بخش نادیده گرفته شده است.~~

## ۱۶. API (`api.html` + مرجع‌های مرتبط)

- [ ] `api.html` (همگام‌سازی با `static/docs/latest/api.html` و افزودن مثال‌های فارسی مناسب).

## ۱۷. عیب‌یابی (`troubleshooting-guide/`)

- [ ] پوشهٔ `troubleshooting-guide/`
  - [x] `index.md`
  - [x] `bigquery-drive.md`
  - [x] `bugs.md`
  - [x] `cant-log-in.md`
  - [x] `cant-see-tables.md`
  - [x] `cant-send-email.md`
  - [x] `cant-view-or-edit.md`
  - [x] `create-har-file.md`
  - [ ] `data-permissions.md`
  - [ ] `db-connection.md`
  - [ ] `db-performance.md`
  - [ ] `diagnostic-info.md`
  - [ ] `docker.md`
  - [ ] `error-message.md`
  - [ ] `filters.md`
  - [ ] `known-issues.md`
  - [ ] `ldap.md`
  - [ ] `linked-filters.md`
  - [ ] `loading-from-h2.md`
  - [ ] `models.md`
  - [ ] `my-dashboard-is-slow.md`
  - [ ] `notifications.md`
  - [ ] `permissions.md`
  - [ ] `proxies.md`
  - [ ] `requesting-new-features.md`
  - [ ] `row-and-column-security.md`
  - [ ] `running.md`
  - [ ] `saml.md`
  - [ ] `server-logs.md`
  - [ ] `sql.md`
  - [ ] `sync-fingerprint-scan.md`
  - [ ] `timeout.md`
  - [ ] `timezones.md`
  - [ ] `visualization.md`

## ۱۸. راهنمای توسعه‌دهندگان (`developers-guide/`)

- [ ] پوشهٔ اصلی `developers-guide/`
  - [ ] `start.md`
  - [ ] `api-changelog.md`
  - [ ] `build.md`
  - [ ] `clojure.md`
  - [ ] `code-reviews.md`
  - [ ] `community-drivers.md`
  - [ ] `dev-branch-docker.md`
  - [ ] `devenv.md`
  - [ ] `docs.md`
  - [ ] `driver-changelog.md`
  - [ ] `e2e-tests.md`
  - [ ] `emacs.md`
  - [ ] `frontend.md`
  - [ ] `internationalization.md`
  - [ ] `mage.md`
  - [ ] `mbql-library-changelog.md`
  - [ ] `security-token-scanner.md`
  - [ ] `versioning.md`
  - [ ] `visual-studio-code.md`
  - [ ] `visual-tests.md`

- [ ] زیرپوشهٔ `developers-guide/drivers/`
  - [ ] `basics.md`
  - [ ] `driver-tests.md`
  - [ ] `multimethods.md`
  - [ ] `plugins.md`
  - [ ] `start.md`

## ۱۹. اسناد تکمیلی و نگهداشت

- [ ] بررسی دوره‌ای پوشه‌های `usage-and-performance-tools/`, `documents/`, `cloud/`, `ai/`, `actions/` برای هر فایل جدید.
- [ ] نگهداشت فایل‌های تصویری و کپشن‌ها با متن جایگزین فارسی در تمام پوشه‌ها.

## ۲۰. تأیید و بازبینی نهایی

- [ ] اجرای بازبینی زبانی با توجه به `rtl/QUICK_GUIDE.md`.
- [ ] همگام‌سازی با خروجی متنی در `static/docs/latest` برای اطمینان از سازگاری ساختاری.
- [ ] تکمیل تست‌های نمایش در رابط ایرانی (RTL) و مطابقت با دستورالعمل‌های دسترس‌پذیری.
