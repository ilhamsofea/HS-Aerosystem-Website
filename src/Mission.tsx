import "./Mission.css";
import Footer from "./Footer";
import { useEffect } from "react";

function Mission() {
  return (
    // START Container
    <>
      <section className="mission-hero" id="mission-start">
        <div className="overlay" id="product-app-start"></div>
        <div className="hero-text">
          <h1> Mission, Vision, Value </h1>
          <p>
            Purpose-built to reshape aerospace through integrity and innovation.
          </p>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-wrapper">
          <h1>What Drives Us</h1>
          <p>
            We align innovation, precision, and performance to deliver tailored
            aerospace solutions. Our methodology ensures seamless execution
            across every phase of our client partnerships.
          </p>

          <div className="approach-block">
            <h2>Vision</h2>
            <p>
              To lead aerospace manufacturing with innovation, sustainability,
              and excellence, setting global benchmarks and inspiring a
              connected world.
            </p>
          </div>

          <div className="approach-block">
            <h2>Mission</h2>
            <p>
              We are dedicated to advancing the regional aerospace industry
              through innovation, customer focus, and ethical, sustainable
              practices. By embracing technology and fostering an inclusive,
              people-centered workplace, we strive to create lasting value for
              our customers, employees, and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <div className="value-section">
        <div className="value-wrapper">
          <h1>How We Work</h1>
          <p>
            We are guided by principles that define who we are and how we
            operate.
          </p>

          <div className="core-block">
            <h2>Leadership</h2>
            <p>
              A dedication to being a leader on the global stage in aerospace
              manufacturing, taking initiatives that positions the company at
              the forefront of the industry.
            </p>
          </div>

          <div className="core-block">
            <h2>Ethical Practises</h2>
            <p>
              Adherence to the ethical principles in all business operations,
              ensuring the integrity, transparency and responsible conduct.
            </p>
          </div>

          <div className="core-block">
            <h2>Sustainability</h2>
            <p>
              A commitment to sustainable practices, both environmentally and
              socially, with a focus on minimizing the company's environmental
              footprint and positively influencing the interconnected world.
            </p>
          </div>

          <div className="core-block">
            <h2>Leveraging</h2>
            <p>
              We leverage on the strength of our people, our customers and
              partners to overcome challenges in the journey we are achieving.
            </p>
          </div>

          <div className="core-block">
            <h2>Innovation</h2>
            <p>
              Emphasizing the importance of cutting-edge technology and
              forward-thinking mindset to drive advancements and redefine
              industry standards.
            </p>
          </div>

          <div className="core-block">
            <h2>Excellence</h2>
            <p>
              A commitment to relentless pursuit in all aspects of aerospace
              manufacturing, setting high standards and constantly striving for
              improvement.
            </p>
          </div>

          {/* Add more values if needed */}
        </div>
      </div>

      <Footer />
    </> //ENDS aboutus-container
  );
}

export default Mission;
