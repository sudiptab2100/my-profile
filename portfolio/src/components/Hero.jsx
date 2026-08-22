import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import {
  SiSolidity,
  SiEthereum,
  SiReact,
  SiPython,
  SiRust,
} from "react-icons/si";
import { profile } from "../data/portfolio";
import { Socials } from "./ui";
import { TextGenerateEffect } from "./aceternity/text-generate-effect";
import { MovingBorderButton } from "./aceternity/moving-border";
import { BackgroundGradient } from "./aceternity/background-gradient";

const TECH = [
  {
    Icon: SiSolidity,
    label: "Solidity",
    color: "#c7ccd1",
    pos: "-left-2 top-10 xl:-left-6 xl:top-16",
    delay: 0,
    duration: 6,
  },
  {
    Icon: SiEthereum,
    label: "Ethereum",
    color: "#9aa6ff",
    pos: "right-8 -top-2 xl:right-14 xl:-top-3",
    delay: 0.9,
    duration: 7,
  },
  {
    Icon: SiReact,
    label: "React",
    color: "#61dafb",
    pos: "-right-3 top-16 xl:-right-7 xl:top-24",
    delay: 0.4,
    duration: 5.6,
  },
  {
    Icon: SiPython,
    label: "Python",
    color: "#ffd45f",
    pos: "-right-1 bottom-10 xl:-right-5 xl:bottom-16",
    delay: 1.4,
    duration: 6.6,
  },
  {
    Icon: SiRust,
    label: "Rust",
    color: "#e8e8e8",
    pos: "left-4 -bottom-2 xl:left-1 xl:-bottom-3",
    delay: 0.7,
    duration: 7.4,
  },
];

function Avatar() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex items-center justify-center"
    >
      <BackgroundGradient
        roundedClassName="rounded-full"
        containerClassName="rounded-full"
      >
        <div className="h-[240px] w-[240px] overflow-hidden rounded-full bg-[#0e0e12] xl:h-[380px] xl:w-[380px]">
          <img
            src={profile.avatar}
            alt={profile.name}
            width="380"
            height="380"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </BackgroundGradient>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-full animate-orbit motion-reduce:animate-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 55%, #00ff99 82%, #12d8ff 93%, transparent 100%)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        }}
      />

      {TECH.map(({ Icon, label, color, pos, delay, duration }) => (
        <div
          key={label}
          aria-hidden="true"
          className={`pointer-events-none absolute z-30 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-glass backdrop-blur-md animate-floaty motion-reduce:animate-none xl:h-14 xl:w-14 ${pos}`}
          style={{
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <Icon className="text-lg xl:text-2xl" style={{ color }} />
        </div>
      ))}
    </motion.div>
  );
}

function RotatingTagline() {
  const reduce = useReducedMotion();
  const words = useMemo(
    () =>
      profile.tagline
        .split("•")
        .map((word) => word.trim())
        .filter(Boolean),
    []
  );
  const longest = useMemo(
    () => words.reduce((a, b) => (b.length >= a.length ? b : a), ""),
    [words]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || words.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2400
    );
    return () => clearInterval(id);
  }, [reduce, words.length]);

  return (
    <p className="mt-5 font-mono text-lg text-white/70 sm:text-xl">
      <span className="text-white/45">I build </span>
      {reduce ? (
        <span className="text-gradient font-semibold">
          {words.join(" · ")}
        </span>
      ) : (
        <span className="relative inline-block whitespace-nowrap text-left font-semibold">
          <span aria-hidden="true" className="invisible">
            {longest}
          </span>
          <span className="absolute inset-0 flex items-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={words[index]}
                className="text-gradient inline-block"
                initial={{ y: "0.7em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-0.7em", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      )}
    </p>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="container relative mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-10 pb-24 pt-32 xl:flex-row xl:justify-between xl:gap-6 xl:pb-0 xl:pt-0">
        <motion.div
          className="text-center xl:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 xl:justify-start">
            <span className="kicker">{profile.role}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-accent shadow-glow animate-pulse-dot motion-reduce:animate-none" />
              Available for opportunities
            </span>
          </div>

          <h1 className="h1 mt-6">
            Hello, I&apos;m <br />
            <span className="text-gradient animate-gradient-pan text-glow">
              {profile.name}
            </span>
          </h1>

          <RotatingTagline />

          <TextGenerateEffect
            words={profile.pitch}
            className="mx-auto mt-5 max-w-[540px] text-white/70 xl:mx-0"
          />

          <div className="mt-10 flex flex-col items-center gap-8 xl:flex-row">
            <MovingBorderButton
              as="a"
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              View CV <FiDownload className="text-base" />
            </MovingBorderButton>
            <Socials className="justify-center" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Avatar />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to content"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        className="group absolute bottom-6 left-1/2 flex flex-col items-center gap-2 text-white/40 transition-colors duration-300 hover:text-accent xl:bottom-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
          Scroll
        </span>
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/25 p-1.5 transition-colors duration-300 group-hover:border-accent/60">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={
              reduce ? undefined : { y: [0, 9, 0], opacity: [1, 0.35, 1] }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
