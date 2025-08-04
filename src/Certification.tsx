import "./Certification.css";
import Footer from "./Footer";

function Certification() {
  return (
    <>
      <section className="cert-hero" id="cert-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Certification</h1>
          <p>[ Insert text here ]</p>
        </div>
      </section>

      <div className="aboutus-bg">
        <div className="aboutus-aligned-wrapper">
          <div className="aboutus-header">
            <h1>Redefining Aviation Solutions</h1>
            <p>Company Profile</p>
          </div>

          <div className="aboutus-desc">
            <p>
              <span className="bold-word"> HS Aerosystem Sdn. Bhd </span> is a
              <span className="bold-word"> Malaysia Incorporated Company </span>on
              14th of February 2024.
            </p>
            <p>
              <span className="bold-word"> WE </span> are unwavering in our
              focus on <span className="bold-word"> our customers, </span> our
              pride is in
              <span className="bold-word"> our people</span>,
              <span className="bold-word"> our strength </span> are in our
              continuous development and adoption in
              <span className="bold-word"> technology and innovation </span> for
              achieving business operations excellence and our consciences are
              in our influence and impacts we have on the
              <span className="bold-word"> society and environment </span> from
              where we operate.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Certification;
