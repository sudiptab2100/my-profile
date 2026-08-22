import { FiBookOpen, FiAward, FiExternalLink } from "react-icons/fi";
import { education, achievements, publications } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Education() {
  return (
    <Section id="background">
      <SectionHeading
        kicker="Background"
        title="Education & Highlights"
        sub="Academics, competition wins and published research."
      />

      <div className="grid gap-8 xl:grid-cols-2">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <FiBookOpen className="text-xl text-accent" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="flex flex-col gap-4">
            {education.map((e) => (
              <div key={e.school} className="card">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold text-white">{e.school}</h4>
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent ring-1 ring-accent/30">
                    {e.year}
                  </span>
                </div>
                <p className="mt-1 text-white/75">{e.degree}</p>
                {e.extra && <p className="text-sm text-white/50">{e.extra}</p>}
                <p className="mt-2 font-mono text-sm text-accent">{e.score}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-4 flex items-center gap-3">
            <FiAward className="text-xl text-accent" />
            <h3 className="text-lg font-semibold">Achievements</h3>
          </div>
          <div className="flex flex-col gap-4">
            {achievements.map((a) => (
              <div key={a.title} className="card">
                <h4 className="font-semibold text-white">{a.title}</h4>
                <p className="mt-1 text-sm text-white/65">{a.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <FiExternalLink className="text-xl text-accent" />
          <h3 className="text-lg font-semibold">Publications</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {publications.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card group flex items-start justify-between gap-4 hover:bg-[#1a1a21]"
            >
              <div>
                <p className="font-medium text-white transition-colors group-hover:text-accent">
                  {p.title}
                </p>
                <span className="mt-1 inline-block font-mono text-xs uppercase tracking-widest text-white/40">
                  {p.venue}
                </span>
              </div>
              <FiExternalLink className="mt-1 flex-none text-white/40 transition-colors group-hover:text-accent" />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
