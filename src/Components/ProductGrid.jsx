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
            pics: <Images src={pro1}/>,
            title: "Pressure Cleaning Machine",
            butt: <ButtonComp/>
        },
        {
            id: 1,
            pics: <Images src={pro2}/>,
            title: "Disinfectant",
            butt: <ButtonComp/>
        },
        {
            id: 1,
            pics: <Images src={pro3}/>,
            title: "Long Brooms",
            butt: <ButtonComp/>
        },
        {
            id: 1,
            pics: <Images src={pro4}/>,
            title: "Dust Pans",
            butt: <ButtonComp/>
        },
        {
            id: 1,
            pics: <Images src={pro5}/>,
            title: "Handheld Pickers",
            butt: <ButtonComp/>
        },
        {
            id: 1,
            pics: <Images src={pro6}/>,
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
       

        <Row className="px-md-5 gy-3 gx-3">
            {productGridArray.map((products) => {
                return (
                    <Col md={4} className="bg-info h-100">
                        <div className="" key={products.id}>
                            {products.pics}
                            <div>
                                <h6>{products.title}</h6>
                                <span>{products.butt}</span>
                            </div>
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