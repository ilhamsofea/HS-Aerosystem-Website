import { useState, useEffect } from "react";
import "./Team.css";
import Footer from "../components/Footer/Footer";
import { TeamMember, topLeader, teamMembers } from "../data/teamData";

function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="team-hero">
        <div className="overlay"></div>
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
          <h1>Our Team</h1>
          <p>
            We work side-by-side, sharing ideas and responsibilities — every
            member is equally valued in shaping our aerospace journey.
          </p>

          <div className="team-grid">
            {[topLeader, ...teamMembers].map((person) => (
              <div
                key={person.name}
                className="team-card"
                onClick={() => handleCardClick(person)}
                style={{ cursor: "pointer" }}
              >
                <img src={person.img} alt={person.name} className="team-img" />
                <div className="team-info">
                  <h3>{person.name}</h3>
                  <p>{person.title}</p>
                </div>
              </div>
            ))}
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
