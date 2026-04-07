"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language, TranslationValue } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => TranslationValue;
  tString: (key: string, vars?: Record<string, string | number>) => string;
  tArray: (key: string, vars?: Record<string, string | number>) => string[];
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "pt-BR") {
        setLanguage(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {}
  }, [language]);

  useEffect(() => {
    try {
      document.documentElement.lang = language === "pt-BR" ? "pt-BR" : "en";
    } catch {}
  }, [language]);

  const value = useMemo(() => {
    const t = (key: string, vars?: Record<string, string | number>) =>
      getTranslation(language, key, vars);

    const tString = (key: string, vars?: Record<string, string | number>) => {
      const val = t(key, vars);
      return typeof val === "string" ? val : String(val ?? "");
    };

    const tArray = (key: string, vars?: Record<string, string | number>) => {
      const val = t(key, vars);
      return Array.isArray(val) ? (val as string[]) : [];
    };

    return {
      language,
      setLanguage,
      t,
      tString,
      tArray,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
