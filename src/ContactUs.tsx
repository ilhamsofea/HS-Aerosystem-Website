import './ContactUs.css'

function ContactUs () {
    return (
    <div className="cert-card">
      <div className="image-container">
        <img
          src="https://static.wixstatic.com/media/58d4da_0676a77899df4ba1bc60bf0001f3625c~mv2.png/v1/fill/w_180,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aerospace%20as9100%20certified%20system-1.png"
          alt="aerospace as9100 certified system"
          className="cert-image"
        />
      </div>

      <h2 className="cert-amount">$1.5 Million</h2>
      <h4 className="cert-title">Passed AS9100C</h4>

      <div className="year-line">
        <h6 className="cert-year">2010</h6>
        <hr className="line" />
        <hr className="line" />
      </div>
    </div>
    );
}

export default ContactUs;

