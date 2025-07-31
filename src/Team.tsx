import "./Team.css";
import Footer from "./Footer";

const topLeader = {
  name: "Dr. Yeow Jee Leong",
  title: "General Manager",
  img: "/assets/Team/default.jpg",
};

const teamMembers = [
  {
    name: "Tiffany Leong Yee Lui",
    title: "SCM Manager",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Aimi Hazwani binti Saijan",
    title: "Procurement Manager",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Zulfadhli Idrus",
    title: "Head of Operations",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Annie Chia Yee Ting",
    title: "Head of Engineering",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Leslie Joseph",
    title: "Head of Manufacturing",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Stacy Gan Hui Fang",
    title: "Head of HR",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Grace Lee",
    title: "Head of Quality",
    img: "/assets/Team/default.jpg",
  },
  {
    name: "Jonas See Zeng Woon",
    title: "Finance Controller",
    img: "/assets/Team/default.jpg",
  },
];

function Team() {
  return (
    // START Container
    <>
      <section className="team-hero">
        <div className="overlay" id="team"></div>
        <div className="hero-text">
          <h1>Leadership & Team</h1>
          <p>Leadership that empowers progress — building a company that redefines what’s possible in aerospace.</p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-wrapper">
          <h1>What Guides Our Leadership</h1>
          <p>
            Our leadership team brings together decades of aerospace expertise,
            united by a vision to drive innovation, integrity, and excellence
            across every operation we undertake.
          </p>

          <div className="highlight-leader">
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
                <div key={person.name} className="team-card">
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

      <Footer />
    </>
  );
}

export default Team;
