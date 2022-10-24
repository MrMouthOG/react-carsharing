import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async function () {
    const { data, status, statusText } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/cars?isRent=false');

    if (statusText !== 'OK') {
      throw new Error(`Error server, cars doesnt download, status: ${status}`);
    }

    return data;
  }
)

export const fetchRentedCars = createAsyncThunk(
  'cars/fetchRentedCars',
  async function () {
    const { data, status, statusText } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/cars?isRent=true');

    if (statusText !== 'OK') {
      throw new Error(`Error server, rented cars doesnt download, status: ${status}`);
    }

    return data;
  }
)

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isError: false,
    isLoading: false,
    rentedCars: [],
  },
  reducers: {
    setCarsList(state, action) {
      state.cars = action.payload;
    },
    setRentedCarsList(state, action) {
      state.rentedCars = action.payload;
    },
    cancelCarRent(state, action) {
      state.rentedCars = state.rentedCars.filter(item => item.id !== action.payload);
    }
  },
  extraReducers: {
    [fetchCars.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    },
    [fetchCars.rejected]: (state, action) => {
      state.isError = true;
    },
    [fetchRentedCars.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchRentedCars.fulfilled]: (state, action) => {
      state.rentedCars = action.payload;
      state.isLoading = false;
    },
    [fetchRentedCars.rejected]: (state, action) => {
      state.isError = true;
    }
  }
});

export const { setCarsList, setRentedCarsList } = carsSlice.actions;
export default carsSlice.reducer;