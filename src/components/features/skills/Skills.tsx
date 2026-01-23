"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Database, Globe, Layers, Terminal, LucideIcon } from "lucide-react";
import { frameworks, skills, tools } from "@/lib/contants/skills";

function SkillPill({ name, level }: { name: string; level: string }) {
  const isLearning = level === "learning";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border backdrop-blur-sm transition-all duration-300",
        isLearning
          ? "border-amber-500/30 bg-amber-500/10 text-amber-200 hover:border-amber-500/50"
          : "border-white/10 bg-white/5 text-zinc-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-200",
      )}
    >
      {isLearning && (
        <span className="mr-1.5 flex h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
      )}
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur-md transition-all hover:border-purple-500/20",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-purple-400">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">{children}</div>
      <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
    </motion.div>
  );
}

export default function SkillsSection() {
  const languages = skills.filter((s) => s.name !== "SQL");
  const learning = skills.filter((s) => s.level === "learning");
  const mainStack = frameworks;
  const dbAndTools = [...tools, ...skills.filter((s) => s.name === "SQL")];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter text-white sm:text-4xl"
          >
            Technical <span className="text-purple-400">Arsenal</span>
          </motion.h2>
          <p className="mt-4 text-zinc-400">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          <BentoCard
            title="Frameworks & Libraries"
            icon={Layers}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900/60 to-purple-900/10"
            delay={0.1}
          >
            <p className="w-full text-sm text-zinc-400 mb-4">
              The core of my full-stack development workflow. Focused on
              performance and UX.
            </p>
            {mainStack.map((item) => (
              <SkillPill key={item.name} name={item.name} level={item.level} />
            ))}
          </BentoCard>

          <BentoCard title="Core Languages" icon={Terminal} delay={0.2}>
            {languages.map((item) => (
              <SkillPill key={item.name} name={item.name} level={item.level} />
            ))}
          </BentoCard>

          <BentoCard title="Infra & Data" icon={Database} delay={0.3}>
            {dbAndTools.map((item) => (
              <SkillPill key={item.name} name={item.name} level={item.level} />
            ))}
          </BentoCard>

          <BentoCard
            title="Exploring Now"
            icon={Globe}
            className="md:col-span-3 border-amber-500/10 bg-amber-500/5"
            delay={0.4}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-zinc-400">
                Currently expanding my knowledge in enterprise technologies.
              </span>
              <div className="flex gap-2">
                {learning.map((item) => (
                  <SkillPill
                    key={item.name}
                    name={item.name}
                    level={item.level}
                  />
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
