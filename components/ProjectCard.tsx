import Link from "next/link";

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
    <Link href={`/projects/${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 ">
          <p className="text-xs uppercase font-semibold text-blue-500 mb-2">
            {category}
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
}
