import React from "react";
import classes from "./CustomCheckbox.module.css";
import { Checkbox } from "@mui/material";

const CustomCheckbox = (props) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>
        <Checkbox
          className={classes.checkbox}
          disableRipple
          sx={{
            marginRight: "10px",
            padding: 0,
            color: "lightgrey",
            "&.Mui-checked": {
              color: "black",
            },
          }}
        ></Checkbox>
        {props.label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
