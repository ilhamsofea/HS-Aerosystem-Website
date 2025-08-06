import "./Certification.css";
import Footer from "./Footer";
import { useEffect } from "react";

function Certification() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(".cert-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
            {/* CERT CARD – REPEAT AS NEEDED */}
            <div className="cert-card">
              <img src="/assets/Cert/cert1.png" alt="cert1" />
              <h3>AS9100 Certification</h3>
              <p>
                Certification ensuring our quality management system meets
                aerospace industry standards.
              </p>
              <div className="cert-card-actions">
                <a
                  href="/assets/Cert/cert1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full
                </a>
                <a
                  href="/assets/Cert/cert1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⬇ Download PDF
                </a>
              </div>
            </div>
            {/*CERT CARD END */}

            <div className="cert-card">
              <img src="/assets/Cert/cert1.png" alt="cert1" />
              <h3>AS9100 Certification</h3>
              <p>
                Certification ensuring our quality management system meets
                aerospace industry standards.
              </p>
              <div className="cert-card-actions">
                <a
                  href="/assets/Cert/cert1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full
                </a>
                <a
                  href="/assets/Cert/cert1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⬇ Download PDF
                </a>
              </div>
            </div>

            <div className="cert-card">
              <img src="/assets/Cert/cert1.png" alt="cert1" />
              <h3>AS9100 Certification</h3>
              <p>
                Certification ensuring our quality management system meets
                aerospace industry standards.
              </p>
              <div className="cert-card-actions">
                <a
                  href="/assets/Cert/cert1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full
                </a>
                <a
                  href="/assets/Cert/cert1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⬇ Download PDF
                </a>
              </div>
            </div>

            {/* ^ Add above here for new certs */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Certification;
