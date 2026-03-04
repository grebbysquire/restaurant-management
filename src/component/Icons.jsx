
import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Navbar.css'; // Optional: for styling

function Navbar() {
  return (
    <header>
      <h2>My Logo</h2>
      <nav>
        <a href="/">
          <FaHome /> Home
        </a>
        <a href="/about">
          <FaInfoCircle /> About
        </a>
        <a href="/contact">
          <FaEnvelope /> Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
