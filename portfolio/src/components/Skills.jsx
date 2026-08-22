import { skills } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { InfiniteMovingCards } from "./aceternity/infinite-moving-cards";

const allTech = [...new Set(Object.values(skills).flat())];
const mid = Math.ceil(allTech.length / 2);
const rowA = allTech.slice(0, mid);
const rowB = allTech.slice(mid);

export default function Skills() {
  const groups = Object.entries(skills);
  return (
    <Section id="skills" className="bg-black-100/40">
      <SectionHeading
        kicker="Toolbox"
        title="Skills & Technologies"
        sub="Languages, frameworks and platforms I use to ship reliable systems."
      />

      <Reveal className="mb-14">
        <div className="space-y-4">
          <InfiniteMovingCards items={rowA} direction="left" speed="slow" />
          <InfiniteMovingCards items={rowB} direction="right" speed="slow" />
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.06}>
            <div className="card h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_#00ff99]" />
                <h3 className="text-lg font-semibold text-white">{group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
