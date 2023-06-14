import { AiFillGithub } from "react-icons/ai";

export const Footer = ({ Text }) => {
  return (
    <div className="flex flex-wrap items-center space-x-1 space-y-2 justify-evenly text-xs text-[#59A6FF] py-8">
      <p className="text-gray-500 text-xs">© 2022 GitHub, Inc.</p>
      <p className="cursor-pointer">Terms</p>
      <p className="cursor-pointer">Privacy</p>
      <p className="cursor-pointer">Security</p>
      <p className="cursor-pointer">Status</p>
      <p className="cursor-pointer">Docs</p>

      <AiFillGithub className="text-2xl text-gray-600 hidden md:block" />

      <p className="cursor-pointer">Contact Github</p>
      <p className="cursor-pointer">Pricing</p>
      <p className="cursor-pointer">API</p>
      <p className="cursor-pointer">Training</p>
      <p className="cursor-pointer">Blog</p>
      <p className="cursor-pointer">About</p>
    </div>
  );
};

