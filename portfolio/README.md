# Portfolio — Sudipta Basak

A modern, dark‑themed developer portfolio built with **React + Vite**, styled with
**Tailwind CSS** and animated with **Framer Motion**.

![React](https://img.shields.io/badge/React-18-149eca) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Design

- Deep charcoal background (`#1c1c22`) with a bright mint accent (`#00ff99`)
- Grid hero with a radial mask + an avatar framed by a rotating dashed ring
- Rounded‑full outline buttons and circular social icons that fill on hover
- Animated page‑load "stairs" transition, scroll reveals and stat counters
- Fully responsive with a mobile nav drawer

## Sections

Hero · Stats · Experience (timeline) · Skills · Projects · Education,
Achievements & Publications · Contact · Footer.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint      # lint
```

## Tech

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (tokens in [`tailwind.config.js`](tailwind.config.js))
- **Framer Motion** for animation · **react-icons** (Feather set)
- Fonts: **Sora** (display) + **JetBrains Mono** (labels)

## Editing content

All résumé content lives in [`src/data/portfolio.js`](src/data/portfolio.js) —
profile, stats, experience, projects, skills, education, achievements and
publications. Update it there and every section refreshes automatically.
The résumé PDF is served from `public/resume-twocolumn.pdf`.

## Structure

```
src/
├── data/portfolio.js      # all content
├── components/
│   ├── ui.jsx             # Reveal, Section, SectionHeading, Socials, Counter
│   ├── Stairs.jsx         # page-load transition
│   ├── Header.jsx  Hero.jsx  Stats.jsx
│   ├── Experience.jsx  Skills.jsx  Projects.jsx
│   ├── Education.jsx  Contact.jsx  Footer.jsx
├── App.jsx                # composes the sections
└── index.css              # Tailwind + design tokens
```

---

Built by [@sudiptab2100](https://github.com/sudiptab2100).
