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
  const total = projects.length;

  return (
    <Section id="projects">
      <SectionHeading
        kicker="Work"
        title="Selected Projects"
        sub="Decentralised apps, zero-knowledge tooling and systems experiments."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => {
          const featured = i === 0;
          // Canonical 4-project layout: the last tile becomes a full-width banner
          // so the featured 2×2 tile pairs cleanly with two stacked tiles + a base row.
          const banner = total === 4 && i === total - 1;
          const span = featured
            ? "md:col-span-2 xl:col-span-2 xl:row-span-2"
            : banner
              ? "md:col-span-2 xl:col-span-3"
              : "";
          const points = featured ? p.points : p.points.slice(0, 2);

          return (
            <Reveal key={p.name} delay={i * 0.06} className={`h-full ${span}`}>
              <SpotlightCard
                as="a"
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${p.name} on GitHub`}
                className="group glass block h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.06] hover:shadow-glass-lg"
              >
                {featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
                  />
                )}

                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent ring-1 ring-accent/30 transition-all duration-300 group-hover:shadow-glow group-hover:ring-accent/60 ${
                        featured ? "h-12 w-12 text-2xl" : "h-11 w-11 text-xl"
                      }`}
                    >
                      <FiGithub aria-hidden />
                    </span>
                    <FiArrowUpRight
                      aria-hidden
                      className="text-2xl text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>

                  {featured && (
                    <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent ring-1 ring-accent/25">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                      Featured
                    </span>
                  )}

                  <h3
                    className={`font-semibold text-white transition-colors group-hover:text-accent ${
                      featured ? "mt-4 text-2xl sm:text-3xl" : "mt-5 text-xl"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <span className="mt-1 font-mono text-xs uppercase tracking-widest text-white/40">
                    {p.period}
                  </span>

                  <ul
                    className={`mt-4 flex-1 space-y-2 text-sm ${
                      featured ? "text-white/70" : "text-white/65"
                    }`}
                  >
                    {points.map((pt, idx) => (
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
