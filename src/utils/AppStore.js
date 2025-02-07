import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Correct import
import movie20TopReducer from "./Movie250TopSlice";
import GPTSuggestionReducer from "./GPTSuggestionSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movie20TopReducer,
    GPTSuggestion: GPTSuggestionReducer,
  },
});

export default AppStore;
