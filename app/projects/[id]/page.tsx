import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = Number(id);
  const selectedProject = projectsData.find(
    (project) => project.id === projectId,
  );

  if (!selectedProject) {
    return (
      <div className="custom-container py-20 text-center">
        <h1 className="text-3xl font-bold text-(--color-text) mb-4">
          Project not found
        </h1>
        <Link
          href="/projects"
          className="font-medium text-(--color-accent) hover:text-(--color-accent-hover) transition-colors"
        >
          &larr; Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="custom-container py-20">
      <Link
        href="/projects"
        className="inline-block mb-6 font-medium text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
      >
        &larr; Back to Projects
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div className="mb-10 sm:mb-0 ">
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full rounded-xl ring-1 ring-(--color-border) shadow-lg"
            width={400}
            height={300}
          />
          {selectedProject.liveUrl && (
            <a
              href={selectedProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center px-6 py-4 bg-(--color-accent) text-white font-semibold rounded-lg hover:bg-(--color-accent-hover) transition-colors"
            >
              Visit Live Site
            </a>
          )}
        </div>
        <div className="sm:col-span-2">
          <p className="text-sm uppercase tracking-wider font-semibold text-(--color-accent) mb-4">
            {selectedProject.category}
          </p>
          <h1 className="text-4xl font-bold text-(--color-text) mb-6">
            {selectedProject.title}
          </h1>
          <p className="text-lg text-(--color-text-secondary) leading-relaxed mt-6">
            {selectedProject.description}
          </p>
          {selectedProject.techStack && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-(--color-text-secondary) mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-(--color-card) border border-(--color-border) rounded-full text-sm text-(--color-text) font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {selectedProject.githubUrl && (
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-(--color-text-secondary) hover:text-(--color-text) transition-colors"
            >
              <FaGithub size={20} />
              <span className="font-medium">View on GitHub</span>
            </a>
          )}
        </div>
      </div>
      <div className="mt-20 border-t pt-6 border-(--color-border)">
        <h2 className="font-bold text-2xl text-(--color-text) mb-6">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData
            .filter((project) => project.id !== projectId)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
}
