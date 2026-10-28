import { Container, Row, Col } from "react-bootstrap"
import Images from "../Components/Images"
import faqimg from "../assets/section3.svg"
import imgC from "../assets/stars.png"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";

const FAQComponent = ({faqHolder, starcolor}) => {
     const accordionStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const faqArray = [
            {
                id:1,
                question: 'What types of cleaning services do you offer?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:2,
                question: 'Do I need to provide any cleaning supplies or equipment?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:3,
                question: 'Are your cleaners trained and background-checked?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:4,
                question: 'How long does a typical cleaning take?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:5,
                question: 'Do I need to be home during the cleaning?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

        ]

        const [openID, setOpenID] = useState(1);

        const toggleItem =(id) => {
            setOpenID(openID === id ? null : id);
        };

  return (
    <Container fluid className="ps-md-5 pe-md-0 py-5 bg-danger" style={faqHolder}>
        
        <Row className="g-0 ps-md-5 justify-content-between">
            <Col md={5} className="faqcomp-holder d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-0 mb-4">
                    <Images src={imgC}/>
                    <p className="mb-0" style={accordionStyle}>FREQUENTLY ASKED QUESTIONS</p>
                </div>

                {faqArray.map((items) => {
                    const isOpen = openID === items.id;
                    return (
                        <div className="faq-card py-3 px-4 rounded-4" style={{backgroundColor: "rgba(217, 217, 217, 0.3)"}} key={items.id}>

                            <button className="faqcomp-header d-flex align-items-center gap-3 w-100 bg-transparent border-0 p-0 text-start" onClick={() => toggleItem(items.id)}>
                                <span className="faqcomp-icon " style={{color: "#3A65F2"}}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                                <span className="faqcomp-question">{items.question}</span>
                            </button>
                            
                            {isOpen && (
                                <div className="faqcomp-body ps-4 mt-2 text-muted">
                                    <p className="mb-0">{items.answer}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </Col>

           <Col md={6} className="faq-Img-holder pb-md-4 overflow-hidden">
                <Images src={faqimg} className="d-block ms-auto faq-Img"/>
                <WiStars size={40} className="star-faq1" style={{color: starcolor}}/>
                <WiStars size={40} className="star-faq2" style={{color: starcolor}}/>
                <WiStars size={40} className="star-faq3" style={{color: starcolor}}/>
                <WiStars size={40} className="star-faq4" style={{color: starcolor}}/>
                <WiStars size={40} className="star-faq5" style={{color: starcolor}}/>
            </Col>
        </Row>
    </Container>
  )
}
export default FAQComponent