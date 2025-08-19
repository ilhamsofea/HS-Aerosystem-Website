import "./Journey.css";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import journeyData from "../data/journeyData";

function Journey() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(
      ".journey-wrapper, .journey-legend, .timeline-item"
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="journey-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Our Journey</h1>
          <p>
            A glance at where we started, how far we've come, and where we’re
            heading.
          </p>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-wrapper">
          <h1>From Vision to Reality</h1>
          <p>
            Milestones that shape who we are — from our inception to our future
            vision.
          </p>
        </div>

        <div className="journey-legend">
          <span>
            <span className="dot completed-dot"></span> Completed
          </span>
          <span>
            <span className="dot planned-dot"></span> Planned
          </span>
        </div>

        <div className="timeline">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${item.position} ${item.status}`}
            >
              <div className="content">
                <span className="date">{item.date}</span>
                <h3>{item.title}</h3>
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="journey-img"
                  />
                )}
                <p>{item.description}</p>
                {item.showCurrentLabel && (
                  <span className="current-label">📍 We Are Here</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Journey;
