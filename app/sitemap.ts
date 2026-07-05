import type { MetadataRoute } from "next";
import { allContentPages } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://devnetlimited.com";
  const staticPages = ["", "/products", "/services", "/about", "/career", "/contact", "/faq", "/support"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...allContentPages.map((page) => ({ url: `${base}/${page.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}
