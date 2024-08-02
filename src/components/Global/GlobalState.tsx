import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  toggle: false,
};

const GlobalState: any = createSlice({
  name: "second",
  initialState,
  reducers: {
    userInfo: (state: any, { payload }: any) => {
      state.user = payload;
    },
    onToggle: (state) => {
      state.toggle = !state.toggle;
    },
    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const { userInfo, onToggle, logOut } = GlobalState.actions;

export default GlobalState.reducer;