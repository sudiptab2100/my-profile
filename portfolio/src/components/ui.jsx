import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { cn } from "../lib/utils";

export function Reveal({ children, delay = 0, y = 26, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Frosted-glass surface wrapper (adds padding by default).
export function GlassCard({
  as: Component = "div",
  className = "",
  children,
  ...props
}) {
  return (
    <Component className={cn("glass p-6", className)} {...props}>
      {children}
    </Component>
  );
}

// Dense bento grid container — collapses to a single column on mobile.
export function BentoGrid({ className = "", children }) {
  return <div className={cn("bento-grid", className)}>{children}</div>;
}

// A single bento tile. Pass col-/row-span utilities via className.
export function BentoItem({ className = "", children, ...props }) {
  return (
    <div className={cn("glass p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-20 xl:py-28 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeading({ kicker, title, sub }) {
  return (
    <Reveal className="mb-14 text-center">
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="h2 mt-4">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-white/60">{sub}</p>}
    </Reveal>
  );
}

export function Socials({ className = "", size = "md" }) {
  const items = [
    { icon: <FiGithub />, href: profile.socials.github, label: "GitHub" },
    { icon: <FiLinkedin />, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: <FiMail />, href: profile.socials.email, label: "Email" },
  ];
  const dim = size === "sm" ? "h-10 w-10 text-base" : "h-11 w-11 text-lg";
  return (
    <div className={`flex gap-4 ${className}`}>
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          target="_blank"
          rel="noreferrer noopener"
          className={`social-ring ${dim}`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1300;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
