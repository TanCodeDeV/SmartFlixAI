import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const ConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    addChangeLangauge: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addChangeLangauge } = ConfigSlice.actions;
export default ConfigSlice.reducer;
