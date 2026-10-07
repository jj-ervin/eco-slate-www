import {
  PageShell, TopNav, MobileNavDrawer, SectionWrapper, PageHero,
  SectionIntro, MarketBand, ChokeGrid, IntelLayout, AlertFeed,
  RiskComposite, FooterBrand, SecondaryButton
} from './components.js';

import { PRICES, CHOKEPOINTS, ALERTS, RISK_COMPOSITE } from './oil-data.js';

const backBtn = document.createElement('div');
backBtn.className = 'hero-actions';
backBtn.append(SecondaryButton({ label: '← Dashboard', href: '/dashboard' }));

const page = PageShell([
  TopNav(),
  MobileNavDrawer(),

  SectionWrapper({ id: 'oil-hero', classes: 'dash-hero-section', children: [
    PageHero({
      eyebrow: 'Oil Intelligence',
      title: 'Market & Chokepoint Dashboard.',
      body: 'Sample data preview: prices, alert ages, chokepoint assessments and risk scores are fixed examples.',
      children: [backBtn]
    })
  ]}),

  SectionWrapper({ id: 'market', classes: 'market-section', children: [
    SectionIntro({
      eyebrow: 'Market data',
      title: 'Crude benchmark prices.',
      body: 'Fixed sample prices for this interface preview. Live feed integration is planned.'
    }),
    MarketBand({ prices: PRICES })
  ]}),

  SectionWrapper({ id: 'chokepoints', classes: 'feature-section', children: [
    SectionIntro({
      eyebrow: 'Chokepoints',
      title: 'Chokepoint preview.',
      body: 'Illustrative risk levels across six global oil transit chokepoints.'
    }),
    ChokeGrid({ chokepoints: CHOKEPOINTS })
  ]}),

  SectionWrapper({ id: 'intel', classes: 'intel-section', children: [
    SectionIntro({
      eyebrow: 'Intelligence feed',
      title: 'Geopolitical signals.',
      body: 'Sample alert cards for previewing the interface.'
    }),
    IntelLayout({
      main: AlertFeed({ alerts: ALERTS }),
      aside: RiskComposite(RISK_COMPOSITE)
    })
  ]}),

  FooterBrand()
]);

const app = document.querySelector('#app');
app.append(page);
const staticFallback = document.getElementById('static-fallback');
if (staticFallback) staticFallback.remove();
