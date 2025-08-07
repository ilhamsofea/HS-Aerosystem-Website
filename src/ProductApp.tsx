// ProductApp.tsx
import "./ProductApp.css";
import Footer from "./Footer";
import { categories, productImages, Category } from "./productAppData";

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
          <p>Crafted to meet tomorrow’s challenges.</p>
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
