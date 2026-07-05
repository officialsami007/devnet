import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return <main className="not-found"><div className="not-found-visual"><Icon name="file"/><span>404</span></div><span className="eyebrow">Page not found</span><h1>This document is not in the workspace.</h1><p>The page may have moved, or the address may be incomplete.</p><div><Link className="button button-red" href="/">Return home</Link><Link className="button button-outline" href="/products">Explore products</Link></div></main>;
}
