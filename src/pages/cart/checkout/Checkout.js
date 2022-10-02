import React from "react";
import classes from "./Checkout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";

const Checkout = ({ cart }) => {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      {cart.totalProductAmount <= 0 && (
        <Link to="/">
          <button className={classes.btn}>Search for products</button>
        </Link>
      )}
      <div className={classes["checkout-container"]}>
        <div className={classes.header}>
          <h2>Checkout</h2>
        </div>
        <div className={classes["order-summary"]}>
          <div className={classes["summary-detail"]}>
            <p>{`Products amount:`}</p>
            <div>{cart.totalProductAmount}</div>
          </div>
          {cart.totalProductAmount > 0 && (
            <div className={classes["summary-detail"]}>
              <p>{`Shipping fee:`}</p>
              <div>0</div>
            </div>
          )}
          <div className={classes["summary-detail"]}>
            <p>{`Total:`}</p>
            <div>{`${cart.totalPrice.toLocaleString("en-US")} $`}</div>
          </div>
        </div>
        <div className={classes["order-total"]}>
          <h2>Order Total:</h2>
          <div>{`${cart.totalPrice.toLocaleString("en-US")} $`}</div>
        </div>
      </div>
      {cart.totalProductAmount > 0 &&
        (!isLoggedIn ? (
          <button
            className={classes.btn}
            onClick={() => {
              navigate("/login");
              dispatch(cartActions.setReadyToBuy(true));
            }}
          >
            Login
          </button>
        ) : (
          <button className={classes.btn}>Order Products</button>
        ))}
    </div>
  );
};

export default Checkout;
