import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const GRADIENT =
  "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#12d8ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#00ff99,transparent),radial-gradient(circle_farthest-side_at_0_0,#00e187,#0b0b0f)]";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  roundedClassName = "rounded-3xl",
  animate = true,
}) {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };

  const transition = animate
    ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
    : undefined;

  return (
    <div className={cn("group relative p-[4px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={transition}
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 z-[1] opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100",
          roundedClassName,
          GRADIENT
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={transition}
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 z-[1] will-change-transform",
          roundedClassName,
          GRADIENT
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
