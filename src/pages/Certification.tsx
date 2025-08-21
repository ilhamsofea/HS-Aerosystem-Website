import "./Certification.css";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { certificationData } from "../data/certificationData"; // adjust path if needed

function Certification() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="cert-hero">
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
            {certificationData.map((cert, index) => (
              <div className="cert-card" key={index}>
                <img src={cert.image} alt={cert.title} />
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <div className="cert-card-actions">
                  <a
                    href={cert.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full
                  </a>
                  <a
                    href={cert.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⬇ Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Certification;
