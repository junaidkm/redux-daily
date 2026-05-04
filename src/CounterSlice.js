import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },
    division(state, action) {
      state.count / action.payload;
    },
    multiplication(state, action) {
      state.count *= action.payload;
    },
    decrement(state ,action) {
      state.count -= action.payload;
    },

    reset(state) {
      state.count = 0;
    }
  }
});

export const {division,multiplication, increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;