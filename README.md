# Anand Ramnarain — Portfolio

Live: https://anand-ramnarain-27.github.io/Portfolio/

Personal portfolio built with React, Vite, Tailwind, Framer Motion and React Three Fiber.

## Structure

```
src/
├── App.jsx                     Router (mounted under /Portfolio/ for GitHub Pages)
├── pages/
│   ├── Home.jsx                Single-page home: hero → about → … → contact
│   └── ProjectPage.jsx         Case study at /projects/:slug (?view=technical)
├── components/
│   ├── case-study/             Building blocks for ProjectPage (header, views,
│   │                           media, code blocks, diagrams, results table)
│   ├── canvas/                 React Three Fiber scenes (hero, contact, stars)
│   └── *.jsx                   Home-page sections and shared UI
├── constants/
│   ├── index.js                Nav, experience, education, tech stack, project cards
│   ├── caseStudies.js          Case-study list + data shape (JSDoc typedefs)
│   └── case-studies/           One module per case study, with its own media imports
├── hooks/                      Shared hooks (orbiting particle simulation)
├── hoc/SectionWrapper.jsx      Section shell with anchor + reveal animation
└── utils/                      Motion variants, formatting helpers
```

## Adding a case study

1. Create `src/constants/case-studies/<name>.js` (copy an existing one). Put its
   media in `src/assets/<name>/` and import it there.
2. Add it to the list in `src/constants/caseStudies.js`. List order is page order.
3. On the matching card in `src/constants/index.js`, set `caseStudy: "<slug>"`.
   Cards with a case study show under **Featured**; the rest under **More projects**.
4. Leave any link you don't have as `""` and it's hidden automatically.

Video clips: convert GIFs to MP4 with a poster frame (they're ~10–20× smaller):

```bash
ffmpeg -i in.gif -an -vf "fps=30,scale='min(1280,iw)':-2,format=yuv420p" \
  -c:v libx264 -crf 27 -movflags +faststart out.mp4
ffmpeg -ss 1 -i out.mp4 -frames:v 1 -vf scale=960:-2 out-poster.webp
```

## Code style

- `npm run lint`: ESLint (React, hooks and fast-refresh rules).
- `npm run format`: Prettier, with the settings in `.prettierrc.json`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to the `gh-pages` branch.

`npm run build` also copies `index.html` to `404.html`, so GitHub Pages serves the app for deep links such as `/Portfolio/projects/phoenix-engine`.
