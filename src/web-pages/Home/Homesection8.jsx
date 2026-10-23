import { Container, Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"

const Homesection8 = () => {
     const accordionStyle = {
            fontSize: 24,
            fontWeight: 500
        }

  return (
    <Container>
        <div className="d-flex align-items-center gap-0 mb-1 px-md-5">
                    <Images src={imgC}/>
                    <p className="mb-0" style={accordionStyle}>FREQUENTLY ASKED     QUESTIONS</p>
                </div>
        <Row>
            <Col md={6}>
                <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header>What types of cleaning services do you offer?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="mb-3">
                        <Accordion.Header>Do I need to provide any cleaning supplies or equipment?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="mb-3">
                        <Accordion.Header>Are your cleaners trained and background-checked?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="mb-3">
                        <Accordion.Header>How long does a typical cleaning take?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="mb-3">
                        <Accordion.Header> Do I need to be home during the cleaning?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>

            <Col md={6}>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Homesection8