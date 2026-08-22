import { useRef } from "react";
import { cn } from "../../lib/utils";

// A surface that renders a soft mint spotlight following the cursor.
// Drives the `.spotlight-surface` CSS via --x / --y custom properties,
// so hover tracking never triggers a React re-render.
export function SpotlightCard({
  as: Component = "div",
  className,
  children,
  ...props
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "spotlight-surface relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
