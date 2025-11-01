import React, { useState } from 'react';
import "./normalnavbar.css";
import { Link } from 'react-router-dom';
const NormalNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleEmail = () => {
        window.open("mailto:mdamico115@gmail.com");
    }
  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
      
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Homepage</Link>
        <Link to="/graphicdesign" onClick={() => setIsOpen(false)}>Graphic Design</Link>
        <a href="#services" onClick={() => setIsOpen(false)}>Personal Projects</a>
        <a onClick={() => { setIsOpen(false); handleEmail(); }}>Contact</a>
      </div>
      
      <div className="nav-logo"></div>
    </nav>
  );
}
export default NormalNavbar;