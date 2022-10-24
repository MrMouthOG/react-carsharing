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

export const sendRentCar = createAsyncThunk(
  'cars/sendRentCar',
  async function (car, { rejectWithValue, dispatch }) {
    try {
      const { status, statusText } = await axios.put(`https://634d1979f5d2cc648e9c558d.mockapi.io/cars/${car.id}`, car);

      if (statusText !== 'OK') {
        throw new Error(`Error server, status: ${status}`);
      }

      dispatch(rentCar(car));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const sendCancelRentCar = createAsyncThunk(
  'cars/sendCancelRentCar',
  async function (car, { rejectWithValue, dispatch }) {
    try {
      const { status, statusText } = await axios.put(`https://634d1979f5d2cc648e9c558d.mockapi.io/cars/${car.id}`, car);

      if (statusText !== 'OK') {
        throw new Error(`Error server, status: ${status}`);
      }

      dispatch(cancelCarRent(car));
    } catch (error) {
      return rejectWithValue(error);
    }
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
    cancelCarRent(state, action) {
      state.rentedCars = state.rentedCars.filter(item => item.id !== action.payload.id);
    },
    rentCar(state, action) {
      state.cars = state.cars.filter(item => item.id !== action.payload.id);
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
    },
  }
});

export const { cancelCarRent, rentCar } = carsSlice.actions;
export default carsSlice.reducer;