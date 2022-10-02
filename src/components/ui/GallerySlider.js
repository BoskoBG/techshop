import React from "react";
import classes from "./GallerySlider.module.css";

const GallerySlider = () => {
  return (
    <div className={classes.gallery}>
      <div className={classes["gallery-container"]}> 
      </div>
      <div className={classes["gallery-controls"]}></div>
    </div>
  );
};

export default GallerySlider;
