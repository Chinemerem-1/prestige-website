import Herosection from "../../Components/Herosection";
import NavHeader from "../../Components/navHeader";
import heroImg from "../../assets/hero pics-about.svg"
import Aboutsection1 from "./Aboutsection1";
import Aboutsection2 from "./Aboutsection2";

function Aboutpage() {
    return (
        <>
        <NavHeader/>
        <Herosection img={heroImg} headerText="About Us"/>
        <Aboutsection1/>
        <Aboutsection2/>
        </>
    )
}

export default Aboutpage;