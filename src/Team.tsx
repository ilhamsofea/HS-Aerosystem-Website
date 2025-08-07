import { useState, useEffect } from "react";
import "./Team.css";
import Footer from "./Footer";

import { TeamMember, topLeader, teamMembers } from "./teamData";

function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

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

    const section = document.querySelector(".team-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <>
      <section className="team-hero" id="team-start">
        <div className="overlay" id="team"></div>
        <div className="hero-text">
          <h1>Leadership & Team</h1>
          <p>
            Driven by vision, strengthened by collaboration — meet the people
            shaping our aerospace future.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-wrapper fade-up">
          <h1>What Guides Our Leadership</h1>
          <p>
            Our leadership team brings together decades of aerospace expertise,
            united by a vision to drive innovation, integrity, and excellence
            across every operation we undertake.
          </p>

          <div
            className="highlight-leader"
            onClick={() => handleCardClick(topLeader)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={topLeader.img}
              alt={topLeader.name}
              className="leader-img-lg"
            />
            <div className="leader-details-lg">
              <h3>{topLeader.name}</h3>
              <p>{topLeader.title}</p>
            </div>
          </div>

          <div className="team-grid-section">
            <div className="team-grid">
              {teamMembers.map((person) => (
                <div
                  key={person.name}
                  className="team-card"
                  onClick={() => handleCardClick(person)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="team-img"
                  />
                  <div className="team-info">
                    <h3>{person.name}</h3>
                    <p>{person.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="modal-img"
            />
            <h2>{selectedMember.name}</h2>
            <p>{selectedMember.title}</p>

            {selectedMember.bio && (
              <p className="modal-bio">{selectedMember.bio}</p>
            )}

            {selectedMember.email && (
              <p className="modal-contact">
                📧{" "}
                <a href={`mailto:${selectedMember.email}`}>
                  {selectedMember.email}
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Team;
