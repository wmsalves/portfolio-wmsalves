"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [isDark, setIsDark] = useState(false);

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
      onClick={() => setIsDark((v) => !v)}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border
                  border-purple-100 text-gray-700 hover:bg-purple-50 hover:text-purple-700
                  dark:border-gray-800 dark:text-gray-200 dark:hover:bg-purple-950/40 ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
