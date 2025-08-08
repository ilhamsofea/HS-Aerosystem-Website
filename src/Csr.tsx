import "./Csr.css";
import Footer from "./Footer";
import { useEffect } from "react";

function Csr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // START Container
    <>
      <section className="csr-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1> Corporate Social Responsibility </h1>
          <p>
          </p>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-wrapper">
          <h1>What Drives Us</h1>
          <p>
            We align innovation, precision, and performance to deliver tailored
            aerospace solutions. Our methodology ensures seamless execution
            across every phase of our client partnerships.
          </p>
        </div>
      </section>

      <Footer />
    </> //ENDS
  );
}


export default Csr;
