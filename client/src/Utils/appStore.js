import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import configReducer from "./configSlice";
import gptReducer from "./gptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    config: configReducer,
    gpt: gptReducer,
  },
});

export default store;
