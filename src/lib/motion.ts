import type { Variants } from "framer-motion";
import type { UseInViewOptions } from "framer-motion";

const SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const motionBase: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: SPRING },
    },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: SPRING },
    },
  },
  slideIn: {
    hidden: { opacity: 0, x: -16 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: SPRING },
    },
  },
  stagger: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  },
};

export const motionViewport: {
  once: boolean;
  margin: string;
  amount?: UseInViewOptions["amount"];
} = {
  once: true,
  margin: "-40px",
  amount: 0.1,
};
