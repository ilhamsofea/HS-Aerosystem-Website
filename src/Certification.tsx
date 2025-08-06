import "./Certification.css";
import Footer from "./Footer";

function Certification() {
  return (
    <>
      <section className="cert-hero" id="cert-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Certification & Standards</h1>
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

          <div className="cert-grid">

             {/*REPEAT - to add more cert*/}
            <div className="cert-card">
              <img src="/assets/Cert/cert1.png" alt="cert1" />
              <h3>AS9100 Certification</h3>
              <p>
                Certification ensuring our quality management system meets
                aerospace industry standards.
              </p>
              <div className="cert-card-actions">
                <a href="/assets/Cert/cert1.png" target="_blank" rel="noopener noreferrer">
                  View Full
                </a>
                <a href="/assets/Cert/cert1.pdf" target="_blank" rel="noopener noreferrer">
                  ⬇ Download PDF
                </a>
              </div>
            </div>
            {/* END REPEAT */}

            <div className="cert-card">
              <img src="/assets/Cert/cert2.jpg" alt="cert2" />
              <h3>ISO 9001 Certification</h3>
              <p>
                Global standard for quality management and continual improvement
                across our processes.
              </p>
              <div className="cert-card-actions">
                <a href="/assets/Cert/cert2.jpg" target="_blank" rel="noopener noreferrer">
                  View Full
                </a>
                <a href="/assets/Cert/cert2.pdf" target="_blank" rel="noopener noreferrer">
                  ⬇ Download PDF
                </a>
              </div>
            </div>

            <div className="cert-card">
              <img src="/assets/Cert/cert4.png" alt="cert3" />
              <h3>OHSAS 18001 Certification</h3>
              <p>
                Occupational health and safety certification ensuring a safe and
                healthy working environment.
              </p>
              <div className="cert-card-actions">
                <a href="/assets/Cert/cert4.png" target="_blank" rel="noopener noreferrer">
                  View Full
                </a>
                <a href="/assets/Cert/cert4.pdf" target="_blank" rel="noopener noreferrer">
                  ⬇ Download PDF
                </a>
              </div>
            </div>

            <div className="cert-card">
              <img src="/assets/Cert/cert4.png" alt="cert3" />
              <h3>OHSAS 18001 Certification</h3>
              <p>
                Occupational health and safety certification ensuring a safe and
                healthy working environment.
              </p>
              <div className="cert-card-actions">
                <a href="/assets/Cert/cert4.png" target="_blank" rel="noopener noreferrer">
                  View Full
                </a>
                <a href="/assets/Cert/cert4.pdf" target="_blank" rel="noopener noreferrer">
                  ⬇ Download PDF
                </a>
              </div>
            </div>

                        <div className="cert-card">
              <img src="/assets/Cert/cert4.png" alt="cert3" />
              <h3>OHSAS 18001 Certification</h3>
              <p>
                Occupational health and safety certification ensuring a safe and
                healthy working environment.
              </p>
              <div className="cert-card-actions">
                <a href="/assets/Cert/cert4.png" target="_blank" rel="noopener noreferrer">
                  View Full
                </a>
                <a href="/assets/Cert/cert4.pdf" target="_blank" rel="noopener noreferrer">
                  ⬇ Download PDF
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Certification;
