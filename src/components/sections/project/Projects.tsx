"use client";

import { projects } from "@/lib/contants/project";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <motion.section
      id="portfolio"
      className="min-h-screen w-full px-6 md:px-8 py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-purple-600">PROJECTS</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Some of the things I’ve built recently
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.slug ?? `${p.title}-${idx}`}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              viewport={{ once: true }}
            >
              {/* Imagem opcional */}
              {p.image && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600">{p.description}</p>

                {/* Tags */}
                {p.tags?.length ? (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 hover:text-purple-700"
                  >
                    View Project <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
