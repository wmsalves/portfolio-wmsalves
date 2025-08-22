"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen px-10 bg-gray-100">
      {/* Texto */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi There! <br />
          I&apos;m <span className="text-purple-500">Wemerson</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">Backend Developer</p>
        <button className="mt-6 px-6 py-3 bg-purple-500 text-black font-semibold rounded-xl hover:bg-purple-400 transition">
          More About Me
        </button>
      </div>

      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="/images/ProfilePhoto.JPG"
          alt="Profile Photo"
          className="rounded-2xl shadow-lg w-72 md:w-96"
        />
      </motion.div>
    </section>
  );
}
