# eco-slate-www Development Plan

This document provides actionable tasks and milestones for the current migration to a modern, scalable, and hybrid-ready site, following the high-level path in DEV_PATH.md.

## Milestones & Actionable Tasks

### Milestone 1: Project Preparation

- [ ] Backup the current eco-slate-www site
- [ ] Create a new branch (astro-migration)
- [ ] Review and clean up existing assets and content

### Milestone 2: Astro Project Setup

- [ ] Install Node.js (if not already installed)
- [ ] Initialize a new Astro project (`npm create astro@latest`)
- [ ] Choose minimal template and complete setup prompts

### Milestone 3: Content Migration

- [ ] Move static assets (images, CSS, JS) to `public/`
- [ ] Convert main HTML pages to `.astro` files in `src/pages/`
- [ ] Refactor reusable elements (header, footer, nav) into `src/components/`
- [ ] Update internal links and references

### Milestone 4: Add Dynamic/Hybrid Features

- [ ] Identify pages/components needing dynamic content
- [ ] Add client-side JS or integrations (React, Vue, etc.) as needed
- [ ] Plan for future API/serverless integration

### Milestone 5: Local Testing

- [ ] Run `npm run dev` and verify site at `http://localhost:4321`
- [ ] Test navigation, assets, and dynamic features

### Milestone 6: Deployment

- [ ] Push astro-migration branch to GitHub
- [ ] Set up free hosting (Netlify or Vercel)
- [ ] Configure build command (`npm run build`) and output directory (`dist`)
- [ ] Deploy and verify live site

### Milestone 7: Documentation & Handover

- [ ] Write/update README.md with setup, build, and deployment instructions
- [ ] Document any custom scripts or integrations
- [ ] Review and finalize migration

---

This plan is designed to be updated as tasks are completed or new requirements arise. For the high-level migration path and rationale, see DEV_PATH.md.
