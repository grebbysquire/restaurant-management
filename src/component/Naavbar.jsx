import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';



const Naavbar = () => {
  return (
   <div>
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>

      <Nav className="mx-auto">
        <Nav.Link href="#home"></Nav.Link>
        <Nav.Link href="#features">
          <div>
          <h1>welcome to Restaurants hub</h1>
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>

    </Container>
  </Navbar>
</div>
  )
}

export default Naavbar
