import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  navModalOpen: false,
  searchModalOpen: { open: false },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    openNavModal(state) {
      state.navModalOpen = true;
    },
    closeNavModal(state) {
      state.navModalOpen = false;
    },
    openSearchModal(state, action) {
      state.searchModalOpen = { open: true, type: action.payload };
    },
    closeSearchModal(state) {
      state.searchModalOpen = { open: false };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
