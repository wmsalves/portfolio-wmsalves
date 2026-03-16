import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "BeWear",
    description:
      "A modern e-commerce app built with Next.js, React, Tailwind, and PostgreSQL, featuring cart, Stripe checkout, and authentication.",
    link: "https://github.com/wmsalves/bewear",
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL", "Stripe"],
    image: "/images/BeWear.png",
    slug: "bewear",
  },
  {
    title: "Salgadin",
    description:
      "A personal finance web app with daily spending summaries and charts highlighting where your money goes.",
    link: "https://github.com/wmsalves/Salgadin",
    tags: ["C#", "ASP.NET", "React", "Tailwind", "SQL Server", "Azure"],
    image: "/images/Salgadin.png",
    slug: "salgadin",
  },
  {
    title: "Blog",
    description:
      "A CRUD blog application using Node.js, Express, EJS, and MongoDB.",
    link: "https://github.com/wmsalves/blog-node-mongo",
    tags: ["Node.js", "Express", "EJS", "MongoDB"],
    image: "/images/Sandman.jpg",
    slug: "blog",
  },
];
