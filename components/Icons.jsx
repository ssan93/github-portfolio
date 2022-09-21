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
  SiGraphql,
  SiNextdotjs,
  SiStrapi,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

const Icons = ({ tag }) => {
  return renderSwitch(tag);
};

const renderSwitch = (tag) => {
  switch(tag){
    case "react":
      return <DiReact className="text-blue-400 text-lg mr-1" />
    case "angular":
      return <DiAngularSimple className="text-red-400 text-lg mr-1" />
    case "next":
      return <SiNextdotjs className="text-blue-400 text-lg mr-1" />
    case "mongodb" :
      return <DiMongodb className="text-green-400 text-lg mr-1" />
    case "node" :
      return <DiNodejsSmall className="text-green-400 text-lg mr-1" />
    case "sass" :
      return <DiSass className="text-pink-400 text-xl mr-1" />
    case "redux" :
      return <SiRedux className="text-purple-400 text-md mr-1" />
    case "php" :
      return <DiPhp className="text-purple-400 text-xl mr-1" />
    case "firebase" :
      return <SiFirebase className="text-yellow-400 text-lg mr-1" />
    case "mysql" :
      return <DiMysql className="text-blue-400 text-lg mr-1" />
    case "material-ui" :
      return <SiMaterialui className="text-blue-500 text-lg mr-1" />
    case "python" :
      return <DiPython className="text-yellow-400 mr-1" />
    case "bootstrap" :
      return <BsFillBootstrapFill className="text-purple-700 mr-1" />
    case "tailwindcss" :
      return <SiTailwindcss className="text-blue-700 mr-1" />
    case "cypress" :
        return <SiCypress className="text-purple-700 mr-1" />
    case "google-earth" :
        return <SiGoogleearth className="text-blue-700 mr-1" />
    case "google-maps" :
        return <SiGooglemaps className="text-green-700 mr-1" />
    case "express" :
      return <SiExpress className="text-cyan-700 mr-1" />
    case "vue" :
      return <SiVuedotjs className="text-green-700 mr-1" />
    case "nuxt" :
      return <SiNuxtdotjs className="text-green-700 mr-1" />
    case "gcp" :
      return <DiGoogleCloudPlatform className="text-red-700 mr-1" />
    case "heroku" :
      return <DiHeroku className="text-purple-700 mr-1" />
    case "aws" :
      return <SiAmazonaws className="text-yellow-700 mr-1" />
    case "redis" :
      return <SiRedis className="text-red-700 mr-1" />
    case "psql" :
      return <SiPostgresql className="text-purple-700 mr-1" />
    case "graphql" :
      return <SiGraphql className="text-pink-700 mr-1" />
    case "strapi" :
      return <SiStrapi className="text-blue-700 mr-1" />
    case "typescript" :
      return <SiTypescript className="text-blue-700 mr-1" />
    case "html" :
      return <SiHtml5 className="text-red-700 mr-1" />
    case "css" :
      return <SiCss3 className="text-blue-700 mr-1" />
    case "selligent" :
      return <img className="w-6 mr-1" src="https://i.imgur.com/x0NSR4G.png"/>
    default:
      return <></>
  }
}
export default Icons;
