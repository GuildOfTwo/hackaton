import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsOpened: false,
    title: "",
    status: null
  },

  reducers: {
    openModal(state, action) {
      state.modalIsOpened = true;
      state.title = action.payload.text;
      state.status = action.payload.status
    },
    closeModal(state, action) {
      state.modalIsOpened = false;
      state.error = false;
      state.success = false;
      state.title = "";
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
