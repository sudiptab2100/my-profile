import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const dup = item.cloneNode(true);
      scrollerRef.current.appendChild(dup);
    });
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "slow" ? "80s" : "40s"
    );
    setStart(true);
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-1",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-none items-center gap-2 rounded-full border border-white/10 bg-[#16161c] px-5 py-2.5 transition-colors duration-300 hover:border-accent/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />
            <span className="whitespace-nowrap font-mono text-sm text-white/80">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
