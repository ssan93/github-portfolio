
export const AboutMe = ({ user, Text }) => {
  return (
    <div>
      <section className="border p-3 rounded border-gray-700 my-6">
        <h1 className="text-gray-300 font-semibold text-2xl mt-3 ">Hey! 
          <img 
              className="inline align-bottom mx-1"
              src="./Hi.gif"
              height="40"
              width="40"
          />
        </h1>
        <div className="border-b mt-2 border-gray-900"></div>
        <p className="text-gray-300  text-sm mt-3">
          <Text tid="presentation" />
        </p>
        <p className="text-gray-300  text-sm mt-3">
          <Text tid="motivation" />
        </p>
        <div className="border-b mt-2 border-gray-900"></div>
        <h1 className="text-gray-300 font-semibold text-2xl mt-3 text-center lg:text-left"><Text tid="languages" /></h1>
        <h2 className="text-gray-400 text-sm text-center md:hidden">(<Text tid="seeMore" />)</h2>
        <div className="w-full flex flex-wrap flex-row justify-center my-5">
          <ul className="ch-grid text-center lg:text-left">
            <li>
              <div className="circle"> 
                <div className="mask half">
                  <div className="fill transform100"></div>
                </div>
                <div className="mask full transform100">
                  <div className="fill transform100"></div>
                </div>
                <div className="bg-[#0d1117] w-5/6 h-5/6 rounded-full absolute mt-[8%] ml-[8%]"> </div>
                <img src="https://i.imgur.com/nQyqtUh.png" alt="france icon" className="w-6/12 absolute top-1/4 left-1/4"/>
                <div className="ch-info text-center scale-0 ease-in-out duration-500 transition-all bg-white/[.017] h-full backdrop-blur-md ">
                  <h3 className="uppercase pt-6 mx-6 text-[12px] tracking-[.125em]"><Text tid="nativeLanguage" /></h3>
                  <p className="duration-1000 delay-500 opacity-0 border-[#f78166] text-[12px] border-t-2 p-1.5 mx-5"><Text tid="french" /></p>
                </div>
              </div>
            </li>
            
            <li>
              <div className="circle"> 
                <div className="mask half">
                  <div className="fill transform80"></div>
                </div>
                <div className="mask full transform80">
                  <div className="fill transform80"></div>
                </div>
                <div className="inside-circle"></div>
                <img src="https://i.imgur.com/KG20MJ3.png" alt="england icon" className="w-6/12 absolute top-1/4 left-1/4"/>
                <div className="ch-info text-center scale-0 ease-in-out duration-500 transition-all bg-white/[.017] h-full backdrop-blur-md">
                  <h3 className="uppercase pt-6 mx-6 text-[12px] tracking-[.125em]"><Text tid="c1Certified" /></h3>
                  <p className="duration-1000 delay-500 opacity-0 border-[#f78166] text-[12px] border-t-2 p-1.5 mx-5"><Text tid="english" /></p>
                </div>
              </div>
            </li>
            <li>
              <div className="circle"> 
                <div className="mask half">
                  <div className="fill transform50"></div>
                </div>
                <div className="mask full transform50">
                  <div className="fill transform50"></div>
                </div>
                <div className="inside-circle"></div>
                <img src="https://i.imgur.com/sTSaobq.png" alt="china icon" className="w-6/12 absolute top-1/4 left-1/4"/>
                <div className="ch-info text-center scale-0 ease-in-out duration-500 transition-all bg-white/[.017] h-full backdrop-blur-md">
                  <h3 className="uppercase pt-6 mx-6 text-[12px] tracking-[.125em]"><Text tid="motherTongue" /></h3>
                  <p className="duration-1000 delay-500 opacity-0 border-[#f78166] text-[12px] border-t-2 p-1.5 mx-5"><Text tid="chinese" /></p>
                </div>
              </div>
            </li>
            <li>
              <div className="circle"> 
                <div className="mask half">
                  <div className="fill transform40"></div>
                </div>
                <div className="mask full transform40">
                  <div className="fill transform40"></div>
                </div>
                <div className="inside-circle"></div>
                <img src="https://i.imgur.com/wiROvS0.png" alt="spain icon" className="w-6/12 absolute top-1/4 left-1/4"/>
                <div className="ch-info text-center scale-0 ease-in-out duration-500 transition-all bg-white/[.017] h-full backdrop-blur-md">
                  <h3 className="uppercase pt-6 mx-6 text-[12px] tracking-[.125em]"><Text tid="b1Level" /></h3>
                  <p className="duration-1000 delay-500 opacity-0 border-[#f78166] text-[12px] text-[12px] border-t-2 p-1.5 mx-5"><Text tid="spanish" /></p>
                </div>
              </div>
            </li>
            <li>
              <div className="circle"> 
                <div className="mask half">
                  <div className="fill transform20"></div>
                </div>
                <div className="mask full transform20">
                  <div className="fill transform20"></div>
                </div>
                <div className="inside-circle"></div>
                <img src="https://i.imgur.com/kyaEkV1.png" alt="japan icon" className="w-6/12 absolute top-1/4 left-1/4"/>
                <div className="ch-info text-center scale-0 ease-in-out duration-500 transition-all bg-white/[.017] h-full backdrop-blur-md">
                  <h3 className="uppercase pt-4 mx-6 text-[12px] tracking-[.125em]"><Text tid="studying" /></h3>
                  <p className="duration-1000 delay-500 opacity-0 border-[#f78166] text-[12px] border-t-2 p-1.5 mx-5"><Text tid="japanese" /></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* <img src="https://raw.githubusercontent.com/Sacsam005/my_portfolio_website/0fc1dccb57e4a40e1751d695fbd5b8048fae6471/img/skills.svg" alt="Skills" data-aos="zoom-out" className="test my-5"/> */}
        
        {/* <h1 className="text-gray-300 font-semibold text-2xl mt-3 text-center md:text-left">Tools</h1>

        <br/>
        <div >
          <div className="flex">
              <a href="https://www.w3.org/html/" target="_blank"><img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" /></a>
              <a href="https://www.w3schools.com/css/" target="_blank"><img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" /></a>
              <a href="https://getbootstrap.com/" target="_blank"><img src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" /></a>
              <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" /></a>
              <a href="https://mui.com/" target="_blank"><img src="https://img.shields.io/badge/-MaterialUI-0081CB?style=flat-square&logo=material-ui" /></a>
          </div>
          <div className="flex">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" /></a>
              <a href="https://fr.reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
              <a href="https://angular.io/" target="_blank"><img src="https://img.shields.io/badge/-Angular-de002d?style=flat-square&logo=angular&logoColor=white" /></a>
              <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white" /></a>
              <a href="https://vuejs.org/" target="_blank"><img src="https://img.shields.io/badge/-Vue.js-2db07b?style=flat-square&logo=vuedotjs&logoColor=white" /></a>
              <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js" /></a>
              <a href="https://nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" /></a>
              <a href="https://redux.js.org/" target="_blank"><img src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux" /></a>
          </div><br/>
          <div className="flex">
              <a href="https://www.mongodb.com/" target="_blank"><img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" /></a>
              <a href="https://redis.io/" target="_blank"><img src="https://img.shields.io/badge/-Redis-bc2e29?style=flat-square&logo=redis&logoColor=white" /></a>
              <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/-PostgreSQL-2f5b8b?style=flat-square&logo=Postgresql&logoColor=white" /></a>
              <a href="https://www.mysql.com/" target="_blank"><img src="https://img.shields.io/badge/-MySQL-005983?style=flat-square&logo=mysql&logoColor=white" /></a>
              <a href="https://www.microsoft.com/sql-server/" target="_blank"><img src="https://img.shields.io/badge/-SQL%20Server-lightgrey?style=flat-square&logo=microsoftsqlserver&logoColor=white" /></a>
          </div>
          <div className="flex">
              <a href="https://www.docker.com/" target="_blank"><img src="https://img.shields.io/badge/-Docker-0095d1?style=flat-square&logo=docker&logoColor=white" /></a>
              <a href="https://console.cloud.google.com/" target="_blank"><img src="https://img.shields.io/badge/-GCP-de4032?style=flat-square&logo=googlecloud&logoColor=white" /></a>
              <a href="https://heroku.com/" target="_blank"><img src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku" /></a>
              <a href="https://aws.amazon.com/" target="_blank"><img src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws" /></a>
              <a href="https://firebase.google.com/" target="_blank"><img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" /></a>
          </div>
          <br/>
          <div className="flex">
              <a href="https://postman.com/" target="_blank"><img src="https://img.shields.io/badge/-Postman-f26633?style=flat-square&logo=postman&logoColor=white" /></a>
              <a href="https://graphql.org/" target="_blank"><img src="https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white" /></a>
              <a href="https://jestjs.io/" target="_blank"><img src="https://img.shields.io/badge/-Jest-red?style=flat-square&logo=jest&logoColor=white" /></a>
              <a href="https://jwt.io/" target="_blank"><img src="https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white" /></a>
              <a href="https://git-scm.com/" target="_blank"><img src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" /></a>
              <a href="https://github.com/" target="_blank"><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" /></a>
              <a href="https://gitlab.com/" target="_blank"><img src="https://img.shields.io/badge/-Gitlab-ef9b24?style=flat-square&logo=gitlab&logoColor=white" /></a>
          </div>
        </div>


        <img
          className="mt-6"
          src="https://github-readme-stats.vercel.app/api?username=ssan93&&show_icons=true&title_color=ffffff&icon_color=bb2acf&text_color=daf7dc&bg_color=151515"
        /> */}
      </section>
    </div>
  );
};
