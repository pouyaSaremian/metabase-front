import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsContent } from "@/content/docs/DocsContent";
import { getAllDocsSlugs, getDocBySlug } from "@/content/docs/markdown";

interface DocsPageParams {
  slug: string[];
}

interface DocsPageProps {
  params: Promise<DocsPageParams>;
}

export const dynamic = "error";

export const generateStaticParams = async (): Promise<DocsPageParams[]> => {
  const slugs = await getAllDocsSlugs();
  return slugs.map((slug) => ({ slug }));
};

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    return {
      title: "صفحه یافت نشد | مستندات متابیس",
    };
  }

  const path = doc.slug.join("/");
  const baseTitle = doc.metadata.title || "مستندات";
  const title = `${baseTitle} | مستندات متابیس`;

  const description =
    doc.metadata.description ||
    `مستندات متابیس - ${baseTitle}. راهنمای کامل و جامع برای استفاده از ویژگی‌های متابیس`;

  return {
    title,
    description,
    keywords: [
      "مستندات متابیس",
      "Metabase",
      baseTitle,
      "راهنمای متابیس",
      "هوش تجاری",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      locale: "fa_IR",
    },
    alternates: {
      canonical: `/docs/latest/${path}`,
    },
  };
}

export default async function DocsSlugPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const path = doc.slug.join("/");
  const title = doc.metadata.title || "مستندات";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description:
              doc.metadata.description || `مستندات متابیس - ${title}`,
            inLanguage: "fa-IR",
            author: {
              "@type": "Organization",
              name: "Metabase",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `/docs/latest/${path}`,
            },
          }),
        }}
      />
      <DocsContent>
        <div dangerouslySetInnerHTML={{ __html: doc.html }} />
      </DocsContent>
    </>
  );
}
