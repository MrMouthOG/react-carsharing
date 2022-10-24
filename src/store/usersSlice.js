import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserList = createAsyncThunk(
  'users/fetchUserList',
  async function (_, { rejectWithValue }) {
    try {
      const { data, status, statusText } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/users');

      if (statusText !== 'OK') {
        throw new Error(`Server error, users dont fetched, status: ${status}`);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserByLogin = createAsyncThunk(
  'users/fetchUserByLogin',
  async function (user, { rejectWithValue }) {
    try {
      const { data, status, statusText } = await axios.get(`https://634d1979f5d2cc648e9c558d.mockapi.io/users?login=${user.login}&password=${user.password}`)

      if (statusText !== 'OK') {
        throw new Error(`Server error, user doesnt fetched, status: ${status}`);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    removeCurrentUser(state) {
      state.currentUser = null;
    },
    setUsersList(state, action) {
      state.users = action.payload;
    }
  },
  extraReducers: {
    [fetchUserList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [fetchUserList.rejected]: (state, action) => {
      state.isError = true;
    },
    [fetchUserByLogin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUserByLogin.fulfilled]: (state, action) => {
      state.currentUser = action.payload[0];
      state.isLoading = false;
    },
    [fetchUserByLogin.rejected]: (state, action) => {
      state.isError = true;
    },
  }
});

export const { setCurrentUser, removeCurrentUser, setUsersList } = usersSlice.actions;
export default usersSlice.reducer;