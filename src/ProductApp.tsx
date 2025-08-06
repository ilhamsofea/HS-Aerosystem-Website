import "./ProductApp.css";
import Footer from "./Footer";

const categories = ["Assemblies", "Sheet Metal and Machinated Part"] as const;

type Category = (typeof categories)[number];

const productImages: Record<Category, string[]> = {
  Assemblies: [
    "assets/ProductApp/assembly1.jpg",
    "assets/ProductApp/assembly2.png",
    "assets/ProductApp/assembly3.png",
    "assets/ProductApp/assembly4.png",
    "assets/ProductApp/assembly5.png",
  ],
  "Sheet Metal and Machinated Part": [
    "assets/ProductApp/smm2.png",
    "assets/ProductApp/smm3.png",
  ],
};

function ProductApp() {
  return (
    <div>
      <section className="product-hero">
        <div className="overlay" id="product-app-start"></div>
        <div className="hero-text">
          <h1>Sample Products</h1>
          <p>
            Explore a showcase of our precision-engineered aerospace components,
            reflecting our capabilities in quality, innovation, and performance.
          </p>
        </div>
      </section>

      <section className="products">
        <div className="product-header">
          <h1>Engineered for Impact</h1>
          <p>
            <p>
              Our commitment to excellence fuels everything we do — delivering
              solutions that meet the demands of modern aviation.
            </p>
          </p>
        </div>
        <div className="product-list">
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
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductApp;
