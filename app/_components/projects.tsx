import Image from "next/image";
import { Badge } from "@/components/ui/badge";
const ProjectData = [
  {
    title: "Hello Project1",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    image: "https://via.placeholder.com/150/hello",
    link: "https://www.google.com",
    github: "https://www.github.com",
  },
  {
    title: "Hello Project2",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://via.placeholder.com/150/hello",
    link: "https://www.google.com",
    github: "https://www.github.com",
  },
  {
    title: "Hello Project3",

    techStack: ["React", "Next.js", "Tailwind CSS"],
    image: "https://via.placeholder.com/150/hello",
    link: "https://www.google.com",
    github: "https://www.github.com",
  },
];

export default function Projects() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-[10px]">
      {ProjectData.map((project) => (
        <div
          key={project.title}
          className=" p-4 items-center flex flex-col justify-center"
        >
          <Image
            src={project.image}
            alt="something"
            width={200}
            height={200}
            className="rounded-md"
          />
          <div className="font-bold text-center text-localPrimary-300 text-2xl">
            {project.title}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="flex flex-row gap-2 justify-evenly w-full mt-2 text-localPrimary-300 text-xl ">
            <div className="hover:text-localPrimary-600 hover:underline hover:cursor-pointer">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="hover:text-localPrimary-600 hover:underline hover:cursor-pointer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
