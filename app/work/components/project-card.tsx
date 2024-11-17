import Image from "next/image";
import React from "react";
import { Project } from "./types";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 mb-10">
      <div className="flex uppercase text-xs justify-between items-center">
        <div className="w-[25%] justify-between  flex items-center">
          <div className="flex w-[50%]  justify-between">
            <p className="select">{project.title.slice(0, 1)}</p>
            <p className="text-neutral-500 select">
              {"("}&nbsp;&nbsp;&nbsp;&nbsp;{project.title}&nbsp;&nbsp;&nbsp;&nbsp;
              {")"}
            </p>
          </div>
          <p className="select">{project.category}</p>
        </div>
        <div>
          <p className="select">Live Site</p>
        </div>
      </div>
      <div className="w-full uppercase  relative">
        <div className="absolute w-full top-0 left-0 h-[1px] bg-neutral-400" />
        <div className="absolute w-[1px] top-0 left-0 h-[60%] bg-neutral-400" />

        <div className="w-full h-full flex items-start justify-between">
          <div className="w-[40%] p-5">
            <h1 className="text-[5em] leading-none">{project.title}</h1>
          </div>
          <div className="w-[20%] flex flex-col text-xs gap-10 p-8 h-full">
            <p className="text-neutral-500">{project.description}</p>

            <div className="flex flex-col gap-5">
              <p>
                {"CR"}&nbsp;&nbsp;&nbsp;{"D"}&nbsp;&nbsp;&nbsp;{"TS"}
                &nbsp;&nbsp;&nbsp;{"+"}&nbsp;&nbsp;&nbsp;{"N"}&nbsp;&nbsp;&nbsp;
                {"TS"}
              </p>

              <p className="text-neutral-500">
                Project Done with <br />
                <span className="text-white">Neundex</span>
              </p>
            </div>
          </div>
          <div className="w-[35%] h-[300px] p-8">
            <div className="w-full h-full relative">
              <Image
                src={project.image}
                fill
                alt="projectImage"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
