import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-(--color-border) bg-(--color-card) transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent)/50 hover:shadow-xl">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={400}
            height={300}
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-(--color-accent)">
            {category}
          </p>
          <h3 className="mb-2 text-xl font-bold text-(--color-text)">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-(--color-text-secondary) line-clamp-3">
            {description}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-(--color-text-secondary) transition-colors group-hover:text-(--color-accent)">
            View project
            <HiArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
