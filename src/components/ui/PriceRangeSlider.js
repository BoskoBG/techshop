import React from "react";
import classes from "./PriceRangeSlider.module.css";
import { Slider } from "@mui/material";

const PriceRangeSlider = (props) => {
  const onSlide = (e, values) => {
    console.log(values);
    props.onSliderChange(values[0], values[1]);
  };

  return (
    <Slider
      getAriaLabel={() => "Temperature range"}
      defaultValue={0}
      min={0}
      max={10000}
      onChange={onSlide}
      sx={{
        color: "yellow",
      }}
    />
  );
};

export default PriceRangeSlider;
