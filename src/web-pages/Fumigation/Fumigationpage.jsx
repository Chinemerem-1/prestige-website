import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import fumiImag from "../../assets/hero pics-fumigation.svg"

const Fumigationpage = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection
          img={fumiImag}
          headerText="Fumigation Services"
        />
        <Footer/>
    </div>
  )
}

export default Fumigationpage