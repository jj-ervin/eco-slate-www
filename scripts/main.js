import {
  PageShell,
  TopNav,
  MobileNavDrawer,
  HeroCenteredEmblem,
  SectionWrapper,
  SectionIntro,
  FeatureGrid,
  SplitNarrative,
  MetricsBand,
  StoryCard,
  LogoCloud,
  CTASection,
  FooterBrand,
  PrimaryButton,
  SecondaryButton,
  TextLink
} from './components.js';

const hero = SectionWrapper({ id: 'hero', classes: 'hero-section', children: [
  (() => {
    const left = document.createElement('div');
    left.className = 'hero-copy';
    left.innerHTML = `
      <p class="eyebrow">Osprey Holding</p>
      <h1>eco is a cognitive operating environment for thoughtful product ecosystems.</h1>
      <p class="hero-copy-text">Built by HBL Creative Studios and 20Amp Labs, eco lives under Osprey Holding LLC. It includes Kinjuu, Niji, Agrilogik, and future platforms designed to make financial systems more intuitive, flexible, and human-centered.</p>
    `;
    const actions = document.createElement('div');
    actions.className = 'hero-actions';
    actions.append(PrimaryButton({ label: 'Explore Kinjuu', href: '#product' }));
    actions.append(SecondaryButton({ label: 'Downloads', href: 'downloads.html' }));
    actions.append(SecondaryButton({ label: 'Product tour', href: '#insights' }));
    left.append(actions);
    return left;
  })(),
  HeroCenteredEmblem()
]});

const page = PageShell([
  TopNav(),
  MobileNavDrawer(),
  hero,
  SectionWrapper({ id: 'partners', classes: 'logo-section', children: [
    SectionIntro({ eyebrow: 'Ecosystem home', title: 'A portfolio built for modern financial and creative systems.', body: 'eco is the shared operating environment for platforms developed by HBL Creative Studios and 20Amp Labs under Osprey Holding LLC.' }),
    LogoCloud({ names: ['Kinjuu', 'Niji', 'Agrilogik', 'eco', 'Osprey'] })
  ]}),
  SectionWrapper({ id: 'access', classes: 'feature-section', children: [
    SectionIntro({ eyebrow: 'Public hub', title: 'eco-slate.org is the public home for repos, docs, and downloads.', body: 'The site supports open access to apps, components, documentation, and downloads managed by HBL Creative Studios. A companion GitHub repo mirrors the same ecosystem.' })
  ]}),
  SectionWrapper({ id: 'ecosystem', classes: 'feature-section', children: [
    SectionIntro({ eyebrow: 'Ecosystem gateway', title: 'Access docs, downloads, and the public repo from one place.', body: 'This page and the linked downloads/docs pages are the launch points for the eco ecosystem. Use them to reach project resources, public assets, and community-facing documentation.' }),
    FeatureGrid({ features: [
      { title: 'Docs hub', description: 'Navigate component docs, onboarding guidance, and ecosystem reference material.', accent: 'aqua', href: 'docs.html', linkLabel: 'Open docs' },
      { title: 'Downloads portal', description: 'Find release bundles, assets, and public downloads for Kinjuu, Niji, and Agrilogik.', accent: 'gold', href: 'downloads.html', linkLabel: 'Open downloads' },
      { title: 'Repository access', description: 'Open the public repo to inspect source, follow updates, and contribute to the ecosystem.', accent: 'wood', href: 'https://github.com/jj-ervin/eco-slate-www', linkLabel: 'Open repo' }
    ]})
  ]}),
  SectionWrapper({ id: 'downloads', classes: 'feature-section', children: [
    SectionIntro({ eyebrow: 'Downloads', title: 'A clear path from public landing page to docs and assets.', body: 'The downloads section connects users directly to project repos, docs, and release bundles for Kinjuu, Niji, Agrilogik, and the larger eco platform.' }),
    FeatureGrid({ features: [
      { title: 'Project downloads', description: 'Direct access to assets and release bundles for core eco projects.', accent: 'aqua', href: 'downloads.html', linkLabel: 'Open downloads' },
      { title: 'Documentation index', description: 'A centralized docs hub for onboarding, components, and ecosystem workflows.', accent: 'gold', href: 'docs.html', linkLabel: 'Open docs' },
      { title: 'Repo portal', description: 'A public GitHub landing page for source, issues, and community contributions.', accent: 'wood', href: 'https://github.com/jj-ervin/eco-slate-www', linkLabel: 'Open repo' }
    ]})
  ]}),
  SectionWrapper({ id: 'core', classes: 'feature-section', children: [
    SectionIntro({ eyebrow: 'Design system', title: 'Anchored components with premium coastal cues.', body: 'Cards, navigation, and hero elements share ringed frames, warm accents, and horizon-inspired spacing to support thoughtful financial workflows.' }),
    FeatureGrid({ features: [
      { title: 'Anchored structure', description: 'Typography, spacing, and card rhythm create a grounded interface for complex decisions.', accent: 'aqua' },
      { title: 'Purposeful flow', description: 'Soft gradients and subtle motion help users move calmly through product journeys.', accent: 'gold' },
      { title: 'Trust-forward clarity', description: 'High contrast, clean data surfaces, and clear labels make finance feel accessible and reliable.', accent: 'wood' }
    ]})
  ]}),
  SectionWrapper({ id: 'story', classes: 'split-section', children: [
    SectionIntro({ eyebrow: 'Platform story', title: 'Confidence built on quiet, intentional detail.', body: 'The Osprey aesthetic translates to digital products as anchored structure, trust signal hierarchy, and approachable financial language.' }),
    SplitNarrative({ left: { label: 'Kinjuu', title: 'Calm fintech orchestration', body: 'A product system that helps teams move with clarity, from onboarding to insights and execution.' }, right: { label: 'Osprey Holding', title: 'A brand rooted in place', body: 'The parent ecosystem is built around stewardship, stability, and a premium coastal mindset.' } })
  ]}),
  SectionWrapper({ id: 'metrics', classes: 'metrics-section', children: [
    MetricsBand({ stats: [
      { value: '32%', label: 'Faster adoption', detail: 'across internal teams' },
      { value: '4.9', label: 'Product sentiment', detail: 'from early users' },
      { value: '6.7x', label: 'Decision confidence', detail: 'from new launch cohorts' }
    ]})
  ]}),
  SectionWrapper({ id: 'projects', classes: 'story-row', children: [
    StoryCard({ title: 'Kinjuu', copy: 'A financial obligation tracker and reminder system built to keep payments, goals, and commitments clearly organized.', tag: 'Finance' }),
    StoryCard({ title: 'Niji', copy: 'A color palette relationship map, name generator, and database that helps creative systems stay consistent and expressive.', tag: 'Design' }),
    StoryCard({ title: 'Agrilogik', copy: 'A farming simulator-based research project using Farming Simulator 25 to model economics and teach financial systems through gameplay.', tag: 'Education' })
  ]}),
  SectionWrapper({ id: 'highlights', classes: 'story-row', children: [
    StoryCard({ title: 'Structured product onboarding', copy: 'Handcrafted interfaces guide teams through financial setup, reducing friction and preserving brand composure.', tag: 'Navigation' }),
    StoryCard({ title: 'Trust signals at every stage', copy: 'Subtle badges, ringed frames, and score chips make risk visible without overwhelming the page.', tag: 'Trust' }),
    StoryCard({ title: 'Horizon-inspired brand pacing', copy: 'Wide horizontal bands and soft gradients help users move through content with ease.', tag: 'Atmosphere' })
  ]}),
  CTASection(),
  FooterBrand()
]);

const app = document.querySelector('#app');
app.append(page);
const staticFallback = document.getElementById('static-fallback');
if (staticFallback) {
  staticFallback.remove();
}
