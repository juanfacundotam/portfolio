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
      id: 1,
      tittle: "Social Media Lab IA",
      description: "Proyecto SML StartUp. Front-Back-BDD",
      // description: "En mi participación en el proyecto para Social Media Lab IA, asumí un papel integral como desarrollador fullstack. Me encargué del frontend, backend y la configuración de la base de datos. En el frontend, creé una interfaz de usuario atractiva y receptiva, utilizando tecnologías modernas. En el backend, implementé la lógica de negocio y aseguré un rendimiento óptimo. Además, configuré una base de datos eficiente para almacenar y gestionar los datos de manera segura. Fue una experiencia enriquecedora en la que pude demostrar mis habilidades en todas las áreas del desarrollo web.",
      description: "En colaboración con el equipo de la startup europea Social Media Lab IA, desarrollamos una plataforma de gestión para empleados. Me involucré activamente en el desarrollo, abarcando tanto el frontend como el backend, así como la configuración de la base de datos. Juntos, logramos crear una solución integral que cumple con los objetivos y requisitos de la startup. A traves del boton Sitio Web se ingresa a un video que realice para la presentación de la app.",
      image: "foto1",
      imagealt: "foto proyecto 1",
      link: "https://youtu.be/wQ4kndATuu0",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiMongodb className={style.icon}/>, <SiTailwindcss className={style.icon}/>],
    },
    {
      id: 2,
      tittle: "Food Recipes App",
      description: "Como parte del bootcamp de Soy Henry, llevé a cabo un desafiante proyecto individual fullstack. Me encargué de desarrollar tanto el frontend, el backend, como tambien la BDD, abarcando todas las etapas del proceso. Fue una oportunidad invaluable para aplicar mis habilidades y adquirir experiencia práctica en el desarrollo de aplicaciones web completas.",
      image: "foto2",
      imagealt: "foto proyecto 2",
      link: "https://food-app-client.netlify.app",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiPostgresql className={style.icon}/>, <SiSequelize className={style.icon}/>],
    },
    {
      id: 3,
      tittle: "Rick and Morty App",
      description: "Realicé un emocionante proyecto fullstack como parte de la integración de la primera parte del bootcamp de Soy Henry. Desarrollé habilidades tanto en el frontend como en el backend, abarcando un enfoque completo del desarrollo web. Fue una experiencia enriquecedora que me permitió aplicar mis conocimientos y adquirir una visión holística de la construcción de aplicaciones web.",
      image: "foto3",
      imagealt: "foto proyecto 1",
      link: "https://rick-and-morty-app-henry.netlify.app/",
      tecnology: [<SiJavascript className={style.icon}/>, <SiReact className={style.icon}/>, <SiRedux className={style.icon}/>, <SiExpress className={style.icon}/>, <SiPostgresql className={style.icon}/>, <SiSequelize className={style.icon}/>],
    },
    {
      id: 4,
      tittle: "Marvel App Mobile",
      description: "En este proyect desarrollé una aplicación móvil fullstack utilizando React Native, enfocada en personajes de renombre. Fui responsable tanto del frontend como del backend, creando una experiencia interactiva y atractiva para los usuarios. Este proyecto me desafió a utilizar tecnologías móviles avanzadas y demostró mi habilidad para crear aplicaciones móviles de calidad en un entorno fullstack.",
      image: "foto4",
      imagealt: "foto proyecto 4",
      link: "https://www.google.com.ar",
      tecnology: [<SiReact className={style.icon}/>, <SiReact className={style.icon}/>, <SiReact className={style.icon}/>],
    },
  ];

  export default data;