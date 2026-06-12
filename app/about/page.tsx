import { personalInfo, stats, skills } from "@/data/aboutData";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div>
      <div className="custom-container py-10 sm:py-20 ">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-(--color-accent)">
            About Me
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-(--color-text)">
            {personalInfo.name}
          </h1>
          <p className="mt-2 text-lg text-(--color-text-secondary)">
            {personalInfo.title}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-1/4">
            <Image
              className="w-full h-auto rounded-2xl ring-1 ring-(--color-border) shadow-lg"
              src="/images/Pas-foto.jpeg"
              alt={personalInfo.name}
              width={300}
              height={400}
            />
          </div>
          <div className="w-full sm:w-3/5">
            {personalInfo.bio.map((text, index) => (
              <p
                className="text-lg text-(--color-text) leading-relaxed mb-4"
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-(--color-bg-secondary) border-y border-(--color-border)">
        <div className="custom-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center ">
                <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-(--color-accent)">
                  {stat.value}
                </h2>
                <p className="text-sm text-(--color-text-secondary)">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="custom-container py-16">
        <h2 className="text-3xl font-bold text-(--color-text) mb-10">
          Skills & Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-(--color-text-secondary) mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-(--color-card) border border-(--color-border) rounded-full text-sm text-(--color-text) font-medium transition-colors hover:border-(--color-accent)/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
