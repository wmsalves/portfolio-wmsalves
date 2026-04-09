"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  id,
  eyebrow,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  id: string;
  eyebrow?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 flex max-w-2xl flex-col gap-3",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </span>
      ) : null}

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-base text-muted sm:text-lg"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
