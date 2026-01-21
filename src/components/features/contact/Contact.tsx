"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 pb-32">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 mb-4">
            <Mail size={32} />
          </div>

          <h2 className="text-4xl font-bold text-white">
            Let&apos;s work together?
          </h2>
          <p className="text-xl text-zinc-400">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou
            oportunidades de fazer parte da sua visão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:dev.wmsalves@gmail.com">
              <Button className="h-12 px-8 w-full sm:w-auto bg-white text-black hover:bg-zinc-200 border-none">
                <Mail className="mr-2 h-4 w-4" />
                Mandar E-mail
              </Button>
            </a>
          </div>

          <p className="text-sm text-zinc-600 pt-8">
            Ou me encontre nas redes sociais listadas no topo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
