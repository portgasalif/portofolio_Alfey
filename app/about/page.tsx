import { personalInfo, stats } from "@/data/aboutData";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className="custom-container py-10 sm:py-20 ">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-1/4">
            <Image
              className="rounded-lg w-full h-auto"
              src="/images/Pas-foto.jpeg"
              alt="photo"
              width={300}
              height={400}
            />
          </div>
          <div className="w-full sm:w-3/5">
            {personalInfo.bio.map((text, index) => (
              <p
                className="text-lg text-(--text-primary) leading-relaxed mb-4"
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-(--color-bg-secondary)">
        <div className="custom-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center ">
                <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-(--color-text)">
                  {stat.value}
                </h2>
                <p className="text-sm text-(--color-text)">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
