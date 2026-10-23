import { Container, Row, Col } from "react-bootstrap"
import Images from "../../Components/Images"
import imgRS from "../../assets/red-stars.png"
import { useState } from "react";
import sectionImg from "../../assets/section4.png"
import sectionImg2 from "../../assets/section42.png"
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const Homesection4 = () => {

    const styleh2 = {
        // fontFamily: "Montserrat",
        // color: "black",
        fontSize: 40,
        fontWeight: 600
    }

    const stylep = {
        // fontFamily: "Montserrat",
        // color: "black",
        fontSize: 24,
        fontWeight: 500
    }

    const [rightView, setRightView] = useState('before');

    const showBeforeView =() => setRightView('before');
    const showAfterView =() => setRightView('after');

  return (
    <>
        <Container fluid className="before-after px-md-5 py-5">

            <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-center align-items-center text-center text-white gap-1">
                    <Images src={imgRS}/>
                    <p className="mb-0" style={stylep}>BEFORE AND AFTER</p>
                    <Images src={imgRS}/>
                </div>
            
                <h2 style={styleh2} className="text-center text-white ">Recent Completed Project</h2>
            </div>

            <Row className="justify-content-center px-md-5 position-relative g-0 first-Row">

                <Col className="position-relative">

                    <Row className="wrapper g-0">
                        <Col md={6} className="position-relative">
                            <Images src={sectionImg} className="img1 object-fit-cover"/>
                            <span className="label-badge-1">Before</span>
                        </Col>

                        <Col md={6} className="position-relative">
                            <Images 
                                src={rightView === 'before' ? sectionImg : sectionImg2}
                                className="img1 object-fit-cover transition-fade d-block ms-md-auto"/>

                            <span className="label-badge-2">
                                {rightView === 'before' ? 'Before' : 'After'}
                            </span>
                        </Col>
                    </Row>

                    <div className="comparison-button">
                        <button className={`arrow-button ${rightView === 'before' ? 'active-tab' : ''}`} onClick={showBeforeView} aria-label="Show before image" type="button">
                            <BiSolidLeftArrow className="arrow arrow-left"/>
                        </button>

                        <button className={`arrow-button ${rightView === 'after' ? 'active-tab' : ''}`} onClick={showAfterView} aria-label="Show after image" type="button"> 
                            <BiSolidRightArrow className="arrow arrow-right"/>
                        </button>
                    </div>


                            
                </Col>

            </Row>
            
        </Container>
    </>

  )
}

export default Homesection4