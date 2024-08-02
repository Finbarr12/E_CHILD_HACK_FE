// store.ts
import { configureStore } from "@reduxjs/toolkit";
import GlobalState from "../../components/Global/GlobalState";

export const store = configureStore({
  reducer: {
    change: GlobalState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
