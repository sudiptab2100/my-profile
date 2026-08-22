import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function HoverEffect({ items, className, renderItem, idKey }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      {items.map((item, idx) => (
        <div
          key={idKey ? item[idKey] : idx}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-accent/10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full">{renderItem(item, idx)}</div>
        </div>
      ))}
    </div>
  );
}
