import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border)">
      <div className="custom-container py-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-(--color-text-secondary)">
          &copy; {new Date().getFullYear()} Alif Fachrel. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/portgasalif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/alif-fachrel-anargya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
