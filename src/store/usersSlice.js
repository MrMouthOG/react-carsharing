import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function () {
    const { data } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/users');

    return data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    removeCurrentUser(state) {
      state.currentUser = null;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: () => {
      console.log('Загрузка списка пользователей');
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [fetchUsers.rejected]: () => {
      console.log('Загрузка списка пользователей сломалась');
    }
  }
});

export const { setCurrentUser, removeCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;