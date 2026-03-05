import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Naavbar = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Navbar.Brand onClick={() => navigate("/Dashboard")}>
            Restaurant Hub
          </Navbar.Brand>

          <Nav className="mx-auto" style={{display:'flex', flexWrap:'wrap'}}>

            <Nav.Link 
              style={{display:"flex", alignItems:"center"}} 
              onClick={() => navigate("/Dashboard")}
            >
              <FaHome style={{marginRight:"6px"}} />
              Home
            </Nav.Link>

            <Nav.Link 
              style={{display:"flex", alignItems:"center"}} 
              onClick={() => navigate("/about")}
            >
              <FaInfoCircle style={{marginRight:"6px"}} />
              About
            </Nav.Link>

            <Nav.Link 
              style={{display:"flex", alignItems:"center"}} 
              onClick={() => navigate("/contact")}
            >
              <FaEnvelope style={{marginRight:"6px"}} />
              Contact
            </Nav.Link>

          </Nav>

        </Container>
      </Navbar>

      <div style={{textAlign:"center",}}>
        
      </div>

    </div>
  )
}

export default Naavbar