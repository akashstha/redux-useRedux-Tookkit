import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isAuth: false,
  name: "",
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    nameupdate(state, action) {
      state.name = action.payload;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
