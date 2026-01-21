"use client";

import { motion, Variants } from "framer-motion"; // 1. Importar Variants
import Link from "next/link";
import { ArrowRight, Github, Linkedin, LucideIcon } from "lucide-react"; // 2. Importar LucideIcon
import { Button } from "@/components/ui/Button";

// 3. Tipar explicitamente o objeto de animação
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* --- BACKGROUND ABSTRATO --- */}
      <div className="absolute inset-0 w-full h-full bg-zinc-950">
        {/* Orbe Roxo (Esquerda) */}
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[100px] mix-blend-screen animate-pulse" />
        {/* Orbe Azul (Direita) */}
        <div className="absolute bottom-[10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[120px] mix-blend-screen" />
        {/* Grid Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="space-y-8"
        >
          {/* Badge Dark Glass */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for new projects
            </div>
          </motion.div>

          {/* Headline com Glow */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Digital Systems
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed"
          >
            Full-stack developer focado em performance e escalabilidade. Crio
            soluções robustas onde o{" "}
            <span className="text-zinc-100 font-semibold">código limpo</span>{" "}
            encontra o design funcional.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-6"
          >
            {/* Note o botão com glow customizado */}
            <Link href="#projects">
              <Button className="h-14 px-8 text-base bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-500/50">
                Explore Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <div className="flex gap-4">
              {/* Ícones sociais minimalistas */}
              <SocialBtn href="https://github.com/wmsalves" icon={Github} />
              <SocialBtn
                href="https://linkedin.com/in/wmsalves"
                icon={Linkedin}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// 4. Corrigir a tipagem do ícone de 'any' para 'LucideIcon'
function SocialBtn({ href, icon: Icon }: { href: string; icon: LucideIcon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
    >
      <Icon size={20} />
    </a>
  );
}
