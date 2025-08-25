export type SkillLevel = "proficient" | "experienced" | "familiar" | "learning";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};

export const skills: SkillItem[] = [
  { name: "JavaScript", level: "experienced" },
  { name: "TypeScript", level: "experienced" },
  { name: "Node.js", level: "experienced" },
  { name: "C#", level: "learning" },
  { name: "SQL", level: "experienced" },
];

export const frameworks: SkillItem[] = [
  { name: "Next.js", level: "experienced" },
  { name: "Express", level: "experienced" },
  { name: "ASP.NET Core", level: "familiar" },
  { name: "React", level: "experienced" },
];

export const tools: SkillItem[] = [
  { name: "SQL Server", level: "experienced" },
  { name: "Git", level: "experienced" },
  { name: "Docker", level: "familiar" },
  { name: "Redis", level: "familiar" },
];
