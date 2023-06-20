import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl max-[500px]:text-3xl max-[360px]:text-xl font-extrabold text-neutral-700 dark:text-white">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-neutral-700 dark:text-white"
        >
          View Project
        </a>
      </header>
      <div className="mt-8 text-lg text-justify text-neutral-700 dark:text-white">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="object-cover mt-10 shadow-md rounded-[36px]"
      />
    </div>
  );
}
