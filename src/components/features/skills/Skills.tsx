"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Layers,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { frameworks, skills, tools } from "@/lib/data/skills";
import type { SkillLevel } from "@/types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motionBase, motionViewport } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

function SkillPill({ name, level }: { name: string; level: SkillLevel }) {
  const isLearning = level === "learning";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border backdrop-blur-sm transition-all duration-300",
        isLearning
          ? "border-primary/30 bg-primary/10 text-primary/90 hover:border-primary/50"
          : "border-border/70 bg-surface-2/60 text-foreground/80 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground",
      )}
    >
      {isLearning ? (
        <span className="mr-2 flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      ) : null}
      {name}
    </span>
  );
}

function BentoCard({
  title,
  icon: Icon,
  children,
  className,
  delay = 0,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={motionBase.fadeScale}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border/60 bg-surface/70 p-6 backdrop-blur-md transition-all hover:border-primary/30",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_60%)]"
      />
      <div className="relative z-10 mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-primary">
          <Icon size={20} />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">{children}</div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { tString } = useLanguage();
  const languages = skills.filter((skill) => skill.name !== "SQL");
  const learning = skills.filter((skill) => skill.level === "learning");
  const mainStack = frameworks;
  const dbAndTools = [
    ...tools,
    ...skills.filter((skill) => skill.name === "SQL"),
  ];

  return (
    <Section id="skills" ariaLabelledby="skills-title" className="overflow-hidden">
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={motionViewport}
        variants={motionBase.stagger}
      >
        <SectionHeader
          id="skills-title"
          eyebrow={tString("skills.eyebrow")}
          title={
            <>
              {tString("skills.title")} <span className="text-primary">{tString("skills.titleAccent")}</span>
            </>
          }
          subtitle={tString("skills.subtitle")}
          align="left"
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <BentoCard
            title={tString("skills.cards.frameworks")}
            icon={Layers}
            className="lg:row-span-2"
            delay={0.1}
          >
            <p className="w-full text-sm text-muted mb-4">
              {tString("skills.frameworksDescription")}
            </p>
            {mainStack.map((item) => (
              <SkillPill key={item.name} name={item.name} level={item.level} />
            ))}
          </BentoCard>

          <BentoCard title={tString("skills.cards.coreLanguages")} icon={Terminal} delay={0.2}>
            {languages.map((item) => (
              <SkillPill key={item.name} name={item.name} level={item.level} />
            ))}
          </BentoCard>

          <BentoCard title={tString("skills.cards.infraData")} icon={Database} delay={0.3}>
            {dbAndTools.map((item) => (
              <SkillPill key={item.name} name={item.name} level={item.level} />
            ))}
          </BentoCard>

          <BentoCard title={tString("skills.cards.exploring")} icon={Globe} className="lg:col-span-2" delay={0.4}>
            <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <span className="text-sm text-muted">
                {tString("skills.exploringDescription")}
              </span>
              <div className="flex flex-wrap gap-2">
                {learning.map((item) => (
                  <SkillPill key={item.name} name={item.name} level={item.level} />
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </motion.div>
    </Section>
  );
}
