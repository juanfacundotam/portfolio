import React from "react";
import { motion } from "framer-motion";
import style from "./Skills.module.css";
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

const Skills = () => {
  return (
    <div className={style.contenedor} id="skills">
      <motion.div 
        className={style.divContainer}
        initial={{ opacity: 0, y: "-30px" }}
        transition={{ duration: 1, type: "tween" }}
        whileInView={{ y: "0px", opacity: 1 }}
      >
        <h1 className={style.title}>My Skills</h1>
        <motion.div className={style.divIcons}>
          <div className={style.divSkill}>
            <SiJavascript className={style.icons}/>
            <span>Javascript</span>
          </div>
          <div className={style.divSkill}>
            <SiTypescript className={style.icons}/>
            <span>Typescript</span>
          </div>
          <div className={style.divSkill}>
            <SiReact className={style.icons} />
            <span>React</span>
          </div>
          <div className={style.divSkill}>
            <SiNextdotjs className={style.icons} />
            <span>NextJS</span>
          </div>
          <div className={style.divSkill}>
            <SiVite className={style.icons} />
            <span>Vite</span>
          </div>
          <div className={style.divSkill}>
            <SiRedux className={style.icons} />
            <span>Redux</span>
          </div>
          <div className={style.divSkill}>
            <SiNodedotjs className={style.icons} />
            <span>NodeJS</span>
          </div>
          <div className={style.divSkill}>
            <SiExpress className={style.icons} />
            <span>Express</span>
          </div>
          <div className={style.divSkill}>
            <SiPostgresql className={style.icons} />
            <span>PostgreSQL</span>
          </div>
          <div className={style.divSkill}>
            <SiSequelize className={style.icons} />
            <span>Sequelize</span>
          </div>
          <div className={style.divSkill}>
            <SiMongodb className={style.icons} />
            <span>MongoDB</span>
          </div>
          <div className={style.divSkill}>
            <SiTailwindcss className={style.icons} />
            <span>Tailwind</span>
          </div>
          <div className={style.divSkill}>
            <SiCss3 className={style.icons} />
            <span>Css</span>
          </div>
          <div className={style.divSkill}>
            <SiHtml5 className={style.icons} />
            <span>HTML</span>
          </div>
          <div className={style.divSkill}>
            <SiSass className={style.icons} />
            <span>Sass</span>
          </div>
          <div className={style.divSkill}>
            <SiLess className={style.icons} />
            <span>Less</span>
          </div>
          <div className={style.divSkill}>
            <SiCplusplus className={style.icons} />
            <span>C++</span>
          </div>
          <div className={style.divSkill}>
            <SiCsharp className={style.icons} />
            <span>C#</span>
          </div>
          <div className={style.divSkill}>
            <SiDotnet className={style.icons} />
            <span>.Net</span>
          </div>

        </motion.div>
      </motion.div>
    </div>

  );
};

export default Skills;
