import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  // RUNNING (5 Products)
  {
    id: 'prod-run-01',
    name: 'Velocity Apex Nitro Running Shoes',
    sport: 'Running',
    productType: 'Footwear',
    brand: 'Velocity Sports',
    price: 129.99,
    originalPrice: 159.99,
    discountPercent: 19,
    rating: 4.8,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Engineered for maximum energy return and ultralight cushioning over long distances. Features a breathable engineered mesh upper and high-grip rubber outsole.',
    features: [
      'NitroFoam responsive cushioning',
      'Engineered jacquard mesh upper',
      'Duramax high-traction rubber outsole',
      'Reflective details for low-light visibility'
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    colors: [
      { name: 'Crimson Red', hex: '#DC2626' },
      { name: 'Electric Blue', hex: '#0066FF' },
      { name: 'Stealth Black', hex: '#1E293B' }
    ],
    inStock: true,
    stockQuantity: 45,
    specifications: {
      'Weight': '240g (Size 9)',
      'Drop': '8mm',
      'Arch Support': 'Neutral',
      'Closure': 'Lace-up'
    },
    gender: 'Unisex',
    isFeatured: true,
    isNew: true,
    popularityScore: 98
  },
  {
    id: 'prod-run-02',
    name: 'AirStride Ultra Performance Shorts',
    sport: 'Running',
    productType: 'Apparel',
    brand: 'Apex Pro',
    price: 39.99,
    originalPrice: 49.99,
    discountPercent: 20,
    rating: 4.6,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Ultra-lightweight 2-in-1 running shorts with built-in compression liner and sweat-wicking DryTech technology. Includes a zip back phone pocket.',
    features: [
      'DryTech moisture management',
      'Built-in supportive liner short',
      'Zippered waterproof phone pocket',
      '360-degree reflective accents'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Midnight Navy', hex: '#0F172A' },
      { name: 'Charcoal Gray', hex: '#475569' }
    ],
    inStock: true,
    stockQuantity: 30,
    specifications: {
      'Material': '88% Polyester, 12% Elastane',
      'Inseam': '5 inches',
      'Fit': 'Athletic Fit'
    },
    gender: 'Men',
    isFeatured: false,
    popularityScore: 85
  },
  {
    id: 'prod-run-03',
    name: 'HydroBelt Pro Ergonomic Hydration Belt',
    sport: 'Running',
    productType: 'Accessories',
    brand: 'Velocity Sports',
    price: 29.99,
    rating: 4.5,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Bounce-free running hydration belt with two BPA-free 300ml flasks and expandable storage pouch for keys and energy gels.',
    features: [
      'No-bounce silicone grip technology',
      'Two 300ml leak-proof flasks included',
      'Water-resistant touchscreen pouch',
      'Adjustable waist strap (26"-44")'
    ],
    sizes: ['One Size'],
    colors: [{ name: 'Neon Green', hex: '#10B981' }, { name: 'Black', hex: '#000000' }],
    inStock: true,
    stockQuantity: 20,
    specifications: {
      'Capacity': '600ml total',
      'Pouch Dimensions': '20cm x 10cm'
    },
    gender: 'Unisex',
    popularityScore: 78
  },
  {
    id: 'prod-run-04',
    name: 'PaceMaker GPS Sport Watch',
    sport: 'Running',
    productType: 'Equipment',
    brand: 'Zenith Athletics',
    price: 199.99,
    originalPrice: 249.99,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Precision GPS smartwatch with wrist heart rate monitoring, VO2 max estimation, interval workout builder, and 14-day battery life.',
    features: [
      'Multi-constellation GPS tracking',
      'Optical heart rate sensor',
      '5 ATM water resistance',
      '14 days battery in smartwatch mode'
    ],
    colors: [{ name: 'Matte Black', hex: '#1E293B' }, { name: 'Titanium Gray', hex: '#64748B' }],
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Display': '1.3" Sunlight-visible MIP',
      'Battery Life': 'up to 24 hours GPS'
    },
    gender: 'Unisex',
    isFeatured: true,
    popularityScore: 99
  },
  {
    id: 'prod-run-05',
    name: 'ThermaFit Cold Weather Compression Top',
    sport: 'Running',
    productType: 'Apparel',
    brand: 'Apex Pro',
    price: 45.00,
    rating: 4.7,
    reviewCount: 52,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Brushed fleece thermal compression long sleeve engineered to lock in heat while expelling moisture during winter runs.',
    features: [
      'Dual-layer thermal fabric',
      'Flatlock seams to eliminate chafing',
      'Thumbhole cuffs',
      'Mock neck collar'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#000000' }, { name: 'Electric Blue', hex: '#0066FF' }],
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Material': '85% Polyester, 15% Spandex'
    },
    gender: 'Women',
    popularityScore: 82
  },

  // FOOTBALL (5 Products)
  {
    id: 'prod-foot-01',
    name: 'Apex Strike Elite Firm-Ground Football Cleats',
    sport: 'Football',
    productType: 'Footwear',
    brand: 'Apex Pro',
    price: 119.99,
    originalPrice: 149.99,
    discountPercent: 20,
    rating: 4.8,
    reviewCount: 96,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Designed for pinpoint control and lightning acceleration on firm natural grass fields. Textured synthetic upper provides superior ball friction.',
    features: [
      '3D Touch Grip control upper',
      'Agility stud configuration for fast cuts',
      'Ankle collar sleeve for lockdown fit',
      'Ultralight TPU soleplate'
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: 'Neon Green', hex: '#10B981' },
      { name: 'Solar Yellow', hex: '#F59E0B' }
    ],
    inStock: true,
    stockQuantity: 32,
    specifications: {
      'Surface': 'Firm Ground (FG)',
      'Upper': 'Microfiber Synthetic'
    },
    gender: 'Unisex',
    isFeatured: true,
    popularityScore: 95
  },
  {
    id: 'prod-foot-02',
    name: 'MatchPro FIFA-Quality Thermo Match Football',
    sport: 'Football',
    productType: 'Equipment',
    brand: 'Velocity Sports',
    price: 49.99,
    rating: 4.9,
    reviewCount: 118,
    image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Thermobonded seamless match ball engineered for consistent flight trajectory, low water absorption, and soft tactile feel.',
    features: [
      'Thermobonded seamless construction',
      'Butyl bladder for maximum air retention',
      'High-contrast graphic for enhanced visual tracking',
      'FIFA Quality Pro certified spec'
    ],
    sizes: ['Size 5', 'Size 4'],
    colors: [{ name: 'White/Cyan', hex: '#00F0FF' }],
    inStock: true,
    stockQuantity: 50,
    specifications: {
      'Panels': '32 Panels',
      'Bladder': 'High-Grade Butyl'
    },
    gender: 'Unisex',
    isFeatured: false,
    popularityScore: 92
  },
  {
    id: 'prod-foot-03',
    name: 'GuardTech Pro Ankle Shin Guards',
    sport: 'Football',
    productType: 'Protective Gear',
    brand: 'Apex Pro',
    price: 24.99,
    rating: 4.5,
    reviewCount: 44,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Ergonomic impact-resistant shin guards with detachable stirrup ankle protectors and breathable foam backing.',
    features: [
      'High-impact Polypropylene shell',
      'EVA foam shock-absorbing liner',
      'Detachable ankle protection sleeves',
      'Anatomical left/right design'
    ],
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Black/Silver', hex: '#1E293B' }],
    inStock: true,
    stockQuantity: 40,
    specifications: {
      'Shell': '100% Polypropylene',
      'Certification': 'CE Approved'
    },
    gender: 'Unisex',
    popularityScore: 76
  },
  {
    id: 'prod-foot-04',
    name: 'GripMaster Goalkeeper Gloves',
    sport: 'Football',
    productType: 'Protective Gear',
    brand: 'Zenith Athletics',
    price: 54.99,
    originalPrice: 69.99,
    discountPercent: 21,
    rating: 4.7,
    reviewCount: 73,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Professional 4mm German Contact Latex gloves with removable finger spine protection and full wrist wrap strap.',
    features: [
      '4mm German Contact Latex palm',
      'Negative cut for snug finger fit',
      'Removable 5-finger protection spines',
      'Airprene breathable backhand'
    ],
    sizes: ['Size 8', 'Size 9', 'Size 10', 'Size 11'],
    colors: [{ name: 'Electric Blue', hex: '#0066FF' }],
    inStock: true,
    stockQuantity: 18,
    specifications: {
      'Latex': '4mm Contact Latex',
      'Cut': 'Negative Cut'
    },
    gender: 'Unisex',
    popularityScore: 88
  },
  {
    id: 'prod-foot-05',
    name: 'ProSquad Breathable Football Jersey',
    sport: 'Football',
    productType: 'Apparel',
    brand: 'Velocity Sports',
    price: 34.99,
    rating: 4.4,
    reviewCount: 39,
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Performance match kit jersey featuring quick-drying micro-mesh construction and raglan sleeves for unrestricted arm movement.',
    features: [
      'Sweat-wicking DriMesh fabric',
      'Anti-odor technology',
      'Reinforced double-stitched hem',
      'Athletic slim fit'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Royal Blue', hex: '#0066FF' },
      { name: 'Emerald Green', hex: '#10B981' }
    ],
    inStock: true,
    stockQuantity: 28,
    specifications: {
      'Material': '100% Recycled Polyester'
    },
    gender: 'Men',
    popularityScore: 80
  },

  // CRICKET (5 Products)
  {
    id: 'prod-cric-01',
    name: 'Apex Master Edition Grade 1 English Willow Cricket Bat',
    sport: 'Cricket',
    productType: 'Equipment',
    brand: 'Apex Pro',
    price: 289.99,
    originalPrice: 349.99,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 86,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Hand-crafted Grade 1 English Willow cricket bat with massive sweet spot, thick edges, and dynamic power swell profile.',
    features: [
      'Handcrafted Grade 1 English Willow',
      '38-40mm edge profile for explosive boundary hitting',
      'Semi-oval cane handle for superior vibration absorption',
      'Toe guard fitted as standard'
    ],
    sizes: ['Short Handle (SH)', 'Long Handle (LH)'],
    colors: [{ name: 'Natural Willow', hex: '#D97706' }],
    inStock: true,
    stockQuantity: 12,
    specifications: {
      'Weight': '2lb 8oz - 2lb 10oz',
      'Grains': '7-10 Straight Grains'
    },
    gender: 'Unisex',
    isFeatured: true,
    isNew: true,
    popularityScore: 97
  },
  {
    id: 'prod-cric-02',
    name: 'ShieldPro Ultralight Batting Leg Guards',
    sport: 'Cricket',
    productType: 'Protective Gear',
    brand: 'Zenith Athletics',
    price: 79.99,
    rating: 4.7,
    reviewCount: 41,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'High-density foam padded cricket pads offering test-level impact protection without sacrificing leg speed between the wickets.',
    features: [
      'High-Density EVA foam cane construction',
      '3D-molded knee locator soft gel cup',
      'Padded inner straps for zero friction',
      'Reinforced instep protection'
    ],
    sizes: ['Men', 'Small Men', 'Youth'],
    colors: [{ name: 'Traditional White', hex: '#FFFFFF' }],
    inStock: true,
    stockQuantity: 22,
    specifications: {
      'Weight': '780g per pair',
      'Facing': 'PU Synthetic'
    },
    gender: 'Men',
    popularityScore: 84
  },
  {
    id: 'prod-cric-03',
    name: 'Apex Test Leather Cricket Balls (Pack of 6)',
    sport: 'Cricket',
    productType: 'Equipment',
    brand: 'Apex Pro',
    price: 59.99,
    rating: 4.8,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Hand-stitched 4-piece alum tanned leather cricket balls built for shape retention and consistent seam pronation across 80+ overs.',
    features: [
      'Top grain alum tanned genuine leather',
      'Hand-stitched raised seam',
      'CORK & rubber wool core',
      'Waterproof wax finish'
    ],
    colors: [{ name: 'Cherry Red', hex: '#991B1B' }, { name: 'White', hex: '#FFFFFF' }],
    inStock: true,
    stockQuantity: 35,
    specifications: {
      'Weight': '156g (5.5 oz)',
      'Count': '6 Balls per Box'
    },
    gender: 'Unisex',
    popularityScore: 89
  },
  {
    id: 'prod-cric-04',
    name: 'FlexGrip Pro Batting Gloves',
    sport: 'Cricket',
    productType: 'Protective Gear',
    brand: 'Velocity Sports',
    price: 39.99,
    originalPrice: 49.99,
    discountPercent: 20,
    rating: 4.6,
    reviewCount: 53,
    image: 'https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Pittard leather palm batting gloves with sausage finger construction for ultimate impact protection against high-speed bowling.',
    features: [
      'Premium Pittard sheepskin leather palm',
      'Split finger design for natural flex',
      'Three-piece side bolster protection',
      'Towel wristband with Velcro closure'
    ],
    sizes: ['Men', 'Youth'],
    colors: [{ name: 'White/Navy', hex: '#0F172A' }],
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Palm': 'Pittard Leather',
      'Style': 'Multi-Flex Sausage Finger'
    },
    gender: 'Unisex',
    popularityScore: 81
  },
  {
    id: 'prod-cric-05',
    name: 'Tournament Pro Wheelie Cricket Kit Bag',
    sport: 'Cricket',
    productType: 'Accessories',
    brand: 'Zenith Athletics',
    price: 89.99,
    rating: 4.7,
    reviewCount: 38,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Heavy-duty 1680D nylon wheelie gear bag with internal bat sleeves, footwear compartment, and rugged heavy-duty tractor wheels.',
    features: [
      'Integrated padded sleeves for 3 bats',
      'Separate vented shoe tunnel',
      'Heavy-duty dual tractor wheels',
      'Telescopic pulling handle'
    ],
    colors: [{ name: 'Black/Electric Blue', hex: '#0066FF' }],
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Capacity': '120 Liters',
      'Dimensions': '95cm x 38cm x 38cm'
    },
    gender: 'Unisex',
    popularityScore: 86
  },

  // CYCLING (5 Products)
  {
    id: 'prod-cyc-01',
    name: 'AeroSpeed Carbon Road Helmet',
    sport: 'Cycling',
    productType: 'Protective Gear',
    brand: 'AeroCycle',
    price: 139.99,
    originalPrice: 169.99,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: 94,
    image: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Wind-tunnel tested aerodynamic road cycling helmet featuring MIPS directional impact protection and 18 thermal cooling channels.',
    features: [
      'Integrated MIPS safety system',
      '18 wind-tunnel optimized air vents',
      'Dial-adjust fit retention system',
      'Ionic+ anti-microbial padding'
    ],
    sizes: ['S (51-55cm)', 'M (55-59cm)', 'L (59-63cm)'],
    colors: [
      { name: 'Matte White', hex: '#FFFFFF' },
      { name: 'Stealth Black', hex: '#0F172A' },
      { name: 'Hi-Vis Red', hex: '#EF4444' }
    ],
    inStock: true,
    stockQuantity: 28,
    specifications: {
      'Weight': '260g (Medium)',
      'Safety Cert': 'CPSC & EN1078'
    },
    gender: 'Unisex',
    isFeatured: true,
    popularityScore: 94
  },
  {
    id: 'prod-cyc-02',
    name: 'ProTour Ergonomic Padded Cycling Bib Shorts',
    sport: 'Cycling',
    productType: 'Apparel',
    brand: 'AeroCycle',
    price: 79.99,
    rating: 4.6,
    reviewCount: 61,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Long-distance road cycling bib shorts equipped with a 4-density Italian 3D chamois foam pad and seamless elastic leg grippers.',
    features: [
      'Italian 3D multi-density gel chamois',
      'Breathable laser-cut mesh bib straps',
      'UPF 50+ UV sun protection',
      'Reflective leg cuff strips'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#000000' }],
    inStock: true,
    stockQuantity: 30,
    specifications: {
      'Pad Density': '120 kg/m³',
      'Material': '80% Nylon, 20% Spandex'
    },
    gender: 'Men',
    popularityScore: 87
  },
  {
    id: 'prod-cyc-03',
    name: 'Lumina 1200 Rechargeable LED Bike Light Set',
    sport: 'Cycling',
    productType: 'Accessories',
    brand: 'Velocity Sports',
    price: 49.99,
    originalPrice: 59.99,
    discountPercent: 17,
    rating: 4.7,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800'
    ],
    description: '1200 lumen CREE LED headlight and 50 lumen rear safety taillight. USB-C fast charging with IPX6 waterproof rating.',
    features: [
      '1200 Lumens peak output',
      '5 lighting modes including daytime flash',
      'USB-C rechargeable 4000mAh battery',
      'Tool-free quick release handlebar mount'
    ],
    colors: [{ name: 'Anodized Black', hex: '#1E293B' }],
    inStock: true,
    stockQuantity: 40,
    specifications: {
      'Runtime': '2.5 to 12 hours',
      'Waterproof Rating': 'IPX6'
    },
    gender: 'Unisex',
    popularityScore: 91
  },
  {
    id: 'prod-cyc-04',
    name: 'StiffDrive SPD-SL Carbon Cycling Shoes',
    sport: 'Cycling',
    productType: 'Footwear',
    brand: 'AeroCycle',
    price: 159.99,
    rating: 4.8,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Competition-grade road shoe featuring full carbon composite sole (stiffness index 10) and dual BOA Li2 micro-adjust dials.',
    features: [
      'Full carbon composite outsole',
      'Dual BOA fit dial system',
      'Perforated synthetic leather upper',
      'Compatible with 3-bolt cleats'
    ],
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    colors: [{ name: 'Pearl White', hex: '#F8FAFC' }, { name: 'Black', hex: '#000000' }],
    inStock: true,
    stockQuantity: 20,
    specifications: {
      'Sole Stiffness': '10/12',
      'Weight': '235g per shoe'
    },
    gender: 'Unisex',
    popularityScore: 89
  },
  {
    id: 'prod-cyc-05',
    name: 'Precision Floor Pump with Pressure Gauge',
    sport: 'Cycling',
    productType: 'Equipment',
    brand: 'Apex Pro',
    price: 34.99,
    rating: 4.5,
    reviewCount: 49,
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'High-pressure steel barrel floor pump with easy-read 2.5-inch analog pressure gauge and smart head for Presta and Schrader valves.',
    features: [
      'Pumps up to 160 PSI / 11 BAR',
      'Dual auto-switch nozzle head',
      'Wide steel tripod base',
      'Includes sports ball needle adapter'
    ],
    colors: [{ name: 'Silver Steel', hex: '#64748B' }],
    inStock: true,
    stockQuantity: 35,
    specifications: {
      'Max Pressure': '160 PSI',
      'Valve Compatibility': 'Presta & Schrader'
    },
    gender: 'Unisex',
    popularityScore: 81
  },

  // FITNESS & GYM (5 Products)
  {
    id: 'prod-fit-01',
    name: 'PulseCore Rubber Hex Dumbbell Set (10kg - 25kg)',
    sport: 'Fitness',
    productType: 'Equipment',
    brand: 'Pulse Fitness',
    price: 149.99,
    originalPrice: 179.99,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 165,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Commercial-grade rubber encased hexagonal dumbbells with ergonomic chrome knurled steel handles. Anti-roll hex design protects home gym floors.',
    features: [
      'High-grade low-odor rubber encasement',
      'Ergonomic contoured knurled chrome grip',
      'Heavy-duty welded construction',
      'Hexagonal anti-roll shape'
    ],
    sizes: ['10 kg Pair', '15 kg Pair', '20 kg Pair', '25 kg Pair'],
    colors: [{ name: 'Black/Chrome', hex: '#334155' }],
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Material': 'Virgin Rubber & Steel',
      'Handle Diameter': '32mm'
    },
    gender: 'Unisex',
    isFeatured: true,
    popularityScore: 99
  },
  {
    id: 'prod-fit-02',
    name: 'PowerBand Heavy Resistance Bands Set',
    sport: 'Fitness',
    productType: 'Equipment',
    brand: 'Pulse Fitness',
    price: 24.99,
    rating: 4.6,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Set of 5 continuous loop 100% natural latex resistance bands for pull-up assistance, mobility work, strength training, and warmups.',
    features: [
      '100% Eco-friendly natural latex',
      '5 Resistance levels (10 lbs to 125 lbs)',
      'Includes door anchor & travel pouch',
      'Snap-resistant layered design'
    ],
    colors: [{ name: 'Multi-color Set', hex: '#0066FF' }],
    inStock: true,
    stockQuantity: 60,
    specifications: {
      'Band Length': '41 inches',
      'Levels': 'Light to X-Heavy'
    },
    gender: 'Unisex',
    popularityScore: 93
  },
  {
    id: 'prod-fit-03',
    name: 'FlexTrain Breathable Gym Workout Tank Top',
    sport: 'Fitness',
    productType: 'Apparel',
    brand: 'Apex Pro',
    price: 24.99,
    rating: 4.5,
    reviewCount: 71,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Cut-off muscle tank built with 4-way stretch fabric and deep armholes for unrestricted movement during intense weightlifting sessions.',
    features: [
      '4-Way stretch performance knit',
      'Deep drop armholes',
      'Flat-lock reinforced stitching',
      'Quick-dry moisture transport'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Heather Gray', hex: '#64748B' },
      { name: 'Onyx Black', hex: '#0F172A' }
    ],
    inStock: true,
    stockQuantity: 40,
    specifications: {
      'Material': '90% Cotton, 10% Elastane'
    },
    gender: 'Men',
    popularityScore: 82
  },
  {
    id: 'prod-fit-04',
    name: 'IronGrip Padded Weightlifting Gloves with Wrist Wrap',
    sport: 'Fitness',
    productType: 'Accessories',
    brand: 'Zenith Athletics',
    price: 19.99,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Full palm padding with anti-slip silicone grip printing and integrated 18-inch wrist wraps for wrist stabilization during heavy presses.',
    features: [
      'Silicone padded palm preventing calluses',
      'Built-in 18" heavy wrist wrap',
      'Quick pull tabs for easy removal',
      'Breathable mesh back'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black/Red', hex: '#EF4444' }],
    inStock: true,
    stockQuantity: 30,
    specifications: {
      'Wrap Length': '45cm',
      'Material': 'Neoprene & Microfiber'
    },
    gender: 'Unisex',
    popularityScore: 85
  },
  {
    id: 'prod-fit-05',
    name: 'Apex Speed Rope Cable Jump Rope',
    sport: 'Fitness',
    productType: 'Equipment',
    brand: 'Pulse Fitness',
    price: 16.99,
    rating: 4.7,
    reviewCount: 104,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800'
    ],
    description: '360-degree dual ball bearing speed rope with kink-resistant coated steel cable designed for rapid double-unders and cardio sessions.',
    features: [
      'Precision 360-degree ball bearings',
      'Kink-free 3m adjustable steel cable',
      'Aluminum knurled anti-slip handles',
      'Includes spare cable and carry bag'
    ],
    colors: [{ name: 'Electric Cyan', hex: '#00F0FF' }],
    inStock: true,
    stockQuantity: 45,
    specifications: {
      'Cable Diameter': '2.5mm',
      'Handle Length': '15cm'
    },
    gender: 'Unisex',
    popularityScore: 90
  },

  // HIKING & OUTDOORS (5 Products)
  {
    id: 'prod-hike-01',
    name: 'TerraTrek Waterproof Trail Hiking Boots',
    sport: 'Hiking',
    productType: 'Footwear',
    brand: 'TerraTrek',
    price: 139.99,
    originalPrice: 169.99,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: 119,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Rugged ankle-high wilderness hiking boots with a breathable HydroShield waterproof membrane and deep lug Vibram rubber traction outsole.',
    features: [
      'HydroShield 100% waterproof membrane',
      'Vibram multi-surface deep lug outsole',
      'Protective rubber toe cap & heel bumper',
      'Cushioned EVA midsole for trail comfort'
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    colors: [
      { name: 'Earth Brown', hex: '#78350F' },
      { name: 'Slate Olive', hex: '#3F6212' }
    ],
    inStock: true,
    stockQuantity: 24,
    specifications: {
      'Upper': 'Suede Leather & Cordura',
      'Weight': '480g per boot'
    },
    gender: 'Unisex',
    isFeatured: true,
    popularityScore: 96
  },
  {
    id: 'prod-hike-02',
    name: 'AlpinePack 45L Expedition Backpack',
    sport: 'Hiking',
    productType: 'Equipment',
    brand: 'TerraTrek',
    price: 109.99,
    rating: 4.9,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Ergonomic 45-liter technical hiking pack featuring suspended mesh airflow back panel, hydration bladder sleeve, and integrated rain cover.',
    features: [
      'Suspended AirFlow trampoline mesh back',
      'Integrated high-vis waterproof rain cover',
      'Trekking pole attachment loops',
      'Padded hip belt with dual zippered pockets'
    ],
    colors: [
      { name: 'Pine Green', hex: '#15803D' },
      { name: 'Deep Cobalt', hex: '#1E3A8A' }
    ],
    inStock: true,
    stockQuantity: 19,
    specifications: {
      'Capacity': '45 Liters',
      'Material': '420D Ripstop Nylon'
    },
    gender: 'Unisex',
    popularityScore: 94
  },
  {
    id: 'prod-hike-03',
    name: 'UltraLite Aluminum Trekking Poles (Pair)',
    sport: 'Hiking',
    productType: 'Equipment',
    brand: 'TerraTrek',
    price: 39.99,
    originalPrice: 49.99,
    discountPercent: 20,
    rating: 4.6,
    reviewCount: 65,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Quick-lock collapsible aircraft aluminum walking poles with moisture-wicking natural cork grips and extended EVA sleeves.',
    features: [
      '7075 Aircraft aluminum construction',
      'Ergonomic anti-sweat natural cork grip',
      'Flip-lock lever height adjustment',
      'Includes rubber tips & snow baskets'
    ],
    colors: [{ name: 'Charcoal/Orange', hex: '#F97316' }],
    inStock: true,
    stockQuantity: 32,
    specifications: {
      'Adjustable Range': '65cm - 135cm',
      'Weight': '240g per pole'
    },
    gender: 'Unisex',
    popularityScore: 86
  },
  {
    id: 'prod-hike-04',
    name: 'StormShield Breathable Waterproof Jacket',
    sport: 'Hiking',
    productType: 'Apparel',
    brand: 'Apex Pro',
    price: 99.99,
    rating: 4.7,
    reviewCount: 77,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Packable 2.5-layer rain shell with fully taped seams, helmet-compatible hood, and pit-zips for rapid heat ventilation.',
    features: [
      '10,000mm Waterproof / 10,000g Breathable',
      '100% Fully taped seams',
      'Underarm pit zippers for cooling',
      'Stows into its own chest pocket'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Alpine Blue', hex: '#0284C7' }, { name: 'Black', hex: '#000000' }],
    inStock: true,
    stockQuantity: 21,
    specifications: {
      'Waterproof Rating': '10,000 mm',
      'Weight': '310g'
    },
    gender: 'Men',
    popularityScore: 88
  },
  {
    id: 'prod-hike-05',
    name: 'SolarBeam 20,000mAh Rugged Outdoor Power Bank',
    sport: 'Hiking',
    productType: 'Accessories',
    brand: 'Zenith Athletics',
    price: 45.00,
    rating: 4.5,
    reviewCount: 54,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Shockproof and IP67 dust/waterproof portable charger with integrated solar panel, dual USB-C ports, and 3-mode LED camping lantern.',
    features: [
      '20,000mAh massive capacity',
      'IP67 Waterproof & shockproof rubber housing',
      'Emergency solar charging panel',
      'Dual 18W Fast USB-C QuickCharge ports'
    ],
    colors: [{ name: 'Tactical Orange', hex: '#F97316' }],
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Battery': 'Li-Polymer 20,000mAh',
      'Torch lumens': '300 Lumens'
    },
    gender: 'Unisex',
    popularityScore: 83
  },

  // SWIMMING (5 Products)
  {
    id: 'prod-swim-01',
    name: 'HydroStream Mirror Anti-Fog Swim Goggles',
    sport: 'Swimming',
    productType: 'Equipment',
    brand: 'HydroStream',
    price: 24.99,
    originalPrice: 29.99,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 135,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Low-profile hydrodynamic racing goggles with UV400 mirrored lenses, anti-fog coating, and leak-proof 3D silicone gasket.',
    features: [
      'Long-lasting anti-fog lens coating',
      'UV400 glare-reducing mirrored lenses',
      'Ultra-soft 3D silicone eye seals',
      'Includes 3 interchangeable nose bridges'
    ],
    colors: [
      { name: 'Silver Mirror', hex: '#94A3B8' },
      { name: 'Blue Mirror', hex: '#0066FF' }
    ],
    inStock: true,
    stockQuantity: 50,
    specifications: {
      'Lens': 'Polycarbonate UV400',
      'Strap': '100% Liquid Silicone'
    },
    gender: 'Unisex',
    isFeatured: true,
    popularityScore: 95
  },
  {
    id: 'prod-swim-02',
    name: 'AquaPro Performance One-Piece Swimsuit',
    sport: 'Swimming',
    productType: 'Apparel',
    brand: 'HydroStream',
    price: 44.99,
    rating: 4.7,
    reviewCount: 68,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Chlorine-proof training swimsuit featuring dynamic crossover back straps, medium leg cut, and 4-way stretch Endurance fabric.',
    features: [
      '100% Chlorine resistant Endurance+ fabric',
      'Ergonomic crossover open back',
      'UPF 50+ Sun protection',
      'Front fully lined'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Navy/Cyan', hex: '#00F0FF' }, { name: 'Black', hex: '#000000' }],
    inStock: true,
    stockQuantity: 30,
    specifications: {
      'Material': '53% Polyester, 47% PBT'
    },
    gender: 'Women',
    popularityScore: 89
  },
  {
    id: 'prod-swim-03',
    name: 'HydroFlex Silicone Training Swim Cap',
    sport: 'Swimming',
    productType: 'Accessories',
    brand: 'HydroStream',
    price: 11.99,
    rating: 4.5,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1560090995-0193067c3214?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1560090995-0193067c3214?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Seamless 100% hypoallergenic silicone swim cap designed to reduce drag in water while protecting hair from chlorine pool water.',
    features: [
      '100% Premium non-toxic silicone',
      'Tear-resistant elastic stretch',
      'Internal anti-slip textured grip',
      'Ergonomic ear pockets'
    ],
    colors: [{ name: 'Electric Blue', hex: '#0066FF' }, { name: 'Hot Pink', hex: '#EC4899' }],
    inStock: true,
    stockQuantity: 70,
    specifications: {
      'Material': '100% Molded Silicone'
    },
    gender: 'Unisex',
    popularityScore: 84
  },
  {
    id: 'prod-swim-04',
    name: 'WaveDrive Short Blade Swim Training Fins',
    sport: 'Swimming',
    productType: 'Equipment',
    brand: 'HydroStream',
    price: 34.99,
    rating: 4.6,
    reviewCount: 47,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Short dual-density natural rubber fins engineered to develop faster kick tempo and ankle flexibility without muscle strain.',
    features: [
      'Short blade for high-frequency kick rhythm',
      'Soft open-heel silicone foot pocket',
      'Anti-slip tread under footbed',
      'Natural floating buoyancy'
    ],
    sizes: ['S (36-38)', 'M (39-41)', 'L (42-44)', 'XL (45-47)'],
    colors: [{ name: 'Blue/Yellow', hex: '#F59E0B' }],
    inStock: true,
    stockQuantity: 22,
    specifications: {
      'Material': 'Natural Rubber Blend'
    },
    gender: 'Unisex',
    popularityScore: 82
  },
  {
    id: 'prod-swim-05',
    name: 'MicroDry Quick-Absorb Microfiber Towel',
    sport: 'Swimming',
    productType: 'Accessories',
    brand: 'Apex Pro',
    price: 19.99,
    rating: 4.8,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Absorbs 4x its weight in water and dries 3x faster than standard cotton towels. Includes a mesh ventilation carry pouch.',
    features: [
      'Ultra-compact lightweight microfiber',
      'Absorbs 400% water by weight',
      'Antibacterial odor-resistant treatment',
      'Hanging snap loop'
    ],
    sizes: ['Large (140cm x 70cm)', 'XL (180cm x 90cm)'],
    colors: [{ name: 'Teal', hex: '#00F0FF' }, { name: 'Slate Gray', hex: '#475569' }],
    inStock: true,
    stockQuantity: 45,
    specifications: {
      'Material': '85% Polyester, 15% Polyamide'
    },
    gender: 'Unisex',
    popularityScore: 88
  },

  // YOGA & WELLNESS (5 Products)
  {
    id: 'prod-yoga-01',
    name: 'ZenFlow Pro Non-Slip TPE Yoga Mat (6mm)',
    sport: 'Yoga',
    productType: 'Equipment',
    brand: 'ZenFlow',
    price: 49.99,
    originalPrice: 59.99,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 178,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Eco-friendly TPE dual-layer non-slip yoga mat with laser-engraved alignment guides for optimal posture during Hot Yoga and Pilates.',
    features: [
      'Eco-friendly 100% recyclable TPE',
      'Laser-engraved body alignment markings',
      '6mm High-density joint cushioning',
      'Includes carrying strap and sling'
    ],
    sizes: ['Standard (183cm x 61cm)'],
    colors: [
      { name: 'Sage Green', hex: '#10B981' },
      { name: 'Plum Violet', hex: '#8B5CF6' },
      { name: 'Ocean Cyan', hex: '#00F0FF' }
    ],
    inStock: true,
    stockQuantity: 40,
    specifications: {
      'Thickness': '6mm',
      'Weight': '950g'
    },
    gender: 'Unisex',
    isFeatured: true,
    isNew: true,
    popularityScore: 99
  },
  {
    id: 'prod-yoga-02',
    name: 'ZenFlex High-Waist Seamless Yoga Leggings',
    sport: 'Yoga',
    productType: 'Apparel',
    brand: 'ZenFlow',
    price: 44.99,
    rating: 4.8,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Squat-proof 4-way stretch leggings with tummy-control high waistband, butter-soft touch fabric, and hidden waistband card key pocket.',
    features: [
      '100% Squat-proof non-see-through fabric',
      'Butter-soft Nulu-feel fabric touch',
      'Seamless high-rise waistband',
      'Hidden key/card pocket'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Olive Green', hex: '#3F6212' },
      { name: 'Dusty Rose', hex: '#F43F5E' },
      { name: 'Black', hex: '#000000' }
    ],
    inStock: true,
    stockQuantity: 35,
    specifications: {
      'Material': '75% Nylon, 25% Spandex',
      'Rise': 'High-Rise 10"'
    },
    gender: 'Women',
    popularityScore: 96
  },
  {
    id: 'prod-yoga-03',
    name: 'CorkBalance Ergonomic Yoga Block & Strap Set',
    sport: 'Yoga',
    productType: 'Equipment',
    brand: 'ZenFlow',
    price: 24.99,
    rating: 4.7,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Set of 2 sustainable natural cork yoga support blocks and a 8ft metal D-ring cotton stretching strap for deep flex extension.',
    features: [
      '100% Natural solid sustainable cork',
      'Beveled rounded edges for comfortable grip',
      '8ft Heavy-duty cotton strap with steel D-ring',
      'Moisture-proof antimicrobial cork'
    ],
    colors: [{ name: 'Natural Cork', hex: '#D97706' }],
    inStock: true,
    stockQuantity: 30,
    specifications: {
      'Block Dimensions': '23cm x 15cm x 10cm',
      'Strap Length': '2.4 Meters'
    },
    gender: 'Unisex',
    popularityScore: 85
  },
  {
    id: 'prod-yoga-04',
    name: 'AromaRelease Deep Tissue Foam Roller (13")',
    sport: 'Yoga',
    productType: 'Equipment',
    brand: 'Pulse Fitness',
    price: 22.99,
    rating: 4.6,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&q=80&w=800'
    ],
    description: '3D grid trigger-point foam roller designed to release tight muscle knots, enhance blood circulation, and speed up post-workout recovery.',
    features: [
      'Distorted 3D matrix surface mimics fingertip massage',
      'Rigid hollow EVA core withstands 250kg weight',
      'Compact 13" travel length',
      'Waterproof and easy to wipe clean'
    ],
    colors: [{ name: 'Deep Purple', hex: '#7C3AED' }, { name: 'Black', hex: '#000000' }],
    inStock: true,
    stockQuantity: 28,
    specifications: {
      'Dimensions': '33cm x 14cm',
      'Weight Capacity': '250 kg'
    },
    gender: 'Unisex',
    popularityScore: 89
  },
  {
    id: 'prod-yoga-05',
    name: 'BreatheFree Strappy Yoga Sports Bra',
    sport: 'Yoga',
    productType: 'Apparel',
    brand: 'ZenFlow',
    price: 29.99,
    rating: 4.6,
    reviewCount: 62,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Light-to-medium support strappy sports bra featuring removable push-up padding, moisture-wicking technology, and anti-chafing band.',
    features: [
      'Chic multi-strap back design',
      'Removable breathable cup pads',
      'Wide supportive elastic underband',
      'Smooth friction-free seams'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'Lavender', hex: '#A855F7' }, { name: 'White', hex: '#FFFFFF' }],
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Support Level': 'Light to Medium',
      'Material': '80% Nylon, 20% Elastane'
    },
    gender: 'Women',
    popularityScore: 81
  }
];

export const SPORTS_CATEGORIES = [
  {
    id: 'Running',
    name: 'Running',
    tagline: 'Speed, Endurance & Trail',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800',
    iconName: 'Activity',
    productCount: 5
  },
  {
    id: 'Football',
    name: 'Football',
    tagline: 'Cleats, Balls & Match Kit',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
    iconName: 'Trophy',
    productCount: 5
  },
  {
    id: 'Cricket',
    name: 'Cricket',
    tagline: 'Bats, Pads & Leather Balls',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    iconName: 'Target',
    productCount: 5
  },
  {
    id: 'Cycling',
    name: 'Cycling',
    tagline: 'Helmets, Apparel & Gear',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
    iconName: 'Bike',
    productCount: 5
  },
  {
    id: 'Fitness',
    name: 'Fitness',
    tagline: 'Dumbbells, Bands & Accessories',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800',
    iconName: 'Dumbbell',
    productCount: 5
  },
  {
    id: 'Hiking',
    name: 'Hiking',
    tagline: 'Boots, Backpacks & Outdoor',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800',
    iconName: 'Compass',
    productCount: 5
  },
  {
    id: 'Swimming',
    name: 'Swimming',
    tagline: 'Goggles, Swimwear & Caps',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800',
    iconName: 'Waves',
    productCount: 5
  },
  {
    id: 'Yoga',
    name: 'Yoga',
    tagline: 'Mats, Leggings & Recovery',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    iconName: 'HeartHandshake',
    productCount: 5
  }
];

export const BRANDS = [
  'Apex Pro',
  'Velocity Sports',
  'Zenith Athletics',
  'Pulse Fitness',
  'TerraTrek',
  'AeroCycle',
  'HydroStream',
  'ZenFlow'
];
