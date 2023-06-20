import { Social } from "@/types/Introduction";
import { BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

type Props = {
  socials: Social[];
};

type SocialsLogoType = {
  [key: string]: React.ReactElement;
};

type SocialsBgType = {
  [key: string]: string;
};

export default function Socials({ socials }: Props) {
  const socialsLogo: SocialsLogoType = {
    github: (
      <BsGithub
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    instagram: (
      <AiFillInstagram
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    linkedin: (
      <BsLinkedin
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
    twitter: (
      <BsTwitter
        size={22}
        className="group-hover:fill-white fill-zinc-800 dark:fill-zinc-800"
      />
    ),
  };

  const socialsBg: SocialsBgType = {
    github: "hover:bg-[#333]",
    instagram: "hover:bg-[#e1306c]",
    linkedin: "hover:bg-[#0a66c2]",
    twitter: "hover:bg-[#1da1f2]",
  };

  const socialsBgDark: SocialsBgType = {
    github: "dark:hover:bg-[#333]",
    instagram: "dark:hover:bg-[#e1306c]",
    linkedin: "dark:hover:bg-[#0a66c2]",
    twitter: "dark:hover:bg-[#1da1f2]",
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-col md:flex-row xl:flex-row">
      <button className="mt-3 p-4 py-3 font-semibold dark:bg-zinc-200 bg-zinc-800 rounded-2xl min-w-[20%] hover:bg-zinc-700 dark:hover:bg-zinc-50 transition text-white dark:text-neutral-700">
        Contact me
      </button>
      <div className="mt-3 flex gap-3 max-[768px]:justify-between max-[333px]:flex-col max-[333px]:items-center">
        {socials.map((social) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
            href={social.url}
            className={`p-4 transition ${
              socialsBg[social.name]
            } rounded-full group bg-white dark:bg-zinc-200 ${
              socialsBgDark[social.name]
            }`}
          >
            {socialsLogo[social.name]}
          </Link>
        ))}
      </div>
    </div>
  );
}
