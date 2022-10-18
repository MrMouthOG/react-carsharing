import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async function () {
    const { data } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/cars');

    return data;
  }
);

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: []
  },
  reducers: {},
  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { reloadCars } = carsSlice.actions;
export default carsSlice.reducer;