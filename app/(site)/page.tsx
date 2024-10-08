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
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="p-1 mt-2 transition duration-[250ms] rounded-2xl hover:scale-105 hover:border-blue-500 h-full"
              key={project._id}
            >
              <div className="mb-2 font-extrabold text-neutral-700 dark:text-white">
                {project.name}
              </div>
              {project.image && (
                <div className="relative w-full h-[19rem] max-[1160px]:h-[18rem] max-[930px]:h-[15rem] max-[768px]:h-[25rem] max-[540px]:h-[18rem] max-[475px]:h-[15rem]  max-[450px]:h-[15rem] max-[300px]:h-[8rem]">
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
        <div className="mt-12" />
        <h2 className="mt-8 text-3xl font-bold text-neutral-700 dark:text-white">
          Skills
        </h2>
        <div className="mt-5">
          <Skills skills={introduction.skills} />
        </div>
      </div>
    </div>
  );
}
