import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-semibold mb-4">Follow Me</h1>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/portgasalif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/alif-fachrel-anargya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={36} />
          </a>
        </div>
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Alif Fachrel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
