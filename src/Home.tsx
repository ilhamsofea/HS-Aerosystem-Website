import "./Home.css";
import Footer from "./Footer";
import newsData from "./newsData";
import { aboutusPic } from "./homeData";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

//  Our Clients Logos
const clientLogos = [
  "https://static.wixstatic.com/media/58d4da_05e93af3775642978dde831b88722959~mv2.png/v1/fill/w_244,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/collinsaero.png",
  // Add more client logo here when available
];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prev) => (prev - 1 + aboutusPic.length) % aboutusPic.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev + 1) % aboutusPic.length);
  };

  // Our Clients animation
  const shouldScroll = useMemo(() => clientLogos.length > 5, []); //only scroll if client > 5

  // Contact Us form logics
  const [submitted, setSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "239b6e19-cd81-411e-ae75-a870be8b6036");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setFormKey((prev) => prev + 1);
        }, 2000);
      } else {
        console.error("Form submission failed:", res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    // START container
    <>
      <section className="home-hero" id="home-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>
            Commited to Quality <br /> Driven by Passion
          </h1>
        </div>
      </section>

      <section className="home-about-us">
        <div className="aboutus-left">
          <p className="section-label">OUR STORY</p>
          <h2>Who We Are</h2>
          <p>
            We are a forward-thinking aerospace manufacturer committed to
            precision, quality, and progress. Our passion drives every solution
            we deliver to our partners.
          </p>
          <Link to="/aboutus" className="section-link">
            Learn more about us →
          </Link>
          <div className="aboutus-nav">
            <button onClick={handleNext}>&larr;</button>
            <button onClick={handlePrev}>&rarr;</button>
          </div>
        </div>

        <div className="aboutus-slider">
          {aboutusPic.map((item, index) => {
            let className = "aboutus-card";
            const lastIndex =
              (slideIndex - 1 + aboutusPic.length) % aboutusPic.length;

            if (index === slideIndex) {
              className += " center";
            } else if (index === lastIndex) {
              className += " left";
            } else {
              className += " hidden";
            }

            return (
              <div key={index} className={className}>
                <img src={item.img} loading="lazy" alt={item.title} />
                <div className="overlay">
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-career-preview">
        <div className="career-main-container">
          <div className="career-left">
            <p className="section-label">JOIN US</p>
            <h1>Launch your Career Here</h1>
            <p className="career-description">
              Looking to be part of an innovative team shaping the future of
              aerospace? Explore career opportunities and be part of our growth.
            </p>
            <Link to="/career">
              <button className="career-btn">Find Out More</button>
            </Link>
          </div>

          <div className="career-employee-highlight">
            <p className="employee-subtitle">EMPLOYEE SPOTLIGHT</p>
            <h2>Best Employee of the Month</h2>
            <div className="employee-content">
              <div className="employee-photo">
                <img src="/assets/Team/default.jpg" />
              </div>
              <div className="employee-details">
                <h4>Muhammad Annas bin Mohd Kamil</h4>
                <p className="employee-role">Lead NC Programmer</p>
                <p className="employee-quote">
                  <em>
                    “Every challenge is an opportunity to build something
                    better.”
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-news-section">
        <p className="section-label">NEWS & UPDATES</p>
        <h2 className="news-title">Sharing Our Milestones and Moments</h2>
        <p className="news-subtitle">
          Discover how we’re growing, innovating, and connecting through our
          latest stories.
        </p>

        <div className="news-carousel">
          {newsData.map((item) => (
            <div className="news-card-home" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p className="news-summary">{item.preview}</p>
                <Link to={`/news/${item.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-our-clients">
        <div className="our-clients">
          <p className="section-label">OUR CLIENTS</p>
          <h1 className="clients-title">Empowering Progress Together</h1>
          <p className="clients-subtitle">
            We believe every client is a valuable, long-term partner.
          </p>

          <Link to="/customer">
            <button className="client-btn">Find Out More</button>
          </Link>

          {/* <div className="client-marquee">
            <div className={`client-track ${shouldScroll ? "scrolling" : ""}`}>
              {clientLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Client ${index + 1}`} />
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <section className="home-contact-us" id="contact-us">
        <div className="contact-layout">
          <div className="contact-info">
            <p className="section-label">REACH OUT TO US</p>
            <h3>Let’s Work Together</h3>
            <p>
              We’re ready to listen. Reach out with your questions, ideas, or
              projects — and let’s create something impactful.
            </p>
          </div>

          <div className="contact-form-wrapper">
            <form
              key={formKey}
              className="form-grid"
              onSubmit={handleFormSubmit}
            >
              <h2 className="form-title">Contact Us</h2>

              {submitted && (
                <p className="success-message">Form submitted successfully!</p>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input name="last_name" type="text" placeholder="Last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input name="phone" type="tel" placeholder="Phone number" />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </> //ENDS container
  );
};

export default Home;
