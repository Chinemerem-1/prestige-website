import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Images from './Images';
import imag from "../assets/WhatsApp_Image_2025-06-05_at_12.51.10_e39f890f-removebg-preview 1.png"

function NavHeader() {

  const navC = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  return (
    <Navbar expand="lg" className="px-md-5 py-md-3">
      <Container fluid className='px-md-0 mx-md-5 d-flex gap-md-5 '>
        <Navbar.Brand href="/" className=''>
            <Images src={imag}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto w-100 justify-content-end gap-md-5 d-flex  navBar">
            <Nav.Link style={navC} href="/">Home</Nav.Link>
            <Nav.Link style={navC} href="/About">About</Nav.Link>

            <NavDropdown style={navC} title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item style={navC} href="/sec1">Residential Cleaning</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/sec2">Janitorial Cleaning</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/sec3">Supply Of Materials</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/sec4">Post Construction Cleaning</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/sec5">Fumigation/Pest Control</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/sec6">Industrial Cleaning</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={navC} href="/Blog">Blog</Nav.Link>
            <Nav.Link style={navC} href="/Project">Project</Nav.Link>
            <Nav.Link style={navC} href="/Contact">Contact</Nav.Link>
            <Button as={Link} to="/Login" className='ms-md-5' style={{backgroundColor: "#A44730", border: "none", padding: "10px 40px", borderRadius: "10px", fontFamily: "Montserrat", color: "white", fontSize: 16, fontWeight: 500}}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;