import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLearnBySlug } from "@/content/learn";
import { LearnContent } from "@/content/learn/LearnContent";
import { LearnLayout } from "@/content/learn/LearnLayout";
import { learnNavigationSections } from "@/data/learnNavigation";

interface LearnPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const { getAllLearnSlugs } = await import("@/content/learn");
  const slugs = await getAllLearnSlugs();
  // Include empty slug for root /learn page
  return [
    { slug: [] },
    ...slugs.map((slug) => ({
      slug,
    })),
  ];
}

export async function generateMetadata({
  params,
}: LearnPageProps): Promise<Metadata> {
  const { slug } = await params;
  const learn = await getLearnBySlug(slug);

  if (!learn) {
    return {
      title: "یادگیری | متابیس",
    };
  }

  const path = learn.slug.join("/");
  const title = learn.metadata.title || "یادگیری";
  const description = learn.metadata.description || `یادگیری متابیس - ${title}`;

  return {
    title: `${title} | یادگیری متابیس`,
    description,
    openGraph: {
      title: `${title} | یادگیری متابیس`,
      description,
      type: "article",
      locale: "fa_IR",
      url: `/learn/${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | یادگیری متابیس`,
      description,
    },
    alternates: {
      canonical: `/learn/${path}`,
    },
  };
}

export default async function LearnSlugPage({ params }: LearnPageProps) {
  const { slug } = await params;
  const learn = await getLearnBySlug(slug);

  if (!learn) {
    notFound();
  }

  const path = learn.slug.join("/");
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
              "@id": `/learn/${path}`,
            },
          }),
        }}
      />
      <LearnLayout
        sidebarSections={learnNavigationSections}
        tocItems={learn.tocItems}
      >
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
