import "./Home.css";
import Footer from "./Footer";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

const clientLogos = [
  "https://static.wixstatic.com/media/58d4da_05e93af3775642978dde831b88722959~mv2.png/v1/fill/w_244,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/collinsaero.png",
  // Add more client logo here when available
];

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("reveal");
            // observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timeout = setTimeout(() => {
      const slides = document.querySelectorAll(".inner-slide");
      slides.forEach((slide) => observer.observe(slide));
    }, 100); // Delay to ensure elements are in the DOM

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const shouldScroll = useMemo(() => clientLogos.length > 5, []); //only scroll if client > 5

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

        // Logics for Contact Us form
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
    <>
      <div className="home-intro" style={{ paddingTop: "30px" }}>
        <h1 className="aboutus-title">
          Commited to Quality <br /> Driven by Passion
        </h1>
        <p className="aboutus-heading">
          Innovation-driven solutions for modern aviation
        </p>
        <img
          src="https://static.wixstatic.com/media/58d4da_01f43d142c9c4a08a3453145066b133c~mv2.png/v1/fill/w_638,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/place-flying-sunset-sky_edited.png"
          className="img-1"
          alt="Flying Plane"
        />
      </div>

      <section className="home-about-us">
        <div className="sticky-header">
          <h1 className="sticky-title">About Us</h1>
          <Link to="/aboutus#about-us" className="learn-more-btn">
            Learn More
          </Link>
        </div>

        <div className="scrollable-slides">
          <div className="inner-slide why-choose-slide">
            <div className="slide-content">
              <div className="text-section">
                <h2 className="slide-title">Why Choose Us?</h2>
                <p className="slide-description-temp">
                  Engineering aerospace solutions that meet industry demands
                  with accuracy and consistency.
                </p>
              </div>
            </div>
          </div>

          <div className="inner-slide landscape-slide">
            <div className="slide-content">
              <div className="text-section">
                <p className="slide-number">01</p>
                <h2 className="slide-title">Process Capability</h2>
                <p className="slide-description">
                  In terms of sheet metal production, it covers from the start
                  of thin plates to the final product. By using cutting CNC
                  punching machines and other equipment, parts with micron-level
                  precision can be produced; at the same time, with the latest
                  horizontal and vertical CNC machining centers, we have the
                  ability to deal with the industry's most advanced CNC
                  machining centers. Complex parts as well as various alloys to
                  meet custom needs.
                </p>
              </div>
              <div className="image-wrapper">
                <div className="image-frame">
                  <img
                    src="./assets/Home/process-cap.JPG"
                    alt="Process Capability"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="inner-slide landscape-slide">
            <div className="slide-content">
              <div className="text-section">
                <p className="slide-number">02</p>
                <h2 className="slide-title">Assembly Capacity</h2>
                <p className="slide-description">
                  We have reached the assembly capacty of 500 types and 50000
                  parts per month, which can help customers reduce the cost and
                  complexity of supply chain management, and at the same time
                  make more space for final assembly capacity for customers.
                </p>
              </div>
              <div className="image-wrapper">
                <div className="image-frame">
                  <img
                    src="./assets/Home/assembly-cap.JPG"
                    alt="Assembly Capacity"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="inner-slide landscape-slide">
            <div className="slide-content">
              <div className="text-section">
                <p className="slide-number">03</p>
                <h2 className="slide-title">Special Process Capability</h2>
                <p className="slide-description">
                  We have non-destructive testing, chemical surface treatment,
                  powder spraying, painting and other metal surface treatment
                  equipment. We also have carbon dioxide welding, argon arc
                  welding, brazing and robot welding capabilities.{" "}
                </p>
              </div>
              <div className="image-wrapper">
                <div className="image-frame">
                  <img
                    src="./assets/Home/special-proc.JPG"
                    alt="Special Process Capability"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="inner-slide landscape-slide">
            <div className="slide-content">
              <div className="text-section">
                <p className="slide-number">04</p>
                <h2 className="slide-title">Testing Center</h2>
                <p className="slide-description">
                  NitonXL3t Portable Alloy Analyzer, Webster Hardness Tester,
                  Rockwell Hardness Tester, 2D/2.5D/3D Tester,
                  Spectrophotometer, Coating Thickness Gauge, Color Difference
                  Tenser, Tensile Strength Tester, Salt Spray Tester, CMM, 2D
                  projector, Electronic Testing Equipment, Chemical Testing.{" "}
                </p>
              </div>
              <div className="image-wrapper">
                <div className="image-frame">
                  <img src="./assets/Home/testing2.JPG" alt="Testing Center" />
                </div>
              </div>
            </div>
          </div>

          {/* add here if want to add more slides */}
        </div>
      </section>

      <section className="home-approach">
        <h2 className="approach-title">Driven by Vision, Powered by Values</h2>
        <p className="approach-description">
          We align innovation, precision, and performance to deliver tailored
          aerospace solutions. Our methodology ensures seamless execution across
          every phase of our client partnerships.
        </p>

        <div className="approach-card-container">
          <div className="approach-card">
            <div className="card-logo">
              <img
                src="https://static.wixstatic.com/media/58d4da_c248db5fbe0040baade3a9fb7f59a729~mv2.png/v1/fill/w_43,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HS%20Logo%20icon.png"
                alt="HS Logo"
              />
            </div>
            <h3>Mission</h3> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>

          <div className="approach-card">
            <div className="card-logo">
              <img
                src="https://static.wixstatic.com/media/58d4da_c248db5fbe0040baade3a9fb7f59a729~mv2.png/v1/fill/w_43,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HS%20Logo%20icon.png"
                alt="HS Logo"
              />
            </div>
            <h3>Vision</h3> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>

          <div className="approach-card">
            <div className="card-logo">
              <img
                src="https://static.wixstatic.com/media/58d4da_c248db5fbe0040baade3a9fb7f59a729~mv2.png/v1/fill/w_43,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HS%20Logo%20icon.png"
                alt="HS Logo"
              />
            </div>
            <h3>Value</h3> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>
        </div>
      </section>

      <section className="home-our-clients">
        <div className="our-clients">
          <h1 className="clients-title">Our Clients</h1>
          <p className="clients-subtitle">
            We believe every client is a valuable, long-term partner.
          </p>

          <div className="client-marquee">
            <div className={`client-track ${shouldScroll ? "scrolling" : ""}`}>
              {clientLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Client ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact-us" id="contact-us">
        <div className="contact-layout">
          <div className="contact-info">
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
