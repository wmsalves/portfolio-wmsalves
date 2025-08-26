"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, FileText, Images, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

type NavItem = {
  href: string;
  label: string;
  icon: IconComponent;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: FileText },
  { href: "/portfolio", label: "Portfolio", icon: Images },
  { href: "/contact", label: "Contact", icon: Mail },
];

function NavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 dark:focus-visible:ring-purple-500
        ${
          active
            ? "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
            : "text-gray-700 hover:bg-purple-50 hover:text-purple-700 dark:text-gray-300 dark:hover:bg-purple-900/30 dark:hover:text-purple-200"
        }`}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition
          ${
            active
              ? "bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-white"
              : "bg-purple-100 text-purple-700 group-hover:bg-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:group-hover:bg-purple-900"
          }`}
      >
        <Icon size={18} />
      </span>
      {item.label}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  // Fecha o drawer com ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Sidebar (desktop) */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col
                        border-r border-purple-100 dark:border-gray-800
                        bg-white/95 dark:bg-gray-950/80 backdrop-blur-sm shadow-sm"
      >
        <div className="px-6 py-6 flex items-center justify-between">
          <Link href="/" className="block">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-gray-900 dark:text-gray-100">Wemerson</span>
              <span className="text-purple-600">.</span>
            </span>
          </Link>
          <ThemeToggle />
        </div>
        <p className="px-6 text-sm text-gray-500 dark:text-gray-400">
          Back-end Developer
        </p>

        <nav className="flex-1 flex flex-col justify-center px-2 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              active={pathname === item.href}
            />
          ))}
        </nav>

        <div className="px-6 py-4 text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Wemerson
        </div>
      </aside>

      {/* Topbar (mobile) */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50
                         bg-white/90 dark:bg-gray-950/60 backdrop-blur
                         border-b border-purple-100 dark:border-gray-800"
      >
        <div className="h-14 px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900 dark:text-gray-100">Wemerson</span>
            <span className="text-purple-600">.</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border
                         border-purple-100 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition
                         dark:border-gray-800 dark:text-gray-200 dark:hover:bg-purple-950/40"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
              className="absolute inset-0 bg-black/40"
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
              className="absolute right-0 top-0 h-full w-80 max-w-[85%]
                         bg-white dark:bg-gray-950
                         border-l border-purple-100 dark:border-gray-800
                         shadow-xl flex flex-col"
            >
              <div className="px-4 h-14 flex items-center justify-between border-b dark:border-gray-800">
                <span className="text-lg font-bold dark:text-gray-100">
                  Menu
                  <span className="text-purple-600">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                             hover:bg-purple-50 text-gray-700
                             dark:text-gray-200 dark:hover:bg-purple-950/40"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="p-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    active={pathname === item.href}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </nav>

              <div className="mt-auto px-4 py-4 text-xs text-gray-400 dark:text-gray-500 border-t dark:border-gray-800">
                © {new Date().getFullYear()} Wemerson
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
