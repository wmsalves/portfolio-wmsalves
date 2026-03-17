"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarClock,
  MapPin,
  Sparkles,
  Home,
  Layers,
  FileText,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

type SectionKey = "#home" | "#projects" | "#skills";

const sectionContent: Record<SectionKey, string[]> = {
  "#home": [
    "Welcome — this is where everything starts.",
    "Scroll to explore my work and mindset.",
  ],
  "#projects": [
    "A selection of projects focused on quality.",
    "Built with scalability and real-world usage in mind.",
  ],
  "#skills": [
    "A toolkit shaped by practical experience.",
    "Always evolving with new technologies.",
  ],
};

const sectionIcons: Record<
  SectionKey,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "#home": Home,
  "#projects": Layers,
  "#skills": FileText,
};

export default function StickyBio() {
  const activeSection = useActiveSection([
    "#home",
    "#projects",
    "#skills",
  ]) as SectionKey;

  const Icon = sectionIcons[activeSection] || Sparkles;

  return (
    <aside className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_60%)]"
      />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Wemerson Alves
          </p>
          <h2 className="font-display mt-2 text-xl font-semibold text-foreground">
            Full-stack Developer
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

          <Icon size={14} className="text-primary" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-2 space-y-2 will-change-transform"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Exploring {activeSection.replace("#", "")}
            </p>

            {sectionContent[activeSection].map((insight) => (
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
