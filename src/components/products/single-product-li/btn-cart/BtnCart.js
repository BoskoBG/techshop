import React from "react";
import classes from "./BtnCart.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

const BtnCart = (props) => {
  return (
    <div className={classes.btn} onClick={props.onClick}>
      <HiOutlineShoppingBag></HiOutlineShoppingBag>
    </div>
  );
};

export default BtnCart;
