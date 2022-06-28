import react from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBook,
  faLocationArrow,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/footer/footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="social-links">
        <ul>
          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.facebook.com/Soween-Hair-Salon-1343601922414087/"
            >
              <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.instagram.com/soweenhairsalon/?hl=en"
            >
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.google.com/search?hl=en-US&gl=us&q=Soween+Hair+Salon,+466+Nostrand+Ave.,+Brooklyn,+NY+11216&ludocid=15547820761126155072&lsig=AB86z5VOQ4sHvv8IL67p5_TkCvyx&hl=en&gl=US"
            >
              <i className="fa fa-google fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className="social-link"
              target="_blank"
              href="mailto: soweenbusiness@gmail.com"
            >
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.youtube.com/channel/UC8qBnSt-tmnKGISvnMHq6EA"
            >
              <i className="fa fa-youtube fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-info">
        <div className="footer-links">
          <h4>Links</h4>
          <Link className="nav-item" smooth to="#home">
            Top of Page
          </Link>
          <Link smooth to="#gallery" className="nav-item">
            Gallery
          </Link>
          <Link className="nav-item" smooth to="#renovations">
            Renovations
          </Link>

          <Link className="nav-item" smooth to="#reviews">
            Reviews
          </Link>
          <Link className="nav-item" smooth to="#contact">
            Contact Us{" "}
          </Link>
        </div>
        <div className="footer-logo">
          {" "}
          <div className="footer-logo-wrapper">
            <div className="logo">SHS</div>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact/Business Info</h4>
          <div className="contact-container">
            <FontAwesomeIcon icon={faLocationArrow} className="icon" />
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//Soween+Hair+Salon+466+Nostrand+Ave.+Brooklyn,+NY+11216/@40.6828979,-73.9503329,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25b7e05dc867b:0xd7c4f49b3a5e3340!2m2!1d-73.9503329!2d40.6828979"
            >
              {" "}
              466 Nostrand Avenue
            </a>
          </div>
          <div className="contact-container">
            <FontAwesomeIcon icon={faPhone} className="icon" />

            <a href="tel:718-789-2655">+1 (718) 789-2655</a>
          </div>
          <div className="contact-container">
            <i className="fa fa-envelope icon"></i>
            <a target="_blank" href="mailto: soweenbusiness@gmail.com">
              soweenbusiness@gmail.com
            </a>
          </div>
          <div className="contact-container">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <a href="#" style={{ cursor: "default", textDecoration: "none" }}>
              10am - 7pm
            </a>
          </div>
          <div className="contact-container">
            <FontAwesomeIcon icon={faBook} className="icon" />
            <a href="https://go.booker.com/location/SoweenHairSalon">
              https://go.booker.com/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
