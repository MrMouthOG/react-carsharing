import { configureStore } from "@reduxjs/toolkit";

import carsReducer from './carsSlice';
import usersReducer from "./usersSlice";
import searchReducer from './searchSlice';

export default configureStore({
  reducer: {
    cars: carsReducer,
    users: usersReducer,
    search: searchReducer,
  }
})