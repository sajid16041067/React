import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./reducers/BlogReducers";

export const store = configureStore({
  reducer: {
    blogs: BlogReducer,
  },
});
