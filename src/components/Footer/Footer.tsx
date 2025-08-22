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
              href="https://www.linkedin.com/company/hsaerosystem"
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
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to="/aboutus">Overview</Link>
              </li>
              <li>
                <Link to="/journey">Our Journey</Link>
              </li>
              <li>
                <Link to="/mission">Vision, Mission, Value</Link>
              </li>
              <li>
                <Link to="/team">Leadership & Team</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Our People</h4>
            <ul>
              <li>
                {/* <Link to="/recognition">Employee Recognition</Link> */}
              </li>
              <li>
                <Link to="/csr">Corporate Social Responsibility</Link>
              </li>
              <li>
                {/* <Link to="/hear">Hear From Our Employee</Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h4>Core Capabilities</h4>
            <ul>
              <li>
                <Link to="/process">Process Capability</Link>
              </li>
              <li>
                <Link to="/certification">Certifications & Standard</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>News & Updates</h4>
            <ul>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/activity">Employee Activities</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 HS Aerosystem</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
