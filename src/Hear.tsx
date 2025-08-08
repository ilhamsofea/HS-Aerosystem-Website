import "./Hear.css";
import Footer from "./Footer";
import { useEffect } from "react";

function Hear() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // START Container
    <>
      <section className="hear-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1> Hear From Our Employees </h1>
          <p></p>
        </div>
      </section>

      <section className="hear-section">
        <div className="hear-wrapper">
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

export default Hear;
