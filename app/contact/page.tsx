import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function ContactPage() {
  return (
    <div className="custom-container py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-(--color-text)">
          Let&apos;s Connect
        </h1>
        <p className="text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
          Looking for a developer or want to collaborate? I&apos;m always open
          to new opportunities. Reach out and let&apos;s make something great!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <a
          href="https://www.linkedin.com/in/alif-fachrel-anargya/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center "
        >
          <div className="flex justify-center mb-4">
            <FaLinkedin size={48} className="text-blue-500" />
          </div>

          <h3 className="text-xl font-bold mb-2  text-slate-800">LinkedIn</h3>

          <p className="text-blue-500 font-medium">View Profile</p>
        </a>
        <a
          href="https://github.com/portgasalif"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center "
        >
          <div className="flex justify-center mb-4">
            <FaGithub size={48} className="text-gray-800" />
          </div>

          <h3 className="text-xl font-bold mb-2 text-slate-800">Github</h3>

          <p className="text-blue-500 font-medium">View Profile</p>
        </a>
        <a
          href="mailto:aliffachrel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center "
        >
          <div className="flex justify-center mb-4">
            <BsFillEnvelopeFill size={48} className="text-blue-400" />
          </div>

          <h3 className="text-xl font-bold mb-2 text-slate-800">Email</h3>

          <p className="text-blue-500 font-medium">Send an Email</p>
        </a>
      </div>
    </div>
  );
}
