"use client";

import { motion } from "framer-motion";
import { Code, Laptop, Server, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full
        min-h-[calc(100svh-56px)] lg:min-h-screen
        bg-gray-50 dark:bg-gray-950 transition-colors
      "
    >
      <motion.div
        className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-purple-600">ABOUT</span>{" "}
            <span className="text-gray-900 dark:text-gray-100">ME</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Get to know more about my journey and passion for development
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-100">
              My Story
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-[65ch]">
              <p>
                Passionate junior web developer focused on creating intuitive
                and functional digital experiences. My programming journey began
                with online courses and personal projects, and since then
                I&apos;ve been dedicated to improving my skills in front-end and
                back-end development.
              </p>
              <p>
                I&apos;m currently focused on deepening my knowledge of Node.js
                and TypeScript, as well as exploring modern frameworks like
                React and Next.js. I constantly seek to learn new technologies
                and development best practices.
              </p>
              <p>
                Beyond programming, I&apos;m interested in UI/UX design and web
                accessibility, believing that good applications should be not
                only functional but also accessible and pleasant to use.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-100">
              What I Do
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: <Laptop className="w-6 h-6" />,
                  title: "Front-end Development",
                  description:
                    "Creating responsive, interactive, and visually appealing user interfaces using modern frameworks.",
                },
                {
                  icon: <Server className="w-6 h-6" />,
                  title: "Back-end Development",
                  description:
                    "Building robust server-side applications, APIs, and database integrations to power web apps.",
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Problem Solving",
                  description:
                    "Analyzing complex problems and developing efficient, scalable solutions with clean code.",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Continuous Learning",
                  description:
                    "Staying up-to-date with the latest technologies and best practices through self-study.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
                    group flex items-start gap-4 rounded-xl
                    border border-gray-200 bg-white
                    p-5 sm:p-6 shadow-sm hover:shadow-md transition
                    dark:border-gray-800 dark:bg-gray-900
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-lg
                      bg-purple-100 text-purple-700 group-hover:bg-purple-200
                      dark:bg-purple-950 dark:text-purple-300 dark:group-hover:bg-purple-900
                      transition
                    "
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
