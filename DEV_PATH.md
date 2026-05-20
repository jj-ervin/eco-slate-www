# eco-slate-www Development Path

This document provides the high-level migration path and strategic direction for eco-slate-www. For actionable tasks and milestones, see DEV_PLAN.md.

## Migration Path Overview

1. **Framework/Generator Selection:**

- Recommended: Astro (free, modern, static/hybrid, easy to upgrade)
- Alternatives: Next.js, Eleventy, Hugo

1. **Repository Preparation:**

- Backup current site, create migration branch

1. **Astro Project Setup:**

- Install Node.js, initialize Astro, minimal template

1. **Content Migration:**

- Move static assets to `public/`, convert pages to `.astro`, refactor components

1. **Dynamic/Hybrid Features:**

- Add client-side JS, integrations, plan for APIs/serverless

1. **Local Testing:**

- Run and verify site locally

1. **Free Hosting Deployment:**

- Deploy to Netlify or Vercel, configure build/output

1. **Documentation:**

- Add/update README.md

1. **Upgrade Planning:**

- Plan for SSR, paid hosting, or framework migration as needed

---

## Summary Table

| Step | Focus | Free? | Upgrade Path |
|------|-------|-------|-------------|
| 1    | Choose Astro | Yes | SSR, paid hosts |
| 2    | Prepare repo | Yes | — |
| 3    | Set up Astro | Yes | — |
| 4    | Move content | Yes | — |
| 5    | Add dynamic features | Yes | SSR, APIs |
| 6    | Test locally | Yes | — |
| 7    | Deploy (Netlify/Vercel) | Yes | Paid plans, custom domains |
| 8    | Add README | Yes | — |
| 9    | Upgrade as needed | — | Next.js, custom backend, etc. |

---

**For actionable tasks and current milestones, see [DEV_PLAN.md](DEV_PLAN.md).**

---

This plan provides a clear, free-first path for modernizing and scaling eco-slate-www, with flexibility for future enhancements and hosting upgrades.
