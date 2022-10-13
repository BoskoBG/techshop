import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import classes from "./DropProductItem.module.css";

const DropProductItem = ({ type, image, name, price }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={image}></img>
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>
        {price} $
        {type === "favourites" && (
          <BsBookmarkFill className={classes.bookmark}></BsBookmarkFill>
        )}
      </div>
    </div>
  );
};

export default DropProductItem;
