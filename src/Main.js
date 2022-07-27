import Gallery from "./pages/Gallery.js";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import Header from "./components/header/header.js";
import Renovations from "./pages/Renovations.js";
import Particles from "react-tsparticles";
import json from "./components/particle.json";
import Footer from "./components/footer /footer";
import React, { useState } from "react";

export const Main = () => {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <Header clicked={clicked} />
      <Particles
        className="particles"
        id="tsparticles"
        options={JSON.parse(json)}
      />
      <Home />
      <Renovations />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};
