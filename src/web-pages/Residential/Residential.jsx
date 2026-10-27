import Detailssection from "../../Components/Detailssection"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import resiImag from "../../assets/hero pics-residential.svg"

const Residential = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection
          img={resiImag}
          headerText="Residential Services"
        />
        <Detailssection
        
        />
        <Footer/>
    </div>
  )
}

export default Residential