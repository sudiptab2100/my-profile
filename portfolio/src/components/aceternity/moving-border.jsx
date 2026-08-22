import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "../../lib/utils";

export function MovingBorderButton({
  children,
  as: Component = "button",
  duration = 2800,
  borderRadius = "9999px",
  containerClassName,
  borderClassName,
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        "relative inline-block overflow-hidden bg-transparent p-[1.5px]",
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0" style={{ borderRadius }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-24 w-24 bg-[radial-gradient(#00ff99_40%,transparent_60%)] opacity-80",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex items-center justify-center gap-2 border border-white/10 bg-[#16161c] px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[2px] text-white antialiased transition-colors duration-300 hover:text-accent",
          className
        )}
        style={{ borderRadius }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorder({ children, duration = 2800, rx, ry, ...props }) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...props}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
