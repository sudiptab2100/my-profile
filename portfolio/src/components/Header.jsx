import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-7 xl:py-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-3xl font-semibold tracking-tight">
          {profile.first}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-9 xl:flex">
          {LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="font-medium text-white/75 transition-colors hover:text-accent"
            >
              {l.name}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-solid h-11 px-6 text-sm"
          >
            Resume <FiDownload />
          </a>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent text-2xl text-accent xl:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container mx-auto flex items-center justify-between py-7">
              <span className="text-3xl font-semibold">
                {profile.first}
                <span className="text-accent">.</span>
              </span>
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent text-2xl text-accent"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>
            <nav className="mt-16 flex flex-col items-center gap-8 text-2xl">
              {LINKS.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-white/80 transition-colors hover:text-accent"
                >
                  {l.name}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="btn-outline mt-4"
              >
                Resume <FiDownload />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
