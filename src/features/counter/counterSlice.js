import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  loading: false, // Add loading state
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    // New loading-related reducers
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  startLoading,
  stopLoading,
} = counterSlice.actions;

// Async action creator that uses the loading reducers
export const incrementAsync = (amount) => (dispatch) => {
  dispatch(startLoading());
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
    dispatch(stopLoading());
  }, 1000); // Simulating an asynchronous operation
};

export default counterSlice.reducer;
