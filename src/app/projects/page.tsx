import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsPageCta from "@/components/projects/ProjectsPageCta";
import { projectsPageContent } from "@/content/projectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Shyam Roofing projects across India — residential, commercial, industrial, repair, cold storage, and fabricated construction.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery projects={projectsPageContent} />
      <ProjectsPageCta />
    </>
  );
}
