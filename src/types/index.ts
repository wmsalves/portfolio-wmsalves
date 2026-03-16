export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  slug: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

export type SkillLevel = "proficient" | "experienced" | "familiar" | "learning";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};
