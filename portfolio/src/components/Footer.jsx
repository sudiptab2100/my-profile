import { profile } from "../data/portfolio";
import { Socials } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 xl:flex-row">
        <div className="text-center xl:text-left">
          <a href="#home" className="text-2xl font-semibold">
            {profile.first}
            <span className="text-accent">.</span>
          </a>
          <p className="mt-1 text-sm text-white/50">
            © {new Date().getFullYear()} {profile.name}. Built with React.
          </p>
        </div>
        <Socials size="sm" />
      </div>
    </footer>
  );
}
