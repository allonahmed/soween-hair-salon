import React from "react";
import { Images, Videos } from "../media/africanBraids/media";

const AfricanBraids = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.45)",
        paddingTop: "18vh",
        color: "white"
      }}
    >
      <h4>African Hair Braiding Gallery</h4>
      <h3 style={{ width: "80%" }}>
        View our extensive gallery of Soween's specialty hair style, the African
        Braids. Featured in magizines, with hundreds of happy customers, you
        will not be dissapointed!
      </h3>
      {Images.map((image, id) => {
        return (
          <img
            key={id}
            src={image}
            style={{ width: "80%", margin: "10px", border: " 1px solid white" }}
          />
        );
      })}
    </div>
  );
};

export default AfricanBraids;
