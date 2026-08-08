import { Product, Category, BlogPost, Lead, DealerApplication, CareerOpening } from '../types/api';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'jaw-crushers',
    name: 'Jaw Crushers',
    description: 'Heavy duty primary and secondary jaw crushers engineered for tough mining and aggregate application.',
    productCount: 4,
  },
  {
    id: 'cat-2',
    slug: 'cone-crushers',
    name: 'Cone Crushers',
    description: 'High efficiency hydraulic cone crushers for precise product sizing and maximum productivity.',
    productCount: 3,
  },
  {
    id: 'cat-3',
    slug: 'feeders',
    name: 'Vibrating Feeders',
    description: 'Reliable grizzly feeders designed for continuous, heavy duty material handling.',
    productCount: 2,
  },
  {
    id: 'cat-4',
    slug: 'screening',
    name: 'Vibrating Screens',
    description: 'Multi-deck high performance vibrating screens for precise material classification.',
    productCount: 3,
  },
  {
    id: 'cat-5',
    slug: 'crushing-plants',
    name: 'Mobile & Stationary Plants',
    description: 'Turnkey crushing and screening plant solutions tailored to quarry and mining projects.',
    productCount: 2,
  },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    slug: 'prime-jaw-crusher-1060',
    name: 'Prime Jaw Crusher 1060',
    category: 'Jaw Crushers',
    categorySlug: 'jaw-crushers',
    shortDescription: 'High capacity primary jaw crusher with heavy duty cast frame and low operational costs.',
    description: 'The Prime Jaw Crusher 1060 features a deep symmetric crushing chamber and optimized toggle angle to maximize crushing capacity and reduction ratio. Built with high strength alloy steel.',
    specifications: {
      'Feed Opening Size': '1000 x 600 mm',
      'Max Feed Size': '500 mm',
      'Discharge Setting Range': '70 - 150 mm',
      'Capacity': '120 - 280 TPH',
      'Motor Power': '110 kW',
      'Weight': '18,500 kg',
    },
    features: [
      'Heavy duty forged eccentric shaft',
      'Reversible manganese steel jaw plates',
      'Hydraulic wedge setting adjustment',
      'Self-aligning spherical roller bearings',
    ],
    isFeatured: true,
  },
  {
    id: 'prod-2',
    slug: 'prime-jaw-crusher-1209',
    name: 'Prime Jaw Crusher 1209',
    category: 'Jaw Crushers',
    categorySlug: 'jaw-crushers',
    shortDescription: 'Large scale primary jaw crusher engineered for high throughput mining projects.',
    description: 'Designed for rugged primary reduction of hard granite and basalt rock, delivering consistent output under extreme quarry conditions.',
    specifications: {
      'Feed Opening Size': '1200 x 900 mm',
      'Max Feed Size': '750 mm',
      'Discharge Setting Range': '100 - 200 mm',
      'Capacity': '250 - 550 TPH',
      'Motor Power': '160 kW',
      'Weight': '34,000 kg',
    },
    features: [
      'Monoblock cast steel frame',
      'Deep chamber geometry for high reduction',
      'Automated grease lubrication option',
    ],
    isFeatured: true,
  },
  {
    id: 'prod-3',
    slug: 'prime-cone-crusher-ch300',
    name: 'Prime Hydraulic Cone Crusher CH300',
    category: 'Cone Crushers',
    categorySlug: 'cone-crushers',
    shortDescription: 'Advanced secondary and tertiary cone crusher with automatic tramp release.',
    description: 'Delivers superior product shape (cubical aggregates) with hydraulic setting adjustment under load and advanced PLC protection.',
    specifications: {
      'Max Feed Size': '210 mm',
      'CSS Range': '10 - 38 mm',
      'Capacity': '110 - 310 TPH',
      'Motor Power': '220 kW',
      'Weight': '15,200 kg',
    },
    features: [
      'Hydroset hydraulic control system',
      'Overload protection with automatic resets',
      'Quick liner change design',
      'PLC automated monitoring screen',
    ],
    isFeatured: true,
  },
  {
    id: 'prod-4',
    slug: 'heavy-vibrating-feeder-1145',
    name: 'Heavy Duty Vibrating Feeder 1145',
    category: 'Vibrating Feeders',
    categorySlug: 'feeders',
    shortDescription: 'Grizzly vibrating feeder designed to feed primary crushers consistently while scalping fines.',
    description: 'Built with heavy wear resistant liner plates and adjustable grizzly bars to separate quarry fines prior to primary crushing.',
    specifications: {
      'Trough Dimensions': '1100 x 4500 mm',
      'Max Feed Size': '700 mm',
      'Capacity': 'up to 450 TPH',
      'Motor Power': '2x 11 kW',
      'Weight': '6,800 kg',
    },
    features: [
      'Dual motor unbalanced vibrators',
      'Adjustable stepped grizzly bars',
      'HARDOX liner wear plates',
    ],
    isFeatured: false,
  },
  {
    id: 'prod-5',
    slug: 'prime-vibrating-screen-2060',
    name: 'High Frequency Screen 2060 (4 Deck)',
    category: 'Vibrating Screens',
    categorySlug: 'screening',
    shortDescription: '4-deck inclined vibrating screen for precise aggregate grading.',
    description: 'Features high G-force vibration mechanism to prevent blinding and maximize screening accuracy across all fractions.',
    specifications: {
      'Screen Size': '2000 x 6000 mm',
      'Number of Decks': '4 Decks',
      'Capacity': '150 - 350 TPH',
      'Motor Power': '30 kW',
      'Weight': '9,500 kg',
    },
    features: [
      'Circular motion stroke box',
      'Rubber or wire mesh deck compatibility',
      'Oil bath lubrication system',
    ],
    isFeatured: true,
  },
];

export const blogs: BlogPost[] = [];

export const mockLeads: Lead[] = [];

export const mockDealers: DealerApplication[] = [
  {
    id: 'dealer-201',
    companyName: 'Apex Machinery Traders',
    contactPerson: 'Sanjay Sharma',
    email: 'sanjay@apextraders.in',
    phone: '+91 9123456789',
    city: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    experienceYears: 12,
    message: 'We operate heavy equipment dealerships across Western India and want to add Pithal crushers to our portfolio.',
    status: 'REVIEWED',
    createdAt: new Date().toISOString(),
  },
];

export const careers: CareerOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Mechanical Design Engineer',
    department: 'Research & Development',
    location: 'Udaipur, Rajasthan / Remote',
    type: 'Full-time',
    description: 'We are seeking an experienced Mechanical Engineer with expertise in heavy machinery, 3D CAD modeling, and FEA stress analysis of crushers.',
    requirements: [
      'B.Tech / M.Tech in Mechanical Engineering',
      '5+ years experience in heavy industrial machinery design',
      'Proficiency in SolidWorks / Solid Edge and ANSYS',
    ],
  },
  {
    id: 'job-2',
    title: 'Regional Sales Manager - Mining Solutions',
    department: 'Sales & Business Development',
    location: 'Gujarat / Maharashtra Region',
    type: 'Full-time',
    description: 'Drive machinery sales across quarry and mining operators in Western India.',
    requirements: [
      'Degree in Mining Engineering or Business Administration',
      'Strong network with quarry owners and EPC contractors',
    ],
  },
];
