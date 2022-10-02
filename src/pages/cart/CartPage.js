import classes from "./CartPage.module.css";

import React, { useEffect } from "react";
import PageLayout from "../../components/ui/page-layout/PageLayout";
import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";
import Checkout from "./checkout/Checkout";

const CartPage = () => {
  const cartState = useSelector((state) => {
    return state.cart;
  });

  return (
    <PageLayout>
      <div className={classes["page-container"]}>
        <div className={classes["cart-container"]}>
          <h1
            className={classes.title}
          >{`Cart (${cartState.totalProductAmount})`}</h1>
          {cartState.totalProductAmount > 0 ? (
            <div className={classes.header}>
              <div className={classes.item}>Item</div>
              <div className={classes.price}>Price</div>
              <div>Amount</div>
              <div>Total</div>
              <div className={classes.remove}>Remove</div>
            </div>
          ) : (
            <div className={classes["header-empty"]}>
              <h3>Your cart is currently empty.</h3>
              <p>
                Search the current offer, choose the desired products and
                continue your shopping.
              </p>
            </div>
          )}
          <div className={classes["items-container"]}>
            {cartState.products.map((product) => {
              return (
                <CartItem
                  product={product}
                  total={`${(
                    product.price * product.amount
                  ).toLocaleString()} ${"$"}`}
                ></CartItem>
              );
            })}
          </div>
        </div>
        <Checkout cart={cartState}></Checkout>
      </div>
    </PageLayout>
  );
};

export default CartPage;
