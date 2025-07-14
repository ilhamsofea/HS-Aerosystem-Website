import "./ProductApp.css";
import Footer from "./Footer";

const categories = [
  "Aircraft Seats System",
] as const;

type Category = (typeof categories)[number];

const productImages: Record<Category, string[]> = {
  // "Aircraft Galley System": [
  //   "assets/default.jpg",
  //   "assets/default3.jpg",
  //   "assets/default2.jpg",
  //   "assets/default.jpg",
  //   "assets/default2.jpg",
  //   "assets/default3.jpg",
  // ],
  // "Aircraft Structure Part": [
  //   "assets/default.jpg",
  //   "assets/default3.jpg",
  //   "assets/default2.jpg",
  //   "assets/default.jpg",
  //   "assets/default2.jpg",
  //   "assets/default3.jpg",
  // ],
  "Aircraft Seats System": [
    "assets/ProductApp/seatsystem1.png",
    "assets/ProductApp/seatsystem2.png",
  ],
  // "Pipe Fitting System": [
  //   "assets/default.jpg",
  //   "assets/default3.jpg",
  //   "assets/default2.jpg",
  //   "assets/default.jpg",
  //   "assets/default2.jpg",
  //   "assets/default3.jpg",
  // ],
  // "Life Support System": [
  //   "assets/default.jpg",
  //   "assets/default3.jpg",
  //   "assets/default2.jpg",
  //   "assets/default.jpg",
  //   "assets/default2.jpg",
  //   "assets/default3.jpg",
  // ],

};

function ProductApp() {
  return (
    <div>
      <section className="hero" style={{ paddingTop: "30px" }}>
        <div className="overlay" id="product-app-start"></div>
        <div className="hero-text">
          <h1>Engineered for Impact</h1>
          <h2>
            From aircraft interiors to flight controls, our solutions drive
            aviation forward.
          </h2>
        </div>
      </section>

      <section className="products">
        {categories.map((category) => (
          <details
            className="product-tab"
            key={category}
            id={category.toLowerCase().replace(/\s+/g, "-")}
          >
            <summary>{category}</summary>
            <div className="scroll-gallery">
              {productImages[category].map((src, i) => (
                <div className="gallery-item" key={i}>
                  <img src={src} alt={`Product ${i + 1}`} />
                </div>
              ))}
            </div>
          </details>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default ProductApp;
