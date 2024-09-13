import { Skill } from "@/types/Introduction";
import Link from "next/link";
import {
  SiCss3,
  SiFigma,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbLetterS, TbSql } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

type Props = {
  skills: Skill[];
};

type SkillsLogoType = {
  [key: string]: React.ReactElement;
};

type SkillsBgType = {
  [key: string]: string;
};

export default function Skills({ skills }: Props) {
  const skillsLogo: SkillsLogoType = {
    react: (
      <SiReact
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    typescript: (
      <SiTypescript
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    node: (
      <SiNodedotjs
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    next: (
      <SiNextdotjs
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    tailwind: (
      <SiTailwindcss
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    css: (
      <SiCss3
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    sanity: (
      <TbLetterS
        size={22}
        className="group-hover:text-white text-zinc-800 dark:text-zinc-800"
      />
    ),
    javascript: (
      <SiJavascript
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    figma: (
      <SiFigma
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    sql: (
      <TbSql
        size={22}
        className="group-hover:text-white text-zinc-800 dark:text-zinc-800"
      />
    ),
    aws: (
      <FaAws
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    native: (
      <SiReact
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    html: (
      <SiHtml5
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    git: (
      <BsGit
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    firebase: (
      <SiFirebase
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
  };

  const skillsBg: SkillsBgType = {
    aws: "hover:bg-[#ff9900]",
    css: "hover:bg-[#254bdd]",
    figma: "hover:bg-[#f24e1e]",
    javascript: "hover:bg-[#f7df1e]",
    native: "hover:bg-[#00d8ff]",
    next: "hover:bg-[#000000]",
    node: "hover:bg-[#63b64c]",
    react: "hover:bg-[#00d8ff]",
    sanity: "hover:bg-[#a93b32]",
    sql: "hover:bg-[#328fc6]",
    tailwind: "hover:bg-[#07b0ce]",
    typescript: "hover:bg-[#3178c6]",
    html: "hover:bg-[#db4b23]",
    git: "hover:bg-[#e94e31]",
    firebase: "hover:bg-[#ffcc2f]",
  };

  const skillsBgDark: SkillsBgType = {
    aws: "dark:hover:bg-[#ff9900]",
    css: "dark:hover:bg-[#254bdd]",
    figma: "dark:hover:bg-[#f24e1e]",
    javascript: "dark:hover:bg-[#f7df1e]",
    native: "dark:hover:bg-[#00d8ff]",
    next: "dark:hover:bg-[#000000]",
    node: "dark:hover:bg-[#63b64c]",
    react: "dark:hover:bg-[#00d8ff]",
    sanity: "dark:hover:bg-[#a93b32]",
    sql: "dark:hover:bg-[#328fc6]",
    tailwind: "dark:hover:bg-[#07b0ce]",
    typescript: "dark:hover:bg-[#3178c6]",
    html: "dark:hover:bg-[#db4b23]",
    git: "dark:hover:bg-[#e94e31]",
    firebase: "dark:hover:bg-[#ffcc2f]",
  };

  return (
    <div className="grid grid-cols-3 gap-3 pt-3 md:grid-cols-6 sm:grid-cols-5 xl:grid-cols-6">
      {skills.map((skill) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={skill.value}
          href={skill.url}
          className={`p-5 transition shadow-md ${
            skillsBg[skill.value]
          } rounded-xl group bg-neutral-100 dark:bg-zinc-200 ${
            skillsBgDark[skill.value]
          } flex items-center justify-center gap-2`}
        >
          <div>{skillsLogo[skill.value]}</div>
          {/* skills name to remove if wanted */}
          <div className="font-semibold group-hover:text-white text-zinc-800 dark:text-zinc-800 min-w-[85px] text-start ml-2">
            {skill.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
