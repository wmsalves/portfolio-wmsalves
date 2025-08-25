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
      "A modern web e-commerce app built with Next.js, React, Tailwind CSS, and PostgreSQL, featuring a shopping cart, Stripe checkout, and user authentication. ",
    link: "https://github.com/wmsalves",
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL", "Stripe"],
    image: "/images/BeWear.png",
    slug: "bewear",
  },
];
