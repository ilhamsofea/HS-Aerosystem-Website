import { useState, useEffect } from "react";
import "./Team.css";
import Footer from "./Footer";

interface TeamMember {
  name: string;
  title: string;
  img: string;
  bio?: string;
  email?: string;
}

const topLeader: TeamMember = {
  name: "Dr. Yeow Jee Leong",
  title: "General Manager",
  img: "/assets/Team/default.jpg",
  bio: "bio here",
  email: "email here",
};

const teamMembers: TeamMember[] = [
  {
    name: "Jonas See Zeng Woon",
    title: "Finance Controller",
    img: "/assets/Team/default.jpg",
    bio: "bio here",
    email: "email here",
  },
  {
    name: "Grace Lee",
    title: "Head of Quality",
    img: "/assets/Team/default.jpg",
    bio: "bio here",
    email: "email here",
  },
  {
    name: "Annie Chia Yee Ting",
    title: "Head of Engineering",
    img: "/assets/Team/default.jpg",
    bio: "bio here",
    email: "email here",
  },
  {
    name: "Leslie Joseph",
    title: "Head of Manufacturing",
    img: "/assets/Team/default.jpg",
    bio: "bio here",
    email: "email here",
  },
  {
    name: "Zulfadhli Idrus",
    title: "Head of Operations",
    img: "/assets/Team/default.jpg",
    bio: "bio here",
    email: "email here",
  },
  {
    name: "Stacy Gan Hui Fang",
    title: "Head of HR",
    img: "/assets/Team/default.jpg",
    bio: "bio here",
    email: "email here",
  },
];

function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  /* FOR ANIMATION ON*/
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
      <section className="team-hero" id = "team-start">
        <div className="overlay" id="team"></div>
        <div className="hero-text">
          <h1>Leadership & Team</h1>
          <p>
            Leadership that empowers progress — building a company that
            redefines what’s possible in aerospace.
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
              <h2>{topLeader.name}</h2>
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
