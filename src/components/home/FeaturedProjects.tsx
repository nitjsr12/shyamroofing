import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Residential Villa Roofing",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    category: "Residential",
  },
  {
    id: 2,
    title: "Warehouse Metal Roof",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Industrial Shed PUF Panels",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    category: "Industrial",
  },
  {
    id: 4,
    title: "Terrace Waterproofing",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    category: "Repair",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              A glimpse of our recent work across India.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 font-medium hover:text-accent transition-colors shrink-0"
          >
            View All Projects
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-medium text-accent-300 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <p className="text-white font-semibold">{project.title}</p>
                  <p className="text-sm text-slate-300">{project.location}</p>
                </div>
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/90 text-xs font-medium text-slate-700">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
