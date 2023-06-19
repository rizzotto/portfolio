import { Skill } from "@/types/Introduction";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si";
import { TbLetterS } from "react-icons/tb";

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
  };

  const skillsBg: SkillsBgType = {
    css: "hover:bg-[#254bdd]",
    figma: "hover:bg-[#f24e1e]",
    javascript: "hover:bg-[#f7df1e]",
    next: "hover:bg-[#000000]",
    node: "hover:bg-[#63b64c]",
    sanity: "hover:bg-[#a93b32]",
    react: "hover:bg-[#00d8ff]",
    tailwind: "hover:bg-[#07b0ce]",
    typescript: "hover:bg-[#3178c6]",
  };

  const skillsBgDark: SkillsBgType = {
    css: "dark:hover:bg-[#254bdd]",
    figma: "dark:hover:bg-[#f24e1e]",
    javascript: "dark:hover:bg-[#f7df1e]",
    next: "dark:hover:bg-[#000000]",
    sanity: "dark:hover:bg-[#a93b32]",
    node: "dark:hover:bg-[#63b64c]",
    react: "dark:hover:bg-[#00d8ff]",
    tailwind: "dark:hover:bg-[#07b0ce]",
    typescript: "dark:hover:bg-[#3178c6]",
  };

  return (
    <div className="grid gap-3 p-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
      {skills.map((skill) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={skill.value}
          href={skill.url}
          className={`p-4 transition shadow-sm ${
            skillsBg[skill.value]
          } rounded-xl group bg-neutral-100 dark:bg-zinc-200 ${
            skillsBgDark[skill.value]
          } flex items-center justify-center gap-2`}
        >
          <div>{skillsLogo[skill.value]}</div>
          <div className="font-semibold group-hover:text-white text-zinc-800 dark:text-zinc-800 min-w-[85px] text-center">
            {skill.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
