import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import Repositoty from "../components/Repositoty";
import ContactMe from "../components/ContactMe";
import { BsBook, BsPersonCheck } from "react-icons/bs";
import { RiBookMarkFill } from "react-icons/ri";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { getProjects } from "../pages/api/project";
import Footer from "../components/Footer";
import Head from "next/head";

const HomePage = ({ user, repo, projects }) => {
  const [tab, setTab] = useState("profile");

  return (
    <>
      <Head>
        <title>Steven San's Portfolio</title>
        <link rel="icon" href="https://github.com/ssan93.png" />
      </Head>
      <div className="bg-[#0d1117] min-h-screen">
        <Navbar />
        <div className="container md:flex-nowrap text-gray-100 mx-auto py-10 lg:px-16 px-0  flex flex-wrap">
        {tab === "profile" ? <></> :
          <div className="md:w-1/4 w-100 mx-auto md:mx-0">
             <Sidebar user={user} /> 
          </div>
        }
        
          <div className = {
            tab === "profile"
              ? "md:3/4 w-100 xl:max-w-[90%] mx-auto"
              : "md:3/4 w-100 max-w-[75%] mx-auto md:mx-0"
          }>
            <div className="flex">
          {tab === "profile" ? <div className="md:w-1/4 w-100 h-1"></div> : <></>}
            <nav className="md:mx-0 flex bg-[#0d1117] sticky top-0 z-[1] pt-6 md:pt-2 lg:space-x-6 md:space-x-3 sm:space-x-0 justify-center flex-wrap">
              <div className="mx-2 md:mx-0 my-1 md:my-0">
                <button
                  onClick={() => setTab("profile")}
                  className="flex items-center px-1 text-gray-300 text-sm"
                >
                  <BsBook className="mr-2 text-gray-600 hidden md:block" />
                  <p className={tab === "profile" && "font-semibold" || ""}>
                    Overview
                  </p>
                </button>

                <div
                  className={
                    tab === "profile"
                      ? "border-b-2 w-100 border-[#f78166] mt-2"
                      : "border-b-2 w-100 border-transparent mt-2"
                  }
                ></div>
              </div>
              <div className="mx-2 md:mx-0 my-1 md:my-0">
                <button
                  onClick={() => setTab("about-me")}
                  className="flex items-center px-1 text-gray-300 text-sm"
                >
                  <BsPersonCheck className="mr-2 text-gray-600 hidden md:block" />
                  <p className="text-sm">
                    About Me
                  </p>
                </button>
                <div
                  className={
                    tab === "about-me"
                      ? "border-b-2 w-100 border-[#f78166] mt-2"
                      : "border-b-2 w-100 border-transparent mt-2"
                  }
                ></div>
              </div>

              <div className="mx-2 md:mx-0 my-1 md:my-0">
                <button
                  onClick={() => setTab("repositories")}
                  className="flex items-center px-1 text-gray-300 text-sm"
                >
                  <RiBookMarkFill className="mr-2 text-gray-600 hidden md:block" />
                  <p className="text-sm">
                    Repositories
                    <span className="inline-flex items-center justify-center px-2 py-1 ml-1 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full">
                      {user?.public_repos}
                    </span>
                  </p>
                </button>
                <div
                  className={
                    tab === "repositories"
                      ? "border-b-2 w-100 border-[#f78166] mt-2"
                      : "border-b-2 w-100 border-transparent mt-2"
                  }
                ></div>
              </div>

              <div className="mx-2 md:mx-0 my-1 md:my-0">
                <button
                  onClick={() => setTab("projects")}
                  className="flex items-center px-1 text-gray-300 text-sm"
                >
                  <AiOutlineProject className="mr-2 text-gray-600 hidden md:block" />
                  <p className="text-sm">Projects</p>
                </button>
                <div
                  className={
                    tab === "projects"
                      ? "border-b-2 w-100 border-[#f78166] mt-2"
                      : "border-b-2 w-100 border-transparent mt-2"
                  }
                ></div>
              </div>
              {/* <div>
                <button
                  onClick={() => setTab("articles")}
                  className="flex items-center text-gray-300 px-1 text-sm"
                >
                  <SiWriteDotAs className="mr-2 text-gray-600 hidden md:block" />
                  <p className="text-sm">Articles</p>
                </button>
                <div
                  className={
                    tab === "articles"
                      ? "border-b-2 w-100 border-[#f78166] mt-2"
                      : "border-b-2 w-100 border-transparent mt-2"
                  }
                ></div>
              </div> */}

              <div className="mx-2 md:mx-0 my-1 md:my-0">
                <button
                  onClick={() => setTab("contact-me")}
                  className="flex justify-center items-center px-1 text-gray-300 text-sm"
                >
                  <AiOutlineMail className="mr-2 text-gray-600 hidden md:block" />
                  <p className="text-sm">Contact Me</p>
                </button>
                <div
                  className={
                    tab === "contact-me"
                      ? "border-b-2 w-100 border-[#f78166] mt-2"
                      : "border-b-2 w-100 border-transparent mt-2"
                  }
                ></div>
              </div>
            </nav>
            </div>
            {tab === "profile" && <Profile user={user} />}
            {tab === "about-me" && <AboutMe user={user} />}
            {tab === "repositories" && <Repositoty repo={repo} />}
            {tab === "projects" && <Project projects={projects} />}
            {tab === "contact-me" && <ContactMe />}
          </div>
        </div>
        <div className="border-b border-gray-700"></div>
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/ssan93`,
    { client_id:process.env.GIT_CLIENT_ID }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/ssan93/repos?sort=created_at&per_page=10`, 
    { client_id:process.env.GIT_CLIENT_ID }
  );
  const repo = await repoRes.json();

  const projects = await getProjects();

  return {
    props: { user, repo, projects },
  };
}
export default HomePage;
