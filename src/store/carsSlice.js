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
    [fetchCars.pending]: (state, action) => {
      console.log('Список автомобилей загружается');
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
    [fetchCars.rejected]: (state, action) => {
      console.log("Произошла ошибка при загрузке списка автомобилей");
    }
  },
});

export default carsSlice.reducer;