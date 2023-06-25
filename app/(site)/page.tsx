import React from "react";
import { getIntroduction, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Skills from "./components/Skills";
import FirstSection from "@/app/(site)/components/FirstSection";

export default async function Home() {
  const projects = await getProjects();
  const introduction = await getIntroduction();

  return (
    <div>
      <FirstSection introduction={introduction} />
      <div className="animate-slide-in-up">
        <h2 className="mt-8 text-3xl font-bold text-neutral-700 dark:text-white">
          My Skills
        </h2>
        <div className="mt-5">
          <Skills skills={introduction.skills} />
        </div>
        <h2 className="mt-8 text-3xl font-bold text-neutral-700 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="p-1 mt-2 transition rounded-2xl hover:scale-105 hover:border-blue-500"
              key={project._id}
            >
              <div className="mb-2 font-extrabold text-neutral-700 dark:text-white">
                {project.name}
              </div>
              {project.image && (
                <div className="relative w-full h-[19rem] max-[1160px]:h-[15rem] max-[930px]:h-[12rem] max-[768px]:h-[20rem] max-[540px]:h-[17rem] max-[475px]:h-[15rem]  max-[450px]:h-[10rem] max-[300px]:h-[6rem] max min-h-full">
                  <Image
                    alt={project.alt}
                    className="object-cover shadow-md rounded-2xl"
                    src={project.image}
                    fill
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
