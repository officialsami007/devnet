import Link from "next/link";
import { AnimatedHeroVisual } from "@/components/AnimatedHeroVisual";
import { Icon } from "@/components/Icon";
import { partners, productPages, servicePages, testimonials } from "@/data/site-content";

export default function HomePage() {
  const featured = [productPages[0], productPages[1], productPages[2], servicePages[0], servicePages[6]];

  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy" data-reveal>
            <span className="eyebrow">Enterprise digital transformation</span>
            <h1>Turn <span className="red-text">complex work</span> into <span className="green-text">clear momentum.</span></h1>
            <p>Devnet builds secure document management, process automation, intelligent capture and e-governance systems that help institutions move faster, preserve knowledge and serve people better.</p>
            <div className="hero-actions">
              <Link className="button button-red" href="/products">Explore solutions <span>→</span></Link>
              <Link className="button button-outline" href="/contact">Talk to an expert <span>↗</span></Link>
            </div>
            <div className="home-proof">
              <div><strong>Since 1997</strong><span>Enterprise technology partner</span></div>
              <div><strong>30M+ pages</strong><span>Digitized every year</span></div>
              <div><strong>10+ banks</strong><span>DMS and workflow deployments</span></div>
            </div>
          </div>
          <div className="home-visual-wrap" data-reveal>
            <AnimatedHeroVisual />
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Technology partners">
        <div className="partner-track">
          {[...partners, ...partners].map((partner, index) => <span key={`${partner}-${index}`}>{partner}</span>)}
        </div>
      </section>

      <section className="section home-solutions">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div><span className="eyebrow">Solutions built around your work</span><h2>From paper-heavy operations to intelligent digital systems.</h2></div>
            <div><p>One coherent portfolio for content, process, data and citizen-facing transformation.</p><Link className="text-link" href="/products">View the complete portfolio <span>→</span></Link></div>
          </div>
          <div className="home-bento">
            {featured.map((item, index) => (
              <Link key={item.slug} href={`/${item.slug}`} className={`home-solution-card card-${index + 1}`} data-reveal>
                <div className="home-card-top"><span className="feature-icon"><Icon name={index === 0 ? "file" : index === 1 ? "workflow" : index === 2 ? "scan" : index === 3 ? "archive" : "brain"} /></span><small>{item.category}</small></div>
                <h3>{item.navTitle}</h3>
                <p>{item.description}</p>
                <div className="home-card-tags">{item.capabilities.slice(0, 3).map((capability) => <span key={capability}>{capability}</span>)}</div>
                <b>Explore <span>→</span></b>
                {index === 0 && <div className="home-card-mini-ui"><small>Smart search</small><i /><i /><i /><i /></div>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-shell" data-reveal>
          <div className="impact-heading"><div><span className="eyebrow light">Proven at national scale</span><h2>Technology that protects history and accelerates tomorrow.</h2></div><p>Devnet’s work spans digital archives, banking workflows, land records, applications, mobile systems, data processing and business process outsourcing.</p></div>
          <div className="impact-stats">
            <article><strong>1st</strong><span>Introduced DMS and ICR in Bangladesh</span></article>
            <article><strong>30M+</strong><span>Pages digitized per year</span></article>
            <article><strong>213K</strong><span>Mouza maps scanned and archived</span></article>
            <article><strong>10+</strong><span>Banks using DMS and workflow</span></article>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div><span className="eyebrow">What drives the work</span><h2>Long-term relationships, measurable value and a can-do culture.</h2></div>
            <p>Devnet’s core principles shape how teams discover, design, deliver and support enterprise solutions.</p>
          </div>
          <div className="values-grid">
            {[
              ["person", "User-centered approach", "Design around the people who use, operate and depend on the system."],
              ["spark", "Innovation and creativity", "Combine practical technology with new ways to improve services and operations."],
              ["bolt", "Agility and adaptability", "Respond to changing requirements without losing control or quality."],
              ["users", "Collaboration", "Bring business, technology and delivery teams into one shared process."]
            ].map(([icon, title, description], index) => (
              <article key={title} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><Icon name={icon} /><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div><span className="eyebrow">Milestone projects</span><h2>Complex transformation, made visible and measurable.</h2></div>
            <p>Selected work across national records and regulated financial operations.</p>
          </div>
          <div className="project-grid">
            <Link href="/land-management-solution" className="project-card land-project" data-reveal>
              <div className="project-card-content"><small>Land and public records</small><h3>Digitizing Bangladesh’s mouza maps for faster citizen access.</h3><p>Scanning, indexing and archiving for land-record operations.</p><b>Explore land management <span>→</span></b></div><strong className="project-number">213K</strong><div className="map-lines" />
            </Link>
            <Link href="/banking-solution" className="project-card bank-project" data-reveal>
              <div className="project-card-content"><small>Banking and finance</small><h3>Secure document workflows for high-volume financial operations.</h3><p>Enterprise DMS and automation designed for speed, control and auditability.</p><b>Explore banking solutions <span>→</span></b></div><strong className="project-number">10+</strong><div className="bank-bars"><i /><i /><i /><i /></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container testimonial-shell" data-reveal>
          <div className="quote-symbol">“</div>
          <div><blockquote>{testimonials[0].quote}</blockquote><p><strong>{testimonials[0].name}</strong><span>{testimonials[0].role}</span></p></div>
          <div className="testimonial-count"><b>01</b><span>/ 03</span></div>
        </div>
      </section>

      <section className="section final-cta-section home-final-cta">
        <div className="container final-cta" data-reveal>
          <div><span className="eyebrow light">Build the next digital institution</span><h2>Let’s make your information work harder.</h2></div>
          <div><p>Talk with Devnet about document management, workflow automation, intelligent capture, e-governance, AI or large-scale digitization.</p><Link className="button button-white" href="/contact">Start a conversation <span>↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
