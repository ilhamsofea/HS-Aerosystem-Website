import "./Recognition.css";
import Footer from "./Footer";
import { useEffect } from "react";
import { recognizedEmployees } from "./recognitionData";

function Recognition() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <section className="recognition-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Employee Recognition</h1>
          <p>Celebrating outstanding individuals who go above and beyond.</p>
        </div>
      </section>

      <section className="recognition-section">
        <div className="recognition-wrapper">
          <h1>Quarterly Spotlights</h1>
          <p>
            Each quarter, we highlight team members who have shown exceptional
            performance, dedication, and impact.
          </p>

          {recognizedEmployees.map((employee, index) => (
            <div
              key={index}
              className={`recognition-spotlight ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="employee-img">
                <img src={employee.image} alt={employee.name} />
              </div>
              <div className="employee-info">
                <h2>{employee.name}</h2>
                <h4>{employee.title}</h4>
                <p>{employee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Recognition;
