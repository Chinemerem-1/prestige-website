import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"
import Images from "../../Components/Images"
import img from "../../assets/hero pics.svg"
import img2 from "../../assets/play.svg"
import { Link } from "react-router-dom"

const Herobox = () => {

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

  return (
    <>
        <Container fluid className="hero-box ps-md-5 pe-md-0">
            <Row className=" g-0">
                <Col md={6} className="hero-section1 px-md-5 pt-md-5">
                    <p className="title mb-3 pt-md-4 mt-md-5">WE ARE PRESTIGE</p>

                    <h1 className="mb-3" style={heroT}>Professional Cleaning Service You Can Trust</h1>

                    <p className="hero-description mb-4 pe-md-4" style={{whiteSpace: 'pre-line'}}>We Are Eco-Friendly And Use Non-Toxic Product For The Safety Of Your Family, Clients And Pets.</p>
                    
                    <div className="hero-cta d-flex gap-md-5">
                        <div className="">
                            <Button as={Link} to="/Login" className='' style={{backgroundColor: "#A44730", border: "none", padding: "10px 40px", borderRadius: "10px", fontFamily: "Montserrat", color: "white", fontSize: 16, fontWeight: 500}}>Book Online</Button>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <Images src={img2} className=""/>
                            <p className="mb-0" style={heroT2}>Watch Our Story</p>
                        </div>
                    </div>
                </Col>

                <Col md={6} className="hero-section2">
                    <Images src={img} imgStyles={imgStyle} fluid className="d-block ms-auto"/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Herobox