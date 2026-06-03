import {
  PageShell,
  TopNav,
  MobileNavDrawer,
  SectionWrapper,
  PageHero,
  ModuleGrid,
  FooterBrand
} from './components.js';

const modules = [
  {
    title: 'Oil Intelligence',
    description: 'Track Brent/WTI prices, key chokepoint risk, and geopolitical events affecting global oil supply and shipping lanes.',
    tag: 'Markets',
    status: 'preview',
    accent: 'aqua',
    href: '/dashboard/oil'
  },
  {
    title: 'Personal OS',
    description: 'A lightweight operational system for time, priorities, and focus — parser-driven planning with no backend required.',
    tag: 'Productivity',
    status: 'coming-soon',
    accent: 'gold',
    href: '#'
  },
  {
    title: 'Agrilogik',
    description: 'Agricultural economics research and farming simulation modeling under Osprey Holding LLC.',
    tag: 'Research',
    status: 'coming-soon',
    accent: 'wood',
    href: '#'
  },
  {
    title: 'Osprey Analytics',
    description: 'Intelligence dashboards and operational decision systems across the eco platform ecosystem.',
    tag: 'Analytics',
    status: 'coming-soon',
    accent: 'sky',
    href: '#'
  }
];

const page = PageShell([
  TopNav(),
  MobileNavDrawer(),
  SectionWrapper({ id: 'dash-hero', classes: 'dash-hero-section', children: [
    PageHero({
      eyebrow: 'eco Platform',
      title: 'Operational workspace.',
      body: 'Select a module to launch your workspace. Each system is a bounded intelligence environment built for a specific domain.'
    })
  ]}),
  SectionWrapper({ id: 'modules', classes: 'module-section', children: [
    ModuleGrid({ modules })
  ]}),
  FooterBrand()
]);

const app = document.querySelector('#app');
app.append(page);
const staticFallback = document.getElementById('static-fallback');
if (staticFallback) staticFallback.remove();
