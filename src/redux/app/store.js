import { configureStore } from "@reduxjs/toolkit";
import customizationReducer from "store/customizationReducer";

export const store = configureStore({
  reducer: {
    customization: customizationReducer
  }
});
