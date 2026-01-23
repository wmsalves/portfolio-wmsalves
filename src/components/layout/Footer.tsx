"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-4">
            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Wemerson<span className="text-purple-500">.</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">
              Crafting digital experiences focused on performance,
              accessibility, and modern design.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link
                  href="#home"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="hover:text-purple-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/wmsalves"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/wmsalves"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {currentYear} Wemerson Alves. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
