import { Container, Row, Col } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import logo1 from "../../assets/caramel1.png"
import logo2 from "../../assets/caramel2.png"
import logo3 from "../../assets/caramel3.png"
import logo4 from "../../assets/caramel4.png"
import logo5 from "../../assets/caramel5.png"
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"
import formImg from "../../assets/form-picture.png"
import ButtonComp from "../../Components/ButtonComp"

const Homesection6 = () => {

        const headStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const headLabel = {
            fontSize: 40,
            fontWeight: 600
        }

        const caramelStyle = {
            // fontFamily: "Montserrat",
            // color: "black",
            fontSize: 24,
            fontWeight: 500
        }

        const formHeader = {
            fontSize: 16,
            fontWeight: 600
        }

        const formPlaceholder = {
            fontSize: 12,
            fontWeight: 600,
        }

    const logoArray = [
        {
            id: 1,
            logo: <Images src={logo1} />
        },

        {
            id: 2,
            logo: <Images src={logo2} />
        },

        {
            id: 3,
            logo: <Images src={logo3} />
        },

        {
            id: 4,
            logo: <Images src={logo4} />
        },

        {
            id: 5,
            logo: <Images src={logo5} className="img-fluid"/>
        },
    ]

  return (
    <>
        <section className="caraform-holder py-5">
            <Container fluid className="px-md-5 pb-5">

                <div className="d-flex align-items-center gap-2 mb-1 px-md-5">
                    <Images src={imgC}/>
                    <p className="mb-0" style={caramelStyle}>OUR CLIENTS/PARTNERS</p>
                </div>
                <Row className="cara-row row-cols-2 row-cols-sm-3 row-cols-md-5 align-items-center px-md-5 pt-4">
                    {logoArray.map((items) => {
                        return (
                            <Col md={2} className="text-center" key={items.id}>
                                <div className="items-wrapper d-flex  align-items-center justify-content-center">
                                    {items.logo}
                                </div>
                                
                            </Col>                        
                        )
                    })}
                </Row>

                
            </Container>
            <Container fluid className="ps-md-0 pe-md-5">
                <Row className=" g-0">
                    <Col md={6} className="imgForm">
                        <Images src={formImg}/>
                    </Col>
                    <Col md={6} className="px-md-5 py-md-5">
                        <div className="mb-3 mt-md-5">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <Images src={imgC}/>
                            <p className="mb-0" style={headStyle}>REQUEST A QUOTE</p>
                            </div>
                                <h3 style={headLabel}>Book An Appointment</h3>
                        </div>

                        <Form className="">
                            <Row className="">
                                <Col md={6} className="mb-md-3 mb-3">
                                    <Form.Group controlId="formGroupFirstName"/>
                                    <Form.Label style={formHeader}>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" style={formPlaceholder} className="f1"/>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formGroupLastName"/>
                                    <Form.Label style={formHeader}>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" style={formPlaceholder} className="f2"/>
                                </Col>
                            </Row>

                            <Row className="">
                                <Col md={6} className="mb-md-3 mb-3">
                                    <Form.Group controlId="formGroupPhone"/>
                                    <Form.Label style={formHeader}>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter number" style={formPlaceholder}className="f3"/>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formGroupEmail"/>
                                    <Form.Label style={formHeader}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" style={formPlaceholder} className="f4"/>
                                </Col>
                            </Row>

                            <Row className="">
                                <Col md={6} className="mb-md-3 mb-3">
                                    <Form.Group controlId="formGroupAddress"/>
                                    <Form.Label style={formHeader}>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" style={formPlaceholder} className="f5"/>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formGroupServices"/>
                                    <Form.Label style={formHeader}>Types Of Services</Form.Label>
                                    <Form.Select defaultValue="Select services" style={formPlaceholder} className="f6">
                                        <option>Select services</option>
                                        <option>Residential Cleaning</option>
                                        <option>Janitorial Cleaning</option>
                                        <option>Supply Of Materials</option>
                                        <option>Post Construction Cleaning</option>
                                        <option>Fumigation/Pest Control</option>
                                        <option>Industrial Cleaning</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Form.Group className="" controlId="messageForm.ControlTextarea1">
                                <Form.Label style={formHeader}>Message</Form.Label>
                                <Form.Control as="textarea" rows={7} placeholder="Type a message" style={formPlaceholder} className="f7"/>
                            </Form.Group>
                        </Form>

                        <ButtonComp address="/Login" buttonClass="butBlueClass mt-4" buttonText="Submit"/>
                    </Col>
                </Row>    
            </Container>
        </section>
    </>
  )
}

export default Homesection6