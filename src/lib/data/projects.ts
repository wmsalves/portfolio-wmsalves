import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "BeWear",
    description: {
      en: "A modern e-commerce app built with Next.js, React, Tailwind, and PostgreSQL, featuring cart, Stripe checkout, and authentication.",
      "pt-BR": "Um e-commerce moderno com Next.js, React, Tailwind e PostgreSQL, com carrinho, checkout Stripe e autenticação.",
    },
    link: "https://github.com/wmsalves/bewear",
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL", "Stripe"],
    image: "/images/BeWear.png",
    slug: "bewear",
  },
  {
    title: "Salgadin",
    description: {
      en: "A personal finance web app with daily spending summaries and charts highlighting where your money goes.",
      "pt-BR": "App de finanças pessoais com resumos diários de gastos e gráficos para entender onde o dinheiro vai.",
    },
    link: "https://github.com/wmsalves/Salgadin",
    tags: ["C#", "ASP.NET", "React", "Tailwind", "SQL Server", "Azure"],
    image: "/images/Salgadin.png",
    slug: "salgadin",
  },
  {
    title: "Blog",
    description: {
      en: "A CRUD blog application using Node.js, Express, EJS, and MongoDB.",
      "pt-BR": "Aplicação de blog CRUD usando Node.js, Express, EJS e MongoDB.",
    },
    link: "https://github.com/wmsalves/blog-node-mongo",
    tags: ["Node.js", "Express", "EJS", "MongoDB"],
    image: "/images/Sandman.jpg",
    slug: "blog",
  },
];
