import { useState, useContext, createContext } from "react";
import {
  Navbar,
  Sidebar,
  Profile,
  Project,
  Experience,
  AboutMe,
  Footer,
  LanguageProvider,
  LanguageSelector,
} from "../components";
import { BsBook, BsPersonCheck } from "react-icons/bs";
import { RiBookMarkFill } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { getProjects } from "./api/projects/projects";
import { getExperiences } from "./api/experiences/experiences";
import Head from "next/head";
import en from "../ressources/translations/english.json";
import fr from "../ressources/translations/french.json";

const HomePage = ({ user, projects, experiences }) => {
  const [tab, setTab] = useState("profile");

  const dictionaryList = { en, fr };

  const LanguageContext = createContext({
    userLanguage: "en",
    dictionary: dictionaryList.en,
  });

  const languageOptions = {
    en: "English",
    fr: "French",
  };

  // get text according to id & current language
  function Text({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid] || tid;
  }

  return (
    <>
      <Head>
        <title>Steven San's Portfolio</title>
        <link rel="icon" href="https://github.com/ssan93.png" />
        <meta name="description" content="Steven San is a web developer" />
        <meta
          name="keywords"
          content="steven san, steven, san, web developer, steven web developer, steven san web developer, steven portfolio, steven san portfolio, portfolio"
        />
        <meta property="og:title" content="Steven San's Portfolio" />
        <meta
          property="og:description"
          content="Showcasing my GitHub-inspired portfolio. Explore my coding prowess and project highlights. Unleash your curiosity as you delve into my code repositories. Let's connect and collaborate on innovative ventures. Join me in the world of endless possibilities."
        />
        <meta property="og:image" content="https://i.imgur.com/DmIYUON.png" />
        <meta property="og:url" content="https://www.steven-san.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Steven San's Portfolio" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="fb:app_id" content="796693392095236" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crunchitaip" />
        <meta name="twitter:creator" content="@crunchitaip" />
        <meta name="twitter:title" content="Steven San's Portfolio" />
        <meta
          name="twitter:description"
          content="Showcasing my GitHub-inspired portfolio. Explore my coding prowess and project highlights. Unleash your curiosity as you delve into my code repositories. Let's connect and collaborate on innovative ventures. Join me in the world of endless possibilities."
        />
        <meta name="twitter:image" content="https://i.imgur.com/DmIYUON.png" />
        <meta name="twitter:image:alt" content="Steven San's Portfolio" />
        <meta name="twitter:domain" content="https://www.steven-san.com" />
        <meta name="twitter:url" content="https://www.steven-san.com" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Steven San" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="5 minutes" />

        <meta
          name="original-source"
          content="https://www.steven-san.com"
        ></meta>
      </Head>
      <div className="bg-[#0d1117] min-h-screen">
        <Navbar Text={Text} />
        <LanguageProvider
          LanguageContext={LanguageContext}
          dictionaryList={dictionaryList}
          languageOptions={languageOptions}
        >
          <div className="App">
            <header className="App-header">
              <LanguageSelector
                LanguageContext={LanguageContext}
                languageOptions={languageOptions}
              />
            </header>
          </div>

          <div className="container md:flex-nowrap text-gray-100 mx-auto py-10 lg:px-16 px-0  flex flex-wrap">
            {tab === "profile" ? (
              <></>
            ) : (
              <div className="md:w-1/4 w-100 mx-auto md:mx-0">
                <Sidebar user={user} Text={Text} />
              </div>
            )}

            <div
              className={
                tab === "profile"
                  ? "md:3/4 w-100 xl:max-w-[90%] mx-auto"
                  : "md:3/4 w-100 max-w-[75%] mx-auto md:mx-0"
              }
            >
              <div className="flex">
                {tab === "profile" ? (
                  <div className="md:w-1/4 w-100 h-1"></div>
                ) : (
                  <></>
                )}
                <nav className="md:mx-0 flex bg-[#0d1117] sticky top-0 z-[1] pt-6 md:pt-2 lg:space-x-6 md:space-x-3 sm:space-x-0 justify-center flex-wrap">
                  <div className="mx-2 md:mx-0 my-1 md:my-0">
                    <button
                      onClick={() => setTab("profile")}
                      className="flex items-center px-1 text-gray-300 text-sm"
                    >
                      <BsBook className="mr-2 text-gray-600 hidden md:block" />
                      <p
                        className={(tab === "profile" && "font-semibold") || ""}
                      >
                        <Text tid="overview" />
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
                        <Text tid="aboutMe" />
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
                      onClick={() => setTab("experiences")}
                      className="flex items-center px-1 text-gray-300 text-sm"
                    >
                      <RiBookMarkFill className="mr-2 text-gray-600 hidden md:block" />
                      <p className="text-sm">
                        <Text tid="experiences" />
                        <span className="inline-flex items-center justify-center px-2 py-1 ml-1 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full">
                          {experiences?.length}
                        </span>
                      </p>
                    </button>
                    <div
                      className={
                        tab === "experiences"
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
                      <p className="text-sm">
                        <Text tid="projects" />
                      </p>
                    </button>
                    <div
                      className={
                        tab === "projects"
                          ? "border-b-2 w-100 border-[#f78166] mt-2"
                          : "border-b-2 w-100 border-transparent mt-2"
                      }
                    ></div>
                  </div>
                  {/* <div className="mx-2 md:mx-0 my-1 md:my-0">
                  <button
                    onClick={() => setTab("contact-me")}
                    className="flex justify-center items-center px-1 text-gray-300 text-sm"
                  >
                    <AiOutlineMail className="mr-2 text-gray-600 hidden md:block" />
                    <p className="text-sm"><Text tid="contactMe" /></p>
                  </button>
                  <div
                    className={
                      tab === "contact-me"
                        ? "border-b-2 w-100 border-[#f78166] mt-2"
                        : "border-b-2 w-100 border-transparent mt-2"
                    }
                  ></div>
                </div> */}
                </nav>
              </div>
              {tab === "profile" && <Profile Text={Text} user={user} />}
              {tab === "about-me" && <AboutMe Text={Text} user={user} />}
              {tab === "experiences" && (
                <Experience
                  LanguageContext={LanguageContext}
                  experiences={experiences}
                />
              )}
              {tab === "projects" && (
                <Project
                  LanguageContext={LanguageContext}
                  projects={projects}
                />
              )}
              {/* {tab === "contact-me" && <ContactMe Text={Text} />} */}
            </div>
          </div>
          <div className="border-b border-gray-700"></div>
          <Footer />
        </LanguageProvider>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(`https://api.github.com/users/ssan93`, {
    client_id: process.env.GIT_CLIENT_ID,
  });
  const user = await userRes.json();

  const projects = await getProjects();
  const experiences = await getExperiences();

  return {
    props: { user, projects, experiences },
  };
}

export default HomePage;
