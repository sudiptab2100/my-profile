import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { experience } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Experience() {
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
            style={{ height: beamHeight }}
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-accent/0 via-accent/60 to-accent"
          >
            <motion.span
              style={{ opacity: headOpacity }}
              className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_6px_rgba(0,255,153,0.55)]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 0.05}>
              <div
                className={`relative pl-12 xl:w-1/2 xl:pl-0 ${
                  i % 2 === 0
                    ? "xl:ml-auto xl:pl-12"
                    : "xl:mr-auto xl:pr-12 xl:text-right"
                }`}
              >
                <span
                  className={`absolute left-[9px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-primary ${
                    i % 2 === 0 ? "xl:-left-2" : "xl:left-auto xl:-right-2"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="card group hover:bg-[#1a1a21]">
                  <span className="mb-2 inline-block font-mono text-xs uppercase tracking-widest text-accent">
                    {job.period}
                  </span>
                  <h3 className="h3 text-white">{job.role}</h3>
                  <div
                    className={`mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-white/70 ${
                      i % 2 === 0 ? "" : "xl:justify-end"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 font-semibold text-white">
                      <FiBriefcase className="text-accent" /> {job.company}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm">
                      <FiMapPin /> {job.location}
                    </span>
                  </div>
                  <ul
                    className={`mt-4 space-y-2 text-sm text-white/65 ${
                      i % 2 === 0 ? "" : "xl:text-left"
                    }`}
                  >
                    {job.points.map((p, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
