import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactEmail, content, locales, type Locale } from "../../../../lib/content";
import { absoluteUrl, siteConfig } from "../../../../lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

function getCase(locale: Locale, slug: string) {
  return content[locale].cases.find((caseStudy) => caseStudy.slug === slug);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    content[locale].cases.map((caseStudy) => ({
      locale,
      slug: caseStudy.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const page = content[locale as Locale];
  const caseStudy = getCase(locale as Locale, slug);

  if (!caseStudy) {
    return {};
  }

  const title = `${caseStudy.title} | ${siteConfig.name}`;

  return {
    title,
    description: caseStudy.summary,
    alternates: {
      canonical: absoluteUrl(`/${locale}/cases/${slug}`),
      languages: {
        "zh-CN": absoluteUrl(`/zh/cases/${slug}`),
        en: absoluteUrl(`/en/cases/${slug}`),
        "x-default": absoluteUrl(`/zh/cases/${slug}`),
      },
    },
    openGraph: {
      type: "article",
      siteName: siteConfig.name,
      title,
      description: caseStudy.summary,
      url: absoluteUrl(`/${locale}/cases/${slug}`),
      images: [
        {
          url: absoluteUrl(caseStudy.image),
          width: 1586,
          height: 992,
          alt: caseStudy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: caseStudy.summary,
      images: [absoluteUrl(caseStudy.image)],
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const page = content[locale as Locale];
  const caseStudy = getCase(locale as Locale, slug);

  if (!caseStudy) {
    notFound();
  }

  const otherCases = page.cases.filter((item) => item.slug !== caseStudy.slug).slice(0, 3);
  const subject =
    locale === "zh"
      ? "预约 FDE OPC AI 场景诊断"
      : "Book an FDE OPC AI Scenario Diagnosis";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    url: absoluteUrl(`/${locale}/cases/${caseStudy.slug}`),
    image: absoluteUrl(caseStudy.image),
    description: caseStudy.summary,
    inLanguage: page.lang,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl(),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="case-detail-page">
        <header className="site-header">
          <Link className="brand" href={`/${locale}`} aria-label="FDE OPC home">
            FDE OPC
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href={`/${locale}/cases`}>{page.casesPage.back}</Link>
            <a href={mailto}>{page.nav.contact}</a>
            <Link className="language-link" href={`/${locale === "zh" ? "en" : "zh"}/cases/${caseStudy.slug}`}>
              {page.nav.switch}
            </Link>
          </nav>
        </header>

        <article>
          <section className="case-detail-hero">
            <Link className="case-back-link" href={`/${locale}/cases`}>
              {page.casesPage.back}
            </Link>
            <span className="case-tag">{caseStudy.tag}</span>
            <h1>{caseStudy.title}</h1>
            <p>{caseStudy.summary}</p>
          </section>

          <div className="case-detail-image">
            <Image
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              width={1586}
              height={992}
              sizes="(max-width: 1080px) 100vw, 1080px"
              priority
            />
          </div>

          <section className="case-detail-grid">
            <div>
              <h2>{page.casesPage.overview}</h2>
              <p>{caseStudy.summary}</p>
            </div>
            <div className="case-detail-facts">
              <span>{page.casesLabels.challenge}</span>
              <p>{caseStudy.challenge}</p>
              <span>{page.casesLabels.solution}</span>
              <p>{caseStudy.solution}</p>
              <span>{page.casesLabels.effect}</span>
              <p>{caseStudy.effect}</p>
            </div>
          </section>

          <section className="case-detail-process">
            <div className="section-heading">
              <h2>{page.casesPage.process}</h2>
              <p>{caseStudy.effect}</p>
            </div>
            <div className="process-grid">
              {caseStudy.process.map((step, index) => (
                <div className="process-card" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="case-outcome">
            <div>
              <span>{page.casesPage.outcome}</span>
              <h2>{caseStudy.outcome}</h2>
            </div>
            <div className="case-metrics">
              {caseStudy.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </section>
        </article>

        <section className="section related-cases">
          <div className="section-heading">
            <h2>{page.casesPage.moreCases}</h2>
            <p>{page.casesPage.subtitle}</p>
          </div>
          <div className="case-grid">
            {otherCases.map((item) => (
              <article className="case-card" key={item.slug}>
                <Link
                  className="case-card-image"
                  href={`/${locale}/cases/${item.slug}`}
                  aria-label={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={1586}
                    height={992}
                    sizes="(max-width: 820px) 100vw, 333px"
                  />
                  <span>{item.tag}</span>
                </Link>
                <h3>
                  <Link href={`/${locale}/cases/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <h2>{page.casesPage.contactTitle}</h2>
            <p>{page.casesPage.contactBody}</p>
          </div>
          <a className="button button-primary" href={mailto}>
            {page.casesPage.contactCta}
          </a>
        </section>
      </main>
    </>
  );
}
