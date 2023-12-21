import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import configReducer from "./configSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    config: configReducer,
  },
});

export default store;
