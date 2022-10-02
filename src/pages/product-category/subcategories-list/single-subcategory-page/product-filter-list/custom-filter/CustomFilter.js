import React, { useState } from "react";
import classes from "./CustomFilter.module.css";
import { BiChevronUp, BiRefresh } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import FilterDropdown from "./filter-dropdown/FilterDropdown";

const CustomFilter = (props) => {
  const [filterActive, setFitlerActive] = useState(false);

  const toggleFilterHandler = () => {
    setFitlerActive(!filterActive);
  };

  const filterType = props.type
    ? props.type
        .split(/(?=[A-Z])/)
        .map((wrd) => {
          return wrd[0].toUpperCase() + wrd.substring(1);
        })
        .join(" ")
    : null;

  console.log(props.filterCategories);

  if (props.heading)
    return (
      <div className={`${classes.filter} ${classes.heading}`}>
        <div className={classes.type}>Filters</div>
        <span className={classes["refresh-icon"]}>
          {<BiRefresh></BiRefresh>}
        </span>
      </div>
    );

  return (
    <div className={classes["filter-box"]}>
      <div
        className={!filterActive ? classes.filter : classes["filter-active"]}
        onClick={toggleFilterHandler}
      >
        <span className={classes["chevron-icon"]}>
          {!filterActive ? (
            <BiChevronDown></BiChevronDown>
          ) : (
            <BiChevronUp></BiChevronUp>
          )}
        </span>
        <div className={classes.type}>
          {/* {props.type === "price" && "Price"} */}
          {filterType}
        </div>
      </div>
      {filterActive && (
        <FilterDropdown
          type={props.type}
          categories={props.filterCategories}
        ></FilterDropdown>
      )}
    </div>
  );
};

export default CustomFilter;
