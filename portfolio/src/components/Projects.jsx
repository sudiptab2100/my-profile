import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiSolidity,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiTelegram,
} from "react-icons/si";
import { projects } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";

// Brand logos for the stack chips — tech without a confident icon falls back to a plain text chip.
const stackIcons = {
  ReactJS: SiReact,
  TypeScript: SiTypescript,
  Solidity: SiSolidity,
  Python: SiPython,
  "C++": SiCplusplus,
  Docker: SiDocker,
  Telethon: SiTelegram,
};

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        kicker="Work"
        title="Selected Projects"
        sub="Decentralised apps, zero-knowledge tooling and systems experiments."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          return (
            <Reveal key={p.name} delay={i * 0.06} className="h-full">
              <SpotlightCard
                as="a"
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${p.name} on GitHub`}
                className="group glass block h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.06] hover:shadow-glass-lg"
              >
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent2/10 text-xl text-accent ring-1 ring-accent/30 transition-all duration-300 group-hover:shadow-glow group-hover:ring-accent/60">
                      <FiGithub aria-hidden />
                    </span>
                    <FiArrowUpRight
                      aria-hidden
                      className="text-2xl text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <span className="mt-1 font-mono text-xs uppercase tracking-widest text-white/40">
                    {p.period}
                  </span>

                  <ul className="mt-4 flex-1 space-y-2 text-sm text-white/70">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {p.stack.map((s) => {
                      const Icon = stackIcons[s];
                      return (
                        <span key={s} className="chip">
                          {Icon && <Icon aria-hidden />}
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
