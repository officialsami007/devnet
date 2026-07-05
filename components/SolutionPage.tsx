import Link from "next/link";
import type { SitePage } from "@/data/site-content";
import { getContentPage } from "@/data/site-content";
import { SolutionHeroPanel } from "./SolutionHeroPanel";
import { Icon } from "./Icon";

export function SolutionPage({ page }: { page: SitePage }) {
  const related = page.related.map(getContentPage).filter(Boolean) as SitePage[];

  return (
    <main>
      <section className="inner-hero">
        <div className="container breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={page.category === "Product" ? "/products" : "/services"}>{page.category}s</Link><span>/</span><b>{page.navTitle}</b></div>
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy" data-reveal>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <h2>{page.subtitle}</h2>
            <p>{page.description}</p>
            <div className="hero-actions">
              <Link className="button button-red" href="/contact">Schedule a consultation <span>↗</span></Link>
              <a className="button button-outline" href={`tel:+8801713044055`}>Call +88 01713-044055</a>
            </div>
            <div className="inner-hero-proof">
              <div><strong>{page.heroStat.value}</strong><span>{page.heroStat.label}</span></div>
              <div><strong>Since 1997</strong><span>enterprise technology partner</span></div>
              <div><strong>Dhaka</strong><span>delivery and support team</span></div>
            </div>
          </div>
          <div data-reveal className="inner-visual-wrap">
            <SolutionHeroPanel page={page} />
          </div>
        </div>
      </section>

      <section className="trust-ribbon">
        <div className="container trust-ribbon-grid">
          <span><Icon name="shield" /> Secure by design</span>
          <span><Icon name="workflow" /> Configurable workflows</span>
          <span><Icon name="link" /> Integration ready</span>
          <span><Icon name="headset" /> Local support</span>
        </div>
      </section>

      <section className="section solution-benefits">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div><span className="eyebrow">Benefits</span><h2>{page.benefitsTitle || `What ${page.navTitle} unlocks`}</h2></div>
            <p>{page.benefitsIntro || "Focused capabilities that reduce friction, improve control and make information easier to act on."}</p>
          </div>
          <div className="benefit-grid">
            {page.benefits.map((item, index) => (
              <article className={`benefit-card ${index === 0 ? "featured" : ""}`} key={item.title} data-reveal>
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="feature-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-band">
        <div className="container feature-band-shell">
          <div className="feature-band-intro" data-reveal>
            <span className="eyebrow light">Key features</span>
            <h2>{page.featuresTitle || "Built for real operational work"}</h2>
            <p>{page.featuresIntro || "A practical combination of workflow, security, data and user experience designed around enterprise requirements."}</p>
            <Link href="/contact" className="button button-white">Discuss your requirements <span>→</span></Link>
          </div>
          <div className="feature-band-grid">
            {page.features.map((item) => (
              <article key={item.title} data-reveal>
                <span><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.showcase?.length ? (
        <section className="section showcase-section">
          <div className="container">
            <div className="section-heading split" data-reveal>
              <div><span className="eyebrow">Selected portfolio</span><h2>Solutions for different workloads</h2></div>
              <p>Explore representative systems and equipment within this Devnet capability area.</p>
            </div>
            <div className="showcase-grid">
              {page.showcase.map((item, index) => (
                <article key={item.title} data-reveal>
                  <div className="showcase-visual"><span>{String(index + 1).padStart(2, "0")}</span><Icon name={page.category === "Product" ? "scanner" : "workflow"} /></div>
                  <h3>{item.title}</h3><p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section capabilities-section">
        <div className="container capabilities-shell">
          <div className="capabilities-copy" data-reveal>
            <span className="eyebrow">More powerful capability</span>
            <h2>A flexible foundation that can grow with your operation.</h2>
            <p>Configure the experience around teams, processes, controls and integrations instead of forcing the organization into a rigid template.</p>
          </div>
          <div className="capability-list" data-reveal>
            {page.capabilities.map((capability, index) => <span key={`${capability}-${index}`}><Icon name="check" /> {capability}</span>)}
          </div>
        </div>
      </section>

      <section className="section related-section">
        <div className="container">
          <div className="section-heading" data-reveal><span className="eyebrow">Continue exploring</span><h2>Related Devnet solutions</h2></div>
          <div className="related-grid">
            {related.map((item, index) => (
              <Link href={`/${item.slug}`} key={item.slug} data-reveal>
                <span className={`related-accent accent-${index + 1}`} />
                <small>{item.category}</small>
                <h3>{item.navTitle}</h3>
                <p>{item.description}</p>
                <b>Explore <span>→</span></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta" data-reveal>
          <div><span className="eyebrow light">Move from possibility to delivery</span><h2>Let’s design the right {page.navTitle.toLowerCase()} solution for your organization.</h2></div>
          <div><p>Share your workflow, content volume, integrations and security requirements. The Devnet team will help shape a practical next step.</p><Link href="/contact" className="button button-white">Start a conversation <span>↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
