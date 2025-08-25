"use client";

import { motion } from "framer-motion";
import type { SkillItem } from "@/lib/contants/skills";
import { skills, frameworks, tools } from "@/lib/contants/skills";

function levelBadge(level: SkillItem["level"]) {
  if (level === "proficient" || level === "experienced") {
    return (
      <span className="ml-2 rounded-full bg-purple-600 text-white text-[10px] font-semibold px-2 py-0.5">
        Worked
      </span>
    );
  }
  if (level === "familiar") {
    return (
      <span className="ml-2 rounded-full border border-gray-300 text-gray-700 text-[10px] font-medium px-2 py-0.5">
        Familiar
      </span>
    );
  }
  return (
    <span className="ml-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-[10px] font-semibold px-2 py-0.5">
      Learning
    </span>
  );
}

function Category({ title, items }: { title: string; items: SkillItem[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
        {title}
      </h3>
      <ul className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-purple-300"
          >
            <span className="text-sm font-medium text-gray-900 align-middle">
              {item.name}
            </span>
            {levelBadge(item.level)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="
        w-full scroll-mt-24 max-w-6xl mx-auto
        min-h-[calc(100svh-56px)] lg:min-h-screen
        px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-10 sm:space-y-12 text-center">
        {/* Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-purple-600">SKILLS</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </div>

        {/* Texto explicativo */}
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p>
            There are languages and tools that I have knowledge of and{" "}
            <span className="font-semibold">
              have worked with in real projects
            </span>
            . Items marked as <span className="font-semibold">“Worked”</span>{" "}
            are used day-to-day or shipped to production.{" "}
            <span className="font-semibold">“Familiar”</span> are smaller
            features or prototypes, and{" "}
            <span className="font-semibold">“Learning”</span> highlights what
            I&apos;m actively studying.
          </p>
        </div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
          <Category title="Languages" items={skills} />
          <Category title="Frameworks" items={frameworks} />
          <Category title="Tools" items={tools} />
        </div>
      </div>
    </motion.section>
  );
}
