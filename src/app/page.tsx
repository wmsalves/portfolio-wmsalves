"use client";

import Hero from "@/components/features/hero/Hero";
import ProjectList from "@/components/features/projects/ProjectsList";
import ExperienceSection from "@/components/features/experience/Experience";
import SkillsSection from "@/components/features/skills/Skills";
import About from "@/components/features/about/About";
import ContactSection from "@/components/features/contact/Contact";
import StickyBio from "@/components/layout/StickyBio";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="lg:pl-16">
            <Hero />
            <ProjectList />
            <ExperienceSection />
            <SkillsSection />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <StickyBio />
            </div>
          </aside>
        </div>

        <About />
        <ContactSection />
      </div>
    </div>
  );
}
