import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/renovations/renovations.css";
import video from "../media/videos/1080p.mov";
import thumb from "../media/photos/videothumbnail.png";

const Renovations = () => {
  const playIcon = (
    <div className="play-wrapper">
      <i className="play-icon fa fa-play" />
    </div>
  );
  // const playIcon = <FontAwesomeIcon icon={faPlay} className="play-icon" />;
  const thumbnail = <img className="thumb" src={thumb} alt="thumbnail" />;
  const [style, setStyle] = useState({ display: "block" });
  return (
    <div className="renovations" id="renovations">
      <div className="inovations-info">
        <h4>Renovations</h4>
        <h3>
          Located in the heart of BedStuy, recently underwent renovations to
          improve the quality of the Soween experience. The modern and sleek new
          look has made it a must visit!
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
          />
        </div>
      </div>
    </div>
  );
};

export default Renovations;
