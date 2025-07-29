import "./ProcessCap.css";
import Footer from "./Footer";

function ProcessCap() {
  return (
    <section className="process-cap-slide" style={{ paddingTop: "30px" }}>
      <div className="process-cap-intro" id="process-cap">
        <h1>Explore Our Process</h1>
        <p>
          Efficiency meets innovation — uncover the methods that power our
          aviation solutions.
        </p>
      </div>
      <div className="process-cap-scrollable-slides">
        <div className="process-cap-inner-slide" id="01">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">01</p>
              <h2 className="process-cap-slide-title">Precision Sheet Metal</h2>
              <p className="process-cap-slide-description">
                [Desc of the process here]
                <ul className="list1">
                  <br />
                  <li>3 Axis Vertical Machining</li>
                  <li>4 Axis Horizontal Machining</li>
                  <li>Tool Presetter</li>
                </ul>
              </p>
            </div>
            <div className="process-cap-image-section">
              <img
                src="./assets/ProcessCap/sheetmetal1.JPG"
                alt="Precision Sheet Metal"
              />
            </div>
          </div>
        </div>

        <div className="process-cap-inner-slide" id="02">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">02</p>
              <h2 className="process-cap-slide-title">CNC Machining</h2>
              <p className="process-cap-slide-description">
                [Desc of the process here]
                <ul className="list1">
                  <br />
                  <li>Fiber Laser Cutting</li>
                  <li>Robotic Sheet Metal Bending</li>
                  <li>Manual Sheet Metal Bending</li>
                  <li>Sheet Metal Punch</li>
                  <li>Burnishing</li>
                </ul>
              </p>
            </div>
            <div className="process-cap-image-section">
              <img src="./assets/ProcessCap/cnc.JPG" alt="CNC Machining" />
            </div>
          </div>
        </div>

        <div className="process-cap-inner-slide" id="03">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">03</p>
              <h2 className="process-cap-slide-title">Welding</h2>
              <p className="process-cap-slide-description">
                [Desc of the process here]
                <ul className="list1">
                  <br />
                  <li>Fusion Welding</li>
                  <li>Spot Welding</li>
                  <li>Welding Cleaning</li>
                  <li>High Energy Ultra Sonic Deburring</li>
                </ul>
              </p>
            </div>
            <div className="process-cap-image-section">
              <img src="./assets/ProcessCap/cnc.JPG" alt="Welding" />
            </div>
          </div>
        </div>

        <div className="process-cap-inner-slide" id="04">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">04</p>
              <h2 className="process-cap-slide-title">Mechanical Assembly</h2>
              <p className="process-cap-slide-description">
                [Desc of process here]
                <ul className="list1">
                  <br />
                  <li>Assembly Installations (Riveting, Fastening, etc)</li>
                  <li>Inkjet Marking</li>
                  <li>Fiber Laser Marking</li>
                </ul>
              </p>
            </div>
            <div className="process-cap-image-section">
              <img
                src="./assets/ProcessCap/assembly-testing5.JPG"
                alt="Mechanical Assembly"
              />
            </div>
          </div>
        </div>

        <div className="process-cap-inner-slide" id="05">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">05</p>
              <h2 className="process-cap-slide-title">Quality Inspection</h2>
              <p className="process-cap-slide-description">
                [Desc of process here]
                <ul className="list1">
                  <br />
                  <li>3 Dimensional CMM</li>
                  <li>2.5D OMM</li>
                  <li>Height Gauge</li>
                  <li>Tensile Testing</li>
                  <li>Contourgraph - Profiler</li>
                  <li>Hardness Tester</li>
                  <li>Roughness Tester</li>
                  <li>Vision Detector</li>
                </ul>
              </p>
            </div>
            <div className="process-cap-image-section">
              <img
                src="./assets/ProcessCap/quality-cap.JPG"
                alt="Experimental Capability"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end scrollable slides */}
      <Footer />
    </section>
  );
}

export default ProcessCap;
