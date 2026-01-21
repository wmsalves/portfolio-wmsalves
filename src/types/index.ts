export type Project = {
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
  slug?: string;
};

export type SkillLevel = "proficient" | "experienced" | "familiar" | "learning";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};
