import React from "react";
import style from "./Home.module.css"
import foto from "../../assets/foto.jpg";
import Social from "../../components/Social/Social"
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import { SiJavascript, SiPostgresql, SiExpress, SiReact, SiRedux, SiCss3, SiHtml5, SiNodedotjs, SiNpm, SiSass, SiLess, SiCplusplus, SiCsharp, SiDotnet, SiLinux} from "react-icons/si";
const Home = () => {
    return (
        <div className={style.divHome}>
            <p>home</p>
            <h1>Juan Facundo Tam</h1>
            <h2>FullStack Developer</h2>
            <img src={foto} className={style.image} alt="Foto Personal" />
            <BoxHeader/>
            <Social/>
            <div>
            <SiJavascript/>
            <SiPostgresql/>
            <SiExpress/>
            <SiReact/>
            <SiRedux/>
            <SiCss3/>
            <SiHtml5/>
            <SiNodedotjs/>
            <SiNpm/>
            <SiSass/>
            <SiLess/>
            <SiCplusplus/>
            <SiCsharp/>
            <SiDotnet/>
            <SiLinux/>
            </div>
        </div>
    )
}

export default Home;