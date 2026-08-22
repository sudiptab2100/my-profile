import { motion } from "framer-motion";

const PANELS = 6;

export default function Stairs() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[70] flex"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          className="relative h-full w-full bg-[#06251a]"
          initial={{ top: 0 }}
          animate={{ top: "100%" }}
          transition={{
            duration: 0.45,
            delay: i * 0.07,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </motion.div>
  );
}
