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

export const toggleUserToken = createAsyncThunk(
  'users/toggleUserToken',
  async function (user, { rejectWithValue, dispatch }) {
    try {
      const { status, statusText } = await axios.put(`https://634d1979f5d2cc648e9c558d.mockapi.io/users/${user.id}`, user);

      if (statusText !== 'OK') {
        throw new Error(`Server error, user doesnt update, status: ${status}`);
      }

      if (user?.isAuth) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(removeCurrentUser());
      }
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
    [fetchUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [fetchUserList.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [toggleUserToken.rejected]: (state, action) => {
      state.isError = action.payload;
    }
  }
});

export const { setCurrentUser, removeCurrentUser, setUsersList } = usersSlice.actions;
export default usersSlice.reducer;