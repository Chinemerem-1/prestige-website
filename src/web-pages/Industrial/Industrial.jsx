import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import industImag from "../../assets/hero pics-industrial.svg"

const Industrial = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection
          img={industImag}
          headerText="Industrial Services"
        />
        <Footer/>
    </div>
  )
}

export default Industrial