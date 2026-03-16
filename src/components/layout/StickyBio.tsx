"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, MapPin, Sparkles } from "lucide-react";

const insights = [
  "A personal approach centered on craft, curiosity, and reliability.",
  "Building habits that keep quality high and stress low.",
];

export default function StickyBio() {
  return (
    <aside className="group relative rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_60%)]"
      />
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Wemerson Alves
          </p>
          <h2 className="font-display mt-2 text-xl font-semibold text-foreground">
            Full-stack Engineer
          </h2>
        </div>
        <span className="rounded-full border border-border/70 bg-surface-2/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          {new Date().getFullYear()}
        </span>
      </div>

      <div className="relative z-10 mt-6 space-y-3 text-sm text-muted">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-primary" />
          Belo Horizonte, Brazil
        </div>
        <div className="flex items-center gap-2">
          <CalendarClock size={14} className="text-primary" />
          Open for select projects
        </div>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl border border-border/70 bg-surface-2/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Now
        </p>
        <p className="mt-2 text-sm text-foreground">
          Building a personal system of case studies, experiments, and product
          notes.
        </p>
      </div>

      <div className="relative z-10 mt-4 rounded-2xl border border-border/70 bg-surface-2/70 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Active
          </p>
          <Sparkles size={14} className="text-primary" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-2 space-y-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Viewing Story
            </p>
            {insights.map((insight) => (
              <p key={insight} className="text-sm text-foreground">
                {insight}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
}
