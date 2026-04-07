"use client";

import Link from "next/link";
import { useState, useEffect, useMemo, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, FileText, Layers, Mail, Menu, X, Briefcase } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/utils";
import { experiences } from "@/lib/data/experiences";
import { useLanguage } from "@/components/providers/LanguageProvider";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

type NavItem = {
  href: string;
  label: string;
  icon: IconComponent;
};

const baseNavItems: NavItem[] = [
  { href: "#home", label: "home", icon: Home },
  { href: "#projects", label: "projects", icon: Layers },
  { href: "#skills", label: "skills", icon: FileText },
  { href: "#about", label: "about", icon: User },
  { href: "#contact", label: "contact", icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { t } = useLanguage();

  const navItems = useMemo(() => {
    return experiences.length
      ? [
          baseNavItems[0],
          { href: "#experience", label: "experience", icon: Briefcase },
          ...baseNavItems.slice(1),
        ]
      : baseNavItems;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleScrollTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 border-b border-border/30 bg-bg/80 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#home"
            onClick={(event) => handleScrollTo(event, "#home")}
            className="text-2xl font-extrabold tracking-tight text-foreground"
          >
            wms<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleScrollTo(event, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted hover:text-foreground",
                  )}
                >
                  {t(`nav.${item.label}`)}
                </Link>
              );
            })}
            <div className="h-6 w-px bg-border/70" />
            <LanguageToggle />
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-md border border-border/70 p-2 text-muted transition-colors hover:border-primary/40 hover:text-foreground"
              aria-label={t("header.openMenu")}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-72 border-l border-border/70 bg-bg shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border/70 p-6">
                <span className="text-lg font-bold text-foreground">{t("header.menu")}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-muted transition-colors hover:text-primary"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-2 p-4" aria-label="Mobile">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleScrollTo(event, item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all",
                        isActive
                          ? "bg-primary/10 text-foreground"
                          : "text-muted hover:bg-surface-2",
                      )}
                    >
                      <item.icon size={20} />
                      {t(`nav.${item.label}`)}
                    </Link>
                  );
                })}
              </nav>

              <div className="absolute bottom-0 w-full border-t border-border/70 p-6">
                <p className="text-xs text-muted">(c) {new Date().getFullYear()} wms</p>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
