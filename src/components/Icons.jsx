import {
  DiReact,
  DiMongodb,
  DiNodejsSmall,
  DiPhp,
  DiPython,
  DiMysql,
  DiSass,
  DiAngularSimple,
  DiGoogleCloudPlatform,
  DiHeroku,
} from "react-icons/di";
import {
  SiFirebase,
  SiMaterialui,
  SiRedux,
  SiTailwindcss,
  SiCypress,
  SiGoogleearth,
  SiGooglemaps,
  SiExpress,
  SiVuedotjs,
  SiNuxtdotjs,
  SiAmazonaws,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGatsby,
  SiGraphql,
  SiNextdotjs,
  SiStrapi,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTerraform,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

export const Icons = ({ tag }) => {
  return renderSwitch(tag);
};

const renderSwitch = (tag) => {
  switch (tag) {
    case "gatsby":
      return (
        <a href="https://www.gatsbyjs.com/" target="_blank">
          <SiGatsby className="text-purple-400 text-lg mr-1" />
        </a>
      );
    case "docker":
      return (
        <a href="https://www.docker.com/" target="_blank">
          <SiDocker className="text-blue-400 text-lg mr-1" />
        </a>
      );
    case "react":
      return (
        <a href="https://fr.reactjs.org/" target="_blank">
          <DiReact className="text-blue-400 text-lg mr-1" />
        </a>
      );
    case "angular":
      return (
        <a href="https://angular.io/" target="_blank">
          <DiAngularSimple className="text-red-400 text-lg mr-1" />
        </a>
      );
    case "next":
      return (
        <a href="https://nextjs.org/" target="_blank">
          <SiNextdotjs className="text-blue-400 text-lg mr-1" />
        </a>
      );
    case "mongodb":
      return (
        <a href="https://www.mongodb.com/" target="_blank">
          <DiMongodb className="text-green-400 text-lg mr-1" />
        </a>
      );
    case "node":
      return (
        <a href="https://nodejs.org/" target="_blank">
          <DiNodejsSmall className="text-green-400 text-lg mr-1" />
        </a>
      );
    case "sass":
      return (
        <a href="#" target="_blank">
          <DiSass className="text-pink-400 text-xl mr-1" />
        </a>
      );
    case "redux":
      return (
        <a href="https://redux.js.org/" target="_blank">
          <SiRedux className="text-purple-400 text-md mr-1" />
        </a>
      );
    case "php":
      return (
        <a href="https://www.php.net/" target="_blank">
          <DiPhp className="text-purple-400 text-xl mr-1" />
        </a>
      );
    case "firebase":
      return (
        <a href="https://firebase.google.com/" target="_blank">
          <SiFirebase className="text-yellow-400 text-lg mr-1" />
        </a>
      );
    case "mysql":
      return (
        <a href="https://www.mysql.com/" target="_blank">
          <DiMysql className="text-blue-400 text-lg mr-1" />
        </a>
      );
    case "material-ui":
      return (
        <a href="https://mui.com/" target="_blank">
          <SiMaterialui className="text-blue-500 text-lg mr-1" />
        </a>
      );
    case "python":
      return (
        <a href="https://www.python.org/" target="_blank">
          <DiPython className="text-yellow-400 mr-1" />
        </a>
      );
    case "bootstrap":
      return (
        <a href="https://getbootstrap.com/" target="_blank">
          <BsFillBootstrapFill className="text-purple-700 mr-1" />
        </a>
      );
    case "tailwindcss":
      return (
        <a href="https://tailwindcss.com/" target="_blank">
          <SiTailwindcss className="text-blue-700 mr-1" />
        </a>
      );
    case "cypress":
      return (
        <a href="https://www.cypress.io/" target="_blank">
          <SiCypress className="text-purple-700 mr-1" />
        </a>
      );
    case "google-earth":
      return (
        <a href="https://earth.google.com/web/" target="_blank">
          <SiGoogleearth className="text-blue-700 mr-1" />
        </a>
      );
    case "google-maps":
      return (
        <a href="https://developers.google.com/maps" target="_blank">
          <SiGooglemaps className="text-green-700 mr-1" />
        </a>
      );
    case "express":
      return (
        <a href="https://expressjs.com/" target="_blank">
          <SiExpress className="text-cyan-700 mr-1" />
        </a>
      );
    case "vue":
      return (
        <a href="https://vuejs.org/" target="_blank">
          <SiVuedotjs className="text-green-700 mr-1" />
        </a>
      );
    case "nuxt":
      return (
        <a href="https://nuxtjs.org/fr/" target="_blank">
          <SiNuxtdotjs className="text-green-700 mr-1" />
        </a>
      );
    case "gcp":
      return (
        <a href="https://console.cloud.google.com/" target="_blank">
          <DiGoogleCloudPlatform className="text-red-700 mr-1" />
        </a>
      );
    case "terraform":
      return (
        <a href="https://www.terraform.io/" target="_blank">
          <SiTerraform className="text-blue-700 mr-1" />
        </a>
      );
    case "heroku":
      return (
        <a href="https://heroku.com/" target="_blank">
          <DiHeroku className="text-purple-700 mr-1" />
        </a>
      );
    case "aws":
      return (
        <a href="https://aws.amazon.com/" target="_blank">
          <SiAmazonaws className="text-yellow-700 mr-1" />
        </a>
      );
    case "redis":
      return (
        <a href="https://redis.io/" target="_blank">
          <SiRedis className="text-red-700 mr-1" />
        </a>
      );
    case "psql":
      return (
        <a href="https://www.postgresql.org/" target="_blank">
          <SiPostgresql className="text-purple-700 mr-1" />
        </a>
      );
    case "graphql":
      return (
        <a href="https://graphql.org/" target="_blank">
          <SiGraphql className="text-pink-700 mr-1" />
        </a>
      );
    case "strapi":
      return (
        <a href="https://strapi.io/" target="_blank">
          <SiStrapi className="text-blue-700 mr-1" />
        </a>
      );
    case "typescript":
      return (
        <a href="https://www.typescriptlang.org/" target="_blank">
          <SiTypescript className="text-blue-700 mr-1" />
        </a>
      );
    case "html":
      return (
        <a href="https://www.w3.org/html/" target="_blank">
          <SiHtml5 className="text-red-700 mr-1" />
        </a>
      );
    case "css":
      return (
        <a href="https://www.w3schools.com/css/" target="_blank">
          <SiCss3 className="text-blue-700 mr-1" />
        </a>
      );
    case "selligent":
      return (
        <a href="https://www.selligent.com/" target="_blank">
          <img className="w-6 mr-1" src="https://i.imgur.com/x0NSR4G.png" />
        </a>
      );
    default:
      return <></>;
  }
};
