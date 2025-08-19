import "./News.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import newsData from "../data/newsData";
import { useEffect } from "react";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="news-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>News</h1>
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
            {[...newsData]
              .sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
              })
              .map((item) => (
                <div className="news-card" key={item.id}>
                  <img
                    src={item.images ? item.images[0] : item.images}
                    alt={item.title}
                  />
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
