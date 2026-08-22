import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.08) }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  return (
    <div className={cn(className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{ filter: filter ? "blur(8px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
