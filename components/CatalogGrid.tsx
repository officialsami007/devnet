"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "./Icon";

type CatalogItem = {
  slug: string;
  navTitle: string;
  category: string;
  eyebrow: string;
  description: string;
  capabilities: string[];
};

export function CatalogGrid({ items, filters }: { items: CatalogItem[]; filters?: { label: string; match: string[] }[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    const text = query.trim().toLowerCase();
    const filter = filters?.find((item) => item.label === active);
    return items.filter((item) => {
      const matchesText = !text || `${item.navTitle} ${item.eyebrow} ${item.description} ${item.capabilities.join(" ")}`.toLowerCase().includes(text);
      const matchesFilter = !filter || filter.match.includes(item.slug);
      return matchesText && matchesFilter;
    });
  }, [active, filters, items, query]);

  return (
    <div className="catalog-interactive">
      <div className="catalog-controls" data-reveal>
        <div className="catalog-search"><Icon name="search" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by capability or solution…" /></div>
        {filters?.length ? <div className="filter-pills"><button className={active === "All" ? "active" : ""} onClick={() => setActive("All")}>All</button>{filters.map((filter) => <button key={filter.label} className={active === filter.label ? "active" : ""} onClick={() => setActive(filter.label)}>{filter.label}</button>)}</div> : null}
      </div>
      <div className="catalog-result-count"><strong>{visible.length}</strong> solutions</div>
      <div className="catalog-grid">
        {visible.map((item, index) => (
          <Link href={`/${item.slug}`} key={item.slug} className="catalog-card" data-reveal>
            <div className="catalog-card-top"><span className="catalog-icon"><Icon name={item.slug.includes("scanner") ? "scanner" : item.slug.includes("ai-") ? "brain" : item.category === "Service" ? "workflow" : "file"} /></span><small>{String(index + 1).padStart(2, "0")}</small></div>
            <span className="catalog-eyebrow">{item.eyebrow}</span>
            <h2>{item.navTitle}</h2>
            <p>{item.description}</p>
            <div className="catalog-tags">{item.capabilities.slice(0, 3).map((capability) => <span key={capability}>{capability}</span>)}</div>
            <b>Explore solution <span>→</span></b>
          </Link>
        ))}
      </div>
      {!visible.length && <div className="empty-catalog"><Icon name="search" /><h3>No solution matched your search</h3><p>Try a broader term such as “workflow”, “document”, “AI” or “scanning”.</p></div>}
    </div>
  );
}
