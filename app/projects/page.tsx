import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function ProjectPage() {
  return (
    <div className="custom-container py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Projects portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
