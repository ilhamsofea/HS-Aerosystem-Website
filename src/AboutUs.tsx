import "./AboutUs.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);

  return (
    <>
      <section className="aboutus-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Overview</h1>
          <p>
            HS Aerosystem Sdn. Bhd is where expertise meets aerospace
            excellence.
          </p>
        </div>
      </section>

      <div className="aboutus-section">
        <div className="aboutus-wrapper">
          <div className="aboutus-header">
            <h1>Redefining Aviation Solutions</h1>
            <p>Company Profile</p>
          </div>

          <div className="aboutus-desc">
            <p>
              <strong>HS Aerosystem Sdn. Bhd </strong> is a
              <strong> Malaysia Incorporated Company </strong>
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
              We are unwavering in our focus on
              <strong> our customers, </strong> our pride is in
              <strong> our people</strong>,<strong> our strength </strong> are
              in our continuous development and adoption in
              <strong> technology and innovation </strong> for achieving
              business operations excellence and our consciences are in our
              influence and impacts we have on the
              <strong> society and environment </strong> from where we operate.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
