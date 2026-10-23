export interface InteriorService {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  materialsUsed: string[];
  startingPrice: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchen' | 'Wood Work' | 'Living Room' | 'Commercial' | 'Bedroom';
  location: string;
  duration: string;
  area: string;
  image: string;
  description: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  project: string;
  rating: number;
  date: string;
  quote: string;
}

export const BRAND_INFO = {
  name: 'MOHINZ INTERIORS',
  tagline: 'Crafting Elegant Spaces',
  leadDesigner: 'Abrar Ahamed',
  leadTitle: 'Principal Designer & Project Director',
  phone: '+91 8056099435',
  phoneClean: '918056099435',
  email: 'info@mohinzinteriors.com',
  address: 'Kandigai, Chennai, Tamil Nadu 600127',
  experienceYears: 12,
  completedProjects: 450,
  warrantyYears: 10,
  deliveryDays: 45,
  whatsappMessage: 'Hello Abrar, I am interested in interior works with Mohinz Interiors. Please share your portfolio and schedule a consultation.',
};

export const SERVICES_DATA: InteriorService[] = [
  {
    id: 'wood-works',
    title: 'Wood Works',
    category: 'Joinery & Cabinetry',
    iconName: 'Armchair',
    shortDesc: 'Custom modular wardrobes, premium veneer paneling & precision solid wood carpentry.',
    fullDesc: 'Custom-crafted architectural carpentry tailored to your spatial layout. From floor-to-ceiling modular sliding wardrobes to bespoke study desks and display cabinetry, our precision joinery delivers seamless elegance.',
    highlights: ['German edge-banding technology', 'Soft-close hinges & hydraulic lift-ups', 'Termite-treated moisture-resistant ply', 'Bespoke internal drawer organizers'],
    materialsUsed: ['BWP 710 Grade Marine Plywood', 'Natural Teak & Walnut Veneer', 'Hafele / Blum Concealed Fittings', 'Matte PU & Melamine Polish'],
    startingPrice: '₹1,250 / sq.ft',
    image: '/src/assets/images/mohinz_wardrobe_bedroom_1792770681072.jpg',
  },
  {
    id: 'kitchen-works',
    title: 'Modular Kitchens',
    category: 'Culinary Architecture',
    iconName: 'UtensilsCrossed',
    shortDesc: 'High-gloss acrylic, PU & quartz island kitchens with smart ergonomic storage solutions.',
    fullDesc: 'Transform your culinary space with custom modular layouts: L-shaped, Parallel, U-shaped, or luxury Waterfall Island configurations designed for Indian cooking habits with zero grease traps and maximum storage.',
    highlights: ['Corner tandem pull-outs & carousel racks', 'Quartz waterfall countertops with zero seams', 'Concealed under-cabinet warm LED strips', 'Soft-close Blum Legrabox drawers'],
    materialsUsed: ['Action TESA HDHMR / Marine Grade Ply', 'Scratch-resistant Acrylic & Glass', 'Blum & Hettich Hardware', 'Anti-stain Nano-sealed Quartz'],
    startingPrice: '₹1.85 Lakhs on-ward',
    image: '/src/assets/images/mohinz_luxury_kitchen_1792770680050.jpg',
  },
  {
    id: 'flooring',
    title: 'Flooring Solutions',
    category: 'Surface Finishes',
    iconName: 'Grid3X3',
    shortDesc: 'Italian marble installation, engineered wooden planks, vitrified tiles & microcement.',
    fullDesc: 'Solid foundation for luxury interiors. We source and install high-durability glazed vitrified tiles, polished imported Italian marble, seamless herringbone hardwood, and waterproof luxury vinyl.',
    highlights: ['Laser-leveled subfloor preparation', 'Stain-resistant epoxy grouting', 'Sound-dampening acoustic underlay', 'Mirror diamond polish on marble'],
    materialsUsed: ['Imported Botticino & Statuario Marble', 'Engineered Oak Hardwood Planks', 'Kajaria Double-charged Vitrified', 'Heavy-duty SPC Waterproof Flooring'],
    startingPrice: '₹160 / sq.ft',
    image: '/src/assets/images/mohinz_hero_interior_1792770679759.jpg',
  },
  {
    id: 'wall-works',
    title: 'Wall Works & Paneling',
    category: 'Architectural Surfaces',
    iconName: 'Layers',
    shortDesc: 'Fluted timber slats, acoustic fabric louvers, bespoke wallpapers & Italian texture coats.',
    fullDesc: 'Turn plain walls into artistic focal points. We execute architectural fluted timber paneling, concealed door panelling, luxury metallic leafing, and imported washable acoustic wall coverings.',
    highlights: ['Concealed wiring & mood cove lighting', 'Acoustic sound absorption panels', 'Washable scratch-resistant textures', 'Seamless hidden passage doors'],
    materialsUsed: ['Charcoal Fluted Louvers', 'Saint-Gobain Gyproc & Wood Cladding', 'Asian Paints Royale Play Metallics', 'Non-woven Breathable Wallpapers'],
    startingPrice: '₹350 / sq.ft',
    image: '/src/assets/images/mohinz_tv_unit_living_1792770681753.jpg',
  },
  {
    id: 'bedroom',
    title: 'Bedroom Suites',
    category: 'Private Living',
    iconName: 'BedDouble',
    shortDesc: 'Bespoke master bedrooms with integrated dressers, headboards & ambient lighting.',
    fullDesc: 'Sanctuaries of rest crafted with warmth and privacy. Custom king-size storage beds, full-height mirror dressing corners, integrated reading lights, and acoustic sound insulation.',
    highlights: ['Hydraulic storage bed frames', 'Floating nightstands with wireless charging', 'Dimmable dual-temperature lighting', 'Walk-in wardrobe with glass fluted doors'],
    materialsUsed: ['Textured Linen & Velvet Upholstery', 'Rose Gold Aluminum Profiles', 'Fluted Glass with Warm LEDs', 'Premium Veneer Millwork'],
    startingPrice: '₹1.45 Lakhs on-ward',
    image: '/src/assets/images/mohinz_wardrobe_bedroom_1792770681072.jpg',
  },
  {
    id: 'tv-units',
    title: 'TV & Media Units',
    category: 'Living Architecture',
    iconName: 'Tv',
    shortDesc: 'Floating media consoles, marble slab backdrops, backlit louvers & cable management.',
    fullDesc: 'Commanding living room entertainment walls designed for cinematic setups. Concealed conduits for all TV, soundbar, and gaming cables with floating cabinets and accent display niches.',
    highlights: ['100% zero-visible wire guarantee', 'Illuminated floating console base', 'Marble / Granite backdrop slabs', 'Acoustic fluted side wings'],
    materialsUsed: ['Composite White Statuario Marble', 'American Walnut Veneer', 'Hafele Push-to-open Catches', 'Anodized Black Aluminum Handles'],
    startingPrice: '₹45,000 on-ward',
    image: '/src/assets/images/mohinz_tv_unit_living_1792770681753.jpg',
  },
  {
    id: 'office',
    title: 'Office & Commercial',
    category: 'Corporate Workspaces',
    iconName: 'Building2',
    shortDesc: 'Ergonomic workstations, executive boardrooms, reception desks & acoustic cabins.',
    fullDesc: 'Functional, high-productivity office fit-outs in Chennai. Modern collaborative layouts, acoustic conference suites, soundproof call booths, and branded reception entryways.',
    highlights: ['Cable-integrated modular workstations', 'Soundproof double-glazed partitions', 'Durable high-traffic laminate surfaces', 'Quick 30-day turnaround for startups'],
    materialsUsed: ['Toughened 12mm Acoustic Glass', 'Powder-coated Heavy MS Frames', 'BIFMA-standard Work Surfaces', 'Sound-absorbing Felt Wall Tiles'],
    startingPrice: '₹850 / sq.ft',
    image: '/src/assets/images/mohinz_office_commercial_1792770681216.jpg',
  },
  {
    id: 'ceiling',
    title: 'False Ceiling & Lighting',
    category: 'Overhead Architecture',
    iconName: 'Lightbulb',
    shortDesc: 'Minimalist gypsum ceilings, cove lighting, magnetic track lights & wooden rafters.',
    fullDesc: 'Architectural false ceilings that redefine room proportions and lighting scenes. Magnetic low-voltage track lights, warm indirect cove lighting, and timber rafter highlights.',
    highlights: ['Zero-crack Saint-Gobain channel grids', 'Multi-circuit mood lighting control', 'A/C duct concealed integration', 'Anti-sagging moisture resistance'],
    materialsUsed: ['Saint-Gobain Gyproc Sheets & GI Channels', 'Philips & Osram Warm LED Strips', 'Magnetic 48V Low-Voltage Tracks', 'Natural Teak Ceiling Rafters'],
    startingPrice: '₹110 / sq.ft',
    image: '/src/assets/images/mohinz_hero_interior_1792770679759.jpg',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'The Grand Residence',
    category: 'Living Room',
    location: 'Kandigai, Chennai',
    duration: '38 Days',
    area: '2,400 sq.ft',
    image: '/src/assets/images/mohinz_hero_interior_1792770679759.jpg',
    description: 'Complete luxury 3 BHK interior with custom teak paneling, double-height ceiling accents, Italian Botticino marble, and customized ambient cove lighting.',
    features: ['Teak Wood Slats & Brass Inlays', 'Bespoke Sectional Seating', 'Italian Marble Flooring', 'Integrated Smart Mood Lighting'],
  },
  {
    id: 'proj-2',
    title: 'Culinary Masterpiece',
    category: 'Kitchen',
    location: 'OMR Expressway, Chennai',
    duration: '24 Days',
    area: '280 sq.ft',
    image: '/src/assets/images/mohinz_luxury_kitchen_1792770680050.jpg',
    description: 'An open-concept waterfall island kitchen crafted in dark walnut and matte champagne acrylic, featuring Blum Legrabox soft-close fittings and built-in appliances.',
    features: ['Quartz Waterfall Island Bar', 'Built-in Pantry with Tandem Trays', 'Hafele Soft-Close Hardware', 'Zero-Grease Surface Finish'],
  },
  {
    id: 'proj-3',
    title: 'Minimalist Master Suite',
    category: 'Bedroom',
    location: 'Velachery, Chennai',
    duration: '28 Days',
    area: '420 sq.ft',
    image: '/src/assets/images/mohinz_wardrobe_bedroom_1792770681072.jpg',
    description: 'Floor-to-ceiling illuminated fluted glass wardrobe, upholstered king bed, floating walnut nightstands, and acoustic sound-treated walls.',
    features: ['Illuminated Tinted Glass Wardrobe', 'Fluted Wood Accent Wall', 'Hydraulic Lift-Up King Bed', 'Integrated Ambient Reading Ledges'],
  },
  {
    id: 'proj-4',
    title: 'Architectural TV Media Lounge',
    category: 'Living Room',
    location: 'Tambaram East, Chennai',
    duration: '16 Days',
    area: '350 sq.ft',
    image: '/src/assets/images/mohinz_tv_unit_living_1792770681753.jpg',
    description: 'Wall-hung floating media unit with full-height Statuario marble backdrop, fluted timber acoustic louvers, and 100% concealed cable routing.',
    features: ['Statuario Marble Backdrop', 'Fluted American Walnut Louvers', 'Under-Console Floating LED Glow', 'Custom Concealed AV Box'],
  },
  {
    id: 'proj-5',
    title: 'Nexus Venture Boardroom',
    category: 'Commercial',
    location: 'Guindy Tech Park, Chennai',
    duration: '32 Days',
    area: '3,200 sq.ft',
    image: '/src/assets/images/mohinz_office_commercial_1792770681216.jpg',
    description: 'Executive conference room and 24-person collaborative workspace with warm timber wall cladding, frameless acoustic glass, and integrated video conferencing.',
    features: ['Custom Live-Edge Boardroom Table', 'Double-Glazed Soundproof Partitions', 'Acoustic Timber Cladding', 'Concealed Presentation Console'],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Dr. Rajesh & Meena Kumar',
    role: 'Homeowners (3 BHK Apartment)',
    location: 'Kandigai, Chennai',
    project: 'Full Home Interior & Kitchen',
    rating: 5,
    date: 'February 2026',
    quote: 'Abrar Ahamed and his craftsmen delivered our home in Kandigai with flawless precision. The kitchen modular woodwork and bedroom wardrobes have immaculate factory edge-banding. Delivered on the 41st day without a single price escalation.',
  },
  {
    id: 'rev-2',
    name: 'Syed Farhan',
    role: 'Managing Director, Apex Labs',
    location: 'OMR, Chennai',
    project: 'Office Fit-out & Conference Suite',
    rating: 5,
    date: 'January 2026',
    quote: 'We vetted three top interior brands in Chennai before choosing Mohinz Interiors. Their attention to acoustic timber details and clean cable conduits in our boardroom was second to none. Truly professional execution.',
  },
  {
    id: 'rev-3',
    name: 'Kavitha Sundaram',
    role: 'Architect & Villa Owner',
    location: 'Velachery, Chennai',
    project: 'Custom Wood Works & TV Console',
    rating: 5,
    date: 'March 2026',
    quote: 'As an architect myself, I have very strict quality expectations for joinery and alignments. The TV unit with marble backdrop and fluted louvers by Mohinz Interiors is breathtaking. Abrar handles clients with genuine transparency.',
  },
  {
    id: 'rev-4',
    name: 'G. Venkatesh',
    role: 'IT Consultant',
    location: 'Tambaram, Chennai',
    project: '2 BHK Modular Kitchen & Wardrobes',
    rating: 5,
    date: 'December 2025',
    quote: 'Unlike local contractors who disappear mid-work, Mohinz Interiors gave a clear 45-day milestone chart and stuck to it. Hafele hardware, premium Greenply plywood, and clean daily cleanups during installation.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 'materials',
    title: 'Premium Quality Materials',
    subtitle: 'Zero Compromise on Raw Materials',
    description: 'We exclusively use IS:710 Marine Grade BWP Plywood from Greenply / Century, coupled with certified Hafele and Blum hardware with 10-year warranty.',
    stat: '100% Genuine',
    statLabel: 'Certified Materials',
  },
  {
    id: 'team',
    title: 'Experienced Master Team',
    subtitle: 'Led by Abrar Ahamed',
    description: 'Over 12 years of hands-on interior carpentry and interior architectural expertise. Every site has a dedicated supervisor inspecting mm-level alignment.',
    stat: '12+ Years',
    statLabel: 'Field Expertise',
  },
  {
    id: 'pricing',
    title: 'Transparent, Honest Pricing',
    subtitle: 'No Surprise Bills or Hidden Taxes',
    description: 'Itemized Bill of Quantities (BOQ) with clearly listed material brands, hardware models, and square footage measurements before work begins.',
    stat: '0 Hidden Costs',
    statLabel: 'Guaranteed BOQ',
  },
  {
    id: 'timeline',
    title: 'Strict 45-Day Delivery',
    subtitle: 'On-Time Handover Guarantee',
    description: 'Precision pre-fabrication in our Chennai manufacturing unit ensures on-site assembly is completed smoothly and cleanly within 45 calendar days.',
    stat: '45 Days',
    statLabel: 'Milestone Delivery',
  },
];

export const COMPARISON_DATA = [
  {
    feature: 'Material Standards',
    mohinz: 'Certified 710 Grade Marine Plywood with Hafele/Blum hardware',
    others: 'Unverified commercial ply & generic local hardware',
  },
  {
    feature: 'Edge-Banding & Finish',
    mohinz: 'Precision German CNC machine edge-banding with PUR water resistance',
    others: 'Hand-glued manual edges prone to peeling within months',
  },
  {
    feature: 'Pricing Transparency',
    mohinz: 'Detailed itemized BOQ with fixed price lock guarantee',
    others: 'Vague lump-sum quotes with frequent mid-project cost escalation',
  },
  {
    feature: 'Warranty & Aftercare',
    mohinz: '10-Year written structural warranty with free annual service',
    others: 'No written warranty; difficult to reach contractor after handover',
  },
  {
    feature: 'Timeline Commitment',
    mohinz: 'Strict 45-day guaranteed handover with penalty compensation',
    others: 'Indefinite delays extending months past promised deadline',
  },
];
