What's changed (Dec 30, 2025)

Overview
- Added an interactive 3D hero built with `@react-three/fiber` and `@react-three/drei` (procedural abstract model). The hero is in `src/components/three/HeroCanvas.jsx` and `AbstractModel.jsx`.
- Added motion and micro-animations using `framer-motion` (Hero, Navbar, Projects cards).
- Polished the UI with the Inter font, a modern color palette, and updated Tailwind settings (`tailwind.config.js`).
- Added a premium CTA and a `Testimonials` section in `src/components/Testimonials.jsx`.
- Optimizations: lazy-loaded project images and improved accessibility (aria-labels on CTAs).

How to run
1. cd frontend
2. npm install (already includes `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`)
3. npm run dev

Notes
- If you add large GLTF/GLB models, host them on a CDN or optimize them with tools like `gltfpack` to reduce load time.
- Consider adding `@react-three/postprocessing` for subtle bloom/glow effects on premium designs.
- If you want a custom 3D model instead of the procedural abstract model, replace `AbstractModel.jsx` with a `useGLTF` loader and a `.glb` asset.

Next steps
- Add case-study pages with metrics and downloadable PDFs
- Add an optional booking integration (Calendly) for premium calls
- Add Lighthouse performance fixes (image optimization, critical CSS)

Recent fixes (Dec 30, 2025)
- Fixed a JSX closing tag issue and improved `Navbar` with a modern glass style and animated entry.
- Replaced the abstract procedural model with an interactive globe and orbiting data dots (`src/components/three/AbstractModel.jsx`).
- Fixed navigation rendering bug by adding an `ErrorBoundary` and adding top padding to the main content to prevent the navbar from overlapping component headings (see `src/components/ErrorBoundary.jsx` and `src/App.jsx`).
- Modernized the `Projects` view with cleaner cards, overlay CTAs, and improved layout for high-end presentation.
- Updated the `Projects` section background to white (removed gray page background) and added a subtle top border to improve visual contrast and readability.
- Reverted `Projects`, `Blogs` and `Testimonials` to use the same background as the Home section (removed white backgrounds and borders) to maintain a consistent site background per preference.
- Modernized several pages and components: `About`, `Blogs`, `Contact`, and `Skills` (Framer Motion entrances, updated cards, accessible CTA buttons, and performance improvements).
- `Blogs` now supports server-side content at `/api/blogs`, and falls back to local sample posts when the API is unavailable.
- Fixed navigation issues: added `id="contact"` to contact section and added a scroll-on-activeTab `useEffect` in `src/App.jsx` to ensure the app scrolls to a section after the component mounts (fixes cases where the element isn't present at the time of the navbar click).
