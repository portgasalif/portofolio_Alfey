import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="custom-container py-20 flex flex-col sm:flex-row items-center gap-8">
        <div className="w-full sm:w-1/2">
          <p className="text-(--color-accent) font-semibold text-lg mb-2">
            Frontend Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-(--color-text) uppercase">
            Hi, I&apos;m Alif
          </h1>
          <p className="text-lg text-(--color-text-secondary) mt-4 leading-relaxed">
            I build web apps that load fast, feel great on any device, and rank
            high on Google.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/projects"
              className="px-6 py-3 bg-(--color-accent) hover:bg-(--color-accent-hover) text-white font-semibold rounded-lg transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-(--color-accent) text-(--color-accent) hover:bg-(--color-accent) hover:text-white font-semibold rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <Image
            src="/images/undraw_programming_j1zw.svg"
            alt="Developer Ilustration"
            width={800}
            height={572}
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="custom-container py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-(--color-text)">
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
