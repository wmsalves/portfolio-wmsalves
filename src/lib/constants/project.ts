export type Project = {
  title: string;
  description: string;
  link: string;
  image?: string; // ex: "/images/projects/orders-api.jpg"
  tags?: string[]; // ex: ["Node.js","TypeScript"]
  slug?: string;
};

export const projects: Project[] = [
  {
    title: "BeWear",
    description:
      "A modern web e-commerce app built with Next.js, React, Tailwind CSS, and PostgreSQL, featuring a shopping cart, Stripe checkout, and user authentication.",
    link: "https://github.com/wmsalves/bewear",
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL", "Stripe"],
    image: "/images/BeWear.png",
    slug: "bewear",
  },
  {
    title: "Salgadin",
    description:
      "A web application to manage personal finances with daily spending summaries and visual charts highlighting where your money goes.",
    link: "https://github.com/wmsalves/Salgadin",
    tags: ["C#", ".ASP NET", "React", "Tailwind", "SQL Server", "Azure"],
    image: "/images/Salgadin.png",
    slug: "salgadin",
  },
  {
    title: "Blog",
    description:
      " A simple blog application demonstrating CRUD (Create, Read, Update, Delete) operations using Node.js, Express, EJS, and MongoDB. It provides a basic setup for building a full-stack application with a MongoDB database, user authentication, and dynamic content rendering.",
    link: "https://github.com/wmsalves/blog-node-mongo",
    tags: ["NodeJS", "Express", "EJS", "MongoDB"],
    image: "/images/Sandman.jpg",
    slug: "blog",
  },
];
