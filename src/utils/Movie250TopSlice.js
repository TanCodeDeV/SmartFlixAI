import { createSlice } from "@reduxjs/toolkit";

const Movie250TopSlice = createSlice({
  name: "movies",
  initialState: {
    top250Movies: null,
  },
  reducers: {
    addTop250Movies: (state, action) => {
      state.top250Movies = action.payload;
    },
  },
});

export const { addTop250Movies } = Movie250TopSlice.actions;
export default Movie250TopSlice.reducer;
