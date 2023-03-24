import React from "react";
import foto from "../../assets/foto.jpg";
import Social from "../../components/Social/Social"
import { SiJavascript, SiPostgresql, SiExpress, SiReact, SiRedux, SiCss3, SiHtml5, SiNodedotjs, SiNpm, SiSass, SiLess, SiCplusplus, SiCsharp, SiDotnet, SiLinux} from "react-icons/si";
const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <img src={foto} style={{width: "20%"}} alt="" />
            <h1>Juan Facundo Tam</h1>
            <h2>FullStack Developer</h2>
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