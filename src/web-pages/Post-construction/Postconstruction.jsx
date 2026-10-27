import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import postImag from "../../assets/hero pics-post.svg"

const Postconstruction = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection
          img={postImag}
          headerText="Post Construction Services"
        />
        <Footer/>
    </div>
  )
}

export default Postconstruction