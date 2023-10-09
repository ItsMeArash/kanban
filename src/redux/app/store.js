import { configureStore } from "@reduxjs/toolkit";
import customizationReducer from "../features/customizationSlice"

export const store = configureStore({
  reducer: {
    customization: customizationReducer
  }
});
