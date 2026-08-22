import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient bar pinned to the very top that fills as the page scrolls.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-accent via-accent2 to-accent shadow-[0_0_12px_rgba(0,255,153,0.6)]"
    />
  );
}
