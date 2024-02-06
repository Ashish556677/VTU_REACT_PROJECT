import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image } from 'react-bootstrap';

const Header = () => {
    return(
        <header>
        <Navbar className='Navbar-style' expand="lg">
            <Container >
            <Navbar.Brand href="#home">
                <Image className='img-style' src="/images/logo.jpg" alt="VTU" roundedCircle/>
                <h6 className='logo-text-style'>Visvervaya Technological University, Belagavi</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            <NavDropdown title="Academic" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Circulars & Notification</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Certificate issue</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Examinaton" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Examination Guidlines</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Examination Applications</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Result</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="VTU departments " id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Civil Engineering</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mechanical Engineering</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Computer Science Engineering</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login as Admin</NavDropdown.Item>
            </NavDropdown>

            </Nav>

            </Navbar.Collapse>

            </Container>

        </Navbar>

        </header>
    )

} 
export default Header;
