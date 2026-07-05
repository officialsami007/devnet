import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "FAQ", description: "Common questions about Devnet solutions, implementation, integrations and support." };

const items: AccordionItem[] = [
  { question: "What is DocuDEX?", answer: "DocuDEX is Devnet’s enterprise document management platform for capturing, organizing, storing, searching, sharing and controlling valuable organizational content." },
  { question: "Can Devnet automate an existing paper-based approval process?", answer: "Yes. Devnet can map the current process, identify roles and rules, and configure digital routing, review, approval, notification and audit-trail capabilities." },
  { question: "Does Devnet provide both scanning hardware and digitization services?", answer: "Yes. The portfolio includes document, robotic, book/map and microfilm scanners as well as high-volume scanning, OCR/ICR, indexing, quality control and archiving services." },
  { question: "Can the solutions integrate with our existing systems?", answer: "Many Devnet solutions are designed for API and system integration. Exact integration scope depends on the target platform, available interfaces, security requirements and data model." },
  { question: "Are the pages and applications mobile friendly?", answer: "The redesigned website and Devnet’s application-development approach both prioritize responsive experiences for desktop, tablet and mobile use." },
  { question: "Does Devnet work with banks and government organizations?", answer: "Devnet’s public website describes work across banks, telecoms, government organizations, land records, archives, libraries and other enterprise environments." },
  { question: "How do we request a demonstration?", answer: "Use the contact form, email info@devnetlimited.com or call +88 01713-044055 with the solution area, organization, expected users and business problem." },
  { question: "Is support available after implementation?", answer: "Devnet provides support coordination for deployed solutions. The exact service model, response targets and coverage should be agreed within the implementation or support arrangement." }
];

export default function FaqPage() {
  return <main><section className="faq-hero"><div className="container faq-hero-grid">
    <div data-reveal><span className="eyebrow">Frequently asked questions</span><h1>Clear answers before the project gets complex.</h1><p>Start here for common questions about products, services, implementation, integration and support.</p></div>
    <div className="faq-panel" data-reveal aria-label="Search the Devnet knowledge base">
      <div className="faq-panel-search"><Icon name="search" /><span>request a demonstration<i className="faq-cursor" /></span><b>⌘K</b></div>
      <div className="faq-panel-meta"><span>8 answers</span><span>Products · Services · Support</span></div>
      <div className="faq-panel-list">
        <div className="faq-panel-item"><div className="faq-panel-row"><span className="faq-q"><b>Q</b>What is DocuDEX?</span><i className="faq-plus" /></div></div>
        <div className="faq-panel-item open"><div className="faq-panel-row"><span className="faq-q"><b>Q</b>How do we request a demonstration?</span><i className="faq-plus minus" /></div>
          <p>Use the contact form, email <em>info@devnetlimited.com</em> or call with your solution area, organization and business problem.</p>
          <span className="faq-answer-tag"><Icon name="check" /> Answered</span>
        </div>
        <div className="faq-panel-item"><div className="faq-panel-row"><span className="faq-q"><b>Q</b>Can solutions integrate with existing systems?</span><i className="faq-plus" /></div></div>
      </div>
    </div>
  </div></section><section className="section faq-section"><div className="container faq-layout"><div className="faq-aside" data-reveal><span className="eyebrow">Need a specific answer?</span><h2>Talk to the team about your environment.</h2><p>Every institution has different volumes, rules, integrations and security needs.</p><Link className="button button-red" href="/contact">Ask Devnet <span>↗</span></Link></div><Accordion items={items} /></div></section></main>;
}
