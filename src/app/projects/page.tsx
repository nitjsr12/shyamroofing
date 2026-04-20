import type { Metadata } from "next";
import PageHeading from "@/components/ui/PageHeading";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Gallery",
  description:
    "Browse our completed roofing and construction projects across India — residential, commercial, and industrial.",
};

const projects = [
  {
    id: 1,
    title: "Residential Villa Roofing",
    location: "Chennai",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Full roof replacement with weather-resistant metal sheets.",
  },
  {
    id: 2,
    title: "Warehouse Metal Roof",
    location: "Pune",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "Large-span metal roofing for logistics warehouse.",
  },
  {
    id: 3,
    title: "Industrial Shed PUF Panels",
    location: "Ahmedabad",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description: "PUF panel roofing and wall cladding for manufacturing unit.",
  },
  {
    id: 4,
    title: "Terrace Waterproofing",
    location: "Bangalore",
    category: "Repair",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    description: "Terrace waterproofing and insulation for apartment block.",
  },
  {
    id: 5,
    title: "PEB Structure & Roof",
    location: "Hyderabad",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    description: "Pre-engineered building with integrated roofing.",
  },
  {
    id: 6,
    title: "Residential Sheet Roof",
    location: "Mumbai",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "New sheet roofing and gutter system for independent house.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        title="Our Projects"
        subtitle="A selection of our completed roofing and construction projects across India."
      />

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/90 text-xs font-medium text-slate-700">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">{project.location}</p>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Want a similar solution for your project?</p>
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
