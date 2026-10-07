import Link from "next/link";
import ServiceParallaxCard from "@/components/home/ServiceParallaxCard";

const services = [
  {
    title: "Residential Roofing",
    description:
      "We provide complete residential roofing solutions using high-quality materials including metal sheets, tiles, and PUF panels. Our team ensures weatherproof, long-lasting roofs tailored to your home's architecture and local climate.",
    image: "/images/services/residential.webp",
    href: "/services#residential",
  },
  {
    title: "Commercial Roofing",
    description:
      "From warehouses and factories to shopping complexes and office buildings, we handle large-scale commercial roofing projects with precision. We use pre-engineered steel structures and high-performance roofing systems.",
    image: "/images/services/commercial.webp",
    href: "/services#commercial",
  },
  {
    title: "Roof Repair & Maintenance",
    description:
      "Leaking roofs, damaged sheets, rusted panels — our repair team diagnoses and fixes all roofing problems quickly. We offer scheduled maintenance contracts to keep your roof in top condition year-round.",
    image: "/images/services/roof-repair.webp",
    href: "/services#repair",
  },
  {
    title: "Waterproofing & Insulation",
    description:
      "Our waterproofing and thermal insulation services protect your building from water ingress and extreme temperatures. We use PUF panels, bituminous coatings, and membrane systems for roofs, terraces, and walls.",
    image: "/images/services/waterproofing.webp",
    href: "/services#waterproofing",
  },
  {
    title: "Cold Storage Construction",
    description:
      "We design and build cold storage facilities for food processing, pharmaceuticals, and logistics industries. Our insulated panel systems maintain precise temperature control while ensuring structural integrity and energy efficiency.",
    image: "/images/services/cold-storage.webp",
    href: "/services#cold-storage",
  },
  {
    title: "Fabricated House & Cottage",
    description:
      "Prefabricated and modular homes and cottages built with high-quality steel frames and insulated panels. Faster to build, cost-effective, and structurally sound — ideal for residential living, holiday cottages, site offices, and temporary or permanent accommodation.",
    image: "/images/services/fabricated-house.jpg",
    href: "/services#fabricated",
  },
  {
    title: "Capsule House",
    description:
      "Our upcoming capsule house offering brings compact, fully-equipped modular living units with modern interiors. Featuring energy-efficient insulation, weather-resistant exteriors, and smart floor plans — ideal for urban living, resorts, and affordable housing.",
    image: "/images/services/capsule-house.jpg",
    href: "/services#capsule",
    comingSoon: true,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-[#0b1120]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="inline-block px-4 py-1.5 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-400/20">
            What We Do
          </p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Seven specialized solutions — from roofing to cold storage, fabricated
            homes, and capsule houses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <ServiceParallaxCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-12 lg:mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors shadow-lg shadow-primary-900/30"
          >
            View All Services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
