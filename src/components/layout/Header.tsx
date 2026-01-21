"use client";

import Link from "next/link";
import { useState, useEffect, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, FileText, Layers, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

type NavItem = {
  href: string;
  label: string;
  icon: IconComponent;
};

const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#projects", label: "Projects", icon: Layers }, // ID Corrigido e Ícone atualizado
  { href: "#skills", label: "Skills", icon: FileText },
  { href: "#about", label: "About", icon: User },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para mudar transparência do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Lógica do Scroll Spy
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajuste fino: considera ativo se estiver no terço superior da tela
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
      {/* HEADER FIXO */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
          scrolled 
            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-sm"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="text-2xl font-extrabold tracking-tight"
          >
            <span className="text-gray-900 dark:text-zinc-100">Wemerson</span>
            <span className="text-purple-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400",
                    isActive 
                      ? "text-purple-600 dark:text-purple-400" 
                      : "text-gray-600 dark:text-zinc-400"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="h-6 w-px bg-gray-200 dark:bg-white/10" />
            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-72 bg-white dark:bg-zinc-950 border-l border-gray-200 dark:border-white/5 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5">
                <span className="font-bold text-lg dark:text-zinc-100">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                        isActive
                          ? "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300"
                          : "text-gray-700 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-white/5"
                      )}
                    >
                      <item.icon size={20} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="absolute bottom-0 w-full p-6 border-t border-gray-100 dark:border-white/5">
                 <p className="text-xs text-center text-gray-400 dark:text-zinc-500">
                    © {new Date().getFullYear()} Wemerson
                 </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}