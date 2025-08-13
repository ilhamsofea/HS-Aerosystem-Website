import "./Career.css";
import Footer from "./Footer";
import { hrContacts } from "./careerData";
import { useEffect, useState } from "react";

interface Vacancy {
  Position: string;
  Department: string;
  Location: string;
  Email: string;
  Description: string;
}

function Career() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [selectedJob, setSelectedJob] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  useEffect(() => {
    fetch(
      // needed a new google account
      "https://script.google.com/macros/s/AKfycbw74WL50hh7XtXQKB6vZSaChkVyebqtTIHaTC2Lxhfbf1ARO2C6lIKzMFaVcF1KDihE/exec"
    )
      .then((res) => res.json())
      .then((data) => setVacancies(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="career-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Career</h1>
          <p>Grow your future with us</p>
        </div>
      </section>

      {/* ===== Life at Our Company & Our Culture ===== */}
      <section className="career-about">
        <div className="career-wrapper">
          <h1>Life at Our Company</h1>
          <p>
            We’re more than just a workplace — we’re a community driven by
            excellence, collaboration, and a shared mission to lead in aerospace
            innovation.
          </p>

          <div className="career-grid">
            <div className="career-text">
              <h2>Our Culture</h2>
              <p>
                We foster a culture of integrity, innovation, and teamwork. Our
                employees are empowered to grow, contribute, and make a
                difference.
              </p>
            </div>
            <div className="career-image">
              <img src="/assets/Career/hs2.JPG" alt="Company culture" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Student & Graduate Experience ===== */}
      <section className="career-student">
        <div className="container student-grid">
          <div className="student-img">
            <img
              src="/assets/Career/hs3.JPG"
              alt="Student & Graduate Experience"
            />
          </div>
          <div className="student-text">
            <h2>Student & Graduate Experience</h2>
            <p>
              Start your career journey with us through our internship and
              graduate programs. Gain real-world experience, mentorship, and
              opportunities to work on impactful projects.
            </p>
            <a href="/career#opportunities" className="student-btn">
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* ===== Vacancies ===== */}
      <section className="career-opportunities-alt" id="opportunities">
        <div className="container opportunities">
          <div className="opportunities-header">
            <h2>
              <span className="icon">💼</span> Career Opportunities
            </h2>
            <p>Explore our latest job openings and join our growing team.</p>
          </div>

          <div className="vacancy-filters">
            <input
              type="text"
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="vacancy-search"
            />

            {/* Department Dropdown Filter */}
            <select
              value={selectedDepartment || ""}
              onChange={(e) =>
                setSelectedDepartment(
                  e.target.value === "" ? null : e.target.value
                )
              }
              className="vacancy-dropdown"
            >
              <option value="">All Departments</option>
              {[...new Set(vacancies.map((job) => job.Department))].map(
                (dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="vacancy-list">
            {loading ? (
              <p>Fetching job openings...</p>
            ) : (
              (() => {
                const validJobs = vacancies
                  .filter((job) => job.Position?.trim())
                  .filter((job) =>
                    job.Position.toLowerCase().includes(
                      searchTerm.toLowerCase()
                    )
                  )
                  .filter((job) =>
                    selectedDepartment
                      ? job.Department === selectedDepartment
                      : true
                  );

                if (validJobs.length === 0) {
                  return <p>No job openings currently.</p>;
                }
                return validJobs.map((job, idx) => (
                  <div
                    className="vacancy-card"
                    key={idx}
                    onClick={() => setSelectedJob(job)}
                  >
                    <h4>{job.Position}</h4>
                    <p>
                      <strong>Location:</strong> {job.Location}
                      <br></br>
                      <strong> Department:</strong> {job.Department}
                    </p>
                  </div>
                ));
              })()
            )}
          </div>
        </div>
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
                <br></br>
                <strong> Department:</strong> {selectedJob.Department}
              </p>
              <p>{selectedJob.Description}</p>
              <a className="apply-btn" href={`mailto:${selectedJob.Email}`}>
                Apply Now
              </a>
            </div>
          </div>
        )}
      </section>

      <section className="career-section">
        <h2>Meet Our HR Team</h2>
        <div className="hr-grid">
          {hrContacts.map((hr, index) => (
            <div key={index} className="hr-card">
              <img src={hr.image} alt={hr.name} className="hr-photo" />
              <h3>{hr.name}</h3>
              <p className="hr-role">{hr.role}</p>
              <p>
                Email: <a href={`mailto:${hr.email}`}>{hr.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${hr.phone}`}>{hr.phone}</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Career;
