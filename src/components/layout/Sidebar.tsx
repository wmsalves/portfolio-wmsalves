"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FileText, Images, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: FileText },
  { href: "/portfolio", label: "Portfolio", icon: Images },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-purple-100 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="px-6 py-6">
          <Link href="/" className="block">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-gray-900">Wemerson</span>
              <span className="text-purple-600">.</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 mt-1">Back-end Developer</p>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-2 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition
                  ${
                    active
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                aria-current={active ? "page" : undefined}
              >
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-lg
                  ${
                    active
                      ? "bg-purple-200 text-purple-800"
                      : "bg-purple-100 text-purple-700 group-hover:bg-purple-200"
                  }`}
                >
                  <Icon size={18} />
                </span>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Wemerson
        </div>
      </aside>

      {/*  */}
    </>
  );
}
