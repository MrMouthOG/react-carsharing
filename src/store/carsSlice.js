import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
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
});

export const { setCarsList, setRentedCarsList } = carsSlice.actions;
export default carsSlice.reducer;