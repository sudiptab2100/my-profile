import {
  FiBriefcase,
  FiMapPin,
  FiTarget,
  FiBookOpen,
  FiCpu,
  FiUser,
} from "react-icons/fi";
import { profile, about, experience, education } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";

// Fold the `about` array (empty strings mark paragraph breaks) into prose:
// consecutive non-empty lines join with a space, each blank starts a new <p>.
const paragraphs = about
  .reduce(
    (acc, line) => {
      if (line.trim() === "") {
        if (acc[acc.length - 1].length) acc.push([]);
      } else {
        acc[acc.length - 1].push(line);
      }
      return acc;
    },
    [[]]
  )
  .map((lines) => lines.join(" "))
  .filter(Boolean);

const focusAreas = profile.tagline
  .split("•")
  .map((t) => t.trim())
  .filter(Boolean);

const facts = [
  {
    icon: FiBriefcase,
    label: "Currently",
    title: experience[0].company,
    sub: experience[0].role,
    span: "xl:col-span-1",
  },
  {
    icon: FiMapPin,
    label: "Based in",
    title: profile.location,
    sub: "Open to remote",
    span: "xl:col-span-1",
  },
  {
    icon: FiTarget,
    label: "Focus",
    chips: focusAreas,
    span: "xl:col-span-1",
  },
  {
    icon: FiBookOpen,
    label: "Education",
    title: education[0].school,
    sub: education[0].degree,
    span: "xl:col-span-1",
  },
  {
    icon: FiCpu,
    label: "Interests",
    chips: ["Cryptography", "Systems", "Zero-Knowledge"],
    span: "sm:col-span-2 xl:col-span-1",
  },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        kicker="About"
        title="Who I am"
        sub="A quick snapshot of the engineer behind the code — what I do, where I am, and what I care about."
      />

      <div className="grid grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <Reveal className="sm:col-span-2 xl:col-span-2 xl:row-span-2">
          <div className="glass-strong h-full p-7 sm:p-9 xl:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-lg text-accent ring-1 ring-white/10">
                <FiUser />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/45">
                Profile
              </span>
            </div>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-white/85"
                      : "leading-relaxed text-white/65"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
              {profile.name} · {profile.role}
            </div>
          </div>
        </Reveal>

        {facts.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.label} delay={0.08 + i * 0.06} className={f.span}>
              <SpotlightCard className="glass group flex h-full flex-col justify-between gap-6 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-lg text-accent ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                    <Icon />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                    {f.label}
                  </span>
                </div>

                {f.chips ? (
                  <div className="flex flex-wrap gap-2">
                    {f.chips.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                      {f.title}
                    </p>
                    {f.sub && (
                      <p className="mt-1 text-sm text-white/55">{f.sub}</p>
                    )}
                  </div>
                )}
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
