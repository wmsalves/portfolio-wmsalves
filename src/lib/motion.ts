import type { Variants } from "framer-motion";

export const motionBase: { fadeUp: Variants; fadeScale: Variants; stagger: Variants } = {
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  },
  stagger: {
    show: {
      transition: { staggerChildren: 0.12 },
    },
  },
};

export const motionViewport = { once: true, margin: "-40px" };
