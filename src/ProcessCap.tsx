import "./ProcessCap.css";
import Footer from "./Footer";

function ProcessCap() {
  return (
    <section className="process-cap-slide">
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
                We are equipped with advanced sheet metal processing machines of
                Japanese AMADA, Swedish Quintus Hydroforming machine and
                SWITZERLAND BYSTRONIC BySmart Fiber high-speed maglev laser,
                fiber laser, laser and stamping compound machines, NCT, bending
                machine and de-burring machines.
                <ul className="list1">
                  <br />
                  <li>Laser cutting</li>
                  <li>CNC Machining</li>
                  <li>Hydroforming</li>
                  <li>CNC Bending</li>
                  <li>TIG Welding</li>
                  <li>CO2 Welding</li>
                  <li>Laser Welding</li>
                  <li>Spot Welding</li>
                  <li>Robot Welding</li>
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

        <div className="process-cap-inner-slide2" id="02">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">02</p>
              <h2 className="process-cap-slide-title">CNC Machining</h2>
              <p className="process-cap-slide-description">
                The superior equipment suppliers of Japanese MAKINO and DMG
                MORI, Korean HYUNDAI WIA provided us stability of the hardware
                equipments and technical services, so that we can offer products
                to customers with stable quality and quick response.
                <ul className="list1">
                  <br />
                  <li>Vertical CNC</li>
                  <li>Horizontal CNC</li>
                  <li>5-AXIS CNC</li>
                  <li>9-AXIS CNC</li>
                  <li>Bending Machine</li>
                  <li>Tube end forming machine</li>
                  <li>Wire cutting machine</li>
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
              <h2 className="process-cap-slide-title">Assembly and Testing</h2>
              <p className="process-cap-slide-description">
                <ul className="list1">
                  <br />
                  <li>Riveting assembly</li>
                  <li>Fasteners assembly</li>
                  <li>Bonding</li>
                  <li>Low temperature assembly</li>
                </ul>
              </p>
            </div>
            <div className="process-cap-image-section">
              <img
                src="./assets/ProcessCap/assembly-testing5.JPG"
                alt="Assembly and Testing"
              />
            </div>
          </div>
        </div>

        <div className="process-cap-inner-slide2" id="04">
          <div className="process-cap-slide-content">
            <div className="process-cap-text-section">
              <p className="process-cap-slide-number">04</p>
              <h2 className="process-cap-slide-title">Quality Capability</h2>
              <p className="process-cap-slide-description">
                As an independent testing and calibration department,
                Experimental Testing Center has gradually improved its functions
                after years of construction, covering most of the testing and
                calibration work required within the company; mainly including
                internal calibration and metallographic analysis, mechanical
                testing, chemical analysis, non-destructive testing, etc. The
                center has obtained NADCAP MTL qualification in April 2020. And
                it has more than 70 sets of various testing equipment, including
                FPI testing lines, CMM, high-precision image measuring
                instruments, hardness testers, material testing machines,
                metallographic analysis equipment, color difference meters,
                element analyzers, etc.
                <ul className="list1">
                  <br />
                  <li>Chemical analysis</li>
                  <li>Metallographic</li>
                  <li>Mechanics</li>
                  <li>NDT FPI</li>
                  <li>Calibration</li>
                  <li>Length</li>
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
