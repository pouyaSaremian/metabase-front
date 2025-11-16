"use client";

import ConnectorCard from "./ConnectorCard";

interface Connector {
  name: string;
  description: string;
  imagePath: string;
  href: string;
}

const officialConnectors: Connector[] = [
  {
    name: "Amazon Athena",
    description:
      "اتصال یک سرویس کاملاً مدیریت شده برای پرس‌وجوی داده‌های S3 به Metabase برای تجزیه و تحلیل",
    imagePath: "/images/datasources/circle/aws-athena.png",
    href: "/data-sources/amazon-athena",
  },
  {
    name: "Amazon Redshift",
    description: "یک سرویس انبار داده کاملاً مدیریت شده در مقیاس پتابایت",
    imagePath: "/images/datasources/circle/amazon-redshift.png",
    href: "/data-sources/amazon-redshift",
  },
  {
    name: "BigQuery",
    description: "یک انبار داده کاملاً مدیریت شده و بدون سرور",
    imagePath: "/images/datasources/circle/big-query.png",
    href: "/data-sources/bigquery",
  },
  {
    name: "ClickHouse",
    description: "یک سیستم مدیریت پایگاه داده تحلیلی منبع باز",
    imagePath: "/images/datasources/circle/clickhouse.png",
    href: "/data-sources/clickhouse",
  },
  {
    name: "CSV Uploads",
    description:
      "از Metabase با ذخیره‌سازی داخلی استفاده کنید. نیازی به پایگاه داده یا ETL نیست.",
    imagePath: "/images/icons/badges/upload-promo.svg",
    href: "/product/csv-uploads",
  },
  {
    name: "Databricks",
    description: "یک پلتفرم تجزیه و تحلیل یکپارچه بر روی Spark",
    imagePath: "/images/datasources/circle/databricks.png",
    href: "/data-sources/databricks",
  },
  {
    name: "Druid",
    description: "یک فروشگاه داده توزیع شده، منبع باز و ستونی",
    imagePath: "/images/datasources/circle/druid.png",
    href: "/data-sources/druid",
  },
  {
    name: "Google Sheets",
    description:
      "Metabase را به Google Sheets خود با ذخیره‌سازی داخلی متصل کنید. نیازی به پایگاه داده یا ETL نیست.",
    imagePath: "/images/icons/badges/google-sheets-icon.png",
    href: "/data-sources/google-sheets",
  },
  {
    name: "MariaDB",
    description: "یک سیستم مدیریت پایگاه داده رابطه‌ای منبع باز",
    imagePath: "/images/datasources/mariadb-circle.png",
    href: "/data-sources/mariadb",
  },
  {
    name: "Microsoft SQL Server",
    description:
      "به Metabase متصل شوید تا سیستم مدیریت پایگاه داده رابطه‌ای خود را پرس‌وجو کنید",
    imagePath: "/images/datasources/circle/microsoft-server.png",
    href: "/data-sources/microsoft-sql-server",
  },
  {
    name: "MongoDB",
    description: "یک پایگاه داده سندگرا، چند پلتفرمی و منبع باز",
    imagePath: "/images/datasources/circle/mongo-db.png",
    href: "/data-sources/mongo-db",
  },
  {
    name: "MySQL",
    description: "یک سیستم مدیریت پایگاه داده رابطه‌ای منبع باز",
    imagePath: "/images/datasources/circle/mysql.png",
    href: "/data-sources/mysql",
  },
  {
    name: "Oracle Database",
    description: "یک سیستم مدیریت پایگاه داده رابطه‌ای چند مدلی",
    imagePath: "/images/datasources/circle/oracle.png",
    href: "/data-sources/oracle",
  },
  {
    name: "PostgreSQL",
    description: "یک سیستم مدیریت پایگاه داده رابطه‌ای منبع باز",
    imagePath: "/images/datasources/circle/post-gre.png",
    href: "/data-sources/postgresql",
  },
  {
    name: "Presto",
    description: "یک موتور پرس‌وجوی توزیع شده منبع باز",
    imagePath: "/images/datasources/circle/presto.png",
    href: "/data-sources/presto",
  },
  {
    name: "Snowflake",
    description: "یک پلتفرم داده ابری",
    imagePath: "/images/datasources/circle/snowflake.png",
    href: "/data-sources/snowflake",
  },
  {
    name: "Spark",
    description:
      "Metabase را به Spark، یک موتور تجزیه و تحلیل یکپارچه منبع باز متصل کنید",
    imagePath: "/images/datasources/circle/spark.png",
    href: "/data-sources/spark",
  },
  {
    name: "SQLite",
    description: "یک سیستم مدیریت پایگاه داده رابطه‌ای",
    imagePath: "/images/datasources/circle/sql-lite.png",
    href: "/data-sources/sqlite",
  },
  {
    name: "Starburst",
    description: "یک موتور پرس‌وجوی یکپارچه",
    imagePath: "/images/datasources/circle/starburst.png",
    href: "/data-sources/starburst",
  },
  {
    name: "Vertica",
    description: "یک سیستم مدیریت پایگاه داده توزیع شده، بدون اشتراک",
    imagePath: "/images/datasources/circle/vertica.png",
    href: "/data-sources/vertica",
  },
];

const OfficialConnectorsSection: React.FC = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="official-connectors-heading"
    >
      <header
        className="connector-header pb-12"
        id="official-data-source-connectors"
      >
        <h4
          id="official-connectors-heading"
          className="text-metabase-text-secondary text-lg font-bold leading-6 md:leading-7 text-center flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="text-metabase-primary"
            aria-hidden="true"
          >
            <path
              stroke="#509EE3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m14.25 8.75 4-4H5.75l4 4"
            />
            <path
              stroke="#509EE3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.25 14a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
            />
          </svg>
          اتصال‌دهنده‌های رسمی
        </h4>
        <p className="text-metabase-text-light text-base font-normal leading-6 mx-auto max-w-[464px] text-center mt-0">
          ساخته و مدیریت شده توسط Metabase، در تمام نسخه‌ها در دسترس است.
        </p>
      </header>

      <div
        className="connector-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[904px] w-full pb-[92px]"
        role="list"
        aria-label="فهرست اتصال‌دهنده‌های رسمی"
      >
        {officialConnectors.map((connector) => (
          <div key={connector.name} role="listitem">
            <ConnectorCard
              name={connector.name}
              description={connector.description}
              imagePath={connector.imagePath}
              href={connector.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficialConnectorsSection;
