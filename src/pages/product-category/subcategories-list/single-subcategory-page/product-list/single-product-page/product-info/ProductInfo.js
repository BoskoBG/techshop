import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../../../store/cart";
import classes from "./ProductInfo.module.css";

const ProductInfo = ({ product, name, price, description }) => {
  const dispatch = useDispatch();

  const onAddToCartHander = () => {
    dispatch(cartActions.addProductToCart({ ...product }));
  };
  // ********!!!!!!!!!!!!!!!!!!!!

  // !!!!!!!!!!!!!!
  return (
    <div className={classes["info-container"]}>
      <h2>{name}</h2>
      <h1>{price + ".99" + " " + "$"}</h1>
      <div className={classes.description}>
        {description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
      <button className={classes.btn} onClick={onAddToCartHander}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfo;
