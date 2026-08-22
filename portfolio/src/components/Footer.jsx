import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { Socials } from "./ui";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-white/[0.02] py-12">
      {/* hairline highlight along the top edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="container mx-auto flex flex-col items-center gap-8 xl:flex-row xl:justify-between">
        <div className="text-center xl:text-left">
          <a href="#home" className="text-2xl font-semibold">
            {profile.first}
            <span className="text-accent">.</span>
          </a>
          <p className="mt-1 text-sm text-white/50">
            © {year} {profile.name}. Built with React.
          </p>
        </div>

        <nav className="order-last flex flex-wrap items-center justify-center gap-x-7 gap-y-2 xl:order-none">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 transition-colors hover:text-accent"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Socials size="sm" />
          <a
            href="#home"
            aria-label="Back to top"
            className="social-ring h-10 w-10 text-base"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
