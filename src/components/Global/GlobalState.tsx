// reducers/authReducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    userInfo: (state, { payload }) => {
      state.user = payload;
    },
    onToggle: (state) => {
      state.toggle = !state.toggle;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { userInfo, onToggle, logOut } = GlobalState.actions;
export default GlobalState.reducer;
