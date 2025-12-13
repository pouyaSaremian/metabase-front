import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/Button";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metabase.com";

export const metadata: Metadata = {
  title: "راهنمای کمک | Metabase",
  description:
    "منابع متابیس برای حل مشکلات: مستندات، آموزش‌ها، انجمن گفتگو و موارد بیشتر.",
  keywords: [
    "کمک متابیس",
    "مستندات متابیس",
    "عیب‌یابی متابیس",
    "پشتیبانی متابیس",
    "انجمن متابیس",
    "آموزش‌های متابیس",
    "یادگیری متابیس",
    "راهنمای متابیس",
  ],
  authors: [{ name: "Metabase Persian" }],
  creator: "Metabase Persian",
  publisher: "Metabase Persian",
  openGraph: {
    title: "راهنمای کمک | Metabase",
    description:
      "منابع متابیس برای حل مشکلات: مستندات، آموزش‌ها، انجمن گفتگو و موارد بیشتر.",
    type: "website",
    url: `${baseUrl}/help`,
    siteName: "Metabase | هوش تجاری متن‌باز و تجزیه و تحلیل تعبیه‌شده",
    locale: "fa_IR",
    images: [
      {
        url: `${baseUrl}/images/twitter/default-share.png`,
        width: 1200,
        height: 630,
        alt: "راهنمای کمک متابیس - مستندات، آموزش‌ها و منابع پشتیبانی",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "راهنمای کمک | Metabase",
    description:
      "منابع متابیس برای حل مشکلات: مستندات، آموزش‌ها، انجمن گفتگو و موارد بیشتر.",
    images: [`${baseUrl}/images/twitter/default-share.png`],
    site: "@metabase",
    creator: "@metabase",
  },
  alternates: {
    canonical: `${baseUrl}/help`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface HelpCardProps {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

const HelpCard: React.FC<HelpCardProps> = ({
  title,
  description,
  href,
  external = false,
}) => {
  return (
    <div className="border border-metabase-border-light rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex flex-row items-center p-6"
      >
        <div className="flex-1 ps-4">
          <p className="text-base font-bold text-metabase-primary mb-2">
            {title}
          </p>
          <p className="text-sm text-metabase-text-light mb-0">{description}</p>
        </div>
        <div className="shrink-0 rotate-180">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-metabase-primary"
          >
            <rect
              y="13.2684"
              width="2.64812"
              height="21.9997"
              transform="rotate(-90 0 13.2684)"
              fill="#509EE3"
            />
            <path
              d="M14.667 4L22.0002 11.9443L14.667 19.8887"
              stroke="#509EE3"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default function HelpPage() {
  const helpCards: HelpCardProps[] = [
    {
      title: "عیب‌یابی",
      description: "یافتن و رفع علت اصلی مشکلات رایج.",
      href: "/docs/latest/troubleshooting-guide/",
    },
    {
      title: "مستندات",
      description: "مقالات جامع در مورد راه‌اندازی و استفاده روزمره.",
      href: "/docs/latest/",
    },
    {
      title: "انجمن گفتگو",
      description: "سوال بپرسید و از سایر کاربران متابیس یاد بگیرید.",
      href: "https://discourse.metabase.com/",
      external: true,
    },
    {
      title: "یادگیری",
      description: "آموزش‌ها، راهنماها، مقالات و موارد بیشتر.",
      href: "/learn/",
    },
  ];

  return (
    <>
      {/* WebPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "راهنمای کمک | Metabase",
            description:
              "منابع متابیس برای حل مشکلات: مستندات، آموزش‌ها، انجمن گفتگو و موارد بیشتر.",
            url: `${baseUrl}/help`,
            inLanguage: "fa-IR",
            isPartOf: {
              "@type": "WebSite",
              name: "Metabase",
              url: baseUrl,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "خانه",
                  item: `${baseUrl}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "راهنمای کمک",
                  item: `${baseUrl}/help`,
                },
              ],
            },
            mainEntity: {
              "@type": "ItemList",
              name: "منابع کمک متابیس",
              description:
                "فهرست منابع کمک برای حل مشکلات و یادگیری متابیس شامل مستندات، آموزش‌ها، انجمن گفتگو و راهنماهای عیب‌یابی",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "عیب‌یابی",
                  description: "یافتن و رفع علت اصلی مشکلات رایج",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "مستندات",
                  description:
                    "مقالات جامع در مورد راه‌اندازی و استفاده روزمره",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "انجمن گفتگو",
                  description:
                    "سوال بپرسید و از سایر کاربران متابیس یاد بگیرید",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "یادگیری",
                  description: "آموزش‌ها، راهنماها، مقالات و موارد بیشتر",
                },
              ],
            },
          }),
        }}
      />
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: `${baseUrl}/`,
            sameAs: [
              "https://github.com/metabase",
              "https://www.linkedin.com/company/metabase/",
              "https://x.com/metabase",
              "https://www.youtube.com/@metabasedata",
            ],
            logo: "https://github.com/metabase/metabase.github.io/blob/master/images/metabase-logo.png?raw=true",
            name: "Metabase",
            description:
              "متابیس یک ابزار متن‌باز هوش تجاری و تجزیه و تحلیل تعبیه‌شده است. در ۵ دقیقه به پشته داده خود متصل شوید تا پرس‌وجوها، تجسم‌ها و داشبوردها را برای همه آسان کنید—بدون نیاز به SQL",
            email: "hello@metabase.com",
            foundingDate: "2015-02-01T00:00:00.000Z",
            inLanguage: "fa-IR",
            address: {
              "@type": "PostalAddress",
              streetAddress: "9740 Campo Rd",
              addressLocality: "Spring Valley",
              addressCountry: "USA",
              addressRegion: "CA",
              postalCode: "91977",
            },
            knowsAbout: [
              { "@type": "Thing", name: "هوش تجاری" },
              { "@type": "Thing", name: "تجزیه و تحلیل تعبیه‌شده" },
              { "@type": "Thing", name: "تجزیه و تحلیل خودسرویس" },
              {
                "@type": "Thing",
                name: "هوش تجاری متن‌باز",
              },
              { "@type": "Thing", name: "پشتیبانی و راهنمایی" },
              { "@type": "Thing", name: "عیب‌یابی" },
            ],
          }),
        }}
      />
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Header />
        <main>
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              {/* Page Title */}
              <div className="mb-8 md:mb-12">
                <h1 className="text-2xl md:text-3xl font-bold text-metabase-primary mb-0">
                  راهنمای کمک
                </h1>
              </div>

              {/* Help Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {helpCards.map((card, index) => (
                  <HelpCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    href={card.href}
                    external={card.external}
                  />
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-[#f9fbfc] rounded-lg py-6 md:py-8 px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0 py-4 md:ps-8">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_132_2051)">
                        <path
                          d="M7.98121 2.18652L7.98121 2.18652C4.64778 5.23953 4.15288 10.3007 6.77866 13.9442L6.77858 13.9443L6.78189 13.9485C7.96276 15.4687 8.59488 17.3344 8.59488 19.2493C8.59488 19.7531 8.79552 20.2367 9.15183 20.5928C9.50813 20.949 9.99191 21.1495 10.4959 21.1495H17.5C18.004 21.1495 18.4878 20.949 18.8441 20.5928C19.2004 20.2367 19.401 19.7531 19.401 19.2493C19.401 17.3348 20.0397 15.4736 21.2208 13.9531L21.2209 13.9531L21.2241 13.9488C23.85 10.3051 23.348 5.23939 20.0147 2.18652L19.9134 2.29714L20.0147 2.18652C18.3144 0.629321 16.1557 -0.149924 13.9979 -0.149924C11.8402 -0.149924 9.6815 0.629321 7.98121 2.18652ZM19.8992 13.2741L19.8973 13.2767C18.6247 15.0106 17.9337 17.1007 17.9337 19.2493C17.9337 19.3644 17.8881 19.4742 17.8066 19.5557C17.7251 19.6372 17.6152 19.6827 17.5 19.6827H10.4959C10.3807 19.6827 10.2708 19.6372 10.1893 19.5557C10.1078 19.4742 10.0622 19.3644 10.0622 19.2493C10.0622 17.1005 9.36634 15.0139 8.09402 13.2801L8.09405 13.2801L8.09207 13.2775C5.74135 10.2155 6.12544 5.87574 8.97273 3.26801L8.97273 3.26801C10.3964 1.9641 12.1971 1.31228 13.9979 1.31228C15.7988 1.31228 17.5995 1.9641 19.0232 3.26801C21.8703 5.87563 22.2501 10.2119 19.8992 13.2741ZM10.0172 22.9663L10.0171 22.9663C9.67807 23.5534 9.67807 24.2794 10.0171 24.8665L10.0172 24.8665C10.3386 25.4229 10.9762 25.8165 11.6632 25.8165H15.749C15.9051 25.8165 16.0474 25.8985 16.1252 26.0332C16.2031 26.1681 16.2031 26.3317 16.1252 26.4666C16.0474 26.6013 15.9051 26.6833 15.749 26.6833H12.2479C12.0102 26.6802 11.8203 26.7688 11.6914 26.9122C11.5648 27.0529 11.5049 27.2374 11.5049 27.4167C11.5049 27.596 11.5648 27.7804 11.6914 27.9212C11.8203 28.0646 12.0102 28.1531 12.2479 28.1501H15.749C16.4566 28.1501 17.0724 27.7606 17.3962 27.2C17.7353 26.6129 17.7353 25.8869 17.3962 25.2998C17.0736 24.7413 16.3858 24.3498 15.749 24.3498H11.6632C11.5075 24.3498 11.3661 24.2681 11.2881 24.1331L11.2881 24.133C11.2102 23.9982 11.2102 23.8346 11.2881 23.6997L11.2881 23.6997C11.3661 23.5647 11.5075 23.483 11.6632 23.483H17.499C17.7367 23.4861 17.9266 23.3975 18.0555 23.2541C18.1821 23.1134 18.242 22.9289 18.242 22.7496C18.242 22.5703 18.1821 22.3859 18.0555 22.2451C17.9266 22.1017 17.7367 22.0132 17.499 22.0163H11.6632C10.9698 22.0163 10.3413 22.4052 10.0172 22.9663Z"
                          fill="#509EE3"
                          stroke="#509EE3"
                          strokeWidth="0.3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_132_2051">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-right">
                    <p className="text-base font-bold text-metabase-text-secondary mb-0">
                      آیا راح حل عملی نیافتید؟ با ما تماس بگیرید.{" "}
                    </p>
                  </div>
                  <div className="shrink-0 md:me-8 text-center md:text-left">
                    <Button
                      variant="outline"
                      href="/pricing"
                      className="text-sm   px-6 py-4 font-bold"
                    >
                      تماس با ما
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
