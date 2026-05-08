# Hadeel Alharbi — Executive Portfolio

A premium, executive-level personal portfolio for **Hadeel Alharbi, FMVA®** — Financial Analyst at Knowledge Economic City (Investment Department), specializing in real estate and hospitality investment, financial modeling, and feasibility analysis.

> **Headline:** Financial Analyst | Investment | Real Estate Development | Financial Modeling | Feasibility Analysis

## Stack

- **React 18** + **Vite** — fast, modern dev experience
- **Tailwind CSS** — luxury custom palette (navy, gold, ink)
- **Framer Motion** — smooth, executive-grade animations
- **lucide-react** — refined iconography
- **Cormorant Garamond** + **Plus Jakarta Sans** + **JetBrains Mono** — editorial typography

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
.
├── public/
│   └── favicon.svg              # HA monogram favicon
├── src/
│   ├── components/              # Reusable building blocks
│   │   ├── AnimatedBackground.jsx
│   │   ├── Counter.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── SectionHeader.jsx
│   ├── sections/                # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js         # ALL editable content lives here
│   ├── hooks/
│   │   └── index.js             # useTheme, useCountUp, useActiveSection, useScrollPosition
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                # Tailwind + custom luxury components
├── index.html                   # SEO meta + JSON-LD schema
├── LINKEDIN.md                  # Paste-in copy for LinkedIn profile
├── README.md
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Verified Content (from CV)

All content is sourced from Hadeel's verified CV and rewritten in executive-grade voice. Key facts wired into `src/data/portfolio.js`:

- **Email:** hadeelalraddaddii@gmail.com
- **Phone:** +966 59 418 7282
- **Location:** Madinah, Saudi Arabia
- **LinkedIn:** linkedin.com/in/hadeelalraddadi
- **Current role:** Financial Analyst, Knowledge Economic City — Investment Department (Aug 2024 – Present)
- **Education:** B.Sc. Finance, University of Prince Mugrin (GPA 3.7/4.0)
- **Certifications:** FMVA® (CFI, 2025), Real Estate Investment & Development (Rice Business, 2025), Power BI (2024), IELTS 6.5 (2020)

## One Thing to Do Before Deploying

Drop the actual CV PDF into `public/` as `Hadeel-Alharbi-CV.pdf` so the "Download CV" button works. (Alternatively change `profile.cvUrl` in `src/data/portfolio.js` to wherever you host it.)

## Customization

**All content** lives in `src/data/portfolio.js`. Names, experience bullets, certifications, skills, projects, languages, achievements — the entire site refreshes from one file.

## Theming

Colors live in `tailwind.config.js` under `colors.{ink, navy, gold}`. Dark/light toggle is wired through `useTheme()` and persists in localStorage with a system-preference fallback. Theme transitions are smooth across the entire UI.

## Performance & SEO

- Manual code-splitting for `framer-motion` and `lucide-react` (see `vite.config.js`)
- Total bundle: ~107 kB gzipped
- Preconnected Google Fonts
- Schema.org Person JSON-LD with credentials and organization in `index.html`
- Open Graph + Twitter Card meta tags
- Reduced-motion media query respected throughout

## Deployment (Vercel)

1. Push this repository to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no configuration needed
4. Add the custom domain (e.g. `hadeelalharbi.com`) in project settings

For other static hosts (Netlify, Cloudflare Pages), the `dist/` folder is the deploy target after `npm run build`.

## Design Notes

- **Palette**: Deep navy + soft gold accents on a near-white / near-black canvas. The gold gradient (`#e0bf6a → #c89230 → #875722`) is the only chromatic accent — used sparingly for impact.
- **Typography**: Cormorant Garamond for editorial display headings (italic emphasis), Plus Jakarta Sans for body text, JetBrains Mono for metadata. Tight letter-spacing on display, generous line-height on body.
- **Motion**: Staggered hero reveal, scroll-triggered fades, count-up statistics, hover micro-interactions, animated skill bars, golden ribbon corners on featured cards.
- **Layout**: Editorial split layouts, asymmetric timeline for experience, layered glass + grid background, generous negative space.

## LinkedIn Profile

See `LINKEDIN.md` for the executive-grade rewritten content (headline, About, experience bullets, skills list) ready to paste directly into LinkedIn.

## License

Private — all rights reserved to Hadeel Alharbi.
