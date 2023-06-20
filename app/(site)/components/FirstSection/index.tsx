"use client";

import React from "react";
import { useTheme } from "next-themes";
import background from "../../../../public/background.png";
import backgroundDark from "../../../../public/background-dark.png";
import { Introduction } from "@/types/Introduction";
import Image from "next/image";
import Socials from "../Socials";

type Props = {
  introduction: Introduction;
};

export default function FirstSection({ introduction }: Props) {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="flex flex-row justify-between max-[885px]:flex-col max-[885px]:items-center my-4 animate-slide-in-right">
      <div
        // style={{
        //   backgroundImage:
        //     currentTheme === "dark"
        //       ? `url(${backgroundDark.src})`
        //       : `url(${background.src})`,
        // }}
        className="max-w-[760px] max-[885px]:max-w-full p-12 max-[640px]:p-6 rounded-3xl transition-transform flex flex-col w-full shadow-md bg-gradient-to-r from-white dark:from-neutral-800  via-sky-200  to-blue-500"
      >
        <h1 className="p-2 text-3xl font-bold max-[640px]:text-2xl text-neutral-700 dark:text-white">
          {introduction.title}
        </h1>
        <h2 className="p-2 mt-4 text-2xl font-semibold text-neutral-700 max-[640px]:text-lg dark:text-white">
          {introduction.subtitle}
        </h2>
        <div className="p-2 text-xl font-semibold text-transparent max-[640px]:text-lg bg-gradient-to-r from-red-400 via-purple-500 to-cyan-600 bg-clip-text">
          {introduction.quote}
        </div>
        <div className="mt-auto">
          <Socials socials={introduction.socials} />
        </div>
      </div>
      <div className="relative w-full max-w-[330px] ml-4 max-[885px]:mt-4 max-[885px]:ml-0 max-[885px]:h-[350px] max-[885px]:max-w-full">
        <Image
          className="object-cover shadow-md rounded-3xl"
          src={introduction.image}
          sizes="(max-width: 768px) 100vw, 700px"
          alt={introduction.alt}
          fill
        />
      </div>
    </section>
  );
}
