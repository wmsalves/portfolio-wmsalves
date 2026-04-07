"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectsCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motionBase, motionViewport } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ProjectList() {
  const { tString } = useLanguage();

  return (
    <Section id="projects" ariaLabelledby="projects-title" className="overflow-hidden">
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={motionViewport}
        variants={motionBase.stagger}
      >
        <SectionHeader
          id="projects-title"
          eyebrow={tString("projects.eyebrow")}
          title={
            <>
              {tString("projects.title")} <span className="text-primary">{tString("projects.titleAccent")}</span>
            </>
          }
          subtitle={tString("projects.subtitle")}
          align="left"
        />

        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2" variants={motionBase.stagger}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
