import { Container, Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

const Homesection8 = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What types of cleaning services do you offer?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do I need to provide any cleaning supplies or equipment?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Are your cleaners trained and background-checked?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How long does a typical cleaning take?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header> Do I need to be home during the cleaning?</Accordion.Header>
                        <Accordion.Body>
                        We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>

            <Col>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Homesection8