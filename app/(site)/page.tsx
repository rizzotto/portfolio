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
      {/* responsiveness */}
      <FirstSection introduction={introduction} />
      <h2 className="mt-24 text-3xl font-bold text-gray-700 dark:text-white">
        My Skills
      </h2>
      <div>
        <Skills skills={introduction.skills} />
      </div>
      <h2 className="mt-24 text-3xl font-bold text-gray-700 dark:text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="p-1 transition rounded-2xl hover:scale-105 hover:border-blue-500"
            key={project._id}
          >
            <div className="mb-2 font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text">
              {project.name}
            </div>
            {project.image && (
              <div className="relative w-full h-64 min-h-full">
                <Image
                  alt={project.alt}
                  className="object-cover border border-gray-500 rounded-2xl"
                  src={project.image}
                  fill
                />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
