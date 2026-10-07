export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Repair"
  | "Cold Storage"
  | "Fabricated";

export type ProjectItem = {
  id: number;
  title: string;
  location: string;
  category: ProjectCategory;
  year: string;
  description: string;
  image: string;
  tagClass: string;
};

export const projectFilters: Array<ProjectCategory | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Repair",
  "Cold Storage",
  "Fabricated",
];

export const projectsPageContent: ProjectItem[] = [
  {
    id: 1,
    title: "Residential Complex Roofing",
    location: "Bangalore, Karnataka",
    category: "Residential",
    year: "2024",
    description:
      "Complete roofing for a multi-unit residential complex using durable metal sheets and weatherproof sealing.",
    image: "/images/services/residential.webp",
    tagClass: "bg-primary-500 text-white",
  },
  {
    id: 2,
    title: "Warehouse Roofing Project",
    location: "Pune, Maharashtra",
    category: "Commercial",
    year: "2024",
    description:
      "Large-span commercial roofing with insulated panels for a logistics warehouse facility.",
    image: "/images/services/commercial.webp",
    tagClass: "bg-amber-500 text-white",
  },
  {
    id: 3,
    title: "Factory Shed Construction",
    location: "Chennai, Tamil Nadu",
    category: "Industrial",
    year: "2023",
    description:
      "Industrial shed with pre-engineered steel structure and high-performance roofing system.",
    image: "/images/services/cold-storage.webp",
    tagClass: "bg-primary-800 text-white",
  },
  {
    id: 4,
    title: "Terrace Waterproofing",
    location: "Delhi NCR",
    category: "Repair",
    year: "2023",
    description:
      "Terrace waterproofing and membrane application for a commercial building rooftop.",
    image: "/images/services/roof-repair.webp",
    tagClass: "bg-emerald-600 text-white",
  },
  {
    id: 5,
    title: "Cold Storage Facility",
    location: "Vijayawada, Andhra Pradesh",
    category: "Cold Storage",
    year: "2024",
    description:
      "Insulated cold storage build for food processing with precise temperature-controlled panels.",
    image: "/images/services/cold-storage.webp",
    tagClass: "bg-sky-500 text-white",
  },
  {
    id: 6,
    title: "Prefabricated Site Office",
    location: "Mumbai, Maharashtra",
    category: "Fabricated",
    year: "2024",
    description:
      "Modular prefabricated site office with steel frame construction and insulated panel walls.",
    image: "/images/services/fabricated-house.jpg",
    tagClass: "bg-yellow-500 text-slate-900",
  },
];
