"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-md transition-all hover:border-purple-500/30 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.15)]"
    >
      {/* Imagem do Projeto com Overlay */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
        <Link href={project.link} target="_blank" className="cursor-pointer">
          <Image
            src={project.image || "/images/placeholder.png"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        {/* Overlay Gradiente para legibilidade (opcional) */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>

          <Link
            href={project.link}
            target="_blank"
            className="rounded-full border border-white/10 p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <p className="mt-4 mb-6 line-clamp-3 text-base text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tags no rodapé do card */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
