# Hadeel Alharbi — Executive Portfolio

A premium, executive-level personal portfolio built for **Hadeel Alharbi, FMVA®** — Financial Analyst at Knowledge Economic City, specializing in investment and real estate development.

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
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Customization

**All content** lives in `src/data/portfolio.js`. Update names, experience, certifications, skills, projects, languages, achievements there — the entire site refreshes from one file.

Common edits:
- `profile.email` — replace placeholder with the real email
- `profile.cvUrl` — replace with the real CV path (drop the PDF in `/public/` and reference it as `/your-cv.pdf`)
- `profile.linkedin` — already set
- All text was rewritten executive-style; adjust voice as needed

## Theming

Colors live in `tailwind.config.js` under `colors.{ink, navy, gold}`. The dark/light toggle is wired through `useTheme()` and persists in localStorage with a system-preference fallback. Theme transitions are smooth across the entire UI.

## Performance & SEO

- Manual code-splitting for `framer-motion` and `lucide-react` (see `vite.config.js`)
- Preconnected Google Fonts
- Schema.org Person JSON-LD in `index.html`
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

## License

Private — all rights reserved to Hadeel Alharbi.
