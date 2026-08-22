import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { useScrollSpy, useIsScrolled } from "../lib/hooks";
import { cn } from "../lib/utils";

const LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

// Stable module-level array for the scroll-spy IntersectionObserver.
const SECTIONS = LINKS.map((l) => l.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTIONS);
  const scrolled = useIsScrolled();
  const reduce = useReducedMotion();

  // Lock body scroll and allow Escape to close while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.1 },
    },
  };
  const itemVariants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      >
        <div
          className={cn(
            "pointer-events-auto mt-3 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-3 transition-all duration-500 ease-out sm:mt-4 sm:px-4",
            scrolled
              ? "border-white/10 bg-[#16161c]/70 py-2 shadow-glass backdrop-blur-xl"
              : "border-transparent bg-transparent py-3.5 shadow-none sm:py-4"
          )}
        >
          <a
            href="#home"
            className="shrink-0 text-2xl font-semibold tracking-tight transition-opacity duration-300 hover:opacity-80"
          >
            {profile.first}
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.name}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive ? "text-accent" : "text-white/70 hover:text-accent"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-accent/10 shadow-[0_0_20px_-8px_rgba(0,255,153,0.65)] ring-1 ring-inset ring-accent/30"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span className="relative z-10">{l.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-solid hidden h-10 px-5 text-sm xl:inline-flex"
            >
              Resume <FiDownload />
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-2xl text-accent transition-colors duration-300 hover:bg-accent hover:text-primary xl:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[#16161c]/85 backdrop-blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40" />

            <div className="relative flex h-full flex-col">
              <div className="container mx-auto flex items-center justify-between py-6">
                <span className="text-2xl font-semibold tracking-tight">
                  {profile.first}
                  <span className="text-accent">.</span>
                </span>
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 text-2xl text-accent transition-colors duration-300 hover:bg-accent hover:text-primary"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              <motion.nav
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="container mx-auto flex flex-1 flex-col justify-center gap-3 pb-24 text-center"
              >
                {LINKS.map((l) => {
                  const isActive = active === l.id;
                  return (
                    <motion.a
                      key={l.name}
                      href={l.href}
                      variants={itemVariants}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl",
                        isActive
                          ? "text-gradient animate-gradient-pan"
                          : "text-white/80 hover:text-accent"
                      )}
                    >
                      {l.name}
                    </motion.a>
                  );
                })}
                <motion.a
                  variants={itemVariants}
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  className="btn-outline mx-auto mt-8"
                >
                  Resume <FiDownload />
                </motion.a>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
