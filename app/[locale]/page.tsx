import Link from "next/link";
import { notFound } from "next/navigation";
import { contactEmail, content, locales, type Locale } from "../../lib/content";

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
  const subject =
    locale === "zh"
      ? "预约 FDE OPC AI 场景诊断"
      : "Book an FDE OPC AI Scenario Diagnosis";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href={`/${locale}`} aria-label="FDE OPC home">
          FDE OPC
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#scenarios">{page.nav.scenarios}</a>
          <a href="#services">{page.nav.services}</a>
          <a href="#audiences">{page.nav.audiences}</a>
          <a href="#contact">{page.nav.contact}</a>
          <Link className="language-link" href={page.nav.switchHref}>
            {page.nav.switch}
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
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
        </div>

        <div className="workflow-panel" aria-label="FDE OPC workflow">
          <div className="panel-top">
            <span>FDE OPC</span>
            <span>AI FDE Studio</span>
          </div>
          <div className="workflow-map">
            <div>Business process</div>
            <div>High-frequency pain point</div>
            <div>Working AI tool</div>
            <div>Repeatable workflow</div>
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

      <section className="intro-section">
        <div className="section-kicker">01</div>
        <div>
          <h2>{page.intro.title}</h2>
          <p>{page.intro.body}</p>
        </div>
      </section>

      <section className="section" id="scenarios">
        <div className="section-heading">
          <span className="section-kicker">02</span>
          <h2>{page.scenariosTitle}</h2>
          <p>{page.scenariosSubtitle}</p>
        </div>
        <div className="scenario-grid">
          {page.scenarios.map((scenario, index) => (
            <article className="scenario-card" key={scenario}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{scenario}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <span className="section-kicker">03</span>
          <h2>{page.servicesTitle}</h2>
          <p>{page.servicesSubtitle}</p>
        </div>
        <div className="service-list">
          {page.services.map((service, index) => (
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

      <section className="section audience-section" id="audiences">
        <div className="section-heading compact">
          <span className="section-kicker">04</span>
          <h2>{page.audiencesTitle}</h2>
        </div>
        <div className="audience-grid">
          {page.audiences.map((audience) => (
            <div className="audience-item" key={audience}>
              {audience}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="section-kicker">05</span>
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
  );
}
