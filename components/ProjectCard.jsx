import Image from "next/image";
import { Icons } from "./Icons";
import { useContext } from "react";

export const ProjectCard = ({ project, LanguageContext }) => {
  const { userLanguage } = useContext(LanguageContext);
  return (
    <div className="border h-100 border-gray-700 rounded flex flex-col justify-between	">
      <div>
        {project?.url ? (
          <a href={project.url} target="_blank">
            <Image src={project?.image} width="500" height="300" />
          </a>
        ) : (
          <Image src={project?.image} width="500" height="300" />
        )}
        <h2 className="text-gray-300 font-semibold text-xl px-2 py-2 sm:text-lg">
          {userLanguage === "en" ? project?.name : project?.nameFR}
        </h2>
        <p className="text-gray-600 text-sm px-2">
          {userLanguage === "en"
            ? project?.description
            : project?.descriptionFR}
        </p>
      </div>
      <div className="flex items-center px-2 py-2">
        {project?.tags?.map((tag, ind) => (
          <Icons key={ind} tag={tag} />
        ))}
      </div>
    </div>
  );
};
