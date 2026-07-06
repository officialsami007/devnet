import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display"
});
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { allContentPages, productNavGroups, serviceNav } from "@/data/site-content";

export const metadata: Metadata = {
  metadataBase: new URL("https://devnetlimited.com"),
  title: {
    default: "Devnet Limited — Digital Operations, Reimagined",
    template: "%s | Devnet Limited"
  },
  description: "Enterprise document management, process automation, intelligent capture, scanning, e-governance and AI solutions from Devnet Limited.",
  keywords: ["Devnet Limited", "DocuDEX", "document management", "process automation", "digital archiving", "Bangladesh"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Devnet Limited",
    title: "Devnet Limited — Digital Operations, Reimagined",
    description: "Secure enterprise content, workflow and digital transformation solutions."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const productGroups = productNavGroups.map((group) => ({
    title: group.title,
    items: group.items.map(({ navTitle, slug, category }) => ({ navTitle, slug, category }))
  }));
  const services = serviceNav.map(({ navTitle, slug, category }) => ({ navTitle, slug, category }));
  const searchItems = [
    ...allContentPages.map((page) => ({ title: page.navTitle, slug: page.slug, category: page.category, description: page.description })),
    { title: "About Devnet", slug: "about", category: "Company", description: "Vision, mission, leadership, team and certifications." },
    { title: "Career", slug: "career", category: "Company", description: "Culture, benefits and current opportunities at Devnet." },
    { title: "Contact", slug: "contact", category: "Company", description: "Talk to sales, support or the Devnet delivery team." },
    { title: "FAQ", slug: "faq", category: "Company", description: "Answers about solutions, implementation and support." }
  ];

  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <Header productGroups={productGroups} services={services} searchItems={searchItems} />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
