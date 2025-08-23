"use client";

import About from "@/components/sections/about/About";
import ContactSection from "@/components/sections/contact/Contact";
import ProjectsSection from "@/components/sections/project/Projects";
import { motion } from "framer-motion";

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

      {/* ABOUT */}
      <section id="about" className="min-h-screen px-6 md:px-10 py-16 bg-white">
        <About />
      </section>

      {/* RESUME */}
      <section
        id="resume"
        className="min-h-screen px-6 md:px-10 py-16 bg-gray-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-purple-600">Resume</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Timeline de experiência, educação e certificações. Depois conectamos a
          dados tipados em <code>src/data/resume.ts</code>.
        </p>
      </section>

      {/* PORTFOLIO */}
      <ProjectsSection />

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
