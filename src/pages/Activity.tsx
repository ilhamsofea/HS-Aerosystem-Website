// Activity.tsx
import "./Activity.css";
import Footer from "../components/Footer/Footer";
import { activityList } from "../data/activityData";
import { useEffect } from "react";

function Activity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="activity-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Employee Activities</h1>
          <p>Celebrating our people through engaging and meaningful events.</p>
        </div>
      </section>

      <section className="activity-section">
        <div className="activity-wrapper">
          <h1>Company Highlights</h1>
          <p>
            We believe that great teams are built through shared experiences.
            Here are some memorable moments from our employee activities.
          </p>

          {/* Activity Rows Start */}
          {activityList.map((activity, index) => (
            <div
              className={`activity-row ${index % 2 !== 0 ? "reverse" : ""}`}
              key={index}
            >
              <div className="activity-image">
                <img src={activity.image} alt={activity.alt} />
              </div>
              <div className="activity-description">
                <h2>{activity.title}</h2>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Activity;
