export type ServiceDetail = {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  comingSoon?: boolean;
};

export const servicesPageContent: ServiceDetail[] = [
  {
    id: "residential",
    tag: "Durable Roofs for Every Home",
    title: "Residential Roofing",
    description:
      "We provide complete residential roofing solutions using high-quality materials including metal sheets, tiles, and PUF panels. Our team ensures weatherproof, long-lasting roofs tailored to your home's architecture and local climate.",
    features: [
      "Metal sheet & tile roofing",
      "PUF insulated panel roofing",
      "Weatherproof sealing & finishing",
      "10-year workmanship warranty",
    ],
    image: "/images/services/residential.webp",
  },
  {
    id: "commercial",
    tag: "Industrial-Grade Roofing at Scale",
    title: "Commercial Roofing",
    description:
      "From warehouses and factories to shopping complexes and office buildings, we handle large-scale commercial roofing projects with precision. We use pre-engineered steel structures and high-performance roofing systems.",
    features: [
      "Pre-engineered steel structures",
      "Large-span roofing systems",
      "Fire-resistant & insulated options",
      "Minimal business disruption",
    ],
    image: "/images/services/commercial.webp",
  },
  {
    id: "repair",
    tag: "Fast Fixes, Lasting Results",
    title: "Roof Repair & Maintenance",
    description:
      "Leaking roofs, damaged sheets, rusted panels — our repair team diagnoses and fixes all roofing problems quickly. We offer scheduled maintenance contracts to keep your roof in top condition year-round.",
    features: [
      "Leak detection & waterproofing",
      "Sheet & panel replacement",
      "Annual maintenance contracts",
      "Emergency repair services",
    ],
    image: "/images/services/roof-repair.webp",
  },
  {
    id: "waterproofing",
    tag: "Keep Moisture Out, Comfort In",
    title: "Waterproofing & Insulation",
    description:
      "Our waterproofing and thermal insulation services protect your building from water ingress and extreme temperatures. We use PUF panels, bituminous coatings, and membrane systems for roofs, terraces, and walls.",
    features: [
      "PUF panel thermal insulation",
      "Bituminous & membrane waterproofing",
      "Terrace & basement waterproofing",
      "Energy-saving insulation solutions",
    ],
    image: "/images/services/waterproofing.webp",
  },
  {
    id: "cold-storage",
    tag: "Temperature-Controlled Facilities Built Right",
    title: "Cold Storage Construction",
    description:
      "We design and build cold storage facilities for food processing, pharmaceuticals, and logistics industries. Our insulated panel systems maintain precise temperature control while ensuring structural integrity and energy efficiency.",
    features: [
      "PUF insulated panel walls & roof",
      "Temperature range: -40°C to +15°C",
      "Refrigeration system integration",
      "Food-grade & pharma-grade options",
    ],
    image: "/images/services/cold-storage.webp",
  },
  {
    id: "fabricated",
    tag: "Modern Modular Homes & Cottages, Built Fast",
    title: "Fabricated House & Cottage",
    description:
      "Prefabricated and modular homes and cottages built with high-quality steel frames and insulated panels. Faster to build, cost-effective, and structurally sound — ideal for residential living, holiday cottages, site offices, and temporary or permanent accommodation.",
    features: [
      "Steel frame & panel construction",
      "Custom floor plan design",
      "Quick installation — weeks not months",
      "Residential, cottage & commercial applications",
    ],
    image: "/images/services/fabricated-house.jpg",
  },
  {
    id: "capsule",
    tag: "Compact Modern Living, Coming Soon",
    title: "Capsule House",
    description:
      "Our upcoming capsule house offering brings compact, fully-equipped modular living units with modern interiors. Featuring energy-efficient insulation, weather-resistant exteriors, and smart floor plans — ideal for urban living, resorts, and affordable housing.",
    features: [
      "Compact & efficient 18–22 sqm design",
      "Weather resistant & durable structure",
      "Energy efficient insulation & ventilation",
      "Easy installation & low maintenance",
    ],
    image: "/images/services/capsule-house.jpg",
    comingSoon: true,
  },
];
