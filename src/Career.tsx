import "./Career.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";

interface Vacancy {
  Position: string;
  Location: string;
  Email: string;
  Description: string;
}

const backgroundImages = [
  "/assets/Career/hs1.JPG",
  "/assets/Career/display1.JPG",
  "/assets/Career/display7.JPG",
  "/assets/Career/hs3.JPG",
  "/assets/Career/display2.JPG",
  "/assets/Career/display5.JPG",
  "/assets/Career/hs2.JPG",
  "/assets/Career/display3.JPG",
  "/assets/Career/display6.JPG",
];

const Career = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [selectedJob, setSelectedJob] = useState<Vacancy | null>(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw74WL50hh7XtXQKB6vZSaChkVyebqtTIHaTC2Lxhfbf1ARO2C6lIKzMFaVcF1KDihE/exec"
    )
      .then((res) => res.json())
      .then((data) => setVacancies(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="career-hero-slider">
        <div
          className="career-hero-track"
          style={{ width: `${backgroundImages.length * 2 * 100}vw`}}
        >
          {backgroundImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`career ${i}`}
              className="career-hero-image"
            />
          ))}
          {/* Duplicate images for smooth infinite scroll */}
          {backgroundImages.map((src, i) => (
            <img
              key={`dup-${i}`}
              src={src}
              alt={`career duplicate ${i}`}
              className="career-hero-image"
            />
          ))}
        </div>
        <div className="career-hero-overlay">
          <div className="career-hero-content">
            <h1>Join Our Team</h1>
            <p>Where innovation meets opportunity.</p>
          </div>
        </div>
      </section>

<section className="career-box">
  <div className="career-section-header">
    <h2>🚀 Career Opportunities</h2>
    <p>Explore roles and connect with our recruitment team.</p>
  </div>

  <div className="career-box-wrapper">
    <div className="vacancy-panel">
      <h3>📌 Open Positions</h3>
      {vacancies.length === 0 ? (
        <p>Fetching job openings...</p>
      ) : (
        vacancies.map((job, idx) => (
          <div
            className="vacancy-item"
            key={idx}
            onClick={() => setSelectedJob(job)}
          >
            <h4>{job.Position}</h4>
            <p><strong>Location:</strong> {job.Location}</p>
          </div>
        ))
      )}
    </div>

    <div className="career-contact-box">
      <h3>📩 Reach Out to Us</h3>
      <p>For any inquiries or direct applications, email the respective team:</p>
      <ul className="contact-list">
        <li><span className="label">HR:</span><a href="mailto:hr@company.com">hr@company.com</a></li>
        <li><span className="label">Recruitment:</span><a href="mailto:recruitment@company.com">recruitment@company.com</a></li>
        <li><span className="label">Internship:</span><a href="mailto:internship@company.com">internship@company.com</a></li>
      </ul>
      <p className="career-note">Attach your CV and a short introduction. We’ll get back to you soon.</p>
    </div>
  </div>
</section>


      {/* Vacancy Popup Modal */}
      {selectedJob && (
        <div className="job-modal" onClick={() => setSelectedJob(null)}>
          <div
            className="job-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="job-modal-close"
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>
            <h2>{selectedJob.Position}</h2>
            <p>
              <strong>Location:</strong> {selectedJob.Location}
            </p>
            <p>{selectedJob.Description}</p>
            {/*Here to update layout in case need to add more columns in excel*/}
            <a className="apply-btn" href={`mailto:${selectedJob.Email}`}>
              Apply Now
            </a>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Career;
