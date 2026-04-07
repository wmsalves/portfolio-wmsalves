"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motionBase, motionViewport } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" ariaLabelledby="about-title">
      <motion.div
        className="mx-auto max-w-5xl"
        initial="hidden"
        whileInView="show"
        viewport={motionViewport}
        variants={motionBase.stagger}
      >
        <SectionHeader
          id="about-title"
          eyebrow={t("about.eyebrow")}
          title={
            <>
              {t("about.title")} <span className="text-primary">{t("about.titleAccent")}</span>
            </>
          }
          subtitle={t("about.subtitle")}
          align="left"
        />

        <motion.div variants={motionBase.fadeUp} className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="group relative rounded-2xl border border-border/60 bg-surface/70 p-8 backdrop-blur-sm md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_60%)]"
            />
            <div className="relative z-10 space-y-5 text-muted text-base leading-relaxed sm:text-lg">
              {(t("about.paragraphs") as string[]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-surface-2/70 p-6 text-center transition-colors hover:border-primary/40">
              <div className="mb-3 flex justify-center text-primary">
                <Briefcase size={24} />
              </div>
              <span className="block text-3xl font-bold text-foreground mb-1">2+</span>
              <span className="text-xs uppercase tracking-wider text-muted">{t("about.yearsExp")}</span>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface-2/70 p-6 text-center transition-colors hover:border-primary/40">
              <div className="mb-3 flex justify-center text-primary">
                <Trophy size={24} />
              </div>
              <span className="block text-3xl font-bold text-foreground mb-1">10+</span>
              <span className="text-xs uppercase tracking-wider text-muted">{t("about.projects")}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
