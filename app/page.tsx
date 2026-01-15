import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function Home() {
  return (
    <>
      <section className="custom-container py-20 flex flex-col sm:flex-row items-center gap-8">
        <div className="w-full sm:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 uppercase">
            Hi, I`m Alif
          </h1>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Welcome to my portfolio website!
          </p>
        </div>
        <div className="w-full sm:w-1/2 bg-gray-200 h-64 sm:h-80 rounded-lg flex items-center justify-center">
          <p className="text-grey-400">Image Placeholder</p>
        </div>
      </section>
      <section className="custom-container py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
