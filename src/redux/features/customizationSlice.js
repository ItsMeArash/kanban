import { createSlice } from "@reduxjs/toolkit";
import config from "../../config";

export const customizationSlice = createSlice({
  name: "customization",
  initialState: {
    isOpen: [],
    defaultId: "default",
    isDark: false,
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
  },
  reducers: {
    menuOpen: (state, action) => {
      const id = action.payload;
      state.isOpen = [id];
    },
    setMenu: (state, action) => {
      state.opened = action.payload;
    },
    setDark: (state, action) => {
      state.isDark = action.payload;
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    }
  }
});

export const { menuOpen, setMenu, setDark, setFontFamily, setBorderRadius } = customizationSlice.actions;

export default customizationSlice.reducer;
