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
          <h1>Under Construction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <Footer />
    </> //ENDS
  );
}

export default Hear;
