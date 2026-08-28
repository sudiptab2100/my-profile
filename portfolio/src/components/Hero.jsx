import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiBriefcase } from "react-icons/fi";
import {
  SiSolidity,
  SiEthereum,
  SiReact,
  SiPython,
  SiOpenjdk,
  SiKotlin,
  SiSpringboot,
  SiPostgresql,
  SiNodedotjs,
  SiRedis,
  SiCouchbase,
  SiGit,
  SiGithub,
  SiDocker,
  SiIpfs,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { Socials } from "./ui";
import { TextGenerateEffect } from "./aceternity/text-generate-effect";
import { MovingBorderButton } from "./aceternity/moving-border";
import { BackgroundGradient } from "./aceternity/background-gradient";

const TECH_POOL = [
  { Icon: SiPython, label: "Python", color: "#ffd45f" },
  { Icon: SiOpenjdk, label: "Java", color: "#f89820" },
  { Icon: SiKotlin, label: "Kotlin", color: "#a97bff" },
  { Icon: SiSpringboot, label: "Spring Boot", color: "#6db33f" },
  { Icon: SiEthereum, label: "Ethereum", color: "#9aa6ff" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#7aa6d6" },
  { Icon: SiReact, label: "React", color: "#61dafb" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#83cd29" },
  { Icon: SiSolidity, label: "Solidity", color: "#c7ccd1" },
  { Icon: SiRedis, label: "Redis", color: "#ff5a4d" },
  { Icon: SiCouchbase, label: "Couchbase", color: "#ef5350" },
  { Icon: SiGit, label: "Git", color: "#f05032" },
  { Icon: SiGithub, label: "GitHub", color: "#e6edf3" },
  { Icon: SiDocker, label: "Docker", color: "#4aa8f0" },
  { Icon: SiIpfs, label: "IPFS", color: "#6fd6d1" },
  { Icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
  { Icon: SiCplusplus, label: "C/C++", color: "#6c9bd1" },
];

// Eight anchor points around the avatar (compass layout). Only a few are
// occupied at any moment; logos pop in and out of these slots at random.
const SLOTS = [
  "left-2 top-6 xl:-left-4 xl:top-10",
  "left-1/2 -translate-x-1/2 -top-3 xl:-top-4",
  "right-2 top-6 xl:right-0 xl:top-10",
  "-right-3 top-1/2 -translate-y-1/2 xl:-right-7",
  "right-3 bottom-6 xl:right-0 xl:bottom-10",
  "left-1/2 -translate-x-1/2 -bottom-3 xl:-bottom-4",
  "left-3 bottom-6 xl:left-0 xl:bottom-10",
  "-left-3 top-1/2 -translate-y-1/2 xl:-left-7",
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function OrbitingTech() {
  const reduce = useReducedMotion();
  const [slots, setSlots] = useState(() => SLOTS.map(() => null));

  useEffect(() => {
    if (reduce) {
      // Static, calm subset — no cycling for reduced-motion users.
      const picks = shuffle(TECH_POOL).slice(0, 4);
      setSlots(SLOTS.map((_, i) => (i % 2 === 0 ? picks[i / 2] ?? null : null)));
      return undefined;
    }

    // Seed ~4 logos in random slots.
    setSlots(() => {
      const arr = SLOTS.map(() => null);
      const openSlots = shuffle(SLOTS.map((_, i) => i)).slice(0, 4);
      const techs = shuffle(TECH_POOL);
      openSlots.forEach((slot, k) => {
        arr[slot] = techs[k];
      });
      return arr;
    });

    let timer;
    const tick = () => {
      setSlots((prev) => {
        const next = [...prev];
        const filled = next.map((t, i) => (t ? i : -1)).filter((i) => i >= 0);
        const empties = next.map((t, i) => (t ? -1 : i)).filter((i) => i >= 0);

        // Retire one visible logo (keep at least three on screen).
        let hidden = -1;
        if (filled.length >= 3 && (empties.length === 0 || Math.random() < 0.65)) {
          hidden = filled[Math.floor(Math.random() * filled.length)];
          next[hidden] = null;
        }

        // Introduce a fresh logo (one not currently shown) in a new slot.
        const open = next
          .map((t, i) => (t ? -1 : i))
          .filter((i) => i >= 0 && i !== hidden);
        const visible = new Set(next.filter(Boolean).map((t) => t.label));
        const candidates = TECH_POOL.filter((t) => !visible.has(t.label));
        if (open.length && candidates.length && next.filter(Boolean).length < 5) {
          const slot = open[Math.floor(Math.random() * open.length)];
          next[slot] = candidates[Math.floor(Math.random() * candidates.length)];
        }

        return next;
      });
      timer = setTimeout(tick, 900 + Math.random() * 1100);
    };
    timer = setTimeout(tick, 700);

    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <>
      {SLOTS.map((pos, i) => {
        const tech = slots[i];
        return (
          <div
            key={pos}
            aria-hidden="true"
            className={`pointer-events-none absolute z-30 ${pos}`}
          >
            <AnimatePresence mode="wait">
              {tech && (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={
                    reduce
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 1, scale: 1, y: [0, -6, 0] }
                  }
                  exit={{ opacity: 0, scale: 0.2 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    y: {
                      duration: 3.6 + (i % 4) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-glass backdrop-blur-md xl:h-14 xl:w-14"
                >
                  <tech.Icon
                    className="text-lg xl:text-2xl"
                    style={{ color: tech.color }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}

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

      <OrbitingTech />
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

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 xl:justify-start">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-2 pr-4 backdrop-blur-xl transition-colors duration-300 hover:border-white/20">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent2/15 text-accent ring-1 ring-accent/30">
                <FiBriefcase className="text-[15px]" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white text-glow">
                American Express
              </span>
            </span>

            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-2 pr-4 backdrop-blur-xl transition-colors duration-300 hover:border-white/20">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent2/15 text-accent ring-1 ring-accent/30">
                <FaGraduationCap className="text-[15px]" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white text-glow">
                IIT Jammu
              </span>
            </span>
          </div>

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
        href="#experience"
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
