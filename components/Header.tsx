"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "./Icon";

type NavItem = { navTitle: string; slug: string; category: string };
type NavGroup = { title: string; items: NavItem[] };
type SearchItem = { title: string; slug: string; category: string; description: string };

type HeaderProps = {
  productGroups: NavGroup[];
  services: NavItem[];
  searchItems: SearchItem[];
};

export function Header({ productGroups, services, searchItems }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [searchOpen]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return searchItems.slice(0, 8);
    return searchItems
      .filter((item) => `${item.title} ${item.category} ${item.description}`.toLowerCase().includes(needle))
      .slice(0, 10);
  }, [query, searchItems]);

  const goTo = (slug: string) => {
    router.push(`/${slug}`);
    setSearchOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-link" href="/" aria-label="Devnet Limited home">
            <Image src="/devnet-logo.png" width={145} height={46} alt="Devnet Limited" priority />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
            <div className="nav-dropdown">
              <button type="button" className="nav-trigger">Products <span>⌄</span></button>
              <div className="mega-menu products-menu">
                <div className="mega-head">
                  <div><span className="mini-label">Product portfolio</span><strong>Content, workflow and intelligent operations</strong></div>
                  <Link href="/products">View all products <span>→</span></Link>
                </div>
                <div className="mega-columns">
                  {productGroups.map((group) => (
                    <div key={group.title} className="mega-column">
                      <p>{group.title}</p>
                      {group.items.map((item) => (
                        <Link key={item.slug} href={`/${item.slug}`}>
                          <span className="mega-icon"><Icon name={item.slug.includes("scanner") ? "scanner" : "file"} /></span>
                          <span>{item.navTitle}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-dropdown">
              <button type="button" className="nav-trigger">Services <span>⌄</span></button>
              <div className="mega-menu services-menu">
                <div className="mega-head">
                  <div><span className="mini-label">Service portfolio</span><strong>From digitization to custom AI systems</strong></div>
                  <Link href="/services">View all services <span>→</span></Link>
                </div>
                <div className="services-grid">
                  {services.map((item) => (
                    <Link key={item.slug} href={`/${item.slug}`}>
                      <span className="mega-icon"><Icon name={item.slug.includes("ai-") ? "brain" : item.slug.includes("development") ? "code" : "workflow"} /></span>
                      <span><strong>{item.navTitle}</strong><small>Explore capability</small></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav-dropdown small-dropdown">
              <button type="button" className="nav-trigger">Company <span>⌄</span></button>
              <div className="company-menu">
                <Link href="/about"><Icon name="building" /> About Devnet</Link>
                <Link href="/career"><Icon name="users" /> Career</Link>
                <Link href="/support"><Icon name="headset" /> Support</Link>
                <Link href="/faq"><Icon name="message" /> FAQ</Link>
              </div>
            </div>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <button className="search-button" type="button" onClick={() => setSearchOpen(true)} aria-label="Search website">
              <Icon name="search" />
              <span>Search</span>
              <kbd>⌘K</kbd>
            </button>
            <Link className="button button-red header-cta" href="/contact">Talk to an expert <span>↗</span></Link>
            <button
              type="button"
              className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span /> <span /> <span />
            </button>
          </div>
        </div>

        <div className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
          <div className="mobile-panel-inner">
            <Link href="/">Home</Link>
            <button type="button" className="mobile-accordion-trigger" onClick={() => setMobileSection(mobileSection === "products" ? null : "products")}>
              Products <span>{mobileSection === "products" ? "−" : "+"}</span>
            </button>
            {mobileSection === "products" && (
              <div className="mobile-accordion-content">
                <Link className="view-all" href="/products">All products</Link>
                {productGroups.flatMap((group) => group.items).map((item) => <Link key={item.slug} href={`/${item.slug}`}>{item.navTitle}</Link>)}
              </div>
            )}
            <button type="button" className="mobile-accordion-trigger" onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}>
              Services <span>{mobileSection === "services" ? "−" : "+"}</span>
            </button>
            {mobileSection === "services" && (
              <div className="mobile-accordion-content">
                <Link className="view-all" href="/services">All services</Link>
                {services.map((item) => <Link key={item.slug} href={`/${item.slug}`}>{item.navTitle}</Link>)}
              </div>
            )}
            <button type="button" className="mobile-accordion-trigger" onClick={() => setMobileSection(mobileSection === "company" ? null : "company")}>
              Company <span>{mobileSection === "company" ? "−" : "+"}</span>
            </button>
            {mobileSection === "company" && (
              <div className="mobile-accordion-content">
                <Link href="/about">About</Link><Link href="/career">Career</Link><Link href="/support">Support</Link><Link href="/faq">FAQ</Link>
              </div>
            )}
            <Link href="/contact">Contact</Link>
            <div className="mobile-panel-actions">
              <button type="button" className="button button-outline" onClick={() => setSearchOpen(true)}><Icon name="search" /> Search website</button>
              <Link className="button button-red" href="/contact">Talk to an expert</Link>
            </div>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search" onMouseDown={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
          <div className="search-modal">
            <div className="search-modal-head">
              <Icon name="search" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products, services and pages…"
                aria-label="Search query"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">Esc</button>
            </div>
            <div className="search-results">
              <span className="search-caption">{query ? `${filtered.length} matching pages` : "Popular destinations"}</span>
              {filtered.length ? filtered.map((item) => (
                <button type="button" key={item.slug} onClick={() => goTo(item.slug)}>
                  <span className="result-icon"><Icon name={item.category === "Service" ? "workflow" : "file"} /></span>
                  <span><strong>{item.title}</strong><small>{item.category} · {item.description}</small></span>
                  <b>→</b>
                </button>
              )) : <div className="empty-search">No page matched “{query}”. Try “document”, “banking” or “AI”.</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
