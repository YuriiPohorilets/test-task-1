import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { articlesApi } from "./articlesSlice";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    articlesApi.middleware,
  ],
});
