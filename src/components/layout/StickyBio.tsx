"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, MapPin, Sparkles, Home, Layers, FileText } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/components/providers/LanguageProvider";

type SectionKey = "#home" | "#projects" | "#skills";

const sectionIcons: Record<SectionKey, React.ComponentType<{ size?: number; className?: string }>> = {
  "#home": Home,
  "#projects": Layers,
  "#skills": FileText,
};

export default function StickyBio() {
  const { tString, tArray } = useLanguage();
  const activeSection = useActiveSection(["#home", "#projects", "#skills"]) as SectionKey;

  const Icon = sectionIcons[activeSection] || Sparkles;

  const sectionKey = activeSection.replace("#", "") as "home" | "projects" | "skills";
  const insights = tArray(`sticky.insights.${sectionKey}`);

  return (
    <aside className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_60%)]"
      />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Wemerson Alves</p>
          <h2 className="font-display mt-2 text-xl font-semibold text-foreground">{tString("sticky.role")}</h2>
        </div>
        <span className="rounded-full border border-border/70 bg-surface-2/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          {new Date().getFullYear()}
        </span>
      </div>

      <div className="relative z-10 mt-6 space-y-3 text-sm text-muted">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-primary" />
          {tString("sticky.location")}
        </div>
        <div className="flex items-center gap-2">
          <CalendarClock size={14} className="text-primary" />
          {tString("sticky.open")}
        </div>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl border border-border/70 bg-surface-2/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{tString("sticky.now")}</p>
        <p className="mt-2 text-sm text-foreground">{tString("sticky.nowText")}</p>
      </div>

      <div className="relative z-10 mt-4 rounded-2xl border border-border/70 bg-surface-2/70 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{tString("sticky.active")}</p>
          <Icon size={14} className="text-primary" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 space-y-2 will-change-transform"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {tString("sticky.exploring", { section: tString(`sticky.sections.${sectionKey}`) })}
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
