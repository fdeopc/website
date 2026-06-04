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
