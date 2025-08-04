import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/home#home-intro">
            <img
              src="https://static.wixstatic.com/media/58d4da_c10b3dab780347f196b31c5f52565732~mv2.png/v1/fill/w_333,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hs%20Logo-color%20w.png"
              alt="HS Aerosystem"
              className="footer-logo-img"
              loading="lazy"
              fetchPriority="high"
            />
          </Link>
          <p>
            Sendayan Techvalley, PT42837,
            <br />
            Jalan Tech Valley 1/2, Bandar Sri Sendayan,
            <br />
            71950 Seremban, Negeri Sembilan
          </p>
          <p>Phone: +60 6 7921886</p>
          <p>
            E-mail:{" "}
            <a href="mailto:admin@hsaerosystem.com">admin@hsaerosystem.com</a>
          </p>
          <p className="linkedin-link">
            <a
              href="https://www.linkedin.com/company/hsaerosystem" // Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg
"
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>
              <Link to="/aboutus#about-us">About Us</Link>
            </h4>
            <ul>
              <li>
                <Link to="/aboutus#about-us">About Us</Link>
              </li>
              <li>
                <Link to="/aboutus#core-values">Our Core Values</Link>
              </li>
              <li>
                <Link to="/aboutus#our-journey">Our Journey</Link>
              </li>
              <li>
                <Link to="/aboutus#cert">Certifications</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>
              <Link to="/process#process-cap">Process Capability</Link>
            </h4>
            <ul>
              <li>
                <Link to="/process#01">Precision Sheet Metal</Link>
              </li>
              <li>
                <Link to="/process#02">CNC Machining</Link>
              </li>
              <li>
                <Link to="/process#03">Assembly and Testing</Link>
              </li>
              <li>
                <Link to="/process#04">Quality Capability</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>
              <Link to="/product#product-app-start">Product Application</Link>
            </h4>
            <ul>
              <li>
                <Link to="/product#aircraft-seats-system">
                  Aircraft Seats System
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>
              <Link to="/career#career-page">Career</Link>
            </h4>
            <ul>
              <li>
                <Link to="/home#contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
