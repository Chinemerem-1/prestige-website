import {Container, Row, Col} from "react-bootstrap"
import Images from "../../Components/Images"
import logo21 from "../../assets/Vector.png"

const Aboutsection4 = () => {
    const sectionArray = [
       {
        item: 1,
        number: "5000+",
        info: "Happy Clients"
       },

       {
        item: 2,
        number: "3000+",
        info: "Project Done"
       },

       {
        item: 3,
        number: "1000+",
        info: "Running Project"
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
                    <p className="mb-0" style={stylep}>OUR STATISTICS</p>
                    <Images src={logo21}/>
                </div>
            
                <h2 style={styleh2} className="text-center text-white ">A Track Record Of Sparkling Success</h2>
            </div>

            <Row className="px-md-5 mt-md-5 mt-2 gx-4 gy-md-0 gy-4">
                {sectionArray.map((sectionA) => {
                    return (
                        <Col md={4}  className="">
                            <div className="stats-cards h-100 p-5 text-center text-white">
                                <h6 className="">{sectionA.number}</h6>
                                <p className="mb-0">{sectionA.info}</p>
                            </div>
                        </Col> 
                    )
                })}  
            </Row> 
        </Container>
    </>
  )
}
export default Aboutsection4