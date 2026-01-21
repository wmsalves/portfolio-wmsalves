"use client";

import Hero from "@/components/features/hero/Hero";
import SkillsSection from "@/components/features/skills/Skills";
import About from "@/components/features/about/About";
import ContactSection from "@/components/features/contact/Contact";
import ProjectList from "@/components/features/projects/ProjectsList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-purple-500/30">
      <Hero />
      <ProjectList />
      <SkillsSection />
      <About />
      <ContactSection />
    </div>
  );
}
