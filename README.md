# CoopOS — HomesteadLabs Website

The corporate website for HomesteadLabs. Built on [Astro](https://astro.build) with [Tailwind CSS](https://tailwindcss.com). Everything runs on CoopOS.

---

## Quick start

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

You'll need [Node.js 20+](https://nodejs.org) installed.

---

## Project structure

```
CoopOS/
├── src/
│   ├── components/        # Reusable UI (Header, Footer, ProductCard, SuiteCard)
│   ├── data/
│   │   └── catalog.ts     # ★ Single source of truth for products + suites
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   ├── about.astro              # About page
│   │   ├── careers.astro            # Careers (the joke)
│   │   ├── watch.astro              # Episode archive
│   │   ├── patreon.astro            # Patreon tiers
│   │   ├── products/
│   │   │   ├── index.astro          # All products
│   │   │   └── [slug].astro         # Dynamic product pages
│   │   └── suites/
│   │       ├── index.astro          # All suites
│   │       └── [slug].astro         # Dynamic suite pages
│   └── styles/
│       └── global.css     # Design system + Tailwind base
├── public/                # Static assets (favicon, images)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Editing content

**To update products, suites, or Patreon tiers:** edit `src/data/catalog.ts`. That's the single source of truth — every page reads from it.

**To add a new product:**
1. Add an entry to the `products` array in `catalog.ts`
2. If it belongs to a suite, add its slug to the suite's `modules` array
3. The dynamic `/products/[slug]` route will automatically generate its page

**To change copy on a static page** (homepage, about, etc.): edit the corresponding `.astro` file in `src/pages/`. The text is inline — no separate CMS.

---

## Design system

**Colors** (in `tailwind.config.mjs`):
- `ink` — near-black (#0A0A0A) for text and dark surfaces
- `paper` — off-white (#FAFAF7) for default background
- `paper-warm` — slightly warmer cream for alt sections
- `ember` — burnt orange (#C2410C), the brand accent

**Typography** (in `src/styles/global.css`):
- **Display:** Instrument Serif (Google Fonts) — for headlines
- **Body:** Geist — for everything else
- **Mono:** JetBrains Mono — for technical accents and eyebrows

**Utility classes:**
- `.text-display` — Instrument Serif with tight tracking
- `.text-eyebrow` — uppercase mono labels
- `.btn-primary` / `.btn-outline` — buttons
- `.pill` / `.pill-live` / `.pill-soon` — status pills
- `.container-prose` — max-width content container
- `.grain` — adds subtle paper-grain texture (use on a relative parent)
- `[data-stagger]` — staggered fade-up animation on direct children

---

## Deployment

The simplest path is **Cloudflare Pages**:

1. Push this repo to GitHub (it's already at `github.com/TheHomesteadLabs/CoopOS`)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com), click "Create a project"
3. Connect to GitHub → select the `CoopOS` repo
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 20
5. Click Deploy
6. Once deployed, go to Custom Domains and add `homesteadlabs.ca`
7. In GoDaddy, change the nameservers for `homesteadlabs.ca` to the Cloudflare nameservers it gives you

Total deploy time: ~5 minutes for the first push, ~30 seconds for subsequent pushes.

**Alternative: Netlify** — same process, different host. Either works.

---

## Notes

- All product/suite data lives in `src/data/catalog.ts` — edit there, it propagates everywhere
- The site is static (no database, no API) — every change requires a rebuild + redeploy
- Cloudflare Pages auto-rebuilds on every push to `main`

---

*HomesteadLabs · Tatlock, ON · v1.0.0*
