import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Images from "../Components/Images"
import ButtonComp from "../Components/ButtonComp"
import img2 from "../assets/play.svg"
import imgC from "../assets/stars.png"
import { IoCheckbox } from "react-icons/io5";
import { useEffect, useState } from "react"

const Detailssection = ({imgL1, slide1, slide2, slide3, compHeader, paragraphOne, paragraphTwo, listOne, listTwo, listThree, listFour, buttonText}) => {
    const headerStyle = {
    fontSize: 24,
    fontWeight: 500
  }

  const headerStyle2 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 40,
    fontWeight: 600
  }

  const bodyStyle = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 300
  }

  const checkT1 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const checkT2 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const checkT3 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const checkT4 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const THp1 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 40,
    fontWeight: 600
  }

  const THp2 = {
    fontFamily: "Montserrat",
    color: "#3A65F2",
    fontSize: 14,
    fontWeight: 600
  }

  const slideImages = [slide1, slide2, slide3]

  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setcurrentSlide((prevIndex) => (prevIndex + 1) % slideImages.length)
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
        <Container fluid className=" py-5 px-md-5 bg-info">
            <Row className="py-md-5 gy-md-0 gy-4">
                <Col md={6} className="d-flex imgH align-items-end px-md-5">

                    <div className="img-col-holder w-100 h-100">
                        <div className="d-flex main-img-holder justify-content-end">
                            <Images src={imgL1} className="img-fluid main-img me-md-3"/>
                        </div>
                    
                        <div className="slideshow-img-holder overflow-hidden rounded-4">
                            <Images src={slideImages[currentSlide]} className="img-fluid slide-transition"/>
                            <Images src={img2} className="play-button"/>
                        </div>
                    </div>

                </Col>

                <Col md={6} className=" pe-md-5 ps-md-0" >
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Images src={imgC}/>
                        <p className="mb-0" style={headerStyle}>{compHeader}</p>
                    </div>
                    <p className="mb-3" style={bodyStyle}>{paragraphOne}</p>
                    <p className="mb-3" style={bodyStyle}>{paragraphTwo}</p>


                    <section className="d-flex flex-column gap-3">
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT1}>{listOne}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT2}>{listTwo}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT3}>{listThree}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT4}>{listFour}</p>
                        </div>
                    </section>

                    <ButtonComp address="/About" buttonClass="butBlueClass mt-4" buttonText={buttonText}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Detailssection