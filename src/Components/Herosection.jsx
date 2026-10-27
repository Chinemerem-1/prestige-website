import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Images from "../Components/Images"
import img from "../assets/hero pics-about.svg"
import { WiStars } from "react-icons/wi";

const Herosection = ({img, headerText}) => {

    const imgStyle = {
        width: "85%"
    }

    const heroT = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 55,
        fontWeight: 700
    }

    const heroT2 = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 16,
        fontWeight: 500
    }

    const heroTextSyle = {
        fontSize: 30,
        fontWeight: 600
    }

  return (
    <>
        <Container fluid className="hero-comp ps-md-5 pe-md-0">
            <Row className="g-0 align-items-center row-holder">
                <Col md={4} className="hero-section1 ps-md-5">
                    <WiStars size={80} className="star-header"/>
                    <h3 className="mb-0 ps-md-5 text-md-start text-center" style={heroTextSyle}>{headerText}</h3>
                </Col>

                <Col md={8} className="hero-comp2">
                    <Images src={img} imgStyles={imgStyle} fluid className="d-block ms-auto"/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Herosection