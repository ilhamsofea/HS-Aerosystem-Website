import "./Journey.css";
import Footer from "./Footer";

function Journey() {
  return (
    // START container
    <>
      <section className="journey-hero">
        <div className="overlay" id="history-start"></div>
        <div className="hero-text">
          <h1> Our Journey </h1>
          <p>
            A glance at where we started, how far we've come, and where we’re
            heading.
          </p>
        </div>
      </section>

      <section className="milestone-section">
        <div className="milestone-header">
          <h1>From Vision to Reality</h1>
          <p>
            Milestones that shape who we are — from our inception to our future
            vision.
          </p>
        </div>

        <div className="milestone-legend">
          <span>
            <span className="dot completed-dot"></span> Completed
          </span>
          <span>
            <span className="dot planned-dot"></span> Planned
          </span>
        </div>

        <div className="timeline">
          {/* Repeat this block for each milestone */}
          <div className="timeline-item left completed">
            <div className="content">
              <span className="date">14 Feb 2024</span>
              <h3>Company Incorporation</h3>
              <img
                src="/assets/default/default2.jpg"
                alt="HS Factory"
                className="milestone-img"
              />
              <p>
                HS Aerosystem Sdn. Bhd. was officially incorporated, marking the
                beginning of our journey.
              </p>
            </div>
          </div>

          <div className="timeline-item right completed">
            <div className="content">
              <span className="date">March 2024</span>
              <h3>Factory Acquired</h3>
              <img
                src="/assets/default/default2.jpg"
                alt="HS Factory"
                className="milestone-img"
              />
              <p>
                Secured first-phase manufacturing facility to support our
                aerospace operations.
              </p>
            </div>
          </div>

          <div className="timeline-item left completed">
            <div className="content">
              <span className="date">April 2024</span>
              <h3>First Employee Hired</h3>
              <p> Welcomed the first team member to HS Aerosystem.</p>
            </div>
          </div>

          <div className="timeline-item right completed">
            <div className="content">
              <span className="date">May 2024</span>
              <h3>Manufacturing License Obtained</h3>
              <p>
                {" "}
                Granted permission to begin aerospace production activities.
              </p>
            </div>
          </div>

          <div className="timeline-item left completed">
            <div className="content">
              <span className="date">End of July 2024</span>
              <h3>Factory Occupation Begins</h3>
              <p>
                Moved into and began setting up the newly acquired factory
                space.
              </p>
            </div>
          </div>

          <div className="timeline-item right completed">
            <div className="content">
              <span className="date">End of August 2024</span>
              <h3>Factory Renovation Completed</h3>

              <img
                src="/assets/default/default2.jpg"
                alt="HS Factory"
                className="milestone-img"
              />

              <p>
                Renovations completed; facility is now fit for aerospace
                manufacturing.
              </p>
            </div>
          </div>

          <div className="timeline-item left completed">
            <div className="content">
              <span className="date">4 Sept 2024</span>
              <h3>AS9100 Stage 1 Audit</h3>
              <p>
                {" "}
                Initial audit completed for aerospace quality management
                certification.
              </p>
            </div>
          </div>

          <div className="timeline-item right completed">
            <div className="content">
              <span className="date">11-12 November 2024</span>
              <h3>AS9100 Stage 2 Audit</h3>
              <p>
                Final audit to verify full compliance with aerospace standards.
              </p>
            </div>
          </div>

          <div className="timeline-item left completed">
            <div className="content">
              <span className="date">End of 2024</span>
              <h3>AS9100 Certification Achieved</h3>
              <img
                src="/assets/default/default2.jpg"
                alt="HS Factory"
                className="milestone-img"
              />
              <p>Officially recognized as compliant with AS9100 standards.</p>
            </div>
          </div>

          <div className="timeline-item right completed">
            <div className="content">
              <span className="date">End of 2024</span>
              <h3>Pre-Production Begins (Phase One)</h3>
              <p> Initial trial production activities launched.</p>
            </div>
          </div>

          <div className="timeline-item left current">
            <div className="content">
              <span className="date">March 2025</span>
              <h3>First Article Inspection (FAI)</h3>
              <p>
                Phase 1 production units undergo initial quality inspections.
              </p>
              <span className="current-label">📍 We Are Here</span>
            </div>
          </div>

          <div className="timeline-item right planned">
            <div className="content">
              <span className="date">19-21 August 2025</span>
              <h3>NADCAP Audit Scheduled</h3>
              <p>
                Advanced accreditation process for aerospace special processes.
              </p>
            </div>
          </div>

          <div className="timeline-item left planned">
            <div className="content">
              <span className="date">Sometime in 2025</span>
              <h3>100th Employee Milestone (Phase One)</h3>
              <p>Team scales up to over 100 employees.</p>
            </div>
          </div>

          <div className="timeline-item right planned">
            <div className="content">
              <span className="date">2025</span>
              <h3>Phase Two Site Planning Begins</h3>
              <p>Planning for second phase expansion on a 7-acre site.</p>
            </div>
          </div>

          <div className="timeline-item left planned">
            <div className="content">
              <span className="date">2026</span>
              {/* > is  a special character in HTML, therefore &gt; is used to replace it*/}
              <h3> &gt; 120 Employees Reached (Phase One Complete)</h3>
              <p>
                The workforce surpasses 120 as full operational strength is
                achieved.
              </p>
            </div>
          </div>

          {/* Continue here for more milestones */}
        </div>
      </section>

      <Footer />
    </> //ENDS container
  );
}

export default Journey;
