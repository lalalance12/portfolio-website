export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "C", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend",
    items: ["Laravel", "Django", "Node.js", "Express", "Supabase"],
  },
  {
    category: "Data & AI",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "pgvector",
      "TensorFlow",
      "scikit-learn",
      "LangChain",
    ],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS (EC2, S3, Route 53)", "Vercel", "Git", "Postman"],
  },
];
