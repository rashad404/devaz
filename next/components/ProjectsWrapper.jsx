import React from "react";
import { Project } from ".";
const ProjectWrapper = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 place-items-start md:grid-cols-3 gap-4 mb-10">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectWrapper;
