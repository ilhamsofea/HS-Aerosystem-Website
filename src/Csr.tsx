import "./Csr.css";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { csrPillars, impactStats, csrStories } from "./csrData";

function Csr() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <section className="csr-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Corporate Social Responsibility</h1>
          <p>
            Driving change through sustainability, community engagement, and
            education.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="csr-section">
        <div className="csr-wrapper">
          <h2>Our CSR Commitment</h2>
          <p>
            We believe in creating a lasting positive impact through our
            Corporate Social Responsibility programs. Our efforts focus on
            sustainability, community empowerment, and education initiatives.
          </p>
        </div>
        <div className="pillar-grid">
          {csrPillars.map((pillar, index) => (
            <div className="pillar-card" key={index}>
              <img
                src={pillar.icon}
                alt={pillar.title}
                className="pillar-icon"
              />
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="csr-stats">
        {impactStats.map((stat, index) => (
          <div className="stat" key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Stories */}
      <section className="csr-stories">
        <h2>Our Stories</h2>
        <div className="stories-grid">
          {csrStories.map((story, index) => (
            <div className="story-card" key={index}>
              <img src={story.image} alt={story.title} />
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="csr-cta">
        <h2>Join Us in Making a Difference</h2>
        <p>
          Partner with us to create meaningful change in communities worldwide.
        </p>
        {/* <a href="/home#contact-us" className="csr-btn">
          Contact Us
        </a> */}
        <Link className="csr-btn" to="/home#contact-us">Contact Us</Link>
      </section>

      <Footer />
    </>
  );
}

export default Csr;
