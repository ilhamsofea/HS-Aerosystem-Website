import { useParams, Link } from "react-router-dom";
import { csrStories } from "./csrData";
import Footer from "./Footer";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CsrDetail.css";

function CsrDetail() {
  const { id } = useParams<{ id: string }>();
  const story = csrStories.find((item) => item.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".csr-detail-section");
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

  if (!story) {
    return <div className="not-found">News article not found.</div>;
  }

  return (
    <>
      <section className="csr-detail-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{story.category}</h1>
        </div>
      </section>

      <section className="csr-detail-section">
        <div className="csr-detail-wrapper">
          <Link to="/csr" className="back-button">
            ← Back
          </Link>
          <h1>{story.title}</h1>
          <p>{story.date}</p>

          {/* ✅ Carousel */}
          <div className="csr-carousel">
            <Swiper
              className="csr-swiper"
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
            >
              {story.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${story.title} - ${index + 1}`}
                    className="csr-banner"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <p className="csr-body">{story.full}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CsrDetail;
