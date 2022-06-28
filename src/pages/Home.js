import "../styles/home/home.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { homeImages } from "../components/gallery.assets";

// import style15 from "../media/photos/style15.JPG";

const Home = () => {
  const properties = {
    duration: 4000,
    autoplay: true,
    transitionDuration: 100,
    arrows: false,
    infinite: true,
    easing: "ease-in"
  };

  return (
    <div className="home" id="home">
      <div className="home-slideshow">
        <div className="img-overlay"></div>
        <Fade {...properties} cssClass="slide">
          {homeImages.map((each, index) => (
            <div key={index} className="each-slide">
              <img className="lazy" src={each} alt="sample" />
            </div>
          ))}
        </Fade>
      </div>
      <div className="home-info">
        <h3>
          Soween Hair Salon is a black owned business, owned by Ngome Sow. Our
          goal is to provide the best haircare service for our beautiful
          clients.{" "}
        </h3>
        <div>
          <button>
            {" "}
            <a
              href="https://go.booker.com/location/SoweenHairSalon/service-menu"
              target="_blank"
            >
              Book Online{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
