"use client";

import About from "@/components/sections/about/About";
import ContactSection from "@/components/sections/contact/Contact";
import ProjectsSection from "@/components/sections/project/Projects";
import SkillsSection from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen px-6 md:px-10 bg-gray-100 text-center"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hi There! <br />
            I&apos;m <span className="text-purple-600">Wemerson</span>
          </h1>

          <p className="mt-6 text-gray-800 text-lg md:text-xl font-semibold">
            Developer passionate about technology, music and coffee
          </p>
        </div>
      </section>
    </>
  );
}
