"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Beyond the <span className="text-purple-400">Code</span>
              </h2>
              <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Sou um desenvolvedor apaixonado por criar interfaces que não
                  apenas funcionam, mas encantam. Minha jornada começou com
                  curiosidade e se transformou em uma busca constante pela{" "}
                  <span className="text-zinc-200 font-medium">
                    arquitetura de software perfeita
                  </span>
                  .
                </p>
                <p>
                  Quando não estou debugando ou arquitetando sistemas em
                  Next.js, você provavelmente vai me encontrar estudando sobre
                  design patterns, ouvindo música ou apreciando um bom café.
                </p>
              </div>
            </div>

            {/* Stats / Imagem Decorativa (Opcional) */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-white/5 p-4 text-center border border-white/5">
                <span className="block text-3xl font-bold text-white">2+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  Years Exp.
                </span>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center border border-white/5">
                <span className="block text-3xl font-bold text-purple-400">
                  10+
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  Projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
