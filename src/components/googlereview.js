import React, { useState } from "react";
import "../styles/reviews/reviews.css";
import TimeSince, { addStars } from "./review.assets";

//on error resolved: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror

const GoogleReview = (props) => {
  const [time, setTime] = useState(TimeSince(props.time));
  return (
    <a href={props.link} className="review-component" target="_blank">
      <div className="google-header">
        <img
          className="google-img"
          src={props.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max";
          }}
          alt="google-profile"
        />
        <div className="google-name"> {props.name}</div>

        <div className="google-stars"> {addStars(props.stars)}</div>
      </div>
      <div className="review"> {props.review}</div>
      <div className="google-footer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
        <div className="google-time"> {time}</div>
      </div>
    </a>
  );
};

export const GoogleReview1 = (props) => {
  const [time, setTime] = useState(TimeSince(props.time));
  return (
    <div className="review-component1">
      {" "}
      <div className="google-header1">
        <img
          className="google-img1"
          src={props.image}
          alt="google-profile"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max";
          }}
        />
        <div className="google-stars1"> {addStars(props.stars)}</div>
        {/* <div className="google-name1"> {props.name}</div> */}
      </div>
      <div className="review1"> {props.review}</div>
      <div className="google-footer1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
        <div className="google-time1"> {time}</div>
      </div>
    </div>
  );
};

export default GoogleReview;
