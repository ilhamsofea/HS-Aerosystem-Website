import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ScrollToHash from "./ScrollToHash";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ProductApp from "./ProductApp";
import ProcessCap from "./ProcessCap";
import Career from "./Career";
import ContactUs from "./ContactUs";
import LogoWhite from "./LogoWhite";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <Link to="/home">
            <LogoWhite />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={menuOpen ? "mobile-open" : ""}>
          <ul>
            <li>
              <Link to="/home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/process" onClick={closeMenu}>
                Process Capability
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={closeMenu}>
                Product Application
              </Link>
            </li>
            <li>
              <Link to="/career" onClick={closeMenu}>
                Career
              </Link>
            </li>
            <li>
              <Link to="/home#contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="/process" element={<ProcessCap />} />
        <Route path="/product" element={<ProductApp />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
