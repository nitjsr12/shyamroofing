"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Residential Complex, Mumbai",
    image: "/images/services/residential.webp",
    category: "Residential",
    tagClass: "bg-primary-500 text-white",
  },
  {
    id: 2,
    title: "Warehouse Roofing, Pune",
    image: "/images/services/commercial.webp",
    category: "Commercial",
    tagClass: "bg-amber-500 text-white",
  },
  {
    id: 3,
    title: "Factory Shed, Nashik",
    image: "/images/services/cold-storage.webp",
    category: "Industrial",
    tagClass: "bg-primary-800 text-white",
  },
  {
    id: 4,
    title: "Terrace Waterproofing, Delhi",
    image: "/images/services/roof-repair.webp",
    category: "Repair",
    tagClass: "bg-emerald-600 text-white",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-[#121926]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div
            className={`max-w-xl transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-400/20">
              Portfolio
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Featured Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400">
              A glimpse of our recent work across India.
            </p>
          </div>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-1 text-primary-400 font-semibold hover:text-primary-300 transition-colors shrink-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } duration-700 delay-150`}
          >
            View All Projects
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/projects"
              className={`group relative block aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: visible ? `${250 + index * 100}ms` : "0ms",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              <span
                className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-xs font-semibold shadow-sm ${project.tagClass}`}
              >
                {project.category}
              </span>

              <p className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 text-white font-semibold text-sm sm:text-base leading-snug">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
