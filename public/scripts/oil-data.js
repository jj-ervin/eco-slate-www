export const PRICES = [
  { label: 'Brent Crude',      display: '$82.40', change: '+0.28', changePct: '+0.34', unit: 'USD / bbl' },
  { label: 'WTI Crude',        display: '$78.20', change: '+0.22', changePct: '+0.28', unit: 'USD / bbl' },
  { label: 'Brent/WTI Spread', display: '$4.20',  change: '+0.06', changePct: '+1.45', unit: 'USD / bbl' },
  { label: 'Risk Index',       display: '6.2',    change: '+0.3',  changePct: '+5.1',  unit: '/ 10.0', accent: 'risk' }
];

export const CHOKEPOINTS = [
  {
    name: 'Strait of Hormuz',
    risk: 'elevated',
    status: 'Active monitoring',
    note: 'Iranian naval exercises reported in Persian Gulf. ~20% of global seaborne oil transits daily.'
  },
  {
    name: 'Suez Canal',
    risk: 'elevated',
    status: 'Traffic rerouting',
    note: 'Continued pressure from Red Sea disruptions. Europe–Asia transits partially diverted via Cape.'
  },
  {
    name: 'Bab el-Mandeb',
    risk: 'high',
    status: 'Restricted transit',
    note: 'Houthi threat level sustained. Commercial vessels rerouting via Cape of Good Hope.'
  },
  {
    name: 'Strait of Malacca',
    risk: 'low',
    status: 'Normal operations',
    note: 'No significant disruption indicators. Traffic volume within seasonal norms.'
  },
  {
    name: 'Bosphorus',
    risk: 'low',
    status: 'Normal operations',
    note: 'Black Sea crude flows stable. No unusual military or maritime activity reported.'
  },
  {
    name: 'Panama Canal',
    risk: 'moderate',
    status: 'Capacity constraints',
    note: 'Gatun Lake water levels restricting daily transit slots. Energy cargo rerouting via Suez.'
  }
];

export const ALERTS = [
  { headline: 'Houthi forces claim attack on vessel in Red Sea corridor', region: 'Red Sea', age: '2h ago', severity: 'high' },
  { headline: 'Iran conducts naval exercises near Strait of Hormuz', region: 'Persian Gulf', age: '6h ago', severity: 'moderate' },
  { headline: 'Saudi Aramco reports stable production at current capacity', region: 'Saudi Arabia', age: '14h ago', severity: 'low' },
  { headline: 'Panama Canal authority revises water level forecast for Q3', region: 'Central America', age: '1d ago', severity: 'moderate' },
  { headline: 'Russia expands Arctic shipping route for crude exports', region: 'Arctic', age: '2d ago', severity: 'low' },
  { headline: 'Libya field output disrupted by renewed political standoff', region: 'North Africa', age: '3d ago', severity: 'moderate' }
];

export const RISK_COMPOSITE = {
  score: 6.2,
  tier: 'Elevated',
  drivers: [
    { name: 'Bab el-Mandeb',    level: 'high' },
    { name: 'Strait of Hormuz', level: 'elevated' },
    { name: 'Suez / Red Sea',   level: 'elevated' }
  ]
};
