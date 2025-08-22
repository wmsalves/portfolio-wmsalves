"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen px-10 bg-gray-100">
      {/* Texto */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi There! <br />
          I&apos;m <span className="text-purple-600">Wemerson</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg font-medium">
          Backend Developer
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-500 transition">
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
  );
}
