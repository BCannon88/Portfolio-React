import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function Navigation(expand) {

    return (
        <Navbar fixed="top" bg="warning" expand="lg">
            <Container>
                <Navbar.Brand href="/">Baron Cannon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#projects">Portfolio</Nav.Link>
                    <Nav.Link href="#contact-form">Contact Me</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;