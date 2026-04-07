"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage, tString } = useLanguage();
  const next = language === "en" ? "pt-BR" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(next)}
      aria-label={tString("header.languageToggle")}
      className="inline-flex h-10 items-center justify-center rounded-lg border border-border/70 bg-surface/70 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:border-primary/40 hover:text-foreground"
    >
      {language === "en" ? "EN" : "PT"}
    </button>
  );
}
