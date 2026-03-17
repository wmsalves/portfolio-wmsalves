"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-bg pt-16 pb-8">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <Link
            href="#home"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            wms<span className="text-primary">.</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted">
            Crafting digital experiences focused on performance, accessibility,
            and modern design.
          </p>

          <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                Navigation
              </h3>
              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
                <li>
                  <Link
                    href="#home"
                    className="hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="hover:text-foreground transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="hover:text-foreground transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-sm font-semibold text-foreground">Social</h3>
              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
                <li>
                  <a
                    href="https://github.com/wmsalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/wmsalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/70 pt-8 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-muted">
            (c) {currentYear}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
