import Footer from "../../Components/Footer";
import Herosection from "../../Components/Herosection";
import NavHeader from "../../Components/navHeader";
import heroImg from "../../assets/hero pics-about.svg"
import Aboutsection1 from "./Aboutsection1";
import Aboutsection2 from "./Aboutsection2";
import Aboutsection3 from "./Aboutsection3";
import Aboutsection4 from "./Aboutsection4";
import Aboutsection5 from "./Aboutsection5";
import Aboutsection6 from "./Aboutsection6";

function Aboutpage() {
    return (
        <>
        <NavHeader/>
        <Herosection img={heroImg} headerText="About Us"/>
        <Aboutsection1/>
        <Aboutsection2/>
        <Aboutsection3/>
        <Aboutsection4/>
        <Aboutsection5/>
        <Aboutsection6/>
        <Footer/>
        </>
    )
}

export default Aboutpage;