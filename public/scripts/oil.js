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
      body: 'Indicative benchmark prices, chokepoint risk assessments, and geopolitical intelligence signals.',
      children: [backBtn]
    })
  ]}),

  SectionWrapper({ id: 'market', classes: 'market-section', children: [
    SectionIntro({
      eyebrow: 'Market data',
      title: 'Crude benchmark prices.',
      body: 'Indicative reference prices. Live feed integration via EIA and FRED in active development.'
    }),
    MarketBand({ prices: PRICES })
  ]}),

  SectionWrapper({ id: 'chokepoints', classes: 'feature-section', children: [
    SectionIntro({
      eyebrow: 'Chokepoints',
      title: 'Active risk monitoring.',
      body: 'Current risk levels across six key global oil transit chokepoints based on available geopolitical intelligence.'
    }),
    ChokeGrid({ chokepoints: CHOKEPOINTS })
  ]}),

  SectionWrapper({ id: 'intel', classes: 'intel-section', children: [
    SectionIntro({
      eyebrow: 'Intelligence feed',
      title: 'Geopolitical signals.',
      body: 'Recent events and developments that may affect oil supply, shipping lanes, and market stability.'
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
