"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  projectFilters,
  type ProjectItem,
  type ProjectCategory,
} from "@/content/projectsPage";

type Filter = ProjectCategory | "All";

export default function ProjectsGallery({
  projects,
}: {
  projects: ProjectItem[];
}) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 lg:mb-12">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              <span
                className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-xs font-semibold ${project.tagClass}`}
              >
                {project.category}
              </span>
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md text-xs font-medium bg-black/40 backdrop-blur-sm text-white border border-white/15">
                {project.year}
              </span>

              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                <h2 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary-300">
                  {project.location}
                </p>
                <p className="mt-2 text-sm text-slate-200/90 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
