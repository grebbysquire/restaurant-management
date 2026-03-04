import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Naavbar = () => {
  return (
   <div>
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>

      <Nav className="mx-auto">
        <Nav.Link href="#home"></Nav.Link>
        <Nav.Link href="#features">
          <h1>welcome to restaurent</h1>
        </Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>

    </Container>
  </Navbar>
</div>
  )
}

export default Naavbar
