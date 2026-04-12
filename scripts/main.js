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
      <p class="eyebrow">Coastal fintech system</p>
      <h1>Structure confidence with calm, ocean‑inspired financial intelligence.</h1>
      <p class="hero-copy-text">OCRAFT shapes product trust with anchored systems, clear permissions, and attention to flow. It feels premium, navigable, and ready for modern finance teams.</p>
    `;
    const actions = document.createElement('div');
    actions.className = 'hero-actions';
    actions.append(PrimaryButton({ label: 'Get started', href: '#trial' }));
    actions.append(SecondaryButton({ label: 'See how it works', href: '#insights' }));
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
    SectionIntro({ eyebrow: 'Trusted by modern teams', title: 'Built for products that need quiet confidence.', body: 'A visual system that balances premium structure with the calm energy of coastal design.' }),
    LogoCloud({ names: ['Harbor', 'Atlas', 'Loom', 'Current', 'Breach'] })
  ]}),
  SectionWrapper({ id: 'core', classes: 'feature-section', children: [
    SectionIntro({ eyebrow: 'Design system', title: 'A coherent set of components with premium nautical cues.', body: 'Cards, navigation, and hero elements share ringed frames, soft rails, and layered ocean gradients for a unified product experience.' }),
    FeatureGrid({ features: [
      { title: 'Anchored structure', description: 'Vertical guides and polished sections keep every layout intentional and easy to scan.', accent: 'aqua' },
      { title: 'Flowing motion', description: 'Subtle reveals and curved accents create a calm sense of momentum without distraction.', accent: 'gold' },
      { title: 'Premium clarity', description: 'Generous spacing and refined typography make data feel trustworthy and approachable.', accent: 'wood' }
    ]})
  ]}),
  SectionWrapper({ id: 'story', classes: 'split-section', children: [
    SectionIntro({ eyebrow: 'Platform story', title: 'Built around structure, flow, and visible trust.', body: 'From product navigation to trust metrics, the UI system translates the emblem’s pilings, rope, and horizon into clear digital experiences.' }),
    SplitNarrative({ left: { label: 'Insight system', title: 'Intentional signal production', body: 'Every detail is designed to help teams interpret product health and guardrails with confidence.' }, right: { label: 'Navigation system', title: 'Layered paths and calm hierarchy', body: 'Soft dividing rails, anchored columns, and ringed visuals support a modern coastal fintech narrative.' } })
  ]}),
  SectionWrapper({ id: 'metrics', classes: 'metrics-section', children: [
    MetricsBand({ stats: [
      { value: '32%', label: 'Faster adoption', detail: 'across internal teams' },
      { value: '4.9', label: 'NPS signal', detail: 'from product stakeholders' },
      { value: '6.7x', label: 'Confidence lift', detail: 'in launch decision making' }
    ]})
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
