import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import janiImag from "../../assets/hero pics-janitorial.svg"

const Janitorial = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection
          img={janiImag}
          headerText="Janitorial Services"
        />
        <Footer/>
    </div>
  )
}

export default Janitorial