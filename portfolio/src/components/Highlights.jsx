import { useReducedMotion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { achievements, publications } from "../data/portfolio";
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

export default function Highlights() {
  const reduce = useReducedMotion();

  return (
    <Section id="highlights">
      <SectionHeading
        kicker="Milestones"
        title="Highlights"
        sub="Competition wins, grants, and published research — the milestones behind the work."
      />

      {/* Achievements */}
      <Reveal>
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

      <div className="divider my-12" />

      {/* Publications */}
      <Reveal delay={0.1}>
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
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent ring-1 ring-accent/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_#00ff99]" />
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
