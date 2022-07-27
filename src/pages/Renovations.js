import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/renovations/renovations.css";
import video from "../media/videos/1080p.mov";

const playIcon = (
  <div className="play-wrapper">
    <i className="play-icon fa fa-play" />
  </div>
);

const Renovations = () => {

  const [style, setStyle] = useState({ display: "block" });

  return (
    <div className="renovations" id="renovations">
      <div className="inovations-info">
        <h4>Renovations</h4>
        <h3>
          Located in the heart of BedStuy, we recently underwent renovations to
          improve the quality of the Soween experience. The modern and sleek new
          look has made it a must visit!
        </h3>
        <button>
          {" "}
          <a
            href="https://go.booker.com/location/SoweenHairSalon/service-menu"
            target="_blank"
            rel='noreferrer'
          >
            Book Your Visit{" "}
          </a>
        </button>
      </div>
      <div className="inovations-video">
        <div className="player-wrapper">
          <ReactPlayer
            onClickPreview={() => {
              setStyle({ display: "block" });
            }}
            className="react-player"
            url={video}
            controls={true}
            playIcon={playIcon}
            playsinline
            pip={true}
            stopOnUnmount={false}
            width="100%"
            height="100%"
            style={style}
          />
        </div>
      </div>
    </div>
  );
};

export default Renovations;
