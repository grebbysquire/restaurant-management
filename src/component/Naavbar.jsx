import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import "./Naavbar.css"

const Naavbar = () => {

  const navigate = useNavigate()

  return (
    <div>

      <Navbar
        expand="lg"
        className="navbar-container"
      >
        <Container>

          {/* Brand */}

          <Navbar.Brand
            className="brand-title"
            onClick={() => navigate("/Dashboard")}
          >
            Restaurant Hub
          </Navbar.Brand>

          {/* Mobile Toggle */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Nav Links */}

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mx-auto nav-links">

              <Nav.Link
                className="nav-item"
                onClick={() => navigate("/Dashboard")}
              >
                <FaHome className="nav-icon" />
                Home
              </Nav.Link>

              <Nav.Link
                className="nav-item"
                onClick={() => navigate("/about")}
              >
                <FaInfoCircle className="nav-icon" />
                About
              </Nav.Link>

              <Nav.Link
                className="nav-item"
                onClick={() => navigate("/contact")}
              >
                <FaEnvelope className="nav-icon" />
                Contact
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      <div className="bottom-space">
        <h1>Welcome to Restaurant Hub</h1>
       
          
      </div>
      </div>

    
    
  )
}

export default Naavbar