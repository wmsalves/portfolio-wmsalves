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
    title: "Orders API",
    description:
      "REST API for order management with authentication, pagination and webhooks.",
    link: "https://github.com/wmsalves",
    tags: ["Node.js", "TypeScript", "Prisma", "PostgreSQL"],
    // image: "/images/projects/orders-api.jpg",
  },
  {
    title: "Queue Worker",
    description:
      "Background worker for sending emails and processing jobs using queues.",
    link: "https://github.com/wmsalves",
    tags: ["Node.js", "BullMQ", "Redis", "Docker"],
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio built with Next.js, TypeScript, Tailwind and Framer Motion.",
    link: "https://github.com/wmsalves",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard with charts and role-based access control (RBAC).",
    link: "https://github.com/wmsalves",
    tags: ["Next.js", "Chart.js", "RBAC"],
  },
];
