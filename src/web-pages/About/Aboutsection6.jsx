import { Container, Row, Col } from "react-bootstrap"
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"
import imgw1 from "../../assets/manager.png"
import imgw2 from "../../assets/secretary.png"
import imgw3 from "../../assets/supervisor.png"

const Aboutsection6 = () => {

        const processStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const processLabel = {
            fontSize: 40,
            fontWeight: 600
        }

        const processIntro = {
            fontSize: 14,
            fontWeight: 400
        }

    const processArray = [
        {
            number: 1,
            image: <Images src={imgw1} className="img-fluid w-100"/>,
            title: "Tony Williams",
            description: "Manager"
        },

        {
            number: 2,
            image: <Images src={imgw2} className="img-fluid w-100"/>,
            title: "Mary Jones",
            description: "Secretary"
        },

        {
            number: 3,
            image: <Images src={imgw3} className="img-fluid w-100"/>,
            title: "John James",
            description: "Supervisor"
        }
    ]

  return (
    <>
        <Container fluid className="px-md-5 py-5 mb-md-5 team-holder">

            <Row className="px-md-5 g-0">
                <Col md={9} className="">
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <Images src={imgC}/>
                        <p className="mb-0" style={processStyle}>MEET OUR TEAM</p>
                    </div>
                    <h3 style={processLabel}>The Experts Behind Your Sparkling Space</h3>
                </Col>
            </Row>

            <Row className="justify-content-between px-md-5 pt-5 gx-5 gy-md-0 gy-3 process-holder">
                
                {processArray.map((member) => {
                    return (
                        <Col md={4} className="" key={member.number}>
                            <div className="member-hold">
                                <div className="member-wrapper">
                                    {member.image}
                                </div>

                                <div className="member-card w-50 px-3 bg-white py-3">
                                    <h6 className="mt-4">{member.title}</h6>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        </Col>
                )})} 
            </Row>

        </Container>
    </>
  )
}

export default Aboutsection6