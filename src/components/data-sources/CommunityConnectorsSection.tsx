"use client";

import ConnectorCard from "./ConnectorCard";

interface Connector {
  name: string;
  description: string;
  imagePath: string;
  href: string;
}

const communityConnectors: Connector[] = [
  {
    name: "Apache Pinot",
    description:
      "یک فروشگاه داده توزیع شده ستونی منبع باز که به زبان Java نوشته شده است",
    imagePath: "/images/datasources/apache-pinot-logo.jpg",
    href: "/data-sources/apache-pinot",
  },
  {
    name: "Cube",
    description: "یک پلتفرم API تحلیلی منبع باز",
    imagePath: "/images/datasources/circle/cube-js.png",
    href: "/data-sources/cube-js",
  },
  {
    name: "Dremio",
    description:
      "یک پلتفرم تجزیه و تحلیل ساخته شده با استانداردهای منبع باز مانند Apache Arrow و Apache Iceberg",
    imagePath: "/images/datasources/circle/dremio.png",
    href: "/data-sources/dremio",
  },
  {
    name: "DuckDB",
    description: "یک سیستم مدیریت پایگاه داده SQL OLAP درون فرآیندی",
    imagePath: "/images/datasources/circle/duckdb.png",
    href: "/data-sources/duckdb",
  },
  {
    name: "Exasol",
    description: "یک پایگاه داده درون حافظه ساخته شده برای تجزیه و تحلیل",
    imagePath: "/images/datasources/circle/exasol.png",
    href: "/data-sources/exasol",
  },
  {
    name: "Firebolt",
    description: "یک انبار داده ابری",
    imagePath: "/images/datasources/circle/firebolt.png",
    href: "/data-sources/firebolt",
  },
  {
    name: "Hydra",
    description:
      "منبع داده یکپارچه و سازگار که تیم‌ها برای حل سریع مشکلات سخت به آن نیاز دارند",
    imagePath: "/images/datasources/circle/hydra.png",
    href: "/data-sources/hydra",
  },
  {
    name: "Materialize",
    description: "یک انبار داده جریان‌محور برای بارهای کاری عملیاتی",
    imagePath: "/images/datasources/circle/materialize-logo.png",
    href: "/data-sources/materialize",
  },
  {
    name: "Ocient",
    description: "یک انبار داده در مقیاس فوق‌العاده",
    imagePath: "/images/datasources/circle/ocient.png",
    href: "/data-sources/ocient",
  },
  {
    name: "Teradata",
    description: "یک انبار داده ساخته شده برای مقیاس",
    imagePath: "/images/datasources/circle/teradata.png",
    href: "/data-sources/teradata",
  },
];

const CommunityConnectorsSection: React.FC = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="community-connectors-heading"
    >
      <header
        className="connector-header pb-12"
        id="community-data-source-connectors"
      >
        <h4
          id="community-connectors-heading"
          className="text-metabase-text-secondary text-lg font-bold leading-6 md:leading-7 text-center flex items-center justify-center gap-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-metabase-primary"
            aria-hidden="true"
          >
            <path
              d="M12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25Z"
              stroke="#509ee3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.25 12C15.25 16.5 13.2426 19.25 12 19.25C10.7574 19.25 8.75 16.5 8.75 12C8.75 7.5 10.7574 4.75 12 4.75C13.2426 4.75 15.25 7.5 15.25 12Z"
              stroke="#509ee3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12H12H19"
              stroke="#509ee3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          اتصال‌دهنده‌های جامعه
        </h4>
        <p className="text-metabase-text-light text-base font-normal leading-6 mx-auto max-w-[464px] text-center mt-0">
          ساخته و مدیریت شده توسط جامعه منبع باز ما، فقط هنگام میزبانی خود در
          دسترس است و به طور رسمی توسط Metabase پشتیبانی نمی‌شود.
        </p>
      </header>

      <div
        className="connector-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[904px] w-full pb-[92px]"
        role="list"
        aria-label="فهرست اتصال‌دهنده‌های جامعه"
      >
        {communityConnectors.map((connector) => (
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

export default CommunityConnectorsSection;
