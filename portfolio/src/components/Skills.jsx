import { FiCode, FiServer, FiLink, FiTool, FiLayers } from "react-icons/fi";
import {
  SiApachekafka,
  SiApple,
  SiCouchbase,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGithubcopilot,
  SiGraphql,
  SiIbm,
  SiIntellijidea,
  SiIpfs,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiOpenjdk,
  SiPostgresql,
  SiPycharm,
  SiPython,
  SiRedis,
  SiRust,
  SiSolidity,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiWindows,
} from "react-icons/si";
import { skills } from "../data/portfolio";
import { Reveal, Section, SectionHeading } from "./ui";
import { InfiniteMovingCards } from "./aceternity/infinite-moving-cards";
import { SpotlightCard } from "./aceternity/spotlight-card";

const allTech = [...new Set(Object.values(skills).flat())];
const mid = Math.ceil(allTech.length / 2);
const rowA = allTech.slice(0, mid);
const rowB = allTech.slice(mid);

// Category → Feather icon + asymmetric bento span (6-col grid at xl).
const groupMeta = {
  Languages: { icon: <FiCode />, span: "xl:col-span-2" },
  "Backend & Data": { icon: <FiServer />, span: "xl:col-span-4" },
  "Blockchain & ZK": { icon: <FiLink />, span: "xl:col-span-2" },
  "Tools & Platforms": { icon: <FiTool />, span: "xl:col-span-4" },
  Foundations: { icon: <FiLayers />, span: "md:col-span-2 xl:col-span-6" },
};

// Tech → brand logo. Only verified react-icons/si exports; anything absent
// falls back to a small accent dot in the chip.
const techIcons = {
  "C/C++": SiCplusplus,
  Java: SiOpenjdk,
  Python: SiPython,
  Kotlin: SiKotlin,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Rust: SiRust,
  Solidity: SiSolidity,
  "Spring Boot": SiSpringboot,
  "Spring Batch": SiSpring,
  GraphQL: SiGraphql,
  Kafka: SiApachekafka,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  Couchbase: SiCouchbase,
  DB2: SiIbm,
  IPFS: SiIpfs,
  "Web3.py": SiPython,
  Git: SiGit,
  Docker: SiDocker,
  "IntelliJ IDEA": SiIntellijidea,
  PyCharm: SiPycharm,
  "GitHub Copilot": SiGithubcopilot,
  Linux: SiLinux,
  macOS: SiApple,
  Windows: SiWindows,
};

function SkillChip({ name }) {
  const Icon = techIcons[name];
  return (
    <span className="chip">
      {Icon ? (
        <Icon className="shrink-0 text-[15px] text-accent/85" aria-hidden="true" />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />
      )}
      {name}
    </span>
  );
}

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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
        {groups.map(([group, items], i) => {
          const meta = groupMeta[group] ?? { icon: <FiCode />, span: "" };
          return (
            <Reveal key={group} delay={i * 0.06} className={`${meta.span} h-full`}>
              <SpotlightCard className="card group flex h-full flex-col">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent2/15 text-lg text-accent shadow-[0_0_18px_-6px_rgba(0,255,153,0.6)] ring-1 ring-accent/30 transition-colors duration-300 group-hover:ring-accent/60">
                    {meta.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                      {group}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                      {items.length} tools
                    </span>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {items.map((s) => (
                    <SkillChip key={s} name={s} />
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
