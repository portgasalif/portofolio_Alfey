import { personalInfo, skills, stats } from "@/data/aboutData";

export default function AboutPage() {
  return (
    <div>
      <div className="custom-container py-10 sm:py-20 ">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-2/5">
            <img
              className="rounded-lg w-full h-auto"
              src="https://picsum.photos/400/300?random=1"
              alt="photo"
            />
          </div>
          <div className="w-full sm:w-3/5">
            {personalInfo.bio.map((text, index) => (
              <p
                className="text-lg text-gray-700 leading-relaxed mb-4"
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
