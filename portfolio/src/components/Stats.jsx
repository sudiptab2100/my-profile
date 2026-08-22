import { FiClock, FiBriefcase, FiLayers, FiFileText } from "react-icons/fi";
import { stats } from "../data/portfolio";
import { Counter, Reveal } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";

const icons = [FiClock, FiBriefcase, FiLayers, FiFileText];

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-black-100/40 py-16 xl:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.label} delay={i * 0.08} className="h-full">
                <SpotlightCard className="glass group flex h-full flex-col justify-between gap-6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow xl:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-lg text-accent ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                      <Icon />
                    </span>
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#00ff99] animate-pulse-dot" />
                  </div>

                  <div>
                    <div className="text-gradient animate-gradient-pan text-5xl font-extrabold leading-none drop-shadow-[0_0_20px_rgba(0,255,153,0.25)] xl:text-6xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="mt-3 text-sm leading-snug text-white/60">
                      {s.label}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
