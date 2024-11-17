// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>© 2023 Cake Shop. All rights reserved.</p>
      </div>
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </footer>
  );
}

export default Footer;
