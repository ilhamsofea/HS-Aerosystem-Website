import "./NewsDetail.css";
import { useParams } from "react-router-dom";
import newsData from "./newsData";
import Footer from "./Footer";
import { useEffect } from "react";

function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find((item) => item.id.toString() === id);

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
      <section className="news-detail-hero" id="news-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{article.category}</h1>
        </div>
      </section>

      <section className="news-detail-section">
        <div className="news-detail-wrapper">
          <h1>{article.title}</h1>
          <p>{article.date}</p>
          <img
            src={article.image}
            alt={article.title}
            className="news-banner"
          />
          <p className="news-body">{article.full}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NewsDetail;
