import {
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaSass,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNpm,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiShadcnui,
  TiHtml5,
  RiTailwindCssFill,
  GrMysql,
} from "@/utils/Icons";
import { SkillCategory } from "./types/types";

export const skills: SkillCategory[] = [
  {
    major: "Frontend",
    skills: [
      { icon: <TiHtml5 size={50} />, label: "HTML5" },
      { icon: <IoLogoCss3 size={50} />, label: "CSS3" },
      { icon: <IoLogoJavascript size={50} />, label: "JavaScript" },
      { icon: <FaReact size={50} />, label: "React" },
      { icon: <SiNextdotjs size={50} />, label: "Next.js" },
      { icon: <SiBootstrap size={50} />, label: "Bootstrap" },
      { icon: <RiTailwindCssFill size={50} />, label: "Tailwind CSS" },
      { icon: <FaSass size={50} />, label: "Sass" },
      { icon: <SiShadcnui size={50} />, label: "Shadcn UI" },
    ],
  },
  {
    major: "Backend",
    skills: [
      { icon: <FaNodeJs size={50} />, label: "Node.js" },
      { icon: <SiExpress size={50} />, label: "Express.js" },
      { icon: <SiMongodb size={50} />, label: "MongoDB" },
      { icon: <GrMysql size={50} />, label: "MySQL" },
    ],
  },
  {
    major: "Other",
    skills: [
      { icon: <FaGitAlt size={50} />, label: "Git" },
      { icon: <IoLogoNpm size={50} />, label: "npm" },
    ],
  },
];
