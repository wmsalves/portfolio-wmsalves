"use client";

import About from "@/components/sections/About";
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
            Backend Developer
          </p>
          <a
            href="#about"
            className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-500 transition"
          >
            More About Me
          </a>
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
      <section
        id="portfolio"
        className="min-h-screen px-6 md:px-10 py-16 bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-purple-600">Portfolio</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Grade de projetos com filtros (tags), cards com stack e links para
          GitHub/Demo.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen px-6 md:px-10 py-16 bg-gray-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-purple-600">Contact</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Formulário simples (nome, email, mensagem) + botões para
          LinkedIn/GitHub.
        </p>
      </section>
    </>
  );
}
