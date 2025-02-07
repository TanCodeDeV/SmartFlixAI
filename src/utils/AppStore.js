import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Correct import
import movie20TopReducer from "./Movie250TopSlice";
import GPTSuggestionReducer from "./GPTSuggestionSlice";
import ConfigReducer from "./ConfigSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movie20TopReducer,
    GPTSuggestion: GPTSuggestionReducer,
    config: ConfigReducer,
  },
});

export default AppStore;
