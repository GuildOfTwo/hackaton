import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
// import authSlice from "./authSlice";
// import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    cards: dataSlice,
    // auth: authSlice,
    // modal: modalSlice
  },
});