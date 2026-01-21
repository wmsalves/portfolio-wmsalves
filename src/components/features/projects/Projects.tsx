"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/contants/project";

export default function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="w-full bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <motion.div
        className="
          scroll-mt-24 max-w-6xl mx-auto
          min-h-[calc(100svh-56px)] lg:min-h-screen
          px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-purple-600">MY</span>{" "}
            <span className="text-gray-900 dark:text-gray-100">PROJECTS</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Some of the things I’ve built recently
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.slug ?? `${p.title}-${idx}`}
              className="
                group rounded-2xl border border-gray-200 bg-white
                shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all
                focus-within:ring-2 focus-within:ring-purple-300
                dark:border-gray-800 dark:bg-gray-900 dark:focus-within:ring-purple-500
              "
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {p.description}
                </p>

                {/* Tags */}
                {p.tags?.length ? (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="
                          text-xs font-medium px-2.5 py-1 rounded-full
                          bg-purple-50 text-purple-700 border border-purple-100
                          dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900
                        "
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
                    className="
                      inline-flex items-center gap-1.5 text-sm font-medium
                      text-purple-600 hover:text-purple-700
                      focus:outline-none focus:ring-2 focus:ring-purple-300 rounded
                      dark:text-purple-300 dark:hover:text-purple-200 dark:focus:ring-purple-500
                    "
                  >
                    View Project <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
