import "./Certification.css";
import Footer from "./Footer";

function Certification() {
  return (
    <>
      <section className="cert-hero" id="cert-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1> Certification & Standard </h1>
          <p>
            Our certifications demonstrate our compliance with global standards
            and our dedication to quality, safety, and performance.
          </p>
        </div>
      </section>

      <section className="cert-section">
        <div className="cert-wrapper">
          <h1>Recognized for Excellence</h1>
          <p>
            Upholding global benchmarks — discover the certifications that
            define our commitment to quality and compliance.
          </p>

          {/* Certifications Grid */}
          <div className="cert-grid">
            <div className="cert-card">
              <img src="/assets/Cert/cert1.png" alt="cert1" />
              <h3>Cert1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>

            <div className="cert-card">
              <img src="/assets/Cert/cert2.jpg" alt="cert2" />
              <h3>Cert2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="cert-card">
              <img src="/assets/Cert/cert4.png" alt="cert3" />
              <h3>Cert3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Add more certifications if needed (repeat certification grid) */}
          </div>

          <div className="cert-downloads">
            <h2>Download Certificates</h2>
            <ul>
              <li>
                <a href="/assets/Cert/cert1.pdf" target="_blank">
                  cert1 (PDF)
                </a>
              </li>
              <li>
                <a href="/assets/Cert/cert2.pdf" target="_blank">
                  cert2 (PDF)
                </a>
              </li>
              <li>
                <a href="/assets/Cert/cert4.pdf" target="_blank">
                  cert3 (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Certification;
