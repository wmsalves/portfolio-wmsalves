"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data/experiences";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motionBase, motionViewport } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ExperienceSection() {
  const { tString } = useLanguage();
  if (experiences.length === 0) return null;

  return (
    <Section id="experience" ariaLabelledby="experience-title">
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={motionViewport}
        variants={motionBase.stagger}
      >
        <SectionHeader
          id="experience-title"
          eyebrow={tString("experience.eyebrow")}
          title={
            <>
              {tString("experience.title")} <span className="text-primary">{tString("experience.titleAccent")}</span>
            </>
          }
          subtitle={tString("experience.subtitle")}
          align="left"
        />

        <ol className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.li
              key={`${experience.company}-${experience.role}-${experience.period}`}
              variants={motionBase.fadeUp}
              transition={{ delay: index * 0.05 }}
              className="rounded-[24px] border border-border/70 bg-surface/70 p-6 backdrop-blur-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
                  <p className="text-sm text-muted">
                    {experience.company}
                    {experience.location ? ` • ${experience.location}` : ""}
                  </p>
                </div>
                <span className="rounded-full border border-border/70 bg-surface-2/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {experience.period}
                </span>
              </div>

              <p className="mt-4 text-base text-muted leading-relaxed">{experience.summary}</p>

              {experience.highlights.length > 0 ? (
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {experience.tech && experience.tech.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-border/70 bg-surface-2/70 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
