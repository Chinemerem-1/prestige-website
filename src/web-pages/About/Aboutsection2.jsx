import {Container, Row, Col} from "react-bootstrap"
import Images from "../../Components/Images"
import logo21 from "../../assets/Vector.png"

const Aboutsection2 = () => {
    const sectionArray = [
       {
        item: 1,
        header: "Our Mission",
        info: "To provide exceptional cleaning services that create healthier, more comfortable spaces for our clients. We are committed to delivering reliable, eco-friendly, and personalized cleaning solutions with integrity, care, and attention to details."
       },

       {
        item: 2,
        header: "Our Vision",
        info: "To be the most trusted and preferred cleaning service by delivering exceptional quality, building lasting client relationships, and creating healthier, happier environments—one space at a time."
       }
    ]

    const styleh2 = {
        fontSize: 40,
        fontWeight: 600
    }

    const stylep = {
        fontSize: 24,
        fontWeight: 500
    }
  return (
    <>
        <Container fluid className="px-md-5 py-5" style={{backgroundColor: "#A44730"}}>
            <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-center align-items-center text-white gap-2">
                    <Images src={logo21}/>
                    <p className="mb-0" style={stylep}>OUR CORE VALUES</p>
                    <Images src={logo21}/>
                </div>
            
                <h2 style={styleh2} className="text-center text-white ">The Values Behind Every Clean</h2>
            </div>

            <Row className="px-md-5 mt-md-5 mt-2 gx-4 gy-md-0 gy-4">
                {sectionArray.map((sectionA) => {
                    return (
                        <Col md={6}  className="">
                            <div className="about-cards h-100 px-4 pt-4 pb-4">
                                <h6 className="mb-4">{sectionA.header}</h6>
                                <hr className="cards-line"/>
                                <p className="mt-5">{sectionA.info}</p>
                            </div>
                        </Col> 
                    )
                })}  
            </Row> 
        </Container>
    </>
  )
}
export default Aboutsection2