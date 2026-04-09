"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motionBase, motionViewport } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ContactSection() {
  const { tString } = useLanguage();

  return (
    <Section id="contact" ariaLabelledby="contact-title" className="pb-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={motionViewport}
        variants={motionBase.fadeScale}
        className="group relative mx-auto max-w-2xl space-y-8 rounded-2xl border border-border/60 bg-surface/70 p-8 text-center backdrop-blur-md"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 rounded-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_40%)]"
        />
        <div className="relative z-10 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail size={30} />
        </div>

        <h2
          id="contact-title"
          className="relative z-10 font-display text-3xl font-bold text-foreground sm:text-4xl"
        >
          {tString("contact.title")}
        </h2>
        <p className="relative z-10 text-base text-muted sm:text-lg">
          {tString("contact.subtitle")}
        </p>

        <div className="relative z-10 flex flex-col gap-4 justify-center pt-2 sm:flex-row">
          <a href="mailto:dev.wmsalves@gmail.com">
            <Button className="h-12 px-8 w-full sm:w-auto bg-foreground text-bg hover:bg-foreground/90 border-none">
              <Mail className="mr-2 h-4 w-4" />
              {tString("contact.cta")}
            </Button>
          </a>
        </div>

        <p className="relative z-10 text-sm text-muted">
          {tString("contact.helper")}
        </p>
      </motion.div>
    </Section>
  );
}
