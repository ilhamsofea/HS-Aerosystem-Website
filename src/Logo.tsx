import "./Logo.css";

function Logo() {
  return (
    <img
      className="logo-dark"
      // src="/assets/Hs_Logo_dark.png"
      src = "https://static.wixstatic.com/media/58d4da_c10b3dab780347f196b31c5f52565732~mv2.png/v1/fill/w_147,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hs%20Logo-color%20w.png"
      alt="HS Logo"
      loading="lazy"
      fetchPriority="high"
    />
  );
}

export default Logo;
