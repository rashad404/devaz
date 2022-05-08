import Image from "next/image";
import { useState } from "react";
import { SeeMore } from "./";
const Project = ({ project }) => {
  const [extra, setExtra] = useState(false);
  return (
    <div className="flex overflow-hidden group rounded-md flex-col relative shadow-lg pb-2 mx-auto">
      <Image
        src={project.src}
        width={220}
        height={210}
        objectFit="cover"
        alt="project"
      />

      <div className="text-center space-y-4">
        <p className="text-justify px-4">{project.desc}</p>
        {extra && <p className="text-justify px-4">{project.extraDesc}</p>}
        <SeeMore onClick={setExtra} extra={extra} />
      </div>
    </div>
  );
};

export default Project;
