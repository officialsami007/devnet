import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";
import { servicePages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Devnet digital archiving, application development, data, BPO, banking and AI services."
};

export default function ServicesPage() {
  const items = servicePages.map(({ slug, navTitle, category, eyebrow, description, capabilities }) => ({ slug, navTitle, category, eyebrow, description, capabilities }));
  return (
    <main>
      <section className="catalog-hero service-catalog-hero">
        <div className="container catalog-hero-grid">
          <div data-reveal><span className="eyebrow">Devnet service portfolio</span><h1>Delivery capability from first document to live digital service.</h1></div>
          <div data-reveal><p>Combine operational expertise, engineering and intelligent technology to modernize how information moves through your organization.</p><div className="catalog-hero-stat"><strong>{servicePages.length}</strong><span>service capabilities</span></div></div>
        </div>
      </section>
      <section className="section catalog-section"><div className="container"><CatalogGrid items={items} /></div></section>
    </main>
  );
}
