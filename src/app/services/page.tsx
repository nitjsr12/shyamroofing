import type { Metadata } from "next";
import PageHeading from "@/components/ui/PageHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential & commercial roofing, repairs, waterproofing, PUF panels & more. Explore Shyam Roofing's full range of services.",
};

const services = [
  {
    id: "residential",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential Roofing",
    description:
      "New roofs, replacements, and repairs for homes. We use weather-resistant materials suited to Indian climate — from traditional tiles to metal and sheet roofing. Free site visit and quote.",
    href: "/contact",
  },
  {
    id: "commercial",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial & Industrial Roofing",
    description:
      "Warehouses, factories, sheds, and commercial buildings. We design and install metal roofs, PEB structures, and long-span solutions that reduce construction time and offer low maintenance.",
    href: "/contact",
  },
  {
    id: "repair",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Roof Repair & Maintenance",
    description:
      "Leak detection, patch repairs, and annual maintenance to extend roof life. We offer quick response for emergency leaks and scheduled maintenance plans for commercial properties.",
    href: "/contact",
  },
  {
    id: "waterproofing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Waterproofing & Insulation",
    description:
      "Terrace waterproofing, PUF panels, and thermal insulation for roofs and walls. Ideal for reducing heat, preventing leaks, and improving energy efficiency in homes and industries.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title="Our Services"
        subtitle="End-to-end roofing and construction solutions for residential, commercial, and industrial projects."
      />

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Need a custom solution? We&apos;re here to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Get a Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
