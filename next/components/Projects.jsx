import { useState } from "react";
import { SeeMore, ProjectsWrapper, ProjectsHeader } from "./";
const projects = [
  {
    id: 0,
    src: "/img/project2.svg",
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
    src: "/img/project3.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
];
const Projects = () => {
  const [extraProject, setExtraProject] = useState(false);
  return (
    <section className="py-10 bg-aliceblue">
      <div className="max-w-6xl mx-auto text-center">
        <ProjectsHeader />
        <ProjectsWrapper projects={projects} />
        {extraProject && <ProjectsWrapper projects={projects} />}
        <SeeMore onClick={setExtraProject} extra={extraProject} />
      </div>
    </section>
  );
};

export default Projects;
