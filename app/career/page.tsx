import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Career", description: "Explore Devnet culture, workplace benefits and current opportunities." };

export default function CareerPage() {
  const benefits = [
    ["building", "Excellent environment", "A professional setting designed for focused work, collaboration and growth."],
    ["wallet", "Two festival bonuses", "Structured employee benefits that recognize important annual occasions."],
    ["spark", "Lunch, tea & snacks", "Practical day-to-day workplace support for the team."],
    ["clock", "Leave encashment", "Employee leave benefits managed through organizational policy."],
    ["person", "Prayer zone", "A dedicated space that supports employee wellbeing and daily needs."],
    ["globe", "Annual tour", "Team experiences that strengthen relationships beyond project work."]
  ];
  return (
    <main>
      <section className="career-hero">
        <div className="container career-hero-grid">
          <div data-reveal><span className="eyebrow">Work with us</span><h1>Build systems that make complex organizations easier to run.</h1><p>Join a team working across document intelligence, workflow automation, e-governance, scanning, applications, data and AI.</p><a className="button button-red" href="#openings">View current openings <span>↓</span></a></div>
          <div className="career-visual" data-reveal><div className="career-card card-one"><Icon name="code" /><b>Engineering</b><span>Products and platforms</span></div><div className="career-card card-two"><Icon name="design" /><b>Design</b><span>Clear enterprise experiences</span></div><div className="career-card card-three"><Icon name="headset" /><b>Delivery</b><span>Customer outcomes</span></div><div className="career-center"><strong>DEVNET</strong><span>Build · learn · improve</span></div></div>
        </div>
      </section>

      <section className="section career-culture"><div className="container"><div className="section-heading split" data-reveal><div><span className="eyebrow">Our culture</span><h2>Ambitious goals, practical teamwork and a constant drive to improve.</h2></div><p>Devnet’s work environment values accountability, collaboration, curiosity and the discipline required for enterprise delivery.</p></div><div className="culture-grid"><article data-reveal><span>01</span><h3>Own the outcome</h3><p>Understand the user, the process and the operational result—not only the assigned task.</p></article><article data-reveal><span>02</span><h3>Learn continuously</h3><p>Stay current with technology while strengthening the fundamentals that make systems reliable.</p></article><article data-reveal><span>03</span><h3>Collaborate clearly</h3><p>Share context, ask useful questions and make decisions visible to the team.</p></article></div></div></section>

      <section className="section career-benefits"><div className="container"><div className="section-heading" data-reveal><span className="eyebrow">Why work at Devnet</span><h2>Benefits that support the work and the people doing it.</h2></div><div className="career-benefit-grid">{benefits.map(([icon,title,description], index)=><article key={title} data-reveal><span><Icon name={icon} /></span><small>{String(index+1).padStart(2,"0")}</small><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="section openings-section" id="openings"><div className="container openings-shell" data-reveal><div><span className="eyebrow">Current jobs</span><h2>No current offer</h2><p>The original Devnet career page currently lists no active vacancy. You can still share a concise profile for future consideration.</p></div><div><a className="button button-red" href="mailto:info@devnetlimited.com?subject=Future%20Career%20Opportunity">Send your profile <span>↗</span></a><Link className="button button-outline" href="/about">Learn about Devnet</Link></div></div></section>
    </main>
  );
}
