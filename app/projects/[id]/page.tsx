import { projectsData } from "@/data/projectsData";
import Link from "next/link";
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = Number(id);
  const selectedProject = projectsData.find(
    (project) => project.id === projectId
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
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full rounded-lg"
          />
        </div>
        <div className="sm:col-span-2">
          <p>{selectedProject.category}</p>
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.description}</p>
        </div>
      </div>
    </div>
  );
}
