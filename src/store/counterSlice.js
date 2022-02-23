import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    showCount(state) {
      state.show = !state.show;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
