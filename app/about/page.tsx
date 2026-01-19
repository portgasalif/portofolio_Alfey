import { personalInfo, skills, stats } from "@/data/aboutData";

export default function AboutPage() {
  return (
    <div>
      <div className="custom-container py-10 sm:py-20 ">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-1/2">
            <img
              className="rounded-lg w-full h-auto"
              src="https://picsum.photos/400/300?random=1"
              alt="photo"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
