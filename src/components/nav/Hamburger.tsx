import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./Navlink";
import "./Nav.css";

export const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("hej");
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="hamburger-btn"
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
      {isMenuOpen && (
        <nav className="hamburger-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path} className="navLink">
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
