import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPhp,
  SiC,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiLaravel,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTensorflow,
  SiScikitlearn,
  SiLangchain,
  SiVercel,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

// color omitted → icon inherits currentColor (for near-black brand marks
// that would vanish on the dark theme)
export type TechIcon = { Icon: IconType; color?: string };

// Brand icon + color per skill name (keys match src/data/skills.ts items)
export const techIcons: Record<string, TechIcon> = {
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Python: { Icon: SiPython, color: "#3776AB" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  C: { Icon: SiC, color: "#A8B9CC" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "HTML & CSS": { Icon: SiHtml5, color: "#E34F26" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  Django: { Icon: SiDjango },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Express: { Icon: SiExpress },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  "scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  LangChain: { Icon: SiLangchain },
  "AWS (EC2, S3, Route 53)": { Icon: FaAws, color: "#FF9900" },
  Vercel: { Icon: SiVercel },
  Git: { Icon: SiGit, color: "#F05032" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
};
