"use client";

import type { Project } from "@/types";
import { motion } from "framer-motion";
import { motionBase, motionViewport } from "@/lib/motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={motionBase.fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
      transition={{ delay: index * 0.08 }}
      className="group relative flex h-full flex-col rounded-2xl border border-border/60 bg-surface/80 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-[0_18px_50px_-30px_rgba(56,189,248,0.3)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_55%)]"
      />
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} repository`}
          className="block h-full w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/70 p-2 text-muted transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>

        <p className="mt-4 mb-6 line-clamp-3 text-base text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/70 bg-surface-2/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
