import "./InternsExperience.css";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { internsExperience } from "../data/internsExperienceData";

function InternsExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="interns-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Student & Graduate Experience</h1>
          <p>Real stories of growth, learning, and impact</p>
        </div>
      </section>

      {/* ===== Experience Highlights ===== */}
      <section className="interns-section">
        <div className="container">
          <h1>First Steps, Big Dreams</h1>
          <p>
            Hear how our interns have contributed to the company and developed skills that
            shaped their careers.
          </p>

          <div className="interns-experience-list">
            {internsExperience.map((intern, idx) => (
              <div className="intern-exp-card" key={idx}>
                {intern.image && (
                  <div className="intern-photo">
                    <img src={intern.image} alt={intern.name} />
                  </div>
                )}
                <div className="intern-text">
                  <h3>{intern.name}</h3>
                  <p className="intern-role">{intern.role}</p>

                  <p>
                    <strong>Department:</strong> {intern.dept}
                  </p>
                  <p>
                    <strong>Experience:</strong> {intern.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default InternsExperience;
