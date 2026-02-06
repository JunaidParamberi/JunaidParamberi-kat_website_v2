
import { ServiceType, Sector, PortfolioItem, ServiceDetail, BlogPost } from './types';

export const BRAND_NAME = "KAT Group";

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_CONTENT = {
  title: "Powering",
  titleGradient: "Global Giants",
  description: "The definitive partner for manpower supply and high-spec technical services. We deploy elite teams that define industrial excellence.",
  primaryCta: "Global Services",
  secondaryCta: "The KAT Method",
  images: [
    "https://images.unsplash.com/photo-1541888941257-234b3e839213?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1454165833767-6216d518f0e3?auto=format&fit=crop&q=80&w=600"
  ],
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "50k+", label: "Placements" },
    { value: "ISO", label: "Certified" }
  ]
};

export const ABOUT_CONTENT = {
  badge: "Leading Industrial Partner",
  title: "Excellence",
  titleAccent: "Without Compromise",
  description: "Founded in 2023 and headquartered in Sharjah, KAT GROUPS SFZ LLC has rapidly ascended to become the preferred partner for complex workforce and technical requirements across the GCC and beyond.",
  quote: "Global reach, localized precision. We build the teams that build nations.",
  quoteAuthor: "Integrity first",
  mainImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
  ctaText: "The KAT Story",
  values: [
    { icon: 'Target', title: "Precision", desc: "Aligning elite talent with surgical precision to organizational needs." },
    { icon: 'TrendingUp', title: "Scalability", desc: "Expanding operations into Dubai to support global infrastructure booms." },
    { icon: 'HeartHandshake', title: "Commitment", desc: "Unwavering dedication to safety, compliance, and client growth." },
    { icon: 'ShieldCheck', title: "Quality", desc: "ISO 9001 certified processes driving world-class outcomes." }
  ]
};

export const CTA_CONTENT = {
  badge: "Strategic Partnership",
  title: "Transforming",
  titleLine2: "Talent into Power",
  description: "Connect with our consultants to build a bespoke workforce strategy that matches your growth velocity.",
  primaryCta: "Request Strategy Call",
  secondaryCta: "Global Locations"
};

export const LOADER_STATUSES = [
  "Initializing Global Networks",
  "Optimizing Workforce Data",
  "Securing Technical Protocols",
  "Mapping Industrial Mastery",
  "KAT Group: Excellence Without Compromise"
];

export const FOOTER_CONTENT = {
  description: "Elevating industrial operations through elite workforce solutions. ISO 9001 certified and globally operational across 12 sectors.",
  hq_sharjah: "Business Center, Sharjah Publishing City Free Zone, Sharjah, UAE",
  hq_dubai: "Al Hilal Bank Building, Near Qusais Metro Station, Dubai, UAE",
  phone: "+971 58 662 2510",
  email: "info@katgroup.ae",
  socials: ['Facebook', 'Twitter', 'Instagram', 'Linkedin'],
  copyright: "© 2024 KAT GROUPS SFZ LLC. GLOBAL INFRASTRUCTURE PARTNER."
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-recruitment-future',
    title: 'The Future of AI in Technical Recruitment',
    excerpt: 'How machine learning is redefining how we match elite talent with industrial needs in the GCC.',
    category: 'Technology',
    date: 'March 15, 2024',
    author: 'Ahmed Khalid',
    authorRole: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readTime: '6 min',
    tags: ['AI', 'Recruitment', 'Future Work'],
    quote: "Precision isn't just a goal in recruitment; it's the baseline. AI allows us to see beyond the CV and into the technical soul of a project.",
    content: [
      "In the rapidly evolving industrial landscape of the Middle East, the traditional methods of headhunting are no longer sufficient. At KAT Group, we have integrated advanced machine learning protocols to scan global talent pools with surgical precision.",
      "The complexity of Oil & Gas projects requires more than just years on a resume. It requires a specific behavioral and technical alignment that only deep data analysis can identify. Our proprietary KAT-Match algorithm processes over 50 data points per candidate to ensure project-cultural fit.",
      "By 2025, we estimate that 80% of our high-spec technical placements will be influenced by AI-driven predictive performance metrics, ensuring that our clients receive not just labor, but optimized industrial output."
    ]
  },
  {
    id: 'offshore-safety-hse',
    title: 'Safety Standards in Offshore Oil & Gas',
    excerpt: 'Achieving zero-harm benchmarks in the world\'s most challenging environments through rigorous HSE protocols.',
    category: 'Industrial Blog',
    date: 'Feb 28, 2024',
    author: 'Sarah James',
    authorRole: 'Head of Quality Assurance',
    image: 'https://images.unsplash.com/photo-1516195851888-6f1a981a8a21?auto=format&fit=crop&q=80&w=1200',
    readTime: '8 min',
    tags: ['HSE', 'Safety', 'Oil & Gas'],
    quote: "Safety is not a department; it's a culture that must be lived at 40 feet below sea level and 100 feet above the platform.",
    content: [
      "Offshore operations represent the pinnacle of industrial risk. KAT Group's approach to health, safety, and environment (HSE) is built on a foundation of 'Zero Harm'. We don't just comply with ISO standards; we define the edge of safety innovation.",
      "Every technician we deploy to the offshore sector undergoes 200 hours of rigorous safety simulation training before their first day on the rig. This includes emergency response, deep-sea survival, and high-pressure system management.",
      "Our recent certification update to ISO 45001:2018 underscores our commitment to maintaining a world-class safe work environment, even in the most hostile maritime conditions."
    ]
  },
  {
    id: 'corporate-expansion-dubai',
    title: 'KAT Group Announces Dubai Regional HQ Expansion',
    excerpt: 'Strategic move to Al Hilal Bank Building marks a new era for technical services in the Emirates.',
    category: 'Press Release',
    date: 'January 10, 2024',
    author: 'KAT Communications',
    authorRole: 'Corporate Desk',
    image: 'https://images.unsplash.com/photo-1582653280643-e798e94ca25f?auto=format&fit=crop&q=80&w=1200',
    readTime: '4 min',
    tags: ['Expansion', 'Dubai', 'Corporate'],
    content: [
      "KAT GROUPS SFZ LLC is proud to announce the official opening of our Dubai Regional Office in the prestigious Al Hilal Bank Building. This move strategically positions us near the Qusais Metro Station, facilitating seamless connectivity for our growing technical teams.",
      "The new headquarters will house our specialized recruitment hub and the 'KAT Innovation Lab', where we develop new workforce management technologies.",
      "This expansion is a direct response to the surge in infrastructure projects across the GCC, allowing us to reduce deployment lead times by 30% for our Dubai-based clients."
    ]
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'technical-services',
    type: ServiceType.TECHNICAL,
    title: 'Technical Services',
    icon: 'Settings',
    shortDescription: 'Premium MEP installations, HVAC systems, and high-spec facility maintenance.',
    longDescription: 'At KAT GROUPS SFZ LLC, we offer comprehensive Technical Services designed to meet the needs of both residential and commercial environments.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    features: ['HVAC Systems', 'Electrical Works', 'Plumbing', 'AMCs'],
    coreServices: [
      { title: 'HVAC Systems', description: 'Design, Installation, and Maintenance for commercial towers.' },
      { title: 'Electrical Works', description: 'Advanced system integration and industrial wiring solutions.' }
    ]
  },
  {
    slug: 'on-demand-labor',
    type: ServiceType.LABOR,
    title: 'On-Demand Labor Supply',
    icon: 'Users',
    shortDescription: 'Scalable workforce solutions for rapid deployment across industrial projects.',
    longDescription: 'We provide top-tier on-demand labor for critical paths in construction and engineering.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    features: ['24/7 Deployment', 'Skilled Artisans', 'Safety Certified'],
    coreServices: [
      { title: 'Construction Labor', description: 'Masons, Carpenters, and General Labor for mega-projects.' }
    ]
  }
];

export const SECTORS: Sector[] = [
  { 
    name: 'Oil & Gas', 
    icon: 'Droplets', 
    description: 'Offshore and onshore technical support with zero-harm safety standards.',
    longDescription: 'Our Oil & Gas division provides specialized technical manpower for refineries, offshore rigs, and pipeline installations. We focus on high-compliance safety standards (HSE) and 24/7 availability.',
    technicalSpecs: ['API Standard Compliance', 'HSE Certified Personnel', 'Rapid Offshore Deployment']
  },
  { 
    name: 'Infrastructure', 
    icon: 'Construction', 
    description: 'Building the foundations of the future with elite engineering teams.',
    longDescription: 'Supporting large-scale civil engineering projects with skilled labor and technical supervisors.',
    technicalSpecs: ['Mega-Project Scalability', 'Heavy Civil Support', 'Project Management Integration']
  },
  { name: 'Healthcare', icon: 'Stethoscope', description: 'Optimizing patient outcomes with world-class medical staffing.' },
  { name: 'Manufacturing', icon: 'Factory', description: 'Automated facility support and precision assembly labor.' },
  { name: 'Energy', icon: 'Zap', description: 'Supporting renewable and traditional energy grids with expert technicians.' },
  { name: 'Logistics', icon: 'Truck', description: 'Optimizing the supply chain with specialized warehouse personnel.' }
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: 'grid-power',
    title: 'Giga-City Power Grid', 
    category: 'Energy', 
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-working-on-an-electrical-box-43152-large.mp4',
    description: 'Supplied 1200+ technicians for regional power distribution network.',
    fullCaseStudy: {
      challenge: 'The region needed a massive power grid overhaul within 6 months, requiring highly specialized electrical technicians at scale.',
      solution: 'KAT Group deployed a tiered workforce model with 120 senior supervisors and 1100 technical assistants within 30 days.',
      impact: 'The project was completed 2 weeks ahead of schedule with 0 lost-time incidents.',
      stats: [
        { label: 'Technicians', value: '1,200+' },
        { label: 'Timeline', value: '6 Months' },
        { label: 'Safety', value: '0 Incidents' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1544724569-5f546fa662b5?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1558444479-c8f01052478d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  { 
    id: 'med-hub',
    title: 'Skyline Medical Hub', 
    category: 'Healthcare', 
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200', 
    description: 'Full medical staffing solution for a 500-bed multi-specialty hospital.',
    fullCaseStudy: {
      challenge: 'A newly constructed multi-specialty hub required a full roster of DHA-licensed nurses and specialized technicians within an aggressive 45-day window.',
      solution: 'Leveraging our overseas recruitment network, we sourced, vetted, and processed 250+ healthcare professionals across 5 countries.',
      impact: 'Seamless hospital launch with 100% staffing compliance on Day 1.',
      stats: [
        { label: 'Placements', value: '250+' },
        { label: 'Lead Time', value: '45 Days' },
        { label: 'Compliance', value: '100%' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1586773860418-d3b978ec8172?auto=format&fit=crop&q=80&w=800'
      ]
    }
  }
];
