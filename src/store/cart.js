import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  products: [],
  totalProductAmount: 0,
  totalPrice: 0,
  readyToBuy: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProductToCart(state, action) {
      const productInCart = state.products.some(
        (product) => product.productId === action.payload.productId
      );
      console.log(productInCart, action.payload.productId);

      if (!productInCart) {
        state.products = [...state.products, { ...action.payload, amount: 1 }];
        state.totalProductAmount++;
        state.totalPrice += action.payload.price;
      } else {
        const existingProduct = state.products.find(
          (product) => product.productId === action.payload.productId
        );
        existingProduct.amount++;
        state.totalProductAmount++;
        state.totalPrice += existingProduct.price;
      }
    },
    decreaseProductAmount(state, action) {
      if (state.totalProductAmount <= 1) {
        state.products = [];
        state.totalProductAmount = 0;
        state.totalPrice = 0;
      } else {
        const removedProduct = state.products.find(
          (product) => product.productId === action.payload.productId
        );
        console.log(removedProduct.amount);
        if (removedProduct.amount <= 1) {
          state.products = state.products.filter(
            (product) => product.productId !== removedProduct.productId
          );
        } else {
          removedProduct.amount--;
        }
        state.totalProductAmount--;
        state.totalPrice -= removedProduct.price;
      }
    },
    removeProductFromCart(state, action) {
      console.log(action.payload);
      const removedProduct = state.products.find(
        (product) => product.productId === action.payload
      );
      state.products = state.products.filter(
        (product) => product.productId !== removedProduct.productId
      );
      state.totalProductAmount -= removedProduct.amount;
      state.totalPrice -= removedProduct.price * removedProduct.amount;
    },
    emptyCart(state) {
      state.products = [];
      state.totalProductAmount = 0;
      state.totalPrice = 0;
      state.readyToBuy = false;
    },
    setReadyToBuy(state, action) {
      state.readyToBuy = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
