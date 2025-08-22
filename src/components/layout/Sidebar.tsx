"use client";

import Link from "next/link";
import { Home, User, FileText, Images, Mail } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#resume", label: "Resume", icon: FileText },
  { href: "#portfolio", label: "Portfolio", icon: Images },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
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
          <p className="text-sm text-gray-500 mt-1">Backend Developer</p>
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

      {/* Bottom nav (mobile) */}
      <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex gap-2 rounded-2xl bg-white/90 shadow-lg border border-purple-100 px-2 py-2 backdrop-blur">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="flex flex-col items-center rounded-xl px-3 py-2 text-[11px] text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition"
              >
                <Icon size={18} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
