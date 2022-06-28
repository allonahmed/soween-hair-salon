import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleryImages } from "../components/gallery.assets";

import "../styles/gallery/gallery.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectCube
} from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay, EffectCube]);

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  console.log(galleryImages);

  return (
    <div className="gallery" id="gallery">
      <div className="gallery-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff"
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          autoplayspeed={3000}
          thumbs={{ swiper: thumbsSwiper }}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }}
          // pagination={true}
          className="mySwiper2"
        >
          {galleryImages.map((each, index) => (
            <SwiperSlide key={index}>
              <img
                src={each}
                alt="sample"
                style={{ borderRadius: "15px", border: "2px solid white" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {galleryImages.map((each, index) => (
            <SwiperSlide key={index}>
              <img src={each} alt="sample" style={{ borderRadius: "8px" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div top className="gallery-info">
        <h4>Gallery</h4>
        <h3>
          At Soween Hair Salon, we offer a large variety of hair styles to suit
          the needs of our customers. From braids and twists, to weaves and
          locks, we do it all. View our gallery to see some of our work!
        </h3>

        <button>
          {" "}
          <a
            href="https://go.booker.com/location/SoweenHairSalon/service-menu"
            target="_blank"
          >
            Book Your Visit{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
