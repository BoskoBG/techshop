import React from "react";
import classes from "./CartItem.module.css";
import { HiOutlineTrash, HiMinus, HiPlus } from "react-icons/hi";
import { cartActions } from "../../../store/cart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const decreaseItemAmountHandler = () => {
    dispatch(cartActions.decreaseProductAmount(props.product));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addProductToCart(props.product));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeProductFromCart(props.product.productId));
  };

  return (
    <div className={classes["item-container"]}>
      <div className={classes.item}>
        <div className={classes["item-img"]}>
          <img src={props.product.image}></img>
        </div>
        <div className={classes["item-name"]}>
          <h4>{props.product.name}</h4>
        </div>
      </div>
      <div className={classes.price}>
        <h4>{`${props.product.price.toLocaleString("en-US")} $`}</h4>
      </div>
      <div>
        <div className={classes.amount}>
          <div
            className={classes["amount-icon"]}
            onClick={decreaseItemAmountHandler}
          >
            <HiMinus></HiMinus>
          </div>
          <div>{props.product.amount}</div>
          <div className={classes["amount-icon"]} onClick={addItemHandler}>
            <HiPlus></HiPlus>
          </div>
        </div>
      </div>
      <div>
        <h3>{props.total}</h3>
      </div>
      <div className={classes["remove-icon"]} onClick={removeItemHandler}>
        <HiOutlineTrash></HiOutlineTrash>
      </div>
    </div>
  );
};

export default CartItem;
