import React, { useCallback, useState } from "react";
import classes from "./SingleSubcategoryListItem.module.css";

const SingleSubcategoryListItem = (props) => {
  const [nameClass, setNameClass] = useState(`${classes.name}`);

  const addClassOnEnter = () => {
    setNameClass(`${classes.name} ${classes.active}`);
  };
  const removeClassOnLeave = () => {
    setNameClass(`${classes.name}`);
  };

  return (
    <li
      className={classes.item}
      onMouseEnter={addClassOnEnter}
      onMouseLeave={removeClassOnLeave}
    >
      <img src={props.img}></img>
      <div className={classes["img-overlay"]}></div>
      <div className={nameClass}>
        <h3>{props.name}</h3>
      </div>
    </li>
  );
};

export default SingleSubcategoryListItem;
