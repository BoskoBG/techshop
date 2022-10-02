import React from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import classes from "./CustomRadioGroup.module.css";

const CustomRadioGroup = () => {
  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{
          fontFamily: `"Open Sans", sans-serif`,
        }}
      >
        Gender
      </FormLabel>
      <RadioGroup
        sx={{
          color: "var(--secondary-color)",
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          sx={{
            // color: "red",
            fontWeight: "bold",
          }}
          control={
            <Radio
              sx={{
                color: "lightgray",
                fontFamily: "inherit",
              }}
            />
          }
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              sx={{
                color: "lightgray",
                fontFamily: `"Open Sans", sans-serif`,
              }}
            />
          }
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              sx={{
                color: "lightgray",
              }}
            />
          }
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
