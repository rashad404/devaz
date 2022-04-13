import Project from "./Project";
import { useState } from "react";
const projects = [
  {
    id: 0,
    src: "/img/project.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
  {
    id: 1,
    src: "/img/project.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
  {
    id: 2,
    src: "/img/project.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
];
const Projects = () => {
  const [extraProject, setExtraProject] = useState(false);
  return (
    <section className="bg-[#F0F3F4] py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl text-center pb-10 font-bold text-[#003054]">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 place-items-start md:grid-cols-3 gap-4 mb-10">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        {extraProject && (
          <div className="grid grid-cols-1 place-items-start md:grid-cols-3 gap-4 mb-10">
            {projects.map((project, i) => (
              <Project key={project.id} index={i} project={project} />
            ))}
          </div>
        )}
        <button
          onClick={() => setExtraProject(!extraProject)}
          className="px-6 bg-[#0B96FF] text-white rounded-lg">
          {extraProject ? "Hide" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
