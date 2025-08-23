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
            className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
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
      className="min-h-screen w-full px-6 md:px-8 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-purple-600">SKILLS</span>
          </h2>
          <p className="text-gray-600 mt-2">Technologies I work with</p>
        </div>

        {/* Texto explicativo */}
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p>
            There are languages and tools that I have knowledge of and{" "}
            <span className="font-semibold">
              have worked with in real projects
            </span>
            . Items marked as <span className="font-semibold">“Worked”</span>{" "}
            are the ones I&apos;ve used day-to-day or shipped to production.{" "}
            <span className="font-semibold">“Familiar”</span> means I&apos;ve
            built smaller features or prototypes.{" "}
            <span className="font-semibold">“Learning”</span> highlights what
            I&apos;m actively studying to deepen my expertise.
          </p>
        </div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <Category title="Languages" items={skills} />
          <Category title="Frameworks" items={frameworks} />
          <Category title="Tools" items={tools} />
        </div>
      </div>
    </motion.section>
  );
}
