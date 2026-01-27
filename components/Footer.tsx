import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--color-bg-secondary) border-t border-(--color-border)">
      <div className="custom-container py-8">
        <h1 className="text-center text-2xl font-semibold mb-4 text-(--color-text)">
          Follow Me
        </h1>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/portgasalif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-text) hover:text-(--color-text-secondary) transition-colors"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/alif-fachrel-anargya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-text) hover:text-(--color-text-secondary) transition-colors"
          >
            <FaLinkedin size={36} />
          </a>
        </div>
        <p className="text-center text-sm text-(--color-text)">
          &copy; {new Date().getFullYear()} Alif Fachrel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
