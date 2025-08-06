import "./AboutUs.css";
import Footer from "./Footer";
import { useState } from "react";

const images = [
  "./assets/AboutUs/model.JPG",
  "./assets/AboutUs/machine1.JPG",
  "./assets/AboutUs/model1.JPG",
  "./assets/AboutUs/machine2.JPG",
  "./assets/AboutUs/model2.JPG",
  "./assets/AboutUs/machine3.JPG",
  "./assets/AboutUs/model3.JPG",
  "./assets/AboutUs/assembly1.jpg",
];

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="aboutus-hero" id="aboutus-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Overview</h1>
          <p>
            HS Aerosystem Sdn. Bhd is where expertise meets aerospace
            excellence.
          </p>
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
              <span className="bold-word"> Malaysia Incorporated Company </span>
              on 14th of February 2024.
            </p>

            {/* --- CAROUSEL START --- */}
            <div className="carousel">
              <button className="carousel-btn left" onClick={handlePrev}>
                ‹
              </button>
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="img-1"
              />
              <button className="carousel-btn right" onClick={handleNext}>
                ›
              </button>
            </div>
            {/* --- CAROUSEL END --- */}

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

export default AboutUs;
