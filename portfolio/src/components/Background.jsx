// Single fixed backdrop shared by the whole page: a lit-from-top depth
// gradient, a faint dot grid, two on-brand aurora glows that breathe
// gently, film grain and a vignette. Purely decorative.
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* vertical depth — softly lit at the top, deeper toward the bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_-15%,#282833_0%,#1c1c22_46%,#131317_100%)]" />

      {/* fine dot grid, fading out toward the bottom */}
      <div className="absolute inset-0 bg-dotgrid opacity-[0.55]" />

      {/* mint horizon glow across the top */}
      <div className="absolute left-1/2 top-[-32vh] h-[72vh] w-[120vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,255,153,0.16),transparent_72%)] blur-[40px]" />

      {/* breathing aurora glows (on-brand, gentle — no drifting) */}
      <div className="absolute -left-32 top-[20%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.12] blur-[130px] animate-breath motion-reduce:animate-none" />
      <div className="absolute -right-40 top-[60%] h-[32rem] w-[32rem] rounded-full bg-[#12d8ff]/[0.10] blur-[140px] animate-breath [animation-delay:-7s] motion-reduce:animate-none" />

      {/* film grain to kill banding and add texture */}
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-soft-light" />

      {/* vignette to focus the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
