// Data layer — all products, suites, and content live here.
// Edit this file to update the entire site.

export type ProductStatus = 'live' | 'coming-soon';

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  suite: string | null; // null for standalone (e.g., WeatherWatch) or platform-level (CoopOS, HomesteadHQ)
  episode: number | null;
  type: 'os' | 'dashboard' | 'hardware' | 'software' | 'sensor';
  features?: string[];
  specs?: { label: string; value: string }[];
  shipsWith?: string[]; // related products
}

export interface Suite {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  modules: string[]; // product slugs
}

// ---------- SUITES ----------

export const suites: Suite[] = [
  {
    slug: 'coopops',
    name: 'CoopOps',
    tagline: 'Operations for the modern coop.',
    description:
      'CoopOps is the original suite. The chickens are the workforce. The coop is headquarters. Every module under CoopOps is built around a single conviction: a productive flock is a measurable flock.',
    modules: ['peckperformance', 'thedoorman', 'coopair'],
  },
  {
    slug: 'vegeops',
    name: 'VegeOps',
    tagline: 'Intelligence for the garden.',
    description:
      'Plants do not wilt before they fail. They fail in stages, on a timeline only sensors can see. VegeOps brings that timeline above ground.',
    modules: ['growguard', 'canopycontrol'],
  },
  {
    slug: 'perimeterops',
    name: 'PerimeterOps',
    tagline: 'Awareness from the property edge.',
    description:
      'Most of what happens on a hundred acres happens without you. PerimeterOps closes the gap between what happens and what gets logged.',
    modules: ['trailscout', 'drivewatch', 'runcam'],
  },
  {
    slug: 'aquaops',
    name: 'AquaOps',
    tagline: 'Water, monitored at depth.',
    description:
      'Water is the most consequential system on a property and the least observable. AquaOps treats every body of water as a process, not a resource.',
    modules: ['pondpulse'],
  },
];

// ---------- PRODUCTS ----------

export const products: Product[] = [
  // ----- PLATFORM -----
  {
    slug: 'coopos',
    name: 'CoopOS',
    tagline: 'A specialized operating system for homesteads.',
    description:
      'CoopOS is the platform that every Homestead Labs product runs on. A purpose-built environment for ingesting sensor data, coordinating modules, and rendering decisions in real time. Specialized Linux. Optimized for the field.',
    status: 'live',
    suite: null,
    episode: 1,
    type: 'os',
    features: [
      'Multi-camera ingestion at 4K',
      'On-device inference via YOLO and ResNet',
      'Module-aware data layer powered by SQLite',
      'Streamlit-rendered dashboards out of the box',
      'Designed for centralized deployment on commodity hardware',
    ],
    specs: [
      { label: 'Architecture', value: 'Centralized, single-node' },
      { label: 'Inference', value: 'CUDA-accelerated, 5070Ti reference' },
      { label: 'Storage', value: 'SQLite, single-file' },
      { label: 'Modules supported', value: '12 (3 live, 9 in development)' },
      { label: 'Release', value: 'v1.0 — Q2 2026' },
    ],
    shipsWith: ['coopcam', 'eggwatch'],
  },
  {
    slug: 'homesteadhq',
    name: 'HomesteadHQ',
    tagline: 'Executive visibility, end to end.',
    description:
      'HomesteadHQ is the unified dashboard product, drawing data from every CoopOS module across every suite. The command center for properties that have outgrown spreadsheets.',
    status: 'coming-soon',
    suite: null,
    episode: 10,
    type: 'dashboard',
    features: [
      'Cross-suite correlation engine',
      'Powered by PeckPerformance, GrowGuard, WeatherWatch, and the full CoopOS suite',
      'Real-time anomaly detection across all subsystems',
      'Quarterly review export, board-ready',
    ],
    specs: [
      { label: 'Status', value: 'In development' },
      { label: 'Powered by', value: 'PeckPerformance + 8 modules' },
      { label: 'Targeted release', value: 'Q4 2026' },
    ],
  },

  // ----- COOPOPS -----
  {
    slug: 'peckperformance',
    name: 'PeckPerformance',
    tagline: 'Productivity insights at the individual contributor level.',
    description:
      'PeckPerformance is the productivity dashboard powering CoopOS. Built on top of the CoopCam and EggWatch hardware modules, it identifies, tracks, and ranks every member of the flock — by breed, by individual, by output.',
    status: 'live',
    suite: 'coopops',
    episode: 1,
    type: 'software',
    features: [
      'Breed-first identification with individual refinement',
      'Egg attribution via dwell-time analysis',
      'Per-bird productivity scoring',
      'Live leaderboard, sorted by quarterly performance',
      'Optional human-detection filter',
    ],
    specs: [
      { label: 'Runs on', value: 'CoopOS' },
      { label: 'Hardware', value: 'CoopCam + EggWatch' },
      { label: 'Update frequency', value: 'Real-time' },
      { label: 'Powers', value: 'HomesteadHQ team-performance view' },
    ],
    shipsWith: ['coopcam', 'eggwatch'],
  },
  {
    slug: 'coopcam',
    name: 'CoopCam',
    tagline: 'The first camera designed for the modern coop.',
    description:
      'CoopCam is the wide-angle interior camera that gives PeckPerformance its primary view of the floor. Mounted high on the north wall, it covers door zones, perch activity, and full-room motion. 4K resolution. Power over Ethernet. No moving parts.',
    status: 'live',
    suite: 'coopops',
    episode: 1,
    type: 'hardware',
    features: [
      '4K turret form factor',
      'PoE-powered, single-cable install',
      'IR night vision with 30m range',
      'IP67-rated for coop conditions',
      'Native RTSP streaming to CoopOS',
    ],
    specs: [
      { label: 'Resolution', value: '3840×2160 @ 25fps' },
      { label: 'Power', value: 'PoE 802.3af' },
      { label: 'Ethernet', value: 'Cat5e/Cat6 compatible' },
      { label: 'Dimensions', value: '110×110×85mm' },
      { label: 'Mounting', value: 'Wall, ceiling, beam' },
    ],
    shipsWith: ['coopos', 'peckperformance'],
  },
  {
    slug: 'eggwatch',
    name: 'EggWatch',
    tagline: 'Purpose-built nesting-box observation.',
    description:
      'EggWatch is the dedicated nesting-box module for PeckPerformance. Mounted center-coop and aimed at the boxes, it captures the close-range identification and dwell-time data that powers individual egg attribution.',
    status: 'live',
    suite: 'coopops',
    episode: 1,
    type: 'hardware',
    features: [
      '4K close-range capture',
      'Optimized for low-light nesting environments',
      'Dwell-time event detection',
      'Direct attribution to individual hens',
      'Native RTSP streaming to CoopOS',
    ],
    specs: [
      { label: 'Resolution', value: '3840×2160 @ 25fps' },
      { label: 'Power', value: 'PoE 802.3af' },
      { label: 'Ethernet', value: 'Cat5e/Cat6 compatible' },
      { label: 'Optimal range', value: '0.5m – 3m' },
      { label: 'Mounting', value: 'Ceiling, beam, frame' },
    ],
    shipsWith: ['coopos', 'peckperformance'],
  },
  {
    slug: 'thedoorman',
    name: 'TheDoorMan',
    tagline: 'Automated end-of-day procedures.',
    description:
      'TheDoorMan replaces timer-based coop closure with a multi-system fusion: sundown imminence, headcount verification, and doorway-zone clearance. The door does not close on a chicken.',
    status: 'coming-soon',
    suite: 'coopops',
    episode: 5,
    type: 'hardware',
    features: [
      'Multi-system fusion (CoopCam headcount + WeatherWatch sundown + LD2410 mmWave)',
      'Conditional closure logic — never operates on a single signal',
      'Linear actuator with limit switches',
      'Manual override at the panel',
    ],
  },
  {
    slug: 'coopair',
    name: 'CoopAir',
    tagline: 'Wellness insights for the team.',
    description:
      'Ammonia, CO₂, particulates, and humidity, monitored continuously and interpreted against a learned baseline of your specific coop. CoopAir flags drift before it becomes a welfare issue.',
    status: 'coming-soon',
    suite: 'coopops',
    episode: 8,
    type: 'sensor',
    features: [
      'NDIR CO₂ measurement (SCD40)',
      'VOC and ammonia proxy (SGP40)',
      'Particulate matter (PMS5003)',
      'Learned baseline anomaly detection',
      'HR-approved.',
    ],
  },

  // ----- VEGEOPS -----
  {
    slug: 'growguard',
    name: 'GrowGuard',
    tagline: 'Drip irrigation, decided by the soil.',
    description:
      'GrowGuard replaces timer-based irrigation with sensor-grounded scheduling. Real soil moisture. Real forecast data from WeatherWatch. Real decisions, made per zone, per day.',
    status: 'coming-soon',
    suite: 'vegeops',
    episode: 2,
    type: 'sensor',
    features: [
      'Per-zone capacitive moisture sensing',
      'Solenoid-valve actuation',
      'Optional WeatherWatch forecast integration',
      'Schedule-free operation',
    ],
  },
  {
    slug: 'canopycontrol',
    name: 'CanopyControl',
    tagline: 'Plant stress, detected before it shows.',
    description:
      'A spectral sensor sees the wavelengths your eyes cannot. CanopyControl reads chlorophyll and water-stress signatures days before visible wilt, then deploys motorized shade cloth automatically when threshold is crossed.',
    status: 'coming-soon',
    suite: 'vegeops',
    episode: 4,
    type: 'sensor',
    features: [
      '11-channel spectral sensing (AS7341)',
      'Stress signature classification',
      'Motorized shade-cloth actuation',
      'WeatherWatch temperature correlation',
      'Extends GrowGuard.',
    ],
  },

  // ----- PERIMETEROPS -----
  {
    slug: 'trailscout',
    name: 'TrailScout',
    tagline: 'A wildlife census for your acreage.',
    description:
      'Two ESP32-CAM units at strategic property edges, classifying every species that passes. TrailScout builds a rolling census of the wildlife actually living on your land — not the wildlife you happened to see.',
    status: 'coming-soon',
    suite: 'perimeterops',
    episode: 6,
    type: 'hardware',
    features: [
      'Solar-powered, battery-buffered',
      'Motion-triggered capture',
      'On-device species classification',
      'Rolling census dashboard',
    ],
  },
  {
    slug: 'drivewatch',
    name: 'DriveWatch',
    tagline: 'Pre-screening for the long driveway.',
    description:
      'mmWave radar triggers a camera. The camera classifies. You get a notification with context. Vehicle, person, animal, or wildlife — DriveWatch tells you before they get to the door.',
    status: 'coming-soon',
    suite: 'perimeterops',
    episode: 7,
    type: 'hardware',
    features: [
      'LD2410 mmWave radar trigger',
      'ESP32-CAM classification',
      'License-plate read on vehicle events',
      'SMS notification via CoopOS',
    ],
  },
  {
    slug: 'runcam',
    name: 'RunCam',
    tagline: 'Outdoor coop coverage.',
    description:
      'RunCam extends PeckPerformance into the outdoor run, attributing forage time, social behavior, and predator-flight events to the correct individual. Currently in development.',
    status: 'coming-soon',
    suite: 'perimeterops',
    episode: null,
    type: 'hardware',
    features: [
      '4K bullet form factor, IP67',
      'PoE-powered, integrates with existing CoopOS network',
      'Free-range activity attribution',
      'Sold separately from PeckPerformance.',
    ],
  },

  // ----- AQUAOPS -----
  {
    slug: 'pondpulse',
    name: 'PondPulse',
    tagline: 'A floating, solar-powered pond monitor.',
    description:
      'PondPulse is the AquaOps flagship. A buoy-mounted sensor pod, anchored mid-pond, transmitting temperature, turbidity, level, pH, and dissolved oxygen via LoRa. Powered by the sun. Watching the water.',
    status: 'coming-soon',
    suite: 'aquaops',
    episode: 9,
    type: 'sensor',
    features: [
      'Solar-powered, battery-buffered',
      'LoRa long-range transmission',
      'Five-sensor multimodal monitoring',
      'Anomaly detection on time-series data',
      '3D-printed buoy housing',
    ],
  },

  // ----- STANDALONE -----
  {
    slug: 'weatherwatch',
    name: 'WeatherWatch',
    tagline: 'Hyperlocal forecasting, learned from your land.',
    description:
      'Regional forecasts are wrong about your property in specific, predictable ways. WeatherWatch ingests its own sensor data alongside public forecasts and learns the deltas. Over time, it produces a property-specific forecast that outperforms the model it started with.',
    status: 'coming-soon',
    suite: null,
    episode: 3,
    type: 'sensor',
    features: [
      'Tipping-bucket rain gauge',
      'Anemometer + BME280 + UV sensor',
      'Learned forecast-correction model',
      'Feeds GrowGuard, TheDoorMan, CanopyControl, PondPulse',
    ],
  },
];

// ---------- PATREON TIERS ----------

export const patreonTiers = [
  {
    name: 'Junior Engineer',
    price: 5,
    blurb: 'Extended cuts, GitHub access, the full technical layer.',
    features: [
      'Director\'s cut episodes (25–40 min)',
      'GitHub repo access',
      'Hardware lists with pricing',
      'Discord access',
    ],
  },
  {
    name: 'Senior Engineer',
    price: 12,
    blurb: 'Everything in Junior Engineer, plus early access and ad-free.',
    features: [
      'All Junior Engineer benefits',
      '48-hour early access',
      'Ad-free episodes',
      'Quarterly office hours',
    ],
  },
  {
    name: 'Director',
    price: 25,
    blurb: 'Full access, monthly Q&A, and a seat on the board.',
    features: [
      'All Senior Engineer benefits',
      'Monthly board meeting (private Q&A)',
      'Name in episode credits as Board Member',
      'Direct line to leadership',
    ],
  },
];

// ---------- HELPERS ----------

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function suiteBySlug(slug: string): Suite | undefined {
  return suites.find((s) => s.slug === slug);
}

export function productsBySuite(suiteSlug: string): Product[] {
  return products.filter((p) => p.suite === suiteSlug);
}

export function liveProducts(): Product[] {
  return products.filter((p) => p.status === 'live');
}

export function comingSoonProducts(): Product[] {
  return products.filter((p) => p.status === 'coming-soon');
}
