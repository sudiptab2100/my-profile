import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { HoverEffect } from "./aceternity/card-hover-effect";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        kicker="Work"
        title="Selected Projects"
        sub="Decentralised apps, zero-knowledge tooling and systems experiments."
      />

      <Reveal>
        <HoverEffect
          items={projects}
          idKey="name"
          renderItem={(p) => (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card group flex h-full flex-col hover:bg-[#1a1a21]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-xl text-accent ring-1 ring-accent/30">
                  <FiGithub />
                </span>
                <FiArrowUpRight className="text-2xl text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-accent">
                {p.name}
              </h3>
              <span className="mt-1 font-mono text-xs uppercase tracking-widest text-white/40">
                {p.period}
              </span>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-white/65">
                {p.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          )}
        />
      </Reveal>
    </Section>
  );
}
