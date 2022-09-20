import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

const Profile = ({ user }) => {
  return (
    <div>
      <section className="border p-3 rounded border-gray-700 my-6 ">
        <p className="text-gray-300 text-xs mt-4">
          ssan93 / README.<span className="text-gray-500">md</span>
        </p>
        <h2 align='center'>Steven San @ ssan93</h2>
        <p align='center'><b>5th-year Computer Science Student at UTBM at Belfort</b></p> 
        <p align='center'>Looking for a 3-month internship from February to May 2023</p> 


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
          I'm a Engineering Student specializing in Computer Science and also a full-stack web developer with three years of hands-on experience in Javascript.
        </p>
        <p className="text-gray-300  text-sm mt-3">
          Fast learner, hard worker and passionate about web engineering, I am highly motivated and proficient in developing databases,
          creating user interfaces and in programming languages like React or Angular.
        </p>
        <div className="border-b mt-2 border-gray-900"></div>
        {/* <Image
          className="mt-5 hidden md:block"
          height="220"
          width="450"
          src="https://i.imgur.com/AISkwEs.png"
        /> */}

        <h2 className="mt-6 text-xl font-semibold text-gray-300">
          Languages and Tools:
        </h2>
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
        />
      </section>
      <div className="mt-20 hidden md:block">
        <GitHubCalendar
          username="ssan93"
          theme={{
            level0: "#161B22",
            level1: "#0e4429",
            level2: "#006d32",
            level3: "#26a641",
            level4: "#39d353",
          }}
        />
      </div>

      <div className="mt-20 block md:hidden">
        <GitHubCalendar
          username="ssan93"
          theme={{
            level0: "#161B22",
            level1: "#0e4429",
            level2: "#006d32",
            level3: "#26a641",
            level4: "#39d353",
          }}
          blockMargin={0}
          blockSize={7}
          blockRadius={0}
        />
      </div>
    </div>
  );
};

export default Profile;
