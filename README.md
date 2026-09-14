# Hai Do — React Portfolio

Personal resume portfolio built with React and JavaScript, hosted on GitHub Pages.

Website: https://harrydo15.github.io/hai-do-portfolio/

## Run locally

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm run lint
npm run build
npm run preview
```

The build prerenders the React page to HTML, then hydrates it in the browser. The deployable static files are in `dist/`. No backend or paid hosting is needed.

## Update

- `src/App.jsx`: resume content and sections.
- `src/styles.css`: theme and responsive layout.
- `public/resume.pdf`: downloadable resume.
- `public/hai-portrait.webp`: optimized profile photo, converted from the supplied HEIC image.
- `index.html`: page and social metadata.
- `vite.config.js`: base URL (currently `/hai-do-portfolio/`).

Push to `main` to deploy automatically through GitHub Actions. Repository Settings → Pages must use GitHub Actions as its source. If you change the repository name or domain, also update the base path, canonical/social URLs, robots.txt, and sitemap.xml.

The website and repository are public. The downloadable resume includes the original contact details. Work highlights summarize professional experience; the unresolved NTU graduation date from the resume is omitted.

## Design and interactions

Dark portfolio layout inspired by benscott.dev, implemented independently with Hai Do’s content and green accents. The intro uses an animated canvas with a pause control and respects reduced-motion preferences. Animation pauses offscreen and when the tab is hidden.

The contact form validates fields and opens an email draft addressed to Hai; it does not submit to a third-party form service. Visitors review and send the email in their own mail app.
