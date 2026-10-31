# Motion Spring Physics & Shared Layout Playground

Interactive physics studio demonstrating Motion’s spring solver (stiffness, damping, mass) and FLIP layout transitions with real-time parameter sliders and reduced-motion inspection.

```tsx
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function SharedLayoutCards({ items, activeId, onSelect, springConfig }) {
  const prefersReduced = useReducedMotion();
  const transition = prefersReduced
    ? { duration: 0.12 }
    : { type: "spring", stiffness: springConfig.stiffness, damping: springConfig.damping, mass: springConfig.mass };

  return (
    <div className="grid grid-cols-3 gap-4">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.button
            key={item.id}
            layout={!prefersReduced}
            layoutId={`card-${item.id}`}
            transition={transition}
            whileHover={prefersReduced ? {} : { y: -3, scale: 1.015 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            onClick={() => onSelect(item.id)}
          >
            <motion.span layoutId={`title-${item.id}`}>{item.title}</motion.span>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}
```
