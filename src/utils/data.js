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
} from "react-icons/si";
import style from "./data.module.css"

const data = [
    {
      id: "1",
      tittle: "Rick and Morty App",
      description: "Proyecto de punta a punta. Front-Back-BDD",
      image: "foto1",
      imagealt: "foto proyecto 1",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiPostgresql className={style.icon}/>, <SiSequelize className={style.icon}/>],
    },
    {
      id: 2,
      tittle: "Proyecto 2",
      description: "Este esta hecho de manera distinta",
      image: "foto2",
      imagealt: "foto proyecto 2",
      tecnology: [<SiCss3 className={style.icon}/>, <SiCss3 className={style.icon}/>, <SiCss3 className={style.icon}/>],
    },
    {
      id: 3,
      tittle: "Gastos Semanales",
      description: "Calculadora de gastos personales. Logica JavaScript",
      image: "foto3",
      imagealt: "foto proyecto 3",
      tecnology: [<SiHtml5 className={style.icon}/>, <SiCss3 className={style.icon}/>, <SiJavascript className={style.icon}/>],
    },
    {
      id: 4,
      tittle: "Proyecto 4",
      description: "Este esta hecho de manera distinta",
      image: "foto4",
      imagealt: "foto proyecto 4",
      tecnology: [<SiReact className={style.icon}/>, <SiReact className={style.icon}/>, <SiReact className={style.icon}/>],
    },
  ];

  export default data;