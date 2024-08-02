import { configureStore } from "@reduxjs/toolkit";
import { userInfo } from "./GlobalState";


export const store = configureStore({
    reducer: {
        change: userInfo,
    },
});