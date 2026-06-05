import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactEmail, content, locales, type Locale } from "../../lib/content";
import { absoluteUrl, siteConfig } from "../../lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const page = content[locale as Locale];
  const featuredScenarios = page.scenarios.slice(0, 6);
  const featuredCase = page.cases[0];
  const supportingCases = page.cases.slice(1);
  const coreServices = page.services.slice(0, 3);
  const subject =
    locale === "zh"
      ? "预约 FDE OPC AI 场景诊断"
      : "Book an FDE OPC AI Scenario Diagnosis";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
  const pageUrl = absoluteUrl(`/${locale}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${absoluteUrl()}#organization`,
        name: siteConfig.name,
        url: absoluteUrl(),
        email: contactEmail,
        logo: absoluteUrl("/icon.svg"),
        description: page.meta.description,
        sameAs: ["https://github.com/fdeopc"],
        founder: page.team.map((member) => ({
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          description: member.summary,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl()}#website`,
        name: siteConfig.name,
        url: absoluteUrl(),
        inLanguage: page.lang,
        publisher: {
          "@id": `${absoluteUrl()}#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#service`,
        name: page.meta.title,
        url: pageUrl,
        image: absoluteUrl(siteConfig.ogImage),
        description: page.meta.description,
        email: contactEmail,
        areaServed: "Global",
        provider: {
          "@id": `${absoluteUrl()}#organization`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: page.servicesTitle,
          itemListElement: page.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.body,
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#case-studies`,
        name: page.casesTitle,
        itemListElement: page.cases.map((caseStudy, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: caseStudy.title,
            description: caseStudy.summary,
            about: caseStudy.tag,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.meta.title,
        description: page.meta.description,
        inLanguage: page.lang,
        isPartOf: {
          "@id": `${absoluteUrl()}#website`,
        },
        about: {
          "@id": `${absoluteUrl()}#organization`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
      <header className="site-header">
        <Link className="brand" href={`/${locale}`} aria-label="FDE OPC home">
          FDE OPC
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#scenarios">{page.nav.scenarios}</a>
          <Link href={`/${locale}/cases`}>{page.nav.cases}</Link>
          <a href="#services">{page.nav.services}</a>
          <a href="#team">{page.nav.team}</a>
          <a href="#contact">{page.nav.contact}</a>
          <Link className="language-link" href={page.nav.switchHref}>
            {page.nav.switch}
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1>{page.hero.title}</h1>
          <p className="hero-subtitle">{page.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={mailto}>
              {page.hero.primaryCta}
            </a>
            <a className="button button-secondary" href="#scenarios">
              {page.hero.secondaryCta}
            </a>
          </div>
          <div className="stats">
            <div>
              <strong>{page.hero.statOne}</strong>
              <span>{page.hero.statOneLabel}</span>
            </div>
            <div>
              <strong>{page.hero.statTwo}</strong>
              <span>{page.hero.statTwoLabel}</span>
            </div>
            <div>
              <strong>{page.hero.statThree}</strong>
              <span>{page.hero.statThreeLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="scenarios">
        <div className="section-heading">
          <h2>{page.scenariosTitle}</h2>
          <p>{page.scenariosSubtitle}</p>
        </div>
        <div className="scenario-grid">
          {featuredScenarios.map((scenario, index) => (
            <article className="scenario-card" key={scenario}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{scenario}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section cases-section" id="cases">
        <div className="section-heading">
          <h2>{page.casesTitle}</h2>
          <p>{page.casesSubtitle}</p>
        </div>
        <div className="case-showcase">
          <article className="case-feature">
            <Link
              className="case-image-link"
              href={`/${locale}/cases/${featuredCase.slug}`}
              aria-label={featuredCase.title}
            >
              <Image
                src={featuredCase.image}
                alt={featuredCase.imageAlt}
                width={1586}
                height={992}
                sizes="(max-width: 820px) 100vw, 548px"
              />
              <span>{featuredCase.tag}</span>
            </Link>
            <div className="case-feature-copy">
              <span className="case-tag">{featuredCase.tag}</span>
              <h3>{featuredCase.title}</h3>
              <p>{featuredCase.summary}</p>
            </div>
            <div className="case-comparison" aria-label={featuredCase.title}>
              <div>
                <span>{page.casesLabels.challenge}</span>
                <p>{featuredCase.challenge}</p>
              </div>
              <div>
                <span>{page.casesLabels.solution}</span>
                <p>{featuredCase.solution}</p>
              </div>
              <div>
                <span>{page.casesLabels.effect}</span>
                <p>{featuredCase.effect}</p>
              </div>
            </div>
            <div className="case-metrics">
              {featuredCase.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
            <Link className="case-text-link" href={`/${locale}/cases/${featuredCase.slug}`}>
              {page.casesPage.viewCase}
            </Link>
          </article>
          <div className="case-system" aria-label={page.casesEyebrow}>
            <div className="case-system-header">
              <span>{page.casesEyebrow}</span>
              <strong>FDE OPC</strong>
            </div>
            <div className="case-flow">
              {Object.values(page.casesFlow).map((step, index) => (
                <div className="case-flow-node" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <div className="case-signal" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="case-grid">
          {supportingCases.map((caseStudy) => (
            <article className="case-card" key={caseStudy.title}>
              <Link
                className="case-card-image"
                href={`/${locale}/cases/${caseStudy.slug}`}
                aria-label={caseStudy.title}
              >
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  width={1586}
                  height={992}
                  sizes="(max-width: 820px) 100vw, 333px"
                />
                <span>{caseStudy.tag}</span>
              </Link>
              <h3>
                <Link href={`/${locale}/cases/${caseStudy.slug}`}>
                  {caseStudy.title}
                </Link>
              </h3>
              <p>{caseStudy.summary}</p>
              <div className="case-card-footer">
                {caseStudy.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="case-actions">
          <Link className="button button-secondary" href={`/${locale}/cases`}>
            {page.casesPage.viewAll}
          </Link>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <h2>{page.servicesTitle}</h2>
          <p>{page.servicesSubtitle}</p>
        </div>
        <div className="service-list">
          {coreServices.map((service, index) => (
            <article className="service-row" key={service.title}>
              <div className="service-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading">
          <h2>{page.teamTitle}</h2>
          <p>{page.teamSubtitle}</p>
        </div>
        <div className="team-visual">
          <Image
            src="/images/team-workflow.png"
            alt={page.teamImageAlt}
            width={1792}
            height={1024}
            sizes="(max-width: 1080px) 100vw, 1080px"
          />
        </div>
        <div className="team-grid">
          {page.team.map((member) => (
            <article className="team-card" key={member.name}>
              <span className="team-specialty">{member.specialty}</span>
              <div className="team-card-header">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <p className="team-summary">{member.summary}</p>
              <ul>
                {member.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <h2>{page.contact.title}</h2>
          <p>{page.contact.body}</p>
        </div>
        <a className="button button-primary" href={mailto}>
          {page.contact.cta}
        </a>
      </section>

      <footer className="site-footer">
        <span>FDE OPC</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </footer>
      </main>
    </>
  );
}
