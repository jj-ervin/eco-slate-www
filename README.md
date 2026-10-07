# eco-slate-www

The public preview website for the eco ecosystem: an Osprey/Kinjuu landing
page, documentation/download previews, a dashboard hub, and an Oil Intelligence
interface with fixed sample data. This is separate from eco-slate's draft
governance/specification repository.

## Source and commands

Astro pages live in `src/pages/`; browser modules, CSS and icons live in `public/`.
Node >=22.12.0 is required. Use the committed dependency lock:

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The six built routes are `/`, `/docs/`, `/downloads/`, `/dashboard/`,
`/dashboard/oil/`, and `/oil/` (redirect). Production output is `dist/`.
Root HTML/scripts and `dashboards/` are retained earlier static prototypes;
they are not automatically included in the Astro output. The package's
`astro-temp` name and 0.0.1 version remain scaffold metadata, not a release claim.

## Live hosting snapshot — 2026-10-06

eco-slate.org responds from Netlify. Live Home, Docs and Oil page hashes matched
the exact pre-reconciliation main build. This verifies payload correspondence,
not an authenticated Netlify deployment ID or build configuration.
GitHub separately records a successful legacy Pages build from main/root and
CNAME eco-slate.org. A green Pages job does not establish Astro deployment.
No Netlify/DNS/Pages configuration or live content was changed by this audit.

## Implemented and partial surfaces

- The dashboard hub and Oil sample interface are implemented. Prices, alert
  ages, risk scores and chokepoint text come from fixed `oil-data.js` examples;
  they are not a live intelligence feed. Live feeds remain planned. The unused
  `oil-news.js` example has a placeholder key and is not an operational feed.
- Docs and Downloads are previews, not complete documentation or release catalogs.
  Home/Docs/Downloads page metadata and framing were repaired locally, docs
  section targets added, and the missing foreground color token corrected.
- Personal OS, Agrilogik and Osprey Analytics dashboard cards remain coming-soon
  placeholders. Sign-in/trial and some navigation anchors are prototypes, with
  no authentication/subscription or complete navigation workflow established.
- The Oil preview is not proven to consume Signal Radar or EdgeLab. Signal
  Radar is evidence-first event intelligence; EdgeLab is downstream market-edge
  research and validation.

## Recovery actions

The locked dependency audit reports 12 affected packages (1 critical, 10 high,
1 low); applicability and bounded upgrades need review. No upgrade was applied.
Add build/navigation CI, record the actual Netlify build/deploy configuration,
decide the long-term Oil dashboard placement, and verify the full navigation
before calling the site production-ready. Select product scope before adding
feeds, accounts, trial billing or coming-soon modules.

The ignored nested `.eco` checkout is a separate Git root and four commits
behind the canonical inspected portable .eco snapshot. It was preserved.
Canonical local planning is the ignored root DEV-PLAN/DEV-PATH; historical
docs/ planning already identifies itself as superseded. Content is licensed
CC-BY-4.0 as recorded in LICENSE.md.
