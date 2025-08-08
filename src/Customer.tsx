// Customer.tsx
import "./Customer.css";
import Footer from "./Footer";
import { customerList } from "./customerData";
import { useEffect } from "react";

function Customer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="customer-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Our Customers</h1>
          <p>
            Collaborating with leading aerospace innovators around the world.
          </p>
        </div>
      </section>

      {/* Customer Overview Section */}
      <section className="customer-section">
        <div className="customer-wrapper">
          <h1>Global Partnerships</h1>
          <p>
            Our clientele includes globally recognized aerospace organizations
            that trust us for precision, quality, and long-term partnership. We
            take pride in supporting their missions with advanced manufacturing
            capabilities and unwavering commitment to excellence.
          </p>

          <div className="customer-logo-grid">
            {customerList.map((customer, index) => (
              <div className="customer-logo" key={index}>
                <img src={customer.logo} alt={customer.alt} />
                <p>{customer.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Customer;
