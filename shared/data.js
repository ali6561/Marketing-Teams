const asset = (name) => new URL(`../assets/${name}`, import.meta.url).href;

export const MASCOTS = {
  arthur: { name: 'Arthur', role: 'Data', color: '#6b4eff', img: asset('arthur.png') },
  fiona: { name: 'Fiona', role: 'Content', color: '#ff4d97', img: asset('fiona.png') },
  oliver: { name: 'Oliver', role: 'Sales', color: '#00c2c7', img: asset('oliver.png') },
  sarah: { name: 'Sarah', role: 'Reputation', color: '#ffcc1f', img: asset('sarah.png') }
};

export const PRODUCTS = {
  retail: { name: 'Retail Pro 365', tier: 1, price: 80, color: '#ff4d97' },
  food: { name: 'Food Pro 365', tier: 1, price: 80, color: '#00c2c7' },
  auto: { name: 'Auto Pro 365', tier: 2, price: 100, color: '#00c2c7' },
  property: { name: 'Property Pro 365', tier: 2, price: 100, color: '#ff4d97' },
  taxi: { name: 'Taxi Pro 365', tier: 2, price: 100, color: '#00c2c7' },
  pi: { name: 'PI Pro 365', tier: 3, price: 120, color: '#6b4eff' },
  crim: { name: 'Crim Pro 365', tier: 3, price: 120, color: '#6b4eff' },
  ecom: { name: 'E-com Pro 365', tier: 3, price: 120, color: '#00c2c7' },
  furniture: { name: 'Furniture Pro 365', tier: 3, price: 120, color: '#ff4d97' }
};

export const AGENT_TODAY = {
  arthur: { actions: 412, prev: 388, uptime: 99.98, errors: 2 },
  fiona: { actions: 184, prev: 178, uptime: 99.94, errors: 1 },
  oliver: { actions: 1218, prev: 1102, uptime: 99.99, errors: 0 },
  sarah: { actions: 312, prev: 298, uptime: 100, errors: 0 }
};

