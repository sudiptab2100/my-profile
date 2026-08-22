import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { SiAmericanexpress } from "react-icons/si";
import { experience } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";

// Confident react-icons/si brand logos; other companies fall back to initials.
const brandLogos = {
  "American Express": SiAmericanexpress,
};

function initialsOf(company) {
  return company
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CompanyMonogram({ company }) {
  const Logo = brandLogos[company];
  return (
    <span className="relative flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent2 p-px shadow-glow">
      <span className="flex h-full w-full items-center justify-center rounded-[15px] bg-primary">
        {Logo ? (
          <Logo className="text-xl text-accent" aria-hidden="true" />
        ) : (
          <span className="text-gradient font-mono text-sm font-bold">
            {initialsOf(company)}
          </span>
        )}
      </span>
      <span className="sr-only">{company}</span>
    </span>
  );
}

export default function Experience() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });
  const beamHeight = useTransform(progress, [0, 1], ["0%", "100%"]);
  const headOpacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <Section id="experience">
      <SectionHeading
        kicker="Career"
        title="Work Experience"
        sub="Building fintech backends at scale and researching blockchain data availability."
      />

      <div className="relative mx-auto max-w-4xl" ref={ref}>
        <div className="pointer-events-none absolute inset-y-2 left-4 w-px -translate-x-1/2 xl:left-1/2">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div
            style={{ height: reduce ? "100%" : beamHeight }}
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-accent/0 via-accent/60 to-accent"
          >
            <motion.span
              style={{ opacity: reduce ? 0 : headOpacity }}
              className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_6px_rgba(0,255,153,0.55)]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {experience.map((job, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={job.company + job.period} delay={i * 0.05}>
                <div
                  className={`relative pl-12 xl:w-1/2 xl:pl-0 ${
                    flipped
                      ? "xl:mr-auto xl:pr-12 xl:text-right"
                      : "xl:ml-auto xl:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-[9px] top-10 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-primary shadow-[0_0_12px_2px_rgba(0,255,153,0.45)] ${
                      flipped ? "xl:left-auto xl:-right-2" : "xl:-left-2"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                  </span>

                  <SpotlightCard className="group glass p-6 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.06]">
                    <div
                      className={`flex items-start gap-4 ${
                        flipped ? "xl:flex-row-reverse" : ""
                      }`}
                    >
                      <CompanyMonogram company={job.company} />

                      <div className="min-w-0 flex-1">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent ring-1 ring-accent/30">
                          <FiCalendar className="text-sm" /> {job.period}
                        </span>
                        <h3 className="h3 mt-2 text-white transition-colors group-hover:text-accent">
                          {job.role}
                        </h3>
                        <div
                          className={`mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-white/70 ${
                            flipped ? "xl:justify-end" : ""
                          }`}
                        >
                          <span className="inline-flex items-center gap-2 font-semibold text-white">
                            <FiBriefcase className="text-accent" /> {job.company}
                          </span>
                          <span className="inline-flex items-center gap-2 text-sm">
                            <FiMapPin /> {job.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul
                      className={`mt-5 space-y-2.5 text-sm text-white/65 ${
                        flipped ? "xl:text-left" : ""
                      }`}
                    >
                      {job.points.map((p, idx) => (
                        <li key={idx} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent shadow-[0_0_6px_rgba(0,255,153,0.55)]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
