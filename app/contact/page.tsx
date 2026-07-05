import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { contactDetails } from "@/data/site-content";

export const metadata: Metadata = { title: "Contact", description: "Contact Devnet Limited for solutions, sales, support and digital-transformation projects." };

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero"><div className="container contact-hero-grid">
        <div data-reveal><span className="eyebrow">Let’s explore what Devnet can do for you</span><h1>Start with the challenge. We’ll help shape the path forward.</h1><p>Tell us about your documents, workflows, users, data, systems or scanning requirements. The right Devnet team will follow up.</p></div>
        <div className="contact-panel" data-reveal aria-label="How a request reaches the right Devnet team">
          <div className="contact-panel-head"><div><span className="live-dot" /><strong>Message routing</strong></div><span className="contact-panel-status">Avg. reply · 1 business day</span></div>
          <div className="contact-thread">
            <div className="contact-bubble inbound"><span className="contact-avatar">You</span><div><b>New enquiry</b><p>“We need to digitise 30M+ pages a year and automate approvals.”</p></div></div>
            <div className="contact-route"><i /><span>Routing to the right team</span><i /></div>
            <div className="contact-teams">
              <span className="contact-team active"><Icon name="file" />Document management</span>
              <span className="contact-team"><Icon name="workflow" />Automation</span>
              <span className="contact-team"><Icon name="scan" />Scanning</span>
            </div>
            <div className="contact-bubble outbound"><span className="contact-avatar green"><Icon name="headset" /></span><div><b>Solutions team</b><p>Matched to DMS &amp; workflow specialists. We’ll follow up shortly.</p><em><Icon name="check" /> Assigned</em></div></div>
          </div>
          <div className="contact-panel-foot"><span><Icon name="shield" /> Confidential</span><span><Icon name="clock" /> Same-day acknowledgement</span></div>
        </div>
      </div></section>
      <section className="section contact-main"><div className="container contact-layout"><div className="contact-form-shell" data-reveal><div className="form-heading"><span className="eyebrow">Get in touch</span><h2>Share your requirements</h2><p>Fields marked with * are required.</p></div><ContactForm /></div><aside className="contact-sidebar" data-reveal><div className="contact-sidebar-top"><span className="eyebrow light">Direct contact</span><h2>Talk to the right team.</h2><p>Reach Devnet for solution consultations, sales questions or support coordination.</p></div><div className="contact-methods"><a href={`tel:${contactDetails.cell.replace(/\s/g,"")}`}><span><Icon name="headset" /></span><div><small>Cell</small><strong>{contactDetails.cell}</strong></div></a><a href={`mailto:${contactDetails.email}`}><span><Icon name="message" /></span><div><small>Email</small><strong>{contactDetails.email}</strong></div></a><div><span><Icon name="building" /></span><div><small>Office</small><strong>{contactDetails.address}</strong></div></div></div></aside></div></section>
      <section className="section contact-principles"><div className="container"><div className="section-heading split" data-reveal><div><span className="eyebrow">How Devnet engages</span><h2>Understand first. Design around reality. Deliver collaboratively.</h2></div><p>A practical approach for complex institutional and enterprise requirements.</p></div><div className="contact-principle-grid">{[["users","Client-centered solutions","Begin with business goals, pain points, users and operational constraints."],["spark","Bench strength","Bring trained specialists across products, engineering, data and delivery."],["chart","Flexible and cost-efficient","Shape scope and implementation around business value and practical priorities."],["workflow","Collaborative approach","Work across client departments and Devnet disciplines for a complete view."]].map(([icon,title,desc],i)=><article key={title} data-reveal><small>{String(i+1).padStart(2,"0")}</small><Icon name={icon}/><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="office-map-section"><div className="container office-map-shell" data-reveal><div><span className="map-pin"><Icon name="building" /></span><div><small>Devnet Limited</small><strong>Kawran Bazar, Dhaka</strong><p>{contactDetails.address}</p></div></div><div className="map-grid"><i/><i/><i/><i/><span>DEVNET</span></div></div></section>
    </main>
  );
}
