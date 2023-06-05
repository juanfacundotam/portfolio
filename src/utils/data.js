import {
  SiJavascript,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiVite,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiSass,
  SiLess,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiLinux,
  SiTailwindcss
} from "react-icons/si";
import style from "./data.module.css"

const data = [
    {
      id: "1",
      tittle: "SML StartUp",
      description: "Proyecto SML StartUp. Front-Back-BDD",
      image: "foto1",
      imagealt: "foto proyecto 1",
      link: "https://youtu.be/wQ4kndATuu0",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiMongodb className={style.icon}/>, <SiTailwindcss className={style.icon}/>],
    },
    {
      id: 2,
      tittle: "Food Recipes App",
      description: "Proyecto de punta a punta. Front-Back-BDD",
      image: "foto2",
      imagealt: "foto proyecto 2",
      link: "https://food-app-client.netlify.app",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiPostgresql className={style.icon}/>, <SiSequelize className={style.icon}/>],
    },
    {
      id: "1",
      tittle: "Rick and Morty App",
      description: "Proyecto de punta a punta. Front-Back-BDD",
      image: "foto3",
      imagealt: "foto proyecto 1",
      link: "https://rickandmorty-cliente-production.up.railway.app",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiPostgresql className={style.icon}/>, <SiSequelize className={style.icon}/>],
    },
    {
      id: 4,
      tittle: "Marvel App Mobile",
      description: "Este esta hecho de manera distinta",
      image: "foto4",
      imagealt: "foto proyecto 4",
      link: "https://www.google.com.ar",
      tecnology: [<SiReact className={style.icon}/>, <SiReact className={style.icon}/>, <SiReact className={style.icon}/>],
    },
  ];

  export default data;