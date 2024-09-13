import { getProject } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { SiFigma } from "react-icons/si";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  const customLink: PortableTextComponents = {
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
            rel={rel}
            target="_blank"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div>
      <header className="flex items-center justify-between max-[540px]:flex-col">
        <h1 className="text-5xl max-[360px]:text-3xl font-extrabold text-neutral-700 dark:text-white">
          {project.name}
        </h1>
        <div className="flex items-center justify-center gap-4 max-[540px]:mt-4">
          {project.figmaUrl && (
            <Link
              href={project.figmaUrl}
              title="View Figma"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline p-3 text-neutral-700 dark:text-white transition hover:bg-[#f24e1e] group  dark:hover:bg-[#f24e1e] flex items-center justify-center gap-2`}
            >
              <SiFigma
                size={22}
                className="group-hover:fill-white fill-zinc-800 dark:fill-white"
              />
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              title="View Project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-neutral-700 dark:text-white"
            >
              View Project
            </Link>
          )}
        </div>
      </header>
      <div className="mt-8 text-lg text-justify text-neutral-700 dark:text-white">
        <PortableText value={project.content} components={customLink} />
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
