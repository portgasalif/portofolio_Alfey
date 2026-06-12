import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function ProjectPage() {
  return (
    <div className="custom-container py-16 sm:py-20">
      <div className="text-center mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-(--color-accent)">
          Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-(--color-text)">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
          A selection of things I&apos;ve built — from production websites to
          full-stack apps.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
