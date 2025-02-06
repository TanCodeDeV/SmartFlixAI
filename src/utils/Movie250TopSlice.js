import { createSlice } from "@reduxjs/toolkit";

const Movie250TopSlice = createSlice({
  name: "movies",
  initialState: {
    top250Movies: null,
    topBoxOfficeUs: null,
    mostPopularMovies: null,
  },
  reducers: {
    addTop250Movies: (state, action) => {
      state.top250Movies = action.payload;
    },
    addTopBoxOfficeUs: (state, action) => {
      state.topBoxOfficeUs = action.payload;
    },
    addMostPopularMovies: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
  },
});

export const { addTop250Movies, addTopBoxOfficeUs, addMostPopularMovies } =
  Movie250TopSlice.actions;
export default Movie250TopSlice.reducer;
