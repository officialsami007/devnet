import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";
import { productPages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Devnet document management, workflow, capture, business solutions and scanning hardware."
};

export default function ProductsPage() {
  const items = productPages.map(({ slug, navTitle, category, eyebrow, description, capabilities }) => ({ slug, navTitle, category, eyebrow, description, capabilities }));
  const filters = [
    { label: "Content & workflow", match: productPages.slice(0, 4).map((item) => item.slug) },
    { label: "Business systems", match: productPages.slice(4, 12).map((item) => item.slug) },
    { label: "Scanning hardware", match: productPages.slice(12).map((item) => item.slug) }
  ];
  return (
    <main>
      <section className="catalog-hero">
        <div className="container catalog-hero-grid">
          <div data-reveal><span className="eyebrow">Devnet product portfolio</span><h1>One connected foundation for content, process and intelligent operations.</h1></div>
          <div data-reveal><p>Explore enterprise software and capture hardware designed for document-heavy, regulated and public-service environments.</p><div className="catalog-hero-stat"><strong>{productPages.length}</strong><span>product families</span></div></div>
        </div>
      </section>
      <section className="section catalog-section"><div className="container"><CatalogGrid items={items} filters={filters} /></div></section>
    </main>
  );
}
