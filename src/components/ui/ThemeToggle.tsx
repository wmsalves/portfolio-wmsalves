"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [isDark, setIsDark] = useState(false);
  const { tString } = useLanguage();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(saved ? saved === "dark" : prefers);
    } catch {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((value) => !value)}
      aria-label={tString("header.themeToggle")}
      aria-pressed={isDark}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-surface/70 text-muted transition-colors hover:border-primary/40 hover:text-foreground ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
