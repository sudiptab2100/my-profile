import { education } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        kicker="Background"
        title="Education"
        sub="Academic foundation in computer science and information security."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.06}>
            <SpotlightCard className="card group flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
                  {e.school}
                </h4>
                {e.year && (
                  <span className="flex-none rounded-full bg-gradient-to-r from-accent/15 to-accent2/15 px-3 py-1 font-mono text-xs font-medium text-accent ring-1 ring-accent/30">
                    {e.year}
                  </span>
                )}
              </div>
              <p className="mt-2 text-white/75">{e.degree}</p>
              {e.extra && (
                <p className="mt-0.5 text-sm text-white/50">{e.extra}</p>
              )}
              <span className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-sm text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />
                {e.score}
              </span>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
