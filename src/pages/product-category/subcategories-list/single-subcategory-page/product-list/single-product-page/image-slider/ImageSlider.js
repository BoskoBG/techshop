import React from "react";
import { useState } from "react";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(product.images[0]);

  const changeCurrentImg = (index) => {
    return setCurrentImg(product.images[index]);
  };

  return (
    <div className={classes.container}>
      <div className={classes["img-slider"]}>
        {product.images.map((img, i) => {
          return (
            <div
              key={i}
              className={classes.img}
              onClick={changeCurrentImg.bind(this, i)}
            >
              <img src={img}></img>
            </div>
          );
        })}
      </div>
      <div className={classes["current-img-container"]}>
        <img src={currentImg}></img>
      </div>
    </div>
  );
};

export default ImageSlider;
