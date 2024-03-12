import Image from "next/image";
import { FiUsers, FiStar } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Sidebar = ({ user, Text }) => {
  return (
    <aside className="flex flex-col p-2">
      <div className="md:block mx-auto md:mx-0 flex-column justify-between items-center px-2">
        <div className="hidden md:block mx-auto md:mx-0">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            height="250"
            width="250"
            className="rounded-full"
          />
        </div>

        <div className="block md:hidden text-center">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full"
          />
        </div>

        <div className="px-2 mx-auto md:mx-0">
          <h1 className="mt-4 text-2xl font-semibold text-gray-300">
            {user?.name}
          </h1>
        </div>
      </div>

      <p className="mt-4 text-gray-300 text-sm">{user?.bio}</p>

      <div className="flex items-center mx-auto">
        <FiUsers className="text-gray-400 h-3 w-3 mr-1" />
        <p className="text-gray-500 text-sm">
          <span className="text-gray-200">{user?.followers}</span>{" "}
          <Text tid="followers" />
        </p>
        <p className="text-gray-200 text-xs mx-1">&bull;</p>
        <p className="text-gray-500 text-sm">
          <span className="text-gray-200">{user?.following}</span>{" "}
          <Text tid="following" />
        </p>
        <p className="text-gray-200 text-xs mx-1">&bull;</p>
        <FiStar className="text-gray-400 h-3 w-3 mr-1" />
        <p className="text-gray-500 text-sm">
          <span className="text-gray-200">2</span>
        </p>
      </div>
      <h2 className="text-gray-400 font-semibold text-lg mx-auto md:hidden">
        <Text tid="reachOut" />
      </h2>
      <div className="border-b border-gray-600 mt-2 md:mt-3"></div>

      <div className="md:mt-4 flex flex-wrap justify-center md:block flex-row ">
        <h2 className="text-gray-400 font-semibold text-lg mb-3 hidden md:block">
          <Text tid="reachOut" />
        </h2>
        <div className="flex items-center my-2 mx-1 md:mx-0">
          <SiGmail className="text-gray-500 text-xl " />
          <a
            href="mailto:san.steven97@gmail.com"
            className="text-gray-500 ml-1 md:ml-2 text-sm"
          >
            san.steven97@gmail.com
          </a>
        </div>

        <div className="flex items-center my-2 mx-1 md:mx-0">
          <AiFillLinkedin className="text-gray-500 text-xl" />

          <a
            href="https://www.linkedin.com/in/steven-san7/"
            target="_blank"
            className="text-gray-500 ml-1 md:ml-2 text-sm"
          >
            steven-san7
          </a>
        </div>

        <div className="flex text-center items-center my-2 mx-1 md:mx-0">
          <AiFillGithub className="text-gray-500 text-xl" />

          <a
            href="https://github.com/ssan93"
            target="_blank"
            className="text-gray-500 ml-1 md:ml-2 text-sm"
          >
            ssan93
          </a>
        </div>
      </div>
    </aside>
  );
};
