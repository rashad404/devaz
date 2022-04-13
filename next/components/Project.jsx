import Image from "next/image";
import { useState } from "react";
const Project = ({ project, index }) => {
  const [extra, setExtra] = useState(false);
  return (
    <div className="flex rounded-md flex-col relative shadow-lg pb-2 mx-auto">
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
        <button
          onClick={() => setExtra(!extra)}
          className="border border-[#0B96FF] px-4 rounded-md">
          {extra ? "Hide" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Project;
