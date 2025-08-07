import "./ProcessCap.css";
import Footer from "./Footer";
import processCapData from "./processCapData";

function ProcessCap() {
  return (
    <>
      <section className="process-cap-hero" id="process-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1> Process Capability </h1>
          <p>
            Every step we take is engineered for excellence. Explore how our
            capabilities ensure consistency, quality, and innovation in every
            component.
          </p>
        </div>
      </section>

      <section className="process-cap-slide">
        <div className="process-cap-header">
          <h1>Explore Our Process</h1>
          <p>
            Efficiency meets innovation — uncover the methods that power our
            aviation solutions.
          </p>
        </div>

        {processCapData.map((item) => (
          <div className="process-cap-inner-slide" id={item.id} key={item.id}>
            <div className="process-cap-slide-content">
              <div className="process-cap-text-section">
                <p className="process-cap-slide-number">{item.id}</p>
                <h2 className="process-cap-slide-title">{item.title}</h2>
                <p className="process-cap-slide-description">
                  {item.description}
                  <ul className="list1">
                    <br />
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <div className="process-cap-image-section">
                <img src={item.image} alt={item.alt} />
              </div>
            </div>
          </div>
        ))}

        <Footer />
      </section>
    </>
  );
}

export default ProcessCap;
