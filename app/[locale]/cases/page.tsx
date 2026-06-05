import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactEmail, content, locales, type Locale } from "../../../lib/content";
import { absoluteUrl, siteConfig } from "../../../lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const page = content[locale as Locale];
  const title = `${page.casesPage.title} | ${siteConfig.name}`;

  return {
    title,
    description: page.casesPage.subtitle,
    alternates: {
      canonical: absoluteUrl(`/${locale}/cases`),
      languages: {
        "zh-CN": absoluteUrl("/zh/cases"),
        en: absoluteUrl("/en/cases"),
        "x-default": absoluteUrl("/zh/cases"),
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description: page.casesPage.subtitle,
      url: absoluteUrl(`/${locale}/cases`),
      images: [
        {
          url: absoluteUrl(page.cases[0].image),
          width: 1586,
          height: 992,
          alt: page.cases[0].imageAlt,
        },
      ],
    },
  };
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const page = content[locale as Locale];
  const subject =
    locale === "zh"
      ? "预约 FDE OPC AI 场景诊断"
      : "Book an FDE OPC AI Scenario Diagnosis";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <main className="cases-page">
      <header className="site-header">
        <Link className="brand" href={`/${locale}`} aria-label="FDE OPC home">
          FDE OPC
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href={`/${locale}`}>{page.casesPage.home}</Link>
          <Link href={`/${locale}/cases`}>{page.nav.cases}</Link>
          <a href={mailto}>{page.nav.contact}</a>
          <Link className="language-link" href={page.nav.switchHref.replace(`/${locale === "zh" ? "en" : "zh"}`, `/${locale === "zh" ? "en" : "zh"}/cases`)}>
            {page.nav.switch}
          </Link>
        </nav>
      </header>

      <section className="cases-hero">
        <p className="eyebrow">{page.casesEyebrow}</p>
        <h1>{page.casesPage.title}</h1>
        <p>{page.casesPage.subtitle}</p>
      </section>

      <section className="case-directory" aria-label={page.casesPage.title}>
        {page.cases.map((caseStudy) => (
          <article className="directory-card" key={caseStudy.slug}>
            <Link
              className="directory-image"
              href={`/${locale}/cases/${caseStudy.slug}`}
              aria-label={caseStudy.title}
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                width={1586}
                height={992}
                sizes="(max-width: 820px) 100vw, 520px"
              />
              <span>{caseStudy.tag}</span>
            </Link>
            <div className="directory-copy">
              <h2>
                <Link href={`/${locale}/cases/${caseStudy.slug}`}>
                  {caseStudy.title}
                </Link>
              </h2>
              <p>{caseStudy.summary}</p>
              <div className="case-card-footer">
                {caseStudy.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <Link className="case-text-link" href={`/${locale}/cases/${caseStudy.slug}`}>
                {page.casesPage.viewCase}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
