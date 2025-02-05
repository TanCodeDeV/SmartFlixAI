import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Correct import
import movie20TopReducer from "./Movie250TopSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movie20TopReducer,
  },
});

export default AppStore;
