import "./Logo.css";

function Logo() {
  return (
    <img
      className="logo-dark"
      src="/assets/Hs_Logo_dark.png"
      alt="HS Logo"
      loading="lazy"
      fetchPriority="high"
    />
  );
}

export default Logo;
