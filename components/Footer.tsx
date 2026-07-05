import Image from "next/image";
import Link from "next/link";
import { contactDetails, productPages, servicePages } from "@/data/site-content";
import { NewsletterForm } from "./NewsletterForm";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-column">
          <Link href="/" className="footer-logo"><Image src="/devnet-logo.png" alt="Devnet Limited" width={145} height={46} /></Link>
          <p>Enterprise document management, process automation, intelligent capture and digital transformation from Dhaka, Bangladesh.</p>
          <div className="footer-contact-quick">
            <a href={`tel:${contactDetails.cell.replace(/\s/g, "")}`}><Icon name="headset" /> {contactDetails.cell}</a>
            <a href={`mailto:${contactDetails.email}`}><Icon name="message" /> {contactDetails.email}</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          {productPages.slice(0, 7).map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.navTitle}</Link>)}
          <Link className="footer-view-all" href="/products">All products →</Link>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          {servicePages.map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.navTitle}</Link>)}
        </div>
        <div className="footer-column company-links">
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <NewsletterForm />
        </div>
      </div>
      <div className="container footer-address-row">
        <p><strong>Dhaka office</strong> {contactDetails.address}</p>
        <div><a href="https://www.facebook.com/devnetlimited" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.linkedin.com/company/devnet-limited" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Devnet Limited. All rights reserved.</span>
        <span className="color-system"><i /><i /><i /> 60 / 30 / 10 design system</span>
      </div>
    </footer>
  );
}
