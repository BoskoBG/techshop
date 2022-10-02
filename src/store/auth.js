import { createSlice, current } from "@reduxjs/toolkit";

const initialAuthState = {
  isLoggedIn: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
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
