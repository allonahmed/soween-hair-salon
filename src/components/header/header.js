import React, { useState } from "react";
import "../../styles/header/header.css";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [clicked, isClicked] = useState(false);
  const [headerBg, changeBg] = useState("transparent");
  const handleClick = () => {
    isClicked(!clicked);
  };

  const Navigation = (props) => {
    return (
      <nav className="nav">
        <Link
          smooth
          to="#gallery"
          className="nav-item"
          onClick={props.function}
        >
          Gallery
        </Link>
        <Link
          className="nav-item"
          smooth
          to="#renovations"
          onClick={props.function}
        >
          Renovations
        </Link>
        <NavLink
          to="/african-braids"
          className="nav-item"
          // onClick={props.function}
        >
          African Braids
        </NavLink>
        <Link
          className="nav-item"
          smooth
          to="#reviews"
          onClick={props.function}
        >
          Reviews
        </Link>
        <Link
          className="nav-item"
          smooth
          to="#contact"
          onClick={props.function}
        >
          Contact Us{" "}
        </Link>
        <a
          href="https://www.google.com/maps/dir//Soween+Hair+Salon+466+Nostrand+Ave.+Brooklyn,+NY+11216/@40.6828979,-73.9503329,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25b7e05dc867b:0xd7c4f49b3a5e3340!2m2!1d-73.9503329!2d40.6828979"
          target="_blank"
          className="nav-item visit-link"
          onClick={props.function}
        >
          Visit our store{" "}
        </a>
      </nav>
    );
  };

  window.addEventListener("scroll", () => {
    if ((clicked === true && window.scrollY !== 0) || window.scrollX !== 0) {
      isClicked(false);
    }
    if (window.scrollY !== 0 || window.scrollX !== 0) {
      changeBg("rgba(9, 9, 9, 1)");
    } else if (window.scrollY == 0) {
      changeBg("transparent");
    }
  });

  return (
    <div
      className="header"
      style={{ background: clicked ? "rgba(9, 9, 9, 1)" : headerBg }}
      onScroll={() => {
        isClicked(true);
      }}
    >
      <div className="header-start">
        <ul>
          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.facebook.com/Soween-Hair-Salon-1343601922414087/"
            >
              <i
                className="fa fa-facebook fa-2x"
                aria-hidden="true"
                style={
                  {
                    // color: headerBg === "transparent" ? "black" : "white"
                  }
                }
              ></i>
            </a>
          </li>

          <li>
            <a
              className="social-link"
              target="_blank"
              href="https://www.instagram.com/soweenhairsalon/?hl=en"
            >
              <i
                className="fa fa-instagram fa-2x"
                aria-hidden="true"
                style={
                  {
                    // color: headerBg === "transparent" ? "black" : "white"
                  }
                }
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <header>
        <a href="/" className="main-heading">
          <span
            style={{
              textShadow: clicked
                ? "none"
                : headerBg === "transparent"
                ? "0 0 3px #fff"
                : "none",
              color: clicked
                ? "white"
                : headerBg === "transparent"
                ? "black"
                : "white"
            }}
          >
            SOW
          </span>
          EEN
        </a>
        <a href="#home" className="sub-heading">
          <span
            style={{
              textShadow: clicked
                ? "none"
                : headerBg === "transparent"
                ? "0 0 3px #fff"
                : "none",
              color: clicked
                ? "white"
                : headerBg === "transparent"
                ? "black"
                : "white"
            }}
          >
            Natural H
          </span>
          air Salon
        </a>
      </header>
      <div className="header-end">
        <a
          className="book-link"
          target="_blank"
          href="https://go.booker.com/location/SoweenHairSalon/service-menu"
          alt="link to booker"
        >
          Book Now
        </a>
        <button
          className="nav-button"
          onClick={() => {
            isClicked(!clicked);
          }}
        >
          <i className={!clicked ? "fa fa-bars" : "fa fa-times"}></i>
        </button>
      </div>
      {clicked ? <Navigation function={handleClick} /> : ""}
    </div>
  );
};

export default Header;
