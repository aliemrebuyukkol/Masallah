# Motion (GitHub Repository) (`motiondivision/motion`)

- **GitHub:** [https://github.com/motiondivision/motion](https://github.com/motiondivision/motion)
- **Homepage / Demo:** [https://motion.dev](https://motion.dev)
- **License:** MIT
- **Stars:** 34,721
- **Language:** TypeScript

## Installation

```bash
npm install motion
```

## Key Features

- Primary domain: Motion (J. Video / Motion / Generative Toolchain)
- Core stack: TypeScript, React, Web Animations API, Spring Physics
- License verified: MIT
- Canonical product link: unified with motion-dev to prevent duplicate vendor indexing.

## Minimal Usage Example

```tsx
import { motion, AnimatePresence } from "motion/react";

export const AnimatedPill = ({ label }: { label: string }) => (
  <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
    {label}
  </motion.div>
);
```
