"use client";

import About from "@/components/sections/about/About";
import ContactSection from "@/components/sections/contact/Contact";
import ProjectsSection from "@/components/sections/project/Projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-10 bg-gray-100"
      >
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hi There! <br />
            I&apos;m <span className="text-purple-600">Wemerson</span>
          </h1>

          <p className="mt-4 text-gray-700 text-lg font-medium">
            Back-end Developer
          </p>

          {/* Novo texto */}
          <div className="mt-4 max-w-2xl mx-auto md:mx-0 space-y-3 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              My name is <span className="font-semibold">Wemerson</span>,
              I&apos;m 24 and an Information Systems student at{" "}
              <span className="font-semibold">PUC Minas</span>. I work as a{" "}
              <span className="font-semibold">Junior Developer</span> building
              and maintaining applications with{" "}
              <span className="font-semibold">JavaScript</span>,{" "}
              <span className="font-semibold">TypeScript</span>,{" "}
              <span className="font-semibold">Node.js</span>, and{" "}
              <span className="font-semibold">SQL Server</span>, while expanding
              my knowledge in <span className="font-semibold">C#/.NET</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I&apos;m fascinated by how things work behind the scenes. I&apos;m
              motivated by solving problems, creating efficient solutions, and
              continuously improving both my technical and soft skills. I share
              academic projects and personal experiments on{" "}
              <span className="font-semibold">GitHub</span> as part of my
              learning and growth in software development.
            </p>
          </div>
        </div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mt-10 md:mt-0"
        >
          <Image
            src="/images/ProfilePhoto.JPG"
            alt="Profile Photo"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg w-72 md:w-96 object-cover"
            priority
          />
        </motion.div>
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
