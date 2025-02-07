import { createSlice } from "@reduxjs/toolkit";

const GPTSuggestionSlice = createSlice({
  name: "GPTSuggestion",
  initialState: {
    ShowGPTSuggestion: false,
  },

  reducers: {
    addGPTSuggestionToggle: (state) => {
      state.ShowGPTSuggestion = !state.ShowGPTSuggestion;
    },
  },
});

export const { addGPTSuggestionToggle } = GPTSuggestionSlice.actions;
export default GPTSuggestionSlice.reducer;
