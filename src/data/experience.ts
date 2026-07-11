export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  orgNote?: string;
  summary: string;
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "Sep 2024 — Jul 2025",
    role: "Full-Stack Developer",
    org: "Silahis Student Publication",
    orgNote: "MSU-IIT student journalism organization",
    summary:
      "Led the development and deployment of a cloud-native publication platform serving the university's student journalism community, reducing manual maintenance by 50%. AWS infrastructure (EC2, S3, Route 53), custom React + Laravel CMS, mobile-responsive Figma-to-code implementation.",
    stack: ["React", "Laravel", "AWS", "Tailwind CSS", "MySQL"],
  },
  {
    period: "Aug 2024 — Feb 2025",
    role: "Full-Stack Developer",
    org: "ChartLink Healthcare System",
    orgNote: "Client project",
    summary:
      "Delivered an MVP clinic workflow system covering five staff roles — Supabase real-time database, auth and storage with a Next.js + TypeScript frontend — on agile sprints with 100% on-time feature delivery, validated in hands-on testing with the clinic's doctors and nurses.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    period: "Feb 2024 — Nov 2024",
    role: "Software Engineer Intern",
    org: "OneQuantum Philippines",
    orgNote: "Quantum computing organization",
    summary:
      "Contributed to backend development and deployment strategies, gaining experience in professional software engineering practices, stakeholder coordination, and agile workflows.",
    stack: ["Node.js", "Express.js", "Vercel", "Git"],
  },
];

export const education = {
  period: "2021 — 2025",
  degree: "BS Computer Science",
  school: "Mindanao State University – Iligan Institute of Technology",
  location: "Iligan City, Philippines",
  highlights: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Software Engineering",
    "Database Systems",
  ],
};
