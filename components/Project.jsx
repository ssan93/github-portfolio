import ProjectCard from "./ProjectCard";
import { useContext } from "react";

export const Project = ({ projects, LanguageContext }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} LanguageContext={LanguageContext} />
      ))}
    </div>
  );
};

