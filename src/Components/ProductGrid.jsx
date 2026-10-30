import { Container, Row, Col } from "react-bootstrap"
import Images from "./Images"
import imgC from "../assets/stars.png"
import ButtonComp from "./ButtonComp"
import pro1 from "../assets/product1.png"
import pro2 from "../assets/product2.png"
import pro3 from "../assets/product3.png"
import pro4 from "../assets/product4.png"
import pro5 from "../assets/product5.png"
import pro6 from "../assets/product6.png"

const ProductGrid = () => {

    const productGridArray = [
        {
            id: 1,
            pics: <Images src={pro1} className="img-fluid"/>,
            title: "Pressure Cleaning Machine",
            butt: <ButtonComp/>
        },
        {
            id: 2,
            pics: <Images src={pro2} className="img-fluid"/>,
            title: "Disinfectant",
            butt: <ButtonComp/>
        },
        {
            id: 3,
            pics: <Images src={pro3} className="img-fluid"/>,
            title: "Long Brooms",
            butt: <ButtonComp/>
        },
        {
            id: 4,
            pics: <Images src={pro4} className="img-fluid"/>,
            title: "Dust Pans",
            butt: <ButtonComp/>
        },
        {
            id: 5,
            pics: <Images src={pro5} className="img-fluid"/>,
            title: "Handheld Pickers",
            butt: <ButtonComp/>
        },
        {
            id: 6,
            pics: <Images src={pro6} className="img-fluid"/>,
            title: "Speed Blowers",
            butt: <ButtonComp/>
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
    <>
     <Container fluid className="px-md-5">
        <div className="px-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
                <Images src={imgC}/>
                <p className="mb-0" style={headStyle}>EXPLORE OUR PRODUCTS</p>
            </div>
            <h3 style={headLabel}>Trusted Materials You Can Trust</h3>
        </div>
       

        <Row className= "px-md-5 gx-md-0 gy-4 py-4">
            {productGridArray.map((products) => {
                return (
                    <Col md={4} className="product-card d-flex justify-content-center">
                        
                            <div className="product-img">
                                {products.pics}
                            </div>

                            <div className="product-info">
                                <h6>{products.title}</h6>
                                <span>{products.butt}</span>
                            </div>
                       
                    </Col>
                )
            })}
        </Row>
     </Container>
    </>
  )
}

export default ProductGrid