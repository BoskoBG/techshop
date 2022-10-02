import React from "react";
import CustomCheckbox from "../../../../../../../components/ui/custom-checkbox/CustomCheckbox";
import classes from "./FilterDropdown.module.css";

const FilterDropdown = (props) => {
  console.log(props.categories);
  return (
    <div className={classes.dropdown}>
      {props.categories.map((category) => {
        return (
          <div className={classes.category}>
            {category} <CustomCheckbox value={category}></CustomCheckbox>
          </div>
        );
      })}
    </div>
  );
};

export default FilterDropdown;
