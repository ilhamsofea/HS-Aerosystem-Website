import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ProductApp from "./ProductApp";
import ProcessCap from "./ProcessCap";
import Career from "./Career";
import ContactUs from "./ContactUs";
import LogoWhite from "./LogoWhite";

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <Link to="/home">
            <LogoWhite />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/process">Process Capability</Link>
            </li>
            <li>
              <Link to="/product">Product Application</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/home#contact-us">Contact Us</Link>
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
