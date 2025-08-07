import "./News.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import newsData from "./newsData";
import { useEffect } from "react";

function News() {
  return (
    <>
      <section className="news-hero" id="news-start">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>News & Updates</h1>
          <p>
            Stay informed with the latest happenings, milestones, and insights
            from our company.
          </p>
        </div>
      </section>

      <section className="news-section">
        <div className="news-wrapper">
          <h1>Company Highlights</h1>
          <p>
            Explore stories that shape our journey — from groundbreaking
            innovations to team achievements.
          </p>

          <div className="news-grid">
            {newsData.map((item) => (
              <div className="news-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p>{item.preview}</p>
                <Link to={`/news/${item.id}`} className="read-more-link">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default News;
