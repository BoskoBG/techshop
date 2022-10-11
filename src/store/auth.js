import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = JSON.parse(localStorage.getItem("auth")) || {
  isLoggedIn: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.removeItem("auth");
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    addToFavourites(state, action) {
      state.currentUser.favourites = state.currentUser.favourites
        ? [...state.currentUser.favourites, action.payload]
        : [action.payload];
    },
    removeFromFavourites(state, action) {
      state.currentUser.favourites = state.currentUser.favourites.filter(
        (favProd) => favProd.productId !== action.payload
      );
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
