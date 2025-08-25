"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, FileText, Images, Mail, Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: FileText },
  { href: "#portfolio", label: "Portfolio", icon: Images },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Fecha com ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleClickLink = () => setOpen(false);

  return (
    <>
      {/* Sidebar (desktop) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-purple-100 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="px-6 py-6">
          <Link href="#home" className="block">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-gray-900">Wemerson</span>
              <span className="text-purple-600">.</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 mt-1">Back-end Developer</p>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-2 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-200">
                <Icon size={18} />
              </span>
              {label}
            </a>
          ))}
        </nav>

        <div className="px-6 py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Wemerson
        </div>
      </aside>

      {/* Topbar (mobile) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-purple-100">
        <div className="h-14 px-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">Wemerson</span>
            <span className="text-purple-600">.</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-purple-100 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Drawer + Backdrop (mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white border-l border-purple-100 shadow-xl flex flex-col"
            >
              <div className="px-4 h-14 flex items-center justify-between border-b">
                <span className="text-lg font-bold">
                  Menu<span className="text-purple-600">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-purple-50 text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="p-3 space-y-1">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={handleClickLink}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                      <Icon size={18} />
                    </span>
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto px-4 py-4 text-xs text-gray-400 border-t">
                © {new Date().getFullYear()} Wemerson
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
