import "./Mission.css";
import Footer from "./Footer";

function Mission() {
  return (
    <div className="mission-container">
      <section className="mission-intro">
        <div className="mission-overlay" id="product-app-start"></div>
        <div className="mission-hero-text">
          <h1> Mission, Vision, Value </h1>
          <p>Purpose-built to reshape aerospace through integrity and innovation.</p>
        </div>
      </section>

      <section className="home-approach">
        <div className="approach-wrapper">
          <h1 className="approach-heading">What Drives Us</h1>
          <p className="approach-sub">
            We align innovation, precision, and performance to deliver tailored
            aerospace solutions. Our methodology ensures seamless execution
            across every phase of our client partnerships.
          </p>

          <div className="approach-block">
            <h2>Mission</h2>
            <p>
              To deliver world-class aerospace solutions through innovative
              design, precision engineering, and unwavering commitment to
              quality and safety.
            </p>
          </div>

          <div className="approach-block">
            <h2>Vision</h2>
            <p>
              To be the trusted partner in redefining the future of aerospace,
              driven by technological excellence, sustainability, and global
              impact.
            </p>
          </div>

          <div className="approach-block">
            <h2>Values</h2>
            <p>
              Integrity, innovation, collaboration, and accountability are the
              pillars that define how we operate, build relationships, and
              exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <div className="core-bg">
        <div className="core-wrapper">
          <h1 className="core-heading">How We Work</h1>
          <p className="core-sub">
            We are guided by principles that define who we are and how we
            operate.
          </p>

          <div className="core-block">
            <h2>Excellence</h2>
            <p>
              A commitment to relentless pursuit in all aspects of aerospace
              manufacturing, setting high standards and constantly striving for
              improvement.
            </p>
          </div>

          <div className="core-block">
            <h2>Innovation</h2>
            <p>
              Embracing cutting-edge technologies and fostering a culture of
              continuous improvement to stay ahead in the aerospace industry.
            </p>
          </div>

          <div className="core-block">
            <h2>Integrity</h2>
            <p>
              Operating with honesty, transparency, and accountability in
              everything we do.
            </p>
          </div>

          <div className="core-block">
            <h2>Integrity</h2>
            <p>
              Operating with honesty, transparency, and accountability in
              everything we do.
            </p>
          </div>

          <div className="core-block">
            <h2>Integrity</h2>
            <p>
              Operating with honesty, transparency, and accountability in
              everything we do.
            </p>
          </div>

          <div className="core-block">
            <h2>Integrity</h2>
            <p>
              Operating with honesty, transparency, and accountability in
              everything we do.
            </p>
          </div>

          {/* Add more values if needed */}
        </div>
      </div>

      <Footer />
    </div> //ENDS aboutus-container
  );
}

export default Mission;
