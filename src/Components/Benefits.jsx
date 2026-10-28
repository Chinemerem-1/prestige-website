import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import Images from "./Images"
import imgC from "../assets/stars.png"
import imag1 from "../assets/benefitstable1.svg"
import imag2 from "../assets/benefitstable2.svg"
import imag3 from "../assets/benefitstable3.svg"
import imag4 from "../assets/benefitstable4.svg"
import { TbTimelineEventX } from "react-icons/tb";
import { PiClockClockwiseFill } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { FaPersonMilitaryPointing } from "react-icons/fa6";

const Benefits = ({bencontHolder, headText, headLabelText, label1, label2, label3, label4, metInfoStyle, barVariant}) => {
    const metrics = [
        {
            id: 1,
            label: label1,
            value: 95
        },
        {
            id: 2,
            label: label2,
            value: 98
        },
        {
            id: 3,
            label: label3,
            value: 98
        },
        {
            id: 4,
            label: label4,
            value: 95
        },
    ]

    const benefitstable = [
        {
            icon: <TbTimelineEventX size={22}/>,
            title: "Saves Time and Energy",
            description: "Life is busy. Letting professionals handle the cleaning frees up your time for work, family, or relaxation.",
            picture: <Images src={imag1}/>
        },

        {
            icon: <BiWorld size={22}/>,
            title: "Saves Time and Energy",
            description: "Life is busy. Letting professionals handle the cleaning frees up your time for work, family, or relaxation.",
            picture: <Images src={imag2}/>
        },

        {
            icon: <PiClockClockwiseFill size={22}/>,
            title: "Saves Time and Energy",
            description: "Life is busy. Letting professionals handle the cleaning frees up your time for work, family, or relaxation.",
            picture: <Images src={imag3}/>
        },

        {
            icon: <FaPersonMilitaryPointing size={22}/>,
            title: "Saves Time and Energy",
            description: "Life is busy. Letting professionals handle the cleaning frees up your time for work, family, or relaxation.",
            picture: <Images src={imag4}/>
        },
    ]

        const headStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const headLabel = {
            fontSize: 40,
            fontWeight: 600
        }

  return (
    <Container fluid className="px-md-5" style={bencontHolder}>
        <div className="d-flex px-md-5 align-items-center gap-2 mb-3">
            <Images src={imgC}/>
            <p className="mb-0" style={headStyle}>{headText}</p>
        </div>
        <h3 style={headLabel}>{headLabelText}</h3>

        <Row className=" px-md-5 justify-content-between align-items-center">
            <Col md={4}>
                <div className="metrics-list">
                    {metrics.map((metric) => {
                        return (
                            <div className="metric-progress d-flex flex-column my-5 gap-2" key={metric.id}>

                                <div className="metric-info d-flex justify-content-between" style={metInfoStyle}>
                                    <p className="mb-0">{metric.label}</p>

                                    <span>{metric.value}%</span>
                                </div>

                                <div className="">
                                    <ProgressBar variant={barVariant} now={metric.value} style={{height: "11px"}}/>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </Col>

            <Col md={7}>
                <Row className=" gy-3 gx-3">
                    {benefitstable.map((items) => {
                        return (
                            <Col md={6} className="">
                                <article className="ben-card h-100 px-2 py-4 d-flex flex-column align-items-end rounded-2">

                                    <span className="ben-pic">{items.picture}</span>

                                    <div className="ben-card-info">
                                        <span className="" style={{color: "#FF4424"}}>{items.icon}</span>

                                        <h5 className="mb-4 mt-4">{items.title}</h5>
                                        
                                        <p className="">{items.description}</p>
                                    </div>
                                </article>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Benefits