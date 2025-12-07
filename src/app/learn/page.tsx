import type { Metadata } from "next";
import { getLearnBySlug } from "@/content/learn";
import { LearnContent } from "@/content/learn/LearnContent";
import { LearnLayout } from "@/content/learn/LearnLayout";
import { learnNavigationSections } from "@/data/learnNavigation";

export const metadata: Metadata = {
  title: "یادگیری متابیس | Metabase Learning",
  description:
    "راهنماها و آموزش‌های متابیس، تحلیل داده، مدل‌سازی داده و موارد بیشتر.",
  keywords: [
    "یادگیری متابیس",
    "Metabase learning",
    "آموزش متابیس",
    "راهنمای متابیس",
    "هوش تجاری",
  ],
  openGraph: {
    title: "یادگیری متابیس",
    description: "راهنماها و آموزش‌های متابیس - پلتفرم هوش تجاری منبع باز",
    type: "website",
    locale: "fa_IR",
  },
  alternates: {
    canonical: "/learn",
  },
};

export default async function LearnPage() {
  const learn = await getLearnBySlug([]);

  if (!learn) {
    return (
      <LearnLayout sidebarSections={learnNavigationSections}>
        <div className="learn__post__content">
          <header className="mb-8">
            <h1 className="text-[40px] font-black text-gray-900 mb-2">
              یادگیری متابیس
            </h1>
            <p className="text-[18px] leading-[30px] text-[#4c5773] learn__summary">
              راهنماها و آموزش‌های متابیس
            </p>
          </header>
        </div>
      </LearnLayout>
    );
  }

  const title = learn.metadata.title || "یادگیری";
  const description = learn.metadata.description || `یادگیری متابیس - ${title}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            inLanguage: "fa-IR",
            author: {
              "@type": "Organization",
              name: "Metabase",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `/learn`,
            },
          }),
        }}
      />
      <LearnLayout
        sidebarSections={learnNavigationSections}
        tocItems={learn.tocItems}
      >
        <div className="top-bar">
          <div>{/* Breadcrumbs will be added here if needed */}</div>
        </div>
        <div className="learn__post__content">
          <header className="mb-8">
            <h1 className="text-[40px] font-black text-gray-900 mb-2">
              {title}
            </h1>
            {description && (
              <p className="text-[18px] leading-[30px] text-[#4c5773] learn__summary">
                {description}
              </p>
            )}
          </header>
          <LearnContent>
            <div dangerouslySetInnerHTML={{ __html: learn.html }} />
          </LearnContent>
        </div>
      </LearnLayout>
    </>
  );
}
