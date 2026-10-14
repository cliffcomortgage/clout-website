# Clout

Brand, content strategy, and skeleton website for **Clout** — the wholesale Non-QM and direct-to-investor channel of [Cliffco Mortgage Bankers](https://cliffcomortgage.com) (NMLS #65328).

## Repo layout

```
clout-website/
├── branding/                  Brand exploration & locked assets
│   ├── icon/                   Icon variant set (Variant B locked as primary)
│   ├── logo/                   Wordmark variant set (Variant B locked as primary)
│   ├── palette.html|pdf|png    Locked brand palette
│   └── ...
├── seo-aeo-research/          SEO + AEO playbook (6 docs, ~3,650 lines)
│   ├── STRATEGY.md             Top-level roadmap
│   ├── 01-technical-seo.md
│   ├── 02-aeo-llm-optimization.md
│   ├── 03-ymyl-eeat-trust.md
│   ├── 04-local-seo-territories.md      Per-state deep dives (NY, NJ, PA, FL, CT, TX)
│   ├── 05-product-content-strategy.md   Per-product cluster strategy (10 products)
│   └── 06-skeleton-architecture-spec.md Skeleton-site build spec
├── website/                   Astro skeleton site
│   ├── src/                    Pages, layouts, components, schema generators
│   ├── public/                 robots.txt · llms.txt · brand SVGs
│   ├── astro.config.mjs        Dual target (cloutwmb.com prod, GitHub Pages preview)
│   └── package.json
├── scripts/
│   └── postbuild-pages.mjs    Rewrites internal hrefs for the /clout-website Pages base path
└── .github/workflows/
    └── deploy-pages.yml        CI deploy to GitHub Pages on push to main
```

## Brand

**Locked palette — teal anchor + rust accent**

| Role | Hex |
|---|---|
| Primary brand | `#018076` |
| Primary deep | `#004146` |
| Bright accent | `#03BFB5` |
| Warmth accent (5% editorial) | `#C4572A` |
| Neutral dark | `#1A1F22` |
| Surface light | `#EFF5F9` |

**Logo + icon primary variant:** B — teal + dark (`#018076` + `#1A1F22`)

See `branding/palette.pdf` and the variant overviews under `branding/{logo,icon}/overview.pdf`.

### Website palette — inverse of Cliffco

The palette above is the brand guide and still governs print. The **website**
runs a different system: Cliffco and Clout are sister sites, and
[cliffco-site](https://cliffco-site.vercel.app/) is a black-on-white monochrome
design. Clout is the same system inverted — white on black.

| Role | Hex | Note |
|---|---|---|
| Page background | `#0D0D0D` | same black as Cliffco's ink |
| Section band | `#151517` | alternating band |
| Raised panel | `#1C1A20` | card hover, dropdowns |
| Primary text | `#FFFFFF` | |
| Body copy | `#C2C4C4` | |
| Muted / labels | `#8D9090` | replaced the copper accent |
| Hairline | `#2A2A2D` | |
| Teal accent | `#03BFB5` | the only colour; rationed |

Teal is the one thing that distinguishes Clout from Cliffco visually, so it is
used sparingly: eyebrow rules, stat figures, link hovers, focus rings. It never
fills a button or a card. The copper accent `#C4572A` is retired on the web.

Three pages (brokers, TPO Connect, pricing) carry a `.band-invert` section: a
**solid white band on the black page**, mirroring Cliffco's solid-black bands on
its white page. It was `.band-dark` while the site was light.

**Typography:** the site loads the same stack as cliffco-site — **Outfit**
(300–800) for headings and body, **IBM Plex Mono** for eyebrows and small
uppercase labels, Montserrat 600 for the logo. Grift and Jitzu are no longer
used on the web: their trial licences do not cover web use, and matching
Cliffco's letterforms is what makes the two sites read as one family. The font
files remain under `website/public/fonts/` and `branding/` for print.

## Website — local dev

```sh
cd website
npm install
npm run dev      # http://localhost:4321
npm run build    # → website/dist/
npm run preview
```

## Website — Pages preview deploy

Push to `main` triggers `.github/workflows/deploy-pages.yml`, which builds with `DEPLOY_TARGET=pages` (Astro config picks up the `/clout-website` base path) and deploys to:

> **https://rafetangorra-tech.github.io/clout-website/**

## Coverage

- **States:** NY, NJ, PA, FL, CT, TX
- **Products (current site):** DSCR, Bank Statement, 1099 Only, Foreign National, Asset Qualifier, Non-Agency Second Home, P&L Only, Lite Doc, Written VOE Only, Full Doc Non-QM
- **Audiences:** Mortgage brokers (wholesale) + Real estate investors (direct)

## Status

Skeleton-stage. DSCR pillar is built out as the AEO reference page; the other nine product pillars and six state hubs are stubs that establish IA + schema + URL structure. Full content per the strategy in `seo-aeo-research/STRATEGY.md` is in progress.
