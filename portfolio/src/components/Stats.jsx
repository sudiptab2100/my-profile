import { stats } from "../data/portfolio";
import { Counter, Reveal } from "./ui";

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-black-100/40 py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 xl:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="flex items-center justify-center gap-4 xl:justify-start"
            >
              <span className="text-5xl font-extrabold text-accent text-glow xl:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <p className="max-w-[130px] leading-snug text-white/70">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
