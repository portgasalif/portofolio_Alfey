import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <section className="custom-container relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-(--color-accent) opacity-10 blur-3xl"
        />
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-card) px-4 py-1.5 text-sm text-(--color-text-secondary)"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Open to work & freelance projects
        </div>
        <h1
          className="animate-fade-up mt-6 text-5xl font-bold tracking-tight text-(--color-text) sm:text-7xl"
          style={{ animationDelay: "100ms" }}
        >
          Hi, I&apos;m <span className="text-(--color-accent)">Alif</span>.
          <br />
          Frontend Developer.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-(--color-text-secondary)"
          style={{ animationDelay: "200ms" }}
        >
          I build web apps that load fast, feel great on any device, and rank
          high on Google.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-(--color-accent) px-6 py-3 font-semibold text-white transition-colors hover:bg-(--color-accent-hover)"
          >
            View My Work
            <HiArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-(--color-border) bg-(--color-card) px-6 py-3 font-semibold text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            Contact Me
          </Link>
          <div className="ml-1 flex items-center gap-4">
            <a
              href="https://github.com/portgasalif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alif-fachrel-anargya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>
      <section className="custom-container pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-(--color-accent)">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold text-(--color-text)">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group hidden items-center gap-1 font-medium text-(--color-text-secondary) transition-colors hover:text-(--color-accent) sm:inline-flex"
          >
            View all
            <HiArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
