const mk = (tag, className = '', text = '', attrs = {}) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
};

const TextLink = ({ label, href = '#', variant = 'default' } = {}) => {
  const link = mk('a', `text-link text-link-${variant}`, label, { href });
  return link;
};

const PrimaryButton = ({ label, href = '#', type = 'button' } = {}) => {
  const button = href ? mk('a', 'button button-primary', label, { href }) : mk('button', 'button button-primary', label, { type });
  return button;
};

const SecondaryButton = ({ label, href = '#', type = 'button' } = {}) => {
  const button = href ? mk('a', 'button button-secondary', label, { href }) : mk('button', 'button button-secondary', label, { type });
  return button;
};

const PageShell = (children = []) => {
  const shell = mk('div', 'page-shell');
  children.forEach(child => shell.append(child));
  return shell;
};

const TopNav = () => {
  const nav = mk('header', 'top-nav');
  const brand = mk('div', 'brand');
  const mark = mk('div', 'brand-mark');
  const markBird = mk('div', 'brand-mark-bird');
  markBird.innerHTML = `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 26 C14 14 22 8 30 10 C34 6 42 8 44 18 C40 22 34 18 28 16 C24 18 20 22 16 26 C12 30 8 32 8 26 Z" fill="currentColor" />
      <path d="M16 22 C22 18 26 14 32 16 C38 18 40 22 42 26 C36 24 30 24 24 28 C18 32 14 32 16 22 Z" fill="rgba(255,255,255,0.45)" />
    </svg>
  `;
  const name = mk('div', 'brand-copy');
  name.innerHTML = '<span>O</span>sprey';
  mark.append(markBird);
  brand.append(mark, name);

  const links = mk('nav', 'nav-links', '');
  ['Product', 'Downloads', 'Oil', 'Docs', 'Insights', 'Trust', 'Contact'].forEach(label => {
    const href = label === 'Downloads' ? '/downloads' : label === 'Docs' ? '/docs' : label === 'Oil' ? '/oil' : `#${label.toLowerCase()}`;
    const link = mk('a', '', label, { href });
    links.append(link);
  });

  const actions = mk('div', 'nav-actions');
  actions.append(SecondaryButton({ label: 'Sign in', href: '#signin' }), PrimaryButton({ label: 'Start trial', href: '#trial' }));

  const mobileToggle = mk('button', 'menu-toggle', 'Menu', { 'aria-label': 'Open navigation' });
  mobileToggle.addEventListener('click', () => document.body.classList.toggle('drawer-open'));

  nav.append(brand, links, actions, mobileToggle);
  return nav;
};

const MobileNavDrawer = () => {
  const overlay = mk('div', 'drawer-overlay');
  const panel = mk('div', 'drawer-panel');
  const close = mk('button', 'drawer-close', 'Close');
  close.addEventListener('click', () => document.body.classList.remove('drawer-open'));

  const links = mk('nav', 'drawer-links');
  ['Product', 'Downloads', 'Oil', 'Docs', 'Insights', 'Trust', 'Contact'].forEach(label => {
    const href = label === 'Downloads' ? '/downloads' : label === 'Docs' ? '/docs' : label === 'Oil' ? '/oil' : `#${label.toLowerCase()}`;
    const item = mk('a', '', label, { href });
    links.append(item);
  });

  panel.append(close, links, PrimaryButton({ label: 'Start trial', href: '#trial' }));
  overlay.append(panel);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) document.body.classList.remove('drawer-open');
  });
  return overlay;
};

const EmblemFrame = () => {
  const wrapper = mk('div', 'emblem-frame');
  wrapper.innerHTML = `
    <div class="emblem-ring"></div>
    <div class="emblem-core">
      <div class="emblem-badge"></div>
      <div class="emblem-lines"></div>
    </div>
    <div class="emblem-anchor"></div>
  `;
  return wrapper;
};

const HeroCenteredEmblem = () => {
  const card = mk('div', 'hero-emblem-card');
  const halo = mk('div', 'emblem-halo');
  const frame = EmblemFrame();
  const bird = mk('div', 'emblem-bird');
  bird.innerHTML = `
    <svg viewBox="0 0 160 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 60 C38 36 65 20 88 28 C95 12 124 14 148 36 C142 44 128 40 116 36 C103 32 90 38 76 46 C72 52 64 60 52 62 C42 64 28 68 12 60 Z" fill="currentColor" />
      <path d="M30 52 C45 42 52 24 68 30 C78 14 108 18 134 38 C126 48 108 42 96 36 C84 30 70 34 58 42 C54 48 46 56 34 58 C28 60 22 62 18 56 Z" fill="rgba(255,255,255,0.28)" />
      <circle cx="46" cy="34" r="5" fill="#031a2a" />
    </svg>
  `;
  const floating = mk('div', 'hero-floating-chip');
  floating.innerHTML = '<strong>98.7</strong><span>Trust score</span>';
  card.append(halo, frame, bird, floating);
  return card;
};

const SectionWrapper = ({ id, classes = '', children = [] } = {}) => {
  const section = mk('section', `section ${classes}`, '');
  if (id) section.id = id;
  children.forEach(child => section.append(child));
  return section;
};

const ContentContainer = ({ children = [], classes = '' } = {}) => {
  const container = mk('div', `content-container ${classes}`);
  children.forEach(child => container.append(child));
  return container;
};

const SectionIntro = ({ eyebrow, title, body }) => {
  const intro = mk('div', 'section-intro');
  const label = mk('p', 'section-label', eyebrow);
  const heading = mk('h2', 'section-heading', title);
  const copy = mk('p', 'section-copy', body);
  intro.append(label, heading, copy);
  return intro;
};

const FeatureCard = ({ title, description, accent = 'aqua', href, linkLabel } = {}) => {
  const card = mk('article', `feature-card feature-card-${accent}`);
  const icon = mk('div', 'feature-icon');
  const dot = mk('span', 'feature-dot');
  icon.append(dot);
  const heading = mk('h3', 'feature-title', title);
  const body = mk('p', 'feature-copy', description);
  card.append(icon, heading, body);

  if (href) {
    const wrapper = mk('p', 'feature-link');
    const link = mk('a', 'text-link', linkLabel || 'Learn more', { href });
    if (href.startsWith('http')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
    wrapper.append(link);
    card.append(wrapper);
  }

  return card;
};

const FeatureGrid = ({ features = [] } = {}) => {
  const grid = mk('div', 'feature-grid');
  features.forEach(feature => grid.append(FeatureCard(feature)));
  return grid;
};

const SplitNarrative = ({ left, right } = {}) => {
  const grid = mk('div', 'split-narrative');
  const leftCard = mk('div', 'narrative-card');
  leftCard.innerHTML = `<p class="section-label">${left.label}</p><h3>${left.title}</h3><p>${left.body}</p>`;
  const rightCard = mk('div', 'narrative-card narrative-card-ghost');
  rightCard.innerHTML = `<p class="section-label">${right.label}</p><h3>${right.title}</h3><p>${right.body}</p>`;
  grid.append(leftCard, rightCard);
  return grid;
};

const StatCard = ({ value, label, detail = '' } = {}) => {
  const card = mk('div', 'stat-card');
  const number = mk('div', 'stat-number', value);
  const text = mk('div', 'stat-label', label);
  if (detail) text.innerHTML += ` <span class="stat-detail">${detail}</span>`;
  card.append(number, text);
  return card;
};

const MetricsBand = ({ stats = [] } = {}) => {
  const band = mk('div', 'metrics-band');
  const intro = mk('div', 'metrics-intro');
  intro.innerHTML = '<p class="section-label">Market signal</p><h3>Coastal clarity for high-trust financial workflows.</h3>';
  const statsRow = mk('div', 'stat-grid');
  stats.forEach(stat => statsRow.append(StatCard(stat)));
  band.append(intro, statsRow);
  return band;
};

const StoryCard = ({ title, copy, tag }) => {
  const card = mk('article', 'story-card');
  const marker = mk('span', 'story-tag', tag);
  const heading = mk('h3', 'story-title', title);
  const body = mk('p', 'story-copy', copy);
  card.append(marker, heading, body);
  return card;
};

const LogoCloud = ({ names = [] } = {}) => {
  const wrapper = mk('div', 'logo-cloud');
  names.forEach(name => {
    const item = mk('div', 'logo-pill');
    item.innerHTML = `<span>${name}</span>`;
    wrapper.append(item);
  });
  return wrapper;
};

const CTASection = () => {
  const section = mk('section', 'cta-section');
  section.append(mk('p', 'section-label', 'Public preview'));
  section.append(mk('h2', 'section-heading', 'Follow the live eco preview as the ecosystem grows.'));
  const actions = mk('div', 'cta-actions');
  actions.append(PrimaryButton({ label: 'Open docs preview', href: '/docs' }), SecondaryButton({ label: 'Open downloads preview', href: '/downloads' }));
  section.append(actions);
  return section;
};

const FooterBrand = () => {
  const footer = mk('footer', 'footer-brand');
  const left = mk('div', 'footer-copy');
  left.innerHTML = '<strong>Osprey Holding LLC</strong> sets the tone for Kinjuu and other coastal fintech experiences.<br>Content licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC-BY-4.0</a>.';
  const right = mk('div', 'footer-links');
  right.innerHTML = '<a href="/docs">Docs</a><a href="/downloads">Downloads</a><a href="#contact">Contact</a>';
  footer.append(left, right);
  return footer;
};

export {
  PageShell,
  TopNav,
  MobileNavDrawer,
  HeroCenteredEmblem,
  SectionWrapper,
  ContentContainer,
  SectionIntro,
  FeatureGrid,
  FeatureCard,
  StoryCard,
  StatCard,
  MetricsBand,
  SplitNarrative,
  LogoCloud,
  CTASection,
  FooterBrand,
  PrimaryButton,
  SecondaryButton,
  TextLink,
  EmblemFrame
};
