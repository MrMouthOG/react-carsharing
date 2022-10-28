import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async function (_, { rejectWithValue }) {
    try {
      const { data, status, statusText } = await axios.get(`https://634d1979f5d2cc648e9c558d.mockapi.io/cars?isRent=false`);

      if (statusText !== 'OK') {
        throw new Error(`Error server, cars doesnt get, status: ${status}`);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const fetchRentedCars = createAsyncThunk(
  'cars/fetchRentedCars',
  async function (_, { rejectWithValue }) {
    try {
      const { data, status, statusText } = await axios.get(`https://634d1979f5d2cc648e9c558d.mockapi.io/cars?isRent=true`);

      if (statusText !== 'OK') {
        throw new Error(`Error server, rented cars doesnt get, status: ${status}`);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
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

export const sendCar = createAsyncThunk(
  'cars/sendCar',
  async function (car, { rejectWithValue, dispatch }) {
    try {
      const { status, statusText } = await axios.post('https://634d1979f5d2cc648e9c558d.mockapi.io/cars', car); //no-serialized???

      if (statusText !== 'OK') {
        throw new Error(`Error server, car doesnt put, stauts: ${status}`);
      }

      dispatch(addCar(car));
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
    },
    addCar(state, action) {
      state.cars.push(action.payload);
    }
  },
  extraReducers: {
    [fetchCars.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    },
    [fetchCars.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [fetchRentedCars.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRentedCars.fulfilled]: (state, action) => {
      state.rentedCars = action.payload;
      state.isLoading = false;
    },
    [fetchRentedCars.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [sendRentCar.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [sendCancelRentCar.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [sendCar.rejected]: (state, action) => {
      state.isError = action.payload;
    }
  }
});

export const { cancelCarRent, rentCar, addCar } = carsSlice.actions;
export default carsSlice.reducer;