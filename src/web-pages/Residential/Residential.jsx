import Benefits from "../../Components/Benefits"
import Detailssection from "../../Components/Detailssection"
import FAQComponent from "../../Components/FAQComponent"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import ProductGrid from "../../Components/ProductGrid"
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
        {/* <Detailssection
        
        /> */}
        <Benefits/>
        <FAQComponent/>
        <ProductGrid/>
        <Footer/>
    </div>
  )
}

export default Residential