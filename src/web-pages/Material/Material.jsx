import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import MatiImag from "../../assets/hero pics-material.svg"

const Material = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection 
          img={MatiImag}
          headerText="Material Supply Services"
        />
        <Footer/>
    </div>
  )
}

export default Material