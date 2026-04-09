"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { experiences } from "@/lib/data/experiences";
import { motionBase, motionViewport } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const baseTopics = [
  { label: "work", href: "#projects" },
  { label: "toolkit", href: "#skills" },
  { label: "story", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Hero() {
  const { tString, tArray } = useLanguage();

  return (
    <Section
      id="home"
      ariaLabelledby="hero-title"
      className="!py-0 pt-10 pb-14 sm:pt-12 sm:pb-16"
    >
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={motionViewport}
          variants={motionBase.stagger}
          className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start"
        >
          <div className="flex flex-col gap-5">
            <motion.div
              variants={motionBase.fadeUp}
              className="flex justify-start"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {tString("hero.badge")}
              </div>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={motionBase.fadeUp}
              className="font-display max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl leading-[1.05]"
            >
              {tString("hero.titleTop")}
              <span className="block bg-gradient-to-r from-primary to-primary-2 bg-clip-text text-transparent">
                {tString("hero.titleAccent")}
              </span>
              {tString("hero.titleBottom")}
            </motion.h1>

            <motion.p
              variants={motionBase.fadeUp}
              className="max-w-xl text-base text-muted sm:text-lg leading-relaxed"
            >
              {tString("hero.description")}
            </motion.p>

            <motion.div
              variants={motionBase.fadeUp}
              className="flex flex-wrap gap-2 -mt-2"
            >
              {(experiences.length
                ? [{ label: "experience", href: "#experience" }, ...baseTopics]
                : baseTopics
              ).map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={cn(
                    "rounded-full border border-border/70 bg-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors",
                    topic.href === "#projects" &&
                      "border-primary/40 text-foreground",
                  )}
                >
                  {tString(`hero.topics.${topic.label}`)}
                </Link>
              ))}
            </motion.div>

            <motion.div
              variants={motionBase.fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="#projects">
                <Button className="h-12 px-7 text-sm border border-primary/40">
                  {tString("hero.cta")}
                </Button>
              </Link>
              <div className="flex gap-3">
                <SocialBtn
                  href="https://github.com/wmsalves"
                  icon={Github}
                  label={tString("social.github")}
                />
                <SocialBtn
                  href="https://linkedin.com/in/wmsalves"
                  icon={Linkedin}
                  label={tString("social.linkedin")}
                />
              </div>
            </motion.div>
          </div>

          <motion.aside
            variants={motionBase.fadeUp}
            className="mt-6 rounded-2xl border border-border/60 bg-surface/70 p-6 backdrop-blur-md lg:mt-10"
          >
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                  {tString("hero.card.now")}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  {tString("hero.card.title")}
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {tString("hero.card.description")}
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-surface-2/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {tString("hero.card.focus")}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {tArray("hero.card.focusItems").map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border/70 bg-surface-2/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {tString("hero.card.availability")}
                </p>
                <p className="mt-2 text-sm text-foreground">
                  {tString("hero.card.availabilityText")}
                </p>
                <Link
                  href="#contact"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-primary"
                >
                  {tString("hero.card.startConversation")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </Section>
  );
}

function SocialBtn({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/70 text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
    >
      <Icon size={18} />
    </a>
  );
}
