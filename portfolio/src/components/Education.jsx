import { useReducedMotion } from "framer-motion";
import { FiBookOpen, FiAward, FiExternalLink } from "react-icons/fi";
import { education, achievements, publications } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";
import { BackgroundGradient } from "./aceternity/background-gradient";

// Small labelled sub-heading with an accent-tinted icon chip.
function Subhead({ icon, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30">
        {icon}
      </span>
      <h3 className="text-lg font-semibold text-white">{children}</h3>
    </div>
  );
}

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <Section id="education">
      <SectionHeading
        kicker="Background"
        title="Education & Highlights"
        sub="Academics, competition wins, and published research — the milestones behind the work."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Education */}
        <Reveal className="lg:col-span-5">
          <Subhead icon={<FiBookOpen />}>Education</Subhead>
          <div className="flex flex-col gap-5">
            {education.map((e) => (
              <SpotlightCard key={e.school} className="card group flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
                    {e.school}
                  </h4>
                  <span className="flex-none rounded-full bg-gradient-to-r from-accent/15 to-accent2/15 px-3 py-1 font-mono text-xs font-medium text-accent ring-1 ring-accent/30">
                    {e.year}
                  </span>
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
            ))}
          </div>
        </Reveal>

        {/* Achievements */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <Subhead icon={<FiAward />}>Achievements</Subhead>
          <div className="grid gap-5 sm:grid-cols-2">
            {achievements.map((a) => {
              const featured = a.detail.includes("$5,000");

              if (featured) {
                return (
                  <div key={a.title} className="sm:col-span-2">
                    <BackgroundGradient
                      animate={!reduce}
                      containerClassName="rounded-3xl"
                      className="glass-strong overflow-hidden rounded-3xl p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-xl text-accent ring-1 ring-accent/30">
                          <FiAward />
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent2 px-3 py-1 text-xs font-semibold text-primary shadow-glow">
                          <FiAward className="text-sm" /> $5,000 Grant
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-white">
                        {a.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {a.detail}
                      </p>
                    </BackgroundGradient>
                  </div>
                );
              }

              return (
                <SpotlightCard
                  key={a.title}
                  className="card group flex h-full flex-col"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg text-accent ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-accent/10 group-hover:ring-accent/30">
                    <FiAward />
                  </span>
                  <h4 className="mt-4 font-semibold text-white transition-colors group-hover:text-accent">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/65">{a.detail}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="divider my-12" />

      {/* Publications */}
      <Reveal delay={0.15}>
        <Subhead icon={<FiExternalLink />}>Publications</Subhead>
        <div className="grid gap-5 md:grid-cols-2">
          {publications.map((p) => (
            <SpotlightCard
              key={p.title}
              as="a"
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card group flex h-full items-start justify-between gap-4"
            >
              <div>
                <p className="font-medium text-white transition-colors group-hover:text-accent">
                  {p.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-white/50 ring-1 ring-white/10">
                  {p.venue}
                </span>
              </div>
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/5 text-white/40 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/30">
                <FiExternalLink className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </SpotlightCard>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
