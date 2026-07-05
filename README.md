# Devnet Limited — Complete Next.js Redesign

A production-oriented, fully responsive redesign of the public Devnet Limited website. The visual system follows the requested **60 / 30 / 10** balance:

- **60% white and near-white** for clarity and whitespace
- **30% Devnet green (`#72bf44`)** as the primary brand surface
- **10% DocuDEX red (`#ed2e32`)** for calls to action and high-value accents

The site uses the Next.js App Router, TypeScript, reusable data-driven page templates, responsive mega navigation, mobile-specific layouts, animated product visuals, searchable catalogs, contact/newsletter APIs, SEO metadata, sitemap and robots output.

## Included routes

### Core

- `/` — redesigned homepage
- `/products` — searchable and filterable product catalog
- `/services` — searchable service catalog
- `/about`
- `/career`
- `/contact`
- `/support`
- `/faq`

### Products

- `/docudex-edms`
- `/docudex-workflow`
- `/capture-software`
- `/record-management`
- `/agile-audit`
- `/hrms`
- `/invoice-processing`
- `/online-proctoring`
- `/library-management`
- `/e-kyc-and-cim-solution`
- `/land-management-solution`
- `/rpa`
- `/document-scanner`
- `/robotic-scanner`
- `/book-map-scanner`
- `/microfilm-scanners`

### Services

- `/digital-archiving`
- `/application-development`
- `/mobile-app-development`
- `/data-processing`
- `/bpo`
- `/banking-solution`
- `/ai-and-machine-learning`

There are also redirect aliases for older/common paths such as `/document-management`, `/process-automation`, `/process_automation` and `/hris`.

## Run locally

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm run start
```

The supplied project was checked with TypeScript and successfully built into **37 generated routes**.

## Contact form

The form works in demo mode without configuration. In demo mode, validated submissions are written to the server log rather than emailed.

To send real email, copy `.env.example` to `.env.local` and configure:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=info@devnetlimited.com
CONTACT_FROM_EMAIL=Devnet Website <website@your-verified-domain.com>
```

Restart the development server after changing environment variables.

## Architecture

```text
app/
  [slug]/page.tsx          Data-driven product/service pages
  api/contact/route.ts     Validated contact endpoint
  api/newsletter/route.ts  Newsletter endpoint
  products/                Product catalog
  services/                Service catalog
  about/ career/ contact/ faq/ support/
components/
  AnimatedHeroVisual.tsx
  CatalogGrid.tsx
  ContactForm.tsx
  Header.tsx
  Footer.tsx
  SolutionPage.tsx
  ...
data/
  site-content.ts          Central content source for all product/service pages
public/
  devnet-logo.png
```

## Customization

- Brand tokens and all responsive rules: `app/globals.css`
- Product and service content: `data/site-content.ts`
- Homepage composition: `app/page.tsx`
- Shared detail-page composition: `components/SolutionPage.tsx`
- Navigation: `components/Header.tsx`

The product/service pages are generated from shared structured data. Adding a new entry to `data/site-content.ts` automatically makes it available to the dynamic detail route and global search; add it to the appropriate navigation export when it should appear in the menu.

## Mobile behavior

The mobile layout is not a simple desktop shrink. It includes:

- compact, purpose-built workflow animation in the hero
- accessible accordion navigation
- single-column content where scanning matters
- horizontally scrollable proof cards and filters where useful
- simplified dashboard panels and touch-friendly controls
- reduced visual density and section-specific spacing
- support for `prefers-reduced-motion`

## Content note

The page structure, service names, company facts and solution themes were adapted from the public Devnet Limited website and rewritten into a consistent modern information architecture. Review organization-specific claims, personnel and contact details before production deployment.
