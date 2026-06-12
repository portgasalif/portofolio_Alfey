import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const contactLinks = [
  {
    label: "LinkedIn",
    action: "View Profile",
    href: "https://www.linkedin.com/in/alif-fachrel-anargya/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    action: "View Profile",
    href: "https://github.com/portgasalif",
    icon: FaGithub,
  },
  {
    label: "Email",
    action: "Send an Email",
    href: "mailto:aliffachrel@gmail.com",
    icon: BsFillEnvelopeFill,
  },
];

export default function ContactPage() {
  return (
    <div className="custom-container py-16 sm:py-20">
      <div className="text-center mb-16">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-(--color-accent)">
          Contact
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-(--color-text)">
          Let&apos;s Connect
        </h1>
        <p className="text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
          Looking for a developer or want to collaborate? I&apos;m always open
          to new opportunities. Reach out and let&apos;s make something great!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactLinks.map(({ label, action, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-(--color-border) bg-(--color-card) p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent)/50 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <Icon
                size={40}
                className="text-(--color-text-secondary) transition-colors group-hover:text-(--color-accent)"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-(--color-text)">
              {label}
            </h3>
            <p className="inline-flex items-center gap-1 font-medium text-(--color-accent)">
              {action}
              <HiArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
