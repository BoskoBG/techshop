import React from "react";
import classes from "./CustomDots.module.css";

const CustomDots = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;

  //   const carouselItems = [1, 2, 3];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={`${classes.btn} ${active && classes.active} `}
      onClick={() => onClick()}
    >
      {/* {React.Children.toArray(carouselItems)[index]} */}
    </button>
  );
};

export default CustomDots;
