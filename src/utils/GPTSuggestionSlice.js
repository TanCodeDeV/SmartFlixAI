import { createSlice } from "@reduxjs/toolkit";

const GPTSuggestionSlice = createSlice({
  name: "GPTSuggestion",
  initialState: {
    ShowGPTSuggestion: false,
    movieName: null,
    movieResult: null,
  },

  reducers: {
    addGPTSuggestionToggle: (state) => {
      state.ShowGPTSuggestion = !state.ShowGPTSuggestion;
    },
    addGPTMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { addGPTSuggestionToggle, addGPTMovieResult } =
  GPTSuggestionSlice.actions;
export default GPTSuggestionSlice.reducer;
