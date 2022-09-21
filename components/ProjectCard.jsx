import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="border h-100 border-gray-700 rounded flex flex-col justify-between	" key={project?.id}>
      <div>
      <Image src={project?.image} width="500" height="300" />
      <h2 className="text-gray-300 font-semibold text-xl px-2 py-2 sm:text-lg">
        {project?.name}
      </h2>
      <p className="text-gray-600 text-sm px-2">{project?.description}</p>
      </div>
      <div className="flex items-center px-2 py-2">
        {project?.tags?.map((tag) => (
          <Icons tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
