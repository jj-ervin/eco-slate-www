import {
  PageShell,
  TopNav,
  MobileNavDrawer,
  SectionWrapper,
  PageHero,
  SectionIntro,
  FeatureGrid,
  FooterBrand,
  SecondaryButton
} from './components.js';

const heroActions = document.createElement('div');
heroActions.className = 'hero-actions';
heroActions.append(SecondaryButton({ label: '← Dashboard', href: '/dashboard' }));

const page = PageShell([
  TopNav(),
  MobileNavDrawer(),
  SectionWrapper({ id: 'oil-hero', classes: 'dash-hero-section', children: [
    PageHero({
      eyebrow: 'Oil Intelligence',
      title: 'Oil Traffic & Geopolitical Hotspots.',
      body: 'Track key oil chokepoints, Brent/WTI prices, and geopolitical events affecting global oil movement and shipping risk.',
      children: [heroActions]
    })
  ]}),
  SectionWrapper({ id: 'chokepoints', classes: 'feature-section', children: [
    SectionIntro({
      eyebrow: 'Key chokepoints',
      title: 'Critical infrastructure under watch.',
      body: 'These six chokepoints handle the majority of globally traded seaborne oil. Disruption at any point has outsized market impact.'
    }),
    FeatureGrid({ features: [
      { title: 'Strait of Hormuz', description: 'Connects the Persian Gulf to the Gulf of Oman. ~20% of global oil supply transits here daily.', accent: 'aqua' },
      { title: 'Suez Canal', description: 'Key artery connecting Europe and Asia. Disruptions force costly diversions around Africa.', accent: 'gold' },
      { title: 'Bab el-Mandeb', description: 'Entrance to the Red Sea from the Gulf of Aden. Houthi activity has elevated risk in recent years.', accent: 'wood' },
      { title: 'Strait of Malacca', description: 'Primary route between Indian and Pacific Oceans, carrying most Asia-Pacific oil imports.', accent: 'aqua' },
      { title: 'Bosphorus', description: 'Only route from the Black Sea to the Mediterranean. Russian and Caspian oil exports depend on it.', accent: 'gold' },
      { title: 'Panama Canal', description: 'Links Atlantic and Pacific. Drought and congestion create periodic disruption risk.', accent: 'wood' }
    ]})
  ]}),
  SectionWrapper({ id: 'oil-status', classes: 'feature-section', children: [
    SectionIntro({
      eyebrow: 'Module status',
      title: 'Live data feeds arriving soon.',
      body: 'This module is in preview. Brent/WTI price feeds, shipping disruption alerts, and risk scoring are under active development.'
    }),
    FeatureGrid({ features: [
      { title: 'Price tracking', description: 'Brent and WTI spot prices with historical context and trend indicators.', accent: 'aqua' },
      { title: 'Disruption alerts', description: 'Shipping lane and chokepoint alerts powered by AIS and geopolitical signals.', accent: 'gold' },
      { title: 'Risk scoring', description: 'Composite risk scores per chokepoint based on conflict activity, volume, and available alternatives.', accent: 'wood' }
    ]})
  ]}),
  FooterBrand()
]);

const app = document.querySelector('#app');
app.append(page);
const staticFallback = document.getElementById('static-fallback');
if (staticFallback) staticFallback.remove();
