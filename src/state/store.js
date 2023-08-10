import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import todoReducer from "./redux/sliceBarangMasuk";
import GlobalReducer from "state";
import { api } from "state/api";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    global: GlobalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
