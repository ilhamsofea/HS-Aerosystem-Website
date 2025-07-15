import "./AboutUs.css";
import Footer from "./Footer";
import { useState} from "react";

const certificates = [
  "/assets/AboutUs/cert1.png",
  "/assets/AboutUs/cert2.jpg",
  "/assets/AboutUs/cert4.png",
  "/assets/AboutUs/cert1.png",
  "/assets/AboutUs/cert1.png",
  "/assets/AboutUs/cert1.png",
  // Add more later
];

function AboutUs() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <div className="aboutus-container" style={{ paddingTop: "30px" }}>
      <div className="scroll-aboutus">
        <div className="aboutus-wrapper">
          <div className="aboutus-bg" id="about-us">
            <div className="aboutus-intro">
              <p>Company Profile</p>
              <h1>
                Redefining Aviation <br /> Solutions
              </h1>
            </div>

            <div className="col">
              <p className="main-p">
                HS Aerosystem Sdn Bhd is a Malaysia–China joint venture
                dedicated to high-precision aerospace manufacturing and
                engineering services. Established in 2024 in Bandar Sri
                Sendayan, Negeri Sembilan, the company specializes in sheet
                metal fabrication, component assembly, and high-value-added
                processes tailored for the aviation sector. Backed by Hongshi
                Group’s global expertise and a commitment to excellence, HS
                Aerosystem serves as a strategic hub for supplying quality
                aerospace parts to international clients. The company is built
                on a foundation of innovation, collaboration, and sustainable
                growth—positioning itself as a rising force in the ASEAN
                aerospace ecosystem.
                <br />
                <img
                  alt="big image"
                  src="./assets/AboutUs/model-image3.JPG"
                  className="img-1"
                />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="aboutus-core-values" id="core-values">
        <h1 className="core-values-title">Our Core Values</h1>
        <p className="core-values-subtext">What drives us forward every day.</p>

        <div className="core-values-grid">
          {[
            {
              title: "Excellence",
              desc: "A commitment to relentless pursuit in all aspects of aerospace manufacturing, setting high standards and constantly striving for improvement.",
            },
            {
              title: "Innovation",
              desc: "Emphasizing the importance of cutting-edge technology and forward-thinking mindset to drive advancements and redefine industry standards.",
            },
            {
              title: "Sustainability",
              desc: "A commitment to sustainable practices, both environmentally and socially, with a focus on minimizing the company's environmental footprint and positively influencing the interconnected world.",
            },
            {
              title: "Ethical Practises",
              desc: "Adherence to the ethical principles in all business operations, ensuring the integrity, transparency and responsible conduct.",
            },
            {
              title: "Leadership",
              desc: "A dedication to being a leader on the global stage in aerospace manufacturing, taking initiatives that positions the company at the forefront of the industry.",
            },
            {
              title: "Leveraging",
              desc: "We leverage on the strength of our people, our customers and partners to overcome challenges in our journey to achieve.",
            },
          ].map((item, idx) => (
            <div className="value-card" key={idx}>
              <div className="value-icon">✅</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutus-journey" id="our-journey">
        <h1 className="journey-title">Our Journey So Far</h1>
        <h2 className="journey-subheader">
          From bold ideas to real-world impact
        </h2>

        <div className="journey-wrapper">
          {[
            {
              year: "2024",
              title: "Company Incorporated",
              note: "HS Aerosystem Sdn Bhd was established in Negeri Sembilan as a China–Malaysia aerospace joint venture.",
            },
            {
              year: "2024",
              title: "Manufacturing Kickoff",
              note: "Production launched in Bandar Sri Sendayan with a focus on aerospace precision components.",
            },
            {
              year: "2024",
              title: "First Hires & Key Clients",
              note: "Onboarded our first group of engineers and secured initial aviation contracts.",
            },
            {
              year: "2025",
              title: "Scaling & Certification",
              note: "Expanded operations and achieved aerospace certifications aligned with AS9100 standards.",
            },
          ].map((item, index) => (
            <div className="journey-card" key={index}>
              <span className="journey-year">{item.year}</span>
              <h3 className="journey-card-title">{item.title}</h3>
              <p className="journey-note">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutus-certificate" id="cert">
        <div className="certificate-container">
          <h1 className="certificate-title">Certifications</h1>
          <div
            className={`certificate-track-wrapper ${
              certificates.length > 5 ? "scroll-enabled" : ""
            }`}
          >
            <div className="certificate-track">
              {certificates.map((src, idx) => (
                <div
                  className="certificate-card"
                  key={idx}
                  onClick={() => setActiveCert(src)}
                >
                  <img src={src} alt={`Certificate ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {activeCert && (
          <div
            className="certificate-modal"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="certificate-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeCert} alt="Full Certificate" />
              <button
                className="certificate-close"
                onClick={() => setActiveCert(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div> //ENDS aboutus-container
  );
}

export default AboutUs;
