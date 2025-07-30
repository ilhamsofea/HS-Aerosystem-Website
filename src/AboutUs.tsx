import "./AboutUs.css";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <section className="aboutus-intro">
        <div className="aboutus-overlay" id="product-app-start"></div>
        <div className="aboutus-hero-text">
          <h1>Overview</h1>
          <p>HS Aerosystem is where expertise meets aerospace excellence.</p>
        </div>
      </section>

      <div className="aboutus-bg">
        <div className="aboutus-aligned-wrapper">
          <div className="aboutus-intro1">
            <p>Company Profile</p>
            <h1>Redefining Aviation Solutions</h1>
          </div>

          <div className="col">
            <p className="main-p">
              HS Aerosystem Sdn. Bhd is a Malaysia Incorporated Company on 14th
              of February 2024.
              <br />
              <img
                alt="big image"
                src="./assets/AboutUs/model-image3.JPG"
                className="img-1"
              />
              <br />
              We are unwavering in our focus on our customers, our pride is in
              our people, our strengths are in our continuous development and
              adoption in technology and innovations for achieving business
              operations excellence and our consciences are in our influence and
              impacts we have on the society and environment from where we
              operate.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div> //ENDS aboutus-container
  );
}

export default AboutUs;
