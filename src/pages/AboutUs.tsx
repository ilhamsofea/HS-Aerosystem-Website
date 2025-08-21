import "./AboutUs.css";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "./assets/AboutUs/model.JPG",
  "./assets/AboutUs/machine1.JPG",
  "./assets/AboutUs/model1.JPG",
  "./assets/AboutUs/machine2.JPG",
  "./assets/AboutUs/model2.JPG",
  "./assets/AboutUs/machine3.JPG",
  "./assets/AboutUs/model3.JPG",
  "./assets/AboutUs/assembly.png",
  "./assets/AboutUs/quality-inspect.png",
];

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <section className="aboutus-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Overview</h1>
          <p>
            HS Aerosystem Sdn. Bhd is where expertise meets aerospace
            excellence.
          </p>
        </div>
      </section>

      <div className="aboutus-section">
        <div className="aboutus-wrapper">
          <h1>Redefining Aviation Solutions</h1>
          <p>Company Profile</p>

          <div className="aboutus-desc">
            <p>
              <strong>HS Aerosystem Sdn. Bhd., </strong> incorporated in
              Malaysia on 14 February 2024, is dedicated to advancing the
              aerospace industry through the manufacturing of precision
              components, assemblies, and innovative engineering solutions.
            </p>

            {/* --- CAROUSEL START --- */}
            <div className="simple-carousel">
              <Swiper
                className="simple-swiper"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                spaceBetween={20}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="simple-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* --- CAROUSEL END --- */}

            <p>
              Our unwavering focus on our customers drives every decision we
              make, while our pride lies in the talent and dedication of our
              people. We draw our strength from continuous development and the
              adoption of cutting-edge technology and innovation, ensuring
              operational excellence at every stage. Guided by a strong sense of
              responsibility, we remain conscious of the influence and impact we
              have on the society and environment in which we operate.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
