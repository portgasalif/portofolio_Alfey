import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
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
    return <div>Project not found</div>;
  }

  return (
    <div className="custom-container py-20">
      <Link
        href="/projects"
        className="text-blue-500 hover:text-blue-600 inline-block mb-6"
      >
        &larr; Back to Projects
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div className="mb-10 sm:mb-0 ">
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full rounded-lg"
            width={400}
            height={300}
          />
          {selectedProject.liveUrl && (
            <a
              href={selectedProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Visit {selectedProject.category}
            </a>
          )}
        </div>
        <div className="sm:col-span-2">
          <p className="text-sm uppercase font-semibold text-blue-500 mb-4">
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
                    className="px-3 py-1.5 bg-(--color-bg-secondary) border border-(--color-border) rounded-full text-sm text-(--color-text) font-medium"
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
    </div>
  );
}
