import { getExperiences } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Experiences() {
  const experiences = await getExperiences();

  function formatDate(date: Date) {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear().toString().slice(-2);

    const formattedDate = `${month.toString().padStart(2, "0")}/${year}`;
    return formattedDate;
  }

  function getExperienceAnimation(i: number): string {
    if (i % 2 === 0) {
      return "animate-slide-in-left";
    } else {
      return "animate-slide-in-right";
    }
  }

  return (
    <div>
      <h2 className="mt-4 text-3xl font-bold text-neutral-700 dark:text-white">
        My Experiences
      </h2>
      <div className="grid grid-cols-1 mt-5">
        {experiences.jobs.map((job, i) => (
          <div
            key={job.role}
            className={`${getExperienceAnimation(i)} ${
              job.currentJob &&
              "bg-gradient-to-r max-[500px]:bg-gradient-to-t to-red-200 via-purple-500 from-cyan-600"
            } flex  max-[500px]:flex-col-reverse p-6 items-center my-4 dark:bg-neutral-700 bg-white shadow-md rounded-3xl min-h-[185px] justify-between`}
          >
            <div
              className={`${
                job.currentJob && "text-white"
              } flex flex-col justify-between w-full text-neutral-700 dark:text-white`}
            >
              <h2 className="text-2xl font-bold max-[500px]:mt-4">
                {job.role} - {job.company}
              </h2>
              <div className="font-semibold">
                {formatDate(job.startDate)} -{" "}
                {job.currentJob ? "Current" : formatDate(job.endDate)}
              </div>
              <div className="mt-4 text-sm text-justify">{job.description}</div>
            </div>
            <Image
              className="object-cover ml-8 max-[500px]:ml-0"
              src={job.logo}
              alt={job.alt}
              height={80}
              width={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
