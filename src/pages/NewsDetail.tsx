import "./NewsDetail.css";
import { useParams, Link } from "react-router-dom";
import newsData from "../data/newsData";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find((item) => item.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".news-detail-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("reveal");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!article) {
    return <div className="not-found">News article not found.</div>;
  }

  return (
    <>
      <section className="news-detail-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{article.category}</h1>
        </div>
      </section>

      <section className="news-detail-section">
        <div className="news-detail-wrapper">
          <Link to="/news" className="back-button">
            ← Back
          </Link>
          <h1>{article.title}</h1>
          <p>{article.date}</p>
          <div className="news-images">
            {article.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${article.title} - ${index + 1}`}
                className="news-banner"
              />
            ))}
          </div>

          <p className="news-body">{article.full}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NewsDetail;
