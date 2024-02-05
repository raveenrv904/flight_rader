import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getFlights.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.flights = action.payload);
      })

      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("Something Went Wrong");
      });
  },
});

export default flightSlice.reducer;
